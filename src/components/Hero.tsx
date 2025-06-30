import React from 'react';
import { ChevronRight, Cpu, Zap, Globe, Brain } from 'lucide-react';

const Hero = () => {
  const handleRunNPU = () => {
    const element = document.querySelector('#companies-solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 L10,5 M5,0 L5,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="5" cy="5" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 animate-fadeIn">
            <Zap className="w-4 h-4 mr-2" />
            The New Edge AI Standard
          </div>

          {/* Main Headline - Positioned slightly lower */}
          <h1 className="text-2xl md:text-7xl lg:text-7xl font-bold text-white mb-6 animate-fadeIn animation-delay-200">
            <span className="block">The Agentic Edge AI NPU</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed animate-fadeIn animation-delay-400">
            Powered by Edgeble EdgeGPT — a new class of optimized models, NPU modules, and orchestration for scalable, real-time edge intelligence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn animation-delay-600">
            <button 
              onClick={handleGetStarted}
              className="group px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            >
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleRunNPU}
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
            >
              <Cpu className="mr-2 w-5 h-5" />
              Run NPU
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-4xl mx-auto animate-fadeIn animation-delay-800">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Brain className="w-8 h-8 text-white mr-3" />
                <span className="text-4xl font-bold text-white">15+</span>
              </div>
              <p className="text-xl text-white">Vision, Sound, Multimodal</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Cpu className="w-8 h-8 text-white mr-3" />
                <span className="text-4xl font-bold text-white">8+</span>
              </div>
              <p className="text-xl text-white">Vision, LLM NPU Modules</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-white mr-3" />
                <span className="text-4xl font-bold text-white">10+</span>
              </div>
              <p className="text-xl text-white">Real-World Deployments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-white mr-3" />
                <span className="text-4xl font-bold text-white">91.1%</span>
              </div>
              <p className="text-xl text-white">NPU Load Orchestrated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;