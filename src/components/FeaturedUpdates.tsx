import { ArrowRight } from "lucide-react";

const FeaturedUpdates = () => {
  return (
    <section className="relative bg-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Primary Highlight — RNTBCI */}
          <a
            href="/news/nissan25"
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
            href="/blog"
            className="group relative rounded-2xl border border-white/10 bg-white/3 p-8 hover:border-white/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-md uppercase tracking-widest text-white/90">
                Agent-Deployment
              </span>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Self-learning Label Inspection Agent in Manufacturing Physical System
            </h3>

            <p className="text-white leading-relaxed">
              Stay-tuned for upcoming blog.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;
