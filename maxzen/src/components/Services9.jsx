import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { CheckCircle } from "lucide-react"; 

import s1 from "../assests/img8.jpeg";
import s2 from "../assests/img17.avif";
import s3 from "../assests/img18.jpg";
import s4 from "../assests/img19.jpg";
import s5 from "../assests/img20.jpg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import img16 from "../assests/img16.jpg";




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



 useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
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
   
   <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50 mb-2">
  
  {/* geometric floating soft tech shapes */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.18]">
    <motion.div
      animate={{ y: [0,-25,0], rotate:[0,8,-8,0] }}
      transition={{ duration:10, repeat:Infinity, ease:"easeInOut"}}
      className="absolute top-12 left-20 w-36 h-36 rounded-full bg-gradient-to-br from-orange-400/40 to-red-500/40 blur-3xl"
    />
    <motion.div
      animate={{ y: [-20,10,-20], rotate:[0,-12,12,0] }}
      transition={{ duration:12, repeat:Infinity, ease:"easeInOut"}}
      className="absolute bottom-16 right-24 w-40 h-40 rounded-full bg-gradient-to-br from-pink-400/40 to-orange-500/40 blur-3xl"
    />
  </div>

  <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
      <AnimatedHeading />

      <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto font-medium leading-relaxed">
        Custom Software Solutions to Drive Your Business Growth
      </p>

      <motion.button
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.97 }}
        onClick={() => navigate("/contact")}
        
        className="mt-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
        text-white font-semibold py-3 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
      >
        Contact Us
      </motion.button>
  </div>

{/* </section> */}


     <section className="relative h-screen w-full overflow-hidden flex items-center bg-gray-900 text-white snap-start">
        
  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-transparent to-gray-800 opacity-40"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-10">
    
    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex justify-center"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      
      <motion.img
        src={img16}
        alt="Software Developer working at Maxzen.Tech"
        className="relative rounded-3xl shadow-2xl w-[420px] h-[480px] object-cover"
        whileHover={{ scale: 1.08, y: -8 }}
      />
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h2 className="text-5xl font-extrabold mb-6 text-white leading-tight">
        Software Development
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        At <span className="font-semibold text-orange-400">Maxzen.Tech</span>, we are a results-driven software development company in Hyderabad. We specialize in building innovative, scalable, and cost-effective digital solutions that empower startups, mid-sized businesses, and enterprises to succeed.
      </p>

      <p className="text-gray-400 mb-4 leading-relaxed text-base">
        With a strong focus on custom software solutions, web and mobile app development, and enterprise-grade IT services, we help organizations streamline operations, improve customer engagement, and achieve measurable growth.
      </p>

      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 bg-orange-500 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
      >
        Learn More
      </motion.button> */}
    </motion.div>

  </div>
</section>


     {/* 🔥 Why Choose Maxzen.Tech Section */}
<section className="relative py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden mt-20 will-change-transform">
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-orange-200 via-transparent to-transparent"></div>

  <div className="max-w-6xl mx-auto text-center relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
    >
      Why Choose <span className="text-orange-500">Maxzen .Tech</span> for Software Development in Hyderabad?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition-transform duration-300 will-change-transform"
        >
          <CheckCircle className="text-orange-500 w-7 h-7 mt-1" />
          <p className="text-gray-700 text-left">{text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Floating Emoji Icons */}
<div className="relative flex flex-wrap justify-center gap-8 pointer-events-none select-none">
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

{/* 🧠 Services Section */}
<>
  <div className="text-center py-12 mb-2">
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
      Our Software Development Services
    </h2>
    <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
      Our Core Software Development Services
    </h3>
  </div>

  <div
    className="flex h-[330px] rounded-xl shadow-lg overflow-hidden will-change-transform"
    onMouseLeave={() => setHoveredIndex(null)}
  >
    {services.map((s, i) => (
      <motion.div
        key={i}
        className={`relative overflow-hidden h-full cursor-pointer ${
          i === 0 ? "rounded-l-xl" : ""
        } ${i === services.length - 1 ? "rounded-r-xl" : ""}`}
        onMouseEnter={() => setHoveredIndex(i)}
        animate={{
          flex: hoveredIndex === null ? 1 : hoveredIndex === i ? 4 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.img
          src={s.img}
          className="w-full h-full object-cover will-change-transform"
          animate={{
            scale: hoveredIndex === i ? 1.08 : 1,
            filter: hoveredIndex === i ? "brightness(0.8)" : "brightness(1)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white backdrop-blur-[2px]"
        >
          <h2 className="text-2xl font-semibold text-center">{s.title}</h2>
          <p className="text-sm mt-2 text-center">{s.description}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</>

       {/* <div className="relative flex flex-wrap justify-center gap-8">
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
          </div> */}

{/* 🌈 Floating Glassmorphic Section — Optimized */}
<section className="relative py-2 mt-2 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50 will-change-transform">
  {/* Animated gradient background */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r to-pink-200 opacity-30 blur-3xl"
    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent"
    >
      Key Advantages of Working with <span className="text-gray-800">Maxzen .Tech</span>
    </motion.h2>

    <motion.div
      className="mx-auto mb-16 h-1 w-48 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg"
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "12rem", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />

    {/* ✅ Cards Grid */}
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
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative bg-white/30 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-red-400/20 to-pink-400/30 opacity-0 hover:opacity-100 blur-xl rounded-2xl transition-all duration-700"></div>
          <div className="relative flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-2 rounded-full shadow-md"
            >
              <CheckCircle className="text-white w-7 h-7" />
            </motion.div>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              {text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ✨ Sparkle Particles — simplified & limited */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40 blur-sm"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.5,
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
</section>

{/* 🌟 Maxzen.Tech Overview Section — Optimized */}
<section className="relative py-2 mt-12 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 will-change-transform">
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 opacity-30 blur-3xl"
    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  />

  {/* Floating Icons — reduced count, lightweight animation */}
  <div className="absolute inset-0 pointer-events-none opacity-[0.12] select-none">
    {[
      { icon: "💻", top: "14%", left: "10%", dur: 10 },
      { icon: "⚙️", top: "35%", right: "12%", dur: 11 },
      { icon: "📱", bottom: "25%", left: "18%", dur: 12 },
      { icon: "☁️", bottom: "10%", right: "30%", dur: 13 },
      { icon: "🧠", top: "25%", left: "50%", dur: 12 },
      { icon: "🎨", bottom: "20%", right: "20%", dur: 14 },
    ].map((el, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: el.dur, repeat: Infinity, ease: "easeInOut" }}
        className="absolute text-7xl"
        style={{ top: el.top, left: el.left, right: el.right }}
      >
        {el.icon}
      </motion.div>
    ))}
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent text-center"
    >
      Software Development Company in Hyderabad – Maxzen .Tech
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-12"
    >
      At <span className="font-semibold text-orange-600">Maxzen.Tech</span>, we are a results-driven software development company in Hyderabad, located at Manjeera Trinity Corporate, KPHB, JNTU Road. We specialize in building innovative, scalable, and cost-effective digital solutions that empower startups, mid-sized businesses, and enterprises to succeed in today’s fast-moving digital economy.
    </motion.p>

    {/* Grid */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left - Services */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Best Services for Startups & Mid-Sized Companies
        </h3>
        <ul className="space-y-6 text-gray-700 text-left">
          <li><span className="text-orange-600 font-semibold">MVP Development:</span> For startups with innovative ideas, we build Minimum Viable Products (MVPs) that help validate concepts, attract investors, and scale quickly.</li>
          <li><span className="text-orange-600 font-semibold">Custom Web & Mobile App Development:</span> We design responsive, high-performance applications with engaging UI/UX to meet the needs of startups and growing companies in Hyderabad.</li>
          <li><span className="text-orange-600 font-semibold">SaaS & Enterprise Solutions:</span> Mid-sized businesses rely on us for enterprise software solutions and cloud-based SaaS products that enhance productivity, collaboration, and ROI.</li>
          <li><span className="text-orange-600 font-semibold">UI/UX Design & Prototyping:</span> Our conversion-focused designs ensure your digital platforms are not only attractive but also optimized for user engagement.</li>
          <li><span className="text-orange-600 font-semibold">Software Testing & Maintenance:</span> We provide end-to-end software testing, monitoring, and optimization, ensuring your applications remain bug-free and future-ready.</li>
        </ul>
      </motion.div>

      {/* Right - Approach */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
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

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Contact Us Now
        </motion.button>

        <motion.a
          href="https://api.whatsapp.com/send/?phone=919059991807&text&type=phone_number&app_absent=0"
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
