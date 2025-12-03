import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assests/hero.gif"; // 👈 Hero image
import person from "../assests/person1.gif"; // 👈 Person image
import team from "../assests/hc.jpg"; // 👈 Team image
import { useNavigate } from "react-router-dom";

const Home1AndSolutions = () => {
  const navigate = useNavigate();
  const serviceRoutes = {
    "Web Designing": "/serviceswd",
    "SEO Optimization": "/services4",
    "Web Development": "/services3",
    "App Development": "/services8",
    "Social Media Marketing": "/services5",
    "Software Development": "/services9",
    "Cloud Computing": "/services7",
  };

  
  return (
    <div
      className="text-gray-800 overflow-hidden relative font-inter"
      style={{
        backgroundColor: "#f0f2d5",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* ===========================
          HERO + SOLUTIONS SECTION
      =========================== */}
      <section className="relative py-16 md:py-24 px-6 md:px-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 relative z-10">
          {/* LEFT - HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-start relative"
          >
         <motion.img
  src={heroImg}
  alt="Hero"
  className="w-[380px] md:w-[450px] h-auto mt-14 mb-14 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] rounded-xl"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

            {/* Subtle circular gradient accent behind hero */}
            <div className="absolute -z-10 top-10 left-5 w-80 h-80 bg-gradient-to-br from-[#d73b3e]/20 to-transparent rounded-full blur-3xl"></div>
          </motion.div>

          {/* RIGHT - TEXT & SOLUTIONS */}
          <div className="flex-1 md:pl-12 text-center md:text-left relative">
            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-[#d73b3e] rounded-full mb-6 mx-auto md:mx-0"
            ></motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight text-[#1a1a1a]"
            >
              Digital Marketing Services in{" "}
              <span className="bg-gradient-to-r from-[#d73b3e] to-[#f57c00] bg-clip-text text-transparent">
                Hyderabad
              </span>
              <br />
              <span className="text-[#d73b3e] font-semibold">
                Grow Your Business with Maxzen.Tech
              </span>
            </motion.h1>

            {/* Tagline */}
            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              We craft data-driven digital experiences that help your brand
              stand out and connect with the right audience — blending strategy,
              creativity, and technology.
            </p>

            {/* Finest Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Finest Solutions
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "Web Designing",
          "SEO Optimization",
          "Web Development",
          "App Development",
          "Social Media Marketing",
          "Software Development",
          "Cloud Computing",
        ].map((item, i) => (
          <motion.li
            key={i}
            onClick={() => navigate(serviceRoutes[item])}
            whileHover={{ scale: 1.05 }}
            className="bg-white px-5 py-2 text-sm font-medium rounded-full shadow-sm 
            text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-[#d73b3e] 
            hover:to-[#f57c00] hover:text-white transition-all duration-300 
            text-center md:text-left"
          >
            {item}
          </motion.li>
        ))}
      </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===========================
          BOTTOM SECTION (TEXT + STATS + BUTTON)
      =========================== */}
      <section className="relative py-16 px-6 md:px-20 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[500px] relative">
          {/* Right Side: Decorative Person GIF (as background element) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/5"
          >
            <img
              src={person}
              alt="Decorative Person"
              className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          {/* Left Side: Overlapping Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full md:w-3/5 md:mr-auto bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src={team} alt="team" className="w-10 h-10 rounded-full" />
              <p className="font-semibold text-[#d73b3e] text-lg">
                9.50K+ <span className="text-gray-600 font-normal text-sm">Happy Clients</span>
              </p>
            </div>

            <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Maxzen.Tech empowers businesses with innovative, measurable digital growth strategies, from building a strong online presence to achieving real conversions.
            </p>

            <div className="mt-5 space-y-2 text-left max-w-md mx-auto md:mx-0">
              <p className="flex items-center gap-2 text-gray-700"><span className="text-[#d73b3e] font-bold">✓</span> Data-driven strategies for measurable ROI</p>
              <p className="flex items-center gap-2 text-gray-700"><span className="text-[#d73b3e] font-bold">✓</span> Creative solutions that captivate audiences</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Get a Free Quote
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Rotating Circle Animation */}
        <div className="mt-24 flex flex-col items-center text-center relative">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-gray-600 fill-current"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50
                      m -37, 0
                      a 37,37 0 1,1 74,0
                      a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="7" fontWeight="500">
                  <textPath href="#circlePath">
                    • LEARN ABOUT US • EXPLORE MORE • SCROLL DOWN •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/services1")}
              className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white text-sm font-semibold shadow-md cursor-pointer"
            >
              Start
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home1AndSolutions;