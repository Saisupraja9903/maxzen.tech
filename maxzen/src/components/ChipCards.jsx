import React from "react";

// Import your images
import chip1 from "../assests/chip1.jpeg";
import chip2 from "../assests/chip2.jpeg";
import chip3 from "../assests/chip3.jpeg";
import chip4 from "../assests/chip4.jpeg";
import chip5 from "../assests/chip5.jpeg";
import chip6 from "../assests/chip6.jpeg";

const cards = [
  {
    id: 1,
    image: chip1,
    title: "Microchip Design",
    desc: "Compact and efficient chip layouts for advanced electronics.",
  },
  {
    id: 2,
    image: chip2,
    title: "Semiconductor Circuit",
    desc: "High-performance circuits powering next-gen processors.",
  },
  {
    id: 3,
    image: chip3,
    title: "Nano Architecture",
    desc: "Innovative designs at the nanometer scale for modern devices.",
  },
  {
    id: 4,
    image: chip4,
    title: "AI Accelerators",
    desc: "Engineered chips designed to boost artificial intelligence tasks.",
  },
  {
    id: 5,
    image: chip5,
    title: "Quantum Processors",
    desc: "Exploring the future of computing with quantum chip technology.",
  },
  {
    id: 6,
    image: chip6,
    title: "Integrated Circuits",
    desc: "Combining multiple components into one efficient system.",
  },
];

const ChipCards = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Chip Innovations
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {card.title}
            </h3>
            <p className="text-gray-600 text-center text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipCards;
