import React from 'react';
import { COMPANY_LOGOS } from '../data/companyLogos';

const tiles = [
  { src: '/videos/where-line.mp4', kicker: 'LINES', title: 'In production', body: 'Battery, rail, tyre and aerospace lines. The runtime replaced the incumbent inspection station.' },
  { src: '/videos/where-car.mp4', kicker: 'CARS', title: 'Vehicle-tested with Nissan', body: 'Six driver-assistance functions on the same runtime. The moving-camera judge is next.' },
  { src: '/videos/where-robot.mp4', kicker: 'ROBOTS', title: 'On the bench', body: 'The loop reproduced on a sealed Qualcomm NPU and published open source. Robot policies are the next rung.' },
  { src: '/videos/where-npu.mp4', kicker: 'ANY SILICON', title: 'Four NPU families', body: 'Rockchip, NXP, DeepX, Qualcomm. Here on an NXP i.MX 8M Plus with 2 GB of RAM.' },
];

const stack = [
  { label: 'WORKS WITH NPU', items: ['Rockchip RK3588', 'NXP i.MX 8M Plus', 'DeepX', 'Qualcomm Dragonwing'] },
  { label: 'GOVERNS THE MODEL', items: ['YOLO (Ultralytics)', 'classifiers', 'PP-OCR', 'Qwen2', 'vendor-sealed models'] },
  { label: 'RUNS BENEATH THE STACK', items: ['RKNN', 'eIQ', 'DeepX SDK', 'ExecuTorch', 'QAIRT', 'LiteRT', 'ONNX Runtime'] },
];

export default function Where() {
  const customers = [...COMPANY_LOGOS.Industrial, ...COMPANY_LOGOS.Automotive];
  return (
    <section id="where" className="bg-site py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">WHERE IT RUNS</p>
          <h2 className="text-4xl md:text-6xl text-white mb-5 leading-tight">
            One runtime. Lines today. Cars tested. Robots next.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t) => (
            <div key={t.kicker} className="border border-white/10 bg-white/[0.04] rounded-xl overflow-hidden flex flex-col">
              <video
                className="w-full aspect-video object-cover bg-black"
                src={t.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={t.title}
              />
              <div className="p-5">
                <span className="text-[var(--edgeble-green)] text-base uppercase tracking-[0.2em] font-medium">{t.kicker}</span>
                <h3 className="text-2xl text-white mt-2 mb-2">{t.title}</h3>
                <p className="text-white/70 font-light text-base leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-base uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">DEPLOYED AND TESTED WITH</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {customers.map((company) => (
              <div key={company.name} className="h-24 border border-white/10 bg-white/[0.04] rounded-lg flex items-center justify-center px-5">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-14 max-w-full w-auto object-contain grayscale invert"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {stack.map((row) => (
            <div key={row.label} className="border border-white/10 bg-white/[0.04] rounded-xl p-6">
              <p className="text-base uppercase tracking-[0.2em] text-[var(--edgeble-green)] mb-4 font-medium">{row.label}</p>
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li key={item} className="px-3 py-1.5 rounded-full border border-white/15 text-white/80 text-base font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
