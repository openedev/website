import React from 'react';
import { Target, Eye, Users, MapPin, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/3777568/pexels-photo-3777568.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in edge AI, delivering cutting-edge solutions that transform industries.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication and honest relationships with our clients, partners, and team members.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique challenges and develop tailored solutions.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Edgeble</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of edge AI with innovative hardware solutions that bring intelligence closer to where it's needed most.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Eye className="w-8 h-8 text-cyan-500 mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize AI at the edge by making powerful, pre-trained AI accelerators accessible to every industry, 
                enabling real-time intelligence without cloud dependencies and transforming how businesses operate in the digital age.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Target className="w-8 h-8 text-purple-500 mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We develop cutting-edge AI accelerators that deliver ultra-fast inference at the edge, empowering organizations 
                to harness the power of artificial intelligence while maintaining data privacy, reducing latency, and ensuring reliable operation.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Edgeble"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const gradients = [
                'from-cyan-500 to-blue-600',
                'from-purple-500 to-pink-600',
                'from-emerald-500 to-teal-600'
              ];
              return (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-cyan-200">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-full mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.linkedin} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-200">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-200">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Global Presence
              </h3>
              <p className="text-gray-300 mb-6">
                Headquartered in Silicon Valley with development centers worldwide, we're positioned to serve clients globally while maintaining the agility of a focused technology company.
              </p>
              <div className="flex items-center text-cyan-400 mb-4">
                <MapPin className="w-5 h-5 mr-3" />
                <span>San Francisco, CA | Austin, TX | Bangalore, India</span>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </button>
            </div>
            <div className="text-center lg:text-right">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">2019</div>
                  <div className="text-gray-300">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-2">150+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-gray-300">Patents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">$50M</div>
                  <div className="text-gray-300">Series B Funding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;