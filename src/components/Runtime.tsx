import React from 'react';

const Runtime = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-5 font-medium">
                REAL WORLD, PHYSICAL AI
              </p>
              <h2 className="text-5xl md:text-5xl font-bold text-white mb-4 whitespace-nowrap">
                Self-learning Edge AI
              </h2>
              <p className="text-xl text-white max-w-4xl">
                Edge Devices to learn, correct and recovers — All on the Edge
              </p>
              <button className="mt-8 bg-white text-black hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2">
                Product Inquiry
              </button>
            </div>

            <div className="space-y-10 pt-8">
              {/* Adaptive Edge Models */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Domain-specific Edge Models
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Fine-tuned, Quantized and Adaptive Edge Models that senses drift and adapts through on-device loopback learning.
                </p>
              </div>

              {/* Retrain Engine */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Retrain Engine
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Integrated micro-learning algorithms that enables local retraining without cloud dependency.
                </p>
              </div>

              {/* Agentic Interface */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Agentic Interface
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Built-in agentic control interfaces allow physical systems to self-correct and optimize in real time.
                </p>
              </div>
            </div>
          </div>

	  <div className="relative overflow-hidden rounded-2xl -mt-8">
            <img
              src="images/self.png"
              alt="Self-learning Edge AI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Runtime;
