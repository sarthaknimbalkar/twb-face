import { COHORT } from '@/lib/site';

/** The velvet rope, rendered: filled seats vs open seats, no persuasion copy needed. */
export function Scarcity() {
  const seats = Array.from({ length: COHORT.capacity }, (_, i) => i < COHORT.capacity - COHORT.open);
  return (
    <div className="inline-flex flex-col gap-3">
      <div className="flex gap-1.5">
        {seats.map((taken, i) => (
          <span
            key={i}
            className={`${taken ? 'seat bg-blood' : 'seat-open border border-night-line bg-transparent'} h-6 w-3`}
            style={{ animationDelay: `${0.5 + i * 0.06}s` }}
            title={taken ? 'Taken' : 'Open'}
          />
        ))}
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-bone-dim">
        {COHORT.open} of {COHORT.capacity} seats open · next intake {COHORT.nextIntake}
      </p>
    </div>
  );
}
