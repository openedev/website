import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Talk: Cross-Layer Self-Correction for Embedded Vision AI, EmbeddedWorld India 2026",
  slug: "embeddedworld-india-2026",
  excerpt:
    "Thursday 19 November, 11:55, AI and Embedded Vision track, Bengaluru. A technical deep dive: from the conveyor to the NPU to the model, with the production cases from rail, battery and tyre lines on Rockchip, DeepX and NXP NPUs.",
  content: `
    <p class="text-xl mb-6">
      Embedded vision AI degrades after deployment, and the cause is rarely where it appears. Lighting shifts, conveyor speed changes and lens contamination; pipeline stalls, thermal throttling and memory pressure; drift, false positives and never-seen inputs. From inside the model they all look identical: accuracy falls. Retraining, the default response, fixes one layer and hides the other two.
    </p>

    <p class="text-xl mb-6">
      At <strong>Embedded World India 2026</strong> Jagan Teki, founder and CEO of Edgeble, presents <strong>Cross-Layer Self-Correction for Embedded Vision AI: From the Conveyor to the NPU to the Model</strong>, a 30-minute technical deep dive in the AI and Embedded Vision track.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">When and where</h3>
    <p class="text-xl mb-6">
      <strong>Thursday 19 November 2026, 11:55</strong><br />
      Embedded World India Conference, Bangalore International Exhibition Centre (BIEC), Bengaluru<br />
      Track: AI and Embedded Vision. Format: technical deep dive, non-promotional.<br />
      The runtime runs live on booth SP16 all three days.
    </p>

    <figure class="my-10">
      <img src="/images/blog-ewi-2026-talk.png" alt="A battery line frame with two terminal claims, Positive and Negative, as the model emits them" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">Every output of a model is a claim. On a live line some claims are wrong, and the model cannot tell which.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">What the talk covers</h3>
    <p class="text-xl mb-6">
      The talk presents a self-correcting runtime that sits in the embedded stack beneath any inference engine and above the OS. It instruments the pipeline stage by stage, V4L2 capture, encode, NPU inference, decision, PLC I/O, with per-stage timing and quality budgets derived from ground truth, so a symptom is localised to a layer before any correction acts. Correction runs in two stages: an immediate stage on the inference-to-decision path checks each output against independent on-device evidence and corrects false positives and unknown inputs without stopping inference; a permanent stage in idle time re-fits pipeline parameters, restores controller setpoints, or retrains, validates and hot-swaps the model.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Four parts</h3>
    <p class="text-xl mb-4"><strong>1. The problem.</strong> Every output is a claim. The same six causes on a conveyor, on a road and on a robot. Three layers, one symptom, and why the silicon cannot fix it alone. The judge: a frame and a claim in, four verdicts out. One correction loop end to end on a live line, and the eight numbers it produced.</p>
    <p class="text-xl mb-4"><strong>2. The model layer.</strong> Stage 1 on real frames: confirmed, corrected, novel. Why a judge can be right when the model is wrong. Stage 2: from the lesson to the canary. How a sealed NPU model can learn: two parts, four deployment forms, the measured bytes and milliseconds. What did not work.</p>
    <p class="text-xl mb-4"><strong>3. The physical layer.</strong> Lighting drift versus lens contamination: the same symptom, opposite fixes. The signals that find the layer, the fix for each, and how a physical fix is applied and proved.</p>
    <p class="text-xl mb-6"><strong>4. The compute layer.</strong> Late is the same as wrong. Instrumenting the pipeline stage by stage. A 28-to-17 FPS collapse traced to an encoder stage, not the model. Memory in 2 to 4 GB and the deadline. Four NPU families demonstrated, and four asks of the next silicon.</p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Production cases in the talk</h3>
    <p class="text-xl mb-6">
      Rail, battery and tyre lines on Rockchip, DeepX and NXP i.MX NPUs. A frame-rate collapse traced to the pipeline, not the model. Lighting drift and lens contamination with the same symptom and opposite fixes. A batch where 10 of 11 induced drifts were corrected autonomously within 2 to 4 GB of memory.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Measured on a live battery line, October 2026</h3>
    <p class="text-xl mb-6">
      9 of 9 wrong claims corrected before the decision, 13 to 21 ms per check. 53 of 53 labels learned on the device, behind a learning check and a forgetting exam. Rollback under 5 seconds. 11 of 12 induced drift events corrected with the line never stopped. The customer's own numbers: operators 6 to 3, 2,000 to 2,600 batteries a day, no line stop for a model change since.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Five things to take back</h3>
    <p class="text-xl mb-6">
      Treat every model output as a claim. Localise the layer before you correct. Keep the model sealed and the correction beside it. Prove every correction in a ledger. Measure the judge's own error rate, not only the model's.
    </p>

    <p class="text-xl mb-6">
      Register through the official event page: <a href="https://lnkd.in/dCf7k85u" target="_blank" rel="noreferrer" class="text-white underline underline-offset-4">Embedded World India 2026</a>. The two live demos are on <a href="/blog/embeddedworld-india-2026-booth" class="text-white underline underline-offset-4">booth SP16</a>.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-11-18",
  readTime: "4 min read",
  image: "/images/blog-ewi-2026-talk.png",
  tags: ["Embedded World India", "AI - Embedded Vision", "Self-Correction", "Physical AI", "NPU"],
  type: "news",
  category: "Conference",
};

export default blog;
