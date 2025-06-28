import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Linkedin, Twitter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const BlogPostPage = () => {
  const { slug } = useParams();

  const blogPosts = {
    'speaking-at-ida-ireland-startup-roundtable': {
      id: 1,
      title: 'Speaking at IDA Ireland Startup Roundtable',
      excerpt: 'Excited to have been part of the IDA Ireland Startup Roundtable hosted at T-Hub. It was a great opportunity to share insights on startup innovation, global collaboration, and the growing synergy between India and Ireland in the tech and business space.',
      content: `
        <p class="text-lg mb-6">We were honored to participate in the IDA Ireland Startup Roundtable, a prestigious event that brought together innovative startups and industry leaders to discuss the future of technology collaboration between India and Ireland.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Key Discussion Points</h3>
        <p class="mb-6">The roundtable focused on emerging technologies, cross-border partnerships, and the role of AI in driving innovation across industries. Our CEO shared insights on how edge AI is transforming manufacturing and industrial automation.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Event Highlights:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Cross-border technology partnerships</li>
            <li>• AI innovation in manufacturing</li>
            <li>• Startup ecosystem development</li>
            <li>• Future of India-Ireland collaboration</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Building Bridges</h3>
        <p class="mb-6">The event highlighted the growing synergy between Indian innovation and Irish business expertise, creating opportunities for meaningful partnerships in the AI and technology sectors.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The collaboration between Indian startups and Irish enterprises represents a powerful combination of innovation and business acumen that can drive global technology advancement." - Event Moderator
        </blockquote>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: 'https://www.edgeble.ai/a1.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-30',
      readTime: '4 min read',
      image: 'https://www.edgeble.ai/blog14.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Roundtable', 'Partnership', 'Innovation'],
      category: 'Events'
    },
    'speaking-at-nasscom-ai-days-mumbai': {
      id: 2,
      title: 'Speaking at Nasscom AI Days, Mumbai',
      excerpt: 'Edgeble AI was proud to be part of NASSCOM AI Days held in Mumbai — an event that brought together India\'s top minds in artificial intelligence, innovation, and enterprise technology.',
      content: `
        <p class="text-lg mb-6">NASSCOM AI Days Mumbai was a landmark event that showcased India's leadership in artificial intelligence and emerging technologies. We were privileged to present our vision for edge AI and its transformative potential.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Leadership</h3>
        <p class="mb-6">The event featured presentations from leading AI companies, researchers, and innovators, highlighting India's growing influence in the global AI landscape.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Revolution</h3>
        <p class="mb-6">Our presentation focused on how edge AI is revolutionizing industries by bringing intelligence closer to data sources, reducing latency, and enabling real-time decision making.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">500+</div>
            <div class="text-white/70">Attendees</div>
          </div>
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">50+</div>
            <div class="text-white/70">AI Companies</div>
          </div>
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">3</div>
            <div class="text-white/70">Days of Innovation</div>
          </div>
        </div>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: 'https://www.edgeble.ai/a1.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-25',
      readTime: '5 min read',
      image: 'https://www.edgeble.ai/blog13.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Conference', 'AI', 'Mumbai'],
      category: 'Events'
    },
    'speaking-at-aij-moscow-2024': {
      id: 5,
      title: 'Speaking at AIJ Moscow 2024',
      excerpt: 'The Future of AI Acceleration: Transforming Edge Computing for Tomorrow\'s Industries. Speaking on the future of AI acceleration and how edge computing is transforming industries.',
      content: `
        <p class="text-lg mb-6">AIJ Moscow 2024 provided an exceptional platform to discuss the future of AI acceleration and its impact on transforming edge computing for tomorrow's industries. Our presentation explored cutting-edge developments in AI hardware and software optimization.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">AI Acceleration Trends</h3>
        <p class="mb-6">We discussed the latest trends in AI acceleration, including specialized neural processing units, model optimization techniques, and the shift towards edge-first AI architectures.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Topics Covered:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Neural Processing Unit architectures</li>
            <li>• Model optimization for edge deployment</li>
            <li>• Real-time AI inference capabilities</li>
            <li>• Industry transformation through AI</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Transformation</h3>
        <p class="mb-6">The presentation highlighted how AI acceleration is enabling new use cases across industries, from autonomous vehicles to smart manufacturing and healthcare applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Outlook</h3>
        <p class="mb-6">We shared our vision for the future of edge AI, emphasizing the importance of model-first design and the role of specialized hardware in enabling widespread AI adoption.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: 'https://www.edgeble.ai/blog10.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-02-08',
      readTime: '7 min read',
      image: 'https://www.edgeble.ai/blog10.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['AI Acceleration', 'Moscow', 'Edge Computing'],
      category: 'Technology'
    },
    'edgeble-at-deeptech-gfst-2024-india': {
      id: 6,
      title: 'Edgeble at DeepTech, GFST 2024 India',
      excerpt: 'Pushing the Limits of Edge AI: 60FPS Live YOLOv5 Object Detection on Edgeble AI\'s 6TOPS Edge AI Accelerator Modules. Demonstrating real-time AI capabilities at the edge.',
      content: `
        <p class="text-lg mb-6">At DeepTech GFST 2024 India, we demonstrated the incredible capabilities of our edge AI accelerator modules by showcasing 60FPS live YOLOv5 object detection running on our 6TOPS Edge AI Accelerator.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-Time Performance</h3>
        <p class="mb-6">Our demonstration proved that edge AI can deliver real-time performance for demanding computer vision applications, achieving 60 frames per second object detection without compromising accuracy.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Performance Metrics:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• 60 FPS real-time object detection</li>
            <li>• YOLOv5 model optimization</li>
            <li>• 6 TOPS processing power</li>
            <li>• Low latency inference</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Technical Innovation</h3>
        <p class="mb-6">The 6TOPS Edge AI Accelerator represents a breakthrough in edge computing, delivering unprecedented performance in a compact, power-efficient form factor suitable for industrial deployments.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Impact</h3>
        <p class="mb-6">This level of performance opens new possibilities for real-time AI applications in manufacturing, automotive, and security sectors where low latency and high accuracy are critical.</p>
      `,
      author: 'Alberto Bianchi',
      authorRole: 'Hardware Engineer',
      authorImage: 'https://www.edgeble.ai/blog9.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-26',
      readTime: '5 min read',
      image: 'https://www.edgeble.ai/blog9.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['DeepTech', 'YOLOv5', 'Real-time AI'],
      category: 'Technology'
    },
    'edgeble-sponsor-deeptech-gfst-2024-india': {
      id: 7,
      title: 'Edgeble Sponsor DeepTech, GFST 2024 India',
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
      authorRole: 'Strategy Analyst',
      authorImage: 'https://www.edgeble.ai/blog8.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-12',
      readTime: '3 min read',
      image: 'https://www.edgeble.ai/blog8.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Sponsorship', 'DeepTech', 'Community'],
      category: 'Events'
    },
    'edgeble-at-tinyml-taipei-2024-innovation': {
      id: 8,
      title: 'Edgeble at TinyML Taipei 2024 Innovation',
      excerpt: 'End-to-End Edge AI Lifecycle with Real-Time, On-Device AI. Powered by EdgeGPT Pre-trained Edge AI Accelerators. Showcasing our comprehensive edge AI solutions.',
      content: `
        <p class="text-lg mb-6">TinyML Taipei 2024 Innovation Showcase provided the perfect venue to demonstrate our end-to-end edge AI lifecycle capabilities, powered by EdgeGPT pre-trained edge AI accelerators.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Complete AI Lifecycle</h3>
        <p class="mb-6">We showcased how our platform supports the entire AI development lifecycle, from model training and optimization to deployment and monitoring on edge devices.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Lifecycle Components:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Model development and training</li>
            <li>• Edge optimization and quantization</li>
            <li>• Real-time deployment</li>
            <li>• Performance monitoring</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-Time Capabilities</h3>
        <p class="mb-6">Our demonstration highlighted real-time, on-device AI processing capabilities that enable immediate decision-making without cloud dependencies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">TinyML Innovation</h3>
        <p class="mb-6">The event emphasized the growing importance of TinyML in enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded applications.</p>
      `,
      author: '#',
      authorRole: '#',
      authorImage: 'https://www.edgeble.ai/blog7.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-05',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog7.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['TinyML', 'Taipei', 'Edge AI Lifecycle'],
      category: 'Technology'
    },
    'industrial-future-summit-2024': {
      id: 9,
      title: 'Industrial Future Summit 2024',
      excerpt: 'Revolutionising Vehicle Battery System Welding Inspection with Edge AI. We\'re participating! Industrial Future Summit - The leading event for Future Builders in Stockholm.',
      content: `
        <p class="text-lg mb-6">Industrial Future Summit 2024 in Stockholm brought together industry leaders to discuss the future of manufacturing and industrial automation. We were excited to participate and share our vision for edge AI in industrial applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Vehicle Battery Innovation</h3>
        <p class="mb-6">Our presentation focused on revolutionizing vehicle battery system welding inspection using edge AI, demonstrating how real-time AI analysis can improve quality control and safety in automotive manufacturing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Challenges in Vehicle Battery Welding</h3>
        <p class="mb-6">Commercial vehicle battery systems contain a growing number of laser welds that are crucial to their functionality. The assembly of these systems requires precise quality control to ensure safety and performance.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Challenges:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Precision welding quality control</li>
            <li>• Real-time defect detection</li>
            <li>• Safety compliance requirements</li>
            <li>• Production line efficiency</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Solutions</h3>
        <p class="mb-6">By deploying AI at the edge, we eliminate delays, protect data privacy, and enable swift, actionable insights to maintain high-quality standards in battery manufacturing processes.</p>
      `,
      author: 'Alberto Bianchi',
      authorRole: 'Hardware Engineer',
      authorImage: 'https://www.edgeble.ai/blog6.webp?auto=compress&cs=tinysrgb&w=150',
      date: '2024-10-15',
      readTime: '8 min read',
      image: 'https://www.edgeble.ai/blog6.webp?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Industrial', 'Battery Systems', 'Quality Control'],
      category: 'Industry'
    },
    // Add other existing blog posts...
    'edgeble-at-thub-innovative-enclave-2025': {
      id: 3,
      title: 'Edgeble at T-Hub Innovative Enclave 2025',
      excerpt: 'Edgeble AI was proud to participate in the T-Hub Innovative Enclave 2025 — a convergence of India\'s most forward-thinking startups and ecosystem leaders.',
      content: `
        <p class="text-lg mb-6">The T-Hub Innovative Enclave 2025 brought together the most promising startups and technology leaders from across India. As participants, we had the opportunity to showcase our edge AI solutions and connect with fellow innovators.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Innovation Showcase</h3>
        <p class="mb-6">The event featured live demonstrations of cutting-edge technologies, with our EdgeGPT platform receiving significant attention from investors and industry partners.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Ecosystem Building</h3>
        <p class="mb-6">The enclave emphasized the importance of building strong startup ecosystems and fostering collaboration between technology companies, investors, and government initiatives.</p>
      `,
      author: 'Srinivas Patnaik',
      authorRole: 'Strategy Analyst',
      authorImage: 'https://www.edgeble.ai/a5.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-12-03',
      readTime: '3 min read',
      image: 'https://www.edgeble.ai/blog12.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['T-Hub', 'Innovation', 'Startup'],
      category: 'Events'
    },
    'speaking-at-cie-iiit-avishkar-2024': {
      id: 4,
      title: 'Speaking at CIE-IIIT Avishkar 2024',
      excerpt: 'About TinyML Taipei 2024, About Edgeble AI Participation, End-to-End Edge AI Lifecycle.',
      content: `
        <p class="text-lg mb-6">The CIE-IIIT Avishkar 2024 conference provided an excellent platform to discuss the latest developments in TinyML and edge AI technologies. Our presentation covered the complete lifecycle of edge AI development and deployment.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">TinyML Revolution</h3>
        <p class="mb-6">We explored how TinyML is enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded systems applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">End-to-End Solutions</h3>
        <p class="mb-6">Our talk emphasized the importance of considering the entire AI lifecycle, from model development and optimization to deployment and monitoring at the edge.</p>
      `,
      author: '#',
      authorRole: '#',
      authorImage: 'https://www.edgeble.ai/chakrish.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-02-24',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog11.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['TinyML', 'Conference', 'AI Lifecycle'],
      category: 'Technology'
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-white hover:text-white/70 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </button>
          </div>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white text-black">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-white/60 text-sm mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Share2 className="w-4 h-4 mr-2" />
              <span>Share</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center mb-8">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <div className="font-semibold text-white">{post.author}</div>
              <div className="text-white/60 text-sm">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-white/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 mb-8">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Tag className="w-5 h-5 mr-2" />
            Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4">Share this article</h4>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-start space-x-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">{post.author}</h4>
              <p className="text-white/60 text-sm mb-2">{post.authorRole}</p>
              <p className="text-white/80 text-sm">
                {post.author} is a key member of our team, specializing in edge AI innovation and technology development. 
                With extensive experience in the field, they lead our efforts in developing next-generation edge AI solutions.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
