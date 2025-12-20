import { useEffect, useState } from "react";
import { COMPANY_LOGOS } from "../data/companyLogos";

const SECTORS = ["Industrial", "Automotive"] as const;

export default function PhysicalSystems() {
  const [active, setActive] = useState<0 | 1>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const activeSector = SECTORS[active];
  const logos = COMPANY_LOGOS[activeSector];

  return (
    <section className="bg-black pt-24 pb-16 text-center">
      {/* TEXT LINE */}
      <p className="text-xl md:text-2xl text-white/80 tracking-wide flex justify-center gap-2 mb-12">
        Edgeble enables physical systems in

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-center">
          {logos.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-[70px]"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-[60px] w-auto object-contain grayscale invert opacity-80 hover:opacity-100 transition"
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
