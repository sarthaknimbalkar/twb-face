import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Gate } from '@/components/Gate';
import { Header } from '@/components/Header';
import { SourceWhisper } from '@/components/SourceWhisper';
import { SITE } from '@/lib/site';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — an entire growth department, one system`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — an entire growth department, one system`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        {/* Stamp the gate before first paint so returning visitors never see a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!localStorage.getItem('twb_gate'))document.documentElement.setAttribute('data-gate','')}catch(e){}",
          }}
        />
      </head>
      <body>
        <Gate />
        <div className="grain" aria-hidden />
        <SourceWhisper text="You read source code before hiring an agency. Good. So do we, before answering an application. The polite half of this site wrote the HTML; the other half wrote the comments." />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-blood focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
