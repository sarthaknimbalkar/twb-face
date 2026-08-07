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
  { href: '#console', label: 'The console' },
  { href: '#how', label: 'Cost' },
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

/**
 * How pricing is shaped, not what it costs. The number depends on scope and gets settled in
 * the first conversation — inventing one here would break the same sourcing rule the rest of
 * the site is built on. These are commercial terms: confirm before they go live.
 */
export const PRICING = [
  {
    h: 'One fee per brand, per month',
    b: 'It covers the whole pipeline — research, writing, publishing, rank and citation tracking, and the lead capture. Not six line items that add up to a surprise.',
  },
  {
    h: 'Nothing is metered',
    b: 'No per-article charge, no per-query charge, no credits to run out of mid-month. The system publishing more in a busy month costs you the same as a quiet one.',
  },
  {
    h: 'Founding rate is locked',
    b: 'Whatever a founding account agrees, it keeps for the life of the account. The rate for seat 240 will not be the rate for seat 12.',
  },
  {
    h: 'The number comes in the conversation',
    b: 'It depends on how many brands, which markets and how contested they are. We would rather quote you honestly once we have looked than publish a figure that turns out to be wrong for you.',
  },
] as const;

/** What actually happens after the form is sent. No vague "we'll be in touch". */
export const AFTER_YOU_APPLY = [
  {
    when: 'Within a week',
    h: 'All five of us read it',
    b: 'Applications are read on Fridays. You get a yes, a no with the reason, or a question — never silence and never a drip sequence.',
  },
  {
    when: 'The first call',
    h: 'We audit your domain in front of you',
    b: 'We run your site and your market through the system live and show you what comes back, including whichever competitors are currently holding the answers. You keep that either way.',
  },
  {
    when: 'Week one',
    h: 'Your brand gets built',
    b: 'Voice, author, domain and topics configured; the pipeline pointed at the questions your buyers actually ask. You approve the first drafts before anything is published.',
  },
  {
    when: 'From week two',
    h: 'It publishes, and the watching starts',
    b: 'Content ships on a schedule, and rank plus citation tracking begins the same week — so you can see the starting line rather than being told about it later.',
  },
  {
    when: 'Honestly, months not weeks',
    h: 'When it starts working',
    b: 'Search and answer engines move slowly. Expect early ranking movement inside a quarter and citations to follow. Anyone promising faster is guessing.',
  },
] as const;

/** The category, framed. No real competitor is named — they are types, not targets. */
export const COMPARISON = [
  {
    dim: 'What you actually get',
    diy: 'A blog with three posts, the newest from March',
    agency: 'A monthly PDF of things you should do',
    tool: 'Text in a box you still have to place',
    twb: 'A system on your domain that publishes and maintains itself',
  },
  {
    dim: 'Where the facts come from',
    diy: 'Whoever had ten minutes',
    agency: 'The same top-ten listicle everyone copies',
    tool: 'The model’s best guess, confidently worded',
    twb: 'A named publisher and a date, or it does not ship',
  },
  {
    dim: 'Getting named by AI',
    diy: 'Not happening',
    agency: '“We’re looking into AI”',
    tool: 'Untracked — you would never know either way',
    twb: 'Checked daily, logged, and turned into the next work order',
  },
  {
    dim: 'After it is published',
    diy: 'Nothing',
    agency: 'A screenshot of a traffic graph',
    tool: 'Not the tool’s problem',
    twb: 'Rank, citations, speed and freshness watched continuously',
  },
  {
    dim: 'Turning readers into money',
    diy: 'A contact page and hope',
    agency: 'Usually someone else’s job',
    tool: 'Out of scope',
    twb: 'Capture, scoring, routing and attribution to the article',
  },
] as const;

/**
 * Honest proof. Every line here is a fact about the system or a figure that exists as rows in
 * the production database — checked 2026-08-08. No customer counts, no growth multiples.
 * Re-check these before each deploy; a stale ledger is the one thing that would sink the page.
 */
export const LEDGER = [
  {
    stat: '139 answers',
    label: 'logged in six days',
    b: 'For one account in its first week: every question put to Gemini, Perplexity and Tavily, with what came back and when. On day one the citation count was zero, and we said so on day one.',
  },
  {
    stat: '19 domains',
    label: 'named, not implied',
    b: 'The share-of-voice leaderboard for that account lists nineteen competitors being cited instead, with coverage and trend for each. That is the work queue, not a slide.',
  },
  {
    stat: '3 assistants',
    label: 'checked every day',
    b: 'Gemini, Perplexity and Tavily, on a daily cron, per tracked query, per brand — recorded whether the answer is flattering or not.',
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
  {
    q: 'Do I own the content, and what happens if I leave?',
    a: 'You own all of it. Everything publishes to your domain under your brand and your author bylines, so it is your property from the moment it goes live rather than something rented from us. If you leave, there is a one-click export that hands back every article, image and redirect as files you can host anywhere. We do not hold your content hostage, because a business that has to would be admitting the work is not worth staying for.',
  },
  {
    q: 'What does it need from my side, and what does it plug into?',
    a: 'Realistically a couple of hours a month: approving the first drafts until you trust the voice, and telling us when something in the business changes. It publishes to your own domain, so there is no CMS migration to survive. Leads route to your inbox or your CRM, and analytics and Search Console connect if you want the fuller picture. If your site is somewhere awkward, say so in the application and we will tell you honestly whether it is a problem.',
  },
  {
    q: 'How long before anything happens?',
    a: 'Months, not weeks, and anyone telling you otherwise is guessing. Content starts publishing in the second week and tracking begins immediately, so you can watch from the starting line. Ranking movement typically shows inside a quarter and assistant citations follow that. The compounding is the point: the pages you publish now are what gets quoted next year.',
  },
] as const;
