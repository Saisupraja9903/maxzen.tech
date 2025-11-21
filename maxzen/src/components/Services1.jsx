import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useAnimation ,animate} from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";

// ---------- Image Imports ----------
import s1 from "../assests/DM3.jpg";
import s2 from "../assests/logoo11.jpg";
import s3 from "../assests/logoo12.jpg";
import s4 from "../assests/logoo13.jpg";
import s5 from "../assests/logoo14.jpg";
import s6 from "../assests/logoo15.jpg";
import s7 from "../assests/DM2.jpg";
import ab from "../assests/logoo17.jpg";
import abc from "../assests/logoo18.png";
import { useNavigate } from "react-router-dom";




import { SiI18Next } from "react-icons/si";
// import { motion, useInView, useAnimationControls, animate } from "framer-motion";
import { useEffect,  useState } from "react";

function CountUp({ end }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setValue(Math.floor(latest)),
      });
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {value}
    </span>
  );
}

// ---------- Digital Marketing Services Data ----------
const services = [
  {
    img: s4,
    title: "Digital Advertising",
    issuer: "Maxzen.Tech",
    description:
      "We create high-performance digital advertising campaigns that help your brand grow faster, reach the right audience, and generate measurable results. At Maxzen.Tech, our approach combines creativity, data-driven strategy, and advanced targeting to ensure every ad campaign delivers maximum ROI..",
      link: "/services9"
    },
  {
    img: s2,
    title: "Web Designing",
    issuer: "Maxzen Tech Solutions",
    description:
      "We design modern, responsive, and user-friendly websites that enhance your brand’s digital presence and engagement.Our team uses the latest UI/UX principles to create layouts that are clean, intuitive, and engaging. From visually appealing designs to easy-to-use structures, every element is thoughtfully planned to enhance user experience and encourage meaningful interactions.",
      link:"/serviceswd"
    },
  {
    img: s3,
    title: "Search Engine Optimization",
    issuer: "Maxzen.Tech",
    description:
      "We optimize your website with proven SEO strategies to improve rankings, increase traffic, and boost online visibility.We start with an in-depth SEO audit to analyze your website’s structure, performance, keywords, and competitor landscape. Based on this, we implement a tailored SEO strategy that includes keyword optimization, on-page improvements, technical enhancements, and quality link building.",
  },
  {
    img: abc,
    title: "Logo Designs",
    issuer: "Maxzen.Tech",
    description:
      "We craft unique and memorable logos that define your brand identity and leave a lasting impression.We combine creativity with strategy to design logos that are simple, versatile, and instantly recognizable. Each design is carefully crafted with thoughtful typography, meaningful color psychology, and clean visuals to communicate your brand’s message at a glance."
  },
  {
    img: s5,
    title: "Software Development",
    issuer: "Maxzen.Tech",
    description:
      "We build scalable, secure, and innovative software solutions tailored to meet your business needs.Our team specializes in building high-performance applications that are scalable, secure, and future-ready. Whether you're a startup looking to launch a new product or an established company seeking automation, we deliver software that adapts as your business grows."
  },
  {
    img: s6,
    title: "App Development",
    issuer: "Maxzen.Tech",
    description:
      "We develop high-performance, user-friendly mobile and web apps that drive engagement and growth.We develop high-performance, user-friendly mobile and web apps that drive engagement and growth.",
  },
  {
    img: ab,
    title: "Cloud computing",
    issuer: "Maxzen.Tech",
    description:
      "We provide scalable and secure cloud solutions, ensuring seamless data management and business efficiency.We deploy cloud environments that are highly scalable, allowing your business to grow without limitations. From storage expansion and application hosting to resource optimization, your cloud ecosystem adapts effortlessly to changing demands.",
  },
  {
    img: s7,
    title: "Woo-commerce Website",
    issuer: "Maxzen.Tech",
    description:
      "We build feature-rich, secure, and scalable e-commerce websites that enhance user experience and drive sales.We build scalable e-commerce solutions that grow with your business — whether you’re launching a small online shop or a large multi-vendor marketplace. With robust product management systems, seamless checkout flows, secure payment gateways, and advanced filtering options, your customers enjoy a fast and intuitive shopping experience.",
  },
  {
    img: s1,
    title: "Web Development",
    issuer: "Maxzen.Tech",
    description:
      "We create fast, secure, and scalable websites, ensuring seamless user experience and business growth.Security is a core priority. We implement best-in-class security features such as data encryption, secure authentication, firewall protection, and regular vulnerability checks to safeguard your website from threats and provide a safe browsing experience for your users.",
  }
];


// ---------- Background Colors ----------
// const bgColors = [
//   "bg-[#FFE8C2]",
//   "bg-[#C8F7C5]",
//   "bg-[#C7E9FF]",
//   "bg-[#FFD6D9]",
//   "bg-[#FFF6A1]",
//   "bg-[#E4C7FF]",
//   "bg-[#C1FFF2]",
const bgColors = [
  "bg-[#F2F5D1]",
  
];


export default function DigitalMarketingServices() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center w-full relative overflow-hidden">
        {/* ---------- FIXED BACKGROUND TEXT ---------- */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] font-extrabold text-gray-200 opacity-10 select-none z-0 tracking-widest">
          SERVICES
        </div>

        {/* ----------------- INTRO SECTION ----------------- */}
      {/* ----------------- REVAMPED INTRO SECTION ----------------- */}
<section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#fffaf6] via-[#f4f9ff] to-[#f9fbff] overflow-hidden">
  {/* Decorative blobs */}
  <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#ff8c1a]/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#0d1b2a]/10 rounded-full blur-3xl animate-pulse"></div>

  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#ff8c1a]/20">
        <img
          src={require("../assests/DM1.jpg")}
          alt="Digital Marketing Illustration"
          className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
      </div>

      {/* Floating Tag */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-[#0d1b2a] font-semibold px-6 py-2 rounded-full shadow-lg border border-[#ff8c1a]/20"
      >
        🚀 Boost Your Brand Visibility
      </motion.div>
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d1b2a] leading-tight">
        Digital Marketing Services{" "}
        {/* <span className="text-[#ff8c1a]">Near Me</span> */}
      </h1>

      {/* Animated Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="h-[4px] w-32 bg-gradient-to-r from-[#ff8c1a] to-[#0d1b2a] rounded-full"
      />

      <p className="text-gray-700 text-lg leading-relaxed">
        Searching for{" "}
        <span className="font-semibold text-[#ff8c1a]">
          digital marketing services near me
        </span>{" "}
        to grow your business online? At{" "}
        <span className="font-semibold text-[#0d1b2a]">Maxzen.Tech</span>, we
        deliver performance-focused strategies that elevate your brand,
        increase visibility, and turn followers into loyal customers.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {[
          "Better understanding of your market",
          "Easy communication & local support",
          "Tailored strategies to meet goals",
          "Affordable for startups & SMEs",
        ].map((point, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 bg-white/80 border border-[#ff8c1a]/20 rounded-xl p-3 shadow-sm hover:shadow-md transition"
          >
            <span className="text-[#ff8c1a] text-xl">✅</span>
            <p className="text-gray-800 font-medium">{point}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-700 text-lg leading-relaxed">
        When you search for{" "}
        <span className="font-semibold text-[#ff8c1a]">
          “digital marketing services near me,”
        </span>{" "}
        choose a partner who ensures measurable results. That’s where{" "}
        <span className="font-semibold text-[#0d1b2a]">Maxzen.Tech</span> comes in.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() =>
          window.open("https://wa.me/919059991807?text=Hi! I’d like to know more about your digital marketing services.", "_blank")
        }
        className="mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-[#ff8c1a] to-[#0d1b2a] text-white font-semibold shadow-lg hover:shadow-2xl transition"
      >
        💬 Chat With Us
      </motion.button>
    </motion.div>
  </div>
</section>

        {/* ----------------- SERVICES SECTION ----------------- */}
        <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden w-full z-10">
          <h2 className="text-5xl italic font-serif font-semibold text-gray-900 mb-16 text-center">
            The Core Marketing Services
          </h2>

          <div className="flex flex-col items-center text-left mt-10 space-y-52 px-6 sm:px-10">
            {services.map((item, index) => (
              <AnimatedCard
                key={index}
                item={item}
                bgColor={bgColors[index % bgColors.length]}
                index={index} 
              />
            ))}
          </div>
        </section>

        {/* ----------------- WINGS OF FIRE SECTION ----------------- */}
        {/* <section className="w-full bg-gradient-to-b mt-40 from-[#0d1a3a] via-[#274d8a] to-[#5ba6ff] text-black py-16 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            WINGS OF FIRE LEGACY
          </h1>

          <div className="flex items-center justify-center mr-10 py-12 gap-10 px-4 flex-wrap">
            <img
              src={ab}
              alt="Vice President Event"
              className="w-[350px] h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
            <img
              src={abc}
              alt="Abdul Kalam Event"
              className="w-[550px] h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col items-center text-center mb-10 px-6 sm:px-12 md:px-20">
            <p className="text-white text-lg max-w-5xl leading-relaxed">
              It was an absolute honour to be part of the launch event of the
              new and expanded edition of the book “Wings of Fire” by Dr. Arun
              Tiwari, commemorating the 94th Birth Anniversary of Dr. APJ Abdul
              Kalam, Former President of India, held at IIIT Hyderabad. A moment
              of pride and inspiration, and an incredible experience listening
              to Sri VC Sajjanar, IPS, Commissioner of Police Hyderabad.
            </p>
          </div>
        </section> */}
      </div>
      {/* ----------------- WHY CHOOSE LOCAL AGENCY SECTION ----------------- */}
<section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-[#fffefe] via-[#f7fbff] to-[#eef6ff] mt-20 overflow-hidden">

  {/* Decorative circles */}
  <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-[#ff8c1a]/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-80px] left-[-80px] w-72 h-72 bg-[#0d1b2a]/10 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Section Title */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center text-4xl md:text-5xl font-extrabold text-[#0d1b2a] mb-10"
    >
      Why Choose a Local <span className="text-[#ff8c1a]">Digital Marketing Agency?</span>
    </motion.h2>

    {/* Local Agency Benefits */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-xl rounded-3xl p-10 border border-[#ff8c1a]/20"
    >
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        When you look for a <span className="font-semibold text-[#ff8c1a]">“digital marketing agency near me”</span>,
        you need a partner who truly understands your market. A local agency like
        <span className="font-semibold text-[#0d1b2a]"> Maxzen.tech</span> provides:
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-6">
        {[
          "Better understanding of your local audience",
          "Easy face-to-face communication and support",
          "Affordable & customized packages for startups & SMEs",
          "Data-driven strategies for real business growth",
        ].map((point, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 bg-[#fff8f2] rounded-xl p-4 border border-[#ff8c1a]/20 shadow-sm"
          >
            <span className="text-[#ff8c1a] text-xl">🔥</span>
            <p className="text-gray-800 font-medium">{point}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* ----------------- FAQ SECTION ----------------- */}
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold  mt-20 mb-10 text-[#0d1b2a]"
    >
      Frequently Asked <span className="text-[#ff8c1a]">Questions</span>
    </motion.h3>

    <div className="max-w-5xl mx-auto space-y-6 text-left">
      {[
        {
          q: "How can I find the best digital marketing services near me in Hyderabad?",
          a: "Choose a local agency offering SEO, social media, Google Ads & website design. Maxzen.tech provides customized strategies for KPHB, Kukatpally & Hyderabad.",
        },
        {
          q: "Why should I hire a digital marketing agency near me instead of a national company?",
          a: "Local agencies understand market behavior, competition & customers in KPHB and Kukatpally — helping you get real customers who convert.",
        },
        {
          q: "What services does Maxzen.tech provide?",
          a: "SEO, Website Design & Development, Social Media Marketing, Google Ads, Local SEO for KPHB, Kukatpally & nearby areas.",
        },
        {
          q: "Can digital marketing help small businesses in KPHB & Kukatpally?",
          a: "Absolutely! We specialize in helping small businesses attract customers through SEO, Google Ads & social media.",
        },
        {
          q: "How much do digital marketing services cost in Hyderabad?",
          a: "Pricing depends on your package. We provide affordable plans for startups, small businesses & enterprises.",
        },
        {
          q: "Will my business appear on Google if I hire your agency?",
          a: "Yes! We ensure your business appears on Google Search & Maps for keywords like “digital marketing agency near me” or “SEO services in Hyderabad.”",
        },
      ].map((faq, i) => (
        <motion.details
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-pointer"
        >
          <summary className="text-xl font-semibold text-[#0d1b2a] cursor-pointer">
            {faq.q}
          </summary>
          <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
        </motion.details>
      ))}
    </div>

    {/* ----------------- CONTACT CTA ----------------- */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-20 bg-gradient-to-r from-[#ff8c1a] to-[#0d1b2a] text-white text-center p-10 rounded-3xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
      <p className="text-lg mb-6">
        Contact us today and let’s take your brand visibility to the next level!
      </p>=''

      <button
        onClick={() =>
          window.open("https://wa.me/919059991807?text=Hi! I want to grow my business online with Maxzen.Tech", "_blank")
        }
        className="px-10 py-3 bg-white text-[#0d1b2a] font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        📩 Contact Us
      </button>
    </motion.div>

  </div>
</section>
{/* -------------------------------- HERO SECTION ------------------------------- */}
<section
  className="relative w-full h-[95vh] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${require("../assests/logo2.png")})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"></div>

  {/* Center Text */}
  <div className="relative z-10 text-center max-w-3xl px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-5xl font-bold text-white leading-snug"
    >
      Promoting Your Brand As A <br /> Creative Leader
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-200 mt-5 text-lg leading-relaxed"
    >
      We help businesses stand out with innovative branding and marketing
      strategies. Our team combines creativity and data-driven insights
      to enhance brand visibility and engagement. With a strong digital
      presence, your brand can lead the industry and make a lasting impact.
    </motion.p>

    <motion.button
     
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.3 }}
      className="mt-7 px-8 py-3 border border-white/70 text-white rounded-full 
                 hover:bg-white hover:text-black transition font-medium"
    >
      Know More
    </motion.button>
  </div>
</section>

{/* ------------------------------- STATS SECTION -------------------------------- */}
<section className="w-full bg-[#f3f3f3] py-10">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center border-t border-gray-300">

    {/* Stat 1 */}
    <div className="py-8 border-r border-b md:border-b-0 border-gray-300">
      <h2 className="text-4xl font-bold text-red-600">
        <CountUp end={8} />+
      </h2>
      <p className="text-gray-700 font-semibold mt-2">Years Experience</p>
    </div>

    {/* Stat 2 */}
    <div className="py-8 border-b md:border-b-0 border-gray-300">
      <h2 className="text-4xl font-bold text-red-600">
        <CountUp end={40} />+
      </h2>
      <p className="text-gray-700 font-semibold mt-2">Team Members</p>
    </div>

    {/* Stat 3 */}
    <div className="py-8 border-r border-gray-300">
      <h2 className="text-4xl font-bold text-red-600">
        <CountUp end={150} />
      </h2>
      <p className="text-gray-700 font-semibold mt-2">Customers Satisfied</p>
    </div>

    {/* Stat 4 */}
    <div className="py-8">
      <h2 className="text-4xl font-bold text-red-600">
        <CountUp end={158} />
      </h2>
      <p className="text-gray-700 font-semibold mt-2">Projects Completed</p>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

// ---------- Animated Service Card Component ----------
function AnimatedCard({ item, bgColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-stretch gap-3 w-full max-w-6xl"
    >

      {/* Image Card (CLICK TO NAVIGATE) */}
      <motion.div
        onClick={() => item.link && navigate(item.link)}
        className="cursor-pointer w-full md:w-1/2 h-[350px] bg-white shadow-xl rounded-2xl 
                   overflow-hidden flex justify-center items-center 
                   hover:shadow-2xl transition-transform duration-500"
        style={{ rotate, transformPerspective: 1000 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className={`${bgColor} w-full md:w-1/2 h-[350px] shadow-md rounded-2xl p-8 flex flex-col justify-center hover:shadow-lg transition-all duration-300`}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
        <p className="text-sm text-blue-700 font-medium mb-4">{item.issuer}</p>
        <p className="text-gray-800 leading-relaxed text-base">{item.description}</p>
      </motion.div>

    </div>
  );
}

