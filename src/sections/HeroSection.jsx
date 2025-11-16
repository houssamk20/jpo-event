// sections/HeroSection.jsx
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Video Background - Optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-40 xs:opacity-45 sm:opacity-50"
          aria-label="Background video"
        >
          <source src="/jposoon.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="/video-poster.jpg" 
            alt="JPO Conference Background" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </video>
        
        {/* Mobile-specific overlay */}
        <div className="absolute inset-0 lg:hidden bg-black/30 z-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-2xl -ml-32">
            <img 
              src="/ISIMG.png" 
              alt="JPO Logo" 
              className="h-64 md:h-72 lg:h-80 w-auto max-w-full"
              loading="eager"
              width="800"
              height="400"
            />
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 ml-20 mt-6">
              <Link 
                to="/workshops"
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-5 md:px-14 md:py-6 font-black text-xl md:text-2xl transition-colors uppercase tracking-wider text-center rounded-lg inline-block focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Register for workshops"
              >
                Register Now
              </Link>
            </div> 
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center justify-center text-center w-full px-4">
            {/* Logo Container */}
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] mb-6 xs:mb-8 sm:mb-10">
              <img 
                src="/ISIMG.png" 
                alt="JPO Logo" 
                className="w-full h-auto object-contain"
                loading="eager"
                width="400"
                height="200"
              />
            </div>
            
            {/* Button Container */}
            <div className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] ml-4 xs:ml-6 sm:ml-8">
              <Link 
                to="/workshops"
                className="w-full bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-black px-7 py-4 xs:px-8 xs:py-4.5 sm:px-10 sm:py-5 font-black text-lg xs:text-xl sm:text-2xl transition-all duration-200 uppercase tracking-wider transform hover:scale-105 active:scale-95 rounded-lg inline-block text-center focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Register for workshops"
              >
                Register Now
              </Link>
            </div> 
          </div>
        </div>
      </div>

      {/* Fixed Back to Overview Arrow Button */}
      <button
        onClick={scrollToOverview}
        className="fixed right-5 xs:right-6 sm:right-8 md:right-10 bottom-5 xs:bottom-6 sm:bottom-8 md:bottom-10 z-50 bg-cyan-400 hover:bg-cyan-300 text-black p-3 xs:p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-cyan-400/50 transition-all duration-200 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </section>
  );
};

export default HeroSection;