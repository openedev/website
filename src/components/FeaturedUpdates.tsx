import { ArrowRight } from "lucide-react";

const FeaturedUpdates = () => {
  return (
    <section id="updates" className="relative bg-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Primary Highlight - EmbeddedWorld China */}
          <a
            href="/news/embeddedworld-china-2026"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-white/30 transition-all"
          >
            <p className="text-2xl font-semibold text-white leading-relaxed flex items-center gap-3">
              <span>Edgeble speaking at EmbeddedWorld China 2026 in<br />Advanced Packaging &amp; Heterogeneous Systems track.</span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </p>
          </a>

          {/* Secondary Highlight - Qualcomm Dragonwing */}
          <a
            href="/blog/edgeble-qualcomm-dragonwing-2026"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-white/30 transition-all"
          >
            <p className="text-2xl font-semibold text-white leading-relaxed flex items-center gap-3">
              <span>Edgeble Self-Correcting on Qualcomm Dragonwing<br />Live Drift Recovery, Open Source AI Week, San Francisco</span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </p>
          </a>

          {/* Additional Highlight - NXP i.MX */}
          <a
            href="/blog/nxp-2026"
            className="group relative rounded-2xl border border-white/10 bg-white/3 p-8 hover:border-white/30 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
              <span>Self-Correcting Physical AI on NXP i.MX</span>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </h3>

            <p className="text-xl leading-relaxed">
              Live drift recovery on i.MX 8M Plus at the NXP Startup Impact Showcase on Sept 15.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;
