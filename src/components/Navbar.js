import React, { useState } from 'react';

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold text-gray-900 select-none focus:outline focus:outline-2 focus:outline-blue-600"
        >
          AnonCyberTeam
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold text-sm" role="menubar">
          {menuItems.map(({ label, href }, idx) => (
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

        {/* Join Button desktop */}
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
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline focus:outline-2 focus:outline-blue-600"
          type="button"
        >
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transform transition duration-300 origin-left ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transform transition duration-300 origin-left ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-semibold text-base" role="menu">
          {menuItems.map(({ label, href }) => (
            <li key={label} role="none">
              <a
                href={href}
                onClick={closeMenu}
                className="block hover:text-blue-600 transition-colors duration-300 focus:outline focus:outline-2 focus:outline-blue-600"
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
          <li role="none">
            <a
              href="https://chat.whatsapp.com/your-whatsapp-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2 rounded-md font-semibold shadow-md text-center transition focus:outline focus:outline-2 focus:outline-blue-600"
              role="button"
              tabIndex={isOpen ? 0 : -1}
            >
              Join
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
