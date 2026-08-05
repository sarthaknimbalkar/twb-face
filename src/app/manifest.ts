import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'TWB',
    description: SITE.description,
    start_url: '/',
    display: 'browser',
    background_color: '#0a0a0b',
    theme_color: '#0a0a0b',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
