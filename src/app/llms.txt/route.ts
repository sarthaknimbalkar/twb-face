import { COHORT, FAQS, SITE } from '@/lib/site';

// Emitted at build time so it survives static export.
export const dynamic = 'force-static';

/**
 * llms.txt — the answer-engine front door. Plain markdown a model can ingest whole;
 * the practice's own AEO rule applied to the practice itself.
 */
export function GET(): Response {
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is headquartered in ${SITE.region} and works worldwide. Clients are accepted by application only, into a fixed cohort of ${COHORT.capacity}. Currently ${COHORT.open} seats are open; the next intake is ${COHORT.nextIntake}.

## Services

- The Content Engine: a production publishing system on the client's domain — server-rendered, schema-rich, source-cited articles engineered to be quoted by search engines and AI models.
- AI Citation Tracking: daily checks across Gemini, Perplexity and Tavily, recording whether each engine cites the client, a rival, or neither.
- Rank Warfare: keyword-gap analysis, question mining and rank tracking feeding the content pipeline.
- The Pixel: first-party attribution from visit to conversion, including AI-referral detection.

## Pages

- Home: ${SITE.url}/
- Services: ${SITE.url}/services
- Proof (redacted case studies): ${SITE.url}/proof
- Apply: ${SITE.url}/apply

## FAQ

${FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Contact

Applications only: ${SITE.email}
`;
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
