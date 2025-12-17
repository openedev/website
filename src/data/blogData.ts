import { BlogPost } from '../types/blog';

export let blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'moscow-summit',
    title: 'Pitching at Moscow Startup Summit',
    excerpt: 'Edgeble pitched at the Moscow Startup Summit, highlighting the world\'s first Self-Learning Edge AI platform redefining autonomous intelligence.',
    content: `<p class="text-lg mb-6">Participated in the Moscow Startup Summit, presenting its Self-Learning Edge AI platform that enables on-device inference, adaptation, and continuous learning without cloud dependency.</p>`,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-10-02',
    readTime: '3 min read',
    image: '/images/blog-moscow.jpeg',
    tags: ['Moscow', 'Startup', 'Agentic AI'],
    category: 'Events',
    order: null,
    createdAt: '2025-10-02T00:00:00Z'
  },
  {
    id: '2',
    slug: 'sber500-selection',
    title: 'Edgeble Among Top 25 Global Startups Selected by Sber500',
    excerpt: 'Edgeble has been selected among the Top 25 startups worldwide by Sber500, recognizing innovation in Self-Learning Edge AI.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> has been recognized among the <strong>Top 25 Global Startups</strong> selected by <strong>Sber500</strong> for its innovation in <strong>Self-Learning Edge AI</strong>.</p>`,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-25',
    readTime: '2 min read',
    image: '/images/blog-sber500.png',
    tags: ['Sber500', 'Global Startups', 'Innovation'],
    category: 'Recognition',
    order: null,
    createdAt: '2025-09-25T00:00:00Z'
  }
];

export function sortPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    if (a.order != null && b.order != null) {
      return a.order - b.order;
    }
    if (a.order != null) return -1;
    if (b.order != null) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find(p => p.slug === slug || p.id === slug);
}

export function addPost(post: Omit<BlogPost, 'id' | 'order' | 'createdAt'>): BlogPost {
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    order: null,
    createdAt: new Date().toISOString()
  };
  blogPostsData.push(newPost);
  return newPost;
}

export function updatePostOrder(orderedIds: string[]): BlogPost[] {
  orderedIds.forEach((id, index) => {
    const post = blogPostsData.find(p => p.id === id);
    if (post) {
      post.order = index;
    }
  });
  return sortPosts(blogPostsData);

    export function deletePost(id: string): BlogPost[] {
  blogPostsData = blogPostsData.filter(p => p.id !== id);
  saveBlogPostsToStorage();
  return blogPostsData;
}

const STORAGE_KEY = 'edgeble_blog_posts';

export function saveBlogPostsToStorage(): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blogPostsData));
    } catch (error) {
      console.error('Error saving blog posts to storage:', error);
    }
  }
}

export function loadBlogPostsFromStorage(): void {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        blogPostsData = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading blog posts from storage:', error);
    }
  }
}

// Load posts from storage on module initialization
if (typeof window !== 'undefined') {
  loadBlogPostsFromStorage();
}
}
