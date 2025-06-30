import React from 'react';
import { Factory, Shield, Heart, Sprout, Car, Zap, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: Factory,
      title: 'Industrial Automation',
      description: 'AI-powered quality control, predictive maintenance, and process optimization for manufacturing environments.',
      image: 'https://images.pexels.com/photos/159298/gear-machine-mechanical-mechanical-engineering-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Real-time defect detection', 'Predictive maintenance', 'Process optimization', 'Quality assurance'],
      caseStudy: 'Reduced manufacturing defects by 85% for automotive parts manufacturer'
    },
    {
      icon: Car,
      title: 'Automotive Edge',
      description: 'Advanced driver assistance systems, autonomous driving capabilities, and in-vehicle AI applications.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ADAS systems', 'Object detection', 'Driver monitoring', 'Lane departure warning'],
      caseStudy: 'Improved road safety with 95% accuracy in object detection for fleet vehicles'
    },
    {
      icon: Zap,
      title: 'LLM at Edge',
      description: 'Bringing conversational AI, document processing, and decision-making closer to data sources.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['No-Cloud Inference', 'Data privacy', 'Offline operation', 'Real-time processing'],
      caseStudy: 'Enabled offline AI assistance for remote healthcare facilities'
    },
    {
      icon: Shield,
      title: 'Defense & Security',
      description: 'Mission-critical AI applications for surveillance, threat detection, and autonomous defense systems.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Threat recognition', 'Autonomous navigation', 'Real-time analysis', 'Secure communications'],
      caseStudy: 'Enhanced border security with 99.2% threat detection accuracy'
    },
    {
      icon: Heart,
      title: 'Medical Devices',
      description: 'AI-enhanced medical imaging, diagnostics, and patient monitoring systems for healthcare.',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Medical imaging analysis', 'Patient monitoring', 'Diagnostic assistance', 'Treatment optimization'],
      caseStudy: 'Improved diagnostic accuracy by 40% in radiology departments'
    },
    {
      icon: Sprout,
      title: 'Smart Agriculture',
      description: 'Precision farming with AI-driven crop monitoring, yield prediction, and resource optimization.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Crop health monitoring', 'Yield prediction', 'Resource optimization', 'Pest detection'],
      caseStudy: 'Increased crop yield by 30% while reducing water usage by 25%'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-black border-b border-white/10 pt-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-white hover:text-white/70 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry Solutions
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Comprehensive AI solutions tailored for diverse industries, delivering measurable results and transforming business operations.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-white mb-6 leading-relaxed">{solution.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-white flex items-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Success Story:</h4>
                    <p className="text-white/90 text-sm">{solution.caseStudy}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Our engineering team can develop tailored AI solutions for your specific industry requirements and use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-engineers"
              className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Contact Engineers
            </a>
            <a 
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 border border-white/20 inline-block"
            >
              General Inquiry
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolutionsPage;