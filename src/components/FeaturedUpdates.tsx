import { ArrowRight } from "lucide-react";

const FeaturedUpdates = () => {
  return (
    <section id="updates" className="relative bg-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Primary Highlight — Curiosity */}
          <a
            href="/news/curiosity"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-[#77DB89] transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
              <span>Winner of Curiosity 2026 by SPC</span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </h3>

            <p className="text-xl leading-relaxed">
              Edgeble won Curiosity 2026 by South Park Commons India and ARTPARK/IISc Bangalore in the Physical AI category.
            </p>
          </a>

          {/* Secondary Highlight — RNTBCI */}
          <a
            href="/news/curiosity"
            className="group relative rounded-2xl border border-white/10 bg-white/3 p-8 hover:border-white/30 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-3">
              <span>Winner of Nissan Open Innovation Challenge</span>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </h3>

            <p className="text-xl leading-relaxed">
              Edgeble won the Nissan Open Innovation Challenge for its self-correcting Physical AI runtime.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;
