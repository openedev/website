import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag, ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Showcase at Bosch Global FIT.Fest\'25',
      slug: 'fit-fest25',
      excerpt: 'On behalf of the entire team at BGSW, I would like to extend our heartfelt thanks for your organization\'s participation in Marketplace Stalls at our flagship Technical Event, FIT.Fest\'25, last week.',
      content: `
        <p class="text-lg mb-6">On behalf of the entire team at BGSW, I would like to extend our heartfelt thanks for your organization's participation in Marketplace Stalls at our flagship Technical Event, FIT.Fest'25, last week.</p>
        
        <p class="mb-6">Your insights and expertise greatly enriched the event, and the feedback we received from attendees has been overwhelmingly positive. We truly appreciate the time and effort You and Your team dedicated to preparing and presenting in the Stall. Your contribution played a significant role in making FIT.Fest'25 a success, and we are grateful for your support.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Event Highlights</h3>
        <p class="mb-6">FIT.Fest'25 brought together industry leaders, innovators, and technology enthusiasts to showcase cutting-edge solutions and foster collaboration in the automotive and technology sectors.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble's Contribution</h3>
        <p class="mb-6">Our participation in the Marketplace Stalls provided an excellent opportunity to demonstrate our Edge AI accelerator modules and engage with Bosch's engineering teams and partners.</p>
      `,
      author: 'Jagan Teki',
      date: '2025-06-19',
      readTime: '3 min read',
      image: 'images/image003.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Bosch', 'FIT.Fest', 'Marketplace'],
      category: 'Events'
    },
    {
      id: 2,
      title: 'Pitching at Beyond Borders: The Era of Agentic AI',
      slug: 'beyond-borders',
      excerpt: 'T-Hub, in strategic partnership with EY, hosted a convergence of visionary founders and global tech leaders to explore how autonomous intelligence is poised to redefine the future of industries.',
      content: `
        <p class="text-lg mb-6">T-Hub, in strategic partnership with EY, hosted a convergence of visionary founders and global tech leaders to explore how autonomous intelligence is poised to redefine the future of industries.</p>
        
        <p class="mb-6">Our recent event, "Beyond Borders: The Era of Agentic AI," was a step in that direction.</p>
        
        <p class="mb-6">We brought startup builders and enterprise leaders into one room to talk honestly about what it really takes to make AI work inside large organizations—and how agentic platforms are shifting what's possible.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Future of Autonomous Intelligence</h3>
        <p class="mb-6">The event showcased how agentic AI is moving beyond traditional automation to create truly autonomous systems that can reason, adapt, and make decisions independently.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Transformation</h3>
        <p class="mb-6">Enterprise leaders shared insights on how agentic AI platforms are transforming their operations, from supply chain optimization to customer service automation.</p>
      `,
      author: 'Jagan Teki',
      date: '2025-06-02',
      readTime: '5 min read',
      image: 'images/Screenshot from 2025-06-29 02-42-29.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Agentic AI', 'EY Partnership', 'T-Hub'],
      category: 'Events'
    },
    {
      id: 3,
      title: 'Pitching at Peak XV, Rajan Anandan',
      slug: 'peak-xv',
      excerpt: 'With T-Hub, Edgeble is honored to pitch with Rajan Anandan, Managing Director at Peak XV Partners (formerly Sequoia Capital India & SEA). From AI trends to the future of startups in India, the insights shared were as sharp as they were inspiring.',
      content: `
        <p class="text-lg mb-6">With T-Hub, Edgeble is honored to pitch with Rajan Anandan, Managing Director at Peak XV Partners (formerly Sequoia Capital India & SEA). From AI trends to the future of startups in India, the insights shared were as sharp as they were inspiring.</p>
        
        <p class="mb-6">It was great to see Hyderabad's incredible founder community show up on short notice, bringing curiosity, energy, and thoughtful questions.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Insights from Peak XV</h3>
        <p class="mb-6">Rajan Anandan shared valuable perspectives on the evolving startup ecosystem in India, highlighting the growing importance of AI and deep tech innovations in driving the next wave of entrepreneurship.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Hyderabad's Founder Community</h3>
        <p class="mb-6">The event showcased the vibrant and engaged founder community in Hyderabad, with entrepreneurs from various sectors coming together to learn and network despite the short notice.</p>
      `,
      author: 'Jagan Teki',
      date: '2025-03-25',
      readTime: '4 min read',
      image: 'images/peak.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Peak XV', 'Rajan Anandan', 'T-Hub'],
      category: 'Events'
    },
    {
      id: 4,
      title: 'Speaking at IDA Ireland Startup Roundtable',
      slug: 'ida-ireland',
      excerpt: 'Excited to have been part of the IDA Ireland Startup Roundtable hosted at T-Hub. It was a great opportunity to share insights on startup innovation, global collaboration, and the growing synergy between India and Ireland in the tech and business space.',
      content: `
        <p class="text-lg mb-6">We were honored to participate in the IDA Ireland Startup Roundtable, a prestigious event that brought together innovative startups and industry leaders to discuss the future of technology collaboration between India and Ireland.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Key Discussion Points</h3>
        <p class="mb-6">The roundtable focused on emerging technologies, cross-border partnerships, and the role of AI in driving innovation across industries. Our CEO shared insights on how edge AI is transforming manufacturing and industrial automation.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Building Bridges</h3>
        <p class="mb-6">The event highlighted the growing synergy between Indian innovation and Irish business expertise, creating opportunities for meaningful partnerships in the AI and technology sectors.</p>
      `,
      author: 'Jagan Teki',
      date: '2024-03-30',
      readTime: '4 min read',
      image: 'https://www.edgeble.ai/blog14.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Roundtable', 'Partnership', 'Innovation'],
      category: 'Events'
    },
    {
      id: 5,
      title: 'Speaking at Nasscom AI Days, Mumbai',
      slug: 'nasscom-mumbai',
      excerpt: 'Edgeble AI was proud to be part of NASSCOM AI Days held in Mumbai — an event that brought together India\'s top minds in artificial intelligence, innovation, and enterprise technology.',
      content: `
        <p class="text-lg mb-6">NASSCOM AI Days Mumbai was a landmark event that showcased India's leadership in artificial intelligence and emerging technologies. We were privileged to present our vision for edge AI and its transformative potential.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Leadership</h3>
        <p class="mb-6">The event featured presentations from leading AI companies, researchers, and innovators, highlighting India's growing influence in the global AI landscape.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Revolution</h3>
        <p class="mb-6">Our presentation focused on how edge AI is revolutionizing industries by bringing intelligence closer to data sources, reducing latency, and enabling real-time decision making.</p>
      `,
      author: 'Jagan Teki',
      date: '2024-03-25',
      readTime: '5 min read',
      image: 'https://www.edgeble.ai/blog13.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Conference', 'AI', 'Mumbai'],
      category: 'Events'
    },
    {
      id: 6,
      title: 'Edgeble at T-Hub Innovative Enclave 2025',
      slug: 'thub-enclave',
      excerpt: 'Edgeble AI was proud to participate in the T-Hub Innovative Enclave 2025 — a convergence of India\'s most forward-thinking startups and ecosystem leaders.',
      content: `
        <p class="text-lg mb-6">The T-Hub Innovative Enclave 2025 brought together the most promising startups and technology leaders from across India. As participants, we had the opportunity to showcase our edge AI solutions and connect with fellow innovators.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Innovation Showcase</h3>
        <p class="mb-6">The event featured live demonstrations of cutting-edge technologies, with our EdgeGPT platform receiving significant attention from investors and industry partners.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Ecosystem Building</h3>
        <p class="mb-6">The enclave emphasized the importance of building strong startup ecosystems and fostering collaboration between technology companies, investors, and government initiatives.</p>
      `,
      author: 'Srinivas Patnaik',
      date: '2024-12-03',
      readTime: '3 min read',
      image: 'https://www.edgeble.ai/blog12.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['T-Hub', 'Innovation', 'Startup'],
      category: 'Events'
    },
    {
      id: 7,
      title: 'Speaking at CIE-IIIT Avishkar 2024',
      slug: 'cie-avishkar',
      excerpt: 'About TinyML Taipei 2024, About Edgeble AI Participation, End-to-End Edge AI Lifecycle.',
      content: `
        <p class="text-lg mb-6">The CIE-IIIT Avishkar 2024 conference provided an excellent platform to discuss the latest developments in TinyML and edge AI technologies. Our presentation covered the complete lifecycle of edge AI development and deployment.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">TinyML Revolution</h3>
        <p class="mb-6">We explored how TinyML is enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded systems applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">End-to-End Solutions</h3>
        <p class="mb-6">Our talk emphasized the importance of considering the entire AI lifecycle, from model development and optimization to deployment and monitoring at the edge.</p>
      `,
      author: 'Chakrish Krishtam',
      date: '2024-02-24',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog11.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['TinyML', 'Conference', 'AI Lifecycle'],
      category: 'Technology'
    },
    {
      id: 8,
      title: 'Speaking at AIJ Moscow 2024',
      slug: 'aij-moscow',
      excerpt: 'The Future of AI Acceleration: Transforming Edge Computing for Tomorrow\'s Industries. Speaking on the future of AI acceleration and how edge computing is transforming industries.',
      content: `
        <p class="text-lg mb-6">AIJ Moscow 2024 provided an exceptional platform to discuss the future of AI acceleration and its impact on transforming edge computing for tomorrow's industries. Our presentation explored cutting-edge developments in AI hardware and software optimization.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">AI Acceleration Trends</h3>
        <p class="mb-6">We discussed the latest trends in AI acceleration, including specialized neural processing units, model optimization techniques, and the shift towards edge-first AI architectures.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Transformation</h3>
        <p class="mb-6">The presentation highlighted how AI acceleration is enabling new use cases across industries, from autonomous vehicles to smart manufacturing and healthcare applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Outlook</h3>
        <p class="mb-6">We shared our vision for the future of edge AI, emphasizing the importance of model-first design and the role of specialized hardware in enabling widespread AI adoption.</p>
      `,
      author: 'Jagan Teki',
      date: '2024-02-08',
      readTime: '7 min read',
      image: 'https://www.edgeble.ai/blog10.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI Acceleration', 'Moscow', 'Edge Computing'],
      category: 'Technology'
    },
    {
      id: 9,
      title: 'Edgeble at DeepTech, GFST 2024 India',
      slug: 'deeptech-gfst',
      excerpt: 'Pushing the Limits of Edge AI: 60FPS Live YOLOv5 Object Detection on Edgeble AI\'s 6TOPS Edge AI Accelerator Modules. Demonstrating real-time AI capabilities at the edge.',
      content: `
        <p class="text-lg mb-6">At DeepTech GFST 2024 India, we demonstrated the incredible capabilities of our edge AI accelerator modules by showcasing 60FPS live YOLOv5 object detection running on our 6TOPS Edge AI Accelerator.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-Time Performance</h3>
        <p class="mb-6">Our demonstration proved that edge AI can deliver real-time performance for demanding computer vision applications, achieving 60 frames per second object detection without compromising accuracy.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Technical Innovation</h3>
        <p class="mb-6">The 6TOPS Edge AI Accelerator represents a breakthrough in edge computing, delivering unprecedented performance in a compact, power-efficient form factor suitable for industrial deployments.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Impact</h3>
        <p class="mb-6">This level of performance opens new possibilities for real-time AI applications in manufacturing, automotive, and security sectors where low latency and high accuracy are critical.</p>
      `,
      author: 'Alberto Bianchi',
      date: '2024-01-26',
      readTime: '5 min read',
      image: 'https://www.edgeble.ai/blog9.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['DeepTech', 'YOLOv5', 'Real-time AI'],
      category: 'Technology'
    },
    {
      id: 10,
      title: 'Edgeble Sponsor DeepTech, GFST 2024 India',
      slug: 'sponsor-deeptech',
      excerpt: 'We would like to express our sincere gratitude to our sponsors and event partners. A big Thank you to our Lanyard Sponsor! Edgeble AI supporting the DeepTech ecosystem.',
      content: `
        <p class="text-lg mb-6">We were proud to sponsor DeepTech GFST 2024 India, demonstrating our commitment to supporting the deep technology ecosystem and fostering innovation in AI and emerging technologies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Supporting Innovation</h3>
        <p class="mb-6">As a lanyard sponsor, we had the opportunity to connect with researchers, entrepreneurs, and technology leaders who are driving the future of deep tech in India.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Ecosystem Building</h3>
        <p class="mb-6">Our sponsorship reflects our belief in the importance of building strong technology ecosystems that support innovation, collaboration, and knowledge sharing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Community Engagement</h3>
        <p class="mb-6">Events like GFST provide valuable platforms for the deep tech community to come together, share insights, and explore new opportunities for collaboration and growth.</p>
      `,
      author: 'Srinivas Patnaik',
      date: '2024-01-12',
      readTime: '3 min read',
      image: 'https://www.edgeble.ai/blog8.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['Sponsorship', 'DeepTech', 'Community'],
      category: 'Events'
    },
    {
      id: 11,
      title: 'Edgeble at TinyML Taipei 2024 Innovation',
      slug: 'tinyml-taipei',
      excerpt: 'End-to-End Edge AI Lifecycle with Real-Time, On-Device AI. Powered by EdgeGPT Pre-trained Edge AI Accelerators. Showcasing our comprehensive edge AI solutions.',
      content: `
        <p class="text-lg mb-6">TinyML Taipei 2024 Innovation Showcase provided the perfect venue to demonstrate our end-to-end edge AI lifecycle capabilities, powered by EdgeGPT pre-trained edge AI accelerators.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Complete AI Lifecycle</h3>
        <p class="mb-6">We showcased how our platform supports the entire AI development lifecycle, from model training and optimization to deployment and monitoring on edge devices.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-Time Capabilities</h3>
        <p class="mb-6">Our demonstration highlighted real-time, on-device AI processing capabilities that enable immediate decision-making without cloud dependencies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">TinyML Innovation</h3>
        <p class="mb-6">The event emphasized the growing importance of TinyML in enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded applications.</p>
      `,
      author: 'Chakrish Krishtam',
      date: '2024-11-05',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog7.png?auto=compress&cs=tinysrgb&w=800',
      tags: ['TinyML', 'Taipei', 'Edge AI Lifecycle'],
      category: 'Technology'
    },
    {
      id: 12,
      title: 'Industrial Future Summit 2024',
      slug: 'industrial-summit',
      excerpt: 'Revolutionising Vehicle Battery System Welding Inspection with Edge AI. We\'re participating! Industrial Future Summit - The leading event for Future Builders in Stockholm.',
      content: `
        <p class="text-lg mb-6">Industrial Future Summit 2024 in Stockholm brought together industry leaders to discuss the future of manufacturing and industrial automation. We were excited to participate and share our vision for edge AI in industrial applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Vehicle Battery Innovation</h3>
        <p class="mb-6">Our presentation focused on revolutionizing vehicle battery system welding inspection using edge AI, demonstrating how real-time AI analysis can improve quality control and safety in automotive manufacturing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Challenges in Vehicle Battery Welding</h3>
        <p class="mb-6">Commercial vehicle battery systems contain a growing number of laser welds that are crucial to their functionality. The assembly of these systems requires precise quality control to ensure safety and performance.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Solutions</h3>
        <p class="mb-6">By deploying AI at the edge, we eliminate delays, protect data privacy, and enable swift, actionable insights to maintain high-quality standards in battery manufacturing processes.</p>
      `,
      author: 'Alberto Bianchi',
      date: '2024-10-15',
      readTime: '8 min read',
      image: 'https://www.edgeble.ai/blog6.webp?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Battery Systems', 'Quality Control'],
      category: 'Industry'
    },
    {
      id: 13,
      title: 'Edgeble at AI Hardware and Edge AI Summit 2024',
      slug: 'ai-hardware-summit',
      excerpt: 'Summary of our participation at Edge AI For Innovation & Impact.',
      content: `
        <p>Our EdgeGPT NPU represents a breakthrough in edge AI processing, featuring a novel architecture designed specifically for real-world deployment scenarios. This deep dive explores the technical innovations that make it possible.</p>
        
        <h3>Revolutionary Design</h3>
        <p>The EdgeGPT NPU features a heterogeneous computing architecture that combines specialized AI processing units with traditional CPU cores, optimized for different types of AI workloads.</p>
        
        <h3>Performance Metrics</h3>
        <p>With up to 32 TOPS of AI processing power while maintaining exceptional power efficiency, our NPU delivers the performance needed for demanding edge applications.</p>
      `,
      author: 'Alberto Bianchi',
      date: '2024-10-09',
      readTime: '8 min read',
      image: 'https://www.edgeble.ai/blog4.webp?auto=compress&cs=tinysrgb&w=800',
      tags: ['NPU', 'Architecture', 'Performance'],
      category: 'Technology'
    },
    {
      id: 14,
      title: 'Edgeble at Indian Mobile Congress 2023',
      slug: 'mobile-congress',
      excerpt: 'Summary of our participation at Indian Mobile Congress 2023.',
      content: `
        <p>Deploying AI in industrial environments presents unique challenges that require careful consideration of reliability, safety, and performance requirements. Here are the key lessons we've learned.</p>
        
        <h3>Environmental Considerations</h3>
        <p>Industrial environments demand ruggedized solutions that can operate reliably in extreme temperatures, vibration, and electromagnetic interference conditions.</p>
        
        <h3>Safety First</h3>
        <p>Safety-critical applications require redundant systems, fail-safe mechanisms, and compliance with industry standards such as ISO 26262 for automotive applications.</p>
      `,
      author: 'Jagan Teki',
      date: '2023-10-25',
      readTime: '7 min read',
      image: 'https://www.edgeble.ai/blog3.webp?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Deployment', 'Best Practices'],
      category: 'Industry'
    },
    {
      id: 15,
      title: 'Edgeble at Edge Computing Expo Europe 2023',
      slug: 'edge-expo-europe',
      excerpt: 'Recap of Edgeble presence at the Edge Computing Expo Europe 2023. Learn about our latest innovations and engagements with industry leaders.',
      content: `
        <p>Autonomous vehicles represent one of the most demanding applications for edge AI, requiring real-time processing of massive amounts of sensor data to make split-second decisions that ensure passenger safety.</p>
        
        <h3>Real-Time Processing</h3>
        <p>Edge AI enables vehicles to process sensor data locally, reducing latency and ensuring reliable operation even when connectivity is limited or unavailable.</p>
        
        <h3>Safety and Reliability</h3>
        <p>Our automotive-grade AI accelerators are designed with redundancy and fail-safe mechanisms to meet the stringent safety requirements of autonomous vehicle applications.</p>
      `,
      author: 'Srinivas Patnaik',
      date: '2023-06-14',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog2.webp?auto=compress&cs=tinysrgb&w=800',
      tags: ['Autonomous Vehicles', 'Safety', 'Real-time'],
      category: 'Automotive'
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
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-black border-b border-white/10 pt-20">
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
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ${
                    post.id === 2 ? 'beyond-borders-image' : ''
                  }`}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black shadow-lg">
                    {post.category}
                  </span>
                </div>
                {/* Date */}
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 z-10">
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
