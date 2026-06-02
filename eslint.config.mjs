export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      "presets/**",
      "public/**",
      "src/**",
    ],
  },
  {
    files: [
      "astro.config.mjs",
      "eslint.config.mjs",
      "scripts/**/*.js",
      "scripts/**/*.mjs",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
