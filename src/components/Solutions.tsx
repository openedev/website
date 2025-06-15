import React from 'react';
import { Factory, Shield, Heart, Sprout, Car, Zap, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Factory,
      title: 'Industrial Automation',
      description: 'AI-powered quality control, predictive maintenance, and process optimization for manufacturing.',
      features: ['Real-time defect detection', 'Predictive maintenance', 'Process optimization'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Defense & Security',
      description: 'Mission-critical AI applications for surveillance, threat detection, and autonomous systems.',
      features: ['Threat recognition', 'Autonomous navigation', 'Real-time analysis'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'Medical Devices',
      description: 'AI-enhanced medical imaging, diagnostics, and patient monitoring systems.',
      features: ['Medical imaging analysis', 'Patient monitoring', 'Diagnostic assistance'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Sprout,
      title: 'Smart Agriculture',
      description: 'Precision farming with AI-driven crop monitoring, yield prediction, and resource optimization.',
      features: ['Crop health monitoring', 'Yield prediction', 'Resource optimization'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Car,
      title: 'Automotive Edge',
      description: 'Advanced driver assistance systems, autonomous driving, and in-vehicle AI applications.',
      features: ['ADAS systems', 'Object detection', 'Driver monitoring'],
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Distributed AI inference at the edge for reduced latency and improved privacy.',
      features: ['Low-latency inference', 'Data privacy', 'Offline operation'],
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industry <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored AI solutions across diverse industries, enabling intelligent edge computing for every sector.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-cyan-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${solution.color} p-6`}>
                  <IconComponent className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-cyan-600 hover:to-purple-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group">
                    Explore Solution
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-300">Deployments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-2">6</div>
              <div className="text-gray-300">Industries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-300">Reliability</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;