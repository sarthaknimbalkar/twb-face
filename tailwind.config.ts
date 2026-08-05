import type { Config } from 'tailwindcss';

// One accent. Dark editorial. The palette is the brand: night ink, bone text, blood accent.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0a0a0b',
          soft: '#111113',
          line: '#232326',
        },
        bone: {
          DEFAULT: '#e8e4dc',
          dim: '#a09a8e',
          faint: '#847d70',
        },
        blood: {
          DEFAULT: '#c62f2f',
          bright: '#e04545',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};

export default config;
