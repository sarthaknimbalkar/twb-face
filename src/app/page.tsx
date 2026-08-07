import Image from 'next/image';
import { ApplyForm } from '@/components/ApplyForm';
import { CitationBoard } from '@/components/CitationBoard';
import { Counter } from '@/components/Counter';
import { JsonLd } from '@/components/JsonLd';
import { QuestionQueue } from '@/components/QuestionQueue';
import { SourceWhisper } from '@/components/SourceWhisper';
import { WolfEyes } from '@/components/WolfEyes';
import { asset } from '@/lib/asset';
import { siteJsonLd } from '@/lib/jsonld';
import {
  AFTER_YOU_APPLY,
  CLAIMED,
  COMPARISON,
  FAQS,
  FOUNDING_COHORT_SEATS,
  LEDGER,
  PRICING,
  SITE,
  STAGES,
} from '@/lib/site';

const THESIS_TILES = [
  [
    'The list is short',
    'An answer cites a handful of sources. Not ten, not a page of options. There is no second page to be on.',
  ],
  [
    'It compounds',
    'A source that gets cited is read, linked and cited again. The gap does not stay the size it starts at.',
  ],
  [
    'It is being set now',
    'The engines re-crawl and re-decide constantly. Whoever is feeding them this quarter is writing the defaults.',
  ],
] as const;

const PROOFS = [
  ['Publisher and date, every figure', 'A statistic without attribution never reaches the page.'],
  [
    'Schema that matches the page',
    'JSON-LD describes what a reader actually sees, not a better version of it.',
  ],
  ['A real author per brand', 'E-E-A-T bylines that belong to someone, with the credentials to hold up.'],
  ['Freshness is tracked', 'Content drifting past roughly ninety days is queued for refresh, not left to rot.'],
] as const;

const PARTNER_POINTS = [
  [
    'One console, every brand',
    'Separate voice, domain, team and reporting per brand. One place to run them.',
  ],
  [
    'Your logo, your domain, your margin',
    'White-label throughout. The client sees your practice, not our software.',
  ],
  [
    'Client reporting, generated',
    'Monthly reports that assemble themselves from what actually happened.',
  ],
  [
    'Prospecting and audit built in',
    'Find the account, show them precisely what is broken, close them with the fix.',
  ],
] as const;

const PERKS = [
  'Founding rate, locked for the life of the account',
  'A direct line to the people building the product',
  'Priority placement in the partner programme',
  'Your requests carry weight on the roadmap',
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteJsonLd()} />

      {/* ——— Hero ——— */}
      <section className="relative overflow-hidden" id="top">
        <div className="absolute inset-0">
          {/* The burning corridor is the focal point of a square image, so it is anchored to the
              right half rather than stretched full-bleed — otherwise the scrim that keeps the
              headline legible lands directly on the fire and buries it. */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
            <Image
              src={asset('/marketing/hero.webp')}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-night via-night/45 to-night/70 lg:via-transparent lg:to-night/60" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
          <p className="kicker rise flex items-center gap-3">
            <span className="pulse-soft inline-block h-1.5 w-1.5 rounded-full bg-blood-bright" />
            The answer layer is being indexed right now
          </p>
          <h1 className="rise rise-1 mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            An entire growth department.
            <br />
            <em className="not-italic text-blood-bright">One system.</em>
          </h1>
          <p className="rise rise-2 mt-8 max-w-2xl text-lg leading-relaxed text-bone-dim">
            {SITE.name} researches, writes, publishes, ranks and converts — and traces every figure
            it prints to a named publisher and a date. Built for a web where the assistant answers
            the question and cites three brands.
          </p>
          <p className="rise rise-2 mt-4 font-display text-xl text-bone">Be one of the three.</p>
          <p className="rise rise-2 mt-5 max-w-xl border-l-2 border-blood/60 pl-4 text-sm leading-relaxed text-bone-faint">
            In plain terms: when someone asks ChatGPT or Google who to call, a handful of
            businesses get named. We do the publishing, tracking and follow-up that gets you
            on that list — and show you the receipts.
          </p>

          <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-4">
            <a href="#apply?path=operator" className="btn-primary">
              Apply for my business <span aria-hidden>→</span>
            </a>
            <a href="#apply?path=partner" className="btn-ghost">
              Apply for my clients <span aria-hidden>→</span>
            </a>
          </div>

          <div className="rise rise-4 mt-14 flex flex-wrap items-end gap-8">
            <Counter variant="hero" />
            <div className="hidden pb-2 lg:block">
              <WolfEyes />
            </div>
          </div>
        </div>
      </section>

      {/* ——— The window ——— */}
      <section className="rule reveal" id="thesis">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker">The window</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Ten blue links became one answer.
            </h2>
            <p className="text-lg leading-relaxed text-bone-dim">
              When a buyer asks an assistant a question, they do not get a page of options to work
              through. They get a paragraph and a short list of sources. That list is the entire
              market. Everything outside it is not ranked lower — it is absent.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-night-line md:grid-cols-3">
            {THESIS_TILES.map(([h, b], i) => (
              <div key={h} className="group bg-night p-8 transition-colors hover:bg-night-soft">
                <span className="font-mono text-xs text-bone-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-xl group-hover:text-blood-bright">{h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-dim">{b}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-14 border-l-2 border-blood pl-6 font-display text-2xl leading-snug md:text-3xl">
            You are not competing for a ranking any more.
            <br />
            <em className="not-italic text-blood-bright">
              You are competing for a slot in the answer.
            </em>
          </blockquote>
        </div>
      </section>

      {/* ——— The machine ——— */}
      <section className="rule" id="machine">
        <div className="mx-auto max-w-6xl px-6 pt-24">
          <p className="kicker reveal">The machine</p>
          <div className="reveal mt-4 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Six stages. One pipeline.
              <br />
              No handoffs to lose things in.
            </h2>
            <p className="text-lg leading-relaxed text-bone-dim">
              Most teams run these as six tools and four people, and lose the thread between each
              pair. Here they are one system, so the source that justified a sentence in stage one
              is still attached to it when stage six attributes the deal.
            </p>
          </div>
        </div>

        {/* Tighter than one slab per stage: six full-height rows read as six separate pitches
            rather than one sequence, and stretch the page for no gain. */}
        <div className="mx-auto mt-14 max-w-6xl divide-y divide-night-line px-6 pb-8">
          {STAGES.map((s, i) => (
            <article
              key={s.id}
              id={`stage-${s.id}`}
              className={`reveal grid items-center gap-8 py-10 md:grid-cols-[5fr_6fr] ${
                i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
              }`}
            >
              <figure className="relative aspect-[16/9] overflow-hidden border border-night-line">
                <Image
                  src={asset(`/marketing/${s.img}.webp`)}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
                  {s.num} <span className="text-bone-faint/60">/ 06</span>
                </p>
                <h3 className="mt-3 font-display text-3xl">{s.name}</h3>
                <p className="mt-3 font-mono text-sm text-blood-bright">{s.claim}</p>
                <p className="mt-4 max-w-prose leading-relaxed text-bone-dim">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ——— The product itself. Abstract art sells a mood; a buyer handing over their domain
              wants to see the actual screens. ——— */}
      <section className="rule reveal" id="console">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker">The console</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              This is the thing itself.
            </h2>
            <p className="text-lg leading-relaxed text-bone-dim">
              Two views from the running system, drawn here in our own type but carrying the real
              numbers, unedited — including the ones that are unflattering. Client identities
              are withheld; nothing else is.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            <figure>
              <CitationBoard />
              <figcaption className="mt-4 max-w-prose text-sm leading-relaxed text-bone-dim">
                Share of voice across the assistants. This account is new, so the honest reading
                is &ldquo;not cited yet&rdquo; — and the board names the domains being cited
                instead, with coverage and movement for each. That list is the work queue.
              </figcaption>
            </figure>
            <figure>
              <QuestionQueue />
              <figcaption className="mt-4 max-w-prose text-sm leading-relaxed text-bone-dim">
                Real questions, mined from live search demand, competitor citations and the gaps
                in what you have published — each scored, with the system&rsquo;s own reasoning
                attached. You accept the good ones and they start being tracked on the next run.
              </figcaption>
            </figure>
          </div>

          {/* The reader most likely to apply is the one who just saw the machinery. Do not make
              them scroll seven more screens to act on it. */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-night-line bg-night-soft/60 px-6 py-6">
            <p className="font-display text-xl">
              Want this pointed at <span className="text-blood-bright">your</span> market?
            </p>
            <a href="#apply?path=operator" className="btn-primary">
              Apply for my business <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ——— Receipts ——— */}
      <section className="rule reveal" id="receipts">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker">Receipts</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              We do not print numbers
              <br />
              we cannot source.
            </h2>
            <p className="text-lg leading-relaxed text-bone-dim">
              Three figures follow. Each one is a count of rows in the production database rather
              than a claim about how well things are going.
            </p>
          </div>

          {/* The honest version of social proof: three figures that exist as database rows. */}
          <div className="mt-12 grid gap-px bg-night-line md:grid-cols-3">
            {LEDGER.map((l) => (
              <div key={l.stat} className="bg-night p-8">
                <p className="font-display text-3xl text-blood-bright">{l.stat}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-bone-faint">
                  {l.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-bone-dim">{l.b}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div className="max-w-prose space-y-4 leading-relaxed text-bone-dim">
              <p className="text-bone">
                You will have noticed this page does not claim ten thousand customers.
              </p>
              <p>
                The engine refuses to publish a statistic without a publisher and a date attached to
                it, and we hold our own front door to the standard we sell. The single number on
                this page is the cohort counter, and it reads live from our database.
              </p>
              <p className="border-l-2 border-blood pl-4 font-display text-lg italic text-bone">
                Anyone can generate content now. The entire remaining game is being trusted enough
                to cite.
              </p>
            </div>
            <ul className="space-y-6">
              {PROOFS.map(([h, b]) => (
                <li key={h} className="flex gap-4">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-blood" />
                  <div>
                    <b className="block font-display text-lg">{h}</b>
                    <span className="mt-1 block text-sm leading-relaxed text-bone-dim">{b}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— The category, framed. Most buyers do not know what the alternatives even are. ——— */}
      <section className="rule reveal" id="compare">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker">Know your options</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Four ways to do this. One of them keeps working after you close the laptop.
          </h2>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-widest text-bone-faint md:hidden">
            Swipe sideways to compare →
          </p>
          <div className="scroll-fade mt-3 overflow-x-auto md:mt-12">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-night-line font-mono text-[11px] uppercase tracking-widest text-bone-faint">
                  <th className="w-[19%] py-4 pr-6 font-normal" />
                  <th className="w-[20%] py-4 pr-6 font-normal">Do it yourself</th>
                  <th className="w-[20%] py-4 pr-6 font-normal">An agency retainer</th>
                  <th className="w-[20%] py-4 pr-6 font-normal">An AI writing tool</th>
                  <th className="w-[21%] py-4 font-normal text-blood-bright">{SITE.name}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.dim} className="border-b border-night-line align-top">
                    <th className="py-5 pr-6 font-medium text-bone">{row.dim}</th>
                    <td className="py-5 pr-6 text-bone-faint">{row.diy}</td>
                    <td className="py-5 pr-6 text-bone-faint">{row.agency}</td>
                    <td className="py-5 pr-6 text-bone-faint">{row.tool}</td>
                    <td className="py-5 text-bone">{row.twb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ——— Partners ——— */}
      <section className="rule relative overflow-hidden" id="partners">
        <div className="absolute inset-0">
          <Image
            src={asset('/marketing/vault.webp')}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/92 to-night/55" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="kicker reveal">Partners</p>
          <div className="reveal mt-4 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Run it for one brand.
              <br />
              Or thirty-five.
            </h2>
            <p className="text-lg leading-relaxed text-bone-dim">
              The system was multi-brand before it was anything else, because the first operator
              was an agency. Nothing about running thirty accounts is a bolt-on here.
            </p>
          </div>
          <ul className="reveal mt-12 grid gap-8 md:grid-cols-2">
            {PARTNER_POINTS.map(([h, b]) => (
              <li key={h}>
                <b className="block font-display text-xl">{h}</b>
                <span className="mt-2 block leading-relaxed text-bone-dim">{b}</span>
              </li>
            ))}
          </ul>
          <a href="#apply?path=partner" className="btn-primary mt-12">
            Apply for my clients <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* ——— The founding cohort + application ——— */}
      <section className="rule relative overflow-hidden" id="apply">
        <div className="absolute inset-0">
          <Image
            src={asset('/marketing/cohort.webp')}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/88 to-night" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="kicker">The founding cohort</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              {FOUNDING_COHORT_SEATS} seats.
              <br />
              <span className="text-blood-bright">Then the door closes.</span>
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-bone-dim">
              The cap is operational, not promotional. Every founding account gets direct access to
              the team building this, and that is a promise which stops being true somewhere north
              of a few hundred accounts. So we are stopping at {FOUNDING_COHORT_SEATS}.
            </p>
            <ul className="mt-8 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 leading-relaxed text-bone-dim">
                  <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 bg-blood" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Counter variant="block" />
            </div>
          </div>
          <ApplyForm />
        </div>
      </section>

      {/* ——— Money and process: the two questions every buyer has and most pages dodge. ——— */}
      <section className="rule reveal" id="how">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="kicker">What it costs</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                No pricing page, and here is exactly why.
              </h2>
              <p className="mt-5 max-w-prose leading-relaxed text-bone-dim">
                We will not print a number we cannot stand behind for your situation, for the same
                reason we will not print a statistic without a source. What we can tell you is the
                shape of it, which is most of what you actually need to judge.
              </p>
              <dl className="mt-10 space-y-7">
                {PRICING.map((p) => (
                  <div key={p.h} className="flex gap-4">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-blood" />
                    <div>
                      <dt className="font-display text-lg">{p.h}</dt>
                      <dd className="mt-1.5 max-w-prose text-sm leading-relaxed text-bone-dim">
                        {p.b}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="kicker">What happens next</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                From the form to the first published piece.
              </h2>
              <p className="mt-5 max-w-prose leading-relaxed text-bone-dim">
                No discovery-call theatre and no six-week onboarding. This is the real sequence,
                including the part where we tell you it takes months.
              </p>
              <ol className="mt-10 space-y-px bg-night-line">
                {AFTER_YOU_APPLY.map((s, i) => (
                  <li key={s.h} className="group bg-night p-6 transition-colors hover:bg-night-soft">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <span className="font-mono text-xs text-bone-faint">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-blood-bright">
                        {s.when}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl group-hover:text-blood-bright">
                      {s.h}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone-dim">{s.b}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Who is behind it. A page selling E-E-A-T bylines cannot itself be anonymous. ——— */}
      <section className="rule reveal" id="who">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-[2fr_3fr]">
            <div>
              <p className="kicker">Who is behind it</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Five people and a system they had to build for themselves first.
              </h2>
            </div>
            <div className="max-w-prose space-y-5 leading-relaxed text-bone-dim">
              <p>
                {SITE.name} started as an agency problem. We were running search and content for
                other people&rsquo;s brands, watching the same work get lost between a writer, a
                spreadsheet, an SEO tool and a reporting deck, and losing the thread every time.
                So we built the pipeline we wanted, ran our own clients on it, and only then
                pointed it outward.
              </p>
              <p>
                That is why the multi-brand and white-label parts are not bolted on: the first
                operator was an agency running accounts, and the software had to survive that
                before it was allowed to survive anything else.
              </p>
              <p className="border-l-2 border-blood pl-4 font-display text-lg italic text-bone">
                We sell E-E-A-T bylines for a living, so it would be a poor look to be anonymous
                here. Founding accounts get names, faces and direct lines on day one — before
                anything is signed.
              </p>
              <p>
                Based in {SITE.region}. Small on purpose, and staying that way for as long as the
                promise of a direct line means anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FAQ: visible text mirrors the FAQPage schema exactly ——— */}
      <section className="rule reveal" id="faq">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker">Straight answers</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Questions worth asking.
          </h2>
          <div className="mt-12 max-w-3xl divide-y divide-night-line border-y border-night-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl transition-colors group-open:text-blood-bright">
                  {f.q}
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-bone-faint transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-prose leading-relaxed text-bone-dim">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Closing CTA. Never end a sales page on a question. ——— */}
      <section className="rule reveal">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Somebody in your market is going to be the answer.
            <br />
            <span className="text-blood-bright">It may as well be you.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-bone-dim">
            {FOUNDING_COHORT_SEATS - CLAIMED} founding seats are still open. The application is five
            questions and we reply either way.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#apply?path=operator" className="btn-primary">
              Apply for my business <span aria-hidden>→</span>
            </a>
            <a href="#apply?path=partner" className="btn-ghost">
              Apply for my clients <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <SourceWhisper text="Every question above is in the structured data too, word for word. That is most of the trick. The rest is doing it a few hundred more times without getting bored." />
    </>
  );
}
