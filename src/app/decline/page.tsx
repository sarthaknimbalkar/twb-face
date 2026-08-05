import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Decline — what a no looks like',
  description:
    'The Woofback declines most applications. This is what the letter looks like: read by the whole pack, answered with reasons, and sent quickly enough to respect your quarter.',
  alternates: { canonical: '/decline' },
};

export default function DeclinePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker rise">Exhibit A</p>
      <h1 className="rise rise-1 mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        Most agencies frame their wins. We framed a rejection.
      </h1>
      <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        We say no more often than yes — but the no comes fast, kind, and with a real reason.
        Names redacted, wording verbatim from the house template, because how a practice says
        no tells you more than how it says yes.
      </p>

      {/* The letter, framed like the artifact it is. */}
      <div className="rise rise-3 relative mx-auto mt-16 max-w-2xl border border-night-line bg-night-soft p-10 md:p-14">
        <div className="pointer-events-none absolute -top-5 right-6 rotate-[-12deg] border-4 border-blood/70 bg-night px-4 py-2 md:right-10">
          <p className="font-mono text-lg uppercase tracking-[0.2em] text-blood-bright/80">Declined</p>
        </div>
        <p className="max-w-[70%] font-mono text-xs uppercase leading-relaxed tracking-[0.25em] text-bone-faint">
          Application TWB-████ · reviewed in full · all five present
        </p>
        <div className="mt-8 space-y-5 font-display text-lg leading-relaxed text-bone">
          <p>Dear ████████,</p>
          <p>
            Your application was read by all five of us, twice. That is not a courtesy we
            extend for form’s sake — it is the whole review process, and you had it.
          </p>
          <p>
            We are saying no, and you deserve the real reason: your business is won on
            relationships and word of mouth, and honestly, search — ours or anyone’s — will be
            the third most important thing you do this year, not the first. We only take seats
            where we can be the first thing. Spending your money otherwise would be a favour
            to us, not to you.
          </p>
          <p>
            If that changes — customers Googling before they call, a competitor winning with
            content you know is worse than yours — write again and say so. The reading is just
            as fast the second time, and a previous no counts for nothing against you.
          </p>
          <p>
            We wish you a dull, profitable year without us.
            <br />— The pack
          </p>
        </div>
        <p className="mt-10 border-t border-night-line pt-6 font-mono text-[11px] uppercase tracking-widest text-bone-faint">
          Sent day 4 of review · no invoice, no upsell, no “growth call” · the seat went to
          someone we could take to the top
        </p>
      </div>

      <div className="rule mt-20 py-16 text-center">
        <p className="mx-auto max-w-xl text-bone-dim">
          If you read that and thought “I want the version where they say yes” — that letter
          is shorter. It just says when we start.
        </p>
        <Link href="/apply" className="btn-primary mt-8">
          Apply anyway
        </Link>
      </div>
    </div>
  );
}
