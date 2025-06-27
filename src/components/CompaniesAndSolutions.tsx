import React, { useEffect, useRef } from 'react';
import { Eye, Brain, Shield, Zap, Factory, Car } from 'lucide-react';

const CompaniesAndSolutions = () => {
  const companiesScrollRef = useRef<HTMLDivElement>(null);
  const solutionsScrollRef = useRef<HTMLDivElement>(null);

  const companies = [
    { 
      name: 'Amara Raja', 
      logo: 'https://cdn.brandfetch.io/id3CTtdAAH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
      link: '#amara-raja' 
    },
    { 
      name: 'AirFi', 
      logo: 'images/airfi_logo_light_color.svg',
      link: '#airfi' 
    },
    { 
      name: 'Apollo', 
      logo: 'https://cdn.brandfetch.io/idgr_3pras/w/208/h/80/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
      link: '#apollo' 
    },
    { 
      name: 'Collins Aerospace', 
      logo: 'https://cdn.brandfetch.io/idMr1kh5YW/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
      link: '#collins-aerospace' 
    },
    { 
      name: 'Patil Rail Infra', 
      logo: 'images/patil.jpg',
      link: '#patil-rail-infra' 
    }
  ];

  const solutions = [
    {
      icon: Eye,
      title: 'Vision AI',
      description: 'Real-time defect detection',
      link: '/solutions/vision-ai',
      isCustomImage: true,
      customImage: 'images/inspect.png'
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
      const speed = 0.4; // Adjust speed as needed

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

    // Setup infinite scroll for solutions (400px + 24px gap = 424px per item for rectangular Vision AI box)
    const solutionsCleanup = setupInfiniteScroll(solutionsScrollRef, 424, solutions.length);

    return () => {
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
              className="flex overflow-x-hidden scrollbar-hide space-x-4 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[150px] h-[80px] px-4"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-[60px] w-auto object-contain grayscale invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
            </div>
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
                    className={`flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 group ${
                      solution.isCustomImage 
                        ? 'min-w-[400px] h-[160px] p-4' 
                        : 'min-w-[280px] p-6'
                    }`}
                  >
                    {solution.isCustomImage ? (
                      // Rectangular layout for Vision AI with custom image
                      <div className="flex items-center h-full space-x-6">
                        <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <img
                            src={solution.customImage}
                            alt={solution.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback to icon if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center"><svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></div>`;
                              }
                            }}
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                          <p className="text-white text-sm">{solution.description}</p>
                        </div>
                      </div>
                    ) : (
                      // Standard vertical layout for other solutions
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                        <p className="text-white text-sm">{solution.description}</p>
                      </div>
                    )}
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