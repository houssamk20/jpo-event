// components/SponsorsCarousel.jsx
import React from 'react';

const SponsorsCarousel = ({ sponsors }) => {
  return (
    <div className="mb-8 sm:mb-12 relative w-full overflow-hidden">
      {/* Infinite scrolling container */}
      <div className="flex animate-infinite-scroll space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16">
        {/* Double the sponsors array for seamless looping */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-20 h-16 xs:w-24 xs:h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 lg:w-40 lg:h-32 xl:w-48 xl:h-36 2xl:w-56 2xl:h-40 bg-transparent rounded-lg flex items-center justify-center"
          >
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="w-full h-full object-contain p-1 sm:p-2"
            />
          </div>
        ))}
      </div>
      
      {/* Add custom animation */}
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
  );
};

export default SponsorsCarousel;