'use client';

import { motion } from 'framer-motion';

const menuItems = [
  {
    title: 'Espresso',
    description: 'Rich and bold single shot of espresso.',
    price: '₹120',
    image: '/t1.jpg', // Replace with your actual image path
  },
  {
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and a layer of foam.',
    price: '₹150',
    image: '/t2.jpg',
  },
  {
    title: 'Cold Brew',
    description: 'Smooth cold coffee brewed for 12 hours.',
    price: '₹180',
    image: '/t4.jpg',
  },
  {
    title: 'Choco Frappe',
    description: 'Blended cold coffee with chocolate & whipped cream.',
    price: '₹200',
    image: '/t3.jpg',
  },
   {
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and a layer of foam.',
    price: '₹150',
    image: '/t4.jpg',
  },
   {
    title: 'Iced Coffee',
    description: 'Chilled coffee with milk and ice.',
    price: '₹150',
    image: '/t5.jpg',
  },
   {
    title: 'Dipono coffee',
    description: 'Espresso with steamed milk and a layer of foam.',
    price: '₹150',
    image: '/t1.jpg',
  },
   {
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and a layer of foam.',
    price: '₹150',
    image: '/t5.jpg',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Menu</h2>
        <p className="text-lg text-amber-700 mb-12">
          Explore our handcrafted selection of beverages made with love.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-yellow-50 border border-yellow-100 rounded-xl shadow hover:shadow-lg transition p-4"    
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4 "
              />
              <h3 className="text-xl font-semibold text-amber-900">{item.title}</h3>
              <p className="text-amber-700 text-sm mt-1 mb-3">{item.description}</p>
              <span className="text-orange-600 font-bold">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
