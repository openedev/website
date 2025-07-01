import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Products', 
      hasDropdown: true,
      children: [
        { name: 'EdgeGPT NPU', href: '/products/npu' },
        { name: 'EdgeGPT Model', href: '/products/model' },
        { name: 'Agentic Edge AI', href: '/products/agentic' },
      ] 
    },
    { name: 'Solutions', href: '#solutions' },
    { name: "Blog", href: '/blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links - check if we're on home page
      if (window.location.pathname !== '/') {
        // Navigate to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          if (href === '#home') {
            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      } else {
        // Already on home page
        if (href === '#home') {
          // Scroll to top of page
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Scroll to specific section
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else {
      // Handle route navigation
      navigate(href);
    }
    setIsProductsOpen(false);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    // Always navigate to home page and scroll to top
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsProductsOpen(false);
    setIsOpen(false);
  };

  const handleProductInquiry = () => {
    // Check if we're on home page
    if (window.location.pathname !== '/') {
      // Navigate to home page first, then scroll to contact section
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to contact
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="text-4xl font-bold text-white hover:text-white/90 transition-colors duration-200"
            >
              edgeble
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <button className="text-white hover:text-white/70 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      {isProductsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
                          {item.children?.map((child) => (
                            <button
                              key={child.name}
                              onClick={() => handleNavigation(child.href)}
                              className="block w-full text-left px-4 py-3 text-sm text-white hover:text-white/70 hover:bg-white/5 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                            >
                              {child.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-white hover:text-white/70 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleProductInquiry}
              className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Product Inquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/70 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="text-white hover:text-white/70 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProductsOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children?.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNavigation(child.href)}
                            className="text-white/70 hover:text-white block px-3 py-2 text-sm font-medium transition-colors duration-200 w-full text-left"
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-white hover:text-white/70 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <button 
              onClick={handleProductInquiry}
              className="w-full text-left bg-white text-black hover:bg-white/90 px-3 py-2 rounded-lg font-semibold transition-all duration-200 mt-4"
            >
              Product Inquiry
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
