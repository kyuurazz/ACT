import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`w-full bg-black pt-20 pb-10 px-6 md:flex md:items-center md:space-x-20 max-w-7xl mx-auto transition-opacity duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      <div className="md:w-1/2 mb-12 md:mb-0 cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          src="act.png"
          alt="Cyber Security Community"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="md:w-1/2 text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Tentang{' '}
          <span className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
            Kami
          </span>
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          AnonCyberTeam adalah komunitas IT Security Indonesia yang terbentuk tahun 2015 tepatnya tanggal 21 January.
          Pada awalnya, kami tempat berkumpulnya para penggiat dunia cyber. Kini, kami fokus membahas tentang{' '}
          <span className="font-semibold text-blue-400">Exploit</span>,{' '}
          <span className="font-semibold text-blue-400">Web Developer</span>,{' '}
          <span className="font-semibold text-blue-400">Network Infrastruktur</span>, dan kejahatan dalam dunia internet.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Visi kami adalah membuka mata masyarakat awam tentang pentingnya keamanan internet di era modern ini.
          Misi kami adalah membuka kesempatan belajar dunia cyber bagi semua kalangan.
        </p>
      </div>
    </section>
  );
}
