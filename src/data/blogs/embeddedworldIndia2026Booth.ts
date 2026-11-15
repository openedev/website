import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Embedded World India 2026, booth SP16: two live self-correction demos",
  slug: "embeddedworld-india-2026-booth",
  excerpt:
    "Bengaluru, 17 to 19 November. On booth SP16 the runtime runs live beside the model: a correction station on an RK3588, and six cameras on one unit, each with its judge.",
  content: `
    <p class="text-xl mb-6">
      Every output of a model is a claim. On a live line some claims are wrong, and the model cannot tell which. On <strong>booth SP16</strong> at Embedded World India 2026 we show the runtime that sits beside the model, on the same board, and catches the wrong claim before the decision. Nothing is simulated: the models are the ones installed, the frames are live, and every verdict lands in a ledger you can read on the stand.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Where and when</h3>
    <p class="text-xl mb-6">
      <strong>Booth SP16</strong>, Embedded World India 2026<br />
      Bangalore International Exhibition Centre (BIEC), Bengaluru<br />
      <strong>17 to 19 November 2026</strong>, all three days<br />
      The talk, <a href="/blog/embeddedworld-india-2026" class="text-white underline underline-offset-4">Cross-Layer Self-Correction for Embedded Vision AI</a>, is on Tuesday 18 November at 16:30.
    </p>

    <figure class="my-10">
      <img src="/images/blog-ewi-2026-booth.jpg" alt="A live battery line: the model as installed on the left, the same frames corrected by the runtime on the right" class="w-full rounded-xl" loading="lazy" />
      <figcaption class="text-sm text-white/60 mt-3">The two-panel view used on the stand: the model as installed on the left, the same frames with the judge beside it on the right.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Demo 1: the correction station</h3>
    <p class="text-xl mb-6">
      A stepper motor turns batteries under a camera on an RK3588 unit, with a detection model built and calibrated by our team for this station. Two windows side by side: the model's claims as they come out, and the judge's verdict on each claim: confirm, correct, or abstain, with the evidence it used. You can make the model wrong yourself, change the lamp, touch the lens, swap a battery, and watch the wrong claim get caught before the decision, and the ledger row it leaves behind. The model stays sealed throughout.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Demo 2: six cameras, one unit</h3>
    <p class="text-xl mb-6">
      Two GMSL2 cameras and four MIPI CSI-2 cameras on one Edgeble unit, each running detection, each with its own judge: twelve windows on one screen. It shows what a line, a vehicle or a cell with many views needs: one runtime, one ledger, a verdict per camera, within the NPU budget of a single board.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Hardware on the stand</h3>
    <p class="text-xl mb-6">
      The Edgeble 6 TOPS module and carrier, the Edgeble GMSL2 and MIPI cameras, and the runtime as it runs on Rockchip RK3588, NXP i.MX 8M Plus and Qualcomm Dragonwing. Ask to see the NXP board and the Qualcomm rig from the ExecuTorch hackathon.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">What we bring from the line</h3>
    <p class="text-xl mb-6">
      From a battery line in October 2026: 9 of 9 wrong claims corrected in 13 to 21 ms, 53 of 53 labels learned on the device, rollback under 5 seconds, 11 of 12 induced drift events corrected, and no line stop for a model change since. Operators 6 to 3, 2,000 to 2,600 batteries a day, the customer's own numbers. In production on battery, rail and tyre lines; vehicle-tested on six ADAS functions; the same runtime on four NPU families.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-10">Who should come</h3>
    <p class="text-xl mb-6">
      Teams running vision AI on a line, in a vehicle or on a robot who have seen a validated model go wrong after deployment. Silicon and camera partners who want the runtime beside their customers' models. Bring a wrong call from your own deployment; we will tell you which layer it came from.
    </p>

    <p class="text-xl mb-6">
      Register through the official event page: <a href="https://lnkd.in/dCf7k85u" target="_blank" rel="noreferrer" class="text-white underline underline-offset-4">Embedded World India 2026</a>. Catch the wrong call. Fix the cause. Prove it.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-11-17",
  readTime: "3 min read",
  image: "/images/blog-ewi-2026-booth.jpg",
  tags: ["Embedded World India", "Booth SP16", "Self-Correction", "Physical AI", "Live demo"],
  type: "news",
  category: "Conference",
};

export default blog;
