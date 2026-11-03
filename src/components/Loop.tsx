import React from 'react';

const steps = [
  {
    kicker: 'CATCH',
    when: 'every claim · milliseconds',
    title: 'A judge beside the model.',
    body: 'Each claim is checked against evidence the model never had. A wrong call is corrected before it becomes a decision.',
    numbers: [
      { value: '13 ms', label: 'per claim' },
      { value: '9 of 9', label: 'wrong claims caught on a live line' },
    ],
  },
  {
    kicker: 'FIX',
    when: 'when wrong calls repeat · minutes',
    title: 'Find the layer. Fix that layer.',
    body: 'Sensor, chip or model. A lamp through the PLC, a frame budget, or on-device learning: a small retrain of the model’s head from confirmed captures, gated, swapped live, rolled back in seconds if it must be.',
    numbers: [
      { value: '53 of 53', label: 'labels learned on the device' },
      { value: '< 5 s', label: 'rollback' },
    ],
  },
  {
    kicker: 'PROVE',
    when: 'every verdict · a signed ledger',
    title: 'Proof, produced on the device.',
    body: 'One line per claim: the evidence, the verdict, every gate, every swap. The record the EU AI Act and ISO/PAS 8800 ask for, written as a by-product of running.',
    numbers: [
      { value: '11 of 12', label: 'drift events corrected' },
      { value: '0', label: 'left the device' },
    ],
  },
];

export default function Loop() {
  return (
    <section id="loop" className="bg-site py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">THE RUNTIME</p>
          <h2 className="text-4xl md:text-6xl text-white mb-5 leading-tight">
            Catch. Fix. Prove. On the device.
          </h2>
          <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed">
            One runtime beside any model, on any NPU. On-device correction of every claim, on-device
            retraining of the model's head when the model is the cause, and proof in a ledger. The model
            stays sealed. Nothing leaves the device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.kicker} className="border border-white/10 bg-white/[0.04] rounded-xl p-7 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[var(--edgeble-green)] text-base uppercase tracking-[0.2em] font-medium">{s.kicker}</span>
                <span className="text-white/60 text-lg font-light">{s.when}</span>
              </div>
              <h3 className="text-2xl text-white mb-3">{s.title}</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">{s.body}</p>
              <div className="mt-auto grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                {s.numbers.map((n) => (
                  <div key={n.label}>
                    <div className="text-2xl md:text-3xl text-white font-manrope">{n.value}</div>
                    <div className="text-white/60 text-base font-light mt-1">{n.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-base md:text-lg text-white/50 font-light">
          Measured on a battery line in production, October 2026. Forgetting 3 to 9 % on frames never trained on.
          <a href="/architecture" className="ml-2 text-white/70 hover:text-white underline underline-offset-4">How it works, layer by layer</a>
        </p>
      </div>
    </section>
  );
}
