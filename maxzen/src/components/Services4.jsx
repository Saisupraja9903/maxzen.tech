import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ---------- Image Imports ----------
import onPage from "../assests/seo1.jpeg";
import offPage from "../assests/seo2.webp";
import audit from "../assests/seo3.webp";
import technical from "../assests/seo4.avif";
import localSeo from "../assests/seo5.jpg";
import competitor from "../assests/seo6.webp";
import analytics from "../assests/seo7.png";
import content from "../assests/seo8.jpg";
import seo9 from "../assests/seo9.jpg";
import seoBg from "../assests/seobg.jpeg"; // ✅ Background image inside curved card
import heroImg from "../assests/logoo12.jpg";
import { useNavigate } from "react-router-dom";
import seo10 from "../assests/seo10.jpg";
import seo11 from "../assests/seo11.jpg";
import seo12 from "../assests/seo12.jpg";
import seo13 from "../assests/seo13.avif";
import Header from "./Header";
import Footer from "./Footer";

const SeoServices = () => {
  // ---------- Bubble Section ----------
  const circles = [
    {
      title: "What is SEO?",
      desc: "SEO improves your website’s visibility on Google and helps attract relevant visitors to your site.",
      size: "lg",
    },
    {
      title: "Fast & Mobile-Friendly",
      desc: "SEO ensures your website loads quickly and adapts beautifully to any device.",
      size: "md",
    },
    {
      title: "High-Quality Content",
      desc: "Content is the heart of SEO — useful, engaging, and optimized for users and search engines.",
      size: "sm",
    },
    {
      title: "Credibility with Backlinks",
      desc: "Earn trust by gaining quality backlinks from reputable websites in your industry.",
      size: "md",
    },
    {
      title: "Helping Search Engines Understand",
      desc: "Make your content structure clear so search engines know exactly what to show users.",
      size: "sm",
    },
  ];

  // 🔹 Increased bubble sizes slightly
  const sizeMap = {
    sm: "w-60 h-60",
    md: "w-72 h-72",
    lg: "w-96 h-96",
  };

  // ---------- Services ----------
  const services = [
    {
      title: "On-Page SEO Optimization",
      image: onPage,
      desc: "Enhance your site structure, meta tags, and content for top rankings.",
    },
    {
      title: "Off-Page SEO Optimization",
      image: offPage,
      desc: "Build authority through backlinks and external reputation.",
    },
    {
      title: "SEO Audit",
      image: audit,
      desc: "Get an in-depth look at your site’s SEO performance and technical issues.",
    },
    {
      title: "Technical SEO",
      image: technical,
      desc: "Improve crawlability, site speed, and indexing for better results.",
    },
    {
      title: "Local SEO",
      image: localSeo,
      desc: "Optimize your presence for local searches and Google Maps visibility.",
    },
    {
      title: "Competitor Analysis",
      image: competitor,
      desc: "Understand your competitors’ strengths and craft better strategies.",
    },
    {
      title: "Web Analytics",
      image: analytics,
      desc: "Measure, track, and analyze visitor behavior for smarter marketing.",
    },
    {
      title: "Content Creation",
      image: content,
      desc: "Create SEO-optimized content that drives engagement and conversions.",
    },
  ];

  // ---------- Horizontal Scroll Setup ----------
  const servicesRef = useRef(null);
  const [offset, setOffset] = useState(380);
  const CARD_WIDTH = 420;
  const GAP = 40;
  const TOTAL_WIDTH = services.length * (CARD_WIDTH + GAP);
  const MAX_OFFSET = 340;
  const MIN_OFFSET = -(TOTAL_WIDTH - window.innerWidth + 340);

  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const delta = e.deltaY;
      let shouldBlock = false;

      if (
        (delta > 0 && offset > MIN_OFFSET) ||
        (delta < 0 && offset < MAX_OFFSET)
      ) {
        e.preventDefault();
        shouldBlock = true;
        setOffset((prev) => {
          const newOffset = prev - delta * 0.8;
          return Math.min(MAX_OFFSET, Math.max(MIN_OFFSET, newOffset));
        });
      }

      if (!shouldBlock) return true;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [offset, MAX_OFFSET, MIN_OFFSET, TOTAL_WIDTH]);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
   const navigate = useNavigate();

  return (
    <><Header/>
    
    <>
    {/* ---------- TOP HERO SECTION ---------- */}
      <section className="bg-blue-300 text-white py-6 px-8 flex items-center justify-between relative overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          SEO Services in Hyderabad - <span className="text-white">Maxzen.Tech</span>
        </h1>

        <button 
        onClick={() => navigate("/contact")}
        className="border-2 border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#e63946] transition-all duration-300 text-sm font-semibold flex items-center gap-2">
          <span>＋</span> REQUEST A QUOTE
        </button>

        {/* Decorative network lines */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dots.png')] opacity-10"></div>
      </section>

      {/* ---------- MAIN HERO (Image + Text) ---------- */}
      <section className="py-20 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={heroImg}
          alt="SEO Illustration"
          className="w-full md:w-1/2 max-w-lg rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Grow Your Business with{" "}
            <span className="text-[#a855f7]">Social Media Marketing</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Boost your brand visibility and attract potential customers with our
            expert SEO and social media strategies that deliver measurable results.
          </p>
        </motion.div>
      </section>

      {/* ---------- BUBBLE SECTION (IMAGE ONLY INSIDE CARD) ---------- */}
      <section className="min-h-screen flex items-center justify-center bg-[#fffefc] px- relative">
        {/* White background same as services */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-[2] max-w-7xl w-full bg-cover bg-center bg-no-repeat
                     border border-white/30 shadow-[0_8px_50px_rgba(0,0,0,0.15)]
                     rounded-[3rem] p-10 md:p-16 backdrop-blur-[6px]"
          style={{
            backgroundImage: `url(${seoBg})`,
          }}
        >
          {/* Soft translucent overlay inside the card */}
          <div className="absolute inset-0 bg-white/60 rounded-[3rem] z-[1]" />

          {/* Card Content */}
          <div className="relative z-[2]">
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#e63946] text-center mb-16">
              What is <span className="text-white italic">SEO?</span>
            </h2>

            {/* Bubble Layout */}
            {/* 🔹 Increased gap and added motion animation */}
            <div className="flex flex-wrap justify-center items-center gap-14">
              {circles.map((circle, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -15, 0], // floating effect
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                    boxShadow: "0px 20px 50px rgba(252,163,17,0.35)",
                  }}
                  className={`flex flex-col items-center justify-center text-center rounded-full
                    bg-gradient-to-br from-[#fffaf2]/80 to-[#fff3e1]/80
                    text-[#222] font-medium leading-relaxed
                    shadow-[0_0_40px_rgba(252,163,17,0.1)]
                    ${sizeMap[circle.size]} p-6`}
                >
                  <h3 className="text-xl font-semibold text-[#e63946] italic mb-2">
                    {circle.title}
                  </h3>
                  <p className="text-sm text-gray-700 px-2">{circle.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- SERVICE CARDS SECTION ---------- */}
      <section
        ref={servicesRef}
        className="min-h-screen bg-gradient-to-b from-[#fff8f4] via-[#fffdfb] to-[#fff3e8] flex flex-col justify-center items-center overflow-hidden"
      >
        <div className="text-center mb-10 select-none">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#e63946]">
            Our <span className="text-blue-300">SEO Services</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Scroll vertically here to move cards left/right
          </p>
        </div>

        <motion.div
          animate={{ x: offset }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="flex gap-10 pl-[3200px] pr-[20px] items-stretch"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="min-w-[360px] bg-white rounded-2xl border border-gray-100
                         shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                         hover:shadow-[0_14px_40px_rgba(0,0,0,0.15)]
                         transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#fca311] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <button 
                   onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#e63946] hover:text-[#fca311] transition-colors">
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    SEO
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* ---------- WHY CHOOSE US SECTION (with intro content + 5 features) ---------- */}
<section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#fff8f4] via-[#fffdfb] to-[#fff3e8] relative overflow-hidden">
  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-extrabold text-[#e63946] mb-8">
      Why Choose Us for{" "}
      <span className="text-blue-300 italic">SEO Success in Hyderabad</span>
    </h2>

    {/* Elegant Intro Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md border border-[#f8e8d8]/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] rounded-3xl p-8 md:p-12 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed"
    >
      <p className="mb-4">
        <span className="font-semibold text-[#e63946]">At Maxzen.Tech</span>, we don’t just offer SEO — we create strategies that turn clicks into real business growth. Our strength lies in understanding the Hyderabad market and combining it with proven global SEO practices.
      </p>
      <p className="mb-4">
        When it comes to SEO services in Hyderabad, many agencies promise results, but few actually deliver. While other SEO companies often rely on generic strategies, Maxzen Tech stands out as a results-driven SEO agency.
      </p>
      <p className="mb-4">
        Unlike agencies that focus only on traffic numbers, we focus on real business growth — higher rankings, quality leads, and measurable ROI. Many providers stop at keyword placement, but we go beyond with a full-stack SEO approach, including on-page, off-page, technical SEO, and local SEO optimization.
      </p>
      <p>
        That’s why businesses choose{" "}
        <span className="font-semibold text-[#e63946]">Maxzen Tech</span> as the best SEO agency in Hyderabad — because we don’t just create strategies, we deliver outcomes that help your business grow.
      </p>
    </motion.div>
  </div>

  {/* Features */}
  <div className="max-w-6xl mx-auto flex flex-col gap-28 mt-20">
    {/* Feature 1 */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative md:w-1/2 w-full h-[320px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] group">
        <img
          src={seo9}
           alt="SEO Strategy"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <div className="text-5xl mb-4 text-[#fca311]">🌐</div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#e63946] mb-4">
          Local Expertise with Global Vision
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We understand Hyderabad’s market behavior and combine it with international SEO practices to deliver the perfect strategy for your business.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
      <div className="relative md:w-1/2 w-full h-[320px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] group">
        <img
          src={seo10}
          alt="SEO Growth"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <div className="text-5xl mb-4 text-[#fca311]">📈</div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#e63946] mb-4">
          ROI-Focused Strategies
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our SEO campaigns are designed for performance. From keyword targeting to content optimization — every step drives measurable ROI.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative md:w-1/2 w-full h-[320px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] group">
        <img
          src={seo11}
          alt="Transparent SEO"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <div className="text-5xl mb-4 text-[#fca311]">🤝</div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#e63946] mb-4">
          Transparent & Ethical SEO
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          No black-hat tricks, no hidden metrics — just honest, transparent results. You’ll always know what’s happening with your SEO growth.
        </p>
      </div>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
      <div className="relative md:w-1/2 w-full h-[320px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] group">
        <img
          src={seo12}
          alt="Tailored SEO"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <div className="text-5xl mb-4 text-[#fca311]">🎯</div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#e63946] mb-4">
          Tailored Solutions
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Every business is unique, so we design custom SEO strategies that perfectly align with your goals, ensuring measurable outcomes that matter.
        </p>
      </div>
    </div>

    {/* Feature 5 */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="relative md:w-1/2 w-full h-[320px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] group">
        <img
          src={seo13}
          alt="Long Term Growth"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left">
        <div className="text-5xl mb-4 text-[#fca311]">🚀</div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#e63946] mb-4">
          Long-Term Growth
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We focus on building sustainable, white-hat SEO strategies that ensure lasting growth and keep your brand ahead of competitors.
        </p>
      </div>
    </div>
  </div>

  {/* Outro */}
  <div className="max-w-4xl mx-auto text-center mt-28">
    <p className="text-gray-700 text-lg leading-relaxed">
      Choose <span className="font-semibold text-[#e63946]">Maxzen Tech</span> — 
      where innovation meets expertise, creating SEO strategies that don’t just rank, but truly deliver business growth and visibility.
    </p>
  </div>

  {/* Background Decor */}
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-[#fca311]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#e63946]/10 rounded-full blur-3xl"></div>
</section>
<Footer/></>

      {/* Spacer */}
      {/* <div className="h-[60vh] bg-[#fff3e8]" /> */}
    </>

  );
};

export default SeoServices;