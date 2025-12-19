import { useEffect, useState } from "react";

const SECTORS = [
  {
    label: "Industrial",
    logos: [
      { name: "AmaraRaja", image: "/amara-raja.png" },
      { name: "PatilRail", image: "/patil.jpg" },
      { name: "Collins Aerospace", image: "/collins-aerospace.png" },
    ],
  },
  {
    label: "Automotive",
    logos: [
      { name: "Apollo Tyres", image: "/apollo-tyres.png" },
      { name: "Nissan", image: "/nissan.png" },
      { name: "Hero", image: "/hero.png" },
    ],
  },
];

export default function PhysicalSystems() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SECTORS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-black pt-32 pb-10 text-center">
      {/* TEXT LINE */}
      <p className="text-xl md:text-2xl text-white/80 tracking-wide flex justify-center gap-2">
        Edgeble enables physical systems in
        {/* Industrial */}
        <span className="relative inline-block">
          <span className={active === 0 ? "text-white" : "text-white/100"}>
            Industrial
          </span>
          {active === 0 && (
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#77DB89]" />
          )}
        </span>
        and
        {/* Automotive */}
        <span className="relative inline-block">
          <span className={active === 1 ? "text-white" : "text-white/100"}>
            Automotive
          </span>
          {active === 1 && (
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#77DB89]" />
          )}
        </span>
      </p>

      {/* LOGOS */}
      <div className="flex flex-col items-center justify-center gap-3">
        {SECTORS[active].logos.map((logo) => (
          <div key={logo.name}>
            <p className="text-white/80 text-sm font-medium">{logo.name}</p>
            <img
              src={logo.image}
              alt={logo.name}
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
