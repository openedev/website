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
    <section className="bg-black py-32 text-center">
      {/* TEXT LINE */}
      <div className="relative inline-block">
        <p className="text-xl md:text-3xl text-white/70 tracking-wide">
          Edgeble enables physical systems in{" "}
          <span className={active === 0 ? "text-white" : "text-white/30"}>
            Industrial </span>
            and{" "}
          <span className={active === 1 ? "text-white" : "text-white/30"}>
            Automotive
          </span>{" "}
        </p>

        {/* MOVING LINE */}
        <div
          className="absolute h-[2px] bg-[#77DB89] transition-transform duration-700"
          style={{
            width: "110px",
            bottom: "-10px",
            transform: `translateX(${active * 135}px)`,
          }}
        />
      </div>

      {/* LOGOS */}
      <div className="mt-16 flex justify-center gap-14 flex-wrap animate-fadeIn">
        {SECTORS[active].logos.map((name) => (
          <div
            key={name}
            className="text-white/60 text-lg tracking-wide"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
