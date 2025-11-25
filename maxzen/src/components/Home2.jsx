import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import heroImg from "../assests/hero.gif";
import person from "../assests/person.gif";
import team from "../assests/hc.jpg";
import { useNavigate } from "react-router-dom";

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
    "Web Designing": "/serviceswd",
    "SEO Optimization": "/services4",
    "Web Development": "/services3",
    "App Development": "/services8",
    "Social Media Marketing": "/services5",
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
      <section className="relative py-16 md:py-20 px-6 md:px-32 overflow-hidden">
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
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <img src={team} alt="team" className="w-10 h-10 rounded-full" />
              <p className="font-semibold text-[#d73b3e] text-lg">
                9.50K+{" "}
                <span className="text-gray-600 font-normal text-sm">
                  Happy Clients
                </span>
              </p>
            </div>

            <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Maxzen.Tech empowers businesses with innovative, measurable
              digital growth strategies — from building strong online presence
              to achieving real conversions.
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
              className="w-[260px] md:w-[350px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] rounded-xl"
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
                <text fontSize="7" fontWeight="500">
                  <textPath href="#circlePath">• LEARN ABOUT US • EXPLORE MORE • SCROLL DOWN •</textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/services1")}
              className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white text-sm font-semibold shadow-md cursor-pointer"
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
              <span className="text-orange-500 hover:text-gray-600">Maxzen.tech</span> for Digital Marketing in Hyderabad?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-left">
              At Maxzen.tech, we don’t just run ads we create digital experiences that drive results...
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
    hover:shadow-[0_0_45px_-8px_rgba(255,140,40,0.55)]
    relative
    hover:bg-gradient-to-br hover:from-[#fff2e5] hover:via-[#ffe0cc] hover:to-[#ffd1b3]
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


// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";
// import heroImg from "../assests/hero.gif";
// import person from "../assests/person.gif";
// import team from "../assests/hc.jpg";
// import { useNavigate } from "react-router-dom";
// import { FaBullhorn, FaChartLine, FaSearchDollar, FaGlobeAsia } from "react-icons/fa";

// import Img1 from "../assests/img3.jpeg";
// import Img2 from "../assests/img4.jpeg";
// import Img3 from "../assests/img5.jpeg";
// import Img4 from "../assests/img6.jpeg";
// import Img5 from "../assests/img7.jpeg";
// import Img6 from "../assests/img8.jpeg";

// import webtechLogo from "../assests/img11.png";
// import busesLogo from "../assests/img9.jpg";
// import swacchLogo from "../assests/img10.jpg";
// import partner1 from "../assests/img13.jpg";
// import partner2 from "../assests/img12.jpg";
// import partner3 from "../assests/logoo8.jpg";

// const bullets = [
//   { text: "Customized Strategies – Every campaign is designed after understanding your audience, competition, and business goals." },
//   { text: "Proven Results – We focus on improving your traffic, conversion rates, and overall online authority." },
//   { text: "Transparent Reporting – Get clear, detailed reports so you always know how your campaigns are performing." },
//   { text: "Dedicated Support – Our team is always available to guide, update, and optimize your marketing efforts." },
// ];

// const images = [Img1, Img2, Img3, Img4, Img5, Img6];

// const HomePageAll = () => {

//   const navigate = useNavigate();
//   const serviceRoutes = {
//     "Web Designing": "/serviceswd",
//     "SEO Optimization": "/services4",
//     "Web Development": "/services3",
//     "App Development": "/services8",
//     "Social Media Marketing": "/services5",
//     "Software Development": "/services9",
//     "Cloud Computing": "/services7",
//   };

//   const scrollRef = useRef(null);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({ top: 0, behavior: "auto" });
//     }
//   }, []);

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const io = new IntersectionObserver(
//       (entries) => {
//         const mv = entries.slice().sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
//         if (mv?.isIntersecting) {
//           const idx = Number(mv.target.getAttribute("data-index"));
//           if (!Number.isNaN(idx)) setActive(idx);
//         }
//       },
//       { root: el, threshold: [0.25, 0.5, 0.75, 0.99] }
//     );

//     const cards = el.querySelectorAll("[data-bullet-card='true']");
//     cards.forEach((c) => io.observe(c));
//     return () => io.disconnect();
//   }, []);

//   let isScrolling = false;
//   let scrollTimeout;

//   const onWheelSnap = (e) => {
//     e.preventDefault();
//     if (isScrolling) return;
//     isScrolling = true;

//     const box = scrollRef.current;
//     const H = box.clientHeight;
//     const current = Math.round(box.scrollTop / H);
//     const nextIndex = e.deltaY > 0 ? current + 1 : current - 1;

//     box.scrollTo({ top: nextIndex * H, behavior: "smooth" });

//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => (isScrolling = false), 900);
//   };

//   const logos = [
//     { src: webtechLogo, alt: "Web Technologies" },
//     { src: busesLogo, alt: "M.R. Buses" },
//     { src: swacchLogo, alt: "Swacch" },
//     { src: partner1, alt: "Car Buddy" },
//     { src: partner2, alt: "Swetha Cars and Travels" },
//     { src: partner3, alt: "SkyReach" },
//   ];

//   return (
//     <div
//       className="text-gray-800 overflow-hidden relative font-inter"
//       style={{
//         backgroundColor: "#f0f2d5",
//         backgroundImage:
//           "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
//         backgroundSize: "60px 60px",
//       }}
//     >

//       {/* ======================================================
//             1️⃣ HOME 1 SECTION
//       ====================================================== */}
//       <section className="relative py-16 md:py-24 px-6 md:px-20 overflow-hidden">
//         <div className="flex flex-col md:flex-row items-start justify-between gap-16 relative z-10">

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="flex-1 flex justify-center md:justify-start relative"
//           >
//             <motion.img
//               src={heroImg}
//               alt="Hero"
//               className="w-[300px] md:w-[350px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] rounded-xl"
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <div className="absolute -z-10 top-10 left-5 w-80 h-80 bg-gradient-to-br from-[#d73b3e]/20 to-transparent rounded-full blur-3xl"></div>
//           </motion.div>

//           <div className="flex-1 md:pl-12 text-center md:text-left relative">
//             <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ duration: 1 }} className="h-1 bg-[#d73b3e] rounded-full mb-6 mx-auto md:mx-0"></motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-3xl md:text-5xl font-extrabold leading-tight text-[#1a1a1a]"
//             >
//               Digital Marketing Services in{" "}
//               <span className="bg-gradient-to-r from-[#d73b3e] to-[#f57c00] bg-clip-text text-transparent">
//                 Hyderabad
//               </span>
//               <br />
//               <span className="text-[#d73b3e] font-semibold">Grow Your Business with Maxzen.Tech</span>
//             </motion.h1>

//             <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
//               We craft data-driven digital experiences that help your brand stand out and connect with the right audience…
//             </p>

//             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="mt-10 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100">

//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Finest Solutions</h2>

//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   "Web Designing",
//                   "SEO Optimization",
//                   "Web Development",
//                   "App Development",
//                   "Social Media Marketing",
//                   "Software Development",
//                   "Cloud Computing",
//                 ].map((item, i) => (
//                   <motion.li
//                     key={i}
//                     onClick={() => navigate(serviceRoutes[item])}
//                     whileHover={{ scale: 1.05 }}
//                     className="bg-white px-5 py-2 text-sm font-medium rounded-full shadow-sm text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-[#d73b3e] hover:to-[#f57c00] hover:text-white transition-all duration-300 text-center md:text-left"
//                   >
//                     {item}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>
      

//       {/* ======================================================
//             2️⃣ HOME 2 SECTION
//       ====================================================== */}
//       <section className="relative py-16 px-6 md:px-20 text-center md:text-left">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

//           <div className="flex-1 relative">
//             <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
//               <img src={team} alt="team" className="w-10 h-10 rounded-full" />
//               <p className="font-semibold text-[#d73b3e] text-lg">
//                 9.50K+ <span className="text-gray-600 font-normal text-sm">Happy Clients</span>
//               </p>
//             </div>

//             <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
//               Maxzen.Tech empowers businesses with innovative, measurable growth…
//             </p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate("/contact")}
//               className="mt-8 px-8 py-3 bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
//             >
//               Get a Free Quote
//             </motion.button>
//           </div>

//           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex-1 flex justify-center relative">
//             <img src={person} className="w-[260px] md:w-[350px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] rounded-xl" />
//           </motion.div>
//         </div>

//         <div className="mt-24 flex flex-col items-center text-center relative">
//           <div className="relative w-32 h-32 flex items-center justify-center">
//             <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute w-full h-full flex items-center justify-center">
//               <svg viewBox="0 0 100 100" className="w-full h-full text-gray-600 fill-current">
//                 <defs>
//                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
//                 </defs>
//                 <text fontSize="7" fontWeight="500">
//                   <textPath href="#circlePath">• LEARN ABOUT US • EXPLORE MORE • SCROLL DOWN •</textPath>
//                 </text>
//               </svg>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.1 }} onClick={() => navigate("/services1")} className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#d73b3e] to-[#f57c00] text-white text-sm font-semibold shadow-md cursor-pointer">
//               Start
//             </motion.div>
//           </div>
//         </div>
//       </section>
//         <section className="bg-white py-20 px-6 md:px-20 overflow-hidden relative">
//         <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[400px] h-[400px] bg-orange-300/30 blur-[180px] rounded-full pointer-events-none"></div>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//           {/* LEFT TEXT */}
//           <motion.div
//             initial={{ opacity: 0, y: -80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left relative">
//               Why Choose{" "}
//               <span className="text-orange-500 hover:text-gray-600">Maxzen.tech</span> for Digital Marketing in Hyderabad?
//             </h2>

//             <p className="text-lg text-gray-700 leading-relaxed mb-4 text-left">
//               At Maxzen.tech, we don’t just run ads we create digital experiences that drive results...
//             </p>
//           </motion.div>

//           {/* RIGHT SCROLLABLE CARDS */}
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="mb-4 flex items-center justify-between">
//               <h3 className="text-2xl font-bold text-gray-900">
//                 Here’s why Hyderabad businesses prefer working with us:
//               </h3>
//             </div>

//             <div
//               ref={scrollRef}
//               onWheel={onWheelSnap}
//               className="
//                 h-64 md:h-72 overflow-y-auto pr-2 snap-y snap-mandatory
//                 rounded-2xl bg-white/70 backdrop-blur border border-orange-300
//                 shadow-[0_10px_30px_rgba(0,0,0,0.06)] scroll-smooth
//                 transition-all duration-500
//                 hover:shadow-[0_0_45px_-8px_rgba(255,140,40,0.55)]
//                 relative
//                 hover:bg-gradient-to-br hover:from-[#fff2e5] hover:via-[#ffe0cc] hover:to-[#ffd1b3]
//               "
//               style={{ scrollbarWidth: "none", overscrollBehavior: "contain" }}
//             >
//               {bullets.map((b, i) => (
//                 <motion.div
//                   key={i}
//                   data-bullet-card="true"
//                   data-index={i}
//                   initial={{ opacity: 0, scale: 0.98, y: 12 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.6 }}
//                   transition={{ duration: 0.45, ease: "easeOut" }}
//                   className="snap-start min-h-[16rem] px-8 py-6 flex items-center justify-center gap-6 text-left relative"
//                 >
//                   <div className="flex-shrink-0 flex items-center justify-center">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center shadow-md">
//                       <FaCheckCircle className="text-white text-xl" />
//                     </div>
//                   </div>

//                   <h4 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
//                     {b.text}
//                   </h4>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-4 flex items-center gap-2 justify-center">
//               {bullets.map((_, i) => (
//                 <button
//                   key={i}
//                   aria-label={`Go to item ${i + 1}`}
//                   onClick={() => {
//                     const box = scrollRef.current;
//                     const cardHeight = box.clientHeight;
//                     box.scrollTo({ top: i * cardHeight, behavior: "smooth" });
//                   }}
//                   className={`w-2.5 h-2.5 rounded-full transition-all ${
//                     active === i ? "bg-orange-500 w-6" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ======================================================
//             3️⃣ DIGITAL MARKETING SECTION
//       ====================================================== */}
//       <section className="relative overflow-hidden">
//         <div className="relative bg-gradient-to-b from-white via-orange-50/40 to-white py-24 overflow-hidden">
//           <motion.div animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />
//           <motion.div animate={{ x: [0, -20, 20, 0], y: [0, -30, 30, 0] }} transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }} className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

//           <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//             <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-16 left-24 text-orange-400 text-4xl">
//               <FaBullhorn />
//             </motion.div>

//             <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-1/3 right-24 text-blue-400 text-4xl">
//               <FaChartLine />
//             </motion.div>

//             <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute bottom-28 left-1/4 text-orange-300 text-4xl">
//               <FaSearchDollar />
//             </motion.div>

//             <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute bottom-20 right-1/3 text-blue-300 text-4xl">
//               <FaGlobeAsia />
//             </motion.div>
//           </div>

//           <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center z=10">
//             <motion.h1
//               initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
//               animate={{ scale: [1, 1.1, 1, 1.05, 1], rotate: [-5, 5, -3, 3, 0], opacity: 1 }}
//               transition={{ duration: 1.2, ease: "easeInOut" }}
//               className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
//             >
//               Looking for a{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Digital Marketing Service</span>{" "}
//               in Hyderabad?
//             </motion.h1>

//             <motion.p initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
//               At <span className="text-orange-600 font-semibold">Maxzen.tech</span>, we are a full-service digital marketing agency…
//             </motion.p>

//             <motion.p initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }} className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
//               We combine creativity with technology to deliver end-to-end marketing solutions…
//             </motion.p>

//             <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
//               Our Core Digital Marketing Services
//             </motion.h2>
//           </div>

//           <div className="relative overflow-hidden z-10">
//             <motion.div className="flex gap-8 px-10" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, repeatType: "mirror", duration: 25, ease: "linear" }}>
//               {[...images, ...images].map((img, index) => (
//                 <motion.div key={index} className="min-w-[22rem] h-[16rem] bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:scale-105 transition-all duration-500" whileHover={{ y: -6 }}>
//                   <img src={img} alt="" className="w-full h-full object-cover" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//             4️⃣ PARTNERS SECTION
//       ====================================================== */}
//       <section className="relative bg-gradient-to-br from-white via-orange-50/40 to-white py-24 px-6 md:px-20 overflow-hidden">

//         <motion.div animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 22 }} className="absolute top-20 left-20 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl opacity-40" />

//         <motion.div animate={{ x: [0, -30, 30, 0], y: [0, -40, 40, 0] }} transition={{ repeat: Infinity, duration: 28 }} className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-40" />

//         <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center relative z-10">
//           <p className="text-red-500 font-semibold uppercase text-sm mb-3 tracking-widest">Partners</p>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Who We Are Associated With</h2>
//           <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">We proudly collaborate with top industry leaders…</p>
//         </motion.div>

//         <div className="mt-16 relative z-10">
//           <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
//             {logos.map((logo, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.08, rotate: 1, boxShadow: "0 12px 30px rgba(255, 165, 0, 0.2)" }}
//                 transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                 className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-orange-100 w-80 h-80 flex flex-col items-center justify-center overflow-hidden group"
//               >
//                 <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
//                 <motion.img src={logo.src} alt={logo.alt} className="h-28 mb-4 group-hover:scale-110 transition-transform duration-700" />
//                 <p className="text-gray-800 font-semibold text-lg">{logo.alt}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="flex justify-center mt-14 space-x-3 relative z-10">
//           {["#1E3A8A", "#EF4444", "#F97316", "#2563EB"].map((color, i) => (
//             <motion.span key={i} animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 + i, delay: i * 0.3 }} style={{ backgroundColor: color }} className="w-3 h-3 rounded-full shadow-md" />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePageAll;
