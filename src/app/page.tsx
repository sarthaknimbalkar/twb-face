import Image from 'next/image';
import { ApplyForm } from '@/components/ApplyForm';
import { Counter } from '@/components/Counter';
import { JsonLd } from '@/components/JsonLd';
import { SourceWhisper } from '@/components/SourceWhisper';
import { WolfEyes } from '@/components/WolfEyes';
import { asset } from '@/lib/asset';
import { siteJsonLd } from '@/lib/jsonld';
import { FAQS, FOUNDING_COHORT_SEATS, SITE, STAGES } from '@/lib/site';

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

          <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-4">
            <a href="#apply" className="btn-primary">
              Apply as an operator <span aria-hidden>→</span>
            </a>
            <a href="#apply" className="btn-ghost">
              Apply as a partner <span aria-hidden>→</span>
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
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Ten blue links became one answer.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
            When a buyer asks an assistant a question, they do not get a page of options to work
            through. They get a paragraph and a short list of sources. That list is the entire
            market. Everything outside it is not ranked lower — it is absent.
          </p>

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
          <h2 className="reveal mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Six stages. One pipeline.
            <br />
            No handoffs to lose things in.
          </h2>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
            Most teams run these as six tools and four people, and lose the thread between each
            pair. Here they are one system, so the source that justified a sentence in stage one is
            still attached to it when stage six attributes the deal.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-16 px-6 pb-8">
          {STAGES.map((s, i) => (
            <article
              key={s.id}
              id={`stage-${s.id}`}
              className={`reveal grid items-center gap-8 md:grid-cols-2 ${
                i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
              }`}
            >
              <figure className="relative aspect-[4/3] overflow-hidden border border-night-line">
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

      {/* ——— Receipts ——— */}
      <section className="rule reveal" id="receipts">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker">Receipts</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            We do not print numbers
            <br />
            we cannot source.
          </h2>

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

      {/* ——— Partners ——— */}
      <section className="rule relative overflow-hidden" id="partners">
        <div className="absolute inset-0">
          <Image
            src={asset('/marketing/vault.webp')}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/90 to-night/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="kicker reveal">Partners</p>
          <h2 className="reveal mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Run it for one brand.
            <br />
            Or thirty-five.
          </h2>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
            The system was multi-brand before it was anything else, because the first operator was
            an agency. Nothing about running thirty accounts is a bolt-on here.
          </p>
          <ul className="reveal mt-12 grid gap-8 md:grid-cols-2">
            {PARTNER_POINTS.map(([h, b]) => (
              <li key={h}>
                <b className="block font-display text-xl">{h}</b>
                <span className="mt-2 block leading-relaxed text-bone-dim">{b}</span>
              </li>
            ))}
          </ul>
          <a href="#apply" className="btn-primary mt-12">
            Apply as a partner <span aria-hidden>→</span>
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
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/92 to-night" />
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

      <SourceWhisper text="Every question above is in the structured data too, word for word. That is most of the trick. The rest is doing it a few hundred more times without getting bored." />
    </>
  );
}
