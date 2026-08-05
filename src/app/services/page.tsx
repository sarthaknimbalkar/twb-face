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
    name: 'It writes and publishes',
    claim: 'A publishing system, not a blog.',
    detail: [
      'Give it a subject and it does the research, writes the piece, and puts it live on your site, finished.',
      'Every figure comes with the publisher who reported it and the date they reported it. If we can’t trace a number, it doesn’t go in.',
      'Pages are plain server-rendered HTML, so Google and the AI crawlers get the whole thing instead of half of it.',
      'Anything that starts going stale gets rewritten before it costs you a position.',
    ],
    aside: 'Machines quote what they can check. So we make everything checkable.',
  },
  {
    no: '02',
    name: 'Then it keeps watch',
    claim: 'Every day, on the record.',
    detail: [
      'We put your customers’ questions to Gemini, Perplexity and Tavily every day and write down what came back.',
      'Named you? Named a competitor? Made something up entirely? All three get logged, with the date and the wording.',
      'When a competitor takes a mention that should have been yours, that becomes a job on next week’s list.',
      'So “we’re doing well in AI search” is a chart you can open, not a thing we say on a call.',
    ],
    aside: 'People ask assistants who to hire now. Somebody gets named. We would like it to be you.',
  },
  {
    no: '03',
    name: 'It hunts for gaps',
    claim: 'Positions, not impressions.',
    detail: [
      'We pull everything your competitors rank for that you don’t, then work out which of it is actually worth having.',
      'We mine the real questions people type, including the ones nobody in your industry has bothered to answer yet.',
      'Rankings feed straight back into what gets written next, so the pipeline points at whatever is currently losing.',
      'Local matters too. Being first in your county beats being twelfth nationally.',
    ],
    aside: 'Most agencies report on the fight. We would rather be in it.',
  },
  {
    no: '04',
    name: 'It follows the money',
    claim: 'From the click to the phone call.',
    detail: [
      'A small tag on your pages ties visits, enquiries and conversions together in one place.',
      'When an AI assistant sends someone your way, it gets labelled as such instead of vanishing into “direct” like it does everywhere else.',
      'Forms, lead scoring and routing land the enquiry in your inbox or CRM without anybody re-typing it.',
      'And two versions of a page can run against each other, with the winner kept automatically.',
    ],
    aside: 'You get the same login we use. Check it at midnight if you like.',
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="kicker">The arsenal</p>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
        An entire growth department, in one system.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        It all runs as one thing, which is the point. Four separate tools that don’t talk to
        each other is how most of this gets sold, and it’s why most of it doesn’t work. It also
        explains the twelve: you can’t run this properly for a hundred businesses, and we’d
        rather not find out what happens if we try.
      </p>

      <div className="mt-20 space-y-20">
        {WEAPONS.map((w) => (
          <section key={w.no} className="rule reveal grid gap-8 pt-12 md:grid-cols-[1fr_2fr]">
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
          None of it is sold separately. A seat gets you all four and the five people who run
          them.
        </p>
        <Link href="/apply" className="btn-primary mt-8">Apply for a seat</Link>
      </div>
    </div>
  );
}
