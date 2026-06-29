import React from 'react';
import { ArrowRight } from 'lucide-react';
import CorrectionField from './CorrectionField';

export default function BuildWithUs() {
  return (
    <section id="build-with-us" className="relative min-h-[720px] overflow-hidden bg-black py-28 border-t border-white/10">
      <CorrectionField idPrefix="build-field" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.92)_38%,rgba(0,0,0,0.58)_68%,rgba(0,0,0,0.22)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
            BUILD WITH US
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block whitespace-nowrap">Build self-correcting</span>
            <span className="block">Physical Systems</span>
          </h2>
          <div className="space-y-5 mb-8 max-w-2xl">
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              We believe it is time to safely scale Physical Systems. Only a cross-layer approach can diagnose when physical drift degrades model behavior, then correct the right layer as more physical systems and robotics come onboard.
            </p>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Many research and engineering challenges remain. We are building the team to solve them. If these problems interest you, contact us at <a href="mailto:info@edgeble.ai" className="text-[#77DB89] hover:text-white transition-colors">info@edgeble.ai</a>.
            </p>
          </div>
          <a
            href="mailto:info@edgeble.ai"
            className="inline-flex items-center justify-center bg-white text-black hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact us
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
