import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaUsers, FaProjectDiagram, FaChartBar, FaWhatsapp } from "react-icons/fa";
// import { FaBullhorn, FaUsers, FaProjectDiagram, FaChartBar, FaWhatsapp, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

const AboutAndServices = () => {

  const services = [
    {
      icon: <FaBullhorn className="text-5xl text-gray-800" />,
      title: "Social Media Marketing",
      desc: "We leverage SSM for automation and SMM for brand growth, ensuring efficiency and visibility.",
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-gray-800" />,
      title: "Software Development",
      desc: "We specialize in software development, creating scalable and innovative solutions tailored to business needs.",
    },
    {
      icon: <FaUsers className="text-5xl text-gray-800" />,
      title: "Digital Advertising",
      desc: "We drive business growth with digital marketing, enhancing online visibility and engagement.",
    },
    {
      icon: <FaChartBar className="text-5xl text-gray-800" />,
      title: "Branding",
      desc: "We craft compelling branding strategies that establish identity and drive recognition.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>

      {/* ----- About Section ----- */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 py-16 px-6 md:px-20 overflow-hidden bg-gray-400">
        <div className="max-w-6xl mx-auto">

          {/* heading fall animation (always visible without scroll) */}
          <motion.h2
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black text-left"
          >
            About <span className="text-black">Maxzen.Tech</span>
          </motion.h2>

          {/* main orange card block immediate animation */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-gradient-to-br from-white via-[#fff8f2] to-[#ffe6d4] rounded-2xl p-10 shadow-[0_0_35px_-8px_rgba(255,140,40,0.35)] backdrop-blur-md border border-orange-200"
          >
            <p className="text-lg leading-relaxed mb-6 text-gray-800 text-left">
              At <span className="text-orange-500 font-bold">Maxzen.Tech</span>, we are a performance-driven Digital Marketing Agency based in Hyderabad – Manjeera Trinity Corporate, 4th Floor. We build digital growth engines that maximize brand visibility, boost lead conversions, and scale your online presence with intelligent strategies.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-800 text-left">
              Backed with an expert team of innovators, strategists, developers & marketers — we merge creativity with data-driven thinking. From <span className="text-black font-semibold">SEO</span> and Paid Advertising to <span className="font-semibold text-orange-500">Web / Cloud Development</span> — we empower businesses to dominate digital competition with measurable growth outcomes.
            </p>

            <p className="uppercase tracking-wide text-sm font-semibold text-orange-600 mb-3 text-left">
              What We Do
            </p>

            <h3 className="text-3xl md:text-4xl font-extrabold mb-5 text-black text-left">
              Redefining Business Growth & Digital Transformation
            </h3>

            <p className="text-lg leading-relaxed text-gray-800 text-left">
              We don’t just market — we architect growth systems. Through innovation,
              tech integration and predictive analytics, we help brands operate smarter,
              perform faster, and scale efficiently. We transform vision into scalable digital outcomes built for long-term success.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Services Section (scroll reveal stays same) */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-center gap-6 border rounded-xl p-6 shadow-sm bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-gradient-to-br from-[#ff9c9c] to-[#f76c6c] w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-xl">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision Mission section (same no change) */}
      {/* ----- KEEP AS IT IS ----- */}
      {/* your vision mission code continues here ... no removed ... */}

    </div>
  );
};

export default AboutAndServices;
