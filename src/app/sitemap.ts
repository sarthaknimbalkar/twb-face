import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

const LAST_MODIFIED = new Date('2026-08-06');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/services`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/proof`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/pack`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/notes`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE.url}/apply`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/decline`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
