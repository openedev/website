import { BlogPost } from '../types/blog';

export let blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: 'Pitching at Moscow Startup Summit',
    slug: 'moscow-summit',
    excerpt: 'Edgeble pitched at the Moscow Startup Summit, highlighting the world\'s first Self-Learning Edge AI platform redefining autonomous intelligence.',
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> participated in the <strong>Moscow Startup Summit</strong>, presenting its <strong>Self-Learning Edge AI</strong> platform that enables on-device inference, adaptation, and continuous learning without cloud dependency.</p>
    <p class="mb-6">The summit brought together global investors, innovators, and leaders in AI, positioning Edgeble at the forefront of the agentic edge revolution.</p>
    <p class="text-white/70 italic">#MoscowStartupSummit #AgenticAI #EdgeAI #Innovation</p>`,
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
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> has been recognized among the <strong>Top 25 Global Startups</strong> selected by <strong>Sber500</strong> for its innovation in <strong>Self-Learning Edge AI</strong> and its contributions to industrial autonomy and AI-driven edge systems.</p>
    <p class="text-white/70 italic">#Sber500 #GlobalStartups #EdgeAI #Innovation</p>`,
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
    content: `<p class="text-lg mb-6"><strong>Edgeble</strong> presented its <strong>Agentic Edge AI</strong> technology at <strong>Venture Dock hosted by YC Startup</strong> in San Francisco, showcasing how Edgeble\'s self-learning runtime accelerates industrial, logistics, and AI-driven deployments at the edge.</p>
    <p class="text-white/70 italic">#YCStartup #VentureDock #EdgeAI #AgenticAI</p>`,
    author: 'Jagan Teki',
    date: '2025-09-19',
    readTime: '2 min read',
    image: '/images/blog-venture-dock.jpg',
    tags: ['Venture Dock', 'YC', 'Agentic AI'],
    category: 'Events'
  },
  {
    id: 4,
    title: 'Edgeble at InnoTrek 2025 – USA DeepTech Showcase',
    slug: 'innotrek-2025',
    excerpt: 'Edgeble will showcase Self-Learning Edge AI technology at NASSCOM\'s InnoTrek 2025 USA, connecting with global investors, partners, and innovators.',
    content: `<p class="text-lg mb-6">We\'re thrilled to announce that <strong>Edgeble</strong> will be participating in <strong>InnoTrek 2025 – USA</strong>, organized by NASSCOM DeepTech. We\'ll showcase our <strong>Self-Learning Edge AI</strong> technology powering factories, surveillance, and aerospace systems — and introduce our vision for the <strong>Agentic Edge AI NPU</strong>.</p>
    <p class="mb-6">We look forward to engaging with <strong>global investors, partners, and innovators</strong> to bring the next wave of AI closer to where the world works.</p>
    <p class="mb-6">Key pitch sessions include:</p>
    <ul class="list-disc list-inside mb-6">
      <li>Capgemini – San Francisco</li>
      <li>Venture Dock – San Francisco</li>
      <li>Dallas Venture Capital – Dallas</li>
      <li>Mphasis – NYC</li>
      <li>Uber Technologies – NYC</li>
    </ul>
    <p class="text-white/70 italic">#InnoTrek2025 #NASSCOM #DeepTech #AgenticAI #EdgeAI #Innovation #GlobalExpansion</p>`,
    author: 'Jagan Teki',
    date: '2025-09-04',
    readTime: '4 min read',
    image: '/images/blog-innotrek.jpeg',
    tags: ['InnoTrek', 'DeepTech', 'EdgeAI', 'NASSCOM'],
    category: 'Events'
  },
  {
    id: 5,
    title: 'Edgeble Selected to Present at 8th EMVA Forum, Germany',
    slug: 'emva-germany',
    excerpt: 'Edgeble has been selected to present and exhibit a poster at the 8th European Machine Vision Forum (EMVA) in Germany on Agentic Edge AI for Imaging the Invisible in Industrial Vision Systems.',
    content: `<p class="text-lg mb-6">Edgeble has been selected to present and exhibit a poster at the <strong>8th European Machine Vision Forum (EMVA)</strong> in Germany, highlighting our work on <strong>Agentic Edge AI for Imaging the Invisible in Industrial Vision Systems</strong>.</p>
    <p class="mb-6">This recognition marks a major step forward for Edgeble\'s Self-Learning Edge AI platform — demonstrating how edge-based intelligence can reveal insights hidden in industrial vision systems.</p>
    <p class="text-white/70 italic">#EMVA #EMVF #MachineVision #AgenticAI #EdgeAI #IndustrialAI</p>`,
    author: 'Jagan Teki',
    date: '2025-08-02',
    readTime: '3 min read',
    image: '/images/blog-emva.jpg',
    tags: ['EMVA', 'Machine Vision', 'Agentic AI'],
    category: 'Events'
  },
  {
    id: 6,
    title: 'Showcase at Bosch Global FIT.Fest\'25',
    slug: 'fit-fest25',
    excerpt: 'Edgeble showcased its Edge AI accelerator modules at Bosch Global FIT.Fest\'25, a flagship technical event bringing together industry leaders and innovators.',
    content: `<p class="text-lg mb-6">On behalf of the entire team at BGSW, we extend our heartfelt thanks for your organization\'s participation in Marketplace Stalls at our flagship Technical Event, FIT.Fest\'25.</p>
    <p class="mb-6">Your insights and expertise greatly enriched the event, and the feedback we received from attendees has been overwhelmingly positive. We truly appreciate the time and effort dedicated to preparing and presenting. Your contribution played a significant role in making FIT.Fest\'25 a success.</p>
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Event Highlights</h3>
    <p class="mb-6">FIT.Fest\'25 brought together industry leaders, innovators, and technology enthusiasts to showcase cutting-edge solutions and foster collaboration in the automotive and technology sectors.</p>`,
    author: 'Jagan Teki',
    date: '2025-06-19',
    readTime: '3 min read',
    image: '/images/blog-bosch.png',
    tags: ['Bosch', 'FIT.Fest', 'Marketplace'],
    category: 'Events'
  },
  {
    id: 7,
    title: 'Pitching at Beyond Borders: The Era of Agentic AI',
    slug: 'beyond-borders',
    excerpt: 'T-Hub, in strategic partnership with EY, hosted a convergence of visionary founders and global tech leaders to explore agentic AI innovation.',
    content: `<p class="text-lg mb-6">T-Hub, in strategic partnership with EY, hosted "Beyond Borders: The Era of Agentic AI," bringing together startup builders and enterprise leaders to discuss autonomous intelligence.</p>
    <p class="mb-6">We brought startup builders and enterprise leaders into one room to talk honestly about what it really takes to make AI work inside large organizations—and how agentic platforms are shifting what\'s possible.</p>
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Future of Autonomous Intelligence</h3>
    <p class="mb-6">The event showcased how agentic AI is moving beyond traditional automation to create truly autonomous systems that can reason, adapt, and make decisions independently.</p>`,
    author: 'Jagan Teki',
    date: '2025-06-02',
    readTime: '5 min read',
    image: '/images/blog-ey.png',
    tags: ['Agentic AI', 'EY Partnership', 'T-Hub'],
    category: 'Events'
  },
  {
    id: 8,
    title: 'Pitching at Peak XV, Rajan Anandan',
    slug: 'peak-xv',
    excerpt: 'Edgeble pitched with Rajan Anandan from Peak XV Partners at T-Hub, discussing AI trends and the future of startups in India.',
    content: `<p class="text-lg mb-6">With T-Hub, Edgeble had the honor to pitch alongside Rajan Anandan, Managing Director at Peak XV Partners. From AI trends to the future of startups in India, the insights shared were as sharp as they were inspiring.</p>
    <p class="mb-6">It was great to see Hyderabad\'s incredible founder community show up on short notice, bringing curiosity, energy, and thoughtful questions.</p>
    <h3 class="text-2xl font-bold text-white mb-4 mt-8">Insights from Peak XV</h3>
    <p class="mb-6">Rajan shared valuable perspectives on the evolving startup ecosystem in India, highlighting the growing importance of AI and deep tech innovations.</p>`,
    author: 'Jagan Teki',
    date: '2025-03-25',
    readTime: '4 min read',
    image: '/images/peak.png',
    tags: ['Peak XV', 'Rajan Anandan', 'T-Hub'],
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
        // Storage is empty on first load, keep default posts
        saveBlogPostsToStorage();
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
