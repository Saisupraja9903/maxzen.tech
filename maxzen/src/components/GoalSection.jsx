import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import bgImage from "../assests/logoo19.png"; // <-- replace with your image path

const GoalsSection = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  // Animate the count-up from 0 → 150
  useEffect(() => {
    let start = 0;
    const end = 150;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className="relative w-full h-[500px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Meeting background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col justify-end h-full px-10 md:px-20 pb-12">
        <p className="uppercase text-gray-300 tracking-widest mb-2 text-left">
          Goals That We Have
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-left">
          Being The Best Business In <br /> The Industry
        </h2>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          {/* Left Text */}
          <div className="hidden md:block w-[1px] h-10 bg-gray-500"></div>
          <div>
            <p className="text-gray-400 text-sm mb-1">
              Our Agency Based on
            </p>
            <p className="text-lg font-semibold">All Over India</p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-[1px] h-10 bg-gray-500"></div>

          {/* Animated Counter */}
          <div>
            <p className="text-gray-400 text-sm mb-1">
              Successfully Completed
            </p>
            <motion.p
              animate={controls}
              className="text-lg font-semibold"
            >
              <span className="text-red-500 text-2xl font-bold">
                {count}+
              </span>{" "}
              Projects
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
