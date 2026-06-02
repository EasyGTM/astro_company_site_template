# Contact Form Recipes

This template ships with a frontend-only form. The default implementation posts JSON to a configurable endpoint defined in `src/data/site.json`.

## Expected payload

The built-in form submits:

- `name`
- `email`
- `company`
- `website`
- `message`

## Generic REST endpoint

Update `src/data/site.json`:

```json
"form": {
  "mode": "rest",
  "endpoint": "https://api.your-domain.com/contact",
  "method": "POST",
  "successMessage": "Thanks for reaching out.",
  "errorMessage": "Something went wrong."
}
```

Your endpoint should accept JSON and return a `2xx` response when successful.

## Serverless or API route example

Typical flow:

1. Create an endpoint such as `/api/contact`.
2. Accept JSON from the built-in form.
3. Validate required fields.
4. Forward to email, CRM, or storage.
5. Return `200` or `201`.

## Third-party form backend pattern

You can also point the form at:

- an automation webhook
- a form relay service
- a custom CRM ingestion endpoint

If the provider expects a different field shape, adapt the client-side submit handler in `src/pages/contact.astro`.

## Safety notes

- Do not commit secrets in the repo.
- Add rate limiting, spam protection, and validation on your actual backend.
- Keep the template backend-agnostic unless you are intentionally adding a provider-specific starter.
