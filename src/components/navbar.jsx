"use client";
import React from 'react';
import { Coffee } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
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
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-amber-800 hover:text-amber-600 transition-colors font-medium ${
                  activeSection === link.name.toLowerCase() ? 'border-b-2 border-amber-600' : ''
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
