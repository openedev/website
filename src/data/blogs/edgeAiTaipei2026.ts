import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Edgeble at EDGE AI Taipei 2026",
  slug: "edge-ai-taipei-2026",
  excerpt:
    "Jagan Teki will present Self-Correction Runtime for On-Device Physical AI at EDGE AI Taipei 2026 in Taipei, Taiwan.",
  content: `
    <p class="text-xl mb-6">
      Edgeble will be part of <strong>EDGE AI Taipei 2026</strong>, bringing the self-correction runtime for on-device Physical AI to the edge AI ecosystem in Taipei.
    </p>

    <p class="text-xl mb-6">
      Jagan Teki, Founder &amp; CEO of Edgeble, will present <strong>Self-Correction Runtime for On-Device Physical AI</strong>.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Session details
    </h3>

    <p class="text-xl mb-6">
      <strong>October 22-23, 2026</strong><br />
      Taipei, Taiwan<br />
      Session: October 22, 4:15 PM-4:30 PM GMT+8<br />
      Speaker: Jagan Teki, Founder &amp; CEO, Edgeble
    </p>

    <p class="text-xl mb-6">
      The session will examine how deployed Physical AI degrades as lighting, machines, sensors, chips, and models change, and how a runtime can detect drift and correct the right layer on-device.
    </p>

    <p class="text-xl mb-6">
      <a href="https://taipei2026.edgeaifoundation.org/agenda/speakers/4030288" target="_blank" rel="noreferrer" class="text-white underline underline-offset-4">
        View the official EDGE AI Taipei 2026 agenda
      </a>
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-10-22",
  readTime: "2 min read",
  image: "/images/edge-ai-taipei-2026.png",
  tags: ["EDGE AI Taipei", "Physical AI", "Self-Correction", "Edge AI"],
  type: "news",
  category: "Conference",
};

export default blog;
