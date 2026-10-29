import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Self-Correcting Embedded AI on Heterogeneous Edge Silicon",
  slug: "embeddedworld-china-2026",
  excerpt:
    "Production lessons from self-correcting embedded AI on heterogeneous edge silicon, presented at EmbeddedWorld China 2026.",
  content: `
    <p class="text-xl mb-6">
      At <strong>EmbeddedWorld China 2026</strong>, Edgeble presented the application side of heterogeneous integration: what industrial AI quality inspection needs from embedded silicon after a model leaves the lab.
    </p>

    <p class="text-xl mb-6">
      The presentation, <strong>Self-Correcting Embedded AI on Heterogeneous Edge Silicon: Production Lessons from AI-Driven Quality Inspection</strong>, followed a complete correction loop: detect the wrong decision, identify the layer that failed, correct it close to the machine, and verify the result without stopping inference.
    </p>

    <figure class="my-10">
      <img src="/images/embeddedworld-china-2026.png" alt="EmbeddedWorld China 2026 conference session schedule" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">The EmbeddedWorld China 2026 Track 2 session schedule.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Why deployed inspection degrades
    </h3>

    <p class="text-xl mb-6">
      A quality-inspection model can fail for reasons that are not visible in its final score. Lighting shifts, lens contamination, and conveyor changes belong to the physical and sensing layers. Thermal throttling, frame drops, and scheduling pressure belong to the compute layer. Model drift, false rejects, and defect types the model has never seen belong to the model layer. On the line, all three layers can produce the same symptom: accuracy falls.
    </p>

    <p class="text-xl mb-6">
      The default response is to collect images, retrain, and redeploy. That can take days, and it can change the model when the model was not the problem. A dirty lens, for example, needs a sensing fix, not a model that has learned to accept a faulty image.
    </p>

    <figure class="my-10">
      <img src="/images/embeddedworld/ewc-2026-problem.png" alt="Physical, compute, and model causes of degradation in deployed inspection AI" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">The same visible symptom can come from the physical, compute, or model layer.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      A runtime with two clocks
    </h3>

    <p class="text-xl mb-6">
      Edgeble's runtime works beneath the inference engine and beside the production decision. Its fast clock runs on every frame. Stage 1 checks the model's output together with the evidence in the frame against an independent, on-device golden reference. It can confirm a decision, correct a wrong label, abstain when the evidence is not strong enough, or flag a novel case. On the RK3588 NPU, the measured correction path is <strong>13-16 ms per object</strong>; if the bounded path overruns, the output passes through rather than making the line wait.
    </p>

    <p class="text-xl mb-6">
      Its slow clock runs over seconds and minutes. Stage 2 groups correction events and aligns them with physical, sensing, compute, and model telemetry. It attributes the failure to the layer that caused it, applies the smallest appropriate fix, and verifies the fix by watching the event rate. Physical and sensing faults can be corrected without retraining. Compute faults can be addressed through scheduling or frame-budget changes. Only a model fault needs retraining, and that change must pass independent validation gates before a live hot-swap.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      Why the second opinion can be right
    </h3>

    <p class="text-xl mb-6">
      The verifier is not a second run of the same detector. It asks a different question: how close is this evidence to what the line knows to be good? A separate frozen embedding network compares the output with the line's own golden references using distance and margin. The judge is not the model being judged, and every verdict with its evidence is written to the ledger for audit.
    </p>

    <p class="text-xl mb-6">
      The verifier does not override by default. It corrects only when the distance is within bounds and the margin is clear; otherwise it abstains and the safe default applies. A new defect is flagged on its first occurrence and can be recognised from the second as the reference grows by data, without changing or retraining the sealed detector.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      A correction loop on the line
    </h3>

    <p class="text-xl mb-6">
      The presentation walked through an automotive battery-line example on an RK3588. The installed model rejected good batteries in the live stream. Stage 1 corrected those decisions on the spot without retraining. Stage 2 then isolated the cause, gated a permanent model change, and hot-swapped it while the line continued to run. A real defect remained rejected in every view; correction is intended to remove false decisions, not to make the inspection less strict.
    </p>

    <div class="grid gap-4 md:grid-cols-2 my-10">
      <div class="border border-white/15 rounded-xl p-5">
        <p class="text-sm uppercase tracking-[0.14em] text-white/60 mb-3">Drift cycle</p>
        <p class="text-lg text-white">11 of 12 induced drifts corrected autonomously in the validation run, with 0 of 124 regressions across the checks.</p>
      </div>
      <div class="border border-white/15 rounded-xl p-5">
        <p class="text-sm uppercase tracking-[0.14em] text-white/60 mb-3">Full correction loop</p>
        <p class="text-lg text-white">8 of 9 false positives corrected through hot-swap, with 0 line stops for the model fix and rollback under 5 seconds.</p>
      </div>
    </div>

    <p class="text-xl mb-6">
      These are separate test sets: the drift cycle measured induced drifts and regression checks, while the false-positive cycle measured the full loop through a gated hot-swap. Together they show the boundary the runtime has to respect: a correction must be measurable, bounded, and reversible.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      One runtime across heterogeneous silicon
    </h3>

    <p class="text-xl mb-6">
      The deployment story is also a heterogeneous-integration story. The same two-stage runtime is used across Rockchip RK3588, DeepX, and NXP i.MX 8M Plus systems, within a <strong>2-4 GB</strong> memory budget. The vendor-compiled model remains sealed on the NPU. An open part can learn on the device without recompiling or re-signing the certified model. Accelerator-card NPU adaptation, including AX8850-class hardware on a host board, is part of the continuing work.
    </p>

    <figure class="my-10">
      <img src="/images/embeddedworld/ewc-2026-silicon.png" alt="One Edgeble runtime across heterogeneous NPU families" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">One runtime, three NPU families, and the continuing accelerator-card validation.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">
      What the workload asks of the next chip
    </h3>

    <p class="text-xl mb-6">
      The production loop turns application behavior into four silicon requirements: spare compute beside the inference NPU for bounded correction and retraining bursts; an isolated memory budget for the 1-2 MB golden reference, frame rings, and the open model part; deterministic latency that is guaranteed independently of host load; and compiler support for open weight tensors as runtime inputs inside sealed graphs.
    </p>

    <p class="text-xl mb-6">
      The talk's conclusion is practical: heterogeneous integration is not only about adding more compute. It is also about giving deployed AI a safe place to observe, judge, correct, and prove its decisions while the physical process keeps moving.
    </p>

    <figure class="my-10">
      <img src="/images/embeddedworld/ewc-2026-requirements.png" alt="Application requirements for self-correcting workloads on heterogeneous edge silicon" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">The application requirements Edgeble presented for the next generation of heterogeneous edge silicon.</figcaption>
    </figure>

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
      The talk was presented by Jagan Teki, Founder and CEO of Edgeble AI, with Srinivas Patnaik, Co-founder and Head of Physical Systems, as co-author. The full presentation connects production quality inspection, embedded runtime design, and the next generation of heterogeneous edge silicon.
    </p>

    <figure class="my-10">
      <img src="/images/embeddedworld/ewc-2026-conference.jpg" alt="Jagan Teki presenting Edgeble's self-correction talk at EmbeddedWorld China 2026" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">Edgeble presenting the self-correction runtime at EmbeddedWorld China 2026.</figcaption>
    </figure>
  `,
  author: "Jagan Teki",
  date: "2026-10-15",
  readTime: "6 min read",
  image: "/images/embeddedworld/ewc-2026-title.png",
  tags: [
    "EmbeddedWorld China",
    "Heterogeneous Compute",
    "Quality Inspection",
    "Physical AI",
    "Self-Correction",
  ],
  type: "news",
  category: "Conference",
};

export default blog;
