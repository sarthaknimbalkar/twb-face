import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Pack — who runs The Woofback',
  description:
    'The operators behind The Woofback: a small pack of search, content and attribution specialists. Twelve clients, one standard, no juniors learning on your budget.',
  alternates: { canonical: '/pack' },
};

interface Operator {
  callsign: string;
  role: string;
  bio: string;
  marks: string[];
}

/**
 * TEMPLATE DATA — the roster style is the deliverable. At go-live, callsigns can stay
 * (the redaction is the brand) but roles/bios/marks must describe the real operators,
 * and at least one named principal should carry a Person schema for E-E-A-T.
 */
const ROSTER: readonly Operator[] = [
  {
    callsign: 'Alpha',
    role: 'Principal · Strategy & the final word',
    bio: 'A decade and change of taking search territory in markets that fight back. Reads algorithm updates the way rivals read press releases — afterward, and with sympathy. Signs off every application, every plan, every decline.',
    marks: ['11+ years in search', 'Every cohort seat, personally approved'],
  },
  {
    callsign: 'The Archivist',
    role: 'Content engineering',
    bio: 'Runs the engine that writes what machines quote: sourced, dated, structured, and refreshed before it ages. Believes an unsourced statistic is a confession. Has opinions about heading hierarchies that end friendships.',
    marks: ['Every fact sourced + dated', 'Schema that matches the visible text, always'],
  },
  {
    callsign: 'The Listener',
    role: 'AI citation intelligence',
    bio: 'Asks Gemini, Perplexity and Tavily the questions your customers ask — every day, on the record. Knows which engine cited whom, when, and what changed its mind. The reason “we’re winning in AI” is a chart here, not a mood.',
    marks: ['Daily checks across three engines', 'Citation ledger with dates'],
  },
  {
    callsign: 'The Cartographer',
    role: 'Rank warfare & territory mapping',
    bio: 'Maps every keyword the rivals hold and prices the cost of taking it. Mines the questions people actually ask before anyone else notices they exist. Draws the map; the engine marches on it.',
    marks: ['Keyword-gap analysis with teeth', 'Question mining, weekly'],
  },
  {
    callsign: 'The Accountant',
    role: 'Attribution & the pixel',
    bio: 'Follows every click from the answer to the invoice. Labels the AI referrals other setups lose in “direct”. Does not accept faith as a data source and does not extend that courtesy to us either — the pack’s own numbers get audited hardest.',
    marks: ['First-party attribution', 'AI-referral detection'],
  },
] as const;

export default function PackPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker rise">The pack</p>
      <h1 className="rise rise-1 mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Small by design. Senior by policy.
      </h1>
      <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        Twelve clients means no account managers, no juniors learning on your budget, and no
        handoffs. The people below are the people who do the work. Clients get names and faces
        on day one; the public gets callsigns — redaction is house style.
      </p>

      <div className="rise rise-3 mt-16 grid gap-px bg-night-line md:grid-cols-2">
        {ROSTER.map((op) => (
          <article key={op.callsign} className="group bg-night p-8 transition-colors hover:bg-night-soft">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blood-bright">
              {op.callsign}
            </p>
            <h2 className="mt-3 font-display text-2xl group-hover:text-blood-bright">{op.role}</h2>
            <p className="mt-4 text-sm leading-relaxed text-bone-dim">{op.bio}</p>
            <ul className="mt-5 space-y-2">
              {op.marks.map((m) => (
                <li key={m} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-bone-faint">
                  <span aria-hidden className="h-1 w-1 bg-blood" />
                  {m}
                </li>
              ))}
            </ul>
          </article>
        ))}
        {/* The empty seat: recruiting and exclusivity in one cell. */}
        <article className="flex flex-col items-start justify-center border border-dashed border-night-line bg-night p-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">Unfilled</p>
          <h2 className="mt-3 font-display text-2xl text-bone-dim">The pack does not post openings.</h2>
          <p className="mt-4 text-sm leading-relaxed text-bone-faint">
            If your work already outranks your reputation, it will find us.
          </p>
        </article>
      </div>

      <div className="rule mt-20 py-16 text-center">
        <p className="mx-auto max-w-xl text-bone-dim">
          You will know exactly who is on your account before you sign anything. That is a
          promise most agencies cannot afford to make.
        </p>
        <Link href="/apply" className="btn-primary mt-8">
          Request consideration
        </Link>
      </div>
    </div>
  );
}
