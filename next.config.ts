import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The face is a proof-of-work marketing surface: everything server-rendered, nothing SPA.
  poweredByHeader: false,
};

export default nextConfig;
