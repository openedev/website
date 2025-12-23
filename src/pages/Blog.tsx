import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag, ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ALL_BLOGS } from "../data/allBlogs";

const BlogPage = () => {
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
            Blog
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Stay updated with latest in-depth technology enablements.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
	  {ALL_BLOGS
		  .filter(post => post.type === "blog")
		  .map((post, index) => (
            <div key={post.id} className="group bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/10 hover:border-white/20">
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ${
                    post.id === 1 ? 'beyond-borders-image' : ''
                  }`}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-black shadow-lg">
                    {post.category}
                  </span>
                </div>
                {/* Date */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 z-10">
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
            Subscribe to our newsletter for the latest blogs, news.
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
