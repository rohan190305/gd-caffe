"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-amber-100/95 to-orange-100/95 backdrop-blur-sm border-b border-amber-200 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amber-900">JD's Cafe</h1>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-amber-800 hover:text-amber-600 transition-colors font-medium ${
                  activeSection === link.name.toLowerCase() ? 'border-b-2 border-amber-600' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md text-amber-800 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} mt-2 pb-4`}>
          <div className="flex flex-col space-y-2 px-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-amber-800 hover:bg-amber-50 transition-colors font-medium ${
                  activeSection === link.name.toLowerCase() ? 'bg-amber-100' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
