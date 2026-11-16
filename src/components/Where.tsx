import React from 'react';
import { COMPANY_LOGOS } from '../data/companyLogos';
import SelfCorrectionFlow from './SelfCorrectionFlow';

const tiles = [
  { src: '/videos/where-line.mp4', kicker: 'LINES', title: 'In production', body: 'Battery, rail, tyre and aerospace lines. The runtime replaced the incumbent inspection station.' },
  { src: '/videos/where-car.mp4', kicker: 'CARS', title: 'Vehicle-tested with Nissan', body: 'Six driver-assistance functions on the same runtime. The moving-camera judge is next.' },
  { src: '/videos/where-robot.mp4', kicker: 'ROBOTS', title: 'On the bench', body: 'The loop reproduced on a sealed Qualcomm NPU and published open source. Robot policies are the next rung.' },
  { src: '/videos/where-npu.mp4', kicker: 'ON-DEVICE', title: 'Beside the model, on the NPU', body: 'The same correction on Rockchip, NXP, DeepX and Qualcomm. Here on an NXP i.MX 8M Plus with 2 GB of RAM.' },
];

const stack = [
  { label: 'WHERE CORRECTION BELONGS', items: ['Industrial · in production', 'Automotive · validating', 'Robot · next'] },
  { label: 'WHAT IT CORRECTS', items: ['Sensor: light, lens, belt', 'Chip: heat, dropped frames', 'Model: drift, a new type'] },
  { label: 'GOVERNS THE MODEL', items: ['YOLO (Ultralytics)', 'classifiers', 'PP-OCR', 'Qwen2', 'vendor-sealed models'] },
  { label: 'RUNS ON YOUR SILICON', items: ['Rockchip RK3588', 'NXP i.MX 8M Plus', 'DeepX', 'Qualcomm Dragonwing', 'RKNN', 'eIQ', 'ExecuTorch', 'QAIRT', 'LiteRT', 'ONNX Runtime'] },
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
                <h3 className="text-2xl md:text-3xl text-white mt-2 mb-2">{t.title}</h3>
                <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>

        <figure id="architecture" className="mt-14 rounded-xl border border-white/10 bg-site overflow-hidden scroll-mt-28">
          <img
            src="/images/runtime-beside-your-model.svg"
            alt="Deployed AI makes wrong claims. Correction fixes them on-device. Your model stays sealed; correction, toolchain, judge, correct and ledger, sits beside it and hands the verified claim to your decision. Where correction belongs: industrial in production, automotive validating, robot next. Six causes, one symptom: sensor, chip, model."
            className="w-full h-auto"
            loading="lazy"
          />
        </figure>

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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stack.map((row) => (
            <div key={row.label} className="border border-white/10 bg-white/[0.04] rounded-xl p-6">
              <p className="text-base uppercase tracking-[0.2em] text-[var(--edgeble-green)] mb-4 font-medium">{row.label}</p>
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li key={item} className="px-3 py-1.5 rounded-full border border-white/15 text-white/80 text-lg font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <figure className="mt-14 rounded-xl border border-white/10 bg-site overflow-hidden">
          <figcaption className="px-6 md:px-10 pt-10 pb-2 text-center">
            <h3 className="text-3xl md:text-5xl text-white">Correct now. Fix forever.</h3>
            <p className="mt-4 text-xl md:text-2xl text-white/75 font-light leading-relaxed max-w-4xl mx-auto">
              Stage 1 judges every claim in milliseconds and corrects the wrong one; it never blocks the line.
              Stage 2 runs behind it when wrong claims repeat: it finds which layer moved, sensor, chip or model,
              fixes it on-device and proves the fix before it goes live.
            </p>
          </figcaption>
          <div className="p-3 md:p-6">
            <SelfCorrectionFlow />
          </div>
        </figure>
      </div>
    </section>
  );
}
