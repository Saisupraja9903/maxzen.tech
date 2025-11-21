import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { CheckCircle } from "lucide-react"; 

import s1 from "../assests/img8.jpeg";
import s2 from "../assests/img15.png";
import s3 from "../assests/img5.jpeg";
import s4 from "../assests/img3.jpeg";
import s5 from "../assests/img6.jpeg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



const services = [
  { img: s1, title: "Web Application Development", description: "Crafting dynamic and responsive web solutions tailored to your business needs." },
  { img: s2, title: "Mobile Application Development", description: "Building intuitive and high-performance mobile apps for iOS and Android." },
  { img: s3, title: "Custom Software Development", description: "Developing bespoke software to streamline operations and enhance efficiency." },
  { img: s4, title: "UI / UX Product Design", description: "Designing engaging and user-friendly interfaces for exceptional digital experiences." },
  { img: s5, title: "Enterprise Software Solutions", description: "Implementing robust and scalable software to meet complex enterprise demands." },
];

const AnimatedHeading = () => {
  const fullText = "Software Development Company in Hyderabad | Maxzen .Tech";
  const words = fullText.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const wordInterval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev.length < words.length) {
            return [...prev, words[prev.length]];
          }
          clearInterval(wordInterval);
          return prev;
        });
      }, 200);
      return () => clearInterval(wordInterval);
    }, 500);

    return () => clearTimeout(timer);
  }, [words]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 min-h-[100px] md:min-h-[64px]">
      {visibleWords.join(" ")}&nbsp;
    </h1>
  );
};

const SoftwareServiceImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
   const navigate = useNavigate(); 
  return (
    <>
    <Header/>
   
    <section className="w-full bg-white py-16 mb-2">
      <div className="text-center mb-12 px-5 py-10 bg-gray-50 rounded-xl shadow-lg">
        <AnimatedHeading />
        <p className="text-xl text-gray-600 mb-6">
          Custom Software Solutions to Drive Your Business Growth
        </p>
        <div className="mt-8">
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors text-lg">
            Contact Us
          </button>
        </div>
      </div>

      <section className="relative py-8 px-6 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 my-4 rounded-3xl shadow-2xl">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-orange-400 via-pink-500 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-pink-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Software Development
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold text-orange-600">Maxzen .Tech</span>, we are a results-driven software development company in Hyderabad, located at Manjeera Trinity Corporate, KPHB, JNTU Road. We specialize in building innovative, scalable, and cost-effective digital solutions that empower startups, mid-sized businesses, and enterprises to succeed in today’s fast-moving digital economy.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              With a strong focus on custom software solutions, web and mobile app development, and enterprise-grade IT services, we help organizations streamline operations, improve customer engagement, and achieve measurable growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Looking for a trusted software development company in Hyderabad to build powerful, scalable, and customized solutions for your business? At <span className="font-semibold text-orange-600">Maxzen.Tech</span>, we specialize in creating custom software, web applications, and enterprise solutions that help businesses streamline operations, improve efficiency, and achieve sustainable growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute w-80 h-80 bg-gradient-to-br from-orange-300 via-pink-400 to-red-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <motion.img
              src={s2}
              alt="Software Developer working at Maxzen.Tech"
              className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-700"
              whileHover={{ rotate: 1, scale: 1.03 }}
            />
          </motion.div>
        </div>
      </section>

      {/* 🔥 Why Choose Maxzen.Tech Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-orange-200 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Why Choose <span className="text-orange-500">Maxzen .Tech</span> for Software Development in Hyderabad?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Maxzen .Tech is a leading software development company in Hyderabad delivering custom software solutions, web applications, and enterprise-grade software tailored to your business needs.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "✔ Strategic location at KPHB, JNTU Road – Hyderabad’s IT hub",
              "✔ Affordable software development services for startups and SMEs",
              "✔ Expertise in enterprise applications, SaaS products, and mobile apps",
              "✔ Agile development methodology for faster delivery",
              "✔ Ongoing software maintenance & support for long-term performance",
              "✔ Experienced developers with proven track records",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <CheckCircle className="text-orange-500 w-7 h-7 mt-1" />
                <p className="text-gray-700 text-left">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Section Heading */}
      <div className="text-center py-12 mb-2">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Our Software Development Services
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
          Our Core Software Development Services
        </h3>
      </div>

      <div
        className="flex h-[330px] rounded-xl shadow-lg"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {services.map((s, i) => (
          <div
            key={i}
            className={`relative overflow-hidden h-full cursor-pointer transition-all duration-500 ease-in-out ${
              i === 0 ? "rounded-l-xl" : ""
            } ${i === services.length - 1 ? "rounded-r-xl" : ""} ${
              hoveredIndex === null
                ? "flex-1"
                : hoveredIndex === i
                ? "flex-[4_4_0%]"
                : "flex-[1_1_0%]"
            }`}
            onMouseEnter={() => setHoveredIndex(i)}
          >
            <img
              src={s.img}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 transition-all duration-500"
              style={{ opacity: hoveredIndex === i ? 1 : 0 }}
            ></div>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out"
              style={{ opacity: hoveredIndex === i ? 1 : 0 }}
            >
              <h2 className="text-white font-semibold text-2xl leading-tight text-center">
                {s.title}
              </h2>
              <p className="text-white text-sm mt-2 text-center">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🌈 New Floating Glassmorphic Section */}
      <section className="relative py-24 mt-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <motion.div
        // className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 opacity-30 blur-3xl"
          className="absolute inset-0 bg-gradient-to-r to-pink-200 opacity-30 blur-3xl"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent"
          >
            Key Advantages of Working with <span className="text-gray-800">Maxzen .Tech</span>
          </motion.h2>
          <motion.div
            className="mx-auto mb-16 h-1 w-48 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "12rem", opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Experienced Developers with industry expertise",
              "Agile Development Process ensuring faster delivery",
              "Affordable Pricing without compromising quality",
              "End-to-End Solutions from planning to deployment",
              "Client-Centric Approach focused on growth",
              "Timely Delivery & Support",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group bg-white/30 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-red-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-2xl rounded-2xl transition-all duration-700"></div>
                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="flex-shrink-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-2 rounded-full shadow-md"
                  >
                    <CheckCircle className="text-white w-7 h-7" />
                  </motion.div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sparkle Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-50 blur-sm"
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>
      <div className="relative flex flex-wrap justify-center gap-8">
            {["💻", "⚙️", "🚀", "☁️", "📱", "💡"].map((icon, i) => (
              <motion.div
                key={i}
                className="text-5xl opacity-30"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>

      {/* 🌟 Maxzen.Tech Overview Section */}
<section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100">
  {/* Background animation */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 opacity-30 blur-3xl"
    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent text-center"
    >
      Software Development Company in Hyderabad – Maxzen .Tech
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-12"
    >
      At <span className="font-semibold text-orange-600">Maxzen.Tech</span>, we are a results-driven software development company in Hyderabad, located at Manjeera Trinity Corporate, KPHB, JNTU Road. We specialize in building innovative, scalable, and cost-effective digital solutions that empower startups, mid-sized businesses, and enterprises to succeed in today’s fast-moving digital economy.
    </motion.p>

    {/* Split Grid Layout */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column – Services List */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Best Services for Startups & Mid-Sized Companies
        </h3>
        <ul className="space-y-6 text-gray-700">
          <li>
            <span className="text-orange-600 font-semibold">MVP Development:</span> For startups with innovative ideas, we build Minimum Viable Products (MVPs) that help validate concepts, attract investors, and scale quickly.
          </li>
          <li>
            <span className="text-orange-600 font-semibold">Custom Web & Mobile App Development:</span> We design responsive, high-performance applications with engaging UI/UX to meet the needs of startups and growing companies in Hyderabad.
          </li>
          <li>
            <span className="text-orange-600 font-semibold">SaaS & Enterprise Solutions:</span> Mid-sized businesses rely on us for enterprise software solutions and cloud-based SaaS products that enhance productivity, collaboration, and ROI.
          </li>
          <li>
            <span className="text-orange-600 font-semibold">UI/UX Design & Prototyping:</span> Our conversion-focused designs ensure your digital platforms are not only attractive but also optimized for user engagement.
          </li>
          <li>
            <span className="text-orange-600 font-semibold">Software Testing & Maintenance:</span> We provide end-to-end software testing, monitoring, and optimization, ensuring your applications remain bug-free and future-ready.
          </li>
        </ul>
      </motion.div>

      {/* Right Column – Approach Steps */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Our Development Approach
        </h3>
        <div className="space-y-4">
          {[
            "Discovery & Planning – Deep analysis of your business needs.",
            "Agile Development – Iterative and flexible development cycles.",
            "Testing & QA – Ensuring flawless, secure, and scalable performance.",
            "Deployment & Support – Continuous updates and technical support.",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-4 bg-white/60 backdrop-blur-md border border-orange-100 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-800 font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Bottom Section – Contact CTA */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-20 text-center"
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Maxzen.Tech – Your Reliable Software Partner in Hyderabad
      </h3>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
        As a growing software development company in Hyderabad, Maxzen.Tech has become a trusted technology partner for startups and mid-level businesses across industries like healthcare, real estate, education, retail, and IT services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.button
  onClick={() => navigate("/contact")} // ✅ Navigate to Contact page
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
>
  Contact Us Now
</motion.button>

        <motion.a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-orange-400 text-orange-600 font-semibold py-3 px-8 rounded-full shadow hover:bg-orange-50 transition"
        >
          💬 Chat on WhatsApp
        </motion.a>
      </div>
      <p className="text-gray-600 mt-6">
        <span className="font-semibold text-orange-600">maxzen.tech</span> — Innovate. Transform. Lead.
      </p>
    </motion.div>
  </div>
</section>
 
    </section>
     <Footer/>
    </>
  );
};

export default SoftwareServiceImages;
