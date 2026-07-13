import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Winner of Curiosity 2026 by South Park Commons",
  slug: "curiosity",
  excerpt:
    "Edgeble won Curiosity 2026 by South Park Commons India and ARTPARK/IISc Bangalore in the Physical AI category.",
  content: `
    <p class="text-xl mb-6">
      Edgeble won <strong>Curiosity 2026</strong> by South Park Commons India and ARTPARK/IISc Bangalore in the <span class="text-[#77DB89] font-semibold">Physical AI</span> category.
    </p>

    <img
      src="/images/spc0.jpeg"
      alt="Edgeble at Curiosity 2026 by South Park Commons India"
      class="w-full rounded-xl my-8"
    />

    <p class="text-xl mb-6">
      Curiosity brings together ambitious builders working on frontier technology. For Edgeble, the recognition validates a core belief: physical AI systems need intelligence that can run close to the machine, observe real-world behavior, and correct itself as conditions change.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Why Self-Correction Matters
    </h3>

    <p class="text-xl mb-6">
      Physical systems do not stay fixed. Cameras drift, sensors age, lighting changes, machines wear, and operating environments keep moving. Static AI models struggle in these conditions because they are trained once and then expected to behave the same everywhere.
    </p>

    <p class="text-xl mb-6">
      Edgeble is building self-learning edge intelligence that can detect change, adapt locally, and keep inference aligned with the actual physical environment. This makes AI more useful for factories, robotics, inspection systems, mobility platforms, and other real-world deployments where reliability matters.
    </p>

    <img
      src="/images/spc1.jpg"
      alt="Curiosity 2026 Physical AI recognition for Edgeble"
      class="w-full rounded-xl my-8"
    />

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      Recognition from the Physical AI Ecosystem
    </h3>

    <p class="text-xl mb-6">
      Winning Curiosity 2026 is an important milestone for Edgeble&#39;s runtime work on self-correcting infrastructure for Physical AI. It reflects the growing need for AI systems that are not only accurate in demos, but resilient in production.
    </p>

    <img
      src="/images/spc2.jpg"
      alt="Edgeble team at the Curiosity 2026 event"
      class="w-full rounded-xl my-8"
    />

    <p class="text-xl mb-6">
      We are grateful to South Park Commons India and ARTPARK/IISc Bangalore for recognizing Edgeble&#39;s approach, and we look forward to continuing the work with builders, researchers, and industry partners shaping the next generation of physical intelligence.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-05-31",
  readTime: "3 min read",
  image: "/images/curiosity.jpg",
  tags: ['SPC', 'ARTPARK', 'IISc', 'Physical AI'],
  type: "news",
  category: "Recognition",
};

export default blog;
