import React from 'react';
import { Calendar, ArrowLeft, Clock, ArrowRight, FileText } from 'lucide-react';
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
    <div className="min-h-screen bg-site text-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-site border-b border-white/10 pt-[112px]">
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
            Read Edgeble's latest writing, announcements, and event updates.
          </p>
        </div>
      </div>

      {/* Blog Posts List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 mb-12">
          {ALL_BLOGS.map((post) => (
            <article
              key={post.id}
              className="border border-white/10 bg-white/[0.04] rounded-lg p-7 hover:border-white/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-white text-black flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-medium text-white/70">
                    <span className="border border-white/10 bg-site px-3 py-1.5 text-white/80 rounded">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/60" />
                      Publish {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="w-4 h-4 text-white/60" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-3">{post.title}</h2>
                  <p className="text-lg text-white/75 leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="border border-white/10 bg-site px-3 py-1.5 text-sm text-white/70 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-white/80 hover:text-white font-semibold transition-colors"
                  >
                    Read article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
