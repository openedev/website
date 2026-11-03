import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const doors = [
  {
    kicker: 'TRY IT',
    title: 'The open-source runner',
    body: 'Our sealed model, our recorded clip and the judge correcting lighting false positives on a Qualcomm Dragonwing board. Build the container, replay the clip, read the ledger. Apache-2.0.',
    cta: 'View the repo on GitHub',
    href: 'https://github.com/edgeble/self-correction-qc-executorch',
    external: true,
  },
  {
    kicker: 'ADD IT TO YOUR LINE',
    title: 'The correction API',
    body: 'Install the correction package on your device, run the toolchain once to build the bank from a few confirmed examples and cut the model for a sealed NPU, hook the API at the decision point. Your model does not change. Docs on request.',
    cta: 'How do we start, in the FAQ',
    href: '#faq',
    external: false,
  },
  {
    kicker: 'HAVE IT INSTALLED',
    title: 'Our module and camera, per line',
    body: 'Our edge module and camera on your line, with the runtime inside, on a three-year term. Our orchestration provisions the module, updates it over the air with rollback, and keeps every line in one fleet view. This is how the lines in production run today.',
    cta: 'Talk to founders',
    href: '/start',
    external: false,
  },
];

export default function Start() {
  return (
    <section id="start" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">START</p>
          <h2 className="text-4xl md:text-6xl text-white mb-5 leading-tight">Three ways to start.</h2>
          <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed">
            Physical AI needs a device, so there is no one-line install. There is one door you can open today
            without talking to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {doors.map((d) => (
            <a
              key={d.kicker}
              href={d.href}
              target={d.external ? '_blank' : undefined}
              rel={d.external ? 'noopener noreferrer' : undefined}
              className="group border border-white/10 bg-white/[0.04] hover:border-white/30 rounded-xl p-7 flex flex-col transition-colors"
            >
              <span className="text-[var(--edgeble-green)] text-base uppercase tracking-[0.2em] font-medium mb-6">{d.kicker}</span>
              <h3 className="text-2xl text-white mb-3">{d.title}</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">{d.body}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-base text-white/80 group-hover:text-white">
                {d.cta}
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
