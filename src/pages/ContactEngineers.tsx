import React from 'react';
import { Mail, Phone, MapPin, User, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactEngineers = () => {
  const engineers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Lead AI Engineer',
      specialization: 'Neural Processing Units',
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@edgeble.ai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Chen',
      role: 'Hardware Design Engineer',
      specialization: 'Edge Computing Systems',
      phone: '+91 98765 43211',
      email: 'sarah.chen@edgeble.ai',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Integration Engineer',
      specialization: 'AI Model Optimization',
      phone: '+91 98765 43212',
      email: 'michael.rodriguez@edgeble.ai',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Priya Sharma',
      role: 'Solutions Architect',
      specialization: 'Custom AI Solutions',
      phone: '+91 98765 43213',
      email: 'priya.sharma@edgeble.ai',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
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
            Contact Our Engineers
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Connect directly with our expert engineering team to discuss your custom AI solution requirements.
          </p>
        </div>
      </div>

      {/* Engineers Grid */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {engineers.map((engineer, index) => (
            <div key={index} className="bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={engineer.image}
                      alt={engineer.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{engineer.name}</h3>
                    <p className="text-white font-medium mb-2">{engineer.role}</p>
                    <p className="text-white/70 text-sm mb-4">{engineer.specialization}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-white">
                        <Phone className="w-4 h-4 mr-3" />
                        <a href={`tel:${engineer.phone}`} className="hover:text-white/70 transition-colors">
                          {engineer.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <Mail className="w-4 h-4 mr-3" />
                        <a href={`mailto:${engineer.email}`} className="hover:text-white/70 transition-colors">
                          {engineer.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Information */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Office Location</h2>
              <div className="space-y-4">
                <div className="flex items-start text-white">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Edgeble AI Headquarters</div>
                    <div>T-Hub, 1/C, 83/1, Panmaktha, Raidurgam</div>
                    <div>Knowledge City Road, Hyderabad</div>
                    <div>Telangana - 500081, India</div>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Main Office: +91 91000 90959</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>General Inquiries: info@edgeble.ai</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
              <div className="space-y-3 text-white">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-white/70 text-sm">
                  For urgent technical support or custom solution inquiries, our engineers typically respond within 2-4 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactEngineers;