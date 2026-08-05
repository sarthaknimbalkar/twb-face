import Link from 'next/link';
import { NAV } from '@/lib/site';

export function Header() {
  return (
    <header className="rule sticky top-0 z-50 border-b border-night-line bg-night/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-4 sm:flex-row sm:items-center sm:py-5">
        {/* The split personality's front door: hover, and Woof bares its teeth. */}
        <Link href="/" className="group font-display text-xl tracking-tight">
          <span className="text-bone">The&nbsp;</span>
          <span className="relative inline-block">
            <span className="transition-opacity duration-300 group-hover:opacity-0">Woofback</span>
            <span
              aria-hidden
              className="absolute inset-0 text-blood-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Wolfback
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="wolf-link font-mono text-xs uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
