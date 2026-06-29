import React from 'react';
import { Linkedin, Target } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Jagan Teki',
      role: 'Founder',
      description: 'Leads Edgeble\'s self-correction architecture and engineering across physical systems, robotics, edge AI NPUs, camera pipelines, Linux kernel systems, AI models, and deployed Physical AI infrastructure.',
      linkedin: 'https://in.linkedin.com/in/jaganteki',
    },
    {
      name: 'Srinivas Patnaik',
      role: 'Co-founder',
      description: 'Leads Edgeble\'s physical-system correction architecture and product direction, while driving company building, customer strategy, enterprise adoption, and production Physical AI partnerships.',
      linkedin: 'https://www.linkedin.com/in/srinivassatumahanti',
    },
  ];

  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
            OUR TEAM
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Building runtime infrastructure for Physical AI.
          </h2>
          <p className="text-xl md:text-2xl text-white/120 leading-relaxed">
            Edgeble's founders bring embedded and silicon systems, physical-system engineering, AI deployment, and startup experience: the rare cross-layer depth needed for self-correcting Physical AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {team.map((member) => (
            <div key={member.name} className="border border-white/10 bg-white/[0.04] rounded-lg p-7 min-h-[330px] flex flex-col">
              <div className="w-12 h-12 bg-[#77DB89] text-black rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#77DB89] text-lg font-semibold mb-5">{member.role}</p>
              <p className="text-white/75 leading-relaxed mb-7">{member.description}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mt-auto"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
