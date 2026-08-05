import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { Scarcity } from '@/components/Scarcity';
import { TopOfThePage } from '@/components/TopOfThePage';
import { SourceWhisper } from '@/components/SourceWhisper';
import { faqPageJsonLd } from '@/lib/jsonld';
import { FAQS, SITE } from '@/lib/site';

const ARSENAL_TEASER = [
  {
    name: 'The Content Engine',
    text: 'A production system on your domain — server-rendered, schema-rich, source-cited articles engineered to be quoted, not just crawled.',
  },
  {
    name: 'AI Citation Tracking',
    text: 'Daily checks across Gemini, Perplexity and Tavily: when an AI answers a question in your market, we know whether it cited you — and if not, whom.',
  },
  {
    name: 'Rank Warfare',
    text: 'Keyword-gap analysis against the brands holding your territory, rank tracking with teeth, and a content pipeline aimed at every gap.',
  },
  {
    name: 'The Pixel',
    text: 'Attribution down to the click. Every visit, every conversion, every AI referral — measured, so nobody has to believe anything on faith.',
  },
] as const;

/* Real telemetry (prod, 2026-08-05): 139 recorded engine answers for Client 020 between
   2026-07-31 and 2026-08-05, rival citations named per answer. Refresh at each deploy. */
const PROOF_STRIP = [
  { label: 'Client 020', stat: '139 answers interrogated', note: 'first six days on watch — every reply archived with excerpt and date' },
  { label: 'The rivals', stat: 'Named and dated', note: 'every citation an engine gives a competitor becomes a work order' },
  { label: 'The rule', stat: 'Zero invented numbers', note: 'this strip is telemetry or it is silence' },
] as const;

const COMPARISON: readonly {
  dim: string;
  diy: string;
  typical: string;
  twb: string;
}[] = [
  {
    dim: 'What you actually get',
    diy: 'A blog you stop updating in March',
    typical: 'A monthly PDF of recommendations',
    twb: 'A running content system on your domain, publishing and improving weekly',
  },
  {
    dim: 'AI answer engines (GEO)',
    diy: 'Invisible',
    typical: '“We’re looking into AI”',
    twb: 'Daily citation tracking across Gemini, Perplexity and Tavily — with receipts',
  },
  {
    dim: 'Facts and sources',
    diy: 'Whatever the intern found',
    typical: 'Recycled top-10 listicles',
    twb: 'Every statistic sourced, dated and attributable — engines and lawyers both approve',
  },
  {
    dim: 'Client load',
    diy: 'You, at 9 p.m., after a full day of real work',
    typical: 'As many logos as sales can close',
    twb: 'Twelve. Ever. When it’s full, it’s full',
  },
  {
    dim: 'Accountability',
    diy: 'None',
    typical: 'Traffic screenshots',
    twb: 'Rankings, citations and conversions in one ledger you can audit',
  },
];

const HERO = {
  kicker: 'SEO · GEO · AEO — by application only',
  line1: <>You came looking for The&nbsp;Woofback.</>,
  line2: 'You found the wolves.',
  sub: 'You’re at the top of the page right now. That is exactly where we put our clients: first on Google, first in the AI answers, first in the only fight that matters.',
} as const;

export default function HomePage() {
  const hero = HERO;
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />

      {/* ——— Hero: the turn ——— */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-28 md:pt-36 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <p className="kicker rise">{hero.kicker}</p>
            <h1 className="rise rise-1 mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              {hero.line1}
              <br />
              <span className="text-blood-bright">{hero.line2}</span>
            </h1>
            <p className="rise rise-2 mt-8 max-w-2xl text-lg leading-relaxed text-bone-dim">
              {hero.sub}
            </p>
            <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-4">
              <Link href="/apply" className="btn-primary">
                Request consideration
              </Link>
              <Link href="/services" className="btn-ghost">
                See the arsenal
              </Link>
            </div>
            <div className="rise rise-4 mt-14">
              <Scarcity />
            </div>
          </div>
          <div className="rise rise-3 hidden lg:block">
            <TopOfThePage />
          </div>
        </div>
      </section>

      {/* ——— Answer block: the query answered in the first screenful, AEO-first ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">What this is</p>
          <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed text-bone">
            <p>
              <strong className="font-semibold">{SITE.name}</strong> is a private SEO, GEO and
              AEO practice headquartered in Michigan and working worldwide. We accept a fixed
              cohort of twelve clients and make each one the answer in its market: ranked at
              the top of Google, quoted by AI answer engines like ChatGPT, Perplexity and
              Gemini, and measured all the way down to the conversion.
            </p>
            <p className="text-bone-dim">
              Most of our clients are simply the best at what they do — and too busy doing it
              to fight Google about it. That is the whole point of us.
            </p>
            <p className="text-bone-dim">
              We are not an agency in the usual sense. There is no pricing page, no sales team,
              and no onboarding funnel. There is an application, a review, and — for the few —
              a seat. Twelve seats isn’t a velvet rope for show: it is how you get the actual
              pack working on your business instead of an account manager reading you a report.
            </p>
          </div>
        </div>
      </section>

      {/* ——— The arsenal, teased ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">The arsenal</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Four instruments. One outcome: territory.
          </h2>
          <div className="mt-12 grid gap-px bg-night-line md:grid-cols-2">
            {ARSENAL_TEASER.map((item, i) => (
              <div key={item.name} className="group bg-night p-8 transition-colors hover:bg-night-soft">
                <p className="font-mono text-xs text-bone-faint">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl group-hover:text-blood-bright">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-dim">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="wolf-link mt-8 inline-block font-mono text-xs uppercase tracking-widest">
            Full inventory →
          </Link>
        </div>
      </section>

      {/* ——— Proof strip ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">Proof, redacted</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Clients are numbered, not named. Results aren’t shy.
          </h2>
          <div className="mt-12 grid gap-px bg-night-line md:grid-cols-3">
            {PROOF_STRIP.map((p) => (
              <div key={p.label} className="bg-night p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-bone-faint">
                  {p.label}
                </p>
                <p className="mt-4 font-display text-2xl text-blood-bright">{p.stat}</p>
                <p className="mt-2 text-sm text-bone-dim">{p.note}</p>
              </div>
            ))}
          </div>
          <Link href="/proof" className="wolf-link mt-8 inline-block font-mono text-xs uppercase tracking-widest">
            Open the ledger →
          </Link>
        </div>
      </section>

      {/* ——— Comparison table: the “competitors” section, framed as a category ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">Know your options</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Doing it yourself, hiring a typical agency, or joining the pack
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-night-line font-mono text-xs uppercase tracking-widest text-bone-faint">
                  <th className="py-4 pr-6 font-normal"></th>
                  <th className="py-4 pr-6 font-normal">DIY</th>
                  <th className="py-4 pr-6 font-normal">Typical agency</th>
                  <th className="py-4 font-normal text-blood-bright">{SITE.name}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.dim} className="border-b border-night-line align-top">
                    <th className="py-5 pr-6 font-medium text-bone">{row.dim}</th>
                    <td className="py-5 pr-6 text-bone-faint">{row.diy}</td>
                    <td className="py-5 pr-6 text-bone-dim">{row.typical}</td>
                    <td className="py-5 text-bone">{row.twb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ——— FAQ: visible text mirrors FAQPage JSON-LD exactly ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">Questions, answered first</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Frequently asked questions</h2>
          <div className="mt-12 max-w-prose space-y-10">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-xl">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            We don’t take clients.
            <br />
            <span className="text-blood-bright">We take territory.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-bone-dim">
            If your brand deserves the top of its market — and can prove it — request
            consideration for the next intake.
          </p>
          <div className="mt-10">
            <Link href="/apply" className="btn-primary">
              Request consideration
            </Link>
          </div>
        </div>
      </section>

      <SourceWhisper text="Five FAQs above, one FAQPage schema, zero discrepancies. That is the whole trick, done properly, several hundred times." />
    </>
  );
}
