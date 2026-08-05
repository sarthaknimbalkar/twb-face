/**
 * The signature mark: a stylized results page where position one belongs to the client.
 * Pure CSS/JSX, no images — the point of the whole practice, drawn instead of said.
 */
import { WolfEyes } from '@/components/WolfEyes';

const RIVALS = ['second place', 'third place', 'the rest', 'also ran'] as const;

export function TopOfThePage() {
  return (
    <div aria-hidden className="drift select-none border border-night-line bg-night-soft/60 p-6 shadow-[0_0_80px_-20px_rgba(198,47,47,0.25)]">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint">
          the only real estate
        </p>
        <WolfEyes />
      </div>
      <div className="mt-5 space-y-4">
        <div className="border border-blood/60 bg-blood/10 p-4">
          <div className="flex items-baseline justify-between gap-6">
            <span className="font-mono text-xs text-blood-bright">01</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-blood-bright">
              you · cited by the machines
            </span>
          </div>
          <div className="pulse-soft mt-3 h-2 w-4/5 bg-blood" />
          <div className="mt-2 h-2 w-3/5 bg-blood/50" />
        </div>
        {RIVALS.map((label, i) => (
          <div key={label} className="border border-night-line p-4 opacity-70">
            <div className="flex items-baseline justify-between gap-6">
              <span className="font-mono text-xs text-bone-faint">0{i + 2}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-faint">
                {label}
              </span>
            </div>
            <div className="mt-3 h-2 bg-night-line" style={{ width: `${62 - i * 11}%` }} />
          </div>
        ))}
      </div>
      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint">
        positions two through ten split the leftovers
      </p>
    </div>
  );
}
