# Robel Consulting — Website

Production-ready React + Vite + Tailwind site for Robel Consulting (thesis, research & data collection consulting, Kenya).

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Editing content

All editable copy lives in `src/data/`:
- `config.js` — brand name, contact placeholders, socials, hero stats
- `services.js` — services grid + "Why Choose Us" cards
- `pricing.js` — PhD/Masters/Undergraduate packages, comparison table, data collection pricing
- `content.js` — testimonials, process steps, FAQs, quote form options

## Before going live

Search the codebase for bracketed placeholders and replace with real values:
`[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL ADDRESS]`, `[LOCATION]`, `[WORKING HOURS]`,
`[INSTAGRAM URL]`, `[LINKEDIN URL]`, `[X URL]`, `[FACEBOOK URL]`, and the `[CLIENT NAME]` /
testimonial placeholders in `src/data/content.js`.

**SEO note:** `siteUrl` in `src/data/config.js` is set to `https://robelconsulting.co.ke`
(inferred from the business email domain). If the live site is actually hosted at a
different domain or subdomain (e.g. `www.robelconsulting.co.ke`), update it there, plus the
matching URLs in `index.html` (canonical, Open Graph, Twitter, JSON-LD), `public/robots.txt`,
and `public/sitemap.xml`.

The contact form submits via formsubmit.co directly to the email in `formEndpoint`
(`src/data/config.js`). The first submission to a new address requires a one-time
confirmation click from that inbox before it starts forwarding live submissions.

## Deployment

Ready for Vercel — `vercel.json` includes an SPA rewrite so client-side routes
(`/about`, `/services`, `/pricing`, `/contact`) resolve correctly. Framework preset: Vite.

**Hostinger (or any Apache/LiteSpeed shared hosting):** upload the contents of `dist/`
(after running `npm run build`) to `public_html/`. The build includes an `.htaccess` file
that rewrites all routes to `index.html`, so refreshing or directly visiting a page like
`/about` won't 404. Make sure `.htaccess` actually uploaded — some FTP clients hide
dotfiles by default, so enable "show hidden files" before uploading.
