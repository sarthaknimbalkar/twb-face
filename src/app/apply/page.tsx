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
              All five of us read it and answer one question: can we get this business to the
              top of its patch? If yes, and there’s a seat, we’ll want to talk. If no, you’ll
              hear that quickly, with the reason, and you can get on with your quarter.
            </p>
            <p>
              Plain answers beat clever ones. Knowing your business is the qualification. The
              jargon is our department.
            </p>
          </div>
          <div className="rise rise-3 mt-10">
            <Scarcity />
          </div>
          <p className="rise rise-4 mt-10 text-sm text-bone-faint">
            Want to see what a no looks like first?{' '}
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
