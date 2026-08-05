/**
 * Single source of truth for the face. When this template is lifted into the platform,
 * these constants become live data (cohort counts from the DB, etc.). Until then they are
 * honest placeholders — edit here, never inline in pages.
 */
export const SITE = {
  name: 'The Woofback',
  domain: 'thewoofback.com',
  url: 'https://thewoofback.com',
  email: 'consideration@thewoofback.com',
  region: 'Michigan, United States',
  description:
    'The Woofback is a private SEO, GEO and AEO practice. We accept a fixed cohort of clients and make them the answer — on Google, and inside AI answer engines like ChatGPT, Perplexity and Gemini.',
} as const;

export const COHORT = {
  capacity: 12,
  open: 2,
  nextIntake: 'Q4 2026',
} as const;

export const NAV = [
  { href: '/services', label: 'The Arsenal' },
  { href: '/proof', label: 'Proof' },
  { href: '/pack', label: 'The Pack' },
  { href: '/notes', label: 'Field Notes' },
  { href: '/apply', label: 'Request Consideration' },
] as const;

export interface Faq {
  q: string;
  a: string;
}

/** Rendered visibly on the homepage AND emitted as FAQPage JSON-LD. Keep the two identical. */
export const FAQS: readonly Faq[] = [
  {
    q: 'What is the difference between SEO, GEO and AEO?',
    a: 'SEO (search engine optimization) earns rankings on Google and Bing. AEO (answer engine optimization) earns the featured answer — the block a search engine reads out. GEO (generative engine optimization) earns citations inside AI assistants like ChatGPT, Perplexity and Gemini, which now answer questions before a user ever sees a results page. The Woofback practices all three as one discipline, because your customers no longer distinguish between them.',
  },
  {
    q: 'Why does The Woofback only take twelve clients?',
    a: 'Because we do not sell reports — we take territory. Every client gets a dedicated content engine, its own editorial voice, live citation tracking across AI engines, and a team that knows the account cold. That does not scale to hundreds of logos, and we refuse to pretend it does. When the cohort is full, it is full.',
  },
  {
    q: 'Is this only for big brands?',
    a: 'No — mostly the opposite. The cohort is largely local and regional businesses that are excellent at what they do and want to be the first name people (and their phones) find. You bring the reputation; making the internet reflect it is our job, jargon included. Size has never been the entry requirement. Being worth putting at the top is.',
  },
  {
    q: 'Do you work with businesses outside Michigan?',
    a: 'Yes. The pack is headquartered in Michigan and hunts everywhere. Search engines and AI answer engines are global; so is the cohort. Local, national or international — the method is the same, the standard is the same.',
  },
  {
    q: 'How is this different from a typical SEO agency?',
    a: 'A typical agency audits, recommends and reports. The Woofback operates: we build and run a production content system on your domain — server-rendered, schema-rich, source-cited articles engineered to be quoted by both search engines and AI models — then track every ranking and every AI citation daily and feed what works back into the engine. You are not buying advice. You are buying outcomes with telemetry.',
  },
  {
    q: 'How do I become a client?',
    a: 'You apply. Tell us your domain, your market and what winning looks like. We review every application against one question: can we take this brand to the top of its territory? If the answer is yes and a seat is open, we talk. If not, we decline — politely, and without wasting your quarter.',
  },
] as const;
