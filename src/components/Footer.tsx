import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      { name: 'Edge AI NPU Modules', href: '#' },
      { name: 'EdgeGPT Model', href: '#' },
      { name: 'Edge AI Agentic', href: '#' },
    ],
    solutions: [
      { name: 'Industrial Automation', href: '#' },
      { name: 'Automotive Edge', href: '#' },
      { name: 'LLM at Edge', href: '#' },
      { name: 'Defense & Security', href: '#' },
      { name: 'Medical Devices', href: '#' },
      { name: 'Smart Agriculture', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'News & Events', href: '#news' },
      { name: 'Contact', href: '#contact' },
      { name: 'Support', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Developer Tools', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/70">
                Get the latest news, product updates, and industry insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

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
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
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

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-1">
              {footerLinks.resources.map((link, index) => (
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
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <div className="text-4xl font-bold text-white mb-2">
                edgeble
              </div>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/company/edgeble/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/edgeble" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/edgeble" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-white/70 text-sm mt-4 text-center md:text-left">
            © 2024 Edgeble. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;