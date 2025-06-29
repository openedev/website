import React from 'react';
import { Calendar, ArrowRight, ExternalLink, Award, Newspaper, Users } from 'lucide-react';

const WhatsNew = () => {
  const news = [
    {
      type: 'event',
      icon: Users,
      title: 'Showcase at Bosch Global FIT.Fest\'25',
      description: 'On behalf of the entire team at BGSW, I would like to extend our heartfelt thanks for your organization\'s participation in Marketplace Stalls at our flagship Technical Event, FIT.Fest\'25, last week.',
      date: '2025-06-19',
      image: 'images/image003.png?auto=compress&cs=tinysrgb&w=600',
      badge: 'Bosch Event',
      slug: 'fit-fest25'
    },
    {
      type: 'event',
      icon: Users,
      title: 'Pitching at Beyond Borders: The Era of Agentic AI',
      description: 'T-Hub, in strategic partnership with EY, hosted a convergence of visionary founders and global tech leaders to explore how autonomous intelligence is poised to redefine the future of industries.',
      date: '2025-06-02',
      image: 'images/Screenshot from 2025-06-29 02-42-29.png?auto=compress&cs=tinysrgb&w=600',
      badge: 'Agentic AI',
      slug: 'beyond-borders'
    },
    {
      type: 'event',
      icon: Users,
      title: 'Pitching at Peak XV, Rajan Anandan',
      description: 'With T-Hub, Edgeble is honored to pitch with Rajan Anandan, Managing Director at Peak XV Partners (formerly Sequoia Capital India & SEA). From AI trends to the future of startups in India, the insights shared were as sharp as they were inspiring.',
      date: '2025-03-25',
      image: 'images/peak.png?auto=compress&cs=tinysrgb&w=600',
      badge: 'Peak XV',
      slug: 'peak-xv'
    },
    {
      type: 'product',
      icon: Users,
      title: 'Speaking at IDA Ireland Startup Roundtable',
      description: 'Excited to have been part of the IDA Ireland Startup Roundtable hosted at T-Hub. It was a great opportunity to share insights on startup innovation, global collaboration, and the growing synergy between India and Ireland in the tech and business space.',
      date: '2024-03-30',
      image: 'https://www.edgeble.ai/blog14.png?auto=compress&cs=tinysrgb&w=600',
      badge: 'Roundtable',
      slug: 'ida-ireland'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned with Right Button */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What's New
            </h2>
            <p className="text-xl text-white max-w-3xl">
              Stay updated with our latest product launches, industry partnerships, and upcoming events.
            </p>
          </div>
          <div>
            <a 
              href="/blog"
              className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              View Blog
            </a>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {news.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-white/20">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300 ${
                      index === 1 ? 'beyond-borders-image' : ''
                    }`}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black shadow-lg">
                      {item.badge}
                    </span>
                  </div>
                  {/* Date */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 z-10">
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <IconComponent className="w-5 h-5 text-white mr-2" />
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white mb-4 leading-relaxed">{item.description}</p>
                  <a 
                    href={`/blog/${item.slug}`}
                    className="flex items-center text-white hover:text-white/70 font-semibold transition-all duration-200 group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on products, partnerships, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center">
              Subscribe
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
