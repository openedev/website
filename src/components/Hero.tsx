import React from 'react';
import { Zap } from 'lucide-react';
import CorrectionField from './CorrectionField';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[840px] bg-black overflow-hidden">
      <CorrectionField idPrefix="hero-field" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.90)_34%,rgba(0,0,0,0.48)_58%,rgba(0,0,0,0.14)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-80 pb-16">
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-base md:text-[1.05rem] font-medium mb-7 animate-fadeIn">
            <Zap className="w-[18px] h-[18px] mr-2.5 text-[#77DB89]" />
            Self-Correcting Runtime Layer
          </div>

          <h1 className="text-[2.6rem] md:text-[4.7rem] lg:text-[4.7rem] font-manrope font-medium tracking-tight text-white leading-tight mb-6 animate-fadeIn animation-delay-200">
            <span className="text-[#77DB89]">Physical AI</span> That Fixes Itself
          </h1>

          <p className="text-2xl md:text-2xl text-white max-w-2xl leading-relaxed animate-fadeIn animation-delay-400">
            Your deployed AI degrades in the field: conditions shift, hardware can't keep up, or the model loses accuracy. Edgeble finds what failed and corrects it on-device: no cloud, no downtime, no engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
