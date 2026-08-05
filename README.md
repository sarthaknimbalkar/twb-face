# TWB Face

The public face of The Woofback — a small SEO, GEO and AEO practice.

Standalone Next.js App Router app. No dependency on the Fortis monorepo, built so the pages
can later lift into the platform's host-gated site tree.

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm typecheck
pnpm lint
pnpm build      # static export to ./out
```

## Notes

- Everything is server-rendered and exported static. No client-side SPA shell — the whole
  point is that crawlers and AI assistants get the full HTML.
- Copy constants (cohort counts, email, region) live in `src/lib/site.ts`. Edit there, never
  inline in a page.
- The FAQ block on the homepage and the `FAQPage` structured data are generated from the same
  array, so they can never drift apart.
- Figures on `/proof` come from real production telemetry. If a number can't be traced to a
  row in the database, it doesn't belong on that page.
- `/wolves` and `/decline` are deliberate easter eggs. `/wolves` is noindex and kept out of
  the sitemap.

## Deployment

Pushing to `master` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`.
`BASE_PATH` is set in CI because Pages serves the site from a subpath.
