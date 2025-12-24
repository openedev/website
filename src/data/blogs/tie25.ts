import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: 'Edgeble as TiE50 by TiEHyd',
  slug: 'tie-50',
  excerpt: 'Why Edgeble is TOP50 by TiE',
  content: `
    <p class="text-lg mb-6"><strong>TiE 50</strong> is TiE\'s flagship program recognizing the 50 most promising startups in India. <strong>Edgeble</strong> had the opportunity to showcase our Self-Learning Edge AI platform to this elite group of entrepreneurs.</p>
    <p class="mb-6">The program connected us with some of India\'s most innovative founders who are shaping the future of technology and business.</p>
    <p class="text-white/70 italic">#TiE50 #TopStartups #EdgeAI #Entrepreneurship</p>
    `,
  author: 'Jagan Teki',
  date: '2024-12-08',
  readTime: '3 min read',
  image: '/images/tie.jpg',
  tags: ['TiE', 'Top Startups', 'Edge AI'],
  type: "news",
  category: 'Events'
};

export default blog;
