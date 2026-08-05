import type { NextConfig } from 'next';

// GitHub Pages serves the site from /<repo>, so every asset and link needs that prefix.
// Set BASE_PATH in CI; local dev leaves it empty and runs at the root.
const basePath = process.env.BASE_PATH ?? '';

const nextConfig: NextConfig = {
  // The face is a proof-of-work marketing surface: everything pre-rendered, nothing SPA.
  // Static export keeps it deployable anywhere, including GitHub Pages.
  output: 'export',
  basePath,
  // Pages has no image optimizer.
  images: { unoptimized: true },
  // Pages serves /about as /about/index.html.
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
