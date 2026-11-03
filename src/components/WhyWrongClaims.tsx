import React from 'react';

export default function WhyWrongClaims() {
  return (
    <section id="why" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">WHY</p>
          <h2 className="text-4xl md:text-6xl text-white mb-5 leading-tight">
            A well-built model still makes wrong claims.
          </h2>
          <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed">
            The world moves, the sensor ages, the chip's timing shifts. A model at 99 % is wrong once in a
            hundred and cannot tell which one. On a line, in a car or on a robot that is scrap, a stopped
            line, a braked car, an empty gripper.
          </p>
        </div>

        <figure className="rounded-xl border border-white/10 bg-site overflow-hidden">
          <img
            src="/images/wrong-claims-bands-dark.png"
            alt="Wrong claims per 100 decisions, cost of one wrong claim and time to a deployed fix, across fixed, moving and acting scenes"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="px-5 py-4 text-base md:text-lg text-white/55 font-light">
            Published measurements, 2017 to 2026, per decision, across the three scenes a physical AI
            runs in: fixed, moving, acting. Sources in our research notes.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
