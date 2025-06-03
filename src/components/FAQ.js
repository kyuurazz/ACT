import React, { useState } from 'react';

const faqs = [
  {
    question: 'Apa itu AnonCyberTeam?',
    answer:
      'AnonCyberTeam adalah komunitas IT Security Indonesia yang berdedikasi untuk edukasi dan diskusi dunia cyber.',
  },
  {
    question: 'Berapa Jumlah Anggota AnonCyberTeam?',
    answer:
      'Kami memiliki anggota yang terus bertambah, terdiri dari berbagai kalangan.',
  },
  {
    question: 'Apakah AnonCyberTeam membuka jasa pentesting untuk sistem kami?',
    answer:
      'Saat ini kami fokus pada edukasi dan komunitas, jasa pentesting belum tersedia.',
  },
  {
    question: 'Bisakah saya menggunakan jasa development website dari AnonCyberTeam?',
    answer:
      'Untuk saat ini belum, tapi kami berencana membuka layanan tersebut di masa depan.',
  },
  {
    question: 'Saya seorang pemula, apakah saya bisa bergabung?',
    answer: 'Tentu saja! Kami sangat welcome untuk pemula yang ingin belajar.',
  },
  {
    question: 'Bisakah saya mengundang AnonCyberTeam sebagai pemateri?',
    answer:
      'Silakan hubungi kami melalui kontak resmi untuk kerjasama pematerian.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full pt-10 px-6 text-gray-300 overflow-hidden bg-black">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-white text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="bg-gray-900 bg-opacity-60 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-content-${idx}`}
                id={`faq-toggle-${idx}`}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline focus:outline-2 focus:outline-blue-500 text-white"
              >
                <span className="text-lg font-semibold">{question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openIndex === idx && (
                <div
                  id={`faq-content-${idx}`}
                  role="region"
                  aria-labelledby={`faq-toggle-${idx}`}
                  className="px-6 pb-6 text-gray-300 transition-all duration-300"
                >
                  <p>{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
