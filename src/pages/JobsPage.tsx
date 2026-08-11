import React from 'react';
import { ArrowLeft, ArrowRight, Briefcase, Clock, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { JOB_OPENINGS } from '../data/jobs';

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="bg-black border-b border-white/10 pt-[112px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-white hover:text-white/70 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#77DB89] mb-5 font-medium">
            JOBS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Open roles at Edgeble
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            Work on production self-correcting runtime infrastructure for Physical AI, across models, edge compute, and deployed physical systems.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6">
          {JOB_OPENINGS.map((job) => (
            <article
              key={job.slug}
              className="border border-white/10 bg-white/[0.04] rounded-lg p-7 hover:border-[#77DB89]/70 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-[#77DB89] text-black flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-3xl font-semibold text-[#77DB89] mb-3">{job.title}</h2>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium text-white/70">
                    <span className="inline-flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#77DB89]" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#77DB89]" />
                      {job.location}
                    </span>
                  </div>
                  <p className="text-lg text-white/75 leading-relaxed mb-5">{job.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag) => (
                      <span key={tag} className="border border-white/10 bg-black px-3 py-1.5 text-sm text-white/70 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/jobs/${job.slug}`}
                    className="inline-flex items-center text-white hover:text-[#77DB89] font-semibold transition-colors"
                  >
                    View role
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
