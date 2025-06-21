import React from 'react';
import { Calendar, ArrowRight, ExternalLink, Award, Newspaper, Users } from 'lucide-react';

const WhatsNew = () => {
  const news = [
    {
      type: 'product',
      icon: Award,
      title: 'EdgeCore AI-X1 Wins Innovation Award',
      description: 'Our flagship AI accelerator recognized at the International Edge Computing Summit 2024.',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Award'
    },
    {
      type: 'event',
      icon: Users,
      title: 'AI at the Edge Conference 2024',
      description: 'Join us at booth #A12 to see live demonstrations of our latest AI accelerators.',
      date: '2024-02-22',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Upcoming Event'
    },
    {
      type: 'news',
      icon: Newspaper,
      title: 'Partnership with Global Automotive Leader',
      description: 'Strategic collaboration to accelerate autonomous vehicle development with edge AI.',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Partnership'
    },
    {
      type: 'product',
      icon: Award,
      title: 'EdgeCore Pro-X2 Industrial Launch',
      description: 'New ruggedized AI module designed for extreme industrial environments now available.',
      date: '2023-12-20',
      image: 'https://images.pexels.com/photos/159298/gear-machine-mechanical-mechanical-engineering-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Product Launch'
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What's <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">New</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Stay updated with our latest product launches, industry partnerships, and upcoming events.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {news.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-green-400/30">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-400 text-black">
                      {item.badge}
                    </span>
                  </div>
                  {/* Date */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <IconComponent className="w-5 h-5 text-green-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white mb-4 leading-relaxed">{item.description}</p>
                  <button className="flex items-center text-white hover:text-green-400 font-semibold transition-all duration-200 group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 text-center border border-white/10 hover:border-green-400/20 transition-all duration-300">
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
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            <button className="bg-green-400 text-black hover:bg-green-300 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
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