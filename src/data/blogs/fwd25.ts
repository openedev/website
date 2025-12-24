import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: 'Pitching at Deloitte FWD 2025',
  slug: 'fwd25',
  excerpt: 'Edgeble Self-learning Edge Intelligence at FWD25',
  content: `
    <p class="text-lg mb-6"><strong>Deloitte</strong> is one of the largest professional services firms globally. <strong>Edgeble</strong> had the honor to present our Self-Learning Edge AI platform to Deloitte\'s technology and innovation teams.</p>
    <p class="mb-6">The engagement explored how edge AI is enabling organizations to modernize their infrastructure, improve operational efficiency, and create new business opportunities in an increasingly distributed world.</p>
    <p class="text-white/70 italic">#Deloitte #ProfessionalServices #EdgeAI #DigitalInnovation</p>
    `,
  author: 'Jagan Teki',
  date: '2024-12-11',
  readTime: '3 min read',
  image: '/images/fwd.JPG',
  tags: ['Deloitte', 'FWD', 'Edge AI'],
  type: "news",
  category: 'Events'
};

export default blog;
