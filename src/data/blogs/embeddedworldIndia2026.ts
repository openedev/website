import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Cross-Layer Self-Correction for Embedded Vision AI",
  slug: "embeddedworld-india-2026",
  excerpt:
    "Edgeble joins Embedded World India 2026 for a session on self-correcting edge intelligence—from the conveyor to the NPU to the model.",
  content: `
    <p class="text-xl mb-6">
      <strong>Embedded World India 2026</strong> brings together the systems, silicon, and applications shaping intelligent edge deployments. Edgeble will join the <strong>AI - Embedded Vision</strong> theme with a session on how Physical AI can detect failures, diagnose the layer that moved, and correct itself on the device.
    </p>

    <p class="text-xl mb-6">
      What if an embedded vision system could independently detect failures, diagnose hardware or model shifts, and autonomously retrain and self-correct without sending the production line to the cloud? For industrial and automotive systems, hot-swapping a validated model and keeping the line adapting in place changes what an edge deployment can do after it leaves the lab.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Session
    </h3>

    <p class="text-xl mb-6">
      Jagan Teki, Founder and CEO of Edgeble, will present <strong>“Cross-Layer Self-Correction for Embedded Vision AI: From the Conveyor to the NPU to the Model”</strong>.
    </p>

    <p class="text-xl mb-6">
      The session looks at the complete deployed system: the conveyor and camera, the NPU and its runtime budget, and the model that produces each decision. Edgeble's approach is to detect the wrong decision, identify whether the physical system, compute path, or model caused it, and apply a controlled correction at the layer that failed.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Event details
    </h3>

    <p class="text-xl mb-6">
      <strong>November 17-19, 2026</strong><br />
      Bangalore International Exhibition Centre (BIEC), Bengaluru<br />
      Theme: AI - Embedded Vision
    </p>

    <p class="text-xl mb-6">
      Register for Embedded World India 2026 through the official event registration page:
      <a href="https://lnkd.in/dCf7k85u" target="_blank" rel="noreferrer" class="text-white underline underline-offset-4">Register here</a>.
    </p>

    <p class="text-xl mb-6">
      Join the conversation on Physical AI, self-correcting runtimes, embedded vision, and the systems needed to keep intelligent production lines accurate over time.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-11-17",
  readTime: "2 min read",
  image: "",
  tags: [
    "Embedded World India",
    "AI - Embedded Vision",
    "Embedded Vision",
    "Physical AI",
    "Self-Correction",
  ],
  type: "news",
  category: "Conference",
};

export default blog;
