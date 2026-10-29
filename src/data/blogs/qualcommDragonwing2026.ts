import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Edgeble Self-Correcting on Qualcomm Dragonwing \u2014 ExecuTorch",
  slug: "edgeble-qualcomm-dragonwing-2026",
  excerpt:
    "Edgeble's self-correcting runtime runs on Qualcomm Dragonwing QCS8275, catching lighting-driven false positives on-device while the sealed detector stays on the Hexagon NPU.",
  content: `
    <p class="text-xl mb-6">
      At the ExecuTorch Hackathon in San Francisco, Edgeble brought its <strong>self-correcting runtime for deployed vision models</strong> to an Arduino VENTUNO Q powered by Qualcomm Dragonwing QCS8275.
    </p>

    <p class="text-xl mb-6">
      <strong>Correct now. Fix forever. Nothing leaves the device.</strong> The demonstration is a battery-terminal inspection rig: a YOLO11n detector runs on the Hexagon V75 NPU while the runtime checks decisions against evidence confirmed by the line. When lighting changes make good batteries look like mismatches, the correction happens on the device, without sending the frames to a cloud service.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      The problem we show
    </h3>

    <p class="text-xl mb-6">
      The factory model is trained with all three light strips on. The night rule turns two strips off while the camera remains locked to the day baseline. Good batteries then start being called <strong>Miss_Match</strong>—a false positive the factory cannot ship.
    </p>

    <ol class="text-xl mb-8 list-decimal pl-6 space-y-3">
      <li><strong>Correct:</strong> catch the wrong label at the decision point and fix it in milliseconds against examples the line itself confirmed.</li>
      <li><strong>Find the layer:</strong> measure whether the lamp or the model failed. A broken lamp is not a reason to retrain the model.</li>
      <li><strong>Learn and prove:</strong> when the model is behind, retrain its small head on the board, pass learning and forgetting checks, and swap it in with rollback.</li>
    </ol>

    <pre class="bg-white/5 border border-white/10 rounded-xl p-5 text-base text-white/80 overflow-x-auto mb-10">camera → model → judge → decision → tower light</pre>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      The hardware
    </h3>

    <p class="text-xl mb-6">
      The board is an <strong>Arduino VENTUNO Q</strong> with Qualcomm Dragonwing IQ8 / QCS8275, Hexagon V75, and Ubuntu 24.04. The rig uses a 1080p USB UVC camera, a NEMA stepper on an A4988, three LED strips controlled over Modbus RTU, and 9 V batteries mounted on a rotating ring. The same inspection rig was used on an RK3588 unit while the correction pipeline was developed.
    </p>

    <figure class="my-10">
      <img src="/images/qualcomm/board-connection.png" alt="Arduino VENTUNO Q and inspection rig connections" class="w-full rounded-xl" />
      <figcaption class="text-sm text-white/60 mt-3">The VENTUNO Q, camera, rotating battery rig, light strips, and control connections used for the demonstration.</figcaption>
    </figure>

    <video controls preload="metadata" class="w-full rounded-xl my-10">
      <source src="/videos/qualcomm-dragonwing-setup-rig.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p class="text-sm text-white/60 -mt-6 mb-10">
      Setup footage recorded at the venue on October 18, 2026: the rig, VENTUNO Q, camera, light strips, and the two inspection panes on the laptop.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      The stack
    </h3>

    <p class="text-xl mb-6">
      ExecuTorch executes the model on the Hexagon. Edgeble's inference layer owns the camera frame, letterbox, tracking, inspection gate, result log, HTTP stream, motor, and light strips. The correction layer sits at the decision point and owns the judge, layer diagnosis, head retraining, validation, and hot swap.
    </p>

    <div class="my-10 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <div class="border-b border-white/10 p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">Demo rig</p>
        <p class="text-lg text-white/85">Stepper ring, three LED strips, USB camera, and HTTP stream.</p>
      </div>
      <div class="border-b border-white/10 p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">Edgeble inference</p>
        <p class="text-lg text-white/85">Capture, tracking, gate logic, outputs, stream, motor, lights, and the Qualcomm runner seam.</p>
      </div>
      <div class="border-b border-white/10 p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">ExecuTorch 1.5.1</p>
        <p class="text-lg text-white/85">Static aarch64 runtime with the Qualcomm backend; the sealed detector executes on the Hexagon.</p>
      </div>
      <div class="border-b border-white/10 p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">QAIRT / QNN HTP</p>
        <p class="text-lg text-white/85">QNN HTP libraries, Hexagon V75 stub and skel, and the DSP library.</p>
      </div>
      <div class="border-b border-white/10 p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">Correction</p>
        <p class="text-lg text-white/85">Judge at the decision point, lamp-or-model diagnosis, on-device retrain, validation, and hot swap.</p>
      </div>
      <div class="border-b border-white/10 p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">Operating system</p>
        <p class="text-lg text-white/85">Ubuntu 24.04, Qualcomm kernel, FastRPC, and Docker.</p>
      </div>
      <div class="p-5">
        <p class="text-sm uppercase tracking-[0.16em] text-white/50 mb-2">Hardware</p>
        <p class="text-lg text-white/85">Arduino VENTUNO Q · Qualcomm Dragonwing IQ8 / QCS8275 · Hexagon V75.</p>
      </div>
    </div>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      Our model
    </h3>

    <p class="text-xl mb-6">
      This is not a stock checkpoint. Edgeble fine-tuned a YOLO11n detector on frames from this rig across four classes: <strong>positive</strong>, <strong>Negative</strong>, <strong>Miss_match Positive</strong>, and <strong>Miss_match_Negative</strong>. The classes cover both terminals of a 9 V battery and their swapped placements. The model was quantized and sealed for the Hexagon using Edgeble's export recipe.
    </p>

    <figure class="my-10">
      <img src="/images/qualcomm/battery-annotate.png" alt="Annotated battery terminal training frames" class="w-full rounded-xl" />
      <figcaption class="text-sm text-white/60 mt-3">Edgeble's YOLO11n model was fine-tuned on frames from the inspection rig across four battery-terminal classes.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      Sealed front, trainable head
    </h3>

    <p class="text-xl mb-6">
      The detector ships in two forms. The sealed form is the whole int8 detector as one ExecuTorch program delegated to the Hexagon. The second form keeps the front of the network sealed on the NPU and leaves a small float head on the CPU so it can learn on the board when the model is the failing layer. The sealed NPU portion is never modified.
    </p>

    <p class="text-xl mb-6">
      On the host, the model is exported through PT2E quantization and lowered to the QNN HTP delegate for QCS8275. On each frame, the runner letterboxes on the CPU, runs the sealed front on the Hexagon, passes the feature maps through the trainable head when that form is selected, and sends the outputs through the same post-processing path used on RK3588.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      Edgeble inference on the Q
    </h3>

    <p class="text-xl mb-6">
      ExecuTorch is the model runtime; it is not the application. Edgeble's C/C++ inference engine owns capture, tracking, gate logic, HTTP stream, Modbus outputs, and the hooks where correction judges and learns. The same vendor-neutral application layer runs across SoCs, while each platform supplies its own runner seam.
    </p>

    <p class="text-xl mb-6">
      The Q build carries both the Qualcomm QNN path and the ExecuTorch path. The board runs the aarch64 application in a container with the Hexagon devices and QNN libraries mounted. The live picture is served on port 8080 and the dashboard on port 8081.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      Correct the decision before fixing the model
    </h3>

    <p class="text-xl mb-6">
      The runtime first catches the wrong label at the decision point. It then measures whether the cause is the lamp or the model. A broken lamp is corrected at the physical layer; only a model failure reaches the trainable head. The head is checked for learning and forgetting before it is swapped in, with the previous version retained for rollback.
    </p>

    <figure class="my-10">
      <img src="/images/qualcomm/judge-false-positive-hotel-ab.png" alt="A good battery false positive corrected by the runtime judge" class="w-full rounded-xl" />
      <figcaption class="text-sm text-white/60 mt-3">The same frames before and after the judge: a good battery read as a mismatch becomes a confirmed positive/negative pair.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      The two cases
    </h3>

    <p class="text-xl mb-6">
      In the first case, all three light strips stay on: 16 batteries produced 10 Positive/Negative results and 6 genuine Miss_Match results. In the second, the same batteries run with one strip on and the camera on auto: 48 batteries produced 33 GO results and 15 good batteries incorrectly called Miss_Match. That second case is the drift the runtime has to catch.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      What the live panes show
    </h3>

    <p class="text-xl mb-6">
      The left/right comparison uses the same frames: the installed model reads a good battery as Miss_Match, while the judge compares the terminal crop with confirmed examples and changes the verdict to Positive and Negative. The live Q display carries four panes: the installed model, the model with the judge, the retrained head, and the retrained head with the judge.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      The correction loop
    </h3>

    <p class="text-xl mb-6">
      Correct now, find the layer, fix forever. On the device, the judge flags a wrong label at the decision point; the runtime tells a lamp problem from a model problem; when it is the model, the trainable head learns from corrected frames on the board, passes a learning and forgetting check, and swaps in while the previous head remains available for rollback. The full retrain and re-quantize path is slower; the on-device head is the fast correction path.
    </p>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      On-device performance
    </h3>

    <p class="text-xl mb-6">
      With the sealed model, the Q ran at 30 frames per second, with 9.5 ms inference per frame and 17 ms end-to-end latency. The sealed-front plus trainable-head path measured 26 ms per frame and 62 ms end to end at the same 30 frames per second. The board stayed at 40 °C in the hottest zone without throttling; the main CPU cost in the second path was software video decode and letterboxing, not the model.
    </p>

    <figure class="my-10">
      <img src="/images/qualcomm/grid-live-venue.jpg" alt="Four live inspection panes running on the VENTUNO Q" class="w-full rounded-xl" />
      <figcaption class="text-sm text-white/60 mt-3">Four live panes from the VENTUNO Q: the installed model, the judged model, the retrained head, and the retrained head with the judge.</figcaption>
    </figure>

    <h3 class="text-2xl font-bold text-white mb-4 mt-12">
      What this demonstrates
    </h3>

    <p class="text-xl mb-6">
      This is the complete loop on Qualcomm Dragonwing: inference, decision checking, layer diagnosis, on-device learning, validation, and swap. The measured result is deliberately specific. The judge corrected the lighting false positives on the Q; the first head-retrain iteration did not remove them. The runtime shows both outcomes instead of hiding the distinction between a demonstrated correction and work still in progress.
    </p>

    <p class="text-xl mb-6">
      <strong>October 17–18, 2026</strong> · Founders Inc., Bay Area, California · ExecuTorch Hackathon, IoT track · Open Source AI Week 2026.
    </p>
  `,
  author: "Jagan Teki",
  date: "2026-10-17",
  readTime: "2 min read",
  image: "/images/edgeble-qualcomm-dragonwing-2026.png",
  tags: ["Qualcomm Dragonwing", "ExecuTorch", "Physical AI", "Self-Correction", "Edge AI"],
  type: "blog",
  category: "Technology",
};

export default blog;
