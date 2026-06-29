import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedUpdates from './components/FeaturedUpdates';
import PhysicalSystems from './components/PhysicalSystems';
import CompaniesAndSolutions from './components/CompaniesAndSolutions';
import Team from './components/Team';
import BuildWithUs from './components/BuildWithUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactEngineers from './pages/ContactEngineers';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import News from './pages/News';

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <FeaturedUpdates />
        <CompaniesAndSolutions />
        <Team />
        <PhysicalSystems />
        <BuildWithUs />
      </main>
      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-engineers" element={<ContactEngineers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<BlogPostPage />} />
        <Route path="/products/runtime" element={<div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center"><h1 className="text-4xl">Edgeble Runtime Engine - Coming Soon</h1></div>} />
        <Route path="/products/module" element={<div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center"><h1 className="text-4xl">Edgeble Runtime Module - Coming Soon</h1></div>} />
        <Route path="/products/npu" element={<div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center"><h1 className="text-4xl">On-device Physical AI Runtime - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
