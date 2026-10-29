import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Always navigate to home page and scroll to top
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const footerLinks = {
    products: [
      { name: 'Correction API, Platform', href: '/#correction-stack' },
      { name: 'Correction Compute, Orchestration', href: '/#correction-stack' },
    ],
    solutions: [
      { name: 'Industrial', href: '#' },
      { name: 'Automotive', href: '#' },
      { name: 'Robotics', href: '#' },
    ],
    company: [
      { name: 'Team', href: '#team' },
      { name: 'Jobs', href: '/jobs' },
      { name: 'Research', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-site text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-1">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-1">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-1">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div className="md:justify-self-center md:text-left">
            <button
              onClick={handleLogoClick}
              className="text-[2.5rem] font-manrope font-normal tracking-tight text-white hover:text-white/90 transition-colors duration-200"
            >
              edgeble
            </button>
            <div className="mt-6 flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/edgeble/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/edgeble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/edgeble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center text-center">
            <div className="text-white/70 text-sm">
              © 2026 Edgeble. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
