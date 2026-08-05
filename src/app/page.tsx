import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { Scarcity } from '@/components/Scarcity';
import { TopOfThePage } from '@/components/TopOfThePage';
import { SourceWhisper } from '@/components/SourceWhisper';
import { faqPageJsonLd } from '@/lib/jsonld';
import { FAQS, SITE } from '@/lib/site';

const CAPABILITIES = [
  {
    name: 'It writes the thing',
    text: 'Give it a subject and it researches, writes and publishes the finished piece. Every figure traced to a named source and a date.',
  },
  {
    name: 'Then it keeps watch',
    text: 'Where you rank. Which AI assistants are quoting you, and who they quote instead when it isn’t you.',
  },
  {
    name: 'It turns readers into enquiries',
    text: 'Forms, scoring, and routing straight to your inbox. You find out who visited, who got in touch, and what it was worth.',
  },
  {
    name: 'And it argues with itself',
    text: 'Two versions of a page run against each other. The winner stays up. Nobody has to have an opinion about it in a meeting.',
  },
] as const;

const DISCIPLINES = ['SEO', 'AEO', 'GEO', 'E-E-A-T', 'Attribution'] as const;

/* Real telemetry (prod, 2026-08-05): 139 recorded engine answers for Client 020 between
   2026-07-31 and 2026-08-05, rival citations named per answer. Refresh at each deploy. */
const PROOF_STRIP = [
  { label: 'Client 020', stat: '139 answers logged', note: 'in the first six days, every one saved with the date and what was said' },
  { label: 'Four rivals', stat: 'Named, not implied', note: 'we know exactly who the assistants recommend instead. So does the client' },
  { label: 'House rule', stat: 'No made-up numbers', note: 'if it is on this page, you can go look at the row it came from' },
] as const;

const COMPARISON: readonly {
  dim: string;
  diy: string;
  typical: string;
  twb: string;
}[] = [
  {
    dim: 'What you actually get',
    diy: 'A blog with three posts, the newest from March',
    typical: 'A PDF of things you should do',
    twb: 'A system on your site that publishes every week whether or not anyone chases it',
  },
  {
    dim: 'Getting named by AI',
    diy: 'Not happening',
    typical: '“We’re looking into AI”',
    twb: 'Checked daily against Gemini, Perplexity and Tavily, and written down either way',
  },
  {
    dim: 'Where the facts come from',
    diy: 'Whoever had ten minutes',
    typical: 'The same top-ten listicle everybody copies',
    twb: 'A named publisher and a date on every number, or it doesn’t ship',
  },
  {
    dim: 'How many clients',
    diy: 'You, at 9 p.m., after a full day of real work',
    typical: 'However many sales can close',
    twb: 'Twelve. When it’s full, it’s full',
  },
  {
    dim: 'How you check up on us',
    diy: 'Squinting at Google yourself',
    typical: 'A screenshot of a traffic graph',
    twb: 'Your own login, the same numbers we see, whenever you want them',
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
              <Link href="/apply" className="btn-primary">Apply for a seat</Link>
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
              <strong className="font-semibold">{SITE.name}</strong> is a small SEO, GEO and AEO
              shop in Michigan. We work with twelve businesses at a time and get each one found
              first: top of Google, named inside AI assistants like ChatGPT and Perplexity, and
              tracked all the way to the phone ringing.
            </p>
            <p className="text-bone-dim">
              Most of our clients are the best at what they do and too busy doing it to argue
              with Google. That’s the whole point of us.
            </p>
            <p className="text-bone-dim">
              There’s no pricing page here and nobody will call you twice. You apply, we read it,
              and either a seat is open or it isn’t. Twelve isn’t a velvet rope. It’s the number
              where you still get the five of us instead of an account manager reading you a
              report over the phone.
            </p>
          </div>
        </div>
      </section>

      {/* ——— The arsenal, teased ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">What you’re actually hiring</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-4xl">
            An entire growth department, in one system.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-bone-dim">
            We built the thing we wanted to use, then hired five people to run it properly. You
            get both.
          </p>
          <div className="mt-12 grid gap-px bg-night-line md:grid-cols-2">
            {CAPABILITIES.map((item, i) => (
              <div key={item.name} className="group bg-night p-8 transition-colors hover:bg-night-soft">
                <p className="font-mono text-xs text-bone-faint">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl group-hover:text-blood-bright">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-dim">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            {DISCIPLINES.map((d) => (
              <span key={d} className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
                {d}
              </span>
            ))}
          </div>
          <Link href="/services" className="wolf-link mt-8 inline-block font-mono text-xs uppercase tracking-widest">
            All of it, in detail →
          </Link>
        </div>
      </section>

      {/* ——— Proof strip ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="kicker">Proof, redacted</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            We keep client names quiet. The numbers we’ll show anyone.
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
            Do it yourself, hire the usual agency, or come here
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
            Two seats are open. If you think your business belongs at the top of your patch,
            tell us why. It takes about four minutes.
          </p>
          <div className="mt-10">
            <Link href="/apply" className="btn-primary">Apply for a seat</Link>
          </div>
        </div>
      </section>

      <SourceWhisper text="Every question above is in the structured data too, word for word. That is most of the trick. The rest is doing it a few hundred more times without getting bored." />
    </>
  );
}
