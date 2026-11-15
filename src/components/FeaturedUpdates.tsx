import { ArrowRight } from "lucide-react";

const FeaturedUpdates = () => {
  return (
    <section id="updates" className="relative bg-black py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Embedded World India: the booth */}
          <a
            href="/blog/embeddedworld-india-2026-booth"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-white/30 transition-all"
          >
            <p className="text-2xl font-semibold text-white leading-relaxed flex items-center gap-3">
              <span>Embedded World India 2026, Bengaluru, 17 to 19 November.<br />Booth SP16: two live self-correction demos.</span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </p>
          </a>

          {/* Embedded World India: the talk */}
          <a
            href="/blog/embeddedworld-india-2026"
            className="group relative rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-white/30 transition-all"
          >
            <p className="text-2xl font-semibold text-white leading-relaxed flex items-center gap-3">
              <span>Talk: Cross-Layer Self-Correction for Embedded Vision AI.<br />Tuesday 18 November, 16:30, AI and Embedded Vision track.</span>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default FeaturedUpdates;
