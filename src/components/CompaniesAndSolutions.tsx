import React, { useEffect, useRef } from 'react';
import { Eye, Brain, Shield, Zap, Factory, Car } from 'lucide-react';

const CompaniesAndSolutions = () => {
  const companiesScrollRef = useRef<HTMLDivElement>(null);
  const solutionsScrollRef = useRef<HTMLDivElement>(null);

  const companies = [
    {
      name: 'Amara Raja',
      logo: 'https://cdn.brandfetch.io/id3CTcGAAH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
      link: '#amara-raja'
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
    },
    {
      name: 'Hero',
      logo: 'images/hero.png',
      link: '#hero'
    }
  ];

  const solutions = [
    {
      icon: Eye,
      title: 'Dynamic Label Inspection',
      description: 'Dynamic Label Inspection',
      isCustomImage: true,
      customImage: 'images/inspect.png'
    },
    {
      icon: Brain,
      title: 'Tracking, Re-Identify',
      description: 'Tracking, Re-Identify',
      isCustomImage: true,
      customImage: 'images/track.png'
    },
    {
      icon: Shield,
      title: 'Weld Penetration Inspection',
      description: 'Weld Penetration Inspection',
      isCustomImage: true,
      customImage: 'images/weld.png'
    },
    {
      icon: Zap,
      title: 'Volume, Depth Inspection',
      description: 'Volume, Depth Inspection',
      isCustomImage: true,
      customImage: 'images/volume.png'
    },
    {
      icon: Factory,
      title: 'Predictive Maintenance',
      description: 'Predictive Maintenance',
      isCustomImage: true,
      customImage: 'images/llm.png'
    },
    {
      icon: Car,
      title: 'Autonomous Driving System',
      description: 'Autonomous Driving System',
      isCustomImage: true,
      customImage: 'images/adas.png'
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

    const companiesCleanup = setupInfiniteScroll(companiesScrollRef, 300, companies.length);
    // Setup infinite scroll for solutions (340px + 56px gap = 396px per item for rectangular Vision AI box)
    const solutionsCleanup = setupInfiniteScroll(solutionsScrollRef, 396, solutions.length);

    return () => {
      companiesCleanup?.();
      solutionsCleanup?.();
    };
  }, [companies.length, solutions.length]);

  return (
    <section id="companies-solutions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solutions We Delivered */}
        <div>
	  <div className="flex justify-center mb-20 text-center">
	   <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
                DEPLOY-READY SELF-LEARNING AGENTS
              </p>
            <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">
              Self-learning Edge Agents
            </h2>
            <p className="text-xl text-white max-w-4xl">
              Edge Agent for Physical systems
            </p>
           </div>
          </div>

	  <div className="relative overflow-hidden">
            <div
              ref={solutionsScrollRef}
              className="flex overflow-x-hidden scrollbar-hide space-x-14 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <a
                    key={`${solution.title}-${index}`}
                    href={solution.link}
                    className={`flex-shrink-0 flex flex-col justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 group ${
                      solution.isCustomImage
                        ? 'w-[340px] h-[420px] p-2 flex flex-col justify-between'
                        : 'min-w-[280px] p-6'
                    }`}
                  >
                    {solution.isCustomImage ? (
                      <div className="flex flex-col items-center justify-start w-[320px] h-[420px] p-2">
                        {/* Image container */}
                        <div className="w-full h-[320px] flex items-center justify-center overflow-hidden">
                          <img
                            src={solution.customImage}
                            alt={solution.title}
                            className="max-w-full max-h-full object-contain object-center mx-auto"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                        {/* Text container */}
                        <div className="text-center px-4 py-2">
                          <h3 className="text-base font-bold text-white">{solution.title}</h3>
                          <p className="text-xl text-white">{solution.description}</p>
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
