// sections/HeroSection.jsx
import React from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ 
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Optimized Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          aria-label="Background video"
        >
          <source src="/jposoon.mp4" type="video/mp4" />
          {/* Fallback for unsupported browsers */}
          <img 
            src="/video-poster.jpg" 
            alt="JPO Conference Background" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </video>
      </div>

      <div className="relative z-10 w-full px-4 md:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-2xl -ml-32">
            <img 
              src="/ISIMG.png" 
              alt="JPO Logo" 
              className="h-64 md:h-72 lg:h-80 w-auto max-w-full ml-29 object-contain"
              loading="eager"
              width="800"
              height="400"
              decoding="async"
            />
            
            <div className="flex gap-4 ml-45 mt-6">
              <Link 
                to="/workshops"
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-5 md:px-14 md:py-6 font-black text-xl md:text-2xl transition-colors uppercase tracking-wider text-center rounded-lg inline-block focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Register for workshops"
                prefetch={true}
              >
                Register Now
              </Link>
            </div> 
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center justify-center text-center w-full">
            {/* Logo Container */}
            <div className="w-full max-w-xs md:max-w-sm mb-8">
              <img 
                src="/ISIMG.png" 
                alt="JPO Logo" 
                className="w-full h-auto object-contain"
                loading="eager"
                width="400"
                height="200"
                decoding="async"
              />
            </div>
            
            {/* Button Container */}
            <div className="w-full max-w-xs">
              <Link 
                to="/workshops"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 md:px-10 md:py-5 font-black text-lg md:text-xl transition-all duration-200 uppercase tracking-wider rounded-lg inline-block text-center focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Register for workshops"
                prefetch={true}
              >
                Register Now
              </Link>
            </div> 
          </div>
        </div>
      </div>

      {/* Optimized Back to Top Button */}
      <button
        onClick={scrollToOverview}
        className="fixed right-4 bottom-4 z-50 bg-cyan-400 hover:bg-cyan-300 text-black p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default React.memo(HeroSection);