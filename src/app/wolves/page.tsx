import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Wolves',
  description: 'You were not supposed to find this page. Naturally, you did.',
  robots: { index: false, follow: false },
};

export default function WolvesPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="kicker">off the record</p>
      <h1 className="mt-6 font-display text-5xl leading-tight tracking-tight md:text-6xl">
        The Woofback is how we answer the phone.
        <br />
        <span className="text-blood-bright">The wolves are what show up.</span>
      </h1>
      <div className="mt-8 max-w-prose space-y-4 leading-relaxed text-bone-dim">
        <p>
          One name, two natures. The Woofback smiles at your customers, holds the door, says
          please. The wolves are the thing rival agencies check at 2 a.m. to see what just
          outranked them. You hired both; only one of them writes the invoices.
        </p>
        <p>
          This page is not in the sitemap. It is not indexed. You found it because you read
          footers, hover things, and view source — which means you evaluate vendors the way we
          evaluate everything. You should probably apply.
        </p>
      </div>
      <Link href="/apply" className="btn-primary mt-10">
        Run with the pack
      </Link>
      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint/80">
        the top of the page is the top of the page
      </p>
    </div>
  );
}
