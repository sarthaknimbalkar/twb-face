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
    'The Woof Back gets businesses found first — on Google and inside AI assistants like ChatGPT — and turns that attention into enquiries. It researches, writes and publishes the content, tracks rankings and AI recommendations daily, and traces every lead back to the page that earned it.',
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
    claim: 'Find what your customers actually ask.',
    body: 'We dig up the real questions people type before they spend money in your market. And every fact we ever publish carries where it came from and when — which is exactly why people and machines end up trusting it.',
    img: 'stage-research',
    alt: 'An immense dark archive hall, one aisle lit in red leading to a single bright alcove.',
  },
  {
    id: 'write',
    num: '02',
    name: 'Write',
    claim: 'Answer it better than anyone else has.',
    body: 'Each piece answers the question straight away, in your voice, with the evidence attached. Structured the way Google and the AI assistants like to read — which is a technical way of saying it gets picked.',
    img: 'stage-write',
    alt: 'A bare concrete atelier at night, one long workbench lit by a single red light bar.',
  },
  {
    id: 'publish',
    num: '03',
    name: 'Publish',
    claim: 'It goes live on your site. Done.',
    body: 'Not a draft sitting in your inbox waiting for you — finished pages, published on your own website, built so every search engine and AI assistant can read every word. You own all of it.',
    img: 'stage-publish',
    alt: 'A colossal transmission tower with red light rings glowing up its full height.',
  },
  {
    id: 'rank',
    num: '04',
    name: 'Rank',
    claim: 'Climb the rankings, then hold the spot.',
    body: 'We watch your positions, your site health and anything going stale, and fix it before it costs you a customer. A ranking is rented space — we keep paying the rent so you keep the address.',
    img: 'stage-rank',
    alt: 'A stepped ziggurat building at night, every terrace edge-lit in red, brightest at the top.',
  },
  {
    id: 'cite',
    num: '05',
    name: 'Cite',
    claim: 'Get recommended by the machines.',
    body: 'Every day we ask the AI assistants the questions your customers ask, and write down who got recommended. When it is not you, we know exactly who it was — and that becomes next week’s work.',
    img: 'stage-cite',
    alt: 'Three elevated skywalks from different directions converging into one central tower.',
  },
  {
    id: 'convert',
    num: '06',
    name: 'Convert',
    claim: 'Turn readers into paying customers.',
    body: 'Calls, forms and enquiries land in your inbox with a note saying which page earned them. So when you ask “what is this actually making me?”, the answer is a number, not a shrug.',
    img: 'stage-convert',
    alt: 'Two massive stone walls angling inward toward a single doorway blazing with red light.',
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
    b: 'It covers everything — the research, the writing, the publishing, the daily checks on rankings and AI recommendations, and the lead handling. Not six line items that add up to a surprise.',
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
    b: 'Content ships on a schedule, and the tracking of rankings and AI recommendations begins the same week — so you can see the starting line rather than being told about it later.',
  },
  {
    when: 'Honestly, months not weeks',
    h: 'When it starts working',
    b: 'Google and the assistants move slowly. Expect early ranking movement inside a quarter and AI recommendations to follow. Anyone promising faster is guessing.',
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
    twb: 'Rankings, AI recommendations, speed and freshness watched continuously',
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
    b: 'For one account in its first week: every question put to Gemini, Perplexity and Tavily, with what came back and when. On day one they were recommended exactly zero times, and we said so on day one.',
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
    q: 'I just want more customers. What does this actually do for me?',
    a: 'It makes you the business people find when they are ready to spend. Your customers ask Google, and increasingly ask AI assistants like ChatGPT, who to call — and someone gets named. We publish the material that gets you named, keep it winning, and hand you the enquiries that come off it, each with a note on which page earned it. The industry calls the ingredients SEO, AEO and GEO; you can happily never say those words again. That is what you would be paying us for.',
  },
  {
    q: 'How is this different from an AI writing tool?',
    a: 'A writing tool hands you text and wishes you luck. This runs the whole job: it publishes to your website, refuses to print a number it cannot back up, checks every day how you rank and whether the AI assistants recommend you, and delivers the enquiries that result. The writing is one stage out of six.',
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
    a: 'Months, not weeks, and anyone telling you otherwise is guessing. Content starts publishing in the second week and tracking begins immediately, so you can watch from the starting line. Ranking movement typically shows inside a quarter and AI recommendations follow that. The compounding is the point: the pages you publish now are what gets quoted next year.',
  },
] as const;
