'use client';

import { useEffect, useRef } from 'react';

/**
 * Two eyes that follow the cursor. They also blink on their own schedule, narrow when
 * you get close, and glance away for a moment if you sit still too long — which is the
 * part people notice without being able to say why. All of it runs off refs and rAF so
 * React never re-renders for it.
 */
export function WolfEyes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const pupils = Array.from(el.querySelectorAll<HTMLElement>('[data-pupil]'));
    const lids = Array.from(el.querySelectorAll<HTMLElement>('[data-lid]'));
    const eyes = Array.from(el.querySelectorAll<HTMLElement>('[data-eye]'));

    // Target vs current position, eased every frame so the gaze glides instead of snapping.
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;
    let idleTimer = 0;
    let blinkTimer = 0;
    let alive = true;

    const setGaze = (clientX: number, clientY: number) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);
      // Pupils travel further when the cursor is far, then sit at the rim once it's close.
      const reach = Math.min(1, dist / 220);
      targetX = Math.cos(angle) * 3.2 * reach;
      targetY = Math.sin(angle) * 2.4 * reach;
      // Close cursor makes them narrow — the look of something paying attention.
      const near = dist < 260;
      for (const eye of eyes) eye.style.transform = near ? 'scaleY(0.74)' : 'scaleY(1)';
      for (const p of pupils) p.style.opacity = near ? '1' : '0.75';
    };

    const onMove = (e: PointerEvent) => {
      setGaze(e.clientX, e.clientY);
      // Any movement resets the "you've gone quiet" glance.
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(lookAway, 4200);
    };

    // Sits still too long? They lose interest and drift off to one side.
    const lookAway = () => {
      const side = Math.random() > 0.5 ? 1 : -1;
      targetX = 3 * side;
      targetY = -1.2;
      for (const eye of eyes) eye.style.transform = 'scaleY(1)';
    };

    const blink = () => {
      if (!alive) return;
      for (const lid of lids) lid.style.transform = 'scaleY(1)';
      window.setTimeout(() => {
        for (const lid of lids) lid.style.transform = 'scaleY(0)';
      }, 110);
      // Irregular gaps read as alive; a metronome reads as a loading spinner.
      blinkTimer = window.setTimeout(blink, 2400 + Math.random() * 5200);
    };

    const tick = () => {
      curX += (targetX - curX) * 0.14;
      curY += (targetY - curY) * 0.14;
      for (const p of pupils) p.style.transform = `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px)`;
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = window.requestAnimationFrame(tick);
    blinkTimer = window.setTimeout(blink, 1800);
    idleTimer = window.setTimeout(lookAway, 4200);

    return () => {
      alive = false;
      window.removeEventListener('pointermove', onMove);
      window.cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
      window.clearTimeout(blinkTimer);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="flex items-center gap-2.5">
      {[0, 1].map((i) => (
        <span
          key={i}
          data-eye
          className="relative flex h-4 w-6 items-center justify-center overflow-hidden rounded-[50%] border border-blood/60 bg-blood/5 transition-transform duration-300"
        >
          <span
            data-pupil
            className="h-1.5 w-1.5 rounded-full bg-blood-bright opacity-75 transition-opacity duration-300"
          />
          {/* The lid drops from the top on blink. */}
          <span
            data-lid
            className="absolute inset-0 origin-top scale-y-0 bg-night transition-transform duration-100"
          />
        </span>
      ))}
    </div>
  );
}
