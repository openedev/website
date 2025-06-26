import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'EdgeCore AI-X1 Wins Innovation Award',
      slug: 'edgecore-ai-x1-wins-innovation-award',
      excerpt: 'Our flagship AI accelerator recognized at the International Edge Computing Summit 2024.',
      content: `
        <p>We are thrilled to announce that our flagship EdgeCore AI-X1 has been recognized with the Innovation Award at the International Edge Computing Summit 2024. This prestigious award acknowledges our commitment to pushing the boundaries of edge AI technology.</p>
        
        <h3>Revolutionary Architecture</h3>
        <p>The EdgeCore AI-X1 represents a breakthrough in edge AI processing, featuring our proprietary neural processing unit (NPU) architecture that delivers unprecedented performance per watt. With 32 TOPS of AI processing power in a compact form factor, it's designed for real-world deployment scenarios.</p>
        
        <h3>Industry Recognition</h3>
        <p>The award was presented by a panel of industry experts who evaluated solutions based on innovation, practical impact, and technical excellence. Our AI-X1 stood out for its unique approach to model-first design and seamless integration capabilities.</p>
        
        <h3>Real-World Impact</h3>
        <p>Since its launch, the EdgeCore AI-X1 has been deployed in over 50 industrial automation projects, delivering measurable improvements in quality control and predictive maintenance. Our customers report up to 85% reduction in defect rates and 40% improvement in operational efficiency.</p>
      `,
      author: 'Dr. Rajesh Kumar',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Award', 'Innovation', 'EdgeCore AI-X1'],
      category: 'Product News'
    },
    {
      id: 2,
      title: 'AI at the Edge Conference 2024',
      slug: 'ai-at-the-edge-conference-2024',
      excerpt: 'Join us at booth #A12 to see live demonstrations of our latest AI accelerators.',
      content: `
        <p>We're excited to participate in the AI at the Edge Conference 2024, taking place in San Francisco from February 22-24. This premier event brings together industry leaders, researchers, and innovators to explore the future of edge computing.</p>
        
        <h3>Live Demonstrations</h3>
        <p>Visit our booth #A12 to experience live demonstrations of our latest AI accelerators. Our team will showcase real-time inference capabilities across various use cases including computer vision, natural language processing, and predictive analytics.</p>
        
        <h3>Speaking Sessions</h3>
        <p>Our CEO, Jagan Teki, will be presenting "The Future of Agentic AI at the Edge" on February 23rd at 2:00 PM. The session will cover emerging trends in edge AI and how agentic systems are transforming industrial applications.</p>
        
        <h3>Networking Opportunities</h3>
        <p>Join us for exclusive networking sessions where you can connect with our engineering team and discuss custom solutions for your specific requirements. We'll also be hosting a technical workshop on optimizing AI models for edge deployment.</p>
      `,
      author: 'Sarah Chen',
      date: '2024-02-22',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Conference', 'Event', 'Demonstration'],
      category: 'Events'
    },
    {
      id: 3,
      title: 'Partnership with Global Automotive Leader',
      slug: 'partnership-with-global-automotive-leader',
      excerpt: 'Strategic collaboration to accelerate autonomous vehicle development with edge AI.',
      content: `
        <p>We are proud to announce a strategic partnership with a leading global automotive manufacturer to accelerate the development of autonomous vehicle technologies using our edge AI solutions.</p>
        
        <h3>Collaborative Innovation</h3>
        <p>This partnership combines our cutting-edge AI accelerators with decades of automotive expertise to create next-generation ADAS (Advanced Driver Assistance Systems) and autonomous driving capabilities. Our EdgeCore automotive-grade modules will power real-time decision making in vehicles.</p>
        
        <h3>Safety First Approach</h3>
        <p>Safety is paramount in automotive applications. Our AI accelerators are designed with redundancy and fail-safe mechanisms to ensure reliable operation in critical driving scenarios. The partnership will focus on developing ISO 26262 compliant solutions for functional safety.</p>
        
        <h3>Market Impact</h3>
        <p>This collaboration is expected to accelerate the deployment of Level 3 and Level 4 autonomous vehicles, bringing advanced safety features to market faster. The partnership will initially focus on highway automation and urban driving assistance systems.</p>
      `,
      author: 'Michael Rodriguez',
      date: '2024-01-08',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Partnership', 'Automotive', 'Autonomous Vehicles'],
      category: 'Business News'
    },
    {
      id: 4,
      title: 'EdgeCore Pro-X2 Industrial Launch',
      slug: 'edgecore-pro-x2-industrial-launch',
      excerpt: 'New ruggedized AI module designed for extreme industrial environments now available.',
      content: `
        <p>Today marks the official launch of our EdgeCore Pro-X2, a ruggedized AI module specifically designed for extreme industrial environments. This new addition to our product line addresses the growing demand for AI processing in harsh conditions.</p>
        
        <h3>Extreme Environment Ready</h3>
        <p>The EdgeCore Pro-X2 is built to withstand temperatures from -40°C to +85°C, with IP67 rating for dust and water resistance. It features enhanced vibration resistance and electromagnetic interference (EMI) shielding, making it ideal for heavy industrial applications.</p>
        
        <h3>Enhanced Performance</h3>
        <p>Despite its rugged design, the Pro-X2 delivers exceptional AI performance with 48 TOPS of processing power and support for multiple AI frameworks. The module includes advanced thermal management to maintain peak performance even in extreme conditions.</p>
        
        <h3>Industry Applications</h3>
        <p>The EdgeCore Pro-X2 is already being deployed in mining operations, oil and gas facilities, and manufacturing plants where traditional computing solutions fail. Early adopters report significant improvements in predictive maintenance and operational safety.</p>
      `,
      author: 'Priya Sharma',
      date: '2023-12-20',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/159298/gear-machine-mechanical-mechanical-engineering-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Product Launch', 'Industrial', 'Ruggedized'],
      category: 'Product News'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            Blog & News
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Stay updated with the latest insights, product announcements, and industry trends from Edgeble AI.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h2>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/60 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-white hover:text-white/70 font-semibold text-sm transition-colors duration-200"
                  >
                    Read More →
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest blog posts, product announcements, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;