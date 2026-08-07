'use client';

import { useEffect, useState } from 'react';
import { CLAIMED, FOUNDING_COHORT_SEATS, SITE } from '@/lib/site';

type Path = 'operator' | 'partner';
type Status = 'idle' | 'sending' | 'sent' | 'failed';

/**
 * The application posts to the platform's public lead endpoint (the same intake every client
 * brand uses — the face dogfoods its own product). The request is a form-encoded no-cors POST,
 * so the visitor stays on this page and gets the styled confirmation instead of being bounced
 * to a bare thank-you on another domain.
 *
 * Two audiences, one form: the path choice reveals the partner-only field, and the partner CTAs
 * elsewhere on the page land here with the right box already ticked via "#apply?path=partner".
 */
const LEAD_ENDPOINT = 'https://fortis-content-engine.vercel.app/lead/twb';

export function ApplyForm() {
  const [path, setPath] = useState<Path>('operator');
  const [status, setStatus] = useState<Status>('idle');
  const full = CLAIMED >= FOUNDING_COHORT_SEATS;

  useEffect(() => {
    const read = () => {
      if (window.location.hash.includes('path=partner')) setPath('partner');
      else if (window.location.hash.includes('path=operator')) setPath('operator');
    };
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);

    // The endpoint stores name/email/phone/message; everything else travels inside message.
    const lines = [
      `Applying as: ${path}`,
      `Domain: ${String(f.get('domain') ?? '').trim()}`,
      path === 'partner' && String(f.get('brands') ?? '').trim()
        ? `Brands run: ${String(f.get('brands')).trim()}`
        : null,
      String(f.get('notes') ?? '').trim() ? `Cited for: ${String(f.get('notes')).trim()}` : null,
      full ? 'NOTE: submitted after the cohort filled (waiting list).' : null,
    ].filter(Boolean);

    const body = new URLSearchParams({
      name: String(f.get('name') ?? ''),
      email: String(f.get('email') ?? ''),
      message: lines.join('\n'),
      // The endpoint's honeypot is the "company" field; forward ours under that name.
      company: String(f.get('website') ?? ''),
      source: 'thewoofback.com/apply',
    });

    setStatus('sending');
    try {
      // no-cors: the response is opaque, but a form-encoded POST like this either lands or
      // throws on network failure — and network failure is the case we surface below.
      await fetch(LEAD_ENDPOINT, { method: 'POST', mode: 'no-cors', body });
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-night-line bg-night-soft p-10 text-center" aria-live="polite">
        <div className="stamp mx-auto inline-block border-4 border-blood px-8 py-4">
          <p className="font-mono text-2xl uppercase tracking-[0.2em] text-blood-bright">
            Received
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-sm leading-relaxed text-bone-dim">
          Your application is in. All five of us read these on Fridays — you&rsquo;ll hear back
          either way, and it won&rsquo;t take a fortnight.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-night-line bg-night-soft p-6 md:p-8"
      id="apply-form"
    >
      <fieldset className="border-0 p-0">
        <legend className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
          This is for
        </legend>
        <div className="mt-4 grid gap-px bg-night-line sm:grid-cols-2">
          {(
            [
              ['operator', 'My business', 'One brand — I want it to own the answers in its market.'],
              ['partner', 'My clients’ brands', 'I run an agency and want to offer this under my own name.'],
            ] as const
          ).map(([value, title, blurb]) => (
            <label
              key={value}
              className={`cursor-pointer bg-night p-5 transition-colors ${
                path === value ? 'ring-1 ring-inset ring-blood' : 'hover:bg-night-soft'
              }`}
            >
              <input
                type="radio"
                name="path"
                value={value}
                checked={path === value}
                onChange={() => setPath(value)}
                className="sr-only"
              />
              <b
                className={`block font-display text-lg ${path === value ? 'text-blood-bright' : ''}`}
              >
                {title}
              </b>
              <span className="mt-1 block text-sm leading-relaxed text-bone-dim">{blurb}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" type="text" autoComplete="name" required />
        <Field id="email" label="Work email" type="email" autoComplete="email" required />
        <Field
          id="domain"
          label="Your website"
          type="text"
          placeholder="example.com"
          required
          wide
        />
        {path === 'partner' && (
          <Field id="brands" label="How many brands do you run?" type="text" optional wide />
        )}
        <div className="sm:col-span-2">
          <label
            htmlFor="notes"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-dim"
          >
            What do you want to be known for? <i className="text-bone-faint">optional</i>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            maxLength={1200}
            className="mt-3 w-full border border-night-line bg-night px-4 py-3 text-bone placeholder:text-bone-faint focus:border-blood focus:outline-none"
          />
        </div>
      </div>

      {/* Bot trap: a real person never fills this in. */}
      <div className="hidden" aria-hidden>
        <label>
          Company website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary mt-8 w-full justify-center disabled:cursor-wait disabled:opacity-60"
      >
        {status === 'sending'
          ? 'Sending…'
          : full
            ? 'Join the waiting list'
            : 'Apply for a founding seat'}
      </button>

      {status === 'failed' && (
        <p className="mt-4 border-l-2 border-blood pl-3 text-sm leading-relaxed text-bone" role="alert">
          That didn&rsquo;t go through — probably a connection blip. Try again, or email us
          directly at{' '}
          <a href={`mailto:${SITE.email}`} className="underline decoration-blood underline-offset-4">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <p className="mt-5 text-sm leading-relaxed text-bone-faint">
        We read every application and reply either way. No newsletter, no drip sequence — if it is
        not a fit we will tell you quickly.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  required,
  optional,
  wide,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label
        htmlFor={id}
        className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-dim"
      >
        {label} {optional && <i className="text-bone-faint">optional</i>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        maxLength={200}
        className="mt-3 w-full border border-night-line bg-night px-4 py-3 text-bone placeholder:text-bone-faint focus:border-blood focus:outline-none"
      />
    </div>
  );
}
