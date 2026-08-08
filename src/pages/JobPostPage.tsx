import React from 'react';
import { ArrowLeft, ArrowRight, Clock, MapPin } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { JOB_OPENINGS } from '../data/jobs';

const sections = [
  { key: 'whatWeBuild', label: 'What We Build' },
  { key: 'role', label: 'The Role' },
  { key: 'howWeWork', label: 'How We Work' },
  { key: 'you', label: 'You' },
  { key: 'whyHere', label: 'Why Here' },
] as const;

export default function JobPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = JOB_OPENINGS.find((opening) => opening.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-20 px-6">
          <h1 className="text-4xl font-bold mb-4">Role Not Found</h1>
          <p className="text-white/70 mb-8">The job opening you are looking for does not exist.</p>
          <a href="/jobs" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200">
            Back to Jobs
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="bg-black border-b border-white/10 pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-white hover:text-white/70 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Jobs
            </button>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-[#77DB89] mb-5 font-medium">
            JOB OPENING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#77DB89] mb-5 leading-tight">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/70 text-sm font-medium">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#77DB89]" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#77DB89]" />
              {job.location}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.key} className="border-b border-white/10 pb-10 last:border-b-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{section.label}</h2>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed">{job[section.key]}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/70 rounded">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`mailto:info@edgeble.ai?subject=${encodeURIComponent(job.title)}`}
          className="mt-12 inline-flex items-center justify-center bg-[#77DB89] text-black hover:bg-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Apply for this role
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </main>

      <Footer />
    </div>
  );
}
