import { CITATION_BOARD, CITATION_META } from '@/lib/productData';

/**
 * The citation leaderboard, drawn in the site's own type and palette rather than pasted in as a
 * screenshot of the admin. Same numbers, chosen typography, sharp at any pixel density, and it
 * reflows on a phone instead of becoming an unreadable postage stamp.
 */
export function CitationBoard() {
  return (
    <div className="overflow-hidden border border-night-line bg-night-soft/60">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-night-line px-6 py-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="pulse-soft h-1.5 w-1.5 rounded-full bg-blood-bright" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
            Measure · AI citations
          </span>
        </div>
        <div className="flex gap-1">
          {CITATION_META.engines.map((e, i) => (
            <span
              key={e}
              className={`px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                i === 0 ? 'bg-blood text-bone' : 'border border-night-line text-bone-faint'
              }`}
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 border-b border-night-line px-6 py-6">
        <div className="text-center">
          <p className="font-display text-4xl text-bone">{CITATION_META.index}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-bone-faint">
            AI-visibility index
          </p>
        </div>
        <p className="max-w-md flex-1 text-sm leading-relaxed text-bone-dim">
          {CITATION_META.note}
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-bone-faint">
            {CITATION_META.trackedQueries} tracked queries · checked daily
          </span>
        </p>
      </div>

      <table className="w-full text-left text-sm">
        <caption className="sr-only">
          Competitor domains cited by AI assistants for this account&rsquo;s tracked queries
        </caption>
        <thead>
          <tr className="border-b border-night-line font-mono text-[10px] uppercase tracking-widest text-bone-faint">
            <th scope="col" className="py-3 pl-6 pr-3 font-normal">
              #
            </th>
            <th scope="col" className="py-3 pr-3 font-normal">
              Domain
            </th>
            <th scope="col" className="py-3 pr-3 text-right font-normal">
              Query coverage
            </th>
            <th scope="col" className="hidden py-3 pr-3 text-right font-normal sm:table-cell">
              Visibility
            </th>
            <th scope="col" className="hidden py-3 pr-6 text-right font-normal md:table-cell">
              Avg. position
            </th>
          </tr>
        </thead>
        <tbody>
          {CITATION_BOARD.map((r) => (
            <tr key={r.domain} className="border-b border-night-line/60 last:border-0">
              <td className="py-3 pl-6 pr-3 font-mono text-xs text-bone-faint">{r.rank}</td>
              <td className="py-3 pr-3">
                <span className="font-medium text-bone">{r.domain}</span>
              </td>
              <td className="py-3 pr-3 text-right">
                <div className="flex items-center justify-end gap-3">
                  {/* The bar is the point: who owns the answers, at a glance. */}
                  <span aria-hidden className="hidden h-1 w-24 bg-night-line sm:block">
                    <span
                      className="block h-full bg-blood/70"
                      style={{ width: `${r.coverage}%` }}
                    />
                  </span>
                  <span className="font-mono text-xs tabular-nums text-bone">
                    {r.coverage}%
                    <span className="text-bone-faint"> ({r.queries})</span>
                  </span>
                </div>
              </td>
              <td className="hidden py-3 pr-3 text-right font-mono text-xs tabular-nums sm:table-cell">
                <span className="text-bone">{r.visibility}%</span>
                {r.delta !== null && (
                  <span className={r.delta < 0 ? 'ml-2 text-blood-bright' : 'ml-2 text-bone-dim'}>
                    {r.delta < 0 ? '▼' : '▲'}
                    {Math.abs(r.delta)}
                  </span>
                )}
              </td>
              <td className="hidden py-3 pr-6 text-right font-mono text-xs tabular-nums text-bone-dim md:table-cell">
                {r.position.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
