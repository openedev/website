import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag, ArrowRight, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Speaking at IDA Ireland Startup Roundtable',
      slug: 'speaking-at-ida-ireland-startup-roundtable',
      excerpt: 'Excited to have been part of the IDA Ireland Startup Roundtable hosted at T-Hub. It was a great opportunity to share insights on startup innovation, global collaboration, and the growing synergy between India and Ireland in the tech and business space.',
      content: `
        <p>We were honored to participate in the IDA Ireland Startup Roundtable, a prestigious event that brought together innovative startups and industry leaders to discuss the future of technology collaboration between India and Ireland.</p>
        
        <h3>Key Discussion Points</h3>
        <p>The roundtable focused on emerging technologies, cross-border partnerships, and the role of AI in driving innovation across industries. Our CEO shared insights on how edge AI is transforming manufacturing and industrial automation.</p>
        
        <h3>Building Bridges</h3>
        <p>The event highlighted the growing synergy between Indian innovation and Irish business expertise, creating opportunities for meaningful partnerships in the AI and technology sectors.</p>
      `,
      author: 'Jagan Teki',
      date: '2024-03-30',
      readTime: '4 min read',
      image: 'https://www.edgeble.ai/blog14.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Roundtable', 'Partnership', 'Innovation'],
      category: 'Events'
    },
    {
      id: 2,
      title: 'Speaking at Nasscom AI Days, Mumbai',
      slug: 'speaking-at-nasscom-ai-days-mumbai',
      excerpt: 'Edgeble AI was proud to be part of NASSCOM AI Days held in Mumbai — an event that brought together India\'s top minds in artificial intelligence, innovation, and enterprise technology.',
      content: `
        <p>NASSCOM AI Days Mumbai was a landmark event that showcased India's leadership in artificial intelligence and emerging technologies. We were privileged to present our vision for edge AI and its transformative potential.</p>
        
        <h3>Industry Leadership</h3>
        <p>The event featured presentations from leading AI companies, researchers, and innovators, highlighting India's growing influence in the global AI landscape.</p>
        
        <h3>Edge AI Revolution</h3>
        <p>Our presentation focused on how edge AI is revolutionizing industries by bringing intelligence closer to data sources, reducing latency, and enabling real-time decision making.</p>
      `,
      author: 'Jagan Teki',
      date: '2024-03-25',
      readTime: '5 min read',
      image: 'https://www.edgeble.ai/blog13.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Conference', 'AI', 'Mumbai'],
      category: 'Events'
    },
    {
      id: 3,
      title: 'Edgeble at T-Hub Innovative Enclave 2025',
      slug: 'edgeble-at-thub-innovative-enclave-2025',
      excerpt: 'Edgeble AI was proud to participate in the T-Hub Innovative Enclave 2025 — a convergence of India\'s most forward-thinking startups and ecosystem leaders.',
      content: `
        <p>The T-Hub Innovative Enclave 2025 brought together the most promising startups and technology leaders from across India. As participants, we had the opportunity to showcase our edge AI solutions and connect with fellow innovators.</p>
        
        <h3>Innovation Showcase</h3>
        <p>The event featured live demonstrations of cutting-edge technologies, with our EdgeGPT platform receiving significant attention from investors and industry partners.</p>
        
        <h3>Ecosystem Building</h3>
        <p>The enclave emphasized the importance of building strong startup ecosystems and fostering collaboration between technology companies, investors, and government initiatives.</p>
      `,
      author: 'Srinivas Patnaik',
      date: '2024-12-03',
      readTime: '3 min read',
      image: 'https://www.edgeble.ai/blog12.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['T-Hub', 'Innovation', 'Startup'],
      category: 'Events'
    },
    {
      id: 4,
      title: 'Speaking at CIE-IIIT Avishkar 2024',
      slug: 'speaking-at-cie-iiit-avishkar-2024',
      excerpt: 'About TinyML Taipei 2024, About Edgeble AI Participation, End-to-End Edge AI Lifecycle.',
      content: `
        <p>The CIE-IIIT Avishkar 2024 conference provided an excellent platform to discuss the latest developments in TinyML and edge AI technologies. Our presentation covered the complete lifecycle of edge AI development and deployment.</p>
        
        <h3>TinyML Revolution</h3>
        <p>We explored how TinyML is enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded systems applications.</p>
        
        <h3>End-to-End Solutions</h3>
        <p>Our talk emphasized the importance of considering the entire AI lifecycle, from model development and optimization to deployment and monitoring at the edge.</p>
      `,
      author: 'Chakrish Krishtam',
      date: '2024-02-24',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog11.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['TinyML', 'Conference', 'AI Lifecycle'],
      category: 'Technology'
    },
    {
      id: 5,
      title: 'EdgeGPT NPU Architecture Deep Dive',
      slug: 'edgegpt-npu-architecture-deep-dive',
      excerpt: 'A comprehensive look at the innovative architecture behind our EdgeGPT NPU modules and how they deliver unprecedented performance at the edge.',
      content: `
        <p>Our EdgeGPT NPU represents a breakthrough in edge AI processing, featuring a novel architecture designed specifically for real-world deployment scenarios. This deep dive explores the technical innovations that make it possible.</p>
        
        <h3>Revolutionary Design</h3>
        <p>The EdgeGPT NPU features a heterogeneous computing architecture that combines specialized AI processing units with traditional CPU cores, optimized for different types of AI workloads.</p>
        
        <h3>Performance Metrics</h3>
        <p>With up to 32 TOPS of AI processing power while maintaining exceptional power efficiency, our NPU delivers the performance needed for demanding edge applications.</p>
      `,
      author: 'Alberto Bianchi',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NPU', 'Architecture', 'Performance'],
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Industrial AI Deployment Best Practices',
      slug: 'industrial-ai-deployment-best-practices',
      excerpt: 'Lessons learned from deploying AI solutions in industrial environments and best practices for successful edge AI implementations.',
      content: `
        <p>Deploying AI in industrial environments presents unique challenges that require careful consideration of reliability, safety, and performance requirements. Here are the key lessons we've learned.</p>
        
        <h3>Environmental Considerations</h3>
        <p>Industrial environments demand ruggedized solutions that can operate reliably in extreme temperatures, vibration, and electromagnetic interference conditions.</p>
        
        <h3>Safety First</h3>
        <p>Safety-critical applications require redundant systems, fail-safe mechanisms, and compliance with industry standards such as ISO 26262 for automotive applications.</p>
      `,
      author: 'Priya Sharma',
      date: '2023-12-20',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/159298/gear-machine-mechanical-mechanical-engineering-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Deployment', 'Best Practices'],
      category: 'Industry'
    },
    {
      id: 7,
      title: 'The Future of Autonomous Vehicles with Edge AI',
      slug: 'future-of-autonomous-vehicles-edge-ai',
      excerpt: 'How edge AI is accelerating the development of autonomous vehicles and enabling real-time decision making for safer transportation.',
      content: `
        <p>Autonomous vehicles represent one of the most demanding applications for edge AI, requiring real-time processing of massive amounts of sensor data to make split-second decisions that ensure passenger safety.</p>
        
        <h3>Real-Time Processing</h3>
        <p>Edge AI enables vehicles to process sensor data locally, reducing latency and ensuring reliable operation even when connectivity is limited or unavailable.</p>
        
        <h3>Safety and Reliability</h3>
        <p>Our automotive-grade AI accelerators are designed with redundancy and fail-safe mechanisms to meet the stringent safety requirements of autonomous vehicle applications.</p>
      `,
      author: 'Michael Rodriguez',
      date: '2023-11-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Autonomous Vehicles', 'Safety', 'Real-time'],
      category: 'Automotive'
    },
    {
      id: 8,
      title: 'Edge AI in Healthcare: Transforming Patient Care',
      slug: 'edge-ai-healthcare-transforming-patient-care',
      excerpt: 'Exploring how edge AI is revolutionizing healthcare by enabling real-time diagnostics and personalized treatment at the point of care.',
      content: `
        <p>Healthcare applications of edge AI are transforming patient care by bringing advanced diagnostic capabilities directly to the point of care, enabling faster and more accurate medical decisions.</p>
        
        <h3>Point-of-Care Diagnostics</h3>
        <p>Edge AI enables sophisticated medical imaging analysis and diagnostic assistance without requiring cloud connectivity, crucial for remote healthcare facilities.</p>
        
        <h3>Privacy and Security</h3>
        <p>Processing sensitive medical data locally ensures patient privacy and compliance with healthcare regulations while maintaining the highest standards of data security.</p>
      `,
      author: 'Dr. Sarah Chen',
      date: '2023-10-05',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Healthcare', 'Diagnostics', 'Privacy'],
      category: 'Healthcare'
    },
    {
      id: 9,
      title: 'Smart Agriculture: AI-Powered Precision Farming',
      slug: 'smart-agriculture-ai-powered-precision-farming',
      excerpt: 'How edge AI is enabling precision agriculture through real-time crop monitoring, yield prediction, and resource optimization.',
      content: `
        <p>Precision agriculture powered by edge AI is revolutionizing farming practices by providing real-time insights into crop health, soil conditions, and environmental factors that affect agricultural productivity.</p>
        
        <h3>Crop Monitoring</h3>
        <p>AI-powered sensors and cameras can detect early signs of disease, pest infestations, and nutrient deficiencies, enabling farmers to take proactive measures to protect their crops.</p>
        
        <h3>Resource Optimization</h3>
        <p>Edge AI helps optimize the use of water, fertilizers, and pesticides, reducing environmental impact while maximizing crop yields and profitability.</p>
      `,
      author: 'Rajesh Kumar',
      date: '2023-09-15',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Agriculture', 'Precision Farming', 'Sustainability'],
      category: 'Agriculture'
    },
    {
      id: 10,
      title: 'Building Secure Edge AI Systems',
      slug: 'building-secure-edge-ai-systems',
      excerpt: 'Essential security considerations and best practices for developing and deploying secure edge AI systems in enterprise environments.',
      content: `
        <p>Security is paramount when deploying AI systems at the edge, where devices may operate in unsecured environments and handle sensitive data. Here's how to build secure edge AI systems.</p>
        
        <h3>Hardware Security</h3>
        <p>Secure boot processes, hardware-based encryption, and tamper-resistant designs provide the foundation for secure edge AI deployments.</p>
        
        <h3>Data Protection</h3>
        <p>Implementing end-to-end encryption, secure key management, and privacy-preserving AI techniques ensures that sensitive data remains protected throughout the AI pipeline.</p>
      `,
      author: 'Security Team',
      date: '2023-08-20',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Security', 'Privacy', 'Enterprise'],
      category: 'Security'
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
            Blog & <span className="text-white">News</span>
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Stay updated with the latest insights, product announcements, and industry trends from Edgeble AI.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-white/20">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black">
                    {post.category}
                  </span>
                </div>
                {/* Date */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {post.title}
                  </h3>
                </div>
                <p className="text-white mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-white/60 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={`/blog/${post.slug}`}
                  className="flex items-center text-white hover:text-white/70 font-semibold transition-all duration-200 group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
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

      <Footer />
    </div>
  );
};

export default BlogPage;