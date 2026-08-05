import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Field Notes — dispatches from the territory',
  description:
    'Field Notes from The Woofback: what we learn running SEO, GEO and AEO campaigns daily — algorithm shifts, AI citation behavior, and the tactics that actually move positions.',
  alternates: { canonical: '/notes' },
};

interface Note {
  code: string;
  title: string;
  summary: string;
  status: 'in the drop queue' | 'being written';
}

/**
 * TEMPLATE DATA — at integration this index is fed by the Fortis engine publishing on
 * thewoofback.com itself (the practice dogfooding its own weapon). Until then: the queue.
 */
const QUEUE: readonly Note[] = [
  {
    code: 'FN-001',
    title: 'What Perplexity actually cites: 90 days of watching it choose',
    summary:
      'We ask the engines our clients’ questions every day and log every citation. The pattern in what gets quoted — structure, sourcing, freshness — is not what most agencies are selling.',
    status: 'being written',
  },
  {
    code: 'FN-002',
    title: 'The answer block: why the first 200 words decide everything',
    summary:
      'Search engines skim. AI engines quote. Both decide from the top of the page. How we structure an opening so machines lift it verbatim — and why most content buries its own lede.',
    status: 'in the drop queue',
  },
  {
    code: 'FN-003',
    title: 'Your traffic report is lying about AI referrals',
    summary:
      'Buyers sent by ChatGPT and Perplexity mostly land as “direct” in standard analytics. What first-party attribution shows once you label them properly — and why it changes the budget.',
    status: 'in the drop queue',
  },
] as const;

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker rise">Field notes</p>
      <h1 className="rise rise-1 mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Dispatches from the territory.
      </h1>
      <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        The pack runs campaigns daily; the notes are what the telemetry teaches us. Published
        here with the same standard we sell — every claim sourced, dated and attributable.
        Sparingly, when there is something worth saying.
      </p>

      <div className="rise rise-3 mt-16 space-y-px bg-night-line">
        {QUEUE.map((n) => (
          <article key={n.code} className="group bg-night p-8 transition-colors hover:bg-night-soft">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">{n.code}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-blood-bright">
                {n.status}
              </p>
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-2xl leading-snug group-hover:text-blood-bright">
              {n.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-bone-dim">{n.summary}</p>
          </article>
        ))}
      </div>

      <div className="rule mt-20 py-16 text-center">
        <p className="mx-auto max-w-xl text-bone-dim">
          Cohort members do not wait for the notes — they get the telemetry itself.
        </p>
        <Link href="/apply" className="btn-primary mt-8">
          Request consideration
        </Link>
      </div>
    </div>
  );
}
