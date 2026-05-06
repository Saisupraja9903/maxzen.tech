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
// import seo9 from "../assests/seo9.jpg";
import seoBg from "../assests/seobg.jpeg"; 
import heroImg from "../assests/logoo12.jpg";
import { useNavigate } from "react-router-dom";
// import seo10 from "../assests/seo10.jpg";
// import seo11 from "../assests/seo11.jpg";
// import seo12 from "../assests/seo12.jpg";
// import seo13 from "../assests/seo13.avif";
import Header from "./Header";
import Footer from "./Footer";
// import { AiOutlineGlobal } from "react-icons/ai";
// import { FcComboChart } from "react-icons/fc";
import { FaArrowUp,FaUser,FaBriefcase,FaTrophy} from "react-icons/fa";
// import { TbTargetArrow } from "react-icons/tb";
// import { BsRocketTakeoff } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BsCpu } from "react-icons/bs";




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
    points: [
      "Keyword research and optimization",
      "Content structure improvement",
      "Meta title and description optimization",
      "Internal linking strategy",
    ],
  },
  {
    title: "Off-Page SEO Optimization",
    image: offPage,
    points: [
      "High quality backlink building",
      "Business listings and brand authority",
      "Social bookmarking and submissions",
      "Influencer outreach and PR",
    ],
  },
  {
    title: "SEO Audit",
    image: audit,
    points: [
      "Complete website SEO analysis",
      "Technical issue identification",
      "Keyword performance review",
      "Competitor benchmarking insights",
    ],
  },
  {
    title: "Technical SEO",
    image: technical,
    points: [
      "Website speed optimization",
      "Mobile friendly design",
      "Fix crawl & indexing issues (GSC)",
      "Structured data & schema setup",
    ],
  },
  {
    title: "Local SEO",
    image: localSeo,
    points: [
      "Google Business Profile optimization",
      "Local keyword targeting (Kukatpally, KPHB)",
      "Improving map rankings",
      "Local citations and reviews management",
    ],
  },
  {
    title: "Competitor Analysis",
    image: competitor,
    points: [
      "Competitor keyword research",
      "Backlink profile analysis",
      "Content gap identification",
      "Strategy comparison insights",
    ],
  },
  {
    title: "Web Analytics",
    image: analytics,
    points: [
      "Google Analytics setup",
      "User behavior tracking",
      "Conversion tracking setup",
      "Performance reporting dashboards",
    ],
  },
  {
    title: "Content Creation",
    image: content,
    points: [
      "SEO optimized blog writing",
      "Landing page content creation",
      "Keyword focused articles",
      "Content strategy planning",
    ],
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
<section className="py-20 px-6 md:px-16 bg-white text-center">

  {/* Heading */}
  <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
    Best SEO Agency in Hyderabad{" "}
    <span
  onClick={() => navigate("/#home2")}
  className="text-yellow-400 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
  </h1>

  {/* Paragraph */}
  <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
<p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
  <b>Search Engine Optimization (SEO)</b> is the process of improving your website’s visibility on search engines like Google so that your business appears when customers search for your services. A strong SEO strategy helps increase traffic, generate leads, and build long-term growth for any business.{" "}
  
  <span
    onClick={() => navigate("/#home2")}
    className="text-black font-semibold cursor-pointer hover:underline"
  >
    Maxzen.tech
  </span>{" "}
  
  is a leading SEO agency in Hyderabad helping businesses rank higher, generate quality leads, and grow organically with proven strategies. Our team of experienced SEO analysts and SEO specialists delivers customized solutions for all industries.
</p>  </p>

  {/* Optional Image Below */}
  {/* <div className="mt-10 flex justify-center">
    <img
      src={heroImg}
      alt="SEO"
      className="w-full max-w-3xl rounded-2xl shadow-lg"
    />
  </div> */}

</section>


{/* ---------- MAIN HERO (Image + Text) ---------- */}
      <section className="py-20 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 -mt-24">
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
           Why Choose {" "}<span
  onClick={() => navigate("/#home2")}
  className="text-gray-900 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span> Top SEO Company in Hyderabad{" "}
            {/* <span className="text-[#a855f7]">Social Media Marketing</span> */}
          </h2>
        <div className="mt-6 max-w-2xl">
  
  {/* Intro Paragraph */}
  <p className="text-gray-600 text-lg leading-relaxed mb-4">
   <span
  onClick={() => navigate("/#home2")}
  className="text-gray-900 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span> stands out as a trusted SEO company in Hyderabad because of our results-driven approach and commitment to business growth.
  </p>

  {/* Bullet Points */}
  <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
    <li>Experienced SEO analysts and specialists</li>
    <li>Data-driven SEO strategies</li>
    <li>Transparent reporting and performance tracking</li>
    <li>Focus on ROI and lead generation</li>
    <li>Ethical white-hat SEO techniques</li>
  </ul>

  {/* Closing Line */}
  <p className="mt-4 text-gray-600 text-lg leading-relaxed">
    We focus on long-term rankings and sustainable growth for your business.
  </p>

</div>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#e63946] text-center mb-6">
  SEO Services in Hyderabad by {" "}<span
  onClick={() => navigate("/#home2")}
  className="text-blue-400 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
</h2>

<p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
  <span
    onClick={() => navigate("/#home2")}
    className="text-gray-900 cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>{" "}
  provides complete <b> SEO services in Hyderabad </b> designed to improve rankings and visibility.
</p>
            

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

      {/* ---------- SERVICES SECTION (Horizontal Scroll) ---------- */}
      <section className="py-24 bg-gradient-to-b from-[#fff8f4] via-[#fffdfb] to-[#fff3e8]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-red-500">
            Our <span className="text-blue-400">SEO Services</span>
          </h2>
          {/* <p className="text-gray-600 mt-3">Scroll vertically to move left/right</p> */}
        </div>

        <div
          ref={servicesRef}
          className="flex gap-6 sm:gap-8 md:gap-12 overflow-x-auto overflow-y-hidden px-2 sm:px-6 md:px-10 scrollbar-hide w-full snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-xl border overflow-hidden snap-center"
            >
              <div className="relative h-40 sm:h-48 md:h-52">
                <img src={service.image} className="w-full h-full object-cover object-center h-auto" alt={service.title} />
              </div>

             <div className="p-4 sm:p-6 flex flex-col h-full justify-between">
  <div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>

    {/* Points OR Description */}
    {service.points ? (
      <ul className="flex flex-wrap gap-1 sm:gap-2 mt-2">
        {service.points.map((point, i) => (
          <li
            key={i}
            className="bg-gray-100 text-gray-700 text-xs px-2 sm:px-3 py-1 rounded-full"
          >
            {point}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600 text-xs sm:text-sm">{service.desc}</p>
    )}
  </div>
  {/* Always bottom aligned */}
  {/* <button
    onClick={() => navigate("/contact")}
    className="mt-6 text-red-500 font-semibold"
  >
    Contact Us →
  </button> */}

</div>
            </motion.div>
          ))}
        </div>
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
        
  At 
  {" "}
  <span
    onClick={() => navigate("/#home2")}
    className= " text-gray-900 cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>
, we don’t just offer SEO — we create strategies that turn clicks into real business growth. Our strength lies in understanding the Hyderabad market and combining it with proven global SEO practices.
      </p>
      <p className="mb-4">
        When it comes to SEO services in Hyderabad, many agencies promise results, but few actually deliver. While other SEO companies often rely on generic strategies, Maxzen Tech stands out as a results-driven SEO agency.
      </p>
      <p className="mb-4">
        Unlike agencies that focus only on traffic numbers, we focus on real business growth — higher rankings, quality leads, and measurable ROI. Many providers stop at keyword placement, but we go beyond with a full-stack SEO approach, including on-page, off-page, technical SEO, and local SEO optimization.
      </p>
      <p>
        That’s why businesses choose{" "}
        <span
  onClick={() => navigate("/#home2")}
  className="font-semibold text-gray-900 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span> as the <b><i>best SEO agency in Hyderabad </i></b>— because we don’t just create strategies, we deliver outcomes that help your business grow.
      </p>
    </motion.div>
  </div>

  {/* Features */}
  

  {/* Background Decor */}
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-[#fca311]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#e63946]/10 rounded-full blur-3xl"></div>
</section>


{/* ---------- NEW SEO CONTENT SECTION (Redesigned) ---------- */}
<section className="py-24 px-4 md:px-10 bg-gradient-to-br from-[#f8fafc] to-[#fff]">
  {/* ========= IMPORTANCE OF SEO ========= */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-24">
    <div className="md:w-1/2 bg-gray-300/10 border-2 border-orange-400 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-black mb-6  text-gray-900 tracking-tight drop-shadow-lg">Importance of SEO for Every Business</h2>
      <p className="text-lg leading-relaxed mb-8 text-gray-700 opacity-90 text-left">SEO is essential for every business and industry including local services, ecommerce, education, healthcare, and IT companies.</p>
      <ul className="space-y-4 text-gray-700 text-base opacity-90">
        {["Increase Website Traffic", "Attract Target Audience", "Build Brand Trust", "Generate Consistent Leads"].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-white"></span>
            <span className="font-semibold">{item}</span>
          </li>
        ))}
      </ul>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
    </div>
    <div className="md:w-1/2 flex flex-col items-center justify-center">
      <div className="bg-white border-2 border-[#e63946] rounded-2xl p-8 shadow-lg w-full">
        <p className="text-gray-700 text-lg text-left">SEO helps to increase website traffic attract the right audience build brand trust and generate consistent leads. Without SEO your website may not appear in search results when customers are actively looking for your services..</p>
      </div>
    </div>
  </div>

  {/* ========= HOW SEO WORKS ========= */}
  <div className="max-w-6xl mx-auto mb-24">
<h2 className="text-4xl font-extrabold text-center text-[#1d3557] mb-6 tracking-tight">
  How SEO Works
</h2>

<p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
  SEO works by optimizing your website so search engines understand your content and rank it higher.
</p>    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    {[
  { icon: <FiSearch />, text: "User searches (SEO agency in Hyderabad)" },
  { icon: <BsCpu />, text: "Search engines analyze websites" },
  { icon: <FaArrowUp />, text: "Optimized sites rank higher" },
  { icon: <FaUser />, text: "Users visit website" },
  { icon: <FaBriefcase />, text: "Traffic converts to leads" },
].map((step, i) => (
        <div key={i} className="flex flex-col items-center relative">
<div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#e63946] to-[#ffb4a2] text-white text-3xl mb-4 shadow-xl border-4 border-white">
  <span className="text-3xl">{step.icon}</span>
</div>
          <div className="bg-white px-4 py-3 rounded-xl shadow text-gray-700 text-sm text-center w-44">{step.text}</div>
          {i !== 4 && (
            <div className="hidden md:block absolute top-1/2 right-[-32px] w-16 h-1 bg-gradient-to-r from-[#e63946] to-[#ffb4a2] opacity-60"></div>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* ========= GROWTH FUNNEL ========= */}
  <div className="max-w-6xl mx-auto mb-24">
    <h2 className="text-4xl font-extrabold text-left md:text-center text-[#ff6b6b] mb-10 tracking-tight">How Maxzen.tech Drives Growth</h2>
    <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
When your website ranks higher more people discover your business and trust your brand.
</p> 
    <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
      {[
        { label: "Higher Rankings", color: "bg-[#f1faee] border-[#e63946]" },
        { label: "More Website Traffic", color: "bg-[#f8edeb] border-[#ffb4a2]" },
        { label: "Quality Leads", color: "bg-[#e9ecef] border-[#457b9d]" },
        { label: "Revenue Growth", color: "bg-[#f7f7f7] border-[#ff6b6b]" },
      ].map((item, i) => (
        <div key={i} className={`flex-1 border-2 ${item.color} rounded-3xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300`}>
          <span className="text-2xl font-bold mb-2 text-[#1d3557]">{item.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-8 bg-gradient-to-r from-[#e63946]/10 to-[#ffb4a2]/10 rounded-2xl p-6 shadow-inner">
      <p className="text-gray-700 text-center text-lg">Maxzen.tech focuses on building a strong online presence that delivers long-term results.</p>
    </div>
  </div>

  {/* ========= INDUSTRIES ========= */}
  <div className="max-w-6xl mx-auto mb-24">
    <h2 className="text-4xl font-extrabold text-center text-[#457b9d] mb-8 mt-10 tracking-tight">Industries We Serve</h2>
 <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">

<b>Maxzen.tech provides SEO solutions for multiple industries including.</b>
</p> 
    <div className="flex flex-wrap gap-6 justify-center">
      {[
        "Real Estate",
        "Healthcare",
        "Education & Training",
        "Ecommerce",
        "IT & Software",
        "Local Services",
      ].map((industry, i) => (
        <div key={i} className="w-64 h-40 bg-gradient-to-br from-[#f1faee] to-[#f8edeb] border-2 border-[#e63946]/30 rounded-2xl shadow-md flex items-center justify-center hover:bg-[#e63946]/10 hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-extrabold text-[#1d3557]">{industry}</h3>
        </div>
      ))}
    </div>
  </div>

  {/* ========= TRUST SECTION ========= */}
  <div className="max-w-5xl mx-auto mb-24">
    <div className="bg-gray-300/10 border-2 border-[#e63946]rounded-3xl p-12 shadow-2xl text-black relative overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Trusted SEO Experts at Maxzen.tech</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">We follow experience, expertise, authority, and <b>trust-based SEO strategies</b> . Our team continuously analyzes performance, updates strategies, and ensures your website stays competitive.</p>
          <p className="text-base opacity-80">We use ethical SEO practices to deliver consistent and long-lasting rankings.</p>
        </div>
        <div className="md:w-1/3 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#e63946] to-[#ffb4a2] flex items-center justify-center shadow-lg border-4 border-white">
  <FaTrophy className="text-white text-5xl" />
</div>
        </div>
      </div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  </div>

  {/* ========= CTA ========= */}
  <div className="max-w-4xl mx-auto mb-24">
    <div className="bg-gradient-to-br bg-gray-400 text-black p-14 rounded-3xl shadow-2xl flex flex-col items-center">
      <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Get Started with Maxzen.tech SEO Services</h2>
      <p className="mb-8 text-lg text-center">  <span
    onClick={() => navigate("/#home2")}
    className="text-gray-900 font-semibold cursor-pointer hover:underline"
  >
    Maxzen.tech
  </span>{" "} helps you rank higher increase traffic and generate quality leads for your business..</p>
      <div className="flex flex-wrap justify-center gap-6">
<a
  href="https://wa.me/919059991807"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-[#e63946] px-8 py-3 rounded-full font-bold shadow hover:bg-[#ffe5d9] transition inline-block"
>
  Free SEO Audit
</a><button
  onClick={() => navigate("/contact")}
  className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-orange-200 hover:text-[#e63946] transition"
>
  Book Consultation
</button>      </div>
    </div>
  </div>

  {/* ========= FAQ ========= */}
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-[#e63946] mb-12 tracking-tight">FAQs – SEO Services in Hyderabad</h2>
    <div className="grid md:grid-cols-2 gap-10">
      {[
        {
          q: "What is the cost of SEO services in Hyderabad?",
          a: "SEO pricing depends on competition keywords and business goals. We provide customized SEO plans.",
        },
        {
          q: "How long does SEO take to show results?",
          a: "SEO usually takes three to six months to see noticeable improvements.",
        },
        {
          q: "Why choose Maxzen.tech for SEO ?",
          a: "Maxzen.tech provides result driven SEO strategies transparent reporting and long term growth..",
        },
        {
          q: "Do you provide local SEO services?",
          a: "Yes we help businesses rank in Hyderabad Kukatpally and nearby areas.",
        },
        {
          q: "Is SEO important for small businesses?",
          a: "Yes SEO helps small businesses attract customers generate leads and grow organically.",
        },
      ].map((faq, i) => (
        <div key={i} className="bg-gradient-to-br from-[#f8edeb] to-[#f1faee] border-l-4 border-[#e63946] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="font-bold text-[#1d3557] mb-2 text-lg">{faq.q}</h3>
          <p className="text-gray-700 text-base">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>

</section>
<Footer/></>

      
    </>

  );
};

export default SeoServices;