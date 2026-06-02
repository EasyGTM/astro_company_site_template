# Contributing

Thanks for contributing to this template.

## Local Setup

```bash
npm install
npm run dev
```

## Working Rules

- Keep the template generic and reusable.
- Prefer editing `src/data/site.json`, `src/config/theme.json`, `src/data/faqs.json`, and `src/content/*` before changing shared components.
- If you add or change a starter preset, keep the files under `presets/*/src/**` aligned with the same template contract as `src/`.
- Do not hardcode one company identity into shared layouts or route logic.

## Validation

Run this before opening a PR:

```bash
npm run validate
```

If you changed copy, branding, or presets, also sanity-check:

- generated `robots.txt`
- generated `llms.txt`
- service, work, and insights routes
- mobile navigation and theme switcher behavior

## Pull Requests

- Keep PRs focused and easy to review.
- Update docs when commands, workflows, or editing surfaces change.
- Include screenshots for visible UI changes when practical.
