import React from 'react';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Linkedin, Twitter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPostPage = () => {
  const { slug } = useParams();

  const blogPosts = {
    'moscow-summit': {
      id: 1,
      title: 'Pitching at Moscow Startup Summit',
      excerpt: 'Edgeble pitched at the Moscow Startup Summit, highlighting the world’s first Self-Learning Edge AI platform redefining autonomous intelligence.',
      content: `
        <p class="text-lg mb-6">Participated in the Moscow Startup Summit, presenting its Self-Learning Edge AI platform that enables on-device inference, adaptation, and continues learning without cloud dependency.</p>
        
        <p class="mb-6">Your insights and expertise greatly enriched the event, and the feedback we received from attendees has been overwhelmingly positive. We truly appreciate the time and effort You and Your team dedicated to preparing and presenting in the Stall. Your contribution played a significant role in making FIT.Fest'25 a success, and we are grateful for your support.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Event Highlights:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Flagship Technical Event by Bosch Global Software Technologies</li>
            <li>• Marketplace Stalls showcasing innovative solutions</li>
            <li>• Positive feedback from industry attendees</li>
            <li>• Collaboration with leading technology companies</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Event Highlights</h3>
        <p class="mb-6">FIT.Fest'25 brought together industry leaders, innovators, and technology enthusiasts to showcase cutting-edge solutions and foster collaboration in the automotive and technology sectors. The event served as a platform for demonstrating the latest advancements in edge AI and automotive technologies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble's Contribution</h3>
        <p class="mb-6">Our participation in the Marketplace Stalls provided an excellent opportunity to demonstrate our Edge AI accelerator modules and engage with Bosch's engineering teams and partners. The showcase highlighted our commitment to advancing edge AI technologies in automotive and industrial applications.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The collaboration between innovative startups and established industry leaders like Bosch is crucial for driving technological advancement in the automotive sector." - Event Participant
        </blockquote>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Collaborations</h3>
        <p class="mb-6">The positive reception at FIT.Fest'25 opens doors for future collaborations and partnerships in the automotive technology space, particularly in areas where edge AI can enhance vehicle performance and safety.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2025-10-02',
      readTime: '2 min read',
      image: '/images/blog-bosch.png',
      tags: ['Moscow', 'Startup', 'Agenti AI'],
      category: 'Events'
    },

    'sber500-selection': {
    id: 2,
    title: 'Edgeble Among Top 25 Global Startups Selected by Sber500',
    excerpt: 'Edgeble has been selected among the Top 25 startups worldwide by Sber500, recognizing innovation in Self-Learning Edge AI.',
    content: `
      <p class="text-lg mb-6"><strong>Edgeble</strong> has been recognized among the <strong>Top 25 Global Startups</strong> selected by <strong>Sber500</strong> for its innovation in <strong>Self-Learning Edge AI</strong> and its contributions to industrial autonomy and AI-driven edge systems.</p>
      <p class="text-white/70 italic">#Sber500 #GlobalStartups #EdgeAI #Innovation</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-25',
    readTime: '2 min read',
    image: '/images/blog-sber500.png',
    tags: ['Sber500', 'Global Startups', 'Innovation'],
    category: 'Recognition',
  },
  'venture-dock-yc': {
    id: 3,
    title: 'Pitching at Venture Dock, YC',
    excerpt: 'Edgeble pitched its Agentic Edge AI platform at Venture Dock hosted by YC Startup in San Francisco.',
    content: `
      <p class="text-lg mb-6"><strong>Edgeble</strong> presented its <strong>Agentic Edge AI</strong> technology at <strong>Venture Dock hosted by YC Startup</strong> in San Francisco, showcasing how Edgeble’s self-learning runtime accelerates industrial, logistics, and AI-driven deployments at the edge.</p>
      <p class="text-white/70 italic">#YCStartup #VentureDock #EdgeAI #AgenticAI</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-19',
    readTime: '2 min read',
    image: '/images/blog-venture-dock.jpg',
    tags: ['Venture Dock', 'YC', 'Agentic AI'],
    category: 'Events',
  },
  'innotrek-2025': {
    id: 4,
    title: 'Edgeble at InnoTrek 2025 – USA DeepTech Showcase',
    excerpt: 'Edgeble will showcase Self-Learning Edge AI technology at NASSCOM’s InnoTrek 2025 USA, connecting with global investors, partners, and innovators.',
    content: `
      <p class="text-lg mb-6">We’re thrilled to announce that <strong>Edgeble</strong> will be participating in <strong>InnoTrek 2025 – USA</strong>, organized by NASSCOM DeepTech. We'll showcase our <strong>Self-Learning Edge AI</strong> technology powering factories, surveillance, and aerospace systems — and introduce our vision for the <strong>Agentic Edge AI NPU</strong>.</p>
      <p class="mb-6">We look forward to engaging with <strong>global investors, partners, and innovators</strong> to bring the next wave of AI closer to where the world works.</p>
      <p class="mb-6">Key pitch sessions include:</p>
      <ul class="list-disc list-inside mb-6">
        <li>Capgemini – San Francisco</li>
        <li>Venture Dock – San Francisco</li>
        <li>Dallas Venture Capital – Dallas</li>
        <li>Mphasis – NYC</li>
        <li>Uber Technologies – NYC</li>
      </ul>
      <p class="text-white/70 italic">#InnoTrek2025 #NASSCOM #DeepTech #AgenticAI #EdgeAI #Innovation #GlobalExpansion</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-04',
    readTime: '4 min read',
    image: '/images/blog-innotrek.jpeg',
    tags: ['InnoTrek', 'DeepTech', 'EdgeAI', 'NASSCOM'],
    category: 'Events',
  },
  'emva-germany': {
    id: 5,
    title: 'Edgeble Selected to Present at 8th EMVA Forum, Germany',
    excerpt: 'Edgeble has been selected to present and exhibit a poster at the 8th European Machine Vision Forum (EMVA) in Germany on Agentic Edge AI for Imaging the Invisible in Industrial Vision Systems.',
    content: `
      <p class="text-lg mb-6">Edgeble has been selected to present and exhibit a poster at the <strong>8th European Machine Vision Forum (EMVA)</strong> in Germany, highlighting our work on <strong>Agentic Edge AI for Imaging the Invisible in Industrial Vision Systems</strong>.</p>
      <p class="mb-6">This recognition marks a major step forward for Edgeble’s Self-Learning Edge AI platform — demonstrating how edge-based intelligence can reveal insights hidden in industrial vision systems.</p>
      <p class="text-white/70 italic">#EMVA #EMVF #MachineVision #AgenticAI #EdgeAI #IndustrialAI</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-08-02',
    readTime: '3 min read',
    image: '/images/blog-emva.jpg',
    tags: ['EMVA', 'Machine Vision', 'Agentic AI'],
    category: 'Events',
  },    
    'fit-fest25': {
      id: 6,
      title: 'Showcase at Bosch Global FIT.Fest\'25',
      excerpt: 'On behalf of the entire team at BGSW, I would like to extend our heartfelt thanks for your organization\'s participation in Marketplace Stalls at our flagship Technical Event, FIT.Fest\'25, last week.',
      content: `
        <p class="text-lg mb-6">On behalf of the entire team at BGSW, I would like to extend our heartfelt thanks for your organization's participation in Marketplace Stalls at our flagship Technical Event, FIT.Fest'25, last week.</p>
        
        <p class="mb-6">Your insights and expertise greatly enriched the event, and the feedback we received from attendees has been overwhelmingly positive. We truly appreciate the time and effort You and Your team dedicated to preparing and presenting in the Stall. Your contribution played a significant role in making FIT.Fest'25 a success, and we are grateful for your support.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Event Highlights:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Flagship Technical Event by Bosch Global Software Technologies</li>
            <li>• Marketplace Stalls showcasing innovative solutions</li>
            <li>• Positive feedback from industry attendees</li>
            <li>• Collaboration with leading technology companies</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Event Highlights</h3>
        <p class="mb-6">FIT.Fest'25 brought together industry leaders, innovators, and technology enthusiasts to showcase cutting-edge solutions and foster collaboration in the automotive and technology sectors. The event served as a platform for demonstrating the latest advancements in edge AI and automotive technologies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble's Contribution</h3>
        <p class="mb-6">Our participation in the Marketplace Stalls provided an excellent opportunity to demonstrate our Edge AI accelerator modules and engage with Bosch's engineering teams and partners. The showcase highlighted our commitment to advancing edge AI technologies in automotive and industrial applications.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The collaboration between innovative startups and established industry leaders like Bosch is crucial for driving technological advancement in the automotive sector." - Event Participant
        </blockquote>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Collaborations</h3>
        <p class="mb-6">The positive reception at FIT.Fest'25 opens doors for future collaborations and partnerships in the automotive technology space, particularly in areas where edge AI can enhance vehicle performance and safety.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2025-06-19',
      readTime: '3 min read',
      image: '/images/blog-bosch.png',
      tags: ['Bosch', 'FIT.Fest', 'Marketplace'],
      category: 'Events'
    },
    'beyond-borders': {
      id: 7,
      title: 'Pitching at Beyond Borders: The Era of Agentic AI',
      excerpt: 'T-Hub, in strategic partnership with EY, hosted a convergence of visionary founders and global tech leaders to explore how autonomous intelligence is poised to redefine the future of industries.',
      content: `
        <p class="text-lg mb-6">T-Hub, in strategic partnership with EY, hosted a convergence of visionary founders and global tech leaders to explore how autonomous intelligence is poised to redefine the future of industries.</p>
        
        <p class="mb-6">Our recent event, "Beyond Borders: The Era of Agentic AI," was a step in that direction.</p>
        
        <p class="mb-6">We brought startup builders and enterprise leaders into one room to talk honestly about what it really takes to make AI work inside large organizations—and how agentic platforms are shifting what's possible.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Event Highlights:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Convergence of startup founders and enterprise leaders</li>
            <li>• Strategic partnership between T-Hub and EY</li>
            <li>• Focus on autonomous intelligence and agentic AI</li>
            <li>• Real-world implementation challenges and solutions</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Future of Autonomous Intelligence</h3>
        <p class="mb-6">The event showcased how agentic AI is moving beyond traditional automation to create truly autonomous systems that can reason, adapt, and make decisions independently. This represents a fundamental shift in how we approach AI implementation in enterprise environments.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Transformation</h3>
        <p class="mb-6">Enterprise leaders shared insights on how agentic AI platforms are transforming their operations, from supply chain optimization to customer service automation. The discussions revealed both the immense potential and the practical challenges of implementing autonomous AI systems at scale.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The convergence of startup innovation and enterprise expertise is crucial for realizing the full potential of agentic AI in transforming industries." - Event Participant
        </blockquote>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Key Takeaways</h3>
        <p class="mb-6">The event emphasized the importance of collaboration between innovative startups and established enterprises to successfully implement agentic AI solutions. It highlighted the need for robust frameworks, ethical considerations, and practical deployment strategies.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2025-06-02',
      readTime: '5 min read',
      image: '/images/blog-ey.png',
      tags: ['Agentic AI', 'EY Partnership', 'T-Hub'],
      category: 'Events'
    },
    'peak-xv': {
      id: 8,
      title: 'Pitching at Peak XV, Rajan Anandan',
      excerpt: 'With T-Hub, Edgeble is honored to pitch with Rajan Anandan, Managing Director at Peak XV Partners (formerly Sequoia Capital India & SEA). From AI trends to the future of startups in India, the insights shared were as sharp as they were inspiring.',
      content: `
        <p class="text-lg mb-6">With T-Hub, Edgeble is honored to pitch with Rajan Anandan, Managing Director at Peak XV Partners (formerly Sequoia Capital India & SEA). From AI trends to the future of startups in India, the insights shared were as sharp as they were inspiring.</p>
        
        <p class="mb-6">It was great to see Hyderabad's incredible founder community show up on short notice, bringing curiosity, energy, and thoughtful questions.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Event Highlights:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Fireside chat with Rajan Anandan, Managing Director at Peak XV Partners</li>
            <li>• Insights on AI trends and startup ecosystem in India</li>
            <li>• Engaged participation from Hyderabad's founder community</li>
            <li>• Strategic discussions on the future of technology startups</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Insights from Peak XV</h3>
        <p class="mb-6">Rajan Anandan shared valuable perspectives on the evolving startup ecosystem in India, highlighting the growing importance of AI and deep tech innovations in driving the next wave of entrepreneurship. His insights covered market trends, investment patterns, and the unique opportunities available to Indian startups in the global market.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Hyderabad's Founder Community</h3>
        <p class="mb-6">The event showcased the vibrant and engaged founder community in Hyderabad, with entrepreneurs from various sectors coming together to learn and network despite the short notice. The quality of questions and discussions demonstrated the depth of expertise and ambition within the local startup ecosystem.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The energy and curiosity of Hyderabad's founder community is truly inspiring. These are the entrepreneurs who will shape the future of Indian technology." - Event Participant
        </blockquote>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future of AI Startups</h3>
        <p class="mb-6">The discussion emphasized the critical role that AI and edge computing will play in the next generation of successful startups, particularly in addressing real-world problems with scalable, efficient solutions.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2025-03-25',
      readTime: '4 min read',
      image: 'images/peak.png',
      tags: ['Peak XV', 'Rajan Anandan', 'T-Hub'],
      category: 'Events'
    },
    'ida-ireland': {
      id: 9,
      title: 'Speaking at IDA Ireland Startup Roundtable',
      excerpt: 'Excited to have been part of the IDA Ireland Startup Roundtable hosted at T-Hub. It was a great opportunity to share insights on startup innovation, global collaboration, and the growing synergy between India and Ireland in the tech and business space.',
      content: `
        <p class="text-lg mb-6">We were honored to participate in the IDA Ireland Startup Roundtable, a prestigious event that brought together innovative startups and industry leaders to discuss the future of technology collaboration between India and Ireland.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Key Discussion Points</h3>
        <p class="mb-6">The roundtable focused on emerging technologies, cross-border partnerships, and the role of AI in driving innovation across industries. Our CEO shared insights on how edge AI is transforming manufacturing and industrial automation.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Event Highlights:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Cross-border technology partnerships</li>
            <li>• AI innovation in manufacturing</li>
            <li>• Startup ecosystem development</li>
            <li>• Future of India-Ireland collaboration</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Building Bridges</h3>
        <p class="mb-6">The event highlighted the growing synergy between Indian innovation and Irish business expertise, creating opportunities for meaningful partnerships in the AI and technology sectors.</p>
        
        <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
          "The collaboration between Indian startups and Irish enterprises represents a powerful combination of innovation and business acumen that can drive global technology advancement." - Event Moderator
        </blockquote>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2024-03-30',
      readTime: '4 min read',
      image: 'images/ida.png',
      tags: ['Roundtable', 'Partnership', 'Innovation'],
      category: 'Events'
    },
    'nasscom-mumbai': {
      id: 10,
      title: 'Speaking at Nasscom AI Days, Mumbai',
      excerpt: 'Edgeble AI was proud to be part of NASSCOM AI Days held in Mumbai — an event that brought together India\'s top minds in artificial intelligence, innovation, and enterprise technology.',
      content: `
        <p class="text-lg mb-6">NASSCOM AI Days Mumbai was a landmark event that showcased India's leadership in artificial intelligence and emerging technologies. We were privileged to present our vision for edge AI and its transformative potential.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Leadership</h3>
        <p class="mb-6">The event featured presentations from leading AI companies, researchers, and innovators, highlighting India's growing influence in the global AI landscape.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Revolution</h3>
        <p class="mb-6">Our presentation focused on how edge AI is revolutionizing industries by bringing intelligence closer to data sources, reducing latency, and enabling real-time decision making.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">500+</div>
            <div class="text-white/70">Attendees</div>
          </div>
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">50+</div>
            <div class="text-white/70">AI Companies</div>
          </div>
          <div class="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div class="text-3xl font-bold text-white mb-2">3</div>
            <div class="text-white/70">Days of Innovation</div>
          </div>
        </div>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2024-03-25',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Conference', 'AI', 'Mumbai'],
      category: 'Events'
    },
    'thub-enclave': {
      id: 11,
      title: 'Edgeble at T-Hub Innovative Enclave 2025',
      excerpt: 'Edgeble AI was proud to participate in the T-Hub Innovative Enclave 2025 — a convergence of India\'s most forward-thinking startups and ecosystem leaders.',
      content: `
        <p class="text-lg mb-6">The T-Hub Innovative Enclave 2025 brought together the most promising startups and technology leaders from across India. As participants, we had the opportunity to showcase our edge AI solutions and connect with fellow innovators.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Innovation Showcase</h3>
        <p class="mb-6">The event featured live demonstrations of cutting-edge technologies, with our EdgeGPT platform receiving significant attention from investors and industry partners.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Ecosystem Building</h3>
        <p class="mb-6">The enclave emphasized the importance of building strong startup ecosystems and fostering collaboration between technology companies, investors, and government initiatives.</p>
      `,
      author: 'Srinivas Patnaik',
      authorRole: 'Strategy Analyst',
      authorImage: '/images/srinivas.png',
      date: '2024-12-03',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['T-Hub', 'Innovation', 'Startup'],
      category: 'Events'
    },
    'cie-avishkar': {
      id: 12,
      title: 'Speaking at CIE-IIIT Avishkar 2024',
      excerpt: 'About TinyML Taipei 2024, About Edgeble AI Participation, End-to-End Edge AI Lifecycle.',
      content: `
        <p class="text-lg mb-6">The CIE-IIIT Avishkar 2024 conference provided an excellent platform to discuss the latest developments in TinyML and edge AI technologies. Our presentation covered the complete lifecycle of edge AI development and deployment.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">TinyML Revolution</h3>
        <p class="mb-6">We explored how TinyML is enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded systems applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">End-to-End Solutions</h3>
        <p class="mb-6">Our talk emphasized the importance of considering the entire AI lifecycle, from model development and optimization to deployment and monitoring at the edge.</p>
      `,
      author: 'Chakrish Krishtam',
      authorRole: 'AI/ML Engineer',
      authorImage: '/images/srinivas.png',
      date: '2024-02-24',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TinyML', 'Conference', 'AI Lifecycle'],
      category: 'Technology'
    },
    'aij-moscow': {
      id: 13,
      title: 'Speaking at AIJ Moscow 2024',
      excerpt: 'The Future of AI Acceleration: Transforming Edge Computing for Tomorrow\'s Industries. Speaking on the future of AI acceleration and how edge computing is transforming industries.',
      content: `
        <p class="text-lg mb-6">AIJ Moscow 2024 provided an exceptional platform to discuss the future of AI acceleration and its impact on transforming edge computing for tomorrow's industries. Our presentation explored cutting-edge developments in AI hardware and software optimization.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">AI Acceleration Trends</h3>
        <p class="mb-6">We discussed the latest trends in AI acceleration, including specialized neural processing units, model optimization techniques, and the shift towards edge-first AI architectures.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Topics Covered:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Neural Processing Unit architectures</li>
            <li>• Model optimization for edge deployment</li>
            <li>• Real-time AI inference capabilities</li>
            <li>• Industry transformation through AI</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Transformation</h3>
        <p class="mb-6">The presentation highlighted how AI acceleration is enabling new use cases across industries, from autonomous vehicles to smart manufacturing and healthcare applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Outlook</h3>
        <p class="mb-6">We shared our vision for the future of edge AI, emphasizing the importance of model-first design and the role of specialized hardware in enabling widespread AI adoption.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2024-02-08',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI Acceleration', 'Moscow', 'Edge Computing'],
      category: 'Technology'
    },
    'deeptech-gfst': {
      id: 14,
      title: 'Edgeble at DeepTech, GFST 2024 India',
      excerpt: 'Pushing the Limits of Edge AI: 60FPS Live YOLOv5 Object Detection on Edgeble AI\'s 6TOPS Edge AI Accelerator Modules. Demonstrating real-time AI capabilities at the edge.',
      content: `
        <p class="text-lg mb-6">At DeepTech GFST 2024 India, we demonstrated the incredible capabilities of our edge AI accelerator modules by showcasing 60FPS live YOLOv5 object detection running on our 6TOPS Edge AI Accelerator.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-Time Performance</h3>
        <p class="mb-6">Our demonstration proved that edge AI can deliver real-time performance for demanding computer vision applications, achieving 60 frames per second object detection without compromising accuracy.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Performance Metrics:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• 60 FPS real-time object detection</li>
            <li>• YOLOv5 model optimization</li>
            <li>• 6 TOPS processing power</li>
            <li>• Low latency inference</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Technical Innovation</h3>
        <p class="mb-6">The 6TOPS Edge AI Accelerator represents a breakthrough in edge computing, delivering unprecedented performance in a compact, power-efficient form factor suitable for industrial deployments.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Impact</h3>
        <p class="mb-6">This level of performance opens new possibilities for real-time AI applications in manufacturing, automotive, and security sectors where low latency and high accuracy are critical.</p>
      `,
      author: 'Alberto Bianchi',
      authorRole: 'Hardware Engineer',
      authorImage: '/images/srinivas.png',
      date: '2024-01-26',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['DeepTech', 'YOLOv5', 'Real-time AI'],
      category: 'Technology'
    },
    'sponsor-deeptech': {
      id: 15,
      title: 'Edgeble Sponsor DeepTech, GFST 2024 India',
      excerpt: 'We would like to express our sincere gratitude to our sponsors and event partners. A big Thank you to our Lanyard Sponsor! Edgeble AI supporting the DeepTech ecosystem.',
      content: `
        <p class="text-lg mb-6">We were proud to sponsor DeepTech GFST 2024 India, demonstrating our commitment to supporting the deep technology ecosystem and fostering innovation in AI and emerging technologies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Supporting Innovation</h3>
        <p class="mb-6">As a lanyard sponsor, we had the opportunity to connect with researchers, entrepreneurs, and technology leaders who are driving the future of deep tech in India.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Ecosystem Building</h3>
        <p class="mb-6">Our sponsorship reflects our belief in the importance of building strong technology ecosystems that support innovation, collaboration, and knowledge sharing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Community Engagement</h3>
        <p class="mb-6">Events like GFST provide valuable platforms for the deep tech community to come together, share insights, and explore new opportunities for collaboration and growth.</p>
      `,
      author: 'Srinivas Patnaik',
      authorRole: 'Strategy Analyst',
      authorImage: '/images/srinivas.png',
      date: '2024-01-12',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/159298/gear-machine-mechanical-mechanical-engineering-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Sponsorship', 'DeepTech', 'Community'],
      category: 'Events'
    },
    'tinyml-taipei': {
      id: 16,
      title: 'Edgeble at TinyML Taipei 2024 Innovation',
      excerpt: 'End-to-End Edge AI Lifecycle with Real-Time, On-Device AI. Powered by EdgeGPT Pre-trained Edge AI Accelerators. Showcasing our comprehensive edge AI solutions.',
      content: `
        <p class="text-lg mb-6">TinyML Taipei 2024 Innovation Showcase provided the perfect venue to demonstrate our end-to-end edge AI lifecycle capabilities, powered by EdgeGPT pre-trained edge AI accelerators.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Complete AI Lifecycle</h3>
        <p class="mb-6">We showcased how our platform supports the entire AI development lifecycle, from model training and optimization to deployment and monitoring on edge devices.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Lifecycle Components:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Model development and training</li>
            <li>• Edge optimization and quantization</li>
            <li>• Real-time deployment</li>
            <li>• Performance monitoring</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Real-Time Capabilities</h3>
        <p class="mb-6">Our demonstration highlighted real-time, on-device AI processing capabilities that enable immediate decision-making without cloud dependencies.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">TinyML Innovation</h3>
        <p class="mb-6">The event emphasized the growing importance of TinyML in enabling AI capabilities on resource-constrained devices, opening new possibilities for IoT and embedded applications.</p>
      `,
      author: 'Chakrish Krishtam',
      authorRole: 'AI/ML Engineer',
      authorImage: '/images/srinivas.png',
      date: '2024-11-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TinyML', 'Taipei', 'Edge AI Lifecycle'],
      category: 'Technology'
    },
    'industrial-summit': {
      id: 17,
      title: 'Industrial Future Summit 2024',
      excerpt: 'Revolutionising Vehicle Battery System Welding Inspection with Edge AI. We\'re participating! Industrial Future Summit - The leading event for Future Builders in Stockholm.',
      content: `
        <p class="text-lg mb-6">Industrial Future Summit 2024 in Stockholm brought together industry leaders to discuss the future of manufacturing and industrial automation. We were excited to participate and share our vision for edge AI in industrial applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Vehicle Battery Innovation</h3>
        <p class="mb-6">Our presentation focused on revolutionizing vehicle battery system welding inspection using edge AI, demonstrating how real-time AI analysis can improve quality control and safety in automotive manufacturing.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Challenges in Vehicle Battery Welding</h3>
        <p class="mb-6">Commercial vehicle battery systems contain a growing number of laser welds that are crucial to their functionality. The assembly of these systems requires precise quality control to ensure safety and performance.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Challenges:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Precision welding quality control</li>
            <li>• Real-time defect detection</li>
            <li>• Safety compliance requirements</li>
            <li>• Production line efficiency</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edge AI Solutions</h3>
        <p class="mb-6">By deploying AI at the edge, we eliminate delays, protect data privacy, and enable swift, actionable insights to maintain high-quality standards in battery manufacturing processes.</p>
      `,
      author: 'Alberto Bianchi',
      authorRole: 'Hardware Engineer',
      authorImage: '/images/srinivas.png',
      date: '2024-10-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Battery Systems', 'Quality Control'],
      category: 'Industry'
    },
    'ai-hardware-summit': {
      id: 18,
      title: 'Edgeble at AI Hardware and Edge AI Summit 2024',
      excerpt: 'Summary of our participation at Edge AI For Innovation & Impact.',
      content: `
        <p class="text-lg mb-6">The AI Hardware and Edge AI Summit 2024 brought together leading innovators in AI hardware design and edge computing solutions. Our participation highlighted the critical role of specialized hardware in enabling widespread AI adoption at the edge.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Revolutionary Design</h3>
        <p class="mb-6">Our EdgeGPT NPU represents a breakthrough in edge AI processing, featuring a novel architecture designed specifically for real-world deployment scenarios. The heterogeneous computing architecture combines specialized AI processing units with traditional CPU cores, optimized for different types of AI workloads.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Innovations:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Heterogeneous computing architecture</li>
            <li>• Specialized AI processing units</li>
            <li>• Power-efficient design</li>
            <li>• Real-world deployment optimization</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Performance Metrics</h3>
        <p class="mb-6">With up to 32 TOPS of AI processing power while maintaining exceptional power efficiency, our NPU delivers the performance needed for demanding edge applications across various industries.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Impact</h3>
        <p class="mb-6">The summit emphasized how specialized AI hardware is becoming essential for enabling real-time AI applications in manufacturing, automotive, healthcare, and other critical sectors where latency and reliability are paramount.</p>
      `,
      author: 'Alberto Bianchi',
      authorRole: 'Hardware Engineer',
      authorImage: '/images/srinivas.png',
      date: '2024-10-09',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NPU', 'Architecture', 'Performance'],
      category: 'Technology'
    },
    'mobile-congress': {
      id: 19,
      title: 'Edgeble at Indian Mobile Congress 2023',
      excerpt: 'Summary of our participation at Indian Mobile Congress 2023.',
      content: `
        <p class="text-lg mb-6">The Indian Mobile Congress 2023 provided an excellent platform to showcase how edge AI is transforming mobile and telecommunications infrastructure. Our participation highlighted the critical role of edge computing in enabling next-generation mobile applications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Mobile Edge Computing</h3>
        <p class="mb-6">We demonstrated how our edge AI solutions can be integrated into mobile network infrastructure to enable real-time AI processing at the network edge, reducing latency and improving user experiences.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Applications:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• 5G network optimization</li>
            <li>• Real-time video analytics</li>
            <li>• IoT device management</li>
            <li>• Network security enhancement</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">5G and Edge AI Convergence</h3>
        <p class="mb-6">The convergence of 5G networks and edge AI creates unprecedented opportunities for mobile applications that require ultra-low latency and high-bandwidth processing capabilities.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future of Mobile AI</h3>
        <p class="mb-6">Our presentation explored how edge AI will enable new categories of mobile applications, from augmented reality to autonomous systems, that require real-time processing capabilities.</p>
      `,
      author: 'Jagan Teki',
      authorRole: 'CEO & Founder',
      authorImage: '/images/jagan.jpg',
      date: '2023-10-25',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mobile', '5G', 'Edge Computing'],
      category: 'Technology'
    },
    'edge-expo-europe': {
      id: 20,
      title: 'Edgeble at Edge Computing Expo Europe 2023',
      excerpt: 'Recap of Edgeble presence at the Edge Computing Expo Europe 2023. Learn about our latest innovations and engagements with industry leaders.',
      content: `
        <p class="text-lg mb-6">Edge Computing Expo Europe 2023 was a landmark event that brought together the leading innovators in edge computing technology. Our participation provided valuable insights into the European market and opportunities for collaboration with industry leaders.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">European Market Insights</h3>
        <p class="mb-6">The European edge computing market presents unique opportunities and challenges, with strong emphasis on data privacy, regulatory compliance, and sustainable technology solutions.</p>
        
        <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h4 class="text-lg font-semibold text-white mb-3">Key Themes:</h4>
          <ul class="space-y-2 text-white/80">
            <li>• Data sovereignty and privacy</li>
            <li>• Sustainable edge computing</li>
            <li>• Industrial automation</li>
            <li>• Smart city initiatives</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Partnerships</h3>
        <p class="mb-6">The expo facilitated valuable connections with European technology partners, system integrators, and potential customers across various industries including automotive, manufacturing, and telecommunications.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Technology Demonstrations</h3>
        <p class="mb-6">We showcased our latest edge AI accelerator modules and demonstrated real-world applications in industrial automation and smart infrastructure, receiving positive feedback from attendees and industry experts.</p>
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Collaborations</h3>
        <p class="mb-6">The connections made at the expo have led to ongoing discussions about potential partnerships and pilot projects with European companies looking to implement edge AI solutions.</p>
      `,
      author: 'Srinivas Patnaik',
      authorRole: 'Strategy Analyst',
      authorImage: '/images/srinivas.png',
      date: '2023-06-14',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Europe', 'Edge Computing', 'Partnerships'],
      category: 'Events'
    }
      'deloitte': {
    id: 21,
    title: 'Digital Transformation at Deloitte Events',
    excerpt: 'Edgeble showcased Edge AI solutions at Deloitte\'s Digital Transformation conferences, demonstrating innovations in edge computing and autonomous systems.',
    content: `
      <p class="text-lg mb-6">Deloitte\'s Digital Transformation events bring together enterprise leaders and technology innovators to explore the future of digital innovation. Edgeble participated to showcase how Edge AI is transforming industries through on-device intelligence and autonomous edge computing.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Event Highlights</h3>
      <p class="mb-6">Deloitte\'s conferences focused on digital innovation, cloud transformation, and the convergence of AI with edge computing. The event provided a platform for industry leaders to discuss emerging technologies and their practical applications.</p>
      
      <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
        <h4 class="text-lg font-semibold text-white mb-3">Key Topics:</h4>
        <ul class="space-y-2 text-white/80">
          <li>• Digital Transformation & AI Integration</li>
          <li>• Edge Computing for Enterprise</li>
          <li>• Real-time Data Processing</li>
          <li>• Autonomous Systems & Automation</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble\'s Contribution</h3>
      <p class="mb-6">Edgeble demonstrated how Self-Learning Edge AI enables organizations to process data at the edge, reducing latency and enabling real-time decision-making without cloud dependency. Our showcase highlighted practical applications in autonomous systems and intelligent edge deployment.</p>
      
      <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
        "Edge AI is the future of autonomous intelligence, enabling systems to learn and adapt in real-time at the edge." - Edgeble Team
      </blockquote>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Key Takeaways</h3>
      <p class="mb-6">The conversations at Deloitte\'s events highlighted the growing demand for edge intelligence solutions that can process data locally while maintaining system security and performance. Organizations are increasingly looking for solutions like Edgeble\'s Self-Learning Edge AI to power their digital transformation initiatives.</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-10-15',
    readTime: '3 min read',
    image: '/images/blog-deloitte.png',
    tags: ['Digital Transformation', 'Enterprise AI', 'Edge Computing'],
    category: 'Events'
  },
  'capgemini': {
    id: 22,
    title: 'Innovation at Capgemini Technology Events',
    excerpt: 'Edgeble presented Edge AI innovations at Capgemini\'s technology and digital transformation forums, showcasing solutions for enterprise automation.',
    content: `
      <p class="text-lg mb-6">Capgemini\'s technology events bring together global innovators and enterprise leaders to explore cutting-edge solutions. Edgeble participated to demonstrate how Self-Learning Edge AI is enabling enterprises to transform their operations through intelligent edge computing.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Event Focus Areas</h3>
      <p class="mb-6">Capgemini\'s forums focused on digital transformation, cloud modernization, and AI-powered automation. The events provided insights into how enterprises can leverage emerging technologies to enhance operational efficiency and customer experience.</p>
      
      <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
        <h4 class="text-lg font-semibold text-white mb-3">Technology Highlights:</h4>
        <ul class="space-y-2 text-white/80">
          <li>• Enterprise AI & Automation</li>
          <li>• Cloud-Native Edge Solutions</li>
          <li>• Real-time Analytics at the Edge</li>
          <li>• Self-Learning Systems</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble\'s Presentation</h3>
      <p class="mb-6">Edgeble showcased how edge AI transforms enterprise operations by enabling on-device learning and autonomous decision-making. Our presentation highlighted real-world applications in manufacturing, logistics, and intelligent automation, demonstrating how enterprises can reduce cloud dependency while improving performance.</p>
      
      <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
        "Enterprise transformation requires intelligent systems that can operate autonomously at the edge. Edgeble\'s platform makes this possible." - Technology Partner
      </blockquote>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Partnership Opportunities</h3>
      <p class="mb-6">The engagement at Capgemini events opened discussions for potential partnerships in delivering edge AI solutions to enterprise clients worldwide. Capgemini\'s expertise in digital transformation combined with Edgeble\'s edge AI technology represents a powerful combination for enterprise innovation.</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-10-10',
    readTime: '3 min read',
    image: '/images/blog-capgemini.png',
    tags: ['Enterprise AI', 'Digital Transformation', 'Partnerships'],
    category: 'Events'
  },
  'tech30': {
    id: 23,
    title: 'Recognized at TechSparks Tech30 Awards',
    excerpt: 'Edgeble was selected and recognized at YourStory\'s TechSparks Tech30 Awards, highlighting innovation in Self-Learning Edge AI and autonomous systems.',
    content: `
      <p class="text-lg mb-6">YourStory\'s TechSparks Tech30 Awards recognize India\'s most promising technology startups driving innovation and transformation. Edgeble was honored to be recognized for pioneering work in Self-Learning Edge AI, demonstrating breakthrough innovations in autonomous edge computing.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">About Tech30 Awards</h3>
      <p class="mb-6">The TechSparks Tech30 Awards celebrate the top 30 emerging technology startups in India that are pushing the boundaries of innovation. The recognition is based on innovation potential, market traction, team strength, and impact on the technology ecosystem.</p>
      
      <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
        <h4 class="text-lg font-semibold text-white mb-3">Recognition Criteria:</h4>
        <ul class="space-y-2 text-white/80">
          <li>• Breakthrough Technology Innovation</li>
          <li>• Market Traction & Growth</li>
          <li>• Team Excellence & Vision</li>
          <li>• Industry Impact & Potential</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble\'s Innovation</h3>
      <p class="mb-6">Edgeble\'s Self-Learning Edge AI platform represents a breakthrough in autonomous intelligence. The technology enables on-device learning without cloud dependency, making it ideal for autonomous systems, robotics, and intelligent edge applications. Our innovation stands out for combining advanced AI with hardware efficiency and real-time adaptation.</p>
      
      <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
        "The future of AI is at the edge. Edgeble is leading this transformation with Self-Learning Edge AI." - TechSparks Panel
      </blockquote>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Impact & Future</h3>
      <p class="mb-6">This recognition from TechSparks validates our vision and technical excellence in edge AI. It strengthens our position as a leader in autonomous edge intelligence and opens opportunities for partnerships with enterprises and technology partners looking to leverage edge AI for their transformation initiatives.</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-20',
    readTime: '3 min read',
    image: '/images/blog-tech30.png',
    tags: ['Awards', 'Innovation', 'Startup Recognition'],
    category: 'Events'
  },
  'tie-50': {
    id: 24,
    title: 'Featured at TiE 50 Startup Awards',
    excerpt: 'Edgeble was featured at TiE 50 Startup Awards, recognizing excellence in entrepreneurship and innovation in Self-Learning Edge AI technology.',
    content: `
      <p class="text-lg mb-6">The TiE (The Indus Entrepreneurs) 50 Awards celebrate the world\'s most promising startup entrepreneurs and companies. Edgeble was featured for pioneering innovations in Self-Learning Edge AI, demonstrating exceptional entrepreneurial vision and technological excellence.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">About TiE 50 Awards</h3>
      <p class="mb-6">TiE 50 recognizes top global startups that are creating innovative products, building strong teams, and generating significant impact in their respective markets. The awards celebrate entrepreneurship, innovation, and the building of enduring enterprises.</p>
      
      <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
        <h4 class="text-lg font-semibold text-white mb-3">TiE 50 Recognition Highlights:</h4>
        <ul class="space-y-2 text-white/80">
          <li>• Entrepreneurial Excellence & Vision</li>
          <li>• Disruptive Technology Innovation</li>
          <li>• Global Market Impact</li>
          <li>• Team & Execution Strength</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble\'s Leadership</h3>
      <p class="mb-6">Under the leadership of our founding team, Edgeble has pioneered Self-Learning Edge AI technology that enables autonomous decision-making at the edge without cloud dependency. Our innovation is transforming industries including robotics, autonomous systems, and intelligent IoT applications. The TiE 50 recognition affirms our position as a leading edge AI innovator.</p>
      
      <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
        "TiE 50 startups are the architects of tomorrow\'s businesses. Edgeble is building the intelligent edge infrastructure that will power next-generation autonomous systems." - TiE Leadership
      </blockquote>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Future Vision</h3>
      <p class="mb-6">This recognition motivates us to accelerate innovation in edge AI and expand our impact globally. We are committed to advancing Self-Learning Edge AI technology and partnering with enterprises and technology leaders to transform industries through intelligent edge computing. TiE 50 validation strengthens our conviction in our mission to democratize edge AI.</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-15',
    readTime: '3 min read',
    image: '/images/blog-tie50.png',
    tags: ['Entrepreneurship', 'Awards', 'Global Recognition'],
    category: 'Events'
  },
  'nasscom-ntlf': {
    id: 25,
    title: 'Innovation at NASSCOM Technology & Leadership Forum',
    excerpt: 'Edgeble showcased Self-Learning Edge AI at NASSCOM\'s Technology & Leadership Forum, demonstrating advanced applications in autonomous systems and enterprise AI.',
    content: `
      <p class="text-lg mb-6">NASSCOM\'s Technology & Leadership Forum is a premier platform where India\'s top technology leaders, entrepreneurs, and innovators come together to shape the future of the Indian tech ecosystem. Edgeble participated to showcase breakthrough innovations in Self-Learning Edge AI and discuss the future of autonomous intelligence.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">About NASSCOM NTLF</h3>
      <p class="mb-6">The NASSCOM Technology & Leadership Forum focuses on emerging technologies, digital transformation, and building India\'s position as a global tech leader. The event brings together industry veterans, innovators, policymakers, and thought leaders to discuss critical technology trends shaping industries worldwide.</p>
      
      <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
        <h4 class="text-lg font-semibold text-white mb-3">Forum Focus Areas:</h4>
        <ul class="space-y-2 text-white/80">
          <li>• Artificial Intelligence & Machine Learning</li>
          <li>• Edge Computing & Autonomous Systems</li>
          <li>• Digital Transformation for India Inc.</li>
          <li>• Technology Leadership & Innovation</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Edgeble\'s Insights</h3>
      <p class="mb-6">Edgeble shared insights on how Self-Learning Edge AI is enabling a new paradigm of autonomous intelligence. Our presentation highlighted how edge AI reduces cloud dependency, enables real-time processing, and empowers autonomous systems across industries. We engaged with IT leaders and innovators on practical applications and future opportunities in edge AI.</p>
      
      <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
        "Edge AI is critical for India\'s technology leadership. Self-Learning Edge AI platforms like Edgeble\'s will power the next wave of autonomous innovation." - NASSCOM Leadership
      </blockquote>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Industry Impact</h3>
      <p class="mb-6">The engagement at NASSCOM NTLF reinforced the importance of edge AI in India\'s technology roadmap. Our participation strengthened connections with enterprise leaders and technology partners interested in adopting Self-Learning Edge AI for their digital transformation and autonomous systems initiatives. We are committed to advancing edge AI adoption in India and globally.</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-10',
    readTime: '3 min read',
    image: '/images/blog-nasscom.png',
    tags: ['India', 'Technology Leadership', 'Edge AI'],
    category: 'Events'
  },
  'yourstory': {
    id: 26,
    title: 'Featured on YourStory - Building Edge AI for India',
    excerpt: 'Edgeble was featured on YourStory, sharing our journey in pioneering Self-Learning Edge AI and our vision for autonomous intelligence in India and globally.',
    content: `
      <p class="text-lg mb-6">YourStory is India\'s leading platform for startup stories, innovations, and entrepreneurial journeys. Edgeble was featured on YourStory to share our vision, technology, and mission to democratize Self-Learning Edge AI and empower autonomous intelligence across industries.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Our Story & Mission</h3>
      <p class="mb-6">Edgeble was founded on the belief that intelligent systems should learn and adapt at the edge, without cloud dependency. Our Self-Learning Edge AI platform represents years of research and development to enable autonomous decision-making at the edge. We are committed to transforming industries through practical, deployable edge AI solutions.</p>
      
      <div class="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
        <h4 class="text-lg font-semibold text-white mb-3">Key Milestones:</h4>
        <ul class="space-y-2 text-white/80">
          <li>• Pioneering Self-Learning Edge AI Technology</li>
          <li>• Global Recognition & Awards</li>
          <li>• Enterprise Partnerships & Deployments</li>
          <li>• Expanding Team & Research Impact</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Technology Vision</h3>
      <p class="mb-6">Our Self-Learning Edge AI platform combines advanced machine learning with edge computing to enable systems that learn, adapt, and make intelligent decisions in real-time. Unlike cloud-dependent solutions, our technology processes data locally, reducing latency, protecting privacy, and enabling autonomous operations. This is the future of intelligent systems across robotics, IoT, autonomous vehicles, and industrial automation.</p>
      
      <blockquote class="border-l-4 border-white pl-6 italic text-white/90 mb-8 bg-white/5 p-4 rounded-r-xl">
        "The future of AI belongs to systems that think at the edge. Edgeble is building the infrastructure for autonomous intelligence that will power the next generation of intelligent systems." - Edgeble Founders
      </blockquote>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Journey & Impact</h3>
      <p class="mb-6">From our research origins to becoming a recognized edge AI innovator, Edgeble\'s journey reflects our commitment to technological excellence and practical impact. We have engaged with enterprises, startups, and technology partners globally. Our vision is to make Self-Learning Edge AI accessible and drive a fundamental shift in how intelligent systems are built. Through YourStory, we share our story, insights, and the opportunities we see in edge AI for India and the world.</p>
    `,
    author: 'Jagan Teki',
    authorRole: 'CEO & Founder',
    authorImage: '/images/jagan.jpg',
    date: '2025-09-05',
    readTime: '4 min read',
    image: '/images/blog-yourstory.png',
    tags: ['Startup Journey', 'Edge AI', 'India'],
    category: 'Events'
  }

  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-20">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/70 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-black border-b border-white/10 pt-20">
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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-white/60 text-sm mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Share2 className="w-4 h-4 mr-2" />
              <span>Share</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center mb-8">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover mr-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150';
              }}
            />
            <div>
              <div className="font-semibold text-white">{post.author}</div>
              <div className="text-white/60 text-sm">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black">
            <img
              src={post.image}
              alt={post.title}
              className={`w-full h-full object-cover object-center ${
                post.id === 2 ? 'beyond-borders-image' : ''
              }`}
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4">Share this article</h4>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-start space-x-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150';
              }}
            />
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">{post.author}</h4>
              <p className="text-white/60 text-sm mb-2">{post.authorRole}</p>
              <p className="text-white/80 text-sm">
                {post.author} is Founder & CEO of Edgeble, specializing in Edge AI innovation and technology development. 
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
