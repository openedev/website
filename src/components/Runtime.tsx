import React from 'react';

const FullStackAI = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6 font-medium">
                AI FOR THE ENTERPRISE
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Full-Stack AI Solutions
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Outcomes delivered with world-class data, models, agents, and deployment.
              </p>
              <button className="mt-8 bg-white text-black hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2">
                Book a Demo →
              </button>
            </div>

            <div className="space-y-10 pt-8">
              {/* Fine-Tuning and RLHF */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fine-Tuning and RLHF
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.
                </p>
              </div>

              {/* Foundation Models */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Foundation Models
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.
                </p>
              </div>

              {/* Enterprise Data */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Enterprise Data
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.
                </p>
              </div>
            </div>
          </div>

          {/* Right 3D Visualization */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* 3D Stack Visualization */}
              <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                <div className="relative w-full h-full transform-style-3d" style={{ transform: 'rotateX(15deg) rotateY(-25deg)' }}>
                  {/* Base Platform - Scale Data Engine */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-32 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Scale Data Engine</div>
                    </div>
                  </div>

                  {/* Middle Layer - Foundation Models & RLHF */}
                  <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-[85%] h-28 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-lg shadow-2xl flex items-center justify-center border border-white/30">
                    <div className="grid grid-cols-2 gap-4 w-full px-8">
                      <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-white/70">Fine-Tuned Foundation Models</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-white/70">RLHF</div>
                      </div>
                    </div>
                  </div>

                  {/* Top Pillars */}
                  <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 w-[80%] grid grid-cols-6 gap-3">
                    {/* Marketing */}
                    <div className="h-24 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg shadow-xl border border-white/30 flex items-end justify-center pb-2">
                      <div className="text-[8px] uppercase tracking-wider text-white transform rotate-90 origin-bottom whitespace-nowrap">Marketing</div>
                    </div>

                    {/* Financial Services */}
                    <div className="h-32 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg shadow-xl border border-white/30 flex items-end justify-center pb-2">
                      <div className="text-[8px] uppercase tracking-wider text-white transform rotate-90 origin-bottom whitespace-nowrap">Financial Services</div>
                    </div>

                    {/* Insurance */}
                    <div className="h-40 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg shadow-xl border border-white/30 flex items-end justify-center pb-2">
                      <div className="text-[8px] uppercase tracking-wider text-white transform rotate-90 origin-bottom whitespace-nowrap">Insurance</div>
                    </div>

                    {/* Retail */}
                    <div className="h-48 bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-lg shadow-xl border border-white/40 flex items-end justify-center pb-2">
                      <div className="text-[8px] uppercase tracking-wider text-white transform rotate-90 origin-bottom whitespace-nowrap">Retail</div>
                    </div>

                    {/* E-Commerce */}
                    <div className="h-36 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg shadow-xl border border-white/30 flex items-end justify-center pb-2">
                      <div className="text-[8px] uppercase tracking-wider text-white transform rotate-90 origin-bottom whitespace-nowrap">E-Commerce</div>
                    </div>

                    {/* Legal */}
                    <div className="h-44 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-lg shadow-xl border border-white/30 flex items-end justify-center pb-2">
                      <div className="text-[8px] uppercase tracking-wider text-white transform rotate-90 origin-bottom whitespace-nowrap">Legal</div>
                    </div>
                  </div>

                  {/* Labels for middle platforms */}
                  <div className="absolute bottom-36 left-[15%] text-[10px] uppercase tracking-wider text-white/40 transform -rotate-6">
                    Claude 3.5
                  </div>
                  <div className="absolute bottom-20 right-[20%] text-[10px] uppercase tracking-wider text-white/40 transform rotate-3">
                    GPT-4o
                  </div>
                  <div className="absolute bottom-12 left-[25%] text-[10px] uppercase tracking-wider text-white/40 transform -rotate-3">
                    Llama 3
                  </div>
                  <div className="absolute bottom-6 right-[15%] text-[10px] uppercase tracking-wider text-white/40 transform rotate-6">
                    Gemini Pro
                  </div>
                </div>
              </div>

              {/* Ambient glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStackAI;
