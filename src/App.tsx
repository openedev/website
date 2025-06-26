import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CompaniesAndSolutions from './components/CompaniesAndSolutions';
import Products from './components/Products';
import Solutions from './components/Solutions';
import WhatsNew from './components/WhatsNew';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactEngineers from './pages/ContactEngineers';
import SolutionsPage from './pages/SolutionsPage';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <CompaniesAndSolutions />
        <Products />
        <Solutions />
        <WhatsNew />
        <About />
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
        <Route path="/contact-engineers" element={<ContactEngineers />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/products/npu" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">EdgeGPT NPU Chips - Coming Soon</h1></div>} />
        <Route path="/products/model" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">EdgeGPT Model - Coming Soon</h1></div>} />
        <Route path="/products/agentic" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">Edge AI Agentic - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
