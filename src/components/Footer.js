import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-8 text-center select-none">
      <p>© {new Date().getFullYear()} AnonCyberTeam. All rights reserved.</p>
    </footer>
  );
}
