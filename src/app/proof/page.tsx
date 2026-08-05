import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proof — the redacted ledger',
  description:
    'The Woofback ledger: real telemetry from the cohort — engine answers interrogated daily across Gemini, Perplexity and Tavily, rival citations named and dated, zero invented numbers.',
  alternates: { canonical: '/proof' },
};

interface Entry {
  client: string;
  vertical: string;
  window: string;
  headline: string;
  lines: string[];
}

/**
 * REAL TELEMETRY — pulled from production 2026-08-05. Every number below exists as rows
 * in the citation ledger (question, engine, answer excerpt, date). Refresh at each deploy;
 * never let this page drift ahead of the database.
 */
const LEDGER: readonly Entry[] = [
  {
    client: 'Client 020',
    vertical: 'Startup validation',
    window: 'Days 1–6 on watch',
    headline: '139 engine answers interrogated before the first invoice cleared.',
    lines: [
      'Onboarded, published, indexed — and put under surveillance the same week. One hundred thirty-nine recorded answers from Gemini, Perplexity and Tavily in the first six days, each archived with the question, the answer excerpt and the timestamp.',
      'The citation count on day one was zero, and we said so. That is what makes it a ledger and not a brochure — the client watches the same numbers we do, from the same table.',
    ],
  },
  {
    client: 'Client 020',
    vertical: 'Startup validation',
    window: 'Ongoing',
    headline: 'Four rivals, named and dated, each one now a work order.',
    lines: [
      'When an engine answers the market’s question by citing someone else, the ledger records exactly who — by domain, per engine, per day. Not “competitors exist”: named domains, counted citations.',
      'Every rival citation becomes next week’s content order: the question they answered gets a better, sourced, structured answer on the client’s domain. The gap list is the strategy.',
    ],
  },
  {
    client: 'House policy',
    vertical: 'All cohort seats',
    window: 'Always',
    headline: 'What you will never see here: an invented number.',
    lines: [
      'No borrowed logos, no “+400% traffic” charts with the axis cropped, no case studies that cannot survive a subpoena. If a figure appears on this page, it exists as rows in the database, and cohort members can audit their own rows daily.',
      'A young ledger that tells the truth beats an old one that lies. This page grows exactly as fast as the telemetry does — no faster.',
    ],
  },
] as const;

export default function ProofPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker">The ledger</p>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Names redacted. Numbers loud.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        Cohort clients are numbered, never named — exclusivity cuts both ways. Every claim
        below exists as telemetry: the question asked, the engine that answered, the date it
        cited, the rank it moved. Members audit their own ledger daily.
      </p>

      <div className="mt-20 space-y-16">
        {LEDGER.map((e) => (
          <article key={e.client} className="rule reveal grid gap-6 pt-12 md:grid-cols-[1fr_2fr]">
            <div className="font-mono text-xs uppercase tracking-widest text-bone-faint">
              <p className="text-blood-bright">{e.client}</p>
              <p className="mt-2">{e.vertical}</p>
              <p className="mt-2">{e.window}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl leading-tight">{e.headline}</h2>
              <div className="mt-5 max-w-prose space-y-4 leading-relaxed text-bone-dim">
                {e.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="rule mt-20 py-16 text-center">
        <p className="mx-auto max-w-xl text-bone-dim">
          The next entry in this ledger is unwritten. It could be yours — if the application
          holds up.
        </p>
        <Link href="/apply" className="btn-primary mt-8">
          Request consideration
        </Link>
      </div>
    </div>
  );
}
