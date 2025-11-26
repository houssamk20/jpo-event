// sections/PartnersSection.jsx (Infinite Carousel Version)
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Partner 1', logo: '/artech.png' },
    { name: 'Partner 2', logo: '/cap.png' },
    { name: 'Partner 3', logo: '/sof.png' },
    { name: 'Partner 4', logo: '/digi.png' },
    { name: 'Partner 5', logo: '/p2.png' },
    { name: 'Partner 5', logo: '/gomycode.png' },
    { name: 'Partner 6', logo: '/service.png' },
    { name: 'Partner 7', logo: '/prest.png' },
    { name: 'Partner 8', logo: '/quiz.png' },
    { name: 'Partner 9', logo: '/sepj.png' },
    { name: 'Partner 10', logo: '/artech.png' },
    { name: 'Partner 11', logo: '/cap.png' },
    { name: 'Partner 12', logo: '/sof.png' },
    { name: 'Partner 13', logo: '/digi.png' },
    { name: 'Partner 14', logo: '/p2.png' },
    { name: 'Partner 15', logo: '/gomycode.png' },
    { name: 'Partner 16', logo: '/service.png' },
    { name: 'Partner 17', logo: '/prest.png' },
    { name: 'Partner 18', logo: '/quiz.png' },
    { name: 'Partner 19', logo: '/sepj.png' },
    { name: 'Partner 20', logo: '/artech.png' },
  ];

  return (
    <section className="bg-black py-12 md:py-16 lg:py-20 border-t border-gray-800">
      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
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
        <div className="mb-8 sm:mb-12 relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16">
            {/* Double the partners array for seamless looping */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-16 xs:w-24 xs:h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 lg:w-40 lg:h-32 xl:w-48 xl:h-36 2xl:w-56 2xl:h-40 bg-transparent rounded-lg flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  className="w-full h-full object-contain p-1 sm:p-2"                />
                
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
        
      </div>
    </section>
  );
};

export default React.memo(PartnersSection);