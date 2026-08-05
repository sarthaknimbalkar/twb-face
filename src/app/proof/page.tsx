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
    window: 'First six days',
    headline: '139 answers logged before the first invoice cleared.',
    lines: [
      'Signed up, published, indexed, and under watch inside the same week. In six days we recorded 139 answers from Gemini, Perplexity and Tavily, each one saved with the question asked, what came back, and when.',
      'On day one the number of times they got named was zero. We told them that on day one. It’s a ledger, not a brochure, and they read the same table we do.',
    ],
  },
  {
    client: 'Client 020',
    vertical: 'Startup validation',
    window: 'Ongoing',
    headline: 'Four competitors, named. Each one is now a job on the list.',
    lines: [
      'When an assistant answers the question by recommending somebody else, we write down exactly who, which assistant, and what day. Not “you have competitors”. Four specific domains and a count next to each.',
      'Every one of those turns into work: their question gets a better answer, properly sourced, on our client’s site. The gap list is the plan.',
    ],
  },
  {
    client: 'House rule',
    vertical: 'Applies to everyone',
    window: 'Always',
    headline: 'The one thing you won’t find on this page is a made-up number.',
    lines: [
      'No borrowed logos, no “+400% traffic” with the bottom of the graph chopped off, no case study that falls apart if you ask a second question. If a figure is on this page, there’s a row in a database behind it, and the client it belongs to can go and look at it.',
      'This ledger is young. It grows as fast as the evidence does and not one week faster, which is the only version of it worth reading.',
    ],
  },
] as const;

export default function ProofPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker rise">The ledger</p>
      <h1 className="rise rise-1 mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Names quiet. Numbers loud.
      </h1>
      <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        We number our clients instead of naming them, which cuts both ways: your competitors
        won’t be reading about you here either. Everything below came out of the database. The
        question we asked, which assistant answered, what it said, and when.
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
          The next entry hasn’t been written yet. It could have your number on it.
        </p>
        <Link href="/apply" className="btn-primary mt-8">Apply for a seat</Link>
      </div>
    </div>
  );
}
