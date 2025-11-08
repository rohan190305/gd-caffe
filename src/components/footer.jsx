'use client';

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">JDS Cafe</h3>
          <p className="text-sm">
            Crafted with love, served with joy. A cozy corner for coffee and conversation.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
             SHOP NO:06 , FLAT NO: A 001 , EVERSHINE MARVEL, 
              CO OP HSG SOC LTD
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 9594926242
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
             JD'sCafeofficial@gmail.com
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Opening Hours</h4>
          <p className="text-sm">Monday - Sunday</p>
          <p className="text-sm">8:00 AM - 10:00 PM</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300">
              <Facebook />
            </a>
            <a href="#@_JD's_cafe_" className="hover:text-yellow-300">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-700 mt-10 pt-4 text-center text-sm text-amber-300">
        © {new Date().getFullYear()} JD's Cafe. All rights reserved.
      </div>
    </footer>
  );
}
