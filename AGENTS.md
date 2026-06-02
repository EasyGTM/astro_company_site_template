# Agent Instructions

## Goal

Maintain this repo as a reusable services-company website template that can be forked, rebranded, and deployed quickly. Favor changes that improve clarity, onboarding speed, performance, SEO, accessibility, and template safety.

## Start Here

If a request is primarily about content, branding, or presets, edit config/content before touching components.

Preferred order of operations:

1. Apply or inspect a starter preset in `presets/*`.
2. Update `src/data/site.json`.
3. Update `src/config/theme.json`.
4. Update `src/content/*`.
5. Edit Astro components only if the request truly changes shared behavior.

## Safe Editing Surfaces

- `src/data/site.json` for brand, SEO, nav, social, CTA, crawl rules, llms data, and form settings
- `src/config/theme.json` for colors and font tokens
- `src/content/services/*.md` for service content
- `src/content/work/*.md` for case studies
- `src/content/insights/*.md` for article content
- `src/content/pages/*.md` for page copy
- `src/data/faqs.json` for FAQ entries
- `presets/*/src/**` for starter-pack content and branding defaults
- `src/pages/robots.txt.ts` and `src/pages/llms.txt.ts` for config-driven text metadata routes

## Template Rules

- Do not hardcode one company identity into shared layouts, route logic, or schema helpers.
- Keep the site content-driven wherever practical.
- Preserve static-first rendering and avoid unnecessary hydration.
- Maintain accessible markup, semantic headings, and good color contrast.
- Keep content answer-first and retrieval-friendly for AEO use cases.
- When changing mobile nav, theme state, or other global UI behavior, make the initializer idempotent across `astro:after-swap`.

## Starter Presets

- Use `npm run preset:apply -- <preset>` to switch the shipped demo between `agency`, `consultancy`, and `studio`.
- Presets are full content/config packs. Keep them synchronized with the same editing contract as `src/`.
- Do not create preset-specific component forks unless absolutely unavoidable.

## Rebrand Workflow

For a standard rebrand:

1. Update `src/data/site.json`.
2. Update `src/config/theme.json`.
3. Update the content collections in `src/content/`.
4. Replace or edit logos / OG image assets in `public/images/`.
5. Verify generated metadata routes and schema output still match the new brand.

## SEO and AEO Rules

- Always provide meaningful `title`, `description`, and, when relevant, `meta_title`.
- Prefer headings that answer what the section is doing.
- Keep proof close to claims.
- Add schema only when it is accurate for the page type.
- Keep `robots.txt` and `llms.txt` derived from centralized config instead of duplicating brand or domain strings.
- When routes or crawl policy change, update `src/data/site.json` first so generated text metadata stays accurate.

## Form Handling

- Do not add a hidden backend assumption.
- The default contact form contract lives in `src/data/site.json`.
- Keep the template backend-agnostic; document adapters instead of hardwiring providers.
- If implementing another form adapter, document it in `README.md` and `docs/contact-form-recipes.md`.

## Deployment Path

- Treat Vercel as the primary deployment target.
- Preserve compatibility with generic static hosts.
- Keep build assumptions aligned with `npm run build` and Astro static output.

## Completion Checklist

Before considering a task done, run the smallest applicable set of:

- `npm run lint`
- `npm run check`
- `npm run build`

Also verify:

- no stale brand strings remain after a rebrand or preset update
- generated `robots.txt` and `llms.txt` still match `src/data/site.json`
- docs match the actual commands and file locations
