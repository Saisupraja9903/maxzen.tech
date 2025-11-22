import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logo2 from "../assests/logo3.png"; // replace with your actual image path
import { useNavigate } from "react-router-dom";


const stats = [
  { number: 2, label: "Years Experience" },
  { number: 63, label: "Advanced Tools" },
  { number: 1000, label: "Customers Satisfied" },
  { number: 100, label: "Projects Completed" },
];

const GlobalBrandSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const controls = useAnimation();

  // Count-up animation on mount (refresh)
  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000; // total duration (2s)
      const stepTime = 20; // smaller = smoother
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, stepTime);
    });
  }, []);
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
    const navigate = useNavigate();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${logo2})` }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Brand On A Global <br /> <span className="text-white">Scale</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We <span className="font-bold text-white">promote your brand globally</span>,
          ensuring maximum reach and impact. Through strategic marketing and
          innovative branding, we help businesses establish a strong presence in
          the digital world.
        </motion.p>

        {/* Button */}
        <motion.button
          className="border border-white text-white rounded-full px-6 py-2 text-lg hover:bg-white hover:text-black transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => navigate("/services1")}
        >
          View More Detail
        </motion.button>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 border-t border-gray-500 bg-black bg-opacity-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center py-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center border-r border-gray-600 last:border-none px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Top Line */}
              <div className="w-10 h-[2px] bg-white mb-2"></div>

              {/* Animated Number */}
              <h2 className="text-5xl font-bold text-red-500 mb-2">
                {counts[index]}
                {index !== 0 && index !== 2 && "+"}
              </h2>

              {/* Bottom Line */}
              <div className="w-10 h-[2px] bg-white mb-3"></div>

              {/* Label */}
              <p className="text-lg font-medium text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalBrandSection;
