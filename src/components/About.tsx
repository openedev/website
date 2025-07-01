import React from 'react';
import { Target, Eye, Users, MapPin, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Jagan Teki',
      role: 'Founder',
      image: 'images/jagan.jpg',
      linkedin: 'https://in.linkedin.com/in/jaganteki'
    },
    {
      name: 'Srinivas Patnaik',
      role: 'Advisor/Mentor',
      image: 'images/srinivas.png',
      linkedin: 'https://www.linkedin.com/in/srinivassatumahanti'
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
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Edgeble
          </h2>
          <p className="text-xl text-white max-w-3xl">
            Pioneering the future of Edge AI with innovative hardware solutions that bring intelligence closer to where it's needed most
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-8 h-8 text-white mr-3" />
                Our Vision
              </h3>
              <p className="text-white leading-relaxed">
	        To make edge AI as powerful, accessible, and scalable as cloud AI across every device, industry, and environment.  
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="w-8 h-8 text-white mr-3" />
                Our Mission
              </h3>
              <p className="text-white leading-relaxed">
                To standardize edge intelligence through EdgeGPT: a model-first platform that unifies AI models, chips, and deployment workflows for the next generation of edge computing.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl -mt-8">
            <img 
              src="images/home.png"
              alt="Agentic Edge AI Chip"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-white leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="relative w-full h-96 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-2xl"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-black" />
                    </a>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-white/80 font-medium text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Global Presence
              </h3>
              <p className="text-white mb-6">
                Headquartered in India serve clients globally while maintaining the agility of a focused technology company.
              </p>
              <div className="flex items-start text-white mb-4">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Headquarters:</div>
		  <div>Flat 405, Block E, Sri Lakshmi Shubham Arcade Spoorthy</div>
		  <div>Vidyanagar Colony, Chandanagar, Hyderabad</div>
                  <div>Telangana - 500081, India</div>
                </div>
              </div>
              <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </button>
            </div>
            <div className="text-center lg:text-right">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">2022</div>
                  <div className="text-white">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">18+</div>
                  <div className="text-white">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">1+</div>
                  <div className="text-white">Patents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">raising</div>
                  <div className="text-white">Seed Funding</div>
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