// components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { href: "#overview", label: "Overview" },
    { href: "#about", label: "About" },
    { href: "#whyjpo", label: "WhyJPO" },
    { href: "#whattoexpect", label: "WhatToExpect" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-15 2xxl:space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-bold uppercase text-base md:text-lg tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-cyan-400/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block text-gray-300 hover:text-cyan-400 py-3 font-bold uppercase border-b border-gray-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;