import React from "react";
import { motion } from "framer-motion";
import webImg from "../assests/wd1.jpg";

// 🖼️ Example images for the grid section
import img1 from "../assests/wd2.jpg";
import img2 from "../assests/wd3.jpg";
import img3 from "../assests/wd4.jpg";
import img4 from "../assests/wd5.jpg";
import img5 from "../assests/wd6.jpg";
import img6 from "../assests/wd7.jpg";
import img7 from "../assests/wd8.png";
import img8 from "../assests/img16.jpg";
import img9 from "../assests/wd10.jpg";
import img10 from "../assests/wd11.webp";
import img11 from "../assests/wd12.jpg";
import img12 from "../assests/wd13.webp";

import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";



const services = [
  {
    title: "Static Web Design",
    desc: "A lightweight, fast-loading site built with HTML and CSS, ideal for static pages, portfolios, and simple business websites..",
    img: img1,
  },
  {
    title: "CMS Based Design",
    desc: " The most popular CMS for blogs and business sites, offering easy customization, SEO-friendly features, and thousands of plugins..",
     img: img2,
  },
  {
    title: "Podcast Website",
    desc: "A platform to host and showcase your podcast episodes, with audio players, show notes, subscription links, and audience engagement tools..",
    img: img3,
  },
  {
    title: "E-Commerce",
    desc: " online store where businesses can sell products or services, complete with product listings, shopping cart, secure payments, and order tracking.",
    img: img4,
  },
  {
    title: "PWA (Progressive Web App)",
    desc: "A modern website that works like a mobile app, offering offline access, push notifications, and a fast, app-like experience on any device..",
    img: img5,
  },
  {
    title: "Portfolio Website",
    desc: "A Portfolio Website is a personal or professional website designed to showcase your skills, projects, achievements, and experience.",
    img: img6,
  },
];

const WebDesignSection = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    const navigate = useNavigate();


  

 

  return (
    <><Header/>
    
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-white text-gray-800">
      {/* 🌈 Floating Background Circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-48 h-48 bg-gray-900/30 rounded-full blur-3xl opacity-70"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-20 w-56 h-56 bg-gray-900/40 rounded-full blur-3xl opacity-70"
      />

      {/* 🧭 HERO SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-24 px-6 md:px-20">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-400 leading-tight">
            Leading Web Design Company in Hyderabad
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Affordable, modern, and responsive web design services that drive
            results.
          </p>

          <motion.button
          onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-3 rounded-full text-white bg-gray-400 hover:bg-[#098d96] font-semibold shadow-md transition"
          >

            Book An Appointment
          </motion.button>

          {/* ABOUT BOX */}
          <div className="mt-12 bg-white/80 rounded-2xl p-8 shadow-lg border-l-8 border-gray-400">
            <h3 className="text-2xl font-bold text-gray-400 mb-4">
              About Us – Why Maxzen Tech?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe that a website is more than just a digital identity —
              it’s your online growth engine. As a trusted web design company in
              Hyderabad, we specialize in delivering affordable yet premium web
              design solutions tailored to startups, small businesses, and
              enterprises.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 text-left">
              <li>✅ Creative Designs – Modern & user-friendly</li>
              <li>✅ Affordable Pricing – Best value for money</li>
              <li>✅ SEO-Ready Websites – Optimized for ranking</li>
              <li>✅ 24/7 Support – Reliable post-launch assistance</li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative rounded-[40px] shadow-2xl border-t-8 border-gray-400 overflow-hidden bg-white/80 backdrop-blur-sm">
            <motion.img
              src={webImg}
              alt="Web Design Illustration"
              className="w-full h-[400px] object-cover rounded-[40px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gray-900/25 mix-blend-overlay rounded-[40px]" />
          </div>

          <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-[#0fa4af]/40 blur-3xl rounded-full opacity-60" />
        </motion.div>
      </div>

      {/* 🌊 Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.36,168.19-19.65,250.45-0.39C823.78,32.53,906.67,63.09,985,86.5c70.52,21,146.15,32.79,215,24.69V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* 🔹 WEB DESIGN SERVICES GRID SECTION */}
      <div className="relative z-10 py-24 px-6 md:px-20 bg-gradient-to-b from-white to-gray-400">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-400 mb-4">
            Our Web Design Services
          </h2>
          <p className="text-lg text-gray-600">
            At <span className="font-semibold text-[#0fa4af]">Maxzen.Tech</span>, we provide a wide range of web designing services in Hyderabad:
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0fa4af]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white px-4 text-center">
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
     
      {/* 🌐 WEB DESIGNING SECTION */}
     
<section className="py-20 bg-gradient-to-b from-gray-100 to-gray-400 text-gray-800">
  <div className="max-w-7xl mx-auto px-6 space-y-24">

    {/* 🌀 ROW 1 - TEXT LEFT / IMAGE RIGHT */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="space-y-5">
        <h2 className="text-4xl font-bold text-gray-400">Web Designing</h2>
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold text-[#0fa4af]">Maxzen.Tech</span>, we craft visually stunning,
          user-friendly, and high-performance websites that help businesses
          establish a strong online presence. As a trusted 
          <span className="font-semibold text-[#0fa4af]"> web design company in Hyderabad</span>, 
          we understand that a website is more than just an online brochure — it’s a powerful business tool.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A well-designed site combines creativity with functionality to deliver
          a seamless user experience, fast performance, and high engagement.
          Whether you need a business website, e-commerce platform, or custom
          website development in Hyderabad, our expert team delivers designs
          that align perfectly with your brand identity and business goals.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={img7}
          alt="Modern Web Design Illustration"
          className="rounded-3xl shadow-xl w-full max-w-md object-cover border-t-8 border-[#0fa4af]"
        />
      </div>
    </div>

    {/* 🌀 ROW 2 - IMAGE LEFT / TEXT RIGHT */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="flex justify-center order-2 md:order-1">
        <img
          src={img8}
          alt="Creative Web Development Team"
          className="rounded-3xl shadow-xl w-full max-w-md object-cover border-t-8 border-[#0fa4af]"
        />
      </div>

      {/* Text */}
      <div className="space-y-5 order-1 md:order-2">
        <h3 className="text-3xl font-bold text-gray-900">Web Design Company in Hyderabad</h3>
        <p className="text-gray-700 leading-relaxed">
          As one of Hyderabad’s top web design companies, we combine innovation and technology 
          to create websites that captivate audiences and deliver measurable results.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our goal is to ensure every website we create reflects the brand’s values while being optimized 
          for performance, mobile, and SEO — giving your business the online visibility it deserves.
        </p>
      </div>
    </div>

    {/* 🧩 WHAT WE OFFER SECTION */}
    <div className="mt-10">
      <h3 className="text-3xl font-bold text-center text-[#0fa4af] mb-10">What We Offer</h3>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 text-lg">
        <li className="bg-white/80 p-6 rounded-2xl shadow-md border-l-4 border-[#0fa4af] hover:shadow-xl transition">
          ✔ <strong>Custom Website Design</strong> – Unique, modern, and responsive designs tailored to your business needs.
        </li>
        <li className="bg-white/80 p-6 rounded-2xl shadow-md border-l-4 border-[#0fa4af] hover:shadow-xl transition">
          ✔ <strong>User-Centered Approach</strong> – Intuitive navigation and seamless user experiences that boost engagement.
        </li>
        <li className="bg-white/80 p-6 rounded-2xl shadow-md border-l-4 border-[#0fa4af] hover:shadow-xl transition">
          ✔ <strong>Mobile & SEO Optimization</strong> – Fully responsive designs that look great and rank well.
        </li>
        <li className="bg-white/80 p-6 rounded-2xl shadow-md border-l-4 border-[#0fa4af] hover:shadow-xl transition">
          ✔ <strong>Fast & Secure Websites</strong> – Optimized for speed, security, and user trust.
        </li>
        <li className="bg-white/80 p-6 rounded-2xl shadow-md border-l-4 border-[#0fa4af] hover:shadow-xl transition">
          ✔ <strong>E-Commerce Solutions</strong> – Online stores that maximize conversions and sales.
        </li>
      </ul>

      <p className="text-center mt-10 text-gray-700 text-lg max-w-3xl mx-auto">
        A well-designed website is a powerful tool for attracting and converting customers. 
        Let us create a website that not only looks great but also delivers results!
      </p>
    </div>
  </div>
</section>
{/* 🌐 HOW WE WORK – ZIGZAG SECTION */}
<section className="relative py-24 bg-gradient-to-b from-[#e8f7f9] to-white text-gray-800">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-400 mb-6">
      How We Work
    </h2>
    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-16">
      At <span className="font-semibold text-[#0fa4af]">Maxzen.Tech</span>, we follow a clear and result-driven
      process to ensure every project is delivered with creativity,
      functionality, and long-term value. Our goal is to design websites that
      not only look beautiful but also help your business grow online.
    </p>
  </div>

  {/* Step 1 */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mb-20">
    <div className="order-1 md:order-none">
      <img
    src={img9}
        alt="Creative Planning"
        className="rounded-3xl shadow-lg w-full object-cover"
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-3xl font-bold text-gray-400">1. Creative Planning</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our creative team begins with brainstorming and preparing unique layouts that reflect your brand
        identity. Every design is crafted with UI/UX best practices to ensure smooth navigation,
        engaging visuals, and a responsive experience across all devices.
      </p>
      {/* <a
        href="https://maxzen.tech/"
        className="inline-block text-[#0fa4af] font-semibold hover:underline"
      >
        Learn More →
      </a> */}
    </div>
  </div>

  {/* Step 2 */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mb-20">
    <div className="order-1 md:order-2">
      <img
        src={img10}
        alt="Strategy & Research"
        className="rounded-3xl shadow-lg w-full object-cover"
      />
    </div>
    <div className="order-2 md:order-1 space-y-4">
      <h3 className="text-3xl font-bold text-gray-400">2. Strategy & Research</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        A great website starts with solid planning. We analyze your business goals, target audience, and competitors
        to create a roadmap for success — ensuring that each design decision supports your objectives.
      </p>
      {/* <a
        href="https://maxzen.tech/"
        className="inline-block text-[#0fa4af] font-semibold hover:underline"
      >
        Learn More →
      </a> */}
    </div>
  </div>

  {/* Step 3 */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mb-20">
    <div className="order-1 md:order-none">
      <img
        src={img11}
        alt="Development & Execution"
        className="rounded-3xl shadow-lg w-full object-cover"
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-3xl font-bold text-gray-400">3. Development & Execution</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        Once the design and planning are finalized, our developers bring the website to life. We use clean coding practices,
        responsive frameworks, and SEO integration to ensure fast loading, high ranking, and a flawless user experience.
      </p>
      {/* <a
        href="https://maxzen.tech/"
        className="inline-block text-[#0fa4af] font-semibold hover:underline"
      >
        Learn More →
      </a> */}
    </div>
  </div>

  {/* Step 4 */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    <div className="order-1 md:order-2">
      <img
        src={img12}
        alt="Launch & Support"
        className="rounded-3xl shadow-lg w-full object-cover"
      />
    </div>
    <div className="order-2 md:order-1 space-y-4">
      <h3 className="text-3xl font-bold text-gray-400">4. Launch & Ongoing Support</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our work doesn’t end after launch. We provide regular updates, security checks, and performance optimization
        to keep your website running smoothly. With 24/7 support, we ensure your business stays online and ahead.
      </p>
      {/* <a
        href="https://maxzen.tech/"
        className="inline-block text-[#0fa4af] font-semibold hover:underline"
      >
        Learn More →
      </a> */}
    </div>
  </div>
</section>
{/* 🌐 FINAL CTA SECTION – Chat & Contact */}
<section className="py-16 bg-gradient-to-b from-white to-gray-100 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Let’s Build Something Amazing Together
  </h2>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
    Whether you’re ready to start your project or just want to discuss ideas,
    our team is here to help. Connect with us today — we’d love to chat!
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-6">
    <a
      href="https://wa.me/919059991807"
      target="_blank"
      rel="noopener noreferrer"
      className="px-10 py-4 rounded-full bg-gray-400 text-white font-semibold text-lg hover:bg-[#0d8f99] transition duration-300 shadow-md"
    >
      💬 Chat with Us
    </a>

   <a
  href="/contact"
  className="px-10 py-4 rounded-full bg-gray-400 text-white font-semibold text-lg hover:bg-[#9cd3dc] transition duration-300 shadow-md"
>
  📞 Contact
</a>

  </div>
</section>



      </section>
      
    <Footer/></>
    
    
  );
};

export default WebDesignSection;
