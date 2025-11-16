// sections/FooterSection.jsx
import React from 'react';
import SponsorsCarousel from '../components/SponsorsCarousel';

const FooterSection = ({ sponsors }) => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 xs:mb-10 sm:mb-12 md:mb-16 uppercase tracking-tight text-center">
          Featured <span className="text-cyan-400">Sponsors</span>
        </h2>

        <SponsorsCarousel sponsors={sponsors} />

        <div className="border-t border-gray-800 pt-6 xs:pt-7 sm:pt-8 md:pt-10 text-center text-gray-500 text-xs xs:text-sm sm:text-base">
          © JPO2025 HK11. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;