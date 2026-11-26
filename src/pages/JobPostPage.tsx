import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react';
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

const RECIPIENTS = 'info@edgeble.ai, srinivas@edgeble.ai';

function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const inputClass =
    'w-full bg-white text-black border border-white/20 rounded-lg px-4 py-3 placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-[var(--edgeble-green)]';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('_replyto', email);
      data.append('role', jobTitle);
      data.append('_subject', `Application: ${jobTitle} - ${name}`);
      data.append('_cc', 'srinivas@edgeble.ai');
      data.append('resume_link', resumeLink);
      if (link) data.append('link', link);
      if (note) data.append('note', note);
      const r = await fetch('https://formspree.io/f/xojarqwr', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!r.ok) throw new Error('failed');
      setSent(true);
    } catch {
      setError(`Could not send. Email your resume link to ${RECIPIENTS} with the role in the subject.`);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="mt-12 border border-white/10 bg-white/[0.04] rounded-lg p-7 flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--edgeble-green)] shrink-0 mt-1" />
        <div>
          <p className="text-xl text-white font-semibold mb-2">Application received.</p>
          <p className="text-white/75">
            Sent. We reply it soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-12 border border-white/10 bg-white/[0.04] rounded-lg p-7">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Apply for this role</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className={inputClass}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <input
        className={`${inputClass} mt-4`}
        type="url"
        name="resume_link"
        placeholder="Resume link: Google Drive, Dropbox or any URL, set to viewable"
        value={resumeLink}
        onChange={(e) => setResumeLink(e.target.value)}
        required
      />
      <input
        className={`${inputClass} mt-4`}
        type="url"
        name="link"
        placeholder="GitHub, LinkedIn or portfolio link (optional)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <textarea
        className={`${inputClass} mt-4`}
        name="note"
        rows={4}
        placeholder="A few lines on why this role, and how you work with agents (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      {error && <p className="mt-4 text-[#ff8a8a]">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex items-center justify-center bg-[#77DB89] text-black hover:bg-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60"
      >
        {sending ? 'Sending...' : 'Submit application'}
        <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </form>
  );
}

export default function JobPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = JOB_OPENINGS.find((opening) => opening.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen bg-site text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-[112px] px-6">
          <h1 className="text-4xl font-bold mb-4">Role Not Found</h1>
          <p className="text-white/85 mb-8">The job opening you are looking for does not exist.</p>
          <a href="/jobs" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200">
            Back to Jobs
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-site text-white">
      <Navigation />

      <div className="bg-site border-b border-white/10 pt-[112px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-white hover:text-white/85 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Jobs
            </button>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-white/75 mb-5 font-medium">
            JOB OPENING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/85 text-sm font-medium">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/75" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white/75" />
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
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">{job[section.key]}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 rounded">
              {tag}
            </span>
          ))}
        </div>

        <ApplyForm jobTitle={job.title} />
      </main>

      <Footer />
    </div>
  );
}
