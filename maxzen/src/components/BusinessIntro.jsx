import React from "react";
import { motion } from "framer-motion";

const BusinessIntro = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Box */} 
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-gray-200
          transition-all duration-500 cursor-pointer
          hover:scale-[1.03] hover:shadow-2xl 
          hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-300 hover:to-orange-200
          hover:text-white"
        >
          <p className="uppercase text-sm tracking-wider text-orange-600 font-semibold mb-3 hover:text-white transition-all duration-300">
            Get Started
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight hover:text-white transition-all duration-300">
            Hello Everyone, <br /> Be A Part Of Us
          </h2>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-gray-700 text-base hover:text-white transition-all duration-300">
            <span className="before:content-['•'] before:mr-2">Web Design</span>
            <span className="before:content-['•'] before:mr-2">SEO Optimizing</span>
            <span className="before:content-['•'] before:mr-2">Digital Marketing</span>
            <span className="before:content-['•'] before:mr-2">Logo Design</span>
            <span className="before:content-['•'] before:mr-2">Web Development</span>
            <span className="before:content-['•'] before:mr-2">E-commerce</span>
            <span className="before:content-['•'] before:mr-2">Cloud Computing</span>
            <span className="before:content-['•'] before:mr-2">Social Media Marketing</span>
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay:0.15 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-gray-200
          transition-all duration-500 cursor-pointer
          hover:scale-[1.03] hover:shadow-2xl 
          hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-300 hover:to-orange-200
          hover:text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-white transition-all duration-300">
            Grow Your Business with{" "}
            <span className="text-orange-600 hover:text-white transition-all duration-300">
              Maxzen.tech
            </span>
          </h2>

          <p className="text-gray-700 font-semibold mb-3 hover:text-white transition-all duration-300">
            If you’re searching for the best ad agency in Hyderabad, your search
            ends here.
          </p>

          <p className="text-gray-600 leading-relaxed hover:text-white transition-all duration-300">
            At{" "}
            <span className="text-orange-600 font-semibold hover:text-white transition-all duration-300">
              Maxzen.tech
            </span>
            , we help you grow organically and through paid strategies that
            actually work. Whether you need SEO, Google Ads, or social media
            management — we’ve got you covered with proven{" "}
            <span className="font-semibold text-gray-800 hover:text-white transition-all duration-300">
              digital marketing solutions.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessIntro;
