/**
 * Genuine production data, read from the platform on 2026-08-08 and rendered on the marketing
 * page in the site's own design language rather than pasted in as a screenshot.
 *
 * Two rules govern this file:
 *   1. Nothing here is invented. Every figure is a value that exists in the database. If a
 *      number cannot be traced back to a row, it does not belong on the page — the same rule
 *      the product enforces on its own output.
 *   2. No client is identifiable. Names are redacted and geography-revealing rows (local
 *      government domains, county-specific queries) are left out entirely, because between
 *      them they would pinpoint an account that has not asked to be a case study.
 *
 * Refresh both sets when the underlying numbers move; a stale ledger is worse than none.
 */

export interface CitationRow {
  readonly rank: number;
  readonly domain: string;
  /** Share of tracked queries where this domain is cited. */
  readonly coverage: number;
  /** Number of queries behind that share. */
  readonly queries: number;
  /** Share of all citations across the tracked set. */
  readonly visibility: number;
  /** Point change against the previous run. Null where there is no prior comparison. */
  readonly delta: number | null;
  readonly position: number;
}

/** Live leaderboard for one account's tracked queries. The account itself is not yet cited. */
export const CITATION_BOARD: readonly CitationRow[] = [
  { rank: 1, domain: 'homes2moveyou.com', coverage: 87, queries: 13, visibility: 34, delta: -4, position: 4.5 },
  { rank: 2, domain: 'zillow.com', coverage: 60, queries: 9, visibility: 6, delta: -13, position: 12.8 },
  { rank: 3, domain: 'youtube.com', coverage: 47, queries: 7, visibility: 15, delta: -3, position: 6.0 },
  { rank: 4, domain: 'realtor.com', coverage: 47, queries: 7, visibility: 13, delta: -5, position: 6.9 },
  { rank: 5, domain: 'reddit.com', coverage: 40, queries: 6, visibility: 6, delta: -7, position: 10.5 },
  { rank: 6, domain: 'redfin.com', coverage: 33, queries: 5, visibility: 10, delta: 4, position: 6.6 },
  { rank: 7, domain: 'rocketmortgage.com', coverage: 20, queries: 3, visibility: 8, delta: null, position: 6.3 },
  { rank: 8, domain: 'facebook.com', coverage: 13, queries: 2, visibility: 4, delta: -4, position: 8.5 },
] as const;

export const CITATION_META = {
  index: 0,
  trackedQueries: 15,
  engines: ['All engines', 'Perplexity', 'Tavily'] as const,
  note: 'Your domain is not cited on any tracked query yet — the leaderboard below shows who is.',
} as const;

export interface QuestionRow {
  readonly query: string;
  readonly score: number;
  readonly source: string;
  readonly intent: string;
  readonly demand: number;
  readonly difficulty: number;
  readonly why: string;
}

/** Real mined questions, scored by the system, awaiting accept or dismiss. */
export const QUESTION_QUEUE: readonly QuestionRow[] = [
  {
    query: 'What’s the difference between mortgage pre-approval and pre-qualification?',
    score: 88,
    source: 'Search demand',
    intent: 'informational',
    demand: 55,
    difficulty: 25,
    why: 'High-demand buyer question; fundamental to the buying process; strong commercial intent.',
  },
  {
    query: 'What is a fractional CFO and how can it help my business?',
    score: 78,
    source: 'AI expansion',
    intent: 'informational',
    demand: 30,
    difficulty: 25,
    why: 'Foundational question for service awareness; strong intent to educate prospects.',
  },
  {
    query: 'Startup idea validation using AI',
    score: 75,
    source: 'Search demand',
    intent: 'informational',
    demand: 55,
    difficulty: 25,
    why: 'Emerging demand; positions the brand’s differentiation directly.',
  },
  {
    query: 'Fractional CFO pricing for business growth stages',
    score: 75,
    source: 'Search demand',
    intent: 'commercial',
    demand: 55,
    difficulty: 25,
    why: 'Real related-search demand; pricing intent converts.',
  },
  {
    query: 'Top fractional accounting firms: pros and cons',
    score: 75,
    source: 'Competitor gap',
    intent: 'commercial',
    demand: 55,
    difficulty: 25,
    why: 'Comparison query a rival currently owns; direct citation opportunity.',
  },
] as const;
