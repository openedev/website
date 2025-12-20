import { useEffect, useState } from "react";
import { COMPANY_LOGOS } from "../data/companyLogos";

const SECTORS = ["Industrial", "Automotive"] as const;

export default function PhysicalSystems() {
  const [active, setActive] = useState<0 | 1>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const activeSector = SECTORS[active];
  const logos = COMPANY_LOGOS[activeSector];

  return (
    <section className="bg-black pt-24 pb-16 text-center">
      {/* TEXT LINE */}
      <p className="text-xl md:text-2xl text-white tracking-wide flex justify-center gap-2 mb-12">
        Edgeble enabling physical systems in

        {SECTORS.map((sector, index) => (
          <span key={sector} className="relative inline-block mx-1">
            <span className={active === index ? "text-white" : "text-white/40"}>
              {sector}
            </span>

            {active === index && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#77DB89]" />
            )}
          </span>
        ))}
      </p>

      {/* LOGOS — FULL WIDTH GRID */}
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between gap-12">
          {logos.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-[72px] flex-1"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
		className="
		  max-h-[80px]
		  max-w-[140px]
		  w-auto
		  object-contain
		  opacity-100
		  grayscale
		  invert
		  transition
		  hover:opacity-100
                "
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
