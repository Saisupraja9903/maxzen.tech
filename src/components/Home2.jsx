import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import heroImg from "../assests/hero.gif";
import person from "../assests/person.gif";
import team from "../assests/hc.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/* ----------------------------------------------------
   BULLETS FOR HOME2
---------------------------------------------------- */
const bullets = [
  { text: "Customized Strategies – Every campaign is designed after understanding your audience, competition, and business goals." },
  { text: "Proven Results – We focus on improving your traffic, conversion rates, and overall online authority." },
  { text: "Transparent Reporting – Get clear, detailed reports so you always know how your campaigns are performing." },
  { text: "Dedicated Support – Our team is always available to guide, update, and optimize your marketing efforts." },
];

/* ----------------------------------------------------
   MAIN COMBINED COMPONENT
---------------------------------------------------- */
const HomeCombined = () => {

  /* ----------------------------------------
      HOME1 LOGIC
  ---------------------------------------- */
  const navigate = useNavigate();
  const serviceRoutes = {
    "Web Designing": "/websitedesignCompanyinHyderabad",
    "SEO Optimization": "/services4",
    "Web Development": "/Webdevelopement",
    "App Development": "/services8",
    "Social Media Marketing": "/Social-Media-Marketing-Agency-in-Hyderabad",
    "Software Development": "/services9",
    "Cloud Computing": "/services7",
  };

  /* ----------------------------------------
      HOME2 LOGIC
  ---------------------------------------- */
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .slice()
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.isIntersecting) {
          const idx = Number(mostVisible.target.getAttribute("data-index"));
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        root: el,
        threshold: [0.25, 0.5, 0.75, 0.99],
      }
    );

    const cards = el.querySelectorAll("[data-bullet-card='true']");
    cards.forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, []);

  let isScrolling = false;
  let scrollTimeout;

  const onWheelSnap = (e) => {
    e.preventDefault();
    if (isScrolling) return;

    isScrolling = true;
    const box = scrollRef.current;
    const cardHeight = box.clientHeight;
    const current = Math.round(box.scrollTop / cardHeight);

    const nextIndex = e.deltaY > 0 ? current + 1 : current - 1;

    box.scrollTo({ top: nextIndex * cardHeight, behavior: "smooth" });

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 900);
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

      {/* =====================================================
            🔥 HOME 1 SECTION  
      ===================================================== */}
      <section id="home2-start" className="relative py-16 md:py-20 px-6 md:px-32 overflow-hidden"> 
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 relative z-10">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-start relative"
          >
           <motion.img
  src={heroImg}
  alt="Hero"
  className="w-[300px] md:w-[400px] translate-x-12 md:translate-x-6 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] rounded-xl"
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

            <div className="absolute -z-10 top-10 left-5 w-80 h-80 bg-gradient-to-br from-[#d73b3e]/20 to-transparent rounded-full blur-3xl"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 md:pl-2 text-center md:text-left relative">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-[#d73b3e] rounded-full mb-6 mx-auto md:mx-0"
            ></motion.div>

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

            <p className="text-gray-600 mt-4 text-sm md:text-lg leading-relaxed">
              We craft data-driven digital experiences that help your brand
              stand out and connect with the right audience — blending strategy,
              creativity, and technology.
            </p>

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

      {/* =========================== BOTTOM SECTION =========================== */}
      <section className="relative py-16 px-6 md:px-20 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          <div className="flex-1 relative">
            <div className="flex items-center justify-center md:justify-start space-x-3 mt-1 mb-6">
              <img src={team} alt="team" className="w-10 h-10 rounded-full" />
              <p className="font-semibold text-[#d73b3e] text-lg">
                420{" "}
                <span className="text-gray-600 font-normal text-sm">
                  Happy Clients
                </span>
              </p>
            </div>

   <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
  <Link
  to="/"
  onClick={() => window.scrollTo(0, 0)}
>
  <span className="font-bold text-gray-600 text-base md:text-xl cursor-pointer">
    Maxzen.Tech
  </span>

  </Link>{" "}
  empowers businesses with innovative, ROI-focused digital growth strategies.
  We help brands establish a powerful online presence, streamline customer acquisition, and drive meaningful conversions through data-backed methods. From website development and branding to SEO, social media, and paid advertising, we ensure every step of your digital journey leads to measurable success and long-term business growth.
</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
            >
              Get a Free Quote
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center relative"
          >
            <img
              src={person}
              alt="Decorative Person"
              className="w-[600px] md:w-[600px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] rounded-xl"
            />
          </motion.div>
        </div>

        {/* Floating Rotating Circle */}
        <div className="mt-24 flex flex-col items-center text-center relative">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-600 fill-current">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="8" fontWeight="900">
                  <textPath href="#circlePath">• LEARN ABOUT US • EXPLORE MORE • SCROLL DOWN •</textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/digitalmarketingservices")}
              className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white text-sm font-semibold shadow-md cursor-pointer"
            >
              Start
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
            🔥 HOME 2 SECTION  
      ===================================================== */}
      <section className="bg-white py-20 px-6 md:px-20 overflow-hidden relative">
        <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[400px] h-[400px] bg-orange-300/30 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left relative">
              Why Choose{" "}
              <span className="text-orange-500 hover:text-gray-600"><Link
  to="/"
  onClick={() => window.scrollTo(0, 0)}
>Maxzen.tech</Link>{" "}</span> for Digital Marketing in Hyderabad?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-left">
              At <Link
  to="/"
  onClick={() => window.scrollTo(0, 0)}
>
  <span className="font-bold text-gray-700 text-base md:text-xl cursor-pointer">
    Maxzen.Tech
  </span>

  </Link>{" "}, we don’t just run ads we create digital experiences that drive results...
            </p>
          </motion.div>

          {/* RIGHT SCROLLABLE CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Here’s why Hyderabad businesses prefer working with us:
              </h3>
            </div>

            <div
  ref={scrollRef}
  onWheel={onWheelSnap}
  className="
    h-64 md:h-72 
    overflow-hidden md:overflow-y-auto 
    pr-2 snap-y snap-mandatory
    rounded-2xl bg-white/70 backdrop-blur border border-orange-300
    shadow-[0_10px_30px_rgba(0,0,0,0.06)] scroll-smooth
    transition-all duration-500
  
    
  "
  style={{ scrollbarWidth: "none", overscrollBehavior: "contain" }}
>

              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  data-bullet-card="true"
                  data-index={i}
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="snap-start min-h-[16rem] px-8 py-6 flex items-center justify-center gap-6 text-left relative"
                >
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center shadow-md">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                  </div>

                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                    {b.text}
                  </h4>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 justify-center">
              {bullets.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to item ${i + 1}`}
                  onClick={() => {
                    const box = scrollRef.current;
                    const cardHeight = box.clientHeight;
                    box.scrollTo({ top: i * cardHeight, behavior: "smooth" });
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    active === i ? "bg-orange-500 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeCombined;


