// sections/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 xs:py-16 sm:py-20 md:py-28 lg:py-36 xl:py-40 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 xs:mb-6 sm:mb-8 uppercase tracking-tight leading-tight">
              About JPO
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed xs:leading-loose font-medium">
                 JPO (Journée Portes Ouvertes) is a vibrant event that brings together students, professionals, and industry leaders for a day of discovery, innovation, and opportunity. It’s a space where ideas meet action — offering workshops, exhibitions, and networking sessions designed to bridge the gap between education and the professional world. Whether you’re looking to explore new technologies, meet top companies, or shape your future career path, JPO is the perfect place to connect, learn, and grow.            </p>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/jpo20252.png" 
                alt="Conference" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;