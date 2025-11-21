// import React from "react";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import backgroundImage from "../assests/appdev1.jpeg";
// import mainImage from "../assests/appdev2.jpeg";

// const MobileAppHero = () => {
//   useEffect(() => { window.scrollTo(0, 0); }, []);

//   return (
//     <section className="relative w-full overflow-hidden pt-32 pb-24 bg-[#0a0f2b]">

//       {/* neon cosmic overlay theme */}
//       <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

//       {/* floating glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute animate-pulse bg-blue-400/40 blur-[140px] w-96 h-96 rounded-full -top-40 -left-32"></div>
//         <div className="absolute animate-pulse bg-purple-500/40 blur-[130px] w-80 h-80 rounded-full top-1/2 -right-28 delay-200"></div>
//         <div className="absolute animate-pulse bg-cyan-400/40 blur-[120px] w-72 h-72 rounded-full bottom-10 left-1/3 delay-300"></div>
//       </div>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-6">

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="text-center md:text-left"
//         >

//           {/* HEADINGS + PARAGRAPH */}
//           <motion.div
//             initial={{ opacity:0, y:50, scale:0.9 }}
//             whileInView={{ opacity:1, y:0, scale:1 }}
//             transition={{ duration:0.9, ease:"easeOut" }}
//             className="text-white font-extrabold leading-tight drop-shadow-[0_0_35px_rgba(0,255,255,0.4)]"
//           >
//             <motion.h1 
//               animate={{ y:[0,-8,0] }}
//               transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }}
//               className="text-5xl md:text-6xl"
//             >
//               Mobile App
//             </motion.h1>

//             <motion.h1 
//               animate={{ y:[0,8,0] }}
//               transition={{ duration:2, repeat:Infinity, ease:"easeInOut", delay:0.3 }}
//               className="text-5xl md:text-6xl mt-2"
//             >
//               Development
//             </motion.h1>
//           </motion.div>

//           <motion.p
//             initial={{ opacity:0, y:30 }}
//             whileInView={{ opacity:1, y:0 }}
//             transition={{ duration:0.8, delay:0.3 }}
//             className="text-white/90 mt-6 text-lg leading-relaxed max-w-xl md:max-w-lg mx-auto md:mx-0"
//           >
//             We build secure, scalable & high–performance mobile applications designed to deliver
//             world-class user experience. From concept to deployment, we convert ideas into powerful
//             business-driven mobile solutions.
//           </motion.p>

//           {/* ICON TEXT */}
//           <div className="flex justify-center md:justify-start gap-10 mt-12 flex-wrap text-white text-lg">
//             <div className="flex items-center gap-4">
//               <div className="bg-white/20 p-3 rounded-full text-2xl">💡</div>
//               <div>
//                 <p className="font-semibold">UI/UX Creative</p>
//                 <p className="text-sm opacity-80">Custom Design</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="bg-white/20 p-3 rounded-full text-2xl">⚙️</div>
//               <div>
//                 <p className="font-semibold">Performance</p>
//                 <p className="text-sm opacity-80">Optimization</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center md:justify-start gap-10 mt-12 flex-wrap text-white text-lg">
//             <div className="flex items-center gap-4">
//               <div className="bg-white/20 p-3 rounded-full text-2xl">📞</div>
//               <div>
//                 <p className="font-semibold">+91 90599 91807</p>
//                 <p className="text-sm opacity-80">contact</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="bg-white/20 p-3 rounded-full text-2xl">🌐</div>
//               <div>
//                 <p className="font-semibold">www.maxzen.tech</p>
//               </div>
//             </div>
//           </div>

//         </motion.div>

//         {/* Right phone image */}
//         <motion.div
//           initial={{ scale: 0.85, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="flex justify-center"
//         >
//           <motion.img
//             src={mainImage}
//             className="w-[380px] h-[480px] object-cover rounded-3xl drop-shadow-[0_0_45px_rgba(0,255,255,0.5)]"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default MobileAppHero;
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import mainImage from "../assests/appdev4.png";
import backgroundImage from "../assests/appdev2.png";
import appdev5 from "../assests/appdev5.png";
import appdev6 from "../assests/appdev6.jpeg";
import appdev7 from "../assests/appdev7.png";
import appdev8 from "../assests/appdev8.png";
import appdev9 from "../assests/appdev9.webp";
import appdev10 from "../assests/appdev10.webp";
import appdev11 from "../assests/appdev11.jpg";
import appdev12 from "../assests/appdev12.jpg";
import appdev13 from "../assests/appdev13.jpg";
import appdev14 from "../assests/appdev14.jpg";
import appdev15 from "../assests/appdev15.jpg";
import {AnimatePresence } from "framer-motion";
import img9 from "../assests/img9.jpg";
import img12 from "../assests/img12.jpg";
import img13 from "../assests/img13.jpg";
import { useNavigate } from "react-router-dom";


import  {  useState } from "react";
import Header from "./Header";
import Footer from "./Footer";



const MobileAppHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openIndustry, setOpenIndustry] = useState(null);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const fullText =
    "This wide experience is why businesses call Maxzen.Tech the best app development company in Hyderabad.";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);


  return (
    <><Header/>
    
    <section className="relative w-full overflow-hidden pt-32 pb-24 bg-[#0a0f2b]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#0a0f2b]/70 backdrop-blur-[2px]"></div>

      {/* Floating neon glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute animate-pulse bg-blue-400/40 blur-[140px] w-96 h-96 rounded-full -top-40 -left-32"></div>
        <div className="absolute animate-pulse bg-purple-500/40 blur-[130px] w-80 h-80 rounded-full top-1/2 -right-28 delay-200"></div>
        <div className="absolute animate-pulse bg-cyan-400/40 blur-[120px] w-72 h-72 rounded-full bottom-10 left-1/3 delay-300"></div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          {/* Headings */}
          <div className="text-white font-extrabold leading-tight">
            <h1 className="text-5xl md:text-6xl drop-shadow-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Mobile App
            </h1>
            <h1 className="text-5xl md:text-6xl mt-2 drop-shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              Development
            </h1>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center md:justify-start gap-10 mt-12 flex-wrap text-white text-lg">
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full text-2xl hover:bg-cyan-400/40 transition-all duration-300">
                💡
              </div>
              <div>
                <p className="font-semibold">UI/UX Creative</p>
                <p className="text-sm opacity-80">Custom Design</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full text-2xl hover:bg-purple-400/40 transition-all duration-300">
                ⚙️
              </div>
              <div>
                <p className="font-semibold">Performance</p>
                <p className="text-sm opacity-80">Optimization</p>
              </div>
            </div>
          </div>
           <div className="flex justify-center md:justify-start gap-10 mt-12 flex-wrap text-white text-lg">
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full text-2xl hover:bg-cyan-400/40 transition-all duration-300">
                📞
              </div>
              <div>
                <p className="font-semibold">+91 90599 91807</p>
                <p className="text-sm opacity-80">Contact</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full text-2xl hover:bg-purple-400/40 transition-all duration-300">
                🌐
              </div>
              <div>
                <p className="font-semibold">www.maxzen.tech</p>
                {/* <p className="text-sm opacity-80">Optimization</p> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image with floating animation */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.img
            src={mainImage}
            alt="Mobile App Development"
            className="w-[380px] h-[480px] object-cover rounded-3xl drop-shadow-[0_0_45px_rgba(0,255,255,0.5)] relative z-10"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* Second Section: Company Overview + Services */}
      {/* ========================================================= */}
      <div className="relative z-10 mt-24 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          App Development Company in Hyderabad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed"
        >
          At <span className="text-cyan-300 font-semibold">Maxzen.Tech</span>, we are a trusted app development company in Hyderabad delivering innovative, scalable, and user-friendly mobile applications. Whether you’re a startup or an established business, our expert team builds Android, iOS, and cross-platform apps that drive growth and engage users.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/90 max-w-4xl mx-auto mt-6 leading-relaxed"
        >
          As one of the fastest-growing mobile app development companies in Hyderabad, we combine creativity, technology, and strategy to deliver apps that stand out in today’s competitive market.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[2px] w-40 mx-auto mt-10 bg-gradient-to-r from-cyan-400 to-purple-500"
        ></motion.div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-6 text-white">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Mobile App Development Services in Hyderabad
        </motion.h3>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Android App Development",
              desc: "Robust and secure apps using Kotlin and Java.",
              icon: "🤖",
            },
            {
              title: "iOS App Development",
              desc: "Smooth and high-performance apps for Apple devices.",
              icon: "🍎",
            },
            {
              title: "Hybrid App Development",
              desc: "Cost-effective solutions with Flutter and React Native.",
              icon: "⚛️",
            },
            {
              title: "Custom App Development",
              desc: "Tailored mobile apps for healthcare, real estate, retail, and more.",
              icon: "🛠️",
            },
            {
              title: "App UI/UX Design",
              desc: "Engaging, user-friendly interfaces designed to boost conversions.",
              icon: "🎨",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                {service.title}
              </h4>
              <p className="text-white/80">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
         <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Get Free Quote 🚀
        </button>
        </motion.div>
      </div>
      {/* WHY CHOOSE MAXZEN.TECH SECTION (No Cards Style - Premium Stripe) */}
<div className="relative z-10 mt-12 max-w-5xl mx-auto px-6 text-center text-white">

  <motion.h3
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 text-transparent bg-clip-text"
  >
    Why Choose Maxzen.Tech?
  </motion.h3>

  <div className="flex flex-col gap-6 mt-10">

    {[
      "Local Expertise — Based in Hyderabad, we understand regional business needs.",
      "Skilled Developers — Experienced in Android, iOS & cross-platform apps.",
      "Affordable Packages — Flexible pricing suitable for startups & enterprise.",
      "Scalable Solutions — Apps that grow with your business future roadmap.",
      "Long-Term Support — Updates, maintenance & continuous optimization.",
      "We Deliver Value — Not just development…but measurable business impact."
    ].map((text, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-left mx-auto w-full md:w-3/4 flex items-start gap-4 
                   py-3 px-4 border-b border-white/15 hover:border-cyan-400/50 
                   hover:bg-white/5 transition-all duration-300"
      >
        <span className="text-2xl">✨</span>
        <p className="text-lg text-white/85 leading-relaxed">{text}</p>
      </motion.div>
    ))}

  </div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="text-white/90 text-lg max-w-3xl mx-auto text-center mt-10 leading-relaxed"
  >
    Our goal is to help businesses succeed with mobile app development in Hyderabad that is reliable, affordable, and results-driven.
  </motion.p>

</div>
{/* TECHNOLOGIES WE USE SECTION */}
<div className="relative z-10 mt-12 max-w-6xl mx-auto px-6 text-center text-white">
  <motion.h3
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 text-transparent bg-clip-text"
  >
    Technologies We Use
  </motion.h3>

  <div className="overflow-hidden w-full py-4 ">
    <motion.div
      className="flex gap-10 items-center"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* 6 Logos repeat twice for seamless infinite scroll */}
      {[
        
        appdev5,
        appdev6,
        appdev7,
        appdev8,
        appdev9,
        appdev10,
      ].map((img, i) => (
        <img
          key={i}
          src={img}
          className="w-[200px] h-[200px] object-contain opacity-90 hover:opacity-100 transition"
          alt="tech logo"
        />
      ))}

      {[
      appdev5,
      appdev6,
      appdev7,
      appdev8,
      appdev9,
      appdev10,
      ].map((img, i) => (
        <img
          key={i}
          src={img}
          className="w-[200px] h-[200px] object-contain opacity-90 hover:opacity-100 transition"
          alt="tech logo"
        />
      ))}
    </motion.div>
  </div>
</div>
{/* INDUSTRIES WE SERVE ACCORDION SECTION */}
<div className="relative z-10 mt-12 max-w-6xl mx-auto px-6 text-white">
  <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
    Industries We Serve
  </h2>

  {[
    { title: "E-Commerce App Development", img: appdev11, content: "As a leading App Development Company in Hyderabad, Maxzen .Tech builds powerful E-Commerce apps designed for smooth checkout systems, personalized product recommendations, and secure payment gateways. Our expert app developers in Hyderabad create scalable Android app development solutions that help online stores boost sales and customer engagement." },
    { title: "Healthcare App Development", img: appdev12, content: "We provide innovative mobile application development in Hyderabad for the healthcare industry, including appointment booking apps, telemedicine platforms, and patient management systems. With our reliable Mobile App Development Services in Hyderabad, hospitals and clinics can offer seamless digital healthcare experiences while ensuring data security and compliance." },
    { title: "Real Estate App Development", img: appdev13, content: "Maxzen .Tech specializes in real estate mobile app development with features like property listings, advanced search filters, and virtual tour apps. As a trusted mobile app development company in Hyderabad, we help real estate agencies connect with buyers and sellers more effectively, driving leads and sales with interactive app solutions" },
    { title: "Education App Development", img: appdev14, content: "Our team of skilled app developers in Hyderabad builds modern e-learning platforms, online classroom apps, and student engagement tools. Through our expert Mobile App Development Services in Hyderabad, we empower schools, colleges, and ed-tech startups to deliver interactive learning experiences with real-time collaboration." },
    { title: "Finance App Development", img: appdev15, content: "With expertise in secure Android app development, Maxzen .Tech delivers finance and payment apps that ensure trust and reliability. As a top Mobile Application Development Company in Hyderabad, we create apps for banking, digital wallets, and online payments, offering encrypted transactions and seamless user experiences.." },
  ].map((item, index) => (
    <div key={index} className="mb-4 border border-white/20 rounded-xl backdrop-blur-xl bg-white/5 shadow-[0_0_35px_rgba(0,255,255,0.2)] text-left">
      <button
        className="w-full flex justify-between items-center p-5 text-left text-xl font-semibold"
        onClick={() => setOpenIndustry(openIndustry === index ? null : index)}
      >
        <span>{item.title}</span>
        <span className="text-3xl text-cyan-300">{openIndustry === index ? "-" : "+"}</span>
      </button>

      <AnimatePresence>
        {openIndustry === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden p-6"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <img src={item.img} className="w-100 h-100rounded-2xl object-cover border border-white/20" />
              <p className="text-lg text-white/85 leading-relaxed">{item.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
{/* CLIENT SUCCESS & PORTFOLIO SECTION */}
<div className="relative z-10 mt-32 max-w-6xl mx-auto px-6 text-white">
  <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 text-transparent bg-clip-text">
    Client Success & Portfolio
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {/* Travels */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition-all duration-300 text-center">
      <img src={img9} className="w-full h-56 object-cover rounded-xl mb-5" />
      <p className="text-lg text-white/85 leading-relaxed mb-4">
        “Maxzen.Tech built our travel booking app with great features and smooth performance.
        Highly satisfied with their work.”
      </p>
      <p className="text-xl font-semibold text-cyan-300">Narendar Reddy</p>
      <p className="text-sm text-white/70">(SWETHA CARS AND TRAVELS)</p>

      <div className="flex justify-center gap-1 mt-3 text-yellow-300 text-2xl">
        ★★★★★
      </div>
    </div>

    {/* Bus */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition-all duration-300 text-center">
      <img src={img12} className="w-full h-56 object-cover rounded-xl mb-5" />
      <p className="text-lg text-white/85 leading-relaxed mb-4">
        “Maxzen.Tech provided the best mobile app development services for our bus business.
        Very satisfied.”
      </p>
      <p className="text-xl font-semibold text-cyan-300">Laxman Netha</p>
      <p className="text-sm text-white/70">(M.R.BUSES)</p>

      <div className="flex justify-center gap-1 mt-3 text-yellow-300 text-2xl">
        ★★★★★
      </div>
    </div>

    {/* Cars Buddy */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] transition-all duration-300 text-center">
      <img src={img13} className="w-full h-56 object-cover rounded-xl mb-5" />
      <p className="text-lg text-white/85 leading-relaxed mb-4">
        “Great experience working with their app developers in Hyderabad. The Cars Buddy app works flawlessly.”
      </p>
      <p className="text-xl font-semibold text-cyan-300">Bhargav</p>
      <p className="text-sm text-white/70">(CARS BUDDY)</p>

      <div className="flex justify-center gap-1 mt-3 text-yellow-300 text-2xl">
        ★★★★★
      </div>
    </div>
  </div>
</div>

<section className="bg-gradient-to-r from-[#0a0f2b] via-purple-900 to-[#0a0f2b] text-white py-20 mt-24 text-center relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Typing Animation Line */}
        <p className="text-lg md:text-xl text-cyan-300 font-medium mb-6 min-h-[2rem] whitespace-pre-wrap tracking-wide">
          {text}
          <span className="animate-pulse text-cyan-400">|</span>
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Ready to Build Your App?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          If you’re searching for a reliable app development company in Hyderabad,{" "}
          <span className="text-cyan-400 font-semibold">Maxzen.Tech</span> is your
          trusted partner. We specialize in mobile application development in
          Hyderabad with other services covering Android, iOS, and hybrid platforms.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Talk to Our Experts
        </button>
      </div>
      </section>

    </section>
    <Footer/></>
  );
};

export default MobileAppHero;
