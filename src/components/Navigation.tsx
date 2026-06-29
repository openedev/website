import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Architecture', href: '#correction-stack' },
    { name: 'Team', href: '#team' },
    { name: 'Customers', href: '#customers' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
  ];

  const handleNavigation = (href: string) => {
    if (!href.startsWith('#')) {
      navigate(href);
      setIsOpen(false);
      return;
    }

    const scrollToSection = () => {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }

    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    setIsOpen(false);
  };

  const handleContact = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className="text-4xl font-bold text-white hover:text-white/90 transition-colors duration-200"
          >
            edgeble
          </button>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-white/70 px-2 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={handleContact}
              className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/70 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-white hover:text-white/70 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleContact}
              className="w-full text-left bg-white text-black hover:bg-white/90 px-3 py-2 rounded-lg font-semibold transition-all duration-200 mt-4"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
