import type { Metadata } from 'next';
import Link from 'next/link';
import { Scarcity } from '@/components/Scarcity';
import { DossierForm } from './DossierForm';

export const metadata: Metadata = {
  title: 'Request consideration',
  description:
    'The Woofback takes twelve clients, by application only. Open a dossier: your domain, your market, what winning looks like. Every dossier is answered — including the declines.',
  alternates: { canonical: '/apply' },
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="kicker rise">The application</p>
          <h1 className="rise rise-1 mt-6 font-display text-5xl leading-[1.05] tracking-tight">
            This is not a contact form. It’s five questions.
          </h1>
          <div className="rise rise-2 mt-6 max-w-prose space-y-4 leading-relaxed text-bone-dim">
            <p>
              We read every application against one question: can we take this business to the
              top of its territory? If yes, and a seat is open, we talk. If not, we say so —
              kindly, quickly, and without wasting your quarter.
            </p>
            <p>
              Plain answers beat fancy ones. Knowing your business is the qualification — the
              jargon is our department.
            </p>
          </div>
          <div className="rise rise-3 mt-10">
            <Scarcity />
          </div>
          <p className="rise rise-4 mt-10 text-sm text-bone-faint">
            Curious what a no looks like?{' '}
            <Link href="/decline" className="wolf-link underline decoration-night-line underline-offset-4">
              We published one of those too.
            </Link>
          </p>
        </div>
        <div className="rise rise-2">
          <DossierForm />
        </div>
      </div>
    </div>
  );
}
