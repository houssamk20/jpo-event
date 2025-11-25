// sections/PartnersSection.jsx (Infinite Carousel Version)
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Partner 1', logo: '/cap.png' },
    { name: 'Partner 2', logo: '/cyber.png' },
    { name: 'Partner 3', logo: '/sof.png' },
    { name: 'Partner 4', logo: '/p2.png' },
    { name: 'Partner 5', logo: '/service.png' },
    { name: 'Partner 6', logo: '/prest.png' },
    { name: 'Partner 7', logo: '/quiz.png' },
    { name: 'Partner 8', logo: '/sepj.png' },
    { name: 'Partner 9', logo: '/artech.png' },
    { name: 'Partner 10', logo: '/cap.png' },
    { name: 'Partner 11', logo: '/cyber.png' },
    { name: 'Partner 12', logo: '/sof.png' },
    { name: 'Partner 13', logo: '/p2.png' },
    { name: 'Partner 14', logo: '/service.png' },
    { name: 'Partner 15', logo: '/prest.png' },
    { name: 'Partner 16', logo: '/quiz.png' },
    { name: 'Partner 17', logo: '/sepj.png' },
    { name: 'Partner 18', logo: '/artech.png' },
  ];

  return (
    <section className="bg-black py-12 md:py-16 lg:py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Our <span className="text-cyan-400">Partners</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Trusted by industry leaders and innovative companies
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-infinite-scroll space-x-12 md:space-x-16 lg:space-x-20">
            {/* Double the partners array for seamless looping */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44 bg-transparent rounded-lg flex flex-col items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain p-2 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                
              </div>
            ))}
          </div>
          
          {/* Custom animation */}
          <style jsx>{`
            @keyframes infinite-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 30s linear infinite;
            }
            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* Static Grid for Smaller Screens */}
        <div className="lg:hidden mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 flex flex-col items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-32 h-16 sm:w-36 sm:h-18 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnersSection);