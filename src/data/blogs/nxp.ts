import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "TOP 15 by NXP Startup Impact Showcase 2026",
  slug: "nxp-startup-impact-showcase-2026",
  excerpt:
    "Edgeble has been selected among the Top 15 startups by NXP Startup Impact Showcase 2026.",
  content: `
    <p class="text-xl mb-6">
      Edgeble has been selected among the <strong>Top 15 startups</strong> by <strong>NXP Startup Impact Showcase 2026</strong>.
    </p>

    <p class="text-xl mb-6">
      This recognition highlights Edgeble's work on self-learning edge AI and self-correcting runtime infrastructure for Physical AI systems.
    </p>

    <p class="text-xl mb-6">
      We are continuing to sharpen our platform for real-world edge deployments where intelligence must run close to the system, adapt to changing physical conditions, and remain reliable in production.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-08-04",
  readTime: "1 min read",
  image: "/images/Pitch 118.png",
  tags: ["NXP", "Startup Impact Showcase", "Top 15", "Physical AI"],
  type: "news",
  category: "Recognition",
};

export default blog;
