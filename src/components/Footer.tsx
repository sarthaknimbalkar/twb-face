import Link from 'next/link';
import { COHORT, SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="rule mt-24 border-t border-night-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl">
              {SITE.name}
              <span className="text-bone-faint"> / </span>
              <Link href="/wolves" className="text-bone-faint transition-colors hover:text-blood-bright">
                the wolves
              </Link>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-dim">
              SEO, GEO and AEO for twelve businesses at a time. Based in {SITE.region}, working
              anywhere.
            </p>
            <p className="mt-3 text-sm text-bone-faint">
              We say no more often than yes, and quickly.{' '}
              <Link href="/decline" className="wolf-link underline decoration-night-line underline-offset-4">
                Here’s one of the letters.
              </Link>
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-bone-faint">
            <p>
              Cohort: {COHORT.open} of {COHORT.capacity} seats open
            </p>
            <p className="mt-2">Next intake: {COHORT.nextIntake}</p>
            <p className="mt-2">
              <a href={`mailto:${SITE.email}`} className="wolf-link">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-widest text-bone-faint">
          © {new Date().getFullYear()} {SITE.name}. Sit. Stay. Rank.
        </p>
      </div>
    </footer>
  );
}
