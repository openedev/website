import React from 'react';
import { Cpu, Zap, Shield, Gauge, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'EdgeGPT NPU Chips',
      tagline: 'Ultra-fast inference modules',
      image: 'https://www.edgeble.ai/Home-aia.png?auto=compress&cs=tinysrgb&w=800',
      badge: 'Chip',
      description: 'Model-first NPUs co-designed with EdgeGPT to guarantee predictable latency and power',
      link: '/products/npu'
    },
    {
      id: 2,
      name: 'EdgeGPT Model',
      tagline: 'Edge-Optimized Models for Real-World',
      image: 'images/edgegpt.png?auto=compress&cs=tinysrgb&w=800',
      badge: 'Model',
      description: 'Pre-trained, inference-optimized models for instant deployments, low power with accuracy',
      link: '/products/model'
    },
    {
      id: 3,
      name: 'Edge AI Agentic',
      tagline: 'Edge AI Orchestration Stack + Edge Agents',
      image: 'images/Pitch 118(1).png?auto=compress&cs=tinysrgb&w=800',
      badge: 'Agentic',
      description: 'Full-stack orchestration to train, develop, deploy, monitor and repeat',
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
              className="group bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-700/50 hover:border-gray-600/50 block backdrop-blur-sm"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* Subtle gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black shadow-lg">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product Content - Increased padding and height */}
              <div className="p-8 min-h-[200px] bg-gray-900/80 backdrop-blur-sm">
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight ${
                  product.id === 1 
                    ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text' 
                    : 'text-white'
                }`}>
                  {product.name}
                </h3>
                <p className="text-gray-200 font-medium mb-4 text-lg">{product.tagline}</p>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{product.description}</p>

                {/* CTA Button */}
                <div className="w-full bg-gray-800/60 hover:bg-white hover:text-black text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group border border-gray-600/50 hover:border-white">
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