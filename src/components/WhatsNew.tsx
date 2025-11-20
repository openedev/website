import React from 'react';
import { Calendar, ArrowRight, ExternalLink, Award, Newspaper, Users } from 'lucide-react';

const WhatsNew = () => {
  const news = [
    {
      type: 'event',
      icon: Users,
      title: 'Pitching at Moscow Startup Summit',
      description: 'Edgeble pitched at the Moscow Startup Summit, highlighting the world’s first Self-Learning Edge AI platform redefining autonomous intelligence.',
      date: '2025-10-02',
      image: '/images/blog-moscow.jpeg',
      badge: 'Event',
      slug: 'moscow-summit'
    },
    {
      type: 'event',
      icon: Users,
      title: 'Edgeble Among Top 25 Global Startups Sber500',
      description: 'Edgeble has been selected among the Top 25 startups worldwide by Sber500, recognizing innovation in Self-Learning Edge AI.',
      date: '2025-09-25',
      image: 'images/blog-sber500.png',
      badge: 'Innovation',
      slug: 'sber500-selection'
    },
    {
      type: 'event',
      icon: Users,
      title: 'Pitching at Venture Dock, YC',
      description: 'Edgeble pitched its Agentic Edge AI platform at Venture Dock hosted by YC Startup in San Francisco.',
      date: '2025-09-19',
      image: '/images/blog-venture-dock.jpg',
      badge: 'Pitch',
      slug: 'venture-dock-yc'
    },
    {
      type: 'product',
      icon: Users,
      title: 'Edgeble Selected to Present at 8th EMVA Forum, Germany',
      description: 'Edgeble has been selected to present and exhibit a poster at the 8th European Machine Vision Forum (EMVA) in Germany on Agentic Edge AI for Imaging the Invisible in Industrial Vision Systems.',
      date: '2024-03-30',
      image: 'images/blog-emva.jpg',
      badge: 'Product',
      slug: 'innotrek-2025'
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
            <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">
              What's New
            </h2>
            <p className="text-xl text-white max-w-3xl">
              Stay updated with our latest products, partnerships, and events
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
      </div>
    </section>
  );
};

export default WhatsNew;
