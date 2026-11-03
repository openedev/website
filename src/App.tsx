import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedUpdates from './components/FeaturedUpdates';
import WhyWrongClaims from './components/WhyWrongClaims';
import Loop from './components/Loop';
import Where from './components/Where';
import Start from './components/Start';
import ArchitecturePage from './pages/ArchitecturePage';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactEngineers from './pages/ContactEngineers';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import JobsPage from './pages/JobsPage';
import JobPostPage from './pages/JobPostPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-site">
      <Navigation />
      <main>
        <Hero />
        <WhyWrongClaims />
        <Loop />
        <Start />
        <Where />
        <FeaturedUpdates />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-site">
      <Navigation />
      <main className="pt-[112px]">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-engineers" element={<ContactEngineers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/news" element={<Navigate to="/blog" replace />} />
        <Route path="/news/:slug" element={<BlogPostPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:slug" element={<JobPostPage />} />
        <Route path="/products/runtime" element={<div className="min-h-screen bg-site text-white flex items-center justify-center px-6 text-center"><h1 className="text-4xl">Edgeble Runtime Engine - Coming Soon</h1></div>} />
        <Route path="/products/module" element={<div className="min-h-screen bg-site text-white flex items-center justify-center px-6 text-center"><h1 className="text-4xl">Edgeble Runtime Module - Coming Soon</h1></div>} />
        <Route path="/products/npu" element={<div className="min-h-screen bg-site text-white flex items-center justify-center px-6 text-center"><h1 className="text-4xl">On-device Physical AI Runtime - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
