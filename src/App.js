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
    <>
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
          <section id="kegiatan" className="w-full bg-white pt-7">
            <Kegiatan />
          </section>
          <section id="faq" className="w-full bg-black pt-7">
            <FAQ />
          </section>
        </main>
        <Footer />
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          /* Untuk browser WebKit (Chrome, Safari) */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          /* Untuk Firefox */
          html {
            scrollbar-width: none;
          }
        }
      `}</style>
    </>
  );
}

export default App;
