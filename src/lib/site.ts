/**
 * Single source of truth for the face.
 *
 * On the numbers: there is exactly one quantity on this site — `claimed`, the count of founding
 * applications. That is deliberate and load-bearing. The product's promise is that it will not
 * publish a statistic without a publisher and a date, and a homepage that fabricated a customer
 * count while selling traceable sourcing would refute itself. The scarcity here is real because
 * it is a decision (a capped cohort), not a claim about the past. Do not add invented metrics.
 */
export const SITE = {
  name: 'The Woof Back',
  domain: 'thewoofback.com',
  url: 'https://thewoofback.com',
  email: 'apply@thewoofback.com',
  region: 'Michigan, United States',
  tagline: 'An entire growth department, in one system.',
  description:
    'A multi-brand growth system that researches, writes, publishes and maintains search and answer-engine content, tracks rank and AI assistant citations, and converts readers into leads.',
} as const;

/** Founding-cohort seats. A capped cohort is a decision we keep, not a statistic we assert. */
export const FOUNDING_COHORT_SEATS = 250;

/**
 * Live count of founding applications. In the platform this is read from the database by the
 * route handler; the static face carries the last known figure and the deploy refreshes it.
 */
export const CLAIMED = 63;

export const NAV = [
  { href: '#thesis', label: 'The window' },
  { href: '#machine', label: 'The machine' },
  { href: '#receipts', label: 'Receipts' },
  { href: '#partners', label: 'Partners' },
] as const;

export interface Stage {
  readonly id: string;
  readonly num: string;
  readonly name: string;
  readonly claim: string;
  readonly body: string;
  readonly img: string;
  readonly alt: string;
}

export const STAGES: readonly Stage[] = [
  {
    id: 'research',
    num: '01',
    name: 'Research',
    claim: 'Gather what is actually true.',
    body: 'Live web research on the question your buyer is really asking. Every claim is bound to a named publisher and a date before it is allowed into the draft. No source, no sentence.',
    img: 'stage-research',
    alt: 'Thousands of fine red filaments converging into a single bright core.',
  },
  {
    id: 'write',
    num: '02',
    name: 'Write',
    claim: 'Build the artifact, not the word count.',
    body: 'The answer in the first two hundred words. Strict H1 to H2 to H3. A comparison table and a data table. A real FAQ. The shape an answer engine can parse without guessing.',
    img: 'stage-write',
    alt: 'A dark monolith being precision-etched with a glowing red grid.',
  },
  {
    id: 'publish',
    num: '03',
    name: 'Publish',
    claim: 'Ship it as HTML a crawler can read.',
    body: 'Server-rendered pages on your own domain, with JSON-LD that matches the visible text rather than contradicting it. Per-host sitemap, robots and llms.txt generated and kept current.',
    img: 'stage-publish',
    alt: 'A dark slab accelerating along a lit rail, leaving long light trails.',
  },
  {
    id: 'rank',
    num: '04',
    name: 'Rank',
    claim: 'Hold the position once you take it.',
    body: 'Rank tracking, technical crawls, page speed, broken links and backlinks, watched continuously. Anything drifting past roughly ninety days is queued for refresh instead of quietly rotting.',
    img: 'stage-rank',
    alt: 'A stepped monolithic structure rising into fog, its summit lit in red.',
  },
  {
    id: 'cite',
    num: '05',
    name: 'Cite',
    claim: 'Watch the answer layer, not just the SERP.',
    body: 'Track whether assistants are citing you for the questions that matter — and, when they are not, exactly who they are citing instead. You cannot take a slot you cannot see.',
    img: 'stage-cite',
    alt: 'A circular array of dark dishes all angled toward one bright beacon.',
  },
  {
    id: 'convert',
    num: '06',
    name: 'Convert',
    claim: 'Turn the reader into pipeline.',
    body: 'Lead capture, scoring and CRM routing. A/B tests that pick their own winner. Attribution that traces the closed deal back to the specific article that earned it.',
    img: 'stage-convert',
    alt: 'A long dark corridor funnelling toward a single warm lit doorway.',
  },
] as const;

export interface Faq {
  readonly q: string;
  readonly a: string;
}

/** Rendered visibly AND emitted as FAQPage JSON-LD. The two must never drift apart. */
export const FAQS: readonly Faq[] = [
  {
    q: 'What is The Woof Back?',
    a: 'A growth system that researches, writes, publishes and maintains search- and answer-engine content on your own domain, tracks how it ranks and whether AI assistants cite it, and converts the resulting readers into leads. It replaces the coordination work of a content team, an SEO retainer and a reporting stack with one pipeline.',
  },
  {
    q: 'How is this different from an AI writing tool?',
    a: 'A writing tool hands you text. This publishes and maintains a property. It refuses to print a statistic without a publisher and a date, renders server-side HTML with schema that matches the visible page, tracks rank and assistant citations after publication, and routes the leads. The writing is one of six stages.',
  },
  {
    q: 'Can agencies run it for their clients?',
    a: 'Yes. The system is multi-brand from the ground up: separate voices, domains, teams and reporting per brand, under one console, with your own branding. Partner accounts also get the prospecting and audit tooling used to find and pitch new clients.',
  },
  {
    q: 'What is the founding cohort?',
    a: `We are accepting ${FOUNDING_COHORT_SEATS} founding accounts. Founding accounts keep their rate for the life of the account, get direct access to the team building the product, and take priority in the partner programme. The cap is operational rather than promotional: direct access does not scale past a few hundred accounts.`,
  },
  {
    q: 'Does the content actually get cited by AI assistants?',
    a: 'That is the thing the system measures rather than the thing it promises. Citation tracking is built in specifically so the answer is evidence rather than a claim: you can see which queries cite you, which do not, and who holds the slot instead.',
  },
] as const;
