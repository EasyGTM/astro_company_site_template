# Starter Presets

This repo ships with 3 content/config presets:

- `agency`
- `consultancy`
- `studio`

Apply one with:

```bash
npm run preset:apply -- agency
```

List presets:

```bash
npm run preset:list
```

Each preset replaces:

- `src/data/site.json`
- `src/data/faqs.json`
- `src/config/theme.json`
- `src/content/**`

The runtime code stays shared. Presets are only for branding, positioning, and content shape.
