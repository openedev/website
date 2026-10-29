import React from 'react';
import { ALL_BLOGS } from "../data/allBlogs";
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = ALL_BLOGS.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-site text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-[112px]">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  const isNxp2026 = post.slug === 'nxp-2026';
  const isNxpShowcase = post.slug === 'nxp-startup-impact-showcase-2026';
  const isEmbeddedWorld = post.slug === 'embeddedworld-china-2026';
  const isEdgeAiTaipei = post.slug === 'edge-ai-taipei-2026';
  const isQualcommDragonwing = post.slug === 'edgeble-qualcomm-dragonwing-2026';

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
              Back to Blog
            </button>
          </div>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white text-black">
              {post.category}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl md:text-4xl lg:max-w-none lg:text-[clamp(1.8rem,2.5vw,2.75rem)] lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis font-bold text-white mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="max-w-4xl text-lg md:text-xl lg:max-w-none lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis text-white/70 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-white/60 text-sm mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Publish {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {post.image && (
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${isNxpShowcase ? 'max-w-5xl mx-auto' : ''} relative overflow-hidden rounded-2xl ${
              isNxp2026
                ? 'aspect-[16/9] md:aspect-[2/1] bg-gradient-to-br from-gray-900 to-black'
                : isNxpShowcase
                  ? 'aspect-[5/4] md:aspect-[4/3] bg-white'
                  : isEmbeddedWorld
                    ? 'aspect-[1365/519] bg-site'
                    : isEdgeAiTaipei
                      ? 'aspect-[1504/724] bg-site'
                      : isQualcommDragonwing
                      ? 'aspect-[1531/744] bg-site'
                  : 'h-[400px] md:h-[500px] bg-gradient-to-br from-gray-900 to-black'
            }`}>
              {isNxp2026 ? (
                <video
                  src="/videos/imx8mp-self-correct.mp4"
                  poster={post.image}
                  aria-label={post.title}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-full object-center ${
                    isNxpShowcase || isEmbeddedWorld || isEdgeAiTaipei || isQualcommDragonwing ? 'object-contain' : 'object-cover'
                  } ${post.id === 2 ? 'beyond-borders-image' : ''}`}
                  style={{
                    objectFit: isNxpShowcase || isEmbeddedWorld || isEdgeAiTaipei || isQualcommDragonwing ? 'contain' : 'cover',
                    objectPosition: 'center'
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${post.image ? 'py-16' : 'py-10'}`}>
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

      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
