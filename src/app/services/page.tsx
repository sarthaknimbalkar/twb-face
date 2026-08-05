import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Arsenal — SEO, GEO & AEO services',
  description:
    'The Woofback arsenal: a production content engine, daily AI citation tracking across Gemini, Perplexity and Tavily, keyword-gap rank warfare, and click-level attribution.',
  alternates: { canonical: '/services' },
};

interface Weapon {
  no: string;
  name: string;
  claim: string;
  detail: string[];
  aside: string;
}

const WEAPONS: readonly Weapon[] = [
  {
    no: '01',
    name: 'The Content Engine',
    claim: 'A publishing system, not a blog.',
    detail: [
      'Server-rendered, crawlable HTML on your own domain — never a client-side app that search engines and AI crawlers half-read.',
      'Every article opens by answering the query in the first two hundred words, carries strict heading structure, comparison and data tables, and JSON-LD that matches the visible text exactly.',
      'Every statistic is sourced, dated and attributable. If a fact cannot be traced to a publisher and a date, it does not ship.',
      'Freshness is tracked; anything approaching ninety days stale gets refreshed before an engine notices it aged.',
    ],
    aside: 'Engines quote what they can verify. So we make everything verifiable.',
  },
  {
    no: '02',
    name: 'AI Citation Tracking',
    claim: 'GEO with receipts.',
    detail: [
      'Daily automated checks of the questions your market asks — put to Gemini, Perplexity and Tavily, live.',
      'Every answer is recorded: did the engine cite you, cite a rival, or hallucinate a third option?',
      'Trend lines per engine, per question, per client — so “we’re winning in AI search” is a chart, not a feeling.',
      'When a rival takes a citation you should own, that gap becomes next week’s content order.',
    ],
    aside: 'Your customers ask machines for recommendations now. We make sure of the reply.',
  },
  {
    no: '03',
    name: 'Rank Warfare',
    claim: 'Territory is measured in positions.',
    detail: [
      'Keyword-gap analysis against the brands actually holding your ground — what they rank for that you don’t, and which of it converts.',
      'Question mining from live search results: the exact things people ask, harvested and answered before rivals notice the question exists.',
      'Rank tracking that feeds the engine: movement in, content out, position up.',
      'Local and geographic targeting where it counts — from Michigan to anywhere the cohort hunts.',
    ],
    aside: 'We do not report on the war. We fight it, weekly.',
  },
  {
    no: '04',
    name: 'The Pixel',
    claim: 'Attribution, down to the click.',
    detail: [
      'A lightweight first-party beacon on your pages — every visit, source and conversion in one ledger.',
      'AI-referral detection: when Perplexity or ChatGPT sends a buyer, it is labeled as such, not lost in “direct”.',
      'Ad-click capture wired through to conversions, so paid and organic are judged by the same scoreboard.',
      'You audit the numbers. Faith is for other agencies.',
    ],
    aside: 'The only marketing metric that matters is the one you can subpoena.',
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker">The arsenal</p>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Four instruments, kept sharp for twelve clients.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        Everything below runs as one system. That is the point — and the reason the cohort is
        small. You cannot operate this for a hundred logos. We never intend to.
      </p>

      <div className="mt-20 space-y-20">
        {WEAPONS.map((w) => (
          <section key={w.no} className="rule grid gap-8 pt-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs text-bone-faint">{w.no}</p>
              <h2 className="mt-3 font-display text-3xl">{w.name}</h2>
              <p className="mt-3 font-mono text-sm text-blood-bright">{w.claim}</p>
            </div>
            <div>
              <ul className="space-y-4">
                {w.detail.map((d) => (
                  <li key={d} className="flex gap-4 leading-relaxed text-bone-dim">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-blood" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-blood pl-4 font-display text-lg italic text-bone">
                {w.aside}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="rule mt-20 py-16 text-center">
        <p className="mx-auto max-w-xl text-bone-dim">
          The arsenal is not sold piecemeal. A seat in the cohort gets all of it.
        </p>
        <Link href="/apply" className="btn-primary mt-8">
          Request consideration
        </Link>
      </div>
    </div>
  );
}
