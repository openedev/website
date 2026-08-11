import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Self-Correcting Physical AI on NXP i.MX — Live Drift Recovery",
  slug: "nxp-2026",
  excerpt:
    "Live at the NXP India Tech Startup Impact Showcase, Sept 15 — this correction loop running on i.MX 8M Plus.",
  content: `
    <p class="text-xl mb-6">
      On <strong>September 15</strong>, Edgeble will demonstrate live self-correction on NXP silicon at the <strong>NXP India Tech Startup Impact Showcase</strong> in Bengaluru — the full correction loop running on an <strong>i.MX 8M Plus</strong> with its <strong>2.3 TOPS NPU</strong>, in a <strong>2GB memory envelope</strong>.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Why this demo matters
    </h3>

    <p class="text-xl mb-6">
      Physical AI degrades after deployment. Conditions shift, hardware strains, models drift — and on the edge, there is no cloud to catch it.
      Most tools blindly retrain the model every time accuracy drops, which fails when the real cause is a camera fault, a thermal issue, or a change in the physical process itself.
    </p>

    <p class="text-xl mb-6">
      Edgeble is a self-correcting runtime layer for Physical AI.
      It continuously catches degradation, diagnoses which layer actually failed — the physical system, the compute, or the model — and corrects the right one on-device while inference continues.
      Every correction passes independent ground-truth validation gates before it goes live, so the line never has to stop.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      What we will show live
    </h3>

    <p class="text-xl mb-6">
      The first loop is drift correction: detection, on-device retraining, validation, and hot-swap.
      The second is novelty discovery: an object the model was never trained on is flagged UNKNOWN, learned through the correction loop, and detected on the next run — unsupervised and on-device.
    </p>

    <p class="text-xl mb-6">
      The footage behind the demo comes from our production-proven runtime on Rockchip RK3588.
      The same loop is hardware-agnostic by design, and i.MX 8M Plus is the showcase target, with i.MX 95 (eIQ Neutron) as our next integration.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      What we have validated
    </h3>

    <p class="text-xl mb-6">
      Our latest validated result is 10 of 11 induced drifts corrected end-to-end in a single batch — autonomously, with inference never stopping.
      The one drift not corrected was held back by the validation gates rather than force-swapped: the safety design working as intended.
    </p>

    <p class="text-xl mb-6">
      Edgeble runs today at Tier-1 manufacturers — battery, rail, and tyre lines — where it has replaced incumbent machine-vision systems.
      Patent published in India (App. 202441064317), with further filings in preparation.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      Why it matters for Physical AI
    </h3>

    <p class="text-xl mb-6">
      Running AI on i.MX — or anywhere on the edge — only matters if the deployed model can survive the field.
      If your models degrade after deployment, we’d like to show you what self-correction looks like on your fleet.
    </p>

    <p class="text-xl mb-6">
      Meet us at the NXP India Tech Startup Impact Showcase on <strong>September 15</strong> in Bengaluru.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-08-11",
  readTime: "2 min read",
  image: "",
  tags: ["NXP", "i.MX 8M Plus", "Physical AI", "Drift Recovery", "Edge AI"],
  type: "blog",
  category: "Technology",
};

export default blog;
