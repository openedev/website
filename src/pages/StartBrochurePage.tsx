import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BROCHURE_PATH = '/docs/Edgeble-Correction-Brochure-V1.0.pdf';
const BROCHURE_NAME = 'Edgeble-Correction-Brochure-V1.0.pdf';

function downloadBrochure() {
  const link = document.createElement('a');
  link.href = BROCHURE_PATH;
  link.download = BROCHURE_NAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function StartBrochurePage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', notes: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xojarqwr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          subject: 'Correction Brochure request',
          request: 'Correction Brochure',
        }),
      });

      if (!response.ok) throw new Error('failed');
      downloadBrochure();
      setSent(true);
    } catch {
      setError('Could not send. Email info@edgeble.ai and request the Correction Brochure.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-site">
      <Navigation />
      <main className="pt-[112px]">
        <section className="bg-site py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">START</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5 leading-tight">Get the Correction Brochure.</h1>
            <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed max-w-3xl mb-12">
              A concise view of the correction layer between the model and the physical system: what it observes,
              what it fixes, and how every verdict stays in the ledger.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
              <div className="border border-[var(--edgeble-green)]/40 bg-white/[0.04] rounded-xl p-8">
                <span className="text-[var(--edgeble-green)] text-sm uppercase tracking-[0.2em] font-medium">BROCHURE</span>
                <h2 className="text-3xl text-white mt-4 mb-4">Correction Brochure</h2>
                <p className="text-lg text-white/75 font-light leading-relaxed mb-6">
                  See how Edgeble catches a wrong claim, finds the layer that caused it, corrects it on-device, and
                  records the proof for the next decision.
                </p>
                <p className="text-base text-white/55 font-light">
                  Submit your details and the PDF will download. Your request will also reach info@edgeble.ai.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.04] rounded-xl p-8">
                {sent ? (
                  <div className="flex items-start gap-3 text-white">
                    <CheckCircle className="w-6 h-6 text-[var(--edgeble-green)] flex-shrink-0 mt-0.5" />
                    <p className="text-lg font-light">
                      Sent. Your brochure download should start now, and your details have reached the founders.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <p className="text-xl text-white mb-2">Send your details.</p>
                    {([
                      { f: 'name', label: 'Name', type: 'text', req: true },
                      { f: 'email', label: 'Work email', type: 'email', req: true },
                      { f: 'company', label: 'Company', type: 'text', req: false },
                    ] as const).map(({ f, label, type, req }) => (
                      <label key={f} className="block">
                        <span className="block text-sm uppercase tracking-[0.16em] text-white/60 mb-2">{label}{req ? '' : ' (optional)'}</span>
                        <input
                          type={type}
                          required={req}
                          value={form[f]}
                          onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                          className="w-full bg-white text-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--edgeble-green)]"
                        />
                      </label>
                    ))}
                    <label className="block">
                      <span className="block text-sm uppercase tracking-[0.16em] text-white/60 mb-2">Anything else (optional)</span>
                      <textarea
                        placeholder="The model, the board, the line, the date you need it by"
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        rows={4}
                        className="w-full bg-white text-black border border-white/20 rounded-lg px-4 py-3 placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[var(--edgeble-green)]"
                      />
                    </label>
                    {error && <p className="text-base text-red-300">{error}</p>}
                    <button type="submit" disabled={sending} className="inline-flex items-center justify-center bg-white text-black hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60">
                      {sending ? 'Sending' : 'Send & download'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
