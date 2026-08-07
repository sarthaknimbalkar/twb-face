import Link from 'next/link';
import { SITE } from '@/lib/site';

const LINKS = [
  { href: '#machine', label: 'The machine' },
  { href: '#partners', label: 'Partners' },
  { href: '#faq', label: 'FAQ' },
  { href: '#apply', label: 'Apply' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-night-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl">
              {SITE.name}
              <span className="text-bone-faint"> / </span>
              <Link
                href="/wolves"
                className="text-bone-faint transition-colors hover:text-blood-bright"
              >
                the wolves
              </Link>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-dim">{SITE.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="wolf-link font-mono text-xs uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-night-line pt-6 font-mono text-[10px] uppercase tracking-widest text-bone-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {SITE.name}. Every figure on this page is either a live database count or
            carries its source.
          </p>
          <a href="/llms.txt" className="wolf-link">
            llms.txt
          </a>
        </div>
      </div>
    </footer>
  );
}
