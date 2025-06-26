import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Linkedin, Twitter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const BlogPostPage = () => {
  const { slug } = useParams();

  const blogPosts = {
    'edgecore-ai-x1-wins-innovation-award': {
      id: 1,
      title: 'EdgeCore AI-X1 Wins Innovation Award',
      excerpt: 'Our flagship AI accelerator recognized at the International Edge Computing Summit 2024.',
      content: `
        <p class="text-lg mb-6">We are thrilled to announce that our flagship EdgeCore AI-X1 has been recognized with the Innovation Award at the International Edge Computing Summit 2024. This prestigious award acknowledges our commitment to pushing the boundaries of edge AI technology.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Revolutionary Architecture</h3>
        <p class="mb-6">The EdgeCore AI-X1 represents a breakthrough in edge AI processing, featuring our proprietary neural processing unit (NPU) architecture that delivers unprecedented performance per watt. With 32 TOPS of AI processing power in a compact form factor, it's designed for real-world deployment scenarios.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Technical Specifications:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• NPU Performance: 32 TOPS INT8, 16 TOPS INT4</li>
            <li>• Power Efficiency: 2.5 TOPS/W</li>
            <li>• Memory: 32GB LPDDR5</li>
            <li>• Connectivity: PCIe 4.0, USB 3.2, Ethernet</li>
            <li>• Operating Temperature: -20°C to +70°C</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Recognition</h3>
        <p class="mb-6">The award was presented by a panel of industry experts who evaluated solutions based on innovation, practical impact, and technical excellence. Our AI-X1 stood out for its unique approach to model-first design and seamless integration capabilities.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The EdgeCore AI-X1 represents a paradigm shift in edge AI processing. Its model-first approach and exceptional power efficiency make it a game-changer for industrial applications." - Dr. Jennifer Walsh, Summit Evaluation Committee
        </blockquote>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Impact</h3>
        <p class="mb-6">Since its launch, the EdgeCore AI-X1 has been deployed in over 50 industrial automation projects, delivering measurable improvements in quality control and predictive maintenance. Our customers report up to 85% reduction in defect rates and 40% improvement in operational efficiency.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">85%</div>
            <div class="text-white/70">Defect Reduction</div>
          </div>
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">40%</div>
            <div class="text-white/70">Efficiency Improvement</div>
          </div>
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">50+</div>
            <div class="text-white/70">Active Deployments</div>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Looking Forward</h3>
        <p class="mb-6">This recognition validates our vision of bringing powerful AI capabilities to the edge. We're already working on the next generation of EdgeCore processors, which will deliver even greater performance and efficiency for emerging AI workloads.</p>
      `,
      author: 'Dr. Rajesh Kumar',
      authorRole: 'Lead AI Engineer',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Award', 'Innovation', 'EdgeCore AI-X1'],
      category: 'Product News',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    'ai-at-the-edge-conference-2024': {
      id: 2,
      title: 'AI at the Edge Conference 2024',
      excerpt: 'Join us at booth #A12 to see live demonstrations of our latest AI accelerators.',
      content: `
        <p class="text-lg mb-6">We're excited to participate in the AI at the Edge Conference 2024, taking place in San Francisco from February 22-24. This premier event brings together industry leaders, researchers, and innovators to explore the future of edge computing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Live Demonstrations</h3>
        <p class="mb-6">Visit our booth #A12 to experience live demonstrations of our latest AI accelerators. Our team will showcase real-time inference capabilities across various use cases including computer vision, natural language processing, and predictive analytics.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Demo Schedule:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• 10:00 AM - Computer Vision for Quality Control</li>
            <li>• 12:00 PM - Real-time Language Processing</li>
            <li>• 2:00 PM - Predictive Maintenance Systems</li>
            <li>• 4:00 PM - Autonomous Vehicle AI</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Speaking Sessions</h3>
        <p class="mb-6">Our CEO, Jagan Teki, will be presenting "The Future of Agentic AI at the Edge" on February 23rd at 2:00 PM. The session will cover emerging trends in edge AI and how agentic systems are transforming industrial applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Networking Opportunities</h3>
        <p class="mb-6">Join us for exclusive networking sessions where you can connect with our engineering team and discuss custom solutions for your specific requirements. We'll also be hosting a technical workshop on optimizing AI models for edge deployment.</p>
      `,
      author: 'Sarah Chen',
      authorRole: 'Hardware Design Engineer',
      authorImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-02-22',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Conference', 'Event', 'Demonstration'],
      category: 'Events'
    },
    'partnership-with-global-automotive-leader': {
      id: 3,
      title: 'Partnership with Global Automotive Leader',
      excerpt: 'Strategic collaboration to accelerate autonomous vehicle development with edge AI.',
      content: `
        <p class="text-lg mb-6">We are proud to announce a strategic partnership with a leading global automotive manufacturer to accelerate the development of autonomous vehicle technologies using our edge AI solutions.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Collaborative Innovation</h3>
        <p class="mb-6">This partnership combines our cutting-edge AI accelerators with decades of automotive expertise to create next-generation ADAS (Advanced Driver Assistance Systems) and autonomous driving capabilities. Our EdgeCore automotive-grade modules will power real-time decision making in vehicles.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Safety First Approach</h3>
        <p class="mb-6">Safety is paramount in automotive applications. Our AI accelerators are designed with redundancy and fail-safe mechanisms to ensure reliable operation in critical driving scenarios. The partnership will focus on developing ISO 26262 compliant solutions for functional safety.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Market Impact</h3>
        <p class="mb-6">This collaboration is expected to accelerate the deployment of Level 3 and Level 4 autonomous vehicles, bringing advanced safety features to market faster. The partnership will initially focus on highway automation and urban driving assistance systems.</p>
      `,
      author: 'Michael Rodriguez',
      authorRole: 'Software Integration Engineer',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-08',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Partnership', 'Automotive', 'Autonomous Vehicles'],
      category: 'Business News'
    },
    'edgecore-pro-x2-industrial-launch': {
      id: 4,
      title: 'EdgeCore Pro-X2 Industrial Launch',
      excerpt: 'New ruggedized AI module designed for extreme industrial environments now available.',
      content: `
        <p class="text-lg mb-6">Today marks the official launch of our EdgeCore Pro-X2, a ruggedized AI module specifically designed for extreme industrial environments. This new addition to our product line addresses the growing demand for AI processing in harsh conditions.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Extreme Environment Ready</h3>
        <p class="mb-6">The EdgeCore Pro-X2 is built to withstand temperatures from -40°C to +85°C, with IP67 rating for dust and water resistance. It features enhanced vibration resistance and electromagnetic interference (EMI) shielding, making it ideal for heavy industrial applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Enhanced Performance</h3>
        <p class="mb-6">Despite its rugged design, the Pro-X2 delivers exceptional AI performance with 48 TOPS of processing power and support for multiple AI frameworks. The module includes advanced thermal management to maintain peak performance even in extreme conditions.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Applications</h3>
        <p class="mb-6">The EdgeCore Pro-X2 is already being deployed in mining operations, oil and gas facilities, and manufacturing plants where traditional computing solutions fail. Early adopters report significant improvements in predictive maintenance and operational safety.</p>
      `,
      author: 'Priya Sharma',
      authorRole: 'Solutions Architect',
      authorImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2023-12-20',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/159298/gear-machine-mechanical-mechanical-engineering-159298.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Product Launch', 'Industrial', 'Ruggedized'],
      category: 'Product News'
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

        {/* Video Embed (if available) */}
        {post.videoUrl && (
          <div className="mt-12 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Watch the Demo</h3>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe
                src={post.videoUrl}
                title="Video demonstration"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

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
                {post.author} is a key member of our engineering team, specializing in AI hardware design and optimization. 
                With over 10 years of experience in the field, they lead our efforts in developing next-generation edge AI solutions.
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