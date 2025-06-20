import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import Solutions from './components/Solutions';
import WhatsNew from './components/WhatsNew';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
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

export default App;