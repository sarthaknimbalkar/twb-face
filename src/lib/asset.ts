const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Prefix a /public asset with the deployment's base path.
 *
 * next/link and the router handle basePath themselves, but next/image leaves `src` alone — so a
 * hardcoded "/marketing/hero.webp" resolves to the domain root and 404s wherever the site is
 * served from a subpath (GitHub Pages). Every image src goes through here.
 */
export function asset(path: string): string {
  return `${BASE}${path}`;
}
