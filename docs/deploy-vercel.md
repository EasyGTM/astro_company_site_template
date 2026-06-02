# Deploying to Vercel

This template is static-first and works well on Vercel.

## Quick path

1. Push the repo to GitHub.
2. Import the repository in Vercel.
3. Keep the default Astro build detection.
4. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

## Demo deployment

For a public template demo, a free `.vercel.app` domain is enough. Use that URL in the README until you add a custom domain later.

## Before deploying

- set the final `site.site.base_url` in `src/data/site.json`
- confirm logos, social links, and contact details
- run `npm run validate`

## After deploying

Verify:

- homepage, services, work, insights, about, contact, FAQ, privacy, and terms routes
- sitemap output
- generated `robots.txt`
- generated `llms.txt`
- structured metadata and OG image
