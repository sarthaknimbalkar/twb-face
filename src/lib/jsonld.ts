import { CLAIMED, FAQS, FOUNDING_COHORT_SEATS, SITE, STAGES } from './site';

/**
 * Structured data is the load-bearing half of the face: it must always match the visible text,
 * because this is the page most likely to be read by the very answer engines we sell visibility
 * into. One @graph rather than a pile of loose blocks, so the entities can reference each other.
 */
export function siteJsonLd(): Record<string, unknown> {
  const origin = SITE.url;
  const orgId = `${origin}/#org`;
  const siteId = `${origin}/#website`;
  const claimed = Math.min(Math.max(CLAIMED, 0), FOUNDING_COHORT_SEATS);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE.name,
        url: `${origin}/`,
        email: SITE.email,
        description: SITE.description,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Michigan',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        name: SITE.name,
        url: `${origin}/`,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': `${origin}/#webpage`,
        url: `${origin}/`,
        name: `${SITE.name} — an entire growth department, one system`,
        isPartOf: { '@id': siteId },
        about: { '@id': orgId },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${origin}/#app`,
        name: SITE.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: `${origin}/`,
        publisher: { '@id': orgId },
        featureList: STAGES.map((s) => `${s.name}: ${s.claim}`),
      },
      {
        '@type': 'FAQPage',
        '@id': `${origin}/#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'Offer',
        '@id': `${origin}/#founding`,
        name: 'Founding cohort',
        availability:
          claimed >= FOUNDING_COHORT_SEATS
            ? 'https://schema.org/SoldOut'
            : 'https://schema.org/LimitedAvailability',
        inventoryLevel: {
          '@type': 'QuantitativeValue',
          value: FOUNDING_COHORT_SEATS - claimed,
          unitText: 'seats remaining',
        },
        offeredBy: { '@id': orgId },
      },
    ],
  };
}
