import Image from 'next/image';
import { asset } from '@/lib/asset';

/**
 * A real screen from the running product, framed in window chrome so a light UI can sit on a
 * dark page without looking like a mistake. Client identities are redacted in the capture
 * itself — the blocks are the house style, not a placeholder.
 */
export function ProductShot({
  src,
  alt,
  caption,
  label,
}: {
  src: string;
  alt: string;
  caption: string;
  label: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden border border-night-line bg-night-soft shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-3 border-b border-night-line px-4 py-3">
          <span className="flex gap-1.5">
            {['bg-blood/70', 'bg-bone-faint/40', 'bg-bone-faint/40'].map((c, i) => (
              <span key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
            ))}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-faint">
            {label}
          </span>
        </div>
        <Image
          src={asset(src)}
          alt={alt}
          width={1400}
          height={900}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="w-full"
        />
      </div>
      <figcaption className="mt-4 max-w-prose text-sm leading-relaxed text-bone-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
