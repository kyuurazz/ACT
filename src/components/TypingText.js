import React, { useState, useEffect } from 'react';

export default function TypingText({ speed = 120 }) {
  const fullText = ["Let's Join ", "AnonCyberTeam Community"];
  // Kita buat gabungkan jadi array karakter lengkap untuk efek typing satu per satu
  const combinedText = fullText.join('');
  
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    if (displayedLength < combinedText.length) {
      const timer = setTimeout(() => setDisplayedLength(displayedLength + 1), speed);
      return () => clearTimeout(timer);
    }
  }, [displayedLength, combinedText.length, speed]);

  // Ambil potongan teks berdasarkan length yg sudah tampil
  const currentText = combinedText.slice(0, displayedLength);

  // Cari batas index akhir "Let's Join "
  const firstPartLength = fullText[0].length; // 10
  const secondPartLength = fullText[1].length; // 12

  return (
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
      {/* Let's Join */}
      <span className="text-white">
        {currentText.slice(0, Math.min(displayedLength, firstPartLength))}
      </span>

      {/* AnonCyberTeam dengan gradien */}
      <span
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700"
        aria-label="AnonCyberTeam"
      >
        {currentText.length > firstPartLength
          ? currentText.slice(firstPartLength, Math.min(displayedLength, firstPartLength + secondPartLength))
          : ''}
      </span>

      {/* Community */}
      <span className="text-white">
        {currentText.length > firstPartLength + secondPartLength
          ? currentText.slice(firstPartLength + secondPartLength)
          : ''}
      </span>

      {/* Kursor blinking */}
      <span className="inline-block w-6 animate-blink">|</span>

      <style jsx>{`
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
          color: white;
        }
      `}</style>
    </h1>
  );
}
