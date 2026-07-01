import React from 'react';
import { Activity, Brain, CheckCircle, Cpu, RotateCcw, Shield } from 'lucide-react';

const CompaniesAndSolutions = () => {
  const layers = [
    { icon: Shield, title: 'Physical System', detail: 'Sensors, optics, links, motion, alignment, and environment.' },
    { icon: Cpu, title: 'AI Compute', detail: 'Runtime, scheduling, memory, thresholds, and acceleration paths.' },
    { icon: Brain, title: 'Model', detail: 'Confidence drift, novelty-search, quantization loss, and domain shift.' },
  ];

  const loop = [
    { icon: Activity, label: 'Detect failure' },
    { icon: Shield, label: 'Diagnose layer' },
    { icon: RotateCcw, label: 'Correct locally' },
    { icon: CheckCircle, label: 'Continue inference' },
  ];

  return (
    <section id="correction-stack" className="py-24 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
            SELF-CORRECTION ARCHITECTURE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Diagnose the layer. Correct on-device.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            A compact runtime loop for deployed Physical AI. The core moat is knowing what broke before applying correction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {loop.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.label} className="border border-white/10 bg-white/[0.04] rounded-lg p-5">
                <IconComponent className="w-6 h-6 text-[#77DB89] mb-4" />
                <h3 className="text-white font-semibold text-lg">{step.label}</h3>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {layers.map((layer) => {
            const IconComponent = layer.icon;
            return (
              <div key={layer.title} className="border-l border-[#77DB89] bg-white/[0.03] px-6 py-5">
                <IconComponent className="w-6 h-6 text-[#77DB89] mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">{layer.title}</h3>
                <p className="text-white/70 leading-relaxed">{layer.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesAndSolutions;
