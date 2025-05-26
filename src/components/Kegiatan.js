import React, { useEffect, useRef, useState } from 'react';

const kegiatanData = [
  {
    img: 'seminar1.png',
    title: 'Seminar Keamanan Siber',
    desc: 'Diskusi mendalam tentang ancaman dan solusi keamanan dunia maya.',
  },
  {
    img: 'seminar2.png',
    title: 'Networking & Collaboration',
    desc: 'Berkolaborasi dengan organisasi atau komunitas profesional lainnya.',
  },
  {
    img: 'workshop.png',
    title: 'Workshop Ethical Hacking',
    desc: 'Pelatihan langsung teknik hacking etis untuk pemula dan profesional.',
  },
  {
    img: 'webinar.jpg',
    title: 'Sharing Session',
    desc: 'Sesi untuk berbagi pengetahuan dan belajar bersama-sama.',
  },
  {
    img: 'gathering.png',
    title: 'Gathering & Meet up',
    desc: 'Berkumpul dan berbincang terkait tren teknologi dan bersenang-senang.',
  },
];

export default function Kegiatan() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="kegiatan"
      ref={ref}
      className="relative w-full py-20 px-6 overflow-hidden bg-white"
    >
      <div className="relative max-w-7xl mx-auto text-center text-gray-900 mb-12 px-4 md:px-0">
        <h2
          className={`text-5xl font-extrabold mb-4 tracking-wide transition-transform transition-opacity duration-700 ease-out ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          Kegiatan Komunitas Kami
        </h2>
        <p
          className={`max-w-3xl mx-auto text-lg text-gray-700 transition-transform transition-opacity duration-700 ease-out delay-150 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          Berikut adalah dokumentasi kegiatan yang penuh semangat dan edukasi dari komunitas AnonCyberTeam.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {kegiatanData.map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center text-gray-900">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animasi keyframes */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
