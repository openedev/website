import React from 'react';
import { ArrowRight } from 'lucide-react';

const AdditionalProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Edgeble Runtime Engine',
      description: 'Diagnoses physical, system, and model failures, then applies controlled correction or on-device adaptation',
      image: 'images/runtime.png',
      badge: 'hardware-agnostic',
      link: '/products/runtime'
    },
    {
      id: 2,
      name: 'Edgeble Runtime Module',
      description: 'Edge hardware modules pre-programmed with the runtime, optimized for self-correcting workloads',
      image: '/images/runtime-mod.png',
      badge: 'hardware-optimized',
      link: '/products/module'
    }
  ];

  return (
    <section id="runtime" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div className="flex justify-center mb-20 text-center">
	  <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
                RUNTIME INFRASTRUCTURE FOR PHYSICAL AI
              </p>
            <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">
              Edgeble Physical AI Runtime
            </h2>
            <p className="text-2xl text-white max-w-4xl">
	      Self-correcting runtime from edge devices to factory gateways
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className="group bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/20 hover:border-white/40 block h-[660px] flex flex-col"
            >
              <div className="relative h-[440px] overflow-hidden bg-black/20 flex-shrink-0 px-6 py-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transform: product.id === 2 ? 'scale(1.08)' : 'scale(1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <div className="absolute top-2 left-3 z-10">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white text-black shadow-lg">
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="p-8 bg-black/60 backdrop-blur-sm flex-1 flex flex-col">
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-white leading-tight">
                  {product.name}
                </h3>
                <p className="text-white/90 mb-6 text-xl leading-relaxed font-medium">
                  {product.description}
                </p>

                <div className="flex items-center text-white hover:text-white/80 font-semibold transition-all duration-200 group/link">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalProducts;
