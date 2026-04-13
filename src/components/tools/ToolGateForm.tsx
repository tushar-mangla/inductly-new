'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToolGate } from '@/hooks/useToolGate';

const HEADACHES = [
  'Finding candidates',
  'Finding customers',
  'Outreach & follow-ups',
  'Screening resumes',
  'Something else',
];

const WEB3FORMS_KEY = '0e7ac89b-a20a-4df5-a7b9-b5fc081df584';

export default function ToolGateForm({ toolTitle = 'Free Recruitment Tools' }: { toolTitle?: string }) {
  const { unlock } = useToolGate();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStep(2);
  }

  function toggle(h: string) {
    setSelected((prev) => prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected.length) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead — ${toolTitle}`,
          name,
          email,
          headaches: selected.join(', '),
          submitted_at: new Date().toLocaleString('en-IN', { hour12: true }),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });
      const data = await res.json();
      if (data.success) {
        unlock();
        router.push('/tools');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: '#f5f2ec' }}>
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <span className="font-bold text-2xl tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Recruitment<span style={{ color: '#1a6b4a', fontStyle: 'italic' }}>OS</span>
          </span>
          <p className="text-xs uppercase tracking-widest mt-1" style={{ fontFamily: 'var(--font-mono)', color: '#6b7280' }}>
            Intelligent Hiring Infrastructure
          </p>
        </div>

        <div className="bg-white rounded-[10px] shadow-lg overflow-hidden border border-[#e5e5e5]">

          {/* Step indicator */}
          <div className="px-8 pt-7 pb-5 border-b border-[#e5e5e5]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-[2px]"
                style={{ background: '#e8f5ef', color: '#1a6b4a', fontFamily: 'var(--font-mono)' }}>
                Free Access
              </span>
              {step === 2 && (
                <span className="text-xs font-medium" style={{ color: '#9ca3af', fontFamily: 'var(--font-outfit)' }}>
                  Step 2 of 2
                </span>
              )}
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#0d0d0d', lineHeight: 1.2 }}>
              {step === 1 ? 'Unlock Free Access' : "What's your biggest headache?"}
            </h2>
            <p className="text-sm mt-1" style={{ fontFamily: 'var(--font-outfit)', color: '#6b7280' }}>
              {step === 1
                ? 'Fill in your details once to unlock all tools — forever.'
                : 'Select all that apply — we tailor resources to what matters most.'}
            </p>
          </div>

          <div className="px-8 py-6">

            {/* ── Step 1 ── */}
            {step === 1 && (
              <form onSubmit={handleStep1} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                    style={{ color: '#0d0d0d', fontFamily: 'var(--font-outfit)' }}>
                    Full Name
                  </label>
                  <input
                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith" autoComplete="name"
                    className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-2.5 text-sm outline-none focus:border-[#1a6b4a] transition-colors"
                    style={{ fontFamily: 'var(--font-outfit)', color: '#0d0d0d' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                    style={{ color: '#0d0d0d', fontFamily: 'var(--font-outfit)' }}>
                    Work Email
                  </label>
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@youragency.com" autoComplete="email"
                    className="w-full border border-[#e5e5e5] rounded-[4px] px-4 py-2.5 text-sm outline-none focus:border-[#1a6b4a] transition-colors"
                    style={{ fontFamily: 'var(--font-outfit)', color: '#0d0d0d' }}
                  />
                </div>
                <button type="submit"
                  className="w-full py-3 rounded-[4px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#1a6b4a', fontFamily: 'var(--font-outfit)' }}>
                  Continue →
                </button>
                <p className="text-center text-xs" style={{ color: '#9ca3af', fontFamily: 'var(--font-outfit)' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}

            {/* ── Step 2 ── */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {HEADACHES.map((h) => {
                  const active = selected.includes(h);
                  return (
                    <button key={h} type="button" onClick={() => toggle(h)}
                      className="w-full text-left px-4 py-3 rounded-[4px] border text-sm font-medium transition-all"
                      style={{
                        borderColor: active ? '#1a6b4a' : '#e5e5e5',
                        background: active ? '#e8f5ef' : '#fff',
                        color: active ? '#1a6b4a' : '#374151',
                        fontFamily: 'var(--font-outfit)',
                      }}>
                      {active ? '✓ ' : ''}{h}
                    </button>
                  );
                })}

                {error && <p className="text-xs text-red-500 pt-1">{error}</p>}

                <button type="submit" disabled={loading || selected.length === 0}
                  className="w-full py-3 rounded-[4px] text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40 !mt-4"
                  style={{ background: '#1a6b4a', fontFamily: 'var(--font-outfit)' }}>
                  {loading ? 'Unlocking…' : 'Get My Free Access →'}
                </button>

                <p className="text-center text-xs pt-1" style={{ color: '#9ca3af', fontFamily: 'var(--font-outfit)' }}>
                  Select at least one option to continue
                </p>
              </form>
            )}

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 mt-4 border border-[#e5e5e5] rounded-[10px] overflow-hidden">
          {[
            { num: '10+', lbl: 'Agencies using this' },
            { num: '500+', lbl: 'Jobs tracked daily' },
            { num: '5.3%', lbl: 'Avg reply rate' },
            { num: '+30%', lbl: 'Revenue growth' },
          ].map((s) => (
            <div key={s.lbl} className="py-3 px-2 text-center border-r border-[#e5e5e5] last:border-r-0"
              style={{ background: '#ede9e1' }}>
              <span className="block text-sm font-medium" style={{ fontFamily: 'var(--font-mono)', color: '#0d0d0d' }}>
                {s.num}
              </span>
              <span className="text-[10px] leading-tight block mt-0.5" style={{ color: '#6b7280', fontFamily: 'var(--font-outfit)' }}>
                {s.lbl}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
