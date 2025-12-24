import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
    title: 'Together: Mphasis <> Edgeble',
    slug: 'mphasis',
    excerpt: 'Edgeble listed Mphasis startup colloboration',
    content: `
    <p class="text-lg mb-6"><strong>Capgemini</strong> is a global leader in IT services and consulting. <strong>Edgeble</strong> had the privilege to present our Self-Learning Edge AI platform to Capgemini\'s innovation and technology leadership teams.</p>
    <p class="mb-6">The engagement provided valuable insights into how global enterprises are leveraging edge AI to transform their operations and deliver enhanced solutions to their clients.</p>
    <p class="text-white/70 italic">#Capgemini #EnterpriseAI #EdgeAI #DigitalTransformation</p>
    `,
    author: 'Jagan Teki',
    date: '2024-12-10',
    readTime: '3 min read',
    image: '/images/mphasis.jpeg',
    tags: ['Mphasis', 'Enterprise', 'Edge AI'],
    type: "news",
    category: "Industry",
};

export default blog;
