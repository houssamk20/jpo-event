// BlackHatMEA.jsx
import React, { useState, useEffect, useCallback } from 'react';

// Import sections directly
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection'; // Now includes PartnersSection
import AboutSection from './sections/AboutSection';
import WhyExhibitSection from './sections/WhyExhibitSection';
import WhatToExpectSection from './sections/WhatToExpectSection';
import FooterSection from './sections/FooterSection';

export default function BlackHatMEA() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sponsorIndex, setSponsorIndex] = useState(0);

  const sponsors = [
    { name: 'Sponsor 1', logo: '/cyber.png' },
    { name: 'Sponsor 2', logo: '/forum.png' },
    { name: 'Sponsor 3', logo: '/ubci.png' },
    { name: 'Sponsor 4', logo: '/iiT.png' },
    { name: 'Sponsor 5', logo: '/bochema.png' },
    { name: 'Sponsor 6', logo: '/cyber.png' },
    { name: 'Sponsor 7', logo: '/forum.png' },
    { name: 'Sponsor 8', logo: '/ubci.png' },
    { name: 'Sponsor 9', logo: '/iiT.png' },
    { name: 'Sponsor 10', logo: '/bochema.png' },
  ];

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setSponsorIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 3000);
    return () => clearInterval(carouselInterval);
  }, [sponsors.length]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <HeroSection /> {/* Now includes PartnersSection */}
      <AboutSection />
      <WhyExhibitSection />
      <WhatToExpectSection />
      
      <FooterSection 
        sponsors={sponsors} 
        sponsorIndex={sponsorIndex} 
        setSponsorIndex={setSponsorIndex} 
      />
    </div>
  );
}