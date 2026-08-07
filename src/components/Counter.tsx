import { CLAIMED, FOUNDING_COHORT_SEATS } from '@/lib/site';

/**
 * The only quantity on the site. It is a live count rather than a boast, which is the whole
 * reason it is allowed to be here at all.
 */
export function Counter({ variant = 'hero' }: { variant?: 'hero' | 'block' }) {
  const claimed = Math.min(Math.max(CLAIMED, 0), FOUNDING_COHORT_SEATS);
  const remaining = FOUNDING_COHORT_SEATS - claimed;
  const pct = Math.max(1.5, (claimed / FOUNDING_COHORT_SEATS) * 100);
  const full = remaining <= 0;

  return (
    <div
      className={`border border-night-line bg-night-soft/70 p-5 ${variant === 'hero' ? 'max-w-md' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
          Founding cohort
        </span>
        <span className="font-display text-2xl text-bone">
          {claimed}
          <span className="text-sm text-bone-faint"> / {FOUNDING_COHORT_SEATS} claimed</span>
        </span>
      </div>
      <div
        className="mt-4 h-1.5 w-full bg-night-line"
        role="img"
        aria-label={`${claimed} of ${FOUNDING_COHORT_SEATS} founding seats claimed`}
      >
        <span
          className="block h-full bg-blood"
          style={{ width: `${pct.toFixed(2)}%` }}
        />
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-widest text-bone-faint">
        {full
          ? 'The founding cohort is full. New applications join the waiting list.'
          : `${remaining} seat${remaining === 1 ? '' : 's'} remaining · applications reviewed weekly · figure updated with each deploy`}
      </p>
    </div>
  );
}
