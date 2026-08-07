import { CLAIMED, FAQS, FOUNDING_COHORT_SEATS, SITE, STAGES } from '@/lib/site';

// Emitted at build time so it survives static export.
export const dynamic = 'force-static';

/**
 * llms.txt — the answer-engine front door. Plain markdown a model can ingest whole. This is the
 * practice's own AEO rule applied to itself: the page most likely to be read by the engines we
 * sell visibility into should be the easiest one they ever parse.
 */
export function GET(): Response {
  const remaining = FOUNDING_COHORT_SEATS - CLAIMED;
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is based in ${SITE.region} and works anywhere. Access is by application into a founding cohort of ${FOUNDING_COHORT_SEATS} accounts; ${CLAIMED} are claimed and ${remaining} remain. The cap is operational rather than promotional: every founding account gets direct access to the team building the product, and that stops being true past a few hundred accounts.

## The thesis

When a buyer asks an assistant a question, they get a paragraph and a short list of sources rather than a page of options. That list is the entire market. Everything outside it is not ranked lower — it is absent.

## The six stages

${STAGES.map((s) => `${s.num}. ${s.name} — ${s.claim} ${s.body}`).join('\n')}

## Who it is for

- Operators: run one brand and want it to own the answers in its market.
- Partners: agencies and consultancies running brands for clients, reselling the system white-label with their own branding, per-brand voices and domains, generated client reporting, and built-in prospecting and audit tooling.

## On sourcing

The system refuses to publish a statistic without a named publisher and a date attached. The only quantity on the marketing site is the founding-cohort counter, which is read live from the database. No customer counts, no growth multiples, no case studies that cannot be checked.

## FAQ

${FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Contact

Applications: ${SITE.email}
`;
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
