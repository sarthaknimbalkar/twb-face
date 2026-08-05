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
    'The Woofback is a small SEO, GEO and AEO shop in Michigan. We work with twelve businesses at a time and get them found first on Google and quoted inside AI assistants like ChatGPT, Perplexity and Gemini.',
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
  { href: '/apply', label: 'Apply' },
] as const;

export interface Faq {
  q: string;
  a: string;
}

/** Rendered visibly on the homepage AND emitted as FAQPage JSON-LD. Keep the two identical. */
export const FAQS: readonly Faq[] = [
  {
    q: 'What is the difference between SEO, GEO and AEO?',
    a: 'SEO gets you ranked on Google. AEO gets you into the answer box at the top, the one people read instead of clicking anything. GEO gets you quoted inside AI assistants like ChatGPT, Perplexity and Gemini, which increasingly answer the question before anyone sees a results page at all. We treat the three as one job, because your customers have no idea there is a difference. They just ask, and somebody gets named.',
  },
  {
    q: 'Why only twelve clients?',
    a: 'Because of what a seat actually includes. You get your own content engine, your own writing voice, daily citation tracking, and five people who know your business without looking it up. We have tried to imagine running that for eighty clients and the honest answer is that it turns into a report-writing business. So the number stays at twelve, and when it is full it is full.',
  },
  {
    q: 'Is this only for big brands?',
    a: 'Mostly the opposite. Most of our clients are local and regional businesses that are genuinely the best in their area and quietly furious that the internet has not noticed. You bring the reputation. Making Google and the AI assistants reflect it is our end of the deal, jargon included. Size was never the entry requirement.',
  },
  {
    q: 'Do you work outside Michigan?',
    a: 'Yes. We are based in Michigan and take work anywhere. Search engines do not care where our office is, and neither do the AI assistants. Local, national, or somewhere we have to look up on a map, the method does not change.',
  },
  {
    q: 'How is this different from a normal SEO agency?',
    a: 'Most agencies audit your site, hand you recommendations, and leave the actual work to you. We do the work. We build and run the whole publishing system on your domain, write the articles, source every claim, then check every day whether it moved a ranking or earned a mention inside an AI answer. What worked goes back into the pipeline. You are hiring an operator, not a consultant.',
  },
  {
    q: 'How do I become a client?',
    a: 'You apply, which takes about four minutes. Tell us your site, your market, and what a good year looks like. All five of us read it and answer one question: can we take you to the top of your patch? If the answer is yes and a seat is open, we talk. If it is no, you hear that quickly, with a reason, and you can get on with your quarter.',
  },
] as const;
