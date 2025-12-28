import { ArrowRight } from "lucide-react";

const FeaturedUpdates = () => {
  return (
    <section className="relative bg-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Primary Highlight — RNTBCI */}
          <a
            href="/blog/nissan25"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-[#77DB89] transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-md uppercase tracking-widest text-[#77DB89]">
                Recognition
              </span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform" />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Winner of RNTBCI Open Innovation Challenge
            </h3>

            <p className="text-white/80 leading-relaxed">
              Renault Nissan Technology & Business Centre has selected Edgeble Edge AI Accelerator &
	      Orchestration excellence in automotive physical systems.
            </p>
          </a>

          {/* Secondary Highlight — Tech / Blog */}
          <a
            href="/blog/lpc2025"
            className="group relative rounded-2xl border border-white/10 bg-white/3 p-8 hover:border-white/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-md uppercase tracking-widest text-white/70">
                Deep-tech
              </span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform" />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Demystifying Linux NPU Subsystem
            </h3>

            <p className="text-white/80 leading-relaxed">
              Why NPUs need Linux-style contracts instead of SDK-locked execution.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;
