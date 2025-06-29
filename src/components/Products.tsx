import React from 'react';
import { Cpu, Zap, Shield, Gauge, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'EdgeGPT NPU Chips',
      description: 'Co-designed with EdgeGPT Models for predictable latency and power.',
      image: 'https://www.edgeble.ai/Home-aia.png?auto=compress&cs=tinysrgb&w=800',
      badge: 'Chip',
      link: '/products/npu'
    },
    {
      id: 2,
      name: 'EdgeGPT Model',
      description: 'Trained, Quantize, Optimized for Edge AI Usecases than model attributes.',
      image: 'images/edgegpt.png?auto=compress&cs=tinysrgb&w=800',
      badge: 'Model',
      link: '/products/model'
    },
    {
      id: 3,
      name: 'Edge AI Agentic',
      description: 'Full-stack orchestration to train, develop, deploy, monitor and agent.',
      image: 'images/Pitch 118(1).png?auto=compress&cs=tinysrgb&w=800',
      badge: 'Agentic',
      link: '/products/agentic'
    }
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Products
            </h2>
            <p className="text-xl text-white max-w-3xl">
              Agentic Edge AI NPUs designed for diverse applications, from IoT devices, automotive and industrial automation
            </p>
          </div>
          <div>
            <button className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              See Products
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a 
              key={product.id} 
              href={product.link}
              className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-white/20 block"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-black/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black shadow-lg">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 bg-black/80">
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white leading-tight">
                  {product.name}
                </h3>
                <p className="text-white/90 mb-8 text-base leading-relaxed font-medium">
                  {product.description}
                </p>

                {/* CTA Button */}
                <div className="w-full bg-white/10 hover:bg-white hover:text-black text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group border border-white/20">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Our engineering team can develop tailored AI accelerators for your specific requirements and use cases.
            </p>
            <a 
              href="/contact-engineers"
              className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Contact Our Engineers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;