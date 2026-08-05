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
    role: 'Strategy, and the last word',
    bio: 'Eleven years of taking ground in markets that push back. Reads Google’s algorithm updates the way other people read the weather, then decides what we’re actually going to do about it. Every application, plan and rejection goes past this desk.',
    marks: ['11 years in search', 'Reads every application'],
  },
  {
    callsign: 'The Archivist',
    role: 'Writing and publishing',
    bio: 'Runs the machine that writes the work, and refuses to let a number through without a publisher and a date attached. Has strong views about heading structure. We have learned not to ask.',
    marks: ['Sources and dates every claim', 'Nothing ships stale'],
  },
  {
    callsign: 'The Listener',
    role: 'Watching the AI assistants',
    bio: 'Spends the day asking Gemini, Perplexity and Tavily what your customers ask them, and writing down the answers. Can tell you which assistant changed its mind about your industry last Tuesday, and roughly why.',
    marks: ['Daily checks, three assistants', 'Every answer kept with its date'],
  },
  {
    callsign: 'The Cartographer',
    role: 'Finding the gaps',
    bio: 'Maps what your competitors rank for, prices what it would cost to take each piece, and is unsentimental about the ones not worth having. Finds the questions nobody in your field has answered yet, which is usually where the easy wins are hiding.',
    marks: ['Competitor gap analysis', 'Question mining, weekly'],
  },
  {
    callsign: 'The Accountant',
    role: 'Following the money',
    bio: 'Traces a visit through to the phone call, and catches the AI referrals that every other setup quietly files under “direct”. Trusts nothing without a row to point at, including our own reporting, which gets the roughest treatment of all.',
    marks: ['Visit to enquiry, end to end', 'Catches the AI referrals'],
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
        Twelve clients means nobody gets handed to an account manager and nobody learns on your
        budget. The five below are the ones doing the work. You get names, faces and direct
        lines on day one. Everyone else gets callsigns, because we like it that way.
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
          <h2 className="mt-3 font-display text-2xl text-bone-dim">We don’t advertise jobs.</h2>
          <p className="mt-4 text-sm leading-relaxed text-bone-faint">
            If your work is already better than your CV, we’ll probably run into it.
          </p>
        </article>
      </div>

      <div className="rule mt-20 py-16 text-center">
        <p className="mx-auto max-w-xl text-bone-dim">
          You’ll know exactly who is working on your business before you sign anything. Most
          agencies can’t afford to promise that.
        </p>
        <Link href="/apply" className="btn-primary mt-8">Apply for a seat</Link>
      </div>
    </div>
  );
}
