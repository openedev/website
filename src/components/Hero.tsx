import React from 'react';
import { Zap } from 'lucide-react';
import CorrectionField from './CorrectionField';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] bg-black overflow-hidden flex items-center">
      <CorrectionField idPrefix="hero-field" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_34%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.04)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-5xl text-left">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-base md:text-[1.05rem] font-medium mb-4 animate-fadeIn">
            <Zap className="w-[18px] h-[18px] mr-2.5 text-white/70" />
            Self-Correcting Runtime Layer
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-manrope font-normal tracking-tight text-white leading-tight mb-8 animate-fadeIn animation-delay-200">
            <span className="block">Edgeble keeps deployed Physical AI accurate</span>
            <span className="block">on-device, for the life of the machine</span>
          </h1>

          <p className="text-3xl md:text-4xl lg:text-4xl text-white max-w-4xl font-manrope font-normal leading-tight animate-fadeIn animation-delay-400">
            <span className="block">Every decision from model, chip, and sensor</span>
            <span className="block">detect, diagnose and corrects on the device</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center max-w-4xl text-lg text-white/80 font-medium animate-fadeIn animation-delay-600">
            <span className="pb-3 sm:pb-0 sm:pr-6">50% fewer people watching the AI</span>
            <span className="border-t sm:border-t-0 sm:border-l border-white/30 py-3 sm:py-0 sm:px-6">30% fewer wrong decisions</span>
            <span className="border-t sm:border-t-0 sm:border-l border-white/30 pt-3 sm:pt-0 sm:pl-6">0 line or robot stops</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
