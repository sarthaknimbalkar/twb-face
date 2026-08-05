'use client';

import { useMemo, useState } from 'react';
import { SITE } from '@/lib/site';

interface Step {
  id: 'name' | 'email' | 'domain' | 'referral' | 'winning';
  label: string;
  prompt: string;
  placeholder: string;
  type: 'text' | 'email' | 'url' | 'textarea';
  required: boolean;
  aside: string;
}

const STEPS: readonly Step[] = [
  {
    id: 'name',
    label: 'The applicant',
    prompt: 'Who is asking?',
    placeholder: 'Your name',
    type: 'text',
    required: true,
    aside: 'Applications are read by all five of us. Not by a form-processing intern — we don’t have one.',
  },
  {
    id: 'email',
    label: 'The channel',
    prompt: 'Where does the verdict go?',
    placeholder: 'you@yourdomain.com',
    type: 'email',
    required: true,
    aside: 'Every application gets an answer. Not every answer is yes.',
  },
  {
    id: 'domain',
    label: 'The territory',
    prompt: 'Which domain are we assessing?',
    placeholder: 'https://…',
    type: 'url',
    required: true,
    aside: 'We will read it the way the engines do — source first, promises last.',
  },
  {
    id: 'referral',
    label: 'The introduction',
    prompt: 'Who sent you?',
    placeholder: 'A name, a client, or “nobody — I hunt alone”',
    type: 'text',
    required: false,
    aside: 'Referred dossiers are read first. Unreferred dossiers are read anyway; we like nerve.',
  },
  {
    id: 'winning',
    label: 'The objective',
    prompt: 'What does winning look like?',
    placeholder: 'The market you want, the rivals holding it, and why you deserve it more.',
    type: 'textarea',
    required: true,
    aside: 'Plain words work best. “Booked out three months” and “the first name people find in my county” are both perfect answers.',
  },
] as const;

type Answers = Record<Step['id'], string>;

const EMPTY: Answers = { name: '', email: '', domain: '', referral: '', winning: '' };

function newDossierNo(): string {
  // Display flourish only — the real number is assigned when the platform takes over.
  return `TWB-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export function DossierForm() {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [sealed, setSealed] = useState(false);
  // Starts redacted (which fits the house style) and gets its number on the first
  // interaction — generating it during render would make SSR and the client disagree.
  const [dossierNo, setDossierNo] = useState('TWB-····');

  const step = STEPS[stepIdx] ?? STEPS[0]!;
  const value = answers[step.id];
  const canAdvance = !step.required || value.trim().length > 0;
  const last = stepIdx === STEPS.length - 1;

  const advance = () => {
    if (!canAdvance) return;
    if (dossierNo === 'TWB-····') setDossierNo(newDossierNo());
    if (last) {
      setSealed(true);
      return;
    }
    setStepIdx((i) => i + 1);
  };

  const mailto = useMemo(() => {
    const body = [
      `Application ${dossierNo}`,
      '',
      ...STEPS.map((s) => `${s.label} — ${s.prompt}\n${answers[s.id] || '—'}`),
    ].join('\n\n');
    return `mailto:${SITE.email}?subject=${encodeURIComponent(`Application ${dossierNo} — request for consideration`)}&body=${encodeURIComponent(body)}`;
  }, [answers, dossierNo]);

  if (sealed) {
    return (
      <div className="relative border border-night-line bg-night-soft p-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
          Application {dossierNo}
        </p>
        <div className="stamp mx-auto mt-8 inline-block border-4 border-blood px-8 py-4">
          <p className="font-mono text-2xl uppercase tracking-[0.2em] text-blood-bright">Sealed</p>
        </div>
        <p className="mx-auto mt-8 max-w-sm leading-relaxed text-bone-dim">
          The pack reads applications on Fridays. You will hear from us either way.
        </p>
        {/* TEMPLATE: until the platform's lead endpoint is wired, sealing hands off to email. */}
        <a href={mailto} className="btn-primary mt-8">
          Send it in
        </a>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-bone-faint">
          Delivery opens your mail client — the seal means nothing until it is sent.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-night-line bg-night-soft p-8 md:p-10">
      <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
        <span>
          Application {dossierNo} · {String(stepIdx + 1).padStart(2, '0')}/{String(STEPS.length).padStart(2, '0')}
        </span>
        <span className="text-blood-bright">confidential</span>
      </div>

      <div className="mt-4 flex gap-1">
        {STEPS.map((s, i) => (
          <span key={s.id} className={`h-0.5 flex-1 ${i <= stepIdx ? 'bg-blood' : 'bg-night-line'}`} />
        ))}
      </div>

      <p className="kicker mt-10">{step.label}</p>
      <label htmlFor={step.id} className="mt-3 block font-display text-3xl">
        {step.prompt}
      </label>

      {step.type === 'textarea' ? (
        <textarea
          id={step.id}
          rows={6}
          autoFocus
          value={value}
          onChange={(e) => setAnswers((a) => ({ ...a, [step.id]: e.target.value }))}
          placeholder={step.placeholder}
          className="mt-6 w-full border border-night-line bg-night px-4 py-3 text-bone placeholder:text-bone-faint focus:border-blood focus:outline-none"
        />
      ) : (
        <input
          id={step.id}
          type={step.type}
          autoFocus
          value={value}
          onChange={(e) => setAnswers((a) => ({ ...a, [step.id]: e.target.value }))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              advance();
            }
          }}
          placeholder={step.placeholder}
          className="mt-6 w-full border border-night-line bg-night px-4 py-3 text-bone placeholder:text-bone-faint focus:border-blood focus:outline-none"
        />
      )}

      <p className="mt-4 border-l-2 border-blood/60 pl-4 text-sm italic leading-relaxed text-bone-faint">
        {step.aside}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
          className={`font-mono text-xs uppercase tracking-widest text-bone-faint transition-colors hover:text-bone ${stepIdx === 0 ? 'invisible' : ''}`}
        >
          ← Back
        </button>
        <button type="button" onClick={advance} disabled={!canAdvance} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">
          {last ? 'Seal it' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
