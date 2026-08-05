'use client';

import { useEffect } from 'react';

/**
 * The doorman. The inline script in the layout stamps html[data-gate] before first paint
 * for visitors who haven't been assessed yet; CSS runs the whole sequence. This component
 * only records the visit and removes the stamp after the animation has finished.
 * Crawlers index the full SSR page under the overlay; reduced-motion never sees it.
 */
export function Gate() {
  useEffect(() => {
    if (!document.documentElement.hasAttribute('data-gate')) return;
    const t = window.setTimeout(() => {
      document.documentElement.removeAttribute('data-gate');
      try {
        localStorage.setItem('twb_gate', '1');
      } catch {
        /* private mode — they get assessed every time; fitting */
      }
    }, 2800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="gate" aria-hidden>
      <p className="gate-line font-mono text-sm uppercase tracking-[0.3em] text-bone-dim" style={{ ['--type-w' as never]: '24ch' }}>
        assessing your arrival…
      </p>
      <p className="gate-line gate-line-2 font-mono text-sm uppercase tracking-[0.3em] text-blood-bright">
        …proceed.
      </p>
    </div>
  );
}
