import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation once after refresh
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 2500); // stop after 2.5s
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className="text-center py-16 px-6 bg-white">
      {/* Top Text */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
        Clicks. Conversions. Confidence That’s{" "}
        <span
          className={`relative text-blue-600 transition-all duration-700 ${
            animate ? "circle-animate" : ""
          }`}
        >
          Maxzen.Tech
          <span className="absolute inset-0 border-2 border-blue-600 rounded-full opacity-0 animate-none"></span>
        </span>
      </h2>

      <p className="text-xl text-pink-600 font-semibold mb-10">
        Let’s Grow Your Brand Together — Contact the Leading Digital Marketing
        Agency in Hyderabad Today!
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {/* Call Us Card */}
<motion.div
 initial={{ y: -60, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.7, ease: "easeOut" }}
 className="border border-gray-300 rounded-2xl p-8 flex flex-col items-center shadow-[0_0_45px_-8px_rgba(255,140,40,0.35)] hover:shadow-[0_0_80px_-4px_rgba(255,140,40,0.85),0_0_120px_-6px_rgba(255,230,120,0.85)] hover:scale-110 transition-all duration-300 bg-white/25 backdrop-blur-xl"
>
  <FaPhoneAlt className="text-gray-600 text-5xl mb-4" />
  <h3 className="text-xl font-semibold text-gray-800 mb-2">Call us at</h3>
  <p className="text-gray-600 text-lg">+91 8498989844</p>
</motion.div>

{/* Office Card */}
<motion.div
 initial={{ y: 60, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
 className="border border-gray-300 rounded-2xl p-8 flex flex-col items-center shadow-[0_0_45px_-8px_rgba(255,140,40,0.35)] hover:shadow-[0_0_80px_-4px_rgba(255,140,40,0.85),0_0_120px_-6px_rgba(255,230,120,0.85)] hover:scale-110 transition-all duration-300 bg-white/25 backdrop-blur-xl"
>
  <FaMapMarkerAlt className="text-gray-600 text-5xl mb-4" />
  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h3>
  <p className="text-gray-600 text-lg leading-relaxed">
    4th floor-408,<br/> Manjeera Trinity Corporate,<br/> KPHB, Hyderabad
  </p>
</motion.div>

{/* Email Card */}
<motion.div
 initial={{ y: -60, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
 className="border border-gray-300 rounded-2xl p-8 flex flex-col items-center shadow-[0_0_45px_-8px_rgba(255,140,40,0.35)] hover:shadow-[0_0_80px_-4px_rgba(255,140,40,0.85),0_0_120px_-6px_rgba(255,230,120,0.85)] hover:scale-110 transition-all duration-300 bg-white/25 backdrop-blur-xl"
>
  <FaEnvelope className="text-gray-600 text-5xl mb-4" />
  <h3 className="text-xl font-semibold text-gray-800 mb-2">E-mail us at</h3>
  <p className="text-gray-600 text-lg">info@maxzen.tech</p>
</motion.div>
</div>

      {/* Global Locations Section */}
<div className="max-w-4xl mx-auto">

  <motion.p
    initial={{ x: -120, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-sm text-red-600 font-semibold tracking-widest mb-2"
  >
    BRANCHES
  </motion.p>

  <motion.h3
    initial={{ x: 120, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
    viewport={{ once: true }}
    className="text-3xl font-extrabold text-gray-900 mb-4"
  >
    Our Global Locations
  </motion.h3>

  <motion.p
    initial={{ x: -120, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.20 }}
    viewport={{ once: true }}
    className="text-gray-700 text-lg leading-relaxed"
  >
    At <span className="text-blue-600 font-semibold">Maxzen.tech</span>, we’re more than just a digital marketing agency in Hyderabad — we serve clients across the globe with the same passion and performance.
  </motion.p>

  <motion.p
    initial={{ x: 120, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
    viewport={{ once: true }}
    className="text-gray-700 text-lg mt-4 leading-relaxed"
  >
    Our expert team delivers <span className="font-semibold text-blue-600">SEO</span>, Google Ads, <span className="font-semibold text-blue-600">social media marketing</span>, and website design services to help businesses grow online — no matter where they are.
  </motion.p>

</div>

    </section>
  );
};

export default ContactSection;


