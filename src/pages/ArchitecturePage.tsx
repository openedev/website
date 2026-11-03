import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SelfCorrectionFlow from '../components/SelfCorrectionFlow';
import CompaniesAndSolutions from '../components/CompaniesAndSolutions';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-site">
      <Navigation />
      <main className="pt-[112px]">
        <section className="bg-site py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">ARCHITECTURE</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5 leading-tight">Correct now. Fix forever.</h1>
            <p className="text-xl md:text-2xl text-white/75 font-light leading-relaxed max-w-3xl mb-10">
              Stage 1 runs on every frame, in milliseconds, and never blocks the line. It judges each claim
              and corrects the wrong ones. Stage 2 runs in the background, in seconds to minutes, when wrong
              calls repeat. It finds which layer moved, sensor, chip or model, fixes it on the device, and
              proves the fix before it goes live. The diagram shows both stages on one time axis.
            </p>
            <SelfCorrectionFlow />
          </div>
        </section>
        <CompaniesAndSolutions />
      </main>
      <Footer />
    </div>
  );
}
