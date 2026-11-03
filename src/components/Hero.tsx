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
          <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-white/60 mb-6 font-medium">
            On-device correction · on-device learning · lines, vehicles, robots
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-manrope font-normal tracking-tight text-white leading-[1.02] mb-6">
            Self-correcting runtime for physical AI
          </h1>
          <p className="text-xl md:text-2xl lg:text-[1.75rem] text-white/80 font-light leading-snug max-w-3xl">
            Every output of a model is a claim. The runtime beside the model checks it on the device,
            catches the wrong claim in <span className="text-[var(--edgeble-green)] font-medium">13 ms</span>,
            fixes the cause on the device and proves it. Nothing stops. Nothing leaves the device.
          </p>
        </div>

        <div className="mt-12 md:mt-16 animate-fadeIn animation-delay-300">
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-base uppercase tracking-[0.16em] mb-3">
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
          <p className="mt-3 text-base md:text-lg text-white/55 font-light">
            A battery line in production, October 2026. Left, the installed model rejects good batteries.
            Right, the same frames with the runtime beside the model. Battery 19 is a real defect and both reject it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 animate-fadeIn animation-delay-600">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl text-white font-manrope">{s.value}</div>
              <div className="mt-2 text-lg text-white/65 font-light">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
