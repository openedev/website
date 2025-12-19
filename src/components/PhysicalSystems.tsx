import { useEffect, useState } from "react";

const SECTORS = [
  {
    label: "Industrial",
    logos: ["AmaraRaja", "PatilRail", "Collins Aerospace"],
  },
  {
    label: "Automotive",
    logos: ["Apollo Tyres", "Nissan", "Hero"],
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
    <div className="mt-12 flex justify-center gap-64 flex-wrap animate-fadeIn">
      {SECTORS[active].logos.map((name) => (
        <div
          key={name}
          className="text-white/200 text-lg tracking-wide"
        >
          {name}
        </div>
      ))}
    </div>
  </section>
);
}
