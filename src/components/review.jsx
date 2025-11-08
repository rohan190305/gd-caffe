'use client';

const reviews = [
  {
    name: 'Aarav Sharma',
    content:
      "Absolutely love this place! The coffee is fantastic and the ambiance is so warm and cozy. It’s my go-to cafe to relax and work.",
    rating: 5,
    image: '/jd logo.png', // Place this image in your public/users folder
  },
  {
    name: 'Sneha Desai',
    content:
      "The best cold brew I’ve ever had! Plus, the staff is super friendly and always smiling. Highly recommended!",
    rating: 4,
    image: '/jd logo.png',
  },
  {
    name: 'Rohan Mehta',
    content:
      "Great place to hang out with friends. Their desserts are heavenly and the cappuccino is spot on.",
    rating: 5,
    image: '/jd logo.png',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-yellow-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
        <p className="text-lg text-amber-700 mb-12">
          Real experiences from people who love JD's Cafe.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left flex flex-col items-center"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <div className="text-amber-600 mb-2">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-gray-800 mb-4 italic">"{review.content}"</p>
              <h4 className="font-semibold text-amber-900">— {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
