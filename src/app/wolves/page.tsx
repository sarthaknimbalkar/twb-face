import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Wolves',
  description: 'You were not supposed to find this page. Naturally, you did.',
  robots: { index: false, follow: false },
};

export default function WolvesPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="kicker">off the record</p>
      <h1 className="mt-6 font-display text-5xl leading-tight tracking-tight md:text-6xl">
        The Woof Back is how we answer the phone.
        <br />
        <span className="text-blood-bright">The wolves are what show up.</span>
      </h1>
      <div className="mt-8 max-w-prose space-y-4 leading-relaxed text-bone-dim">
        <p>
          One name, two moods. The friendly half writes the documentation, answers the support
          email and puts the FAQ in schema. The other half spends all day working out which three
          brands an assistant is willing to name, and how to make one of them yours.
        </p>
        <p>
          This page is not in the sitemap and is not indexed. You found it because you read footers
          and hover over things, which means you check people out properly before you hire them. So
          do we. You would fit in.
        </p>
      </div>
      <Link href="/#apply" className="btn-primary mt-10">
        Run with the pack
      </Link>
      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint/80">
        there is no second page to be on
      </p>
    </div>
  );
}
