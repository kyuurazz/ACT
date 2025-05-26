import React from 'react';

export default function Join() {
  return (
    <section
      id="join"
      className="w-full bg-black pb-12 px-6 flex flex-col items-center justify-center text-center text-white"
      aria-label="Join section"
    >
      <h2 tabIndex={0} className="text-4xl font-extrabold mb-6 max-w-3xl">
        Join Komunitas Kami
      </h2>
      <p tabIndex={0} className="max-w-3xl mb-10 text-lg leading-relaxed">
        Join komunitas kami free dan tidak berbayar, tapi kamu harus menyelesaikan
        challenge yang kami berikan untuk masuk ke komunitas resmi. Jika gagal? Tenang,
        kamu tetap diijinkan masuk di grup belajar kami.
      </p>
      <a
        href="https://chat.whatsapp.com/your-whatsapp-group-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-12 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        role="button"
      >
        Link Group Whatsapp
      </a>
    </section>
  );
}
