'use client';

import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-yellow-50 to-orange-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Story</h2>
        <p className="text-lg text-amber-800 mb-12 max-w-3xl mx-auto">
          Founded with passion and crafted with care, JD's Cafe is more than just a coffee shop – 
          it's a community hub where connections are made and memories are created.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Premium Quality */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <Award className="w-12 h-12 mx-auto text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
            <p className="text-amber-700">
              Sourced from the finest coffee beans around the world, roasted to perfection daily.
            </p>
          </div>

          {/* Community First */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <Users className="w-12 h-12 mx-auto text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Community First</h3>
            <p className="text-amber-700">
              A welcoming space where neighbors become friends and every visit feels like coming home.
            </p>
          </div>

          {/* Made with Love */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <Heart className="w-12 h-12 mx-auto text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Made with Love</h3>
            <p className="text-amber-700">
              Every cup is crafted with attention to detail and served with genuine care and warmth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
