import { QUESTION_QUEUE } from '@/lib/productData';

/**
 * The mined-question queue as the site would draw it: the question first and largest, its score
 * as the anchor, and the system's own reasoning kept visible — that last column is the part a
 * buyer actually cares about, and it is the first thing a screenshot renders illegible.
 */
export function QuestionQueue() {
  return (
    <div className="overflow-hidden border border-night-line bg-night-soft/60">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-night-line px-6 py-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="pulse-soft h-1.5 w-1.5 rounded-full bg-blood-bright" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
            Improve · Question mining
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-faint">
          {QUESTION_QUEUE.length} of 90 pending
        </span>
      </div>

      <ul className="divide-y divide-night-line/60">
        {QUESTION_QUEUE.map((q) => (
          <li key={q.query} className="group px-6 py-5 transition-colors hover:bg-night-soft">
            <div className="flex items-start gap-5">
              {/* Score leads: it is what decides whether the question gets written. */}
              <div className="w-12 shrink-0 text-center">
                <p className="font-display text-2xl leading-none text-blood-bright">{q.score}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-bone-faint">
                  score
                </p>
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-medium leading-snug text-bone">{q.query}</p>
                <p className="mt-2 text-sm leading-relaxed text-bone-dim">{q.why}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-bone-faint">
                  <span className="border border-night-line px-2 py-0.5">{q.source}</span>
                  <span>{q.intent}</span>
                  <span className="tabular-nums">
                    demand {q.demand} · difficulty {q.difficulty}
                  </span>
                </div>
              </div>

              <div className="hidden shrink-0 flex-col gap-2 sm:flex">
                <span className="border border-blood/60 px-3 py-1 text-center font-mono text-[10px] uppercase tracking-widest text-blood-bright">
                  Accept
                </span>
                <span className="border border-night-line px-3 py-1 text-center font-mono text-[10px] uppercase tracking-widest text-bone-faint">
                  Dismiss
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
