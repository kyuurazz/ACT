import React, { useState, useEffect } from 'react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Youtube', href: 'https://www.youtube.com/@anoncyberteam1880' },
  { label: 'Blog', href: 'https://blog.anoncyberteam.or.id/' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll ketika menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-extrabold text-gray-900 select-none focus:outline focus:outline-2 focus:outline-blue-600"
            tabIndex={0}
          >
            AnonCyberTeam
          </a>

          {/* Desktop menu */}
          <ul
            className="hidden md:flex space-x-8 text-gray-700 font-semibold text-sm"
            role="menubar"
          >
            {menuItems.map(({ label, href }) => (
              <li key={label} role="none">
                <a
                  href={href}
                  onClick={closeMenu}
                  className="hover:text-blue-600 transition-colors duration-300 focus:outline focus:outline-2 focus:outline-blue-600"
                  role="menuitem"
                  tabIndex={0}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Challenge button desktop */}
          <a
            href="https://anoncyberteam.or.id/challenge/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2 rounded-md font-semibold shadow-md transition focus:outline focus:outline-2 focus:outline-blue-600"
            role="button"
            tabIndex={0}
          >
            Challenge
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group focus:outline focus:outline-2 focus:outline-blue-600"
            type="button"
          >
            <span
              className={`block absolute w-6 h-0.5 bg-gray-900 rounded transition-transform duration-300 origin-center ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`block absolute w-6 h-0.5 bg-gray-900 rounded transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block absolute w-6 h-0.5 bg-gray-900 rounded transition-transform duration-300 origin-center ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Sidebar menu */}
      <div
        aria-hidden={!isOpen}
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="absolute top-5 right-5 text-gray-900 hover:text-blue-600 focus:outline focus:outline-2 focus:outline-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="mt-20 flex flex-col space-y-6 px-6">
          {menuItems.map(({ label, href }, idx) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer opacity-0 animate-slide-in-left`}
              tabIndex={isOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Floating action buttons */}
        <div className="absolute bottom-10 left-6 right-6 flex flex-col space-y-4">
          <a
            href="https://anoncyberteam.or.id/challenge/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 rounded-md font-semibold shadow-lg text-center transition focus:outline focus:outline-2 focus:outline-green-600"
            role="button"
            tabIndex={isOpen ? 0 : -1}
          >
            Challenge
          </a>
        </div>
      </div>

      {/* Animasi keyframes */}
      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation-name: slide-in-left;
          animation-duration: 0.4s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }
      `}</style>
    </>
  );
}
