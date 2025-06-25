import React from 'react';
import { Factory, Shield, Heart, Sprout, Car, Zap, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Factory,
      title: 'Industrial Automation',
      description: 'AI-powered quality control, predictive maintenance, and process optimization for manufacturing.',
      features: ['Real-time defect detection', 'Predictive maintenance', 'Process optimization']
    },
    {
      icon: Car,
      title: 'Automotive Edge',
      description: 'Advanced driver assistance systems, autonomous driving, and in-vehicle AI applications.',
      features: ['ADAS systems', 'Object detection', 'Driver monitoring']
    },
    {
      icon: Zap,
      title: 'LLM at Edge',
      description: 'Bringing conversational AI, summarization, documents, and decision-making closer to where data is generated',
      features: ['No-Cloud Inference', 'Data privacy', 'Offline operation']
    },
    {
      icon: Shield,
      title: 'Defense & Security',
      description: 'Mission-critical AI applications for surveillance, threat detection, and autonomous systems.',
      features: ['Threat recognition', 'Autonomous navigation', 'Real-time analysis']
    },
    {
      icon: Heart,
      title: 'Medical Devices',
      description: 'AI-enhanced medical imaging, diagnostics, and patient monitoring systems.',
      features: ['Medical imaging analysis', 'Patient monitoring', 'Diagnostic assistance']
    },
    {
      icon: Sprout,
      title: 'Smart Agriculture',
      description: 'Precision farming with AI-driven crop monitoring, yield prediction, and resource optimization.',
      features: ['Crop health monitoring', 'Yield prediction', 'Resource optimization']
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry <span className="text-white">Solutions</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Tailored AI solutions across diverse industries, enabling intelligent edge computing for every sector.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="group bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Icon Header */}
                <div className="bg-white p-6">
                  <IconComponent className="w-12 h-12 text-black mb-4" />
                  <h3 className="text-xl font-bold text-black">{solution.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-white mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-white flex items-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a 
                    href="/solutions"
                    className="w-full bg-white/10 hover:bg-white hover:text-black text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group border border-white/20"
                  >
                    Explore Solution
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white">Deployments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
              <div className="text-white">Industries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white">Reliability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;