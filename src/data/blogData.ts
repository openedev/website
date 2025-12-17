import { BlogPost } from '../types/blog';

export let blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'moscow-summit',
    title: 'Pitching at Moscow Startup Summit',
    excerpt: 'Edgeble pitched at the Moscow Startup Summit, highlighting the world\'s first Self-Learning Edge AI platform redefining autonomous intelligence.',
    content: `<p class="text-lg mb-6">Participated in the Moscow Startup Summit, presenting its Self-Learning Edge AI platform that enables on-device inference, adaptation, and continuous learning without cloud dependency.</p><p class="text-lg mb-6">The platform represents a breakthrough in edge computing, allowing AI models to learn and adapt directly on devices without requiring constant cloud connectivity or expensive computational resources.</p>`,
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
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> has been recognized among the <strong>Top 25 Global Startups</strong> selected by <strong>Sber500</strong> for its innovation in <strong>Self-Learning Edge AI</strong>.</p><p class="text-lg mb-6">This recognition validates our commitment to revolutionizing edge computing and demonstrates the global importance of on-device AI intelligence. Sber500's selection affirms our position as a leader in next-generation AI infrastructure.</p>`,
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
  },
  {
    id: '3',
    slug: 'edge-ai-future',
    title: 'The Future of Edge AI: Why On-Device Intelligence Matters',
    excerpt: 'Explore how edge AI is transforming technology and why on-device intelligence is the future of computation.',
    content: `<p class="text-lg mb-6">Edge AI represents a paradigm shift in how we approach artificial intelligence. Instead of sending all data to centralized cloud servers, edge AI brings intelligence directly to devices.</p><p class="text-lg mb-6">This approach offers numerous advantages: reduced latency, improved privacy, lower bandwidth requirements, and the ability to function offline. As IoT devices proliferate and real-time processing becomes critical, edge AI has become essential.</p><p class="text-lg mb-6">The future belongs to systems that can learn and adapt locally, enabling smarter, faster, and more secure applications across all industries.</p>`,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-15',
    readTime: '5 min read',
    image: '/images/blog-edge-ai.jpeg',
    tags: ['Edge AI', 'Technology', 'Innovation'],
    category: 'Technology',
    order: null,
    createdAt: '2025-09-15T00:00:00Z'
  },
  {
    id: '4',
    slug: 'self-learning-systems',
    title: 'Building Self-Learning Systems: A Technical Deep Dive',
    excerpt: 'Understand the architecture and principles behind self-learning AI systems that adapt without explicit programming.',
    content: `<p class="text-lg mb-6">Self-learning systems represent the next frontier in artificial intelligence. Unlike traditional machine learning models that are trained once and then deployed, self-learning systems continuously adapt to new data and changing environments.</p><p class="text-lg mb-6">These systems use sophisticated feedback mechanisms, reinforcement learning principles, and advanced neural architectures to improve performance over time. They can identify patterns, make decisions, and optimize their own parameters without human intervention.</p><p class="text-lg mb-6">Edgeble's self-learning edge AI platform enables these capabilities directly on edge devices, making intelligent systems accessible to a broader range of applications and use cases.</p>`,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-08',
    readTime: '6 min read',
    image: '/images/blog-self-learning.jpeg',
    tags: ['Self-Learning', 'AI', 'Technology'],
    category: 'Technology',
    order: null,
    createdAt: '2025-09-08T00:00:00Z'
  },
  {
    id: '5',
    slug: 'privacy-in-edge-computing',
    title: 'Why Privacy Matters in Edge Computing',
    excerpt: 'Discover how edge computing provides superior privacy protection compared to cloud-based AI solutions.',
    content: `<p class="text-lg mb-6">Privacy is one of the most critical concerns in the AI era. Traditional cloud-based AI solutions require sending sensitive data to remote servers, creating privacy vulnerabilities and regulatory compliance challenges.</p><p class="text-lg mb-6">Edge computing transforms this model by processing data locally on devices. This approach ensures that sensitive information never leaves the user's device, providing strong privacy guarantees and enabling compliance with regulations like GDPR and CCPA.</p><p class="text-lg mb-6">With Edgeble's edge AI platform, organizations can deploy intelligent systems while maintaining complete data privacy and control.</p>`,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-08-28',
    readTime: '4 min read',
    image: '/images/blog-privacy.jpeg',
    tags: ['Privacy', 'Security', 'Edge Computing'],
    category: 'Security',
    order: null,
    createdAt: '2025-08-28T00:00:00Z'
  },
  {
    id: '6',
    slug: 'iot-edge-ai-integration',
    title: 'Integrating Edge AI with IoT Devices: Best Practices',
    excerpt: 'Learn how to effectively integrate edge AI with IoT devices for smarter, autonomous systems.',
    content: `<p class="text-lg mb-6">The Internet of Things (IoT) generates massive amounts of data from connected devices worldwide. Traditionally, this data was sent to cloud servers for processing, creating latency and bandwidth challenges.</p><p class="text-lg mb-6">Edge AI changes this by enabling IoT devices to process and learn from data locally. This integration creates smarter devices that can make decisions independently and respond in real-time to changing conditions.</p><p class="text-lg mb-6">Best practices for IoT-Edge AI integration include choosing lightweight models, optimizing for device resources, implementing robust security measures, and ensuring seamless synchronization when cloud connectivity is available.</p>`,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-08-18',
    readTime: '5 min read',
    image: '/images/blog-iot.jpeg',
    tags: ['IoT', 'Edge AI', 'Integration'],
    category: 'Technology',
    order: null,
    createdAt: '2025-08-18T00:00:00Z'
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
  saveBlogPostsToStorage();
  return newPost;
}

export function updatePostOrder(orderedIds: string[]): BlogPost[] {
  orderedIds.forEach((id, index) => {
    const post = blogPostsData.find(p => p.id === id);
    if (post) {
      post.order = index;
    }
  });
  saveBlogPostsToStorage();
  return sortPosts(blogPostsData);
}

export function updatePost(id: string, updates: Partial<Omit<BlogPost, 'id' | 'createdAt'>>): BlogPost | undefined {
  const post = blogPostsData.find(p => p.id === id);
  if (post) {
    Object.assign(post, updates);
    saveBlogPostsToStorage();
  }
  return post;
}

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
