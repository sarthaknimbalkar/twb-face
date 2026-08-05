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
    title: 'What Perplexity actually quotes, after 90 days of asking it',
    summary:
      'We put our clients’ questions to the assistants every day and keep the answers. There’s a pattern in what gets quoted, and it isn’t the thing most agencies are currently selling.',
    status: 'being written',
  },
  {
    code: 'FN-002',
    title: 'Why the first 200 words decide the whole page',
    summary:
      'Google skims. The AI assistants lift whole sentences. Both make their mind up at the top. Most business writing buries the answer four paragraphs down, which is a shame, because that part never gets read.',
    status: 'in the drop queue',
  },
  {
    code: 'FN-003',
    title: 'Your analytics is lying to you about AI',
    summary:
      'Someone asks ChatGPT for a recommendation, gets your name, and turns up at your site. Standard analytics calls that “direct” and you never find out it happened. Here’s what it looks like once you label it properly.',
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
        We run this every day, so we find things out. When something turns out to be true and
        useful, it gets written up here, held to the same standard we hold client work: sources,
        dates, no guessing. Not on a schedule. Only when there’s something worth saying.
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
          Clients don’t wait for these. They can see the raw numbers whenever they want.
        </p>
        <Link href="/apply" className="btn-primary mt-8">Apply for a seat</Link>
      </div>
    </div>
  );
}
