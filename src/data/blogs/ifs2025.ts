import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Edgeble at IFS 2024, Stockholm",
  slug: "ifc24",
  excerpt: "Sub-surface Bearing Inclusion inpsection at Industrial Future Summit",
  content: `
    <p class="text-lg mb-6">Industrial Future Summit 2024 in Stockholm brought together industry leaders to discuss the future of manufacturing and industrial automation. We were excited to participate and share our vision for edge AI in industrial applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Vehicle Battery Innovation</h3>
        <p class="mb-6">Our presentation focused on revolutionizing vehicle battery system welding inspection using edge AI, demonstrating how real-time AI analysis can improve quality control and safety in automotive manufacturing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Challenges in Vehicle Battery Welding</h3>
        <p class="mb-6">Commercial vehicle battery systems contain a growing number of laser welds that are crucial to their functionality. The assembly of these systems requires precise quality control to ensure safety and performance.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Solutions</h3>
        <p class="mb-6">By deploying AI at the edge, we eliminate delays, protect data privacy, and enable swift, actionable insights to maintain high-quality standards in battery manufacturing processes.</p>
      `,
  author: "Alberto Bianchi",
  date: "2024-10-15",
  readTime: "3 min read",
  image: "/images/ifs24.png",
  tags: ['IFS2024', 'IndustrialAI', 'PhysicalAI', 'Stockholm'],
  type: "blog",
  category: "Technology",
};

export default blog;
