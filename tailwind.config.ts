import type { Config } from 'tailwindcss';

// One accent. Dark editorial. The palette is the brand: night ink, bone text, blood accent.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // RGB triplets live in globals.css (:root / html.wolf) so the Wolfback host
        // can invert the palette without touching a single component class.
        night: {
          DEFAULT: 'rgb(var(--night) / <alpha-value>)',
          soft: 'rgb(var(--night-soft) / <alpha-value>)',
          line: 'rgb(var(--night-line) / <alpha-value>)',
        },
        bone: {
          DEFAULT: 'rgb(var(--bone) / <alpha-value>)',
          dim: 'rgb(var(--bone-dim) / <alpha-value>)',
          faint: 'rgb(var(--bone-faint) / <alpha-value>)',
        },
        blood: {
          DEFAULT: 'rgb(var(--blood) / <alpha-value>)',
          bright: 'rgb(var(--blood-bright) / <alpha-value>)',
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
