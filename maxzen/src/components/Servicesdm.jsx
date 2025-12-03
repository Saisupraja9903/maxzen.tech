import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { FaFlag, FaRocket, FaChartLine } from "react-icons/fa";

import adsImg from "../assests/dms1.jpg";
import img1 from "../assests/dms2.jpeg";
import img2 from "../assests/dms3.jpg";
import img3 from "../assests/dms4.jpg";
import dms5 from "../assests/dms5.jpg";
import dms6 from "../assests/dms6.jpg";
import dms7 from "../assests/dms7.jpg";
import dms8 from "../assests/dms8.jpg";
import { useNavigate } from "react-router-dom";

// ------------------ Animations ------------------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// ------------------ TIMELINE DATA ------------------
const steps = [
  {
    year: "2025",
    title: "Plan",
    desc: "We dream big but plan smart, mapping your growth journey.",
    img: img1,
    color: "border-indigo-500",
    icon: <FaFlag className="text-indigo-600 text-2xl" />,
    extraContent: {
      title: "Key Activities",
      points: ["Market & Competitor Analysis", "Audience Research", "Goal Setting & KPI Definition", "Strategy & Roadmap Creation"]
    }
  },
  {
    year: "2025",
    title: "Execute",
    desc: "Turning ideas into impactful actions for measurable success.",
    img: img2,
    color: "border-yellow-400",
    icon: <FaRocket className="text-yellow-500 text-2xl" />,
    extraContent: {
      title: "Our Channels",
      points: ["Search Engine Optimization (SEO)", "Paid Advertising (PPC)", "Social Media Marketing", "Content Creation & Marketing"]
    }
  },
  {
    year: "2025",
    title: "Optimize",
    desc: "We analyze, refine, and enhance your performance continuously.",
    img: img3,
    color: "border-green-500",
    icon: <FaChartLine className="text-green-600 text-2xl" />,
    extraContent: {
      title: "Continuous Improvement",
      points: ["Performance Tracking & Analytics", "A/B Testing & Experimentation", "Budget & Bid Management", "Monthly Reporting & Insights"]
    }
  },
];

// ------------------ TIMELINE COMPONENT ------------------
const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / rect.height)
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section
      ref={containerRef}
      className="relative flex justify-center py-32 bg-white"
    >
      {/* 🌈 CENTER LINE (only between icons) */}
      <div className="absolute top-[0rem] bottom-[8rem] left-1/2 -translate-x-1/2 w-[4px] bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          ref={lineRef}
          className="absolute top-0 left-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* TIMELINE CONTENT */}
      <div className="relative w-full max-w-6xl px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-full my-4 relative`}
          >
            {/* Left Side */}
            {index % 2 === 0 ? (
              <Card step={step} index={index} />
            ) : (
              <ExtraContent step={step} index={index} />
            )}

            {/* Right Side */}
            {index % 2 === 0 ? (
              <ExtraContent step={step} index={index} />
            ) : (
              <Card step={step} index={index} />
            )}

            {/* ICON CIRCLE (exactly on line) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 
              w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-20"
            >
              {step.icon}
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

const Card = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className={`w-[45%] p-6 rounded-2xl shadow-xl bg-white border-l-8 ${step.color}`}
  >
    <img src={step.img} alt={step.title} className="rounded-xl mb-4 w-full h-56 object-cover" />
    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
    <p className="text-gray-600 mt-2">{step.desc}</p>
  </motion.div>
);

const ExtraContent = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? 120 : -120 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="w-[45%] p-6 rounded-2xl shadow-lg bg-gray-50 border-r-8 border-gray-300"
  >
    <h4 className="text-xl font-bold text-gray-700 mb-3">{step.extraContent.title}</h4>
    <ul className="space-y-2">
      {step.extraContent.points.map((point, i) => (
        <li key={i} className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

// ------------------ COUNTDOWN COMPONENT ------------------
// ------------------ COUNTDOWN COMPONENT ------------------
const Countdown = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime(); // <<< FIXED DATE

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  
  const navigate = useNavigate();
 
     useEffect(() => {
        window.scrollTo(0, 0);
      }, [])


  return (
    <section className="py-0 bg-white text-center px-6 md:px-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">
        Celebrating Our Journey – You Get the Gift! <br />
        <span className="text-purple-600">
          Special Anniversary Offers Just for You
        </span>
      </h2>

      {/* Timer Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center max-w-5xl mx-auto">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-200 to-gray-500 text-white rounded-xl py-10 shadow-lg"
          >
            <p className="text-5xl font-bold">{item.value}</p>
            <p className="mt-3 text-lg">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <p className="max-w-4xl mx-auto mt-10 text-lg leading-relaxed text-gray-700">
        At Maxzen Tech, we’re more than just a{" "}
        <strong>digital marketing agency</strong> — we’re your
        growth partner. With proven strategies in SEO, paid ads, social
        media marketing, and local SEO, we help startups and businesses
        generate real, measurable results. Whether you want more traffic,
        better leads, or stronger online visibility,{" "}
        <strong>Maxzen Tech</strong> delivers the expertise and dedication
        your brand deserves.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-4 mb-4">
        <button
  onClick={() => navigate("/services1")}
  className="px-8 py-3 bg-gray-600 hover:bg-blue-400 text-white rounded-xl shadow-md font-semibold "
>
  Services 
</button>

       <button
  onClick={() => navigate("/contact")}
  className="px-8 py-3 bg-gray-900 hover:bg-black text-white rounded-xl shadow-md font-semibold underline ml-1"
>
  Contact Us 
</button>

      </div>
    </section>
  );
};

// ------------------ MAIN PAGE ------------------
export default function DigitalMarketingNew() {
   const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden py-20 px-6 md:px-20 bg-gradient-to-b from-purple-40 to-white">
        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-200 blur-2xl opacity-40"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-300 blur-3xl opacity-40"
        />

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center text-[42px] md:text-[55px] font-extrabold text-purple-700"
        >
          Best Digital Marketing Agency
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center text-xl md:text-2xl mt-4 text-gray-600"
        >
          Lead Generation • Growth • Brand Visibility
        </motion.p>

        {/* <section className="relative overflow-hidden py-28 px-6 md:px-20 bg-gradient-to-br from-[#f0e9ff] via-[#fce8f3] to-[#ffe1e7] text-gray-900">
          Animated Floating Shapes */}
          <section className="relative overflow-hidden py-28 px-6 md:px-20  text-gray-900">
          {/* Animated Floating Shapes */}
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-10 left-20 w-48 h-48 bg-purple-300/40 rounded-full blur-3xl opacity-60"
          />
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="absolute bottom-10 right-20 w-56 h-56 bg-pink-300/40 rounded-full blur-3xl opacity-60"
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-14">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Accelerate Your Business Growth with{" "}
                <span className="text-purple-700">Maxzen.Tech</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                Maxzen.Tech is Hyderabad’s leading digital marketing agency —
                helping startups and enterprises dominate online with SEO, Ads,
                and Social Media strategies that deliver measurable results.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-7 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-md hover:bg-purple-800 transition"
                                    onClick={() => navigate("/contact")}

                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                   onClick={() => navigate("/services1")}
                  className="px-7 py-3 bg-white border border-purple-300 text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute -top-8 -left-8 w-[110%] h-[110%] bg-purple-200/50 rounded-[40px] rotate-3 blur-2xl" />
              <img
                src={adsImg}
                alt="Digital Marketing"
                className="relative rounded-[40px] shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* Decorative Wave Divider */}
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
        </section>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-4 bg-gradient-to-b from-white to-purple-50 px-6 md:px-20">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-center text-4xl md:text-5xl font-extrabold text-purple-700 mb-16"
        >
          Digital Marketing Services We Offer
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* 1 - SEO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition border-t-8 border-purple-500"
          >
            <img src={dms5} className="rounded-xl h-48 w-full object-cover" />
            <h3 className="text-2xl font-bold mt-4 text-purple-600">SEO</h3>
            <ul className="mt-3 space-y-2 text-gray-600 text-left">
              <li>• Long-term organic traffic</li>
              <li>• Improves ranking & visibility</li>
              <li>• Builds brand credibility</li>
              <li>• Reduces paid ads dependency</li>
            </ul>
          </motion.div>

          {/* 2 - Local SEO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition border-t-8 border-indigo-500"
          >
            <img src={dms6} className="rounded-xl h-48 w-full object-cover" />
            <h3 className="text-2xl font-bold mt-4 text-indigo-600">
              Local SEO
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600 text-left">
              <li>• Rank in “near me” searches</li>
              <li>• Boost store visits & calls</li>
              <li>• Build trust with local customers</li>
              <li>• Increases local conversions</li>
            </ul>
          </motion.div>

          {/* 3 - ADS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition border-t-8 border-yellow-500"
          >
            <img src={dms7} className="rounded-xl h-48 w-full object-cover" />
            <h3 className="text-2xl font-bold mt-4 text-yellow-600">Ads</h3>
            <ul className="mt-3 space-y-2 text-gray-600 text-left">
              <li>• High ROI Google Ads</li>
              <li>• Facebook & Instagram Ads</li>
              <li>• Budget-friendly & targeted</li>
              <li>• Instant lead generation</li>
            </ul>
          </motion.div>

          {/* 4 - Social Media */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition border-t-8 border-pink-500"
          >
            <img src={dms8} className="rounded-xl h-48 w-full object-cover" />
            <h3 className="text-2xl font-bold mt-4 text-pink-600">
              Social Media
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600 text-left">
              <li>• Strong brand presence</li>
              <li>• Engaging content creation</li>
              <li>• Strategy for your audience</li>
              <li>• Facebook, Instagram, LinkedIn</li>
            </ul>
          </motion.div>
        </div>
      </section>


      {/* ===== TIMELINE SECTION ===== */}
      <Timeline />
       {/* ===== COUNTDOWN SECTION ===== */}
      <Countdown />

      <Footer />
    </>
  );
}