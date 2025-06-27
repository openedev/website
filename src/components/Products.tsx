import React from 'react';
import { Cpu, Zap, Shield, Gauge, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'EdgeGPT NPU Chips',
      tagline: 'Ultra-fast inference modules',
      image: 'https://www.edgeble.ai/Home-aia.png?auto=compress&cs=tinysrgb&w=800',
      specs: ['NPU: 6/32TOPS', 'CPU: ARM Cortex-A76', 'LPDDR5: 32GB', 'Form factor: SoM, PCIe', 'Future: Easy to Swap/Upgrade' ],
      badge: 'Chip',
      description: 'Model-first NPUs co-designed with EdgeGPT to guarantee predictable latency and power',
      link: '/products/npu'
    },
    {
      id: 2,
      name: 'EdgeGPT Model',
      tagline: 'Edge-Optimized Models for Real-World',
      image: 'images/Pitch 118.png?auto=compress&cs=tinysrgb&w=800',
      specs: ['NPU-aware Edge Models', 'Task-based architecture', 'Vision, Sound, Agentic','Multimodal, RAG-LLM', 'Real-word proven accuracy'],
      badge: 'Model',
      description: 'Pre-trained, inference-optimized models for instant deployments, low power with accuracy',
      link: '/products/model'
    },
    {
      id: 3,
      name: 'Edge AI Agentic',
      tagline: 'Edge AI Orchestration Stack + Edge Agents',
      image: 'images/Pitch 118(1).png?auto=compress&cs=tinysrgb&w=800',
      specs: ['No Code', 'DevOpe lifecycle', 'Open Source', 'Edge AI Agents', 'Deploy in hours'],
      badge: 'Agentic',
      description: 'Full-stack orchestration to train, develop, deploy, monitor and repeat',
      link: '/products/agentic'
    }
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-white">Products</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Agentic Edge AI NPUs designed for diverse applications, from IoT devices, automotive and industrial automation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-white/20">
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white font-medium mb-3">{product.tagline}</p>
                <p className="text-white mb-4 text-sm leading-relaxed">{product.description}</p>

                {/* Specifications */}
                <div className="mb-7">
                  <h4 className="text-sm font-semibold text-white mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-white flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a 
                  href={product.link}
                  className="w-full bg-white/10 hover:bg-white hover:text-black text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group border border-white/20"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
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
