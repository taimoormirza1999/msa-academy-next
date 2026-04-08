# MSA Academy Next.js Project

## Deploy
After making changes, run the atomic deploy script:
```bash
cd /root/msa-academy-next && ./scripts/deploy.sh
```
The script builds to `.next.new`, validates, atomically swaps into `.next`, restarts PM2, health-checks, and auto-rolls back on failure. Nginx cache is only purged after the new build is verified healthy. See `scripts/deploy.sh` for details.

After deploy, **manually purge Cloudflare cache**: dash.cloudflare.com → msa-club.com → Caching → Configuration → Purge Everything.
This prevents stale JS chunk 404 errors.

## Stack
- Next.js 15 (App Router) on port 3000
- MongoDB Atlas (connection string in .env)
- Nginx reverse proxy (config: /etc/nginx/sites-enabled/msa-club.com)
- PM2 process name: "MSA Academy Next"

## API Routes
- /api/blogs — list all blogs
- /api/blogs/recent-blogs — latest 10 published blogs
- /api/blogs/post/[slug] — single blog by friendly URL
- /api/mailchimp — email subscription (Mailchimp)
- /api/create-checkout-session — Stripe payments

## Important
- Server has only 1GB RAM — don't run heavy processes
- PM2 auto-start is configured via `pm2 startup`
- Cron clears logs every 6 hours (PM2 flush + journalctl vacuum + nginx logs)
- Package manager is **pnpm** (not npm)
- Cloudflare is in front of nginx — always purge both caches after deploy
- Nginx cache path: `/var/cache/nginx/`
