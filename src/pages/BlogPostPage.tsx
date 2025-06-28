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
      author: 'Chakrish Krishtam',
      authorRole: 'AI/ML Engineer',
      authorImage: 'https://www.edgeble.ai/chakrish.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-02-24',
      readTime: '6 min read',
      image: 'https://www.edgeble.ai/blog11.png?auto=compress&cs=tinysrgb&w=1200',
      tags: ['TinyML', 'Conference', 'AI Lifecycle'],
      category: 'Technology'
    },
    'edgegpt-npu-architecture-deep-dive': {
      id: 5,
      title: 'EdgeGPT NPU Architecture Deep Dive',
      excerpt: 'A comprehensive look at the innovative architecture behind our EdgeGPT NPU modules and how they deliver unprecedented performance at the edge.',
      content: `
        <p class="text-lg mb-6">Our EdgeGPT NPU represents a breakthrough in edge AI processing, featuring a novel architecture designed specifically for real-world deployment scenarios. This deep dive explores the technical innovations that make it possible.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Revolutionary Design</h3>
        <p class="mb-6">The EdgeGPT NPU features a heterogeneous computing architecture that combines specialized AI processing units with traditional CPU cores, optimized for different types of AI workloads.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Performance Metrics</h3>
        <p class="mb-6">With up to 32 TOPS of AI processing power while maintaining exceptional power efficiency, our NPU delivers the performance needed for demanding edge applications.</p>
      `,
      author: 'Alberto Bianchi',
      authorRole: 'Hardware Engineer',
      authorImage: 'https://www.edgeble.ai/a4.png?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['NPU', 'Architecture', 'Performance'],
      category: 'Technology'
    },
    // Add more blog posts with the same structure...
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