import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type Status = 'IN PRODUCTION' | 'VALIDATING' | 'NEXT';

const statusClass: Record<Status, string> = {
  'IN PRODUCTION': 'text-[var(--edgeble-green)]',
  VALIDATING: 'text-[#FFB454]',
  NEXT: 'text-white/50',
};

const silicon: { name: string; status: Status }[] = [
  { name: 'Industrial', status: 'IN PRODUCTION' },
  { name: 'Automotive', status: 'VALIDATING' },
  { name: 'Robotics', status: 'NEXT' },
];

const ways = [
  {
    title: 'Correction orchestration.',
    body: 'Our full stack, with correction built in.',
    stack: ['Our platform', 'Our model', 'Our inference engine'],
    cta: 'Have it installed',
    href: '/letusknow/orchestration?scene=A%20factory%20line%20or%20dock',
  },
  {
    title: 'Correction runtime.',
    body: 'Your stack, with correction firmware beside it.',
    stack: ['Your platform', 'Your model', 'Your inference engine', 'Your Silicon'],
    cta: 'Licence the runtime',
    href: '/letusknow/runtime?stage=We%20ship%20this%20inside%20our%20product',
  },
];

function CorrectionBar() {
  return (
    <div className="w-14 md:w-16 min-h-full flex-shrink-0 rounded-md bg-[#F2F2F2] flex items-center justify-center" aria-hidden="true">
      <span className="[writing-mode:vertical-rl] rotate-180 text-[#181818] text-xl font-bold uppercase tracking-[0.5em]">
        Correction
      </span>
    </div>
  );
}

export default function Start() {
  return (
    <section id="start" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">START</p>
          <h2 className="text-4xl md:text-6xl text-white mb-5 leading-tight">One core. Two ways to get it.</h2>
          <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed">
            The same correction layer runs in both. We deploy it as a station on your line, or you deploy it as
            firmware beside your own model. The open-source runner below is the door you can open today without
            talking to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {ways.map((w, i) => (
            <div key={w.title} className="border border-white/10 bg-white/[0.04] rounded-xl p-7 flex flex-col">
              <h3 className="text-2xl md:text-3xl text-white mb-2">{w.title}</h3>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-7">{w.body}</p>

              <div className="flex gap-3 flex-1 min-h-[28rem]">
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  {w.stack.map((s) => (
                    <div key={s} className="border border-white/25 rounded-md px-5 py-4 text-white text-xl md:text-2xl">
                      {s}
                    </div>
                  ))}

                  {i === 0 ? (
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <figure className="rounded-md bg-[#F2F2F2] p-3 flex flex-col">
                        <img src="/images/start-module.png" alt="Edgeble Edge AI NPU Module on its carrier, with heatsink and fan" className="w-full flex-1 min-h-[7rem] object-cover rounded-sm" loading="lazy" />
                        <figcaption className="text-[#181818] text-base font-bold px-1 pt-2">Edge AI NPU Module</figcaption>
                      </figure>
                      <figure className="rounded-md bg-[#F2F2F2] p-3 flex flex-col">
                        <img src="/images/start-camera.png" alt="Edgeble camera" className="w-full flex-1 min-h-[7rem] object-contain" loading="lazy" />
                        <figcaption className="text-[#181818] text-base font-bold px-1 pt-2">Camera</figcaption>
                      </figure>
                    </div>
                  ) : (
                    <div className="border border-dashed border-white/35 rounded-md px-5 py-4 flex-1 flex flex-col justify-center">
                      <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-3">Your silicon</p>
                      <dl className="space-y-2.5">
                        {silicon.map((s) => (
                          <div key={s.name} className="flex items-baseline justify-between gap-4">
                            <dt className="text-white text-xl md:text-2xl">{s.name}</dt>
                            <dd className={`text-base uppercase tracking-[0.18em] font-bold ${statusClass[s.status]}`}>{s.status}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>
                <CorrectionBar />
              </div>

              <a href={w.href} className="pt-7 inline-flex items-center gap-2 text-xl text-white hover:text-white/80 underline underline-offset-4">
                {w.cta}
                <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/edgeble/self-correction-qc-executorch"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 border border-white/10 bg-white/[0.04] hover:border-white/30 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-colors"
        >
          <div className="p-7 flex flex-col">
            <span className="text-[var(--edgeble-green)] text-base uppercase tracking-[0.2em] font-medium mb-5">TRY IT</span>
            <h3 className="text-2xl md:text-3xl text-white mb-3">The open-source runner.</h3>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
              The same layer, on a Qualcomm Dragonwing board you may already have. Our sealed model, our recorded clip
              and the judge correcting lighting false positives. Build the container, replay the clip, read the ledger.
              Apache-2.0.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-xl text-white group-hover:text-white/80 underline underline-offset-4">
              View the repo on GitHub
              <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
            </span>
          </div>
          <img
            src="/images/qualcomm/judge-false-positive-hotel-ab.png"
            alt="Left, the existing line calls a good battery NG. Right, the judge corrects it to OK on the spot."
            className="w-full h-full min-h-[14rem] object-contain bg-black border-t lg:border-t-0 lg:border-l border-white/10"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
