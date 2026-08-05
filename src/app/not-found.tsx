import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-6 font-display text-5xl tracking-tight">
        This page doesn’t rank <span className="text-blood-bright">because it doesn’t exist.</span>
      </h1>
      <p className="mt-6 max-w-md text-bone-dim">
        Everything we do publish is exactly where the engines expect it. Start over.
      </p>
      <Link href="/" className="btn-ghost mt-10">
        Back to the top of the page
      </Link>
    </div>
  );
}
