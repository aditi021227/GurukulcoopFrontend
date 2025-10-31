import React from 'react';

const HeroSection = () => (
  <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16 text-center">
    <h1 className="text-5xl font-extrabold mb-4">Welcome to GurukulCoop</h1>
    <p className="text-xl mb-6">Empowering our community through collaboration and transparency.</p>
    <a href="/dashboard" className="inline-block px-8 py-3 bg-secondary-500 rounded-lg text-white font-semibold shadow-lg transition hover:bg-secondary-600">
      Member Dashboard
    </a>
  </section>
);

export default HeroSection;
