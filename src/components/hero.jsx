"use client";
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side: Image */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="/jd logo.png"
              alt="JD's Cafe"
              className="w-100 h-100 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side: Text and Buttons */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
              Welcome to
              <span className="block text-orange-800">JD's Cafe</span>
            </h2>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto md:mx-0 leading-relaxed">
              Where every cup tells a story and every moment becomes a memory. 
              Experience the perfect blend of exceptional coffee and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#reviews"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
              >
                Read Reviews
              </a>
              <a 
                href="#contact"
                className="border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-200 text-center"
              >
                Visit Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
