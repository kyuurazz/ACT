import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Join from './components/Join';
import Kegiatan from './components/Kegiatan';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section id="about" className="w-full bg-black">
          <About />
        </section>
        <section id="join" className="w-full bg-black">
          <Join />
        </section>
        <section id="kegiatan" className="w-full bg-white py-20">
          <Kegiatan />
        </section>
        <section id="faq" className="w-full bg-black">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
