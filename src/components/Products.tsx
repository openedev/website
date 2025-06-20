import React from 'react';
import { Cpu, Zap, Shield, Gauge, ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'EdgeCore AI-X1',
      tagline: 'Ultra-fast inference module',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['ARM Cortex-A78 CPU', '16GB LPDDR5', 'NPU: 6.4 TOPS', 'Size: 87×55mm'],
      badge: 'Most Popular',
      description: 'High-performance compute module for edge AI applications with pre-trained models.'
    },
    {
      id: 2,
      name: 'EdgeCore Pro-X2',
      tagline: 'Industrial-grade AI accelerator',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['ARM Cortex-A78AE', '32GB LPDDR5X', 'NPU: 12.8 TOPS', 'Temp: -40°C to 85°C'],
      badge: 'Industrial Grade',
      description: 'Ruggedized AI module designed for harsh industrial environments and mission-critical applications.'
    },
    {
      id: 3,
      name: 'EdgeCore Lite-M1',
      tagline: 'Compact AI module for IoT',
      image: 'https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: ['ARM Cortex-A55', '8GB LPDDR4X', 'NPU: 2.4 TOPS', 'Size: 40×30mm'],
      badge: 'New',
      description: 'Compact and energy-efficient AI module perfect for IoT devices and edge computing applications.'
    }
  ];

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Cutting-edge AI accelerators designed for diverse applications, from IoT devices to industrial automation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-white/20">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-medium mb-3">{product.tagline}</p>
                <p className="text-white mb-4 text-sm leading-relaxed">{product.description}</p>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Specifications:</h4>
                  <ul className="space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-white flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-white/10 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group border border-white/20">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              Contact Our Engineers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;