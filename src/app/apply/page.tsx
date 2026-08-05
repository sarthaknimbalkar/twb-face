import type { Metadata } from 'next';
import { Scarcity } from '@/components/Scarcity';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request consideration',
  description:
    'The Woofback takes twelve clients, by application only. Tell us your domain, your market and what winning looks like — we answer every application, including the declines.',
  alternates: { canonical: '/apply' },
};

const FIELDS = [
  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Who is asking' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Where the verdict goes' },
  { id: 'domain', label: 'Domain', type: 'url', placeholder: 'https:// — the territory in question' },
] as const;

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="kicker">The application</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight">
            This is not a contact form.
          </h1>
          <div className="mt-6 max-w-prose space-y-4 leading-relaxed text-bone-dim">
            <p>
              We review every application against one question: can we take this brand to the
              top of its territory? If yes, and a seat is open, we talk. If not, we decline —
              politely, quickly, and without wasting your quarter.
            </p>
            <p>
              No retainer talk, no discovery-call theater. Just tell us the truth about where
              you are and what winning means.
            </p>
          </div>
          <div className="mt-10">
            <Scarcity />
          </div>
        </div>

        {/*
          TEMPLATE NOTE: intentionally unwired. At integration this posts to the platform's
          lead endpoint; until then it degrades to a mailto so the page is never a dead end.
        */}
        <form action={`mailto:${SITE.email}`} method="post" encType="text/plain" className="space-y-8">
          {FIELDS.map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="font-mono text-xs uppercase tracking-widest text-bone-dim">
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                placeholder={f.placeholder}
                className="mt-3 w-full border border-night-line bg-night-soft px-4 py-3 text-bone placeholder:text-bone-faint focus:border-blood focus:outline-none"
              />
            </div>
          ))}
          <div>
            <label htmlFor="winning" className="font-mono text-xs uppercase tracking-widest text-bone-dim">
              What does winning look like?
            </label>
            <textarea
              id="winning"
              name="winning"
              required
              rows={6}
              placeholder="The market you want, the rivals holding it, and why you deserve it more."
              className="mt-3 w-full border border-night-line bg-night-soft px-4 py-3 text-bone placeholder:text-bone-faint focus:border-blood focus:outline-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Submit for review
          </button>
          <p className="font-mono text-[11px] uppercase tracking-widest text-bone-faint">
            Every application gets an answer. Not every answer is yes.
          </p>
        </form>
      </div>
    </div>
  );
}
