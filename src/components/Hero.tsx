import React from 'react';

const stats = [
  { value: '9 of 9', label: 'wrong claims caught on a live line' },
  { value: '13 ms', label: 'to check one claim, on the device' },
  { value: '0', label: 'line stops for a model change' },
];

const Hero = () => {
  return (
    <section id="home" className="relative bg-site pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl animate-fadeIn">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
            Self-correction for physical AI · lines, vehicles, robots
          </p>
          <h1 className="text-4xl md:text-6xl text-white mb-5 leading-tight">
            Deployed AI makes wrong claims. Correction fixes them on-device.
          </h1>
          <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed max-w-4xl">
            Every output of a model is a claim. Correction sits beside the model, on the device: it checks each
            claim in <span className="text-[var(--edgeble-green)] font-medium">13 ms</span>, corrects the wrong one,
            fixes the cause and signs the ledger. The model stays sealed.
          </p>
        </div>

        <div className="mt-12 md:mt-16 animate-fadeIn animation-delay-300">
          <div className="grid grid-cols-2 gap-4 text-sm sm:text-lg uppercase tracking-[0.16em] mb-3">
            <span className="text-white/55">Model as installed · good batteries rejected</span>
            <span className="text-[var(--edgeble-green)]">Same frames with Edgeble · corrected in 13 ms</span>
          </div>
          <video
            className="w-full rounded-xl border border-white/10 bg-black"
            src="/videos/hero-line-loop.mp4"
            poster="/images/hero-line-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="On-device correction on a battery line: left the installed model rejecting good batteries, right the same frames corrected by the runtime in 13 ms"
          />
          <p className="mt-3 text-lg md:text-xl text-white/55 font-light">
            A battery line in production, October 2026. Left, the installed model rejects good batteries.
            Right, the same frames with the runtime beside the model. Battery 19 is a real defect and both reject it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 animate-fadeIn animation-delay-600">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl text-white font-manrope">{s.value}</div>
              <div className="mt-2 text-xl md:text-2xl text-white/65 font-light">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
