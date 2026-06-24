'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section className="waitlist">
      <div className="waitlist-box">
        <div className="sec-lbl" style={{ textAlign: 'center' }}>Join the waitlist</div>
        <h2 className="waitlist-title">
          Be the first to know<br />when we launch.
        </h2>
        <p className="waitlist-sub">
          Drop your email and we&apos;ll notify you the moment EcoLoop goes live
          on the App Store and Google Play.
        </p>

        {status === 'success' ? (
          <div className="waitlist-success">
            🎉 You&apos;re on the list! We&apos;ll reach out as soon as EcoLoop launches.
          </div>
        ) : (
          <>
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="waitlist-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="waitlist-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining…' : 'Notify Me'}
              </button>
            </form>
            {status === 'error' && (
              <p className="waitlist-error">{errorMsg}</p>
            )}
          </>
        )}

        <p className="waitlist-privacy">No spam, ever. Unsubscribe any time.</p>
      </div>
    </section>
  );
}
