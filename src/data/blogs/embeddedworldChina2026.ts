import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Edgeble Self-Correction at EmbeddedWorld China 2026",
  slug: "embeddedworld-china-2026",
  excerpt:
    "Edgeble will present production lessons from self-correcting Physical AI on heterogeneous edge silicon at EmbeddedWorld China 2026.",
  content: `
    <p class="text-xl mb-6">
      Edgeble will present its self-correction approach for Physical AI at <strong>EmbeddedWorld China 2026</strong> in Shanghai.
    </p>

    <p class="text-xl mb-6">
      The session, <strong>Self-Correction &amp; Heterogeneous Edge Silicon: Production Lessons from AI-Driven Quality Inspection</strong>, will cover how deployed edge intelligence can detect drift, identify the failing layer, and correct the system close to the machine.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Conference session
    </h3>

    <p class="text-xl mb-6">
      <strong>Day 2 - October 15, 2026</strong><br />
      11:20-11:50<br />
      Symposium on Advanced Packaging and Heterogeneous Integration Driving Embedded System Innovation<br />
      Conference Zoom B, Hall 5.2, NECC, Shanghai
    </p>

    <p class="text-xl mb-6">
      The talk will connect heterogeneous edge silicon with the production reality of AI-driven quality inspection, where models, sensors, compute, and physical processes all change over time.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-10-15",
  readTime: "2 min read",
  image: "/images/embeddedworld-china-2026.png",
  tags: ["EmbeddedWorld China", "Physical AI", "Self-Correction", "Edge AI"],
  type: "news",
  category: "Conference",
};

export default blog;
