import { ArrowRight } from "lucide-react";

const FeaturedUpdates = () => {
  return (
    <section id="updates" className="relative bg-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Primary Highlight - NXP */}
          <a
            href="/news/nxp-startup-impact-showcase-2026"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-[#77DB89] transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
              <span>TOP 15 by NXP Startup Impact Showcase 2026</span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </h3>

            <p className="text-xl leading-relaxed">
	       Edgeble has been selected among the Top 15 startups by NXP Startup Impact Showcase 2026.
            </p>
          </a>

          {/* Secondary Highlight - Samsung ennovateX */}
          <a
            href="/news/ennovatex"
            className="group relative rounded-2xl border border-white/10 bg-white/3 p-8 hover:border-white/30 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
              <span>TOP 8 by Samsung ennovateX AX Startup 2026</span>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </h3>

            <p className="text-xl leading-relaxed">
              Edgeble has been selected among the Top 8 finalists in Samsung ennovateX 2026's AX Startup Pitch.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;
