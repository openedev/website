import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowLeft, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { blogPostsData, sortPosts, loadBlogPostsFromStorage, getBlogPostBySlug } from '../data/blogData';
import { BlogPost } from '../types/blog';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogPostsFromStorage();
    
    // Find the post by slug
    const foundPost = getBlogPostBySlug(slug || '');
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same tags)
      const related = sortPosts(blogPostsData).filter(
        (p) =>
          p.id !== foundPost.id &&
          p.tags.some((tag) => foundPost.tags.includes(tag))
      );
      
      setRelatedPosts(related.slice(0, 3));
    }
    
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="text-white hover:text-white/70 underline">Back to Blog</a>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareOnTwitter = () => {
    const text = `Check out: ${post.title}`;
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero Section with Featured Image */}
      <div className="relative h-96 bg-gradient-to-b from-white/10 to-black pt-20 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover absolute inset-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/10">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center text-white/70 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(post.date)}
          </div>
          <div className="flex items-center text-white/70 text-sm">
            <User className="w-4 h-4 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center text-white/70 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/80"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <div
          className="prose prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share */}
        <div className="flex items-center gap-4 py-8 border-y border-white/10">
          <span className="text-white/70">Share:</span>
          <button
            onClick={shareOnTwitter}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="Share on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button
            onClick={shareOnLinkedIn}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <a
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/80">
                    {relatedPost.title}
                  </h3>
                  <p className="text-white/70 text-sm">{relatedPost.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;
