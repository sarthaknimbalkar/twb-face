'use client';

import { useEffect, useRef } from 'react';

/**
 * Two faint eyes that follow the cursor. Deniably subtle: most visitors feel watched
 * before they work out why. Pointer math only — no re-renders, no listeners on touch.
 */
export function WolfEyes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const pupils = Array.from(el.querySelectorAll<HTMLElement>('[data-pupil]'));
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const dx = Math.cos(angle) * 2.5;
      const dy = Math.sin(angle) * 2;
      for (const p of pupils) p.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="flex items-center gap-3 opacity-60">
      {[0, 1].map((i) => (
        <span
          key={i}
          className="flex h-3.5 w-5 items-center justify-center rounded-[50%] border border-blood/50"
        >
          <span data-pupil className="h-1.5 w-1.5 rounded-full bg-blood-bright transition-transform duration-150" />
        </span>
      ))}
    </div>
  );
}
