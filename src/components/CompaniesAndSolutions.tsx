import React, { useEffect, useRef } from 'react';
import { Eye, Brain, Shield, Zap, Factory, Car } from 'lucide-react';

const CompaniesAndSolutions = () => {
  const companiesScrollRef = useRef<HTMLDivElement>(null);
  const solutionsScrollRef = useRef<HTMLDivElement>(null);

  const companies = [
    { 
      name: 'Amara Raja', 
      logo: 'https://www.amararaja.co.in/images/logo.png',
      link: '#amara-raja' 
    },
    { 
      name: 'AirFi', 
      logo: 'https://airfi.aero/wp-content/uploads/2021/03/AirFi-Logo-White-BG.png',
      link: '#airfi' 
    },
    { 
      name: 'Apollo', 
      logo: 'https://www.apollohospitals.com/assets/images/apollo-logo.png',
      link: '#apollo' 
    },
    { 
      name: 'Collins Aerospace', 
      logo: 'https://www.collinsaerospace.com/-/media/project/collinsaerospace/collinsaerospace/images/logos/collins-aerospace-logo.png',
      link: '#collins-aerospace' 
    },
    { 
      name: 'Patil Rail Infra', 
      logo: 'https://www.patilrail.com/images/logo.png',
      link: '#patil-rail-infra' 
    }
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

  // Duplicate arrays for infinite scroll effect
  const duplicatedCompanies = [...companies, ...companies, ...companies];
  const duplicatedSolutions = [...solutions, ...solutions, ...solutions];

  useEffect(() => {
    const setupInfiniteScroll = (scrollRef: React.RefObject<HTMLDivElement>, itemWidth: number, totalItems: number) => {
      const container = scrollRef.current;
      if (!container) return;

      let scrollPosition = 0;
      const maxScroll = itemWidth * totalItems;
      const speed = 0.5; // Adjust speed as needed

      const scroll = () => {
        scrollPosition += speed;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
        requestAnimationFrame(scroll);
      };

      // Start the animation
      const animationId = requestAnimationFrame(scroll);

      // Pause on hover
      const handleMouseEnter = () => {
        cancelAnimationFrame(animationId);
      };

      const handleMouseLeave = () => {
        requestAnimationFrame(scroll);
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    // Setup infinite scroll for companies (200px + 24px gap = 224px per item)
    const companiesCleanup = setupInfiniteScroll(companiesScrollRef, 224, companies.length);
    
    // Setup infinite scroll for solutions (280px + 24px gap = 304px per item)
    const solutionsCleanup = setupInfiniteScroll(solutionsScrollRef, 304, solutions.length);

    return () => {
      companiesCleanup?.();
      solutionsCleanup?.();
    };
  }, [companies.length, solutions.length]);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies We Worked With */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Companies We Worked With
          </h2>
          <div className="relative overflow-hidden">
            <div
              ref={companiesScrollRef}
              className="flex overflow-x-hidden scrollbar-hide space-x-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedCompanies.map((company, index) => (
                <a
                  key={`${company.name}-${index}`}
                  href={company.link}
                  className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px] h-32 flex items-center justify-center group"
                >
                  <div className="text-center w-full">
                    <div className="w-full h-16 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-white font-bold text-sm">${company.name}</div>`;
                          }
                        }}
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
            NPU Modules, Models We Deployed
          </h2>
          <div className="relative overflow-hidden">
            <div
              ref={solutionsScrollRef}
              className="flex overflow-x-hidden scrollbar-hide space-x-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <a
                    key={`${solution.title}-${index}`}
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
