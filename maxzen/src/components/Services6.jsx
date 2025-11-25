import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logoDesignImg from "../assests/LD2.jpeg";
import { Layers, Gem, PenTool, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LogoDesigning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants
  const textFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const cardUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const navigate = useNavigate();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <><Header/>
    
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-100 pt-28 pb-24 font-sans text-gray-800">
      {/* ---------- Background Glow Effects ---------- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute animate-pulse bg-cyan-200/40 blur-[140px] w-96 h-96 rounded-full -top-32 left-10"></div>
        <div className="absolute animate-pulse bg-purple-200/40 blur-[160px] w-96 h-96 rounded-full bottom-10 right-10"></div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="max-w-6xl mx-auto relative z-10 px-6">

        {/* ---------- Hero Section (Side-by-Side Layout) ---------- */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side (Text) */}
          <motion.div
            variants={textFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
  className="text-4xl md:text-5xl font-extrabold mb-6 
             bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 
             text-transparent bg-clip-text leading-tight md:leading-snug"
>
  Best Logo Designing
</motion.h1>


            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0 "
            >
              Your logo is the face of your brand — the visual identity that speaks
              before words do. At{" "}
              <span className="text-cyan-600 font-semibold">Maxzen.tech</span>, we
              specialize in professional logo designing in Hyderabad, creating
              memorable and meaningful logos that resonate with your audience. We don’t
              use templates or shortcuts — we research your industry, understand your
              audience, and design a logo that truly represents your brand. From color
              selection and typography to icons and symbols, every element is chosen
              strategically to create a lasting impression.
            </motion.p>
          </motion.div>

          {/* Right Side (Rotating + Floating Image) */}
          <motion.div
            variants={textFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={logoDesignImg}
                alt="Logo Design"
                className="w-120 h-auto object-contain rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ---------- Services Section ---------- */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-cyan-700 mb-10"
          >
            Our Logo Design Services
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Layers />, title: "Minimal & Modern", desc: "Clean, professional, and timeless designs that look great everywhere." },
              { icon: <Gem />, title: "3D & Abstract", desc: "Creative designs that reflect innovation and modern aesthetics." },
              { icon: <PenTool />, title: "Logo Redesign", desc: "Give your existing brand a fresh and impactful new look." },
              { icon: <Palette />, title: "Brand Identity", desc: "Includes logo, business cards, color palette, and brand guide." },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? cardUp : cardDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white shadow-md border border-cyan-100 rounded-2xl p-6 text-center flex flex-col items-center hover:shadow-lg hover:shadow-cyan-200 transition-all duration-300"
              >
                <div className="text-cyan-600 mb-4">
                  {React.cloneElement(service.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- Why Choose Us ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-700 to-blue-500 text-transparent bg-clip-text">
            Why Choose Maxzen.tech for Logo Designing?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
            We combine creativity, research, and strategy to create logos that stand
            the test of time. As a trusted logo design agency in Hyderabad, we focus on
            delivering results-driven, meaningful designs that connect emotionally with
            your audience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Experienced logo design experts in Hyderabad",
              "100% original and customized concepts",
              "Unlimited revisions until satisfaction",
              "Affordable and flexible packages",
              "End-to-end brand identity solutions",
              "Creative, timeless & scalable designs",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-cyan-100 bg-white/70 backdrop-blur-sm hover:bg-cyan-50 transition-all duration-300"
              >
                <span className="text-cyan-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Call to Action ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-700 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Get the Best Logo Design for Your Brand Today!
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            Looking for a professional logo that defines your brand perfectly?{" "}
            <span className="font-semibold text-cyan-600">Maxzen.tech</span> offers
            creative and strategic logo designing solutions to help your business stand
            out with confidence.
          </p>

          <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/contact")} // ⬅️ Navigate to Contact page
  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  📞 Contact Maxzen.tech Today
</motion.button>
        </motion.div>
      </div>
    </section>
    <Footer/></>
  );
};

export default LogoDesigning;
