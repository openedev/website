export type JobOpening = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  whatWeBuild: string;
  role: string;
  howWeWork: string;
  you: string;
  whyHere: string;
  tags: string[];
};

const whatWeBuild =
  'Physical AI breaks after deployment. Models drift, conditions change, and on the edge there is no cloud to catch it. Edgeble self-correcting runtime keeps deployed AI accurate on-device, without stopping inference. It is in production at Tier-1 manufacturers and hardware-agnostic across edge NPUs.';

const howWeWork =
  'Edgeble is agent-native. We build with agentic coding workflows daily on internal platform tooling already set up for it. You direct the agents; your judgment goes on what agents cannot do: correction logic, validation design, and what better means. If you would rather type every line yourself, this role will frustrate you, self-select accordingly.';

const whyHere =
  'Own a defined layer of a production, patent-pending runtime at the moment it scales. Early-team equity, direct work with a founder with 19 years of experience across silicon, embedded systems, Edge AI, Linux kernel/U-Boot maintenance, and physical systems, in the working style most teams are still debating.';

export const JOB_OPENINGS: JobOpening[] = [
  {
    slug: 'mts-on-device-model',
    title: 'MTS - On-Device Model Correction',
    type: 'Full-time',
    location: 'Hyderabad / Hybrid',
    summary:
      'Own the model layer of Edgeble runtime: degradation detection, on-device adaptation, and validation before an adapted model ever serves.',
    whatWeBuild,
    role:
      'Own the model layer of the runtime. How a deployed model degradation is detected, how it is adapted on-device under tight compute and memory budgets, and how you prove an adapted model is better before it ever serves. This is the hard, unsolved part of edge AI: adaptation that is safe enough for production lines. You will take a working system further toward more model families, tighter resource envelopes, and field-grade robustness.',
    howWeWork,
    you:
      '4-6 years of genuine ML engineering depth, training and fine-tuning beyond inference integration, quantization for edge targets, and comfort with resource-constrained deployment. Embedded exposure is a plus. This role should span vision, LLM, foundation, and world models. Concrete evidence you work well agent-augmented matters; we will ask how, specifically.',
    whyHere,
    tags: ['Model correction', 'Edge AI', 'Quantization', 'On-device adaptation', 'Agent-native'],
  },
  {
    slug: 'mts-on-device-npu',
    title: 'MTS - On-Device NPU, Camera Correction',
    type: 'Full-time',
    location: 'Hyderabad / Hybrid',
    summary:
      'Own the system layer of Edgeble runtime: the full vision-inference substrate from photons to tensors across camera paths, ISP pipelines, and NPU runtimes.',
    whatWeBuild,
    role:
      'Own the system layer of the runtime: the full vision-inference substrate from photons to tensors. That means deep work in the camera path, including V4L2, sensor and ISP pipelines, and capture timing, as well as the NPU runtime, including vendor SDKs, scheduling, thermal behavior, and memory behavior under sustained load. The core challenge: in the field, a capture-path or silicon problem looks like a model problem. This role is about making the system layer observable and correctable so the runtime can tell the difference. You will also extend the runtime to new silicon targets. It already runs on multiple NPU platforms; you will add the next ones.',
    howWeWork,
    you:
      'Strong embedded Linux depth is required. V4L2/media subsystem experience is central to this role, including sensor bring-up, subdev pipelines, and ISP tuning exposure. NPU or accelerator runtime experience on any vendor stack, such as Rockchip, NXP, Qualcomm, TI, or similar, matters. You should be comfortable reading kernel-side behavior when userspace numbers do not add up. Agent-augmented working evidence matters, as above.',
    whyHere,
    tags: ['Embedded Linux', 'V4L2', 'NPU runtime', 'Camera pipeline', 'Edge AI'],
  },
  {
    slug: 'robotics-physical-correction',
    title: 'Robotics: Physical System Coupled Correction',
    type: 'Full-time',
    location: 'Hyderabad / Hybrid',
    summary:
      'Investigate how on-device correction works when the physical system and the model are coupled, using real deployment data and a path to publishable findings.',
    whatWeBuild,
    role:
      "When a robot's physical embodiment drifts, actuator wear and calibration shift make the AI model degrade in ways the model itself cannot see. This role is about the open problem of coupled correction: what on-device correction looks like when the physical system and the model move together. You will work against real deployment data, study how the runtime should detect the coupling, and shape correction logic that is grounded in the system rather than just the model. The goal is to move toward publishable findings while improving a deployed runtime.",
    howWeWork,
    you:
      'Robotics, controls, or ML background with strong fit for final-year or masters students from robotics labs. You should be comfortable with real deployment data, observability, and iterative experimentation. Experience across embedded systems, controls, simulation, or field robotics is useful, especially where model performance depends on the physical platform.',
    whyHere,
    tags: ['Robotics', 'Controls', 'Systems', 'Field data', 'Publishable research'],
  },
  {
    slug: 'physical-ai-deployment',
    title: 'Physical AI Deployment: Industrial/Automotive',
    type: 'Full-time',
    location: 'Hyderabad / Hybrid',
    summary:
      'Work on deploying self-correcting Physical AI in industrial and automotive settings where real-world reliability matters more than lab metrics.',
    whatWeBuild,
    role:
      'Work on the deployment side of self-correcting Physical AI in industrial and automotive environments. The job is to take the runtime from working software to field-ready systems that survive noisy sensors, changing conditions, customer constraints, and long-running operation. You will help shape deployment validation, field integration, and the practical feedback loop between system behavior and model correction.',
    howWeWork,
    you:
      'Expected stream: Diploma or B.Tech in ECE, Mechanical, or Computers. Useful background includes embedded systems, deployment engineering, industrial automation, automotive software, or applied ML in physical systems. We care about the ability to reason about real hardware, real field conditions, and repeatable deployment behavior.',
    whyHere,
    tags: ['Industrial AI', 'Automotive AI', 'Deployment', 'Embedded systems', 'Validation'],
  },
];
