import React from 'react';
import { ChevronLeft, ChevronRight, Eye, Brain, Shield, Zap, Factory, Car } from 'lucide-react';

const CompaniesAndSolutions = () => {
  const companies = [
    { name: 'Amara Raja', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200', link: '#amara-raja' },
    { name: 'AirFi', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200', link: '#airfi' },
    { name: 'Apollo', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200', link: '#apollo' },
    { name: 'Collins Aerospace', logo: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=200', link: '#collins-aerospace' },
    { name: 'Patil Rail Infra', logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200', link: '#patil-rail-infra' }
  ];

  const solutions = [
    {
      icon: Eye,
      title: 'Vision AI',
      description: 'Real-time defect detection',
      link: '/solutions/vision-ai'
    },
    {
      icon: Brain,
      title: 'Smart Analytics',
      description: 'Predictive maintenance systems',
      link: '/solutions/smart-analytics'
    },
    {
      icon: Shield,
      title: 'Security AI',
      description: 'Advanced threat detection',
      link: '/solutions/security-ai'
    },
    {
      icon: Zap,
      title: 'Edge Processing',
      description: 'Ultra-low latency inference',
      link: '/solutions/edge-processing'
    },
    {
      icon: Factory,
      title: 'Industrial IoT',
      description: 'Smart manufacturing solutions',
      link: '/solutions/industrial-iot'
    },
    {
      icon: Car,
      title: 'Automotive AI',
      description: 'Autonomous driving systems',
      link: '/solutions/automotive-ai'
    }
  ];

  const scrollLeft = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies We Worked With */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Companies We Worked With
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft('companies-scroll')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollRight('companies-scroll')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              id="companies-scroll"
              className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {companies.map((company, index) => (
                <a
                  key={index}
                  href={company.link}
                  className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px] h-32 flex items-center justify-center group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:bg-white/20 transition-all duration-200">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-12 h-12 object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-white font-medium text-sm">{company.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions We Delivered */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Solutions We Delivered
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft('solutions-scroll')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollRight('solutions-scroll')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              id="solutions-scroll"
              className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <a
                    key={index}
                    href={solution.link}
                    className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 min-w-[280px] group"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-white text-sm">{solution.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesAndSolutions;