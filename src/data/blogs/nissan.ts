import { BlogPost } from "../blogTypes";

const blog: BlogPost = {
  title: "Winner of RNTBCI Open Innovation Challenge",
  slug: "nissan25",
  excerpt: "Nissan chosen Edgeble Self-learning Edge Intelligence, See why?",
  content: `
  <p class="text-xl mb-6">
  Edgeble has been selected as a <strong>winner of the RNTBCI Open Innovation Challenge</strong>, organized by
  <a href="https://rntbci.in" target="_blank" class="underline">Renault Nissan Technology & Business Centre India (RNTBCI)</a>
  and <a href="https://www.nissan-global.com/EN" target="_blank" class="underline">Nissan</a> following a rigorous technical and business evaluation
  in <span class="text-[#77DB89] font-semibold">Edge AI Accelerator & Orchestration</span> sector.

  <p class="text-xl mb-6">
  The challenge recognized Edgeble’s work in building <strong>self-learning edge intelligence</strong> designed to operate
  directly inside automotive physical systems spanning both manufacturing environments and vehicle platforms.
  </p>

  <h3 class="text-2xl font-bold text-white mb-4 mt-10">
  Edge Intelligence Inside Automotive Physical Systems
  </h3>

  <p class="text-xl mb-6">
  Automotive systems operate under strict real-time, safety, and reliability constraints.
  Yet most AI deployments remain static, cloud-dependent, and disconnected from long-running physical behavior.
  </p>

  <p class="text-xl mb-6">
  Edgeble’s approach embeds intelligence directly inside the system by enabling on-device inference, continuous
  observation of physical signals, and controlled learning without disrupting operations.
  </p>

  <h3 class="text-2xl font-bold text-white mb-4 mt-12">
  Intelligence for Factory Environments
  </h3>

  <p class="text-xl mb-6">
  On the factory floor, machines, welds, assemblies, and motion systems evolve continuously due to wear, drift,
  and operational variability. Edgeble’s edge-native intelligence observes these physical processes in real time
  and adapts to changing conditions directly at the source.
  </p>

  <img
  src="/images/nissan-predict1.png"
  alt="Edge AI operating inside automotive factory systems"
  class="w-full rounded-xl my-8" />

  <img
  src="/images/nissan-predict2.png"
  alt="Edge AI operating inside automotive factory systems"
  class="w-full rounded-xl my-8" />

  <p class="text-xl mb-6">
  By running intelligence locally and learning from operational feedback, physical systems gain the ability
  to respond early to deviations, maintain consistency, and evolve safely over long production lifecycles.
  </p>

  <h3 class="text-2xl font-bold text-white mb-4 mt-12">
  Intelligence for Vehicle Platforms
  </h3>

  <p class="text-xl mb-6">
  Modern vehicles rely on tightly coupled perception and control systems that must react within milliseconds. 
  Edgeble’s self-learning edge intelligence enables on-device perception pipelines that remain deterministic,
  explainable, and adaptable to real-world driving conditions.
  </p>

  <img
  src="/images/nissan-adas1.png"
  alt="Edge intelligence operating inside vehicle systems"
  class="w-full rounded-xl my-8"/>

  <img
  src="/images/nissan-adas2.png"
  alt="Edge intelligence operating inside vehicle systems"
  class="w-full rounded-xl my-8"/>

  <p class="text-xl mb-6">
  By keeping intelligence inside the vehicle and aligned with physical constraints, systems can improve
  robustness, responsiveness, and long-term reliability without relying on continuous cloud connectivity.
  </p>

  <h3 class="text-2xl font-bold text-white mb-4 mt-12">
  Collaboration with RNTBCI and Nissan
  </h3>

  <p class="text-xl mb-6">
  This recognition strengthens Edgeble’s collaboration with
  <a href="https://www.nissan-global.com" target="_blank" class="underline">Nissan</a> and
  RNTBCI to advance next-generation edge intelligence architectures for automotive systems.
  </p>

  <p class="text-xl mb-6">
  Together, the focus is on building scalable, upgradeable, and verifiable intelligence that aligns
  with real-world automotive constraints — from factory deployment to vehicle integration.
  </p>

  <h3 class="text-2xl font-bold text-white mb-4 mt-12">
  Recognition Moment
  </h3>

  <img
  src="/images/nissan-grant.jpeg"
  alt="Edgeble receiving RNTBCI Open Innovation Challenge award"
  class="w-full rounded-xl my-8"/>

  <p class="text-xl mb-6">
  Being selected as a winner of the RNTBCI Open Innovation Challenge marks an important milestone for
  Edgeble validating our belief that the future of automotive intelligence lies in systems that can
  <strong>infer, act, and learn continuously inside physical environments</strong>.</p>
  `,
  author: "Jagan Teki",
  date: "2025-12-08",
  readTime: "3 min read",
  image: "/images/nissan-win.jpg",
  tags: ['RNTBCI', 'Nissan', 'Automotive', 'ADAS', 'Predictive', 'Physical AI'],
  type: "news",
  category: "Recognition",
};

export default blog;
