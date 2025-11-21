import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import logoo6 from "../assests/logoo6.jpg";
import logoo7 from "../assests/logoo7.jpg";
import logoo8 from "../assests/logoo8.jpg";

const testimonials = [
  {
    id: 1,
    name: "Suvarchala",
    image: logoo6,
    rating: 5,
    text: "Maxzen.Tech provided excellent web and logo design services. Their team was professional, creative, and delivered high-quality work on time. Highly recommended for digital solutions!",
  },
  {
    id: 2,
    name: "James",
    image: logoo7,
    rating: 5,
    text: "I used Maxzen.Tech for WooCommerce integration, and they did an excellent job! Their team ensured a smooth setup, customized it to fit my needs, and optimized performance. Highly satisfied!",
  },
  {
    id: 3,
    name: "Samrat",
    image: logoo8,
    rating: 4,
    text: "Maxzen.Tech delivered a well-designed, responsive, and efficient website. The development was smooth, with great functionality and attention to detail. Highly recommended!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header */}
        <h3 className="text-red-600 uppercase tracking-wider mb-2 font-medium">
          Client Says
        </h3>
        <h2 className="text-4xl font-bold mb-10">What They Say</h2>

        {/* Card */}
        <div className="bg-[#2E2E2E] text-white rounded-3xl p-12 md:p-12 relative transition-all duration-500 shadow-xl">
          {/* Image */}
          <div className="flex justify-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Name and Stars */}
          <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
          <div className="flex justify-center my-2">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="text-red-500 fill-red-500" size={20} />
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            {testimonial.text}
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="bg-black text-white px-3 py-1 rounded-md text-sm">
              {current + 1}/{testimonials.length}
            </span>

            <button
              onClick={nextSlide}
              className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
