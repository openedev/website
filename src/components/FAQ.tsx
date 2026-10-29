import React from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'What does Edgeble do?',
    answer: `A deployed model makes claims this part is defective, this lane is clear, grasp here. Edgeble is a runtime beside the model that checks every claim before it becomes a decision, in about 13 milliseconds, and corrects the wrong ones on the spot. When wrong claims repeat, it finds the cause sensor, chip or model fixes it on the device, and proves the fix. Nothing stops; nothing leaves the device.`,
  },
  {
    question: 'How can it know the model is wrong?',
    answer: `It does not take the model’s word for it. It compares what the model says with what the site has already confirmed to be true: a second opinion from different evidence. If the evidence agrees, the call stands. If it disagrees, the call is corrected. If it is unsure, it says so instead of guessing.`,
  },
  {
    question: 'Does it work with our model and our hardware?',
    answer: `Yes. Any vision model, including vendor-compiled models that cannot be changed, on the chips you already use: four NPU families today (Rockchip, NXP, DeepX, Qualcomm). The same runtime runs on lines, in vehicles, on phones and on robots; only the setup for each scene changes.`,
  },
  {
    question: 'What does it fix?',
    answer: `A wrong call has one of three causes: the sensor, the chip, or the model. Edgeble finds which one and fixes that one. If model is not the cause and nothing is retrained. When it is, the fix is small, happens on the device, is tested before it goes live, and can be undone in seconds.`,
  },
  {
    question: 'How do we start?',
    answer: `Two ways. If you already run inference, hook the correction API into it and run the correction toolchain once to load the evidence: a few confirmed examples from your site. If you are still validating in the lab, install the correction beside the inference on the device and it runs from there. Either way your model does not change, and you watch the log from day one. Docs on request · info@edgeble.ai`,
  },
  {
    question: 'What do we get as proof?',
    answer: `A signed ledger: one line per claim with every check’s vote, the verdict, every capture, every gate result and every swap or rollback. It is the record the EU AI Act asks for and the field-monitoring evidence ISO/PAS 8800 expects in a vehicle produced on the device as a by-product of running.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section id="faq" className="bg-site py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-20">
          <div className="max-w-xl mb-12 lg:mb-0">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
              FAQ
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              What customers ask before deploying.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              How Edgeble fits your AI, corrects the claim, protects data, and helps your Physical AI accurate for the life of the machine.
            </p>
            <a
              href="mailto:info@edgeble.ai"
              className="mt-8 inline-flex items-center justify-center bg-white text-black hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Talk to Founders
            </a>
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

      </div>
    </section>
  );
}
