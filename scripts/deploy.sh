#!/usr/bin/env bash
# Atomic, rollback-safe deploy for MSA Academy Next.
#
# - Builds to .next.new (so a mid-build crash never touches the live .next)
# - Validates the new build before swapping anything live
# - Atomic mv swap, then pm2 restart
# - Health-checks via curl, auto-rolls back on failure
# - Only purges nginx cache AFTER the new build is confirmed healthy
#   (preserves nginx's proxy_cache_use_stale safety net during restart)

set -euo pipefail

APP_DIR="/root/msa-academy-next"
PM2_NAME="MSA Academy Next"
HEALTH_URL="http://127.0.0.1:3000/"
NGINX_CACHE="/var/cache/nginx"

cd "$APP_DIR"

ts()   { date +%H:%M:%S; }
log()  { echo "[deploy $(ts)] $*"; }
fail() { log "ERROR: $*"; exit 1; }

# 0. Sanity: refuse to run if PM2 process is missing
pm2 describe "$PM2_NAME" >/dev/null 2>&1 || fail "PM2 process '$PM2_NAME' not found"

# 1. Clean any leftover staging from a previous failed run
rm -rf .next.new

# 1b. Prune old rollback artifacts — keep only the most recent .next.broken.*
#     so a previous failure stays available for forensics, but they don't pile up.
shopt -s nullglob
broken=(.next.broken.*)
shopt -u nullglob
if [ "${#broken[@]}" -gt 1 ]; then
  # Sort by timestamp suffix (newest last), drop the newest, delete the rest
  IFS=$'\n' sorted=($(printf '%s\n' "${broken[@]}" | sort -t. -k3 -n))
  unset IFS
  for old in "${sorted[@]:0:${#sorted[@]}-1}"; do
    log "Pruning old rollback artifact: $old"
    rm -rf "$old"
  done
fi

# 2. Pre-seed build cache for fast incremental builds
if [ -d .next/cache ]; then
  log "Seeding incremental build cache from current .next"
  mkdir -p .next.new
  cp -a .next/cache .next.new/cache
fi

# 3. Build to staging dir (env is inline — does NOT leak into pm2 later)
log "Building to .next.new ..."
NEXT_DIST_DIR=".next.new" NODE_OPTIONS="--max-old-space-size=768" pnpm build

# 4. Validate the new build BEFORE touching anything live
[ -f .next.new/BUILD_ID ]                   || fail "Build produced no BUILD_ID"
[ -f .next.new/required-server-files.json ] || fail "Build missing required-server-files.json"
[ -d .next.new/server ]                     || fail "Build missing server/ dir"
[ -d .next.new/static ]                     || fail "Build missing static/ dir"
log "Build validated. BUILD_ID=$(cat .next.new/BUILD_ID)"

# 5. Atomic swap (mv on same filesystem is atomic + instant)
log "Swapping: .next -> .next.old, .next.new -> .next"
rm -rf .next.old
mv .next .next.old
mv .next.new .next

# 6. Restart pm2 (plain restart — does NOT pass NEXT_DIST_DIR into runtime env)
log "Restarting PM2: $PM2_NAME"
pm2 restart "$PM2_NAME" >/dev/null

# 7. Health check loop (give next start up to ~45s to come up)
#    Cold-start on this box takes ~20s for the JS server, plus a few more
#    seconds for the first AVIF transcode. 15s was too tight and caused
#    false-positive health-check failures even when the build was fine.
log "Health check..."
HEALTHY=0
for i in $(seq 1 45); do
  sleep 1
  if curl -fsS --max-time 3 -o /dev/null "$HEALTH_URL"; then
    HEALTHY=1
    log "Healthy after ${i}s"
    break
  fi
done

# 8. Auto-rollback on failure
if [ "$HEALTHY" -ne 1 ]; then
  log "HEALTH CHECK FAILED — rolling back to previous build"
  mv .next ".next.broken.$(date +%s)"
  mv .next.old .next
  pm2 restart "$PM2_NAME" >/dev/null
  # Same cold-start window applies to the rollback restart — give it ~45s.
  ROLLBACK_OK=0
  for i in $(seq 1 45); do
    sleep 1
    if curl -fsS --max-time 3 -o /dev/null "$HEALTH_URL"; then
      ROLLBACK_OK=1
      log "Rollback healthy after ${i}s — site is up on previous build. Investigate the new build."
      break
    fi
  done
  if [ "$ROLLBACK_OK" -ne 1 ]; then
    log "CRITICAL: rollback also failed. Manual intervention required."
  fi
  exit 1
fi

# 9. Only NOW purge nginx cache (upstream is verified healthy)
log "Purging nginx cache"
rm -rf "${NGINX_CACHE:?}"/*
nginx -s reload

# 10. Cleanup
log "Removing .next.old"
rm -rf .next.old

log "Deploy successful"
echo
echo "REMINDER: manually purge Cloudflare cache:"
echo "  dash.cloudflare.com -> msa-club.com -> Caching -> Configuration -> Purge Everything"
