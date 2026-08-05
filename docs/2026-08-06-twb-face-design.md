# TWB Face — design spec (2026-08-06)

## What this is
The public face of TWB (thewoofback.com / thewolfback.com) — the agency front for the Fortis
Content Engine. Standalone Next.js App Router app at `e:/twb-face`, **zero imports from the
bootstrap monorepo**, built so its pages can later lift near-verbatim into `apps/cms`'s
host-gated `(site)` tree (thewoofback.com → face, brand domains → blogs).

## Positioning (approved)
- **Exclusivity as structure, not copy.** No contact form — a "Request consideration"
  application. Visible cohort scarcity ("2 of 12 seats open"). No pricing. No SaaS feature grid.
- **Voice: split personality (option c).** Woofback-polite surface, Wolfback menace bleeding
  through in details: hover states, footnotes, view-source HTML comments, the /wolves easter egg.
- Hero turn: "You came looking for The Woofback. You found the wolves." Sub riff on
  gods/kings/"either way, you're at the top of the page."
- **The site is its own proof-of-work:** SSR HTML, answer-block-first copy, JSON-LD
  (Organization + ProfessionalService + FAQPage matching visible text), llms.txt, robots,
  sitemap, comparison table (TWB vs typical agency vs DIY — no real competitor names),
  copy naturally targeting "SEO / GEO / AEO agency" + Michigan without looking like it.

## Stack (approved: option a)
Next.js ^16 App Router + React 19 + TypeScript strict + Tailwind 3.4 (matches apps/cms for
lift-over). Static/SSR only, no client SPA. Dark editorial design, serif display + mono details,
one accent color, no stock photos.

## Pages
- `/` — hero, the turn, services teaser, proof strip, comparison table, FAQ (visible +
  FAQPage JSON-LD), scarcity + application CTA.
- `/services` — the arsenal: content engine, AI-citation tracking, rank warfare, the pixel.
- `/proof` — redacted case-study style ("Client 004: 0 → cited by Perplexity in 21 days").
- `/apply` — the application (form is a template: no backend wiring yet, submits nowhere real).
- `/wolves` — hidden easter egg, noindex.
- `robots.ts`, `sitemap.ts`, `/llms.txt` route, Organization JSON-LD in layout.

## Out of scope (integration comes later)
No DB, no Payload, no lead-capture wiring, no analytics, no deploy.
