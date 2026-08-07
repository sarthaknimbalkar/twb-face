import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

const LAST_MODIFIED = new Date('2026-08-08');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1 },
  ];
}
