import React from 'react';
import { Cpu, Zap, Shield, ArrowRight, ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'EdgeGPT NPU Chips',
      description: 'Model-first NPUs co-designed with EdgeGPT to guarantee predictable latency and power for ultra-fast inference.',
      image: 'https://www.edgeble.ai/Home-aia.png?auto=compress&cs=tinysrgb&w=800',
      link: '/products/npu'
    },
    {
      id: 2,
      name: 'EdgeGPT Model',
      description: 'Pre-trained, inference-optimized models for instant deployments with low power consumption and high accuracy.',
      image: 'images/Pitch 118.png',
      link: '/products/model'
    },
    {
      id: 3,
      name: 'Edge AI Agentic',
      description: 'Full-stack orchestration platform to train, develop, deploy, monitor and manage edge AI solutions seamlessly.',
      image: 'images/Pitch 118(1).png',
      link: '/products/agentic'
    }
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-20">
          <div className="lg:max-w-2xl mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Products
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Intelligent, fast, and powerful. EdgeGPT is the best way to deploy AI at the edge with unprecedented performance and efficiency.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="#products-grid"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm group"
            >
              See Products
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    console.log(`Failed to load image: ${product.image}`);
                  }}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* CTA Button */}
                <a 
                  href={product.link}
                  className="inline-flex items-center text-white hover:text-white/80 font-semibold transition-all duration-300 group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our engineering team can develop tailored AI accelerators for your specific requirements and use cases.
            </p>
            <a 
              href="/contact-engineers"
              className="inline-flex items-center bg-white text-black hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              Contact Our Engineers
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;