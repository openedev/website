import React, { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

type Q = { id: string; question: string; options: string[] };

const questions: Q[] = [
  { id: 'scene', question: 'Where does the model run?', options: ['A factory line or dock', 'A vehicle', 'A robot', 'A phone or a device', 'Not decided yet'] },
  { id: 'model', question: 'Do you have a model today?', options: ['Yes, our own', 'Yes, a vendor’s sealed model', 'No, we need one'] },
  { id: 'hardware', question: 'What runs it?', options: ['Rockchip', 'NXP', 'Qualcomm', 'DeepX', 'NVIDIA Jetson', 'Something else', 'Nothing yet'] },
  { id: 'camera', question: 'And the camera?', options: ['Installed and working', 'We need one', 'Not a camera'] },
  { id: 'stage', question: 'Where are you?', options: ['Lab or proof of concept', 'Pilot on one line or vehicle', 'Production, several lines', 'We ship this inside our product'] },
  { id: 'pain', question: 'What hurts most?', options: ['Wrong calls reach the decision', 'Drift, and retraining takes weeks', 'We need proof for an audit', 'Exploring'] },
];

type Door = { kicker: string; title: string; body: string; next: string; href?: string; cta?: string };

function decide(a: Record<string, string>): Door {
  const line = a.scene === 'A factory line or dock';
  const noModel = a.model === 'No, we need one';
  const noHw = a.hardware === 'Nothing yet';
  const needCam = a.camera === 'We need one';
  const partner = a.stage === 'We ship this inside our product' || a.scene === 'A vehicle' || a.scene === 'A robot' || a.scene === 'A phone or a device';
  const ourNpu = ['Rockchip', 'NXP', 'Qualcomm', 'DeepX'].includes(a.hardware);

  if (line && (noModel || noHw || needCam)) {
    return {
      kicker: 'HAVE IT INSTALLED',
      title: 'Our module and camera on your line.',
      body: 'You are missing a part of the stack, so the fastest path is the one our lines in production took: our edge module and camera with the runtime inside, on a three-year term, provisioned and updated by our orchestration.',
      next: 'We reply within two working days with a site questionnaire and a date for a line walk.',
    };
  }
  if (partner) {
    return {
      kicker: 'RUNTIME LICENCE',
      title: 'The runtime inside your product, on your silicon.',
      body: 'Vehicles, robots and devices ship the runtime beside the model on their own NPU, licensed per device, robot or site. The judge takes its evidence from motion and a second sensor, or from the outcome of the action, not from a reference bank.',
      next: 'We reply within two working days to set a technical call: your decision point, your NPU, your scene.',
    };
  }
  if (a.hardware === 'Qualcomm') {
    return {
      kicker: 'TRY IT TODAY',
      title: 'Run the open-source runner on your Dragonwing board.',
      body: 'Our sealed model, our clip and the judge correcting lighting false positives, on the same silicon you run. Build the container, replay the clip, read the ledger. Then hook the correction API into your own model.',
      next: 'The repo is public. Tell us when it runs and we send the API docs.',
      href: 'https://github.com/edgeble/self-correction-qc-executorch',
      cta: 'Open the repo',
    };
  }
  if (ourNpu) {
    return {
      kicker: 'ADD IT TO YOUR LINE',
      title: 'The correction API beside your model.',
      body: 'Your model and your board stay as they are. Install the package, run the toolchain once to build the bank from a few confirmed examples and cut the model if it is sealed, hook the API at the decision point, watch the ledger.',
      next: 'We reply within two working days with the docs and a bring-up call.',
    };
  }
  return {
    kicker: 'TALK TO US',
    title: 'Your silicon is not in our four families yet.',
    body: 'The runtime also runs beneath ONNX Runtime and LiteRT on CPU and GPU, and we add an NPU family when a customer brings one. Tell us the board and the model and we will say what is possible this quarter.',
    next: 'We reply within two working days.',
  };
}

export default function StartPage() {
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      questions.forEach((q) => {
        const v = sp.get(q.id);
        if (v && q.options.includes(v)) init[q.id] = v;
      });
    }
    return init;
  });
  const [form, setForm] = useState({ name: '', email: '', company: '', notes: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const done = questions.every((q) => answers[q.id]);
  const door = useMemo(() => (done ? decide(answers) : null), [answers, done]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const r = await fetch('https://formspree.io/f/xojarqwr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, subject: `Start: ${door?.kicker ?? ''}`, recommendation: door?.title ?? '', ...answers }),
      });
      if (!r.ok) throw new Error('failed');
      setSent(true);
    } catch {
      setError('Could not send. Email info@edgeble.ai and paste your answers.');
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
            <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">TALK TO FOUNDERS</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5 leading-tight">Six questions, then the right door.</h1>
            <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed max-w-3xl mb-12">
              Tell us where the model runs and what you have. We tell you which way in fits, and what happens next.
              Pick one answer per question; the door appears below as soon as all six are in.
            </p>

            <div className="space-y-10 max-w-4xl">
              {questions.map((q, i) => (
                <div key={q.id}>
                  <p className="text-lg text-white/60 mb-3"><span className="text-[var(--edgeble-green)] mr-3">{String(i + 1).padStart(2, '0')}</span>{q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((o) => {
                      const on = answers[q.id] === o;
                      return (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setAnswers({ ...answers, [q.id]: o })}
                          className={`px-4 py-2 rounded-full border text-base transition-colors ${on ? 'border-[var(--edgeble-green)] bg-[var(--edgeble-green)]/15 text-white' : 'border-white/15 text-white/75 hover:border-white/40 hover:text-white'}`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
                {door ? (
                <div className="border border-[var(--edgeble-green)]/40 bg-white/[0.04] rounded-xl p-8">
                  <span className="text-[var(--edgeble-green)] text-sm uppercase tracking-[0.2em] font-medium">{door.kicker}</span>
                  <h2 className="text-3xl text-white mt-4 mb-4">{door.title}</h2>
                  <p className="text-lg text-white/75 font-light leading-relaxed mb-6">{door.body}</p>
                  <p className="text-base text-white/55 font-light">{door.next}</p>
                  {door.href && (
                    <a href={door.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-white hover:text-white/80 underline underline-offset-4">
                      {door.cta} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                ) : (
                <div className="border border-white/10 bg-white/[0.04] rounded-xl p-8">
                  <span className="text-white/50 text-sm uppercase tracking-[0.2em] font-medium">YOUR DOOR</span>
                  <h2 className="text-3xl text-white/60 mt-4 mb-4">Appears here after the six answers.</h2>
                  <p className="text-lg text-white/50 font-light leading-relaxed">
                    {questions.filter((q) => answers[q.id]).length} of 6 answered. You can send the form without finishing; the answers you gave come with it.
                  </p>
                </div>
                )}

                <div className="border border-white/10 bg-white/[0.04] rounded-xl p-8">
                  {sent ? (
                    <div className="flex items-start gap-3 text-white">
                      <CheckCircle className="w-6 h-6 text-[var(--edgeble-green)] flex-shrink-0 mt-0.5" />
                      <p className="text-lg font-light">Sent. Your six answers came with it, so the first reply is already specific.</p>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="space-y-5">
                      <p className="text-xl text-white mb-2">Send this to the founders.</p>
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
                        {sending ? 'Sending' : 'Send'}
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
