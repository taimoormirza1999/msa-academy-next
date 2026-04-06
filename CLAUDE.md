# MSA Academy Next.js Project

## Deploy
After making changes, always build and restart PM2:
```bash
cd /root/msa-academy-next && npm run deploy
```

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
- Cron clears logs every 6 hours
