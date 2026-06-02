Follow `AGENTS.md` as the source-of-truth instruction file for this repository.

When suggesting or making changes:

- start with `npm run preset:apply -- <preset>` if the user wants a packaged vertical starter
- prefer `src/data/site.json`, content collections, and `src/config/theme.json`
- avoid hardcoding one company identity into shared layouts or route logic
- preserve static output and avoid unnecessary client-side JavaScript
- maintain SEO, AEO, and accessibility defaults
- keep `robots.txt` and `llms.txt` config-driven
- finish by recommending or running `npm run lint`, `npm run check`, and `npm run build`
