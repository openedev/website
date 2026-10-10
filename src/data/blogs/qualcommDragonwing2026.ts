import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Edgeble Self-Correcting on Qualcomm Dragonwing \u2014 Live Drift Recovery",
  slug: "edgeble-qualcomm-dragonwing-2026",
  excerpt:
    "Edgeble will demonstrate live drift recovery for self-correcting Physical AI on Qualcomm Dragonwing at the Executorch Hackathon.",
  content: `
    <p class="text-xl mb-6">
      Edgeble will demonstrate <strong>self-correcting Physical AI on Qualcomm Dragonwing</strong> at the Executorch Hackathon.
    </p>

    <p class="text-xl mb-6">
      The live demonstration focuses on <strong>drift recovery on the device</strong>: detecting when deployed AI no longer matches the physical system and correcting the right layer while inference continues.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Event details
    </h3>

    <p class="text-xl mb-6">
      <strong>October 17-18, 2026</strong><br />
      Founders Inc., Bay Area, California<br />
      Part of Open Source AI Week 2026
    </p>

    <p class="text-xl mb-6">
      The demonstration brings Edgeble's self-correction runtime to Qualcomm Dragonwing hardware, showing how Physical AI can remain useful as real-world conditions change after deployment.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-10-17",
  readTime: "2 min read",
  image: "/images/edgeble-qualcomm-dragonwing-2026.png",
  tags: ["Qualcomm Dragonwing", "Physical AI", "Self-Correction", "Edge AI"],
  type: "blog",
  category: "Technology",
};

export default blog;
