'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/site';

/**
 * The page is nine screens long, so the nav doubles as orientation: a hairline progress bar
 * across the bottom of the header, and the current section marked as you pass through it.
 * IntersectionObserver rather than scroll maths — cheaper and it does not fight the sticky bar.
 */
export function Header() {
  const [active, setActive] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace('#', ''));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      // Only count a section once it reaches the upper third, so the mark changes when the
      // heading is actually being read rather than when it first peeks in from the bottom.
      { rootMargin: '-25% 0px -65% 0px' }
    );
    for (const s of sections) io.observe(s);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-night-line bg-night/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:py-5">
        {/* The split personality's front door: hover, and Woof bares its teeth. */}
        <Link href="/" className="group font-display text-xl tracking-tight">
          <span className="text-bone">The&nbsp;</span>
          <span className="relative inline-block">
            <span className="transition-opacity duration-300 group-hover:opacity-0">Woof Back</span>
            <span
              aria-hidden
              className="absolute inset-0 whitespace-nowrap text-blood-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Wolf Pack
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 md:gap-8" aria-label="Primary">
          {NAV.map((item) => {
            const isActive = active === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`hidden font-mono text-xs uppercase tracking-widest transition-colors md:inline ${
                  isActive ? 'text-blood-bright' : 'text-bone-dim hover:text-bone'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a href="#apply?path=operator" className="btn-primary !px-5 !py-2 text-[11px]">
            Apply
          </a>
        </nav>
      </div>
      <div
        aria-hidden
        className="h-px origin-left bg-blood transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
