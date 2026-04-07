# MSA Academy Next.js Project

## Deploy
After making changes, build, purge caches, and restart PM2:
```bash
cd /root/msa-academy-next && pnpm build && rm -rf /var/cache/nginx/* && nginx -s reload && pm2 restart "MSA Academy Next"
```
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
