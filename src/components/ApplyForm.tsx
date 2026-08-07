'use client';

import { useState } from 'react';
import { CLAIMED, FOUNDING_COHORT_SEATS, SITE } from '@/lib/site';

/**
 * Two audiences, one form: an operator runs a single brand, a partner resells the system to
 * their own clients. The path choice reveals the partner-only field rather than pushing
 * anyone to a second page.
 *
 * TEMPLATE NOTE: unwired by design. At integration this POSTs to the platform's intake
 * endpoint; until then it hands off to email so the page is never a dead end.
 */
export function ApplyForm() {
  const [path, setPath] = useState<'operator' | 'partner'>('operator');
  const full = CLAIMED >= FOUNDING_COHORT_SEATS;

  return (
    <form
      action={`mailto:${SITE.email}`}
      method="post"
      encType="text/plain"
      className="border border-night-line bg-night-soft p-6 md:p-8"
      id="apply-form"
    >
      <fieldset className="border-0 p-0">
        <legend className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
          I am applying as
        </legend>
        <div className="mt-4 grid gap-px bg-night-line sm:grid-cols-2">
          {(
            [
              ['operator', 'An operator', 'I run one brand and want it to own its answers.'],
              ['partner', 'A partner', 'I run brands for clients and want to resell this.'],
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
          label="Domain you want to win"
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
            What are you trying to be cited for? <i className="text-bone-faint">optional</i>
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

      <button type="submit" className="btn-primary mt-8 w-full justify-center">
        {full ? 'Join the waiting list' : 'Apply for a founding seat'}
      </button>
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
