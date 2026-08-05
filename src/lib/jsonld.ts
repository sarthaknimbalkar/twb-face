import { FAQS, SITE } from './site';

/**
 * Structured data is the load-bearing half of the face: it must always match the visible
 * text word-for-word (AEO rule — engines cross-check). Built here, rendered via <JsonLd/>.
 */

export function organizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Michigan',
      addressCountry: 'US',
    },
  };
}

export function professionalServiceJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#service`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    parentOrganization: { '@id': `${SITE.url}/#organization` },
    areaServed: [
      { '@type': 'State', name: 'Michigan' },
      { '@type': 'Country', name: 'United States' },
      'Worldwide',
    ],
    knowsAbout: [
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'AI citation tracking',
      'Content engineering',
    ],
  };
}

export function faqPageJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
