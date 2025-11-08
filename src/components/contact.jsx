'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form or show success message
      alert('Form submitted!');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4D2E0B]">Get in Touch</h2>
          <p className="text-lg text-amber-800 mt-2">
            Have a question, suggestion, or just want to say hi? We’d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-center text-amber-800 mb-4 bg-yellow-50 rounded p-4">
              Get in Touch with Us
            </h2>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-[#4D4040] placeholder:text-base shadow"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="placeholder:text-[#4D4040] placeholder:text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full placeholder:text-[#1b0d0d] placeholder:text-base px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
              />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border placeholder:text-[#4D4040] placeholder:text-base border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="bg-amber-800 hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition duration-200 text-base"
              >
                SEND REQUEST
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-yellow-50 rounded-xl p-8 text-amber-900 space-y-6 shadow text-base">
            <div>
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p>SHOP NO:06 , FLAT NO: A 001 , EVERSHINE MARVEL, 
                <br/>CO OP HSG SOC LTD</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p>+91 9594926242</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>JD'sCafeofficial@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Opening Hours</h3>
              <p>Mon - Sun: 8 AM - 10 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
