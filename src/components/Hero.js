import React from 'react';
import TypingText from './TypingText';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-black via-gray-900 to-black overflow-hidden px-6 text-center"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background blobs tetap sama */}

      <div className="relative max-w-4xl z-10 text-white">
        <TypingText />
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
          Komunitas Cyber Security Enthusiast di Seluruh Indonesia yang siap berbagi, belajar, dan berkembang bersama.
        </p>
        <a
          href="#about"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline focus:outline-2 focus:outline-blue-600"
          role="button"
        >
          Learn More
        </a>
      </div>


      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
