import React from 'react';
import { COMPANY_LOGOS } from '../data/companyLogos';

export default function PhysicalSystems() {
  const customers = [...COMPANY_LOGOS.Industrial, ...COMPANY_LOGOS.Automotive];

  return (
    <section id="customers" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
            CUSTOMERS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Physical AI teams building at the edge.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {customers.map((company) => (
            <div
              key={company.name}
              className="h-28 border border-white/10 bg-white/[0.04] rounded-lg flex items-center justify-center px-5"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-16 max-w-full w-auto object-contain grayscale invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
