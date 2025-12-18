import { BlogPost } from '../types/blog';

export let blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: 'Pitching at Moscow Startup Summit',
    slug: 'moscow-summit',
    excerpt: 'Edgeble pitched at the Moscow Startup Summit, highlighting the world\'s first Self-Learning Edge AI platform redefining autonomous intelligence.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> participated in the <strong>Moscow Startup Summit</strong>, presenting its <strong>Self-Learning Edge AI</strong> platform that enables on-device inference.</p>`,
    author: 'Jagan Teki',
    date: '2025-10-02',
    readTime: '3 min read',
    image: '/images/blog-moscow.jpeg',
    tags: ['Moscow', 'Startup', 'Agentic AI'],
    category: 'Events'
  },
  {
    id: 2,
    title: 'Edgeble Among Top 25 Global Startups Selected by Sber500',
    slug: 'sber500-selection',
    excerpt: 'Edgeble has been selected among the Top 25 startups worldwide by Sber500, recognizing innovation in Self-Learning Edge AI.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> has been recognized among the <strong>Top 25 Global Startups</strong> selected by <strong>Sber500</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-09-25',
    readTime: '2 min read',
    image: '/images/blog-sber500.png',
    tags: ['Sber500', 'Global Startups', 'Innovation'],
    category: 'Recognition'
  },
  {
    id: 3,
    title: 'Pitching at Venture Dock, YC',
    slug: 'venture-dock-yc',
    excerpt: 'Edgeble pitched its Agentic Edge AI platform at Venture Dock hosted by YC Startup in San Francisco.',
    content: `<p class="text-lg mb-6">Edgeble pitched its <strong>Agentic Edge AI</strong> technology at <strong>Venture Dock</strong> hosted by YC Startup in San Francisco.</p>`,
    author: 'Jagan Teki',
    date: '2025-08-15',
    readTime: '2 min read',
    image: '/images/venture-dock-yc.jpeg',
    tags: ['YC', 'Venture Dock', 'San Francisco'],
    category: 'Events'
  },
  {
    id: 4,
    title: 'InnoTrek 2025: Self-Learning Edge AI',
    slug: 'innotrek-2025',
    excerpt: 'Edgeble showcased self-learning edge AI solutions at InnoTrek 2025.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> participated at <strong>InnoTrek 2025</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-07-20',
    readTime: '3 min read',
    image: '/images/innotrek-2025.png',
    tags: ['InnoTrek', '2025', 'Edge AI'],
    category: 'Events'
  },
  {
    id: 5,
    title: 'EMVA Germany: Edge Computing Innovation',
    slug: 'emva-germany',
    excerpt: 'At EMVA Germany, Edgeble presented innovative solutions for edge vision.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> showcased edge computing solutions at <strong>EMVA Germany</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-06-10',
    readTime: '3 min read',
    image: '/images/emva-germany.jpeg',
    tags: ['EMVA', 'Germany', 'Vision AI'],
    category: 'Events'
  },
  {
    id: 6,
    title: 'Bosch FIT.Fest: Future of Industry and Technology',
    slug: 'bosch-fit-fest',
    excerpt: 'Edgeble participated in Bosch FIT.Fest, showcasing edge AI for industrial applications.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> presented at <strong>Bosch FIT.Fest</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-05-15',
    readTime: '3 min read',
    image: '/images/bosch-fit.png',
    tags: ['Bosch', 'Industry', 'AI'],
    category: 'Events'
  },
  {
    id: 7,
    title: 'Beyond Borders: Global AI Innovation Summit',
    slug: 'beyond-borders',
    excerpt: 'Edgeble joined Beyond Borders to discuss global AI innovation strategies.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> participated in the <strong>Beyond Borders</strong> summit.</p>`,
    author: 'Jagan Teki',
    date: '2025-04-22',
    readTime: '2 min read',
    image: '/images/beyond-borders.jpeg',
    tags: ['Global', 'Innovation', 'Summit'],
    category: 'Events'
  },
  {
    id: 8,
    title: 'Peak XV: AI Trends and Startup Future',
    slug: 'peak-xv',
    excerpt: 'Edgeble pitched with Peak XV Partners.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> pitched with <strong>Peak XV Partners</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-03-25',
    readTime: '4 min read',
    image: '/images/peak.png',
    tags: ['Peak XV', 'AI', 'Startups'],
    category: 'Events'
  },
  {
    id: 9,
    title: 'IDA Ireland: Edge Computing',
    slug: 'ida-ireland',
    excerpt: 'Edgeble showcased edge computing opportunities at IDA Ireland.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> presented at <strong>IDA Ireland</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-02-28',
    readTime: '2 min read',
    image: '/images/ida-ireland.png',
    tags: ['IDA', 'Ireland', 'Edge'],
    category: 'Events'
  },
  {
    id: 10,
    title: 'Nasscom AI Days',
    slug: 'nasscom-ai-days',
    excerpt: 'Edgeble at Nasscom AI Days.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> at <strong>Nasscom AI Days</strong>.</p>`,
    author: 'Jagan Teki',
    date: '2025-02-10',
    readTime: '3 min read',
    image: '/images/nasscom-ai.png',
    tags: ['Nasscom', 'AI', 'India'],
    category: 'Events'
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

export function deletePost(id: string): BlogPost[] {
  blogPostsData = blogPostsData.filter(p => p.id !== parseInt(id));
  saveBlogPostsToStorage();
  return blogPostsData;
}

export function addPost(post: BlogPost): BlogPost[] {
  post.id = Math.max(...blogPostsData.map(p => p.id), 0) + 1;
  post.createdAt = new Date().toISOString();
  blogPostsData.push(post);
  saveBlogPostsToStorage();
  return blogPostsData;
}

export function updatePost(id: string, updatedPost: Partial<BlogPost>): BlogPost | null {
  const post = blogPostsData.find(p => p.id === parseInt(id));
  if (post) {
    Object.assign(post, updatedPost);
    saveBlogPostsToStorage();
    return post;
  }
  return null;
}

export function getPostBySlug(slug: string): BlogPost | null {
  return blogPostsData.find(p => p.slug === slug) || null;
}

export function updatePostOrder(id: string, order: number): BlogPost[] {
  const post = blogPostsData.find(p => p.id === parseInt(id));
  if (post) {
    post.order = order;
    saveBlogPostsToStorage();
  }
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
      } else {
        saveBlogPostsToStorage();
      }
    } catch (error) {
      console.error('Error loading blog posts from storage:', error);
    }
  }
}

if (typeof window !== 'undefined') {
  loadBlogPostsFromStorage();
}
