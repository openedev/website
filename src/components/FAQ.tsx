import React from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'What is Edgeble Runtime?',
    answer: `A self-correcting runtime that keeps deployed AI accurate in the field. When conditions shift, hardware strains, or models drift, it detects the problem, finds which layer failed - the physical system, the hardware, or the model - and corrects it on-device without stopping inference. It is the layer that keeps Physical AI working after deployment.`,
  },
  {
    question: 'Where does Runtime work beyond factory inspection?',
    answer: `Anywhere AI runs on a device in the real world and has to keep working: industrial inspection, robotics, automotive, and other Physical AI systems. The problem is the same everywhere: deployed AI degrades as conditions change, and self-correction keeps it accurate on the device. It is proven in production in industrial inspection today, and the same runtime extends to robotics and other edge AI systems irrespective of development and deployment phases. In robotics especially, where physical wear and model behavior affect each other, cross-layer self-correction matters most.`,
  },
  {
    question: 'How is Edgeble Runtime different?',
    answer: `Most edge AI tools stop at running inference or flagging that something is wrong. They leave the fixing to you. Runtime does not just detect a problem; it finds which layer caused it - the physical system, the hardware, or the model - and corrects it automatically on the device without stopping. Acting on the problem, not just reporting it, is the difference.`,
  },
  {
    question: 'Does it work on specific silicon, hardware, and model?',
    answer: `Yes. The runtime is hardware-agnostic and runs as a separate module across edge silicon, integrating with your existing inference and models. It has been proven across multiple NPUs and platforms. You keep your stack; Edgeble adds the self-correction layer on top. If you would rather not integrate anything, we also offer plug-and-play hardware with the self-correcting runtime built in and ready to deploy.`,
  },
  {
    question: 'Do we need to replace or modify an existing AI system?',
    answer: `No. Runtime plugs into a running AI system as a separate layer - it adds self-correction without replacing or rebuilding what is already deployed. Take just the runtime layer onto an existing stack, or the full stack - runtime, inference, and hardware - if preferred.`,
  },
  {
    question: 'How does integration work, and how long does it take?',
    answer: `The runtime integrates with your existing inference as a module. Connect it to your deployed models and devices, and it starts monitoring and correcting. Timelines depend on your setup; adding support for a new platform is bounded work, not a rebuild.`,
  },
  {
    question: 'What does it improve?',
    answer: `Your deployed AI stays accurate instead of silently degrading. That means fewer field failures, less manual maintenance, and no downtime when models drift. In production, our deployments run with fewer operators, higher throughput, and no line stoppage when a model needs correcting.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section id="faq" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
            FAQ
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            What customers ask before deploying.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Practical answers about where Edgeble Runtime fits, how it integrates, and what self-correction changes in the field.
          </p>
        </div>

        <div className="w-full border-y border-white/10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="flex h-6 w-7 shrink-0 items-center justify-center bg-white text-[11px] font-bold text-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xl md:text-2xl font-semibold text-white">{item.question}</span>
                  </div>
                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center text-white/80">
                    <Plus className={`absolute h-5 w-5 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <X className={`absolute h-5 w-5 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                  </span>
                </button>
                {isOpen && (
                  <div id={answerId} className="pb-7 pl-11 pr-10 md:pl-11">
                    <p className="max-w-4xl text-lg md:text-xl leading-relaxed text-white/72">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
