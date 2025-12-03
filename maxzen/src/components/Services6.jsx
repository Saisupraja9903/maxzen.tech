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
    
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white font-sans text-gray-800">

      {/* ---------- Main Content ---------- */}
      <div className="relative z-10">

        {/* ---------- Hero Section ---------- */}
        <div className="relative grid md:grid-cols-2 items-center gap-12 bg-gradient-to-br from-slate-100 via-white to-slate-50 py-28 px-6 md:px-12 overflow-hidden">
          {/* Left Side: Image */}
          <motion.div
            variants={textFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-slate-300 rounded-full blur-2xl opacity-50"></div>
              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={logoDesignImg}
                alt="Logo Design"
                className="relative w-full h-auto object-contain rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            variants={textFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 
             bg-gradient-to-r from-blue-600 to-slate-500 text-transparent bg-clip-text leading-tight md:leading-snug"
            >
              Best Logo Designing
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Your logo is the face of your brand — the visual identity that speaks volumes
              before a single word is read. At{" "}
              <span className="text-blue-700 font-semibold">Maxzen.tech</span>, we
              specialize in professional logo designing in Hyderabad, creating
              memorable and meaningful logos that resonate deeply with your target audience.
              We believe a great logo is born from strategy, not just software. That's why
              we don’t use templates or shortcuts. Our process involves in-depth research
              into your industry, a thorough understanding of your audience, and a collaborative
              approach to design a logo that truly represents your brand's core values. From color
              psychology and typography to the fine details of icons and symbols, every element is chosen
              with purpose to create a powerful and lasting impression that drives brand recognition and customer loyalty.
            </motion.p>
          </motion.div>

        </div>

        {/* ---------- Services Section ---------- */}
        <div className="py-24 px-6 md:px-12 bg-slate-50/50">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-blue-700 mb-12"
          >
            Our Logo Design Services
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Layers />, title: "Minimal & Modern", desc: "Clean, professional, and timeless designs that look great everywhere." },
              { icon: <Gem />, title: "3D & Abstract", desc: "Creative designs that reflect innovation and modern aesthetics." },
              { icon: <PenTool />, title: "Logo Redesign", desc: "Give your existing brand a fresh and impactful new look." },
              { icon: <Palette />, title: "Brand Identity", desc: "Includes logo, business cards, color palette, and brand guide." }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? cardUp : cardDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(100, 116, 139, 0.2)" }}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/70 rounded-2xl p-6 text-center flex flex-col items-center transition-all duration-300"
              >
                <div className="text-blue-500 mb-4">
                  {React.cloneElement(service.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- Why Choose Us ---------- */}
        <div className="py-24 px-6 md:px-12 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-600 to-slate-500 text-transparent bg-clip-text">
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
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/80 bg-slate-50 hover:bg-blue-50/50 transition-all duration-300"
                >
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------- Call to Action ---------- */}
        <div className="py-24 px-6 md:px-12 bg-slate-50/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-slate-500 to-purple-500 text-transparent bg-clip-text">
              Get the Best Logo Design for Your Brand Today!
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              Looking for a professional logo that defines your brand perfectly?{" "}
              <span className="font-semibold text-blue-600">Maxzen.tech</span> offers
              creative and strategic logo designing solutions to help your business stand
              out with confidence.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-blue-500 to-slate-600 hover:from-slate-600 hover:to-blue-500 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📞 Contact Maxzen.tech Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer/></>
  );
};

export default LogoDesigning;
