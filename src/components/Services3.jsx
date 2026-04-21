// import React from "react";
import { motion} from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Layers,
  MonitorSmartphone,
  Rocket,
  Compass,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";

// import heroImg from "../assests/logoo10.png";
import devImage from "../assests/webdev1.jpg";
import launchImg from "../assests/webdev5.jpeg";
import discoveryImg from "../assests/webdev2.jpeg";
import designImg from "../assests/webdev3.jpeg";
import testImg from "../assests/webdev4.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import project1 from "../assests/webdev6.png";
// import project2 from "../assests/webdev7.png";
// import project3 from "../assests/webdev8.png";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Webdevelopement = () => {
  const services = [
  "Skilled team with experience in latest web technologies",
  "Customized website solutions based on business needs",
  "SEO optimized structure for better visibility",
  "Fast responsive and secure website development",
  "Dedicated support and ongoing maintenance",
  "building digital platforms that drive real business results",
];
const [activeFeature, setActiveFeature] = useState(0);
 const features = [
  {
    icon: <Code2 />,
    text: "Custom Website Development",
    content: "We design and develop websites tailored to your specific business goals."
  },
  {
    icon: <Globe />,
    text: "WordPress Development",
    content: "We create easy to manage WordPress websites with strong SEO foundation."
  },
  {
    icon: <Smartphone />,
    text: "Responsive Web Design",
    content: "We ensure your website works seamlessly across all devices and screen sizes."
  },
  {
    icon: <ShoppingCart />,
    text: "E-Commerce Solutions",
    content: "We build ecommerce platforms that are secure user friendly and optimized for conversions."
  },
  {
    icon: <Layers />,
    text: "Website Redesign Services",
    content: "We upgrade existing websites to improve design performance and user experience."
  },
  {
    icon: <MonitorSmartphone />,
    text: "Web Application Development",
    content: "We provide complete website development services to help your business grow online."
  },
];

  const processSteps = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Discovery & Strategy",
      desc: "We begin with research and strategy—understanding your business, goals, and customers to shape a clear direction.",
      img: discoveryImg,
      direction: "left",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Design & Development",
      desc: "Our team designs intuitive layouts and develops robust systems that deliver top-notch performance and usability.",
      img: designImg,
      direction: "right",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Testing & Optimization",
      desc: "We test every element—speed, responsiveness, security—to guarantee your website performs flawlessly everywhere.",
      img: testImg,
      direction: "bottom",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      desc: "After a perfect launch, we continue supporting, updating, and improving your site to ensure long-term success.",
      img: launchImg,
      direction: "top",
    },
  ];
  // const { scrollYProgress } = useScroll();
   const navigate = useNavigate();
    useEffect(() => {
       window.scrollTo(0, 0);
     }, [])

  return (
<><Header/>
    <div className="bg-gradient-to-b from-white via-[#fff5f5] to-[#fff1f8] text-gray-800 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-orange-10 overflow-hidden text-white">
        <h1 className="fixed mt-20 text-[6rem] md:text-[8rem] font-bold text-[#fc8d71]/40 top-[-40px] left-1/2 -translate-x-1/2 select-none">
          Web_Development
        </h1>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h1 className="bg-[#0d1b2a] text-white text-lg font-semibold px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-md">
              WEB DEVELOPMENT SERVICES IN HYDERABAD
            </h1>
            <button
             onClick={() => navigate("/contact")}
             className="bg-[#0d1b2a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#172a45] transition-all shadow-md">
              Get A Free Consultation
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-4xl md:text-5xl text-black font-extrabold leading-tight">
                Visitor <span className="text-orange-500">Benefits</span> with{" "}
                <span
  onClick={() => navigate("/#home2")}
  className="text-[#0d1b2a] cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
 Websites
              </h2>
              <button 
              onClick={() => navigate("/DigitalMarketingServices  ")}
              className="mt-6 bg-[#0d1b2a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#172a45] transition-all shadow-md">
                View Service
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <p className="text-black/90 mt-20 leading-relaxed text-justify bg-[#0d1b2a]/20 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20">
                
Searching for a professional website design company in Hyderabad to grow your business online Maxzen.tech delivers high quality website design and development solutions that focus on performance user experience and business growth

We are a results oriented digital marketing agency offering services like web development SEO social media marketing and app development Our approach is simple we create websites that attract visitors engage users and convert them into customers
At {" "}
                
 <span
  onClick={() => navigate("/#home2")}
  className="font-semibold text-orange-500 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
 we take time to understand your business your audience and your goals Based on this we build a customized website that represents your brand and supports your long term success

              </p>
            </motion.div>
          </div>

          {/* Heading */}
<h3 className="mt-14 text-2xl md:text-3xl font-bold text-center text-[#0d1b2a] mb-6">
  Why Choose{" "}
  <span
    onClick={() => navigate("/#home2")}
    className="text-orange-500 cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>
</h3>

{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                className="bg-white/90 text-gray-800 p-6 rounded-3xl shadow-2xl hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0d1b2a] text-white text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-center font-medium leading-relaxed">
  {service}
</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE MAXZEN SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0d1b2a] mb-10"
        >
          Web Development Services in Hyderabad and KPHB
{/* {" "}
<span
  onClick={() => navigate("/#home2")}
  className="cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>{" "}
for Web Development Services */}


 
        </motion.h2>
            <p className="text-black/90 mb-10 mt-10 leading-relaxed text-justify bg-[#0d1b2a]/20 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20">
 
                
 <span
  onClick={() => navigate("/#home2")}
  className="font-semibold text-orange-500 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span> {" "}
 
is recognized as a best web development company in Hyderabad for delivering modern scalable and SEO optimized websites

We develop websites with strong technical structure fast loading speed and smooth user experience Our goal is to help your business stand out online and generate consistent leads
       Maxzen.tech offers reliable web development services in Hyderabad including Kukatpally and KPHB We support local businesses with tailored digital solutions

If you are looking for a web development company in KPHB we provide affordable and efficient services with quick turnaround time
       
              </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={devImage}
              alt="Developer"
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl hover:scale-105 transition-all duration-500"
            />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 text-center md:text-left"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At{" "}
<span
  onClick={() => navigate("/#home2")}
  className="font-semibold text-[#ff8c1a] cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
, we don’t just build websites — we create high-performance digital ecosystems for your brand’s success.
            </p>
          </motion.div> */}

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="md:col-span-1 text-center md:text-left"
>
  <motion.p
    key={activeFeature}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="text-gray-700 text-lg leading-relaxed"
  >
    {features[activeFeature].content}
  </motion.p>
</motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 text-left md:pl-6"
          >
            {features.map((feature, i) => (
              <div
  key={i}
  onClick={() => setActiveFeature(i)}
  className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow cursor-pointer transition-all duration-300
    ${
      activeFeature === i
        ? "bg-[#ff8c1a]/10 border border-[#ff8c1a]"
        : "bg-[#f8fafc] hover:shadow-md hover:-translate-y-1"
    }`}
>
                <span className="text-[#ff8c1a]">{feature.icon}</span>
                <span className="font-medium text-gray-800">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= OUR PROCESS SECTION (WRAPPED IN ONE CARD) ================= */}
      <section className="py-16 px-6  md:px-12 bg-gradient-to-b from-[#fff9f3] via-white to-[#fff6ef] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-[#ff8c1a]/20 rounded-3xl shadow-2xl p-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-[#0d1b2a] mb-20"
          >
            Our <span className="text-[#ff8c1a]">Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => {
              const directions = {
                left: { x: -80, opacity: 0 },
                right: { x: 80, opacity: 0 },
                top: { y: -80, opacity: 0 },
                bottom: { y: 80, opacity: 0 },
              };
              return (

                <motion.div
                  key={index}
                  initial={directions[step.direction]}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotateY: 3 }}
                  className="relative bg-white/70 backdrop-blur-md border border-[#ff8c1a]/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#ff8c1a] to-[#0d1b2a] opacity-30 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#ff8c1a] text-white shadow-lg">
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#0d1b2a] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    <motion.img
                      src={step.img}
                      alt={step.title}
                      whileHover={{ scale: 1.08, rotate: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-44 object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#fff5f0]">
  
  {/* H2 Heading */}
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0d1b2a] mb-6">
    Digital Marketing Services by{" "}
    <span className="text-[#ff8c1a]">Maxzen.Tech</span>
  </h2>

  {/* Description */}
  <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 leading-relaxed">
    Along with website development, we provide digital marketing services to improve your online presence and grow your business effectively.
  </p>

  {/* Services Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* SEO */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold text-[#0d1b2a] mb-3">
        SEO Services
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We help your website rank higher on search engines and attract quality organic traffic.
      </p>
    </div>

    {/* Social Media */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold text-[#0d1b2a] mb-3">
        Social Media Marketing
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We build your brand presence and engagement across all major social media platforms.
      </p>
    </div>

    {/* App Development */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold text-[#0d1b2a] mb-3">
        App Development
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We develop mobile applications that enhance user experience and expand your business reach.
      </p>
    </div>

  </div>
</section>
     {/* ================= PORTFOLIO / PROJECTS SECTION ================= */}
<section className="py-12 px-6 md:px-12 bg-gradient-to-b from-[#fff5f0] via-white to-[#fffaf7] overflow-hidden">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0d1b2a] mb-14">
    Portfolio / <span className="text-[#ff8c1a]">Projects</span>
  </h2>

  {/* ⭐ Horizontal Scroll + Hidden Scrollbar */}
  <div className="relative max-w-7xl mx-auto overflow-x-auto overflow-y-hidden rounded-3xl shadow-2xl border border-[#ff8c1a]/20 scrollbar-hide">
    
    <div className="flex gap-6 py-4 px-4 w-max">
      <img
        src={require("../assests/webdev6.png")}
        alt="Project 1"
        className="h-80 w-auto object-cover rounded-xl"
      />
      <img
        src={require("../assests/webdev7.png")}
        alt="Project 2"
        className="h-80 w-auto object-cover rounded-xl"
      />
      <img
        src={require("../assests/webdev8.png")}
        alt="Project 3"
        className="h-80 w-auto object-cover rounded-xl"
      />
      <img
        src={require("../assests/logoo21.PNG")}
        alt="Project 4"
        className="h-80 w-auto object-cover rounded-xl"
      />
      <img
        src={require("../assests/logoo22.PNG")}
        alt="Project 7"
        className="h-80 w-auto object-cover rounded-xl"
      />
     
      <img
        src={require("../assests/logoo23.PNG")}
        alt="Project 6"
        className="h-80 w-auto object-cover rounded-xl"
      />
    </div>
  </div>

  <div className="text-center mt-10"></div>
</section>





     {/* ================= INTRO SECTION: MAXZEN.TECH - TOP WEB DEVELOPMENT SERVICES ================= */}
<section className="relative overflow-hidden py-28 px-6 md:px-12 bg-gradient-to-b from-[#fff8f3] via-white to-[#fff3e6]">
  {/* Floating Gradient Orbs */}
  <motion.div
    className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-[#ff8c1a]/20 rounded-full blur-3xl"
    animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div    className="absolute bottom-[-100px] right-[-80px] w-80 h-80 bg-[#0d1b2a]/10 rounded-full blur-3xl"
    animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative z-10 max-w-5xl mx-auto text-center">
    {/* Animated Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-[#0d1b2a] leading-tight mb-6"
    >
      <span
  onClick={() => navigate("/#home2")}
  className="text-[#ff8c1a] cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
 – providing Top Web Development Services
    </motion.h2>

    {/* Glowing underline */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto mb-10 h-1 w-24 bg-gradient-to-r from-[#ff8c1a] to-[#0d1b2a] rounded-full origin-left"
    />

    {/* Paragraph Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/80 backdrop-blur-sm border border-[#ff8c1a]/20 rounded-3xl shadow-xl p-8 md:p-10 mb-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
    >
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        At{" "}
<span
  onClick={() => navigate("/#home2")}
  className="font-semibold text-[#ff8c1a] cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
, we provide top{" "}
        <span className="font-semibold text-[#0d1b2a]">web development services in Hyderabad</span> designed to help
        businesses thrive in the digital era. Our websites are{" "}
        <span className="font-semibold text-[#0d1b2a]">responsive, SEO-optimized,</span> and{" "}
        <span className="font-semibold text-[#0d1b2a]">user-focused</span>, ensuring every visitor leaves with a lasting
        impression.
      </p>
    </motion.div>

    {/* Paragraph Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="bg-[#0d1b2a]/90 text-white rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_8px_30px_rgba(13,27,42,0.4)] hover:-translate-y-1 transition-all duration-500"
    >
      <p className="text-lg md:text-xl leading-relaxed">
        A great website should do more than look good — it should perform efficiently, load fast, and deliver an
        exceptional user experience. That’s why we merge elegant design with clean coding and modern technology to
        create websites that elevate your business and brand presence.
      </p>

      <motion.button
        onClick={() => navigate("/contact")}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mt-8 bg-[#ff8c1a] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
      >
        Contact Us
      </motion.button>
    </motion.div>
  </div>
</section>

<section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-[#fff7f2] to-white">

  {/* ================= WHY SECTION ================= */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1b2a] mb-6 leading-tight">
        Why Your Business Needs a <span className="text-[#ff8c1a]">Professional Website</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        A well-designed website builds trust and credibility while improving your online visibility.
      </p>

      <p className="text-gray-700 leading-relaxed">
        It helps you reach potential customers, generate leads, and increase conversions — all while strengthening your brand presence.
      </p>
    </div>

    {/* RIGHT DESIGN CARDS */}
    <div className="grid gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ff8c1a]">
        <h3 className="font-semibold text-[#0d1b2a] mb-2">Build Trust</h3>
        <p className="text-gray-600 text-sm">Professional websites improve credibility instantly.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ff8c1a]">
        <h3 className="font-semibold text-[#0d1b2a] mb-2">Increase Visibility</h3>
        <p className="text-gray-600 text-sm">Reach more customers through search engines.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#ff8c1a]">
        <h3 className="font-semibold text-[#0d1b2a] mb-2">Boost Conversions</h3>
        <p className="text-gray-600 text-sm">Turn visitors into paying customers effectively.</p>
      </div>
    </div>
  </div>


  {/* ================= CTA SECTION (MODERN CARDS) ================= */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-24">

    <div className="group bg-gradient-to-br from-orange-200 text-black p-8 rounded-3xl shadow-xl hover:scale-105 transition-all">
      <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
      <p className="mb-5 text-black/90">Build your website with expert guidance.</p>
     {/* CARD 1 */}
<button
  onClick={() => navigate("/digitalmarketingservices")}
  className="bg-white text-[#ff8c1a] px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
>
  Get Started
</button>
    </div>

    <div className="group bg-gray-400 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-all">
      <h3 className="text-xl font-bold mb-3">Quick Support</h3>
      <p className="mb-5 text-white/80">Chat with our experts instantly.</p>
      {/* CARD 2 */}
<button
  onClick={() => window.open("https://wa.me/918498989844", "_blank")}
  className="bg-[#ff8c1a] px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
>
  WhatsApp Chat
</button>
    </div>

    <div className="group bg-white p-8 rounded-3xl shadow-xl border hover:scale-105 transition-all">
      <h3 className="text-xl font-bold text-[#0d1b2a] mb-3">Get a Quote</h3>
      <p className="text-gray-600 mb-5">Start your digital journey today.</p>
      {/* CARD 3 */}
<button
  onClick={() => navigate("/contact")}
  className="bg-[#0d1b2a] text-white px-5 py-2 rounded-full hover:scale-105 transition"
>
  Request Now
</button>
    </div>

  </div>


  {/* ================= FAQ (MODERN STYLE) ================= */}
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-extrabold text-center text-[#0d1b2a] mb-12">
      FAQ – Website Design Company
    </h2>

    <div className="space-y-4">

      {[
        {
          q: "Which is the best website design company in Hyderabad?",
          a: "Maxzen.Tech offers customized web development and digital marketing solutions."
        },
        {
          q: "Why choose Maxzen.Tech?",
          a: "We provide SEO-optimized, fast, and high-quality websites with full support."
        },
        {
          q: "Do you provide services in KPHB & Kukatpally?",
          a: "Yes, we serve all areas including KPHB and Kukatpally."
        },
        {
          q: "What is the cost of website development?",
          a: "Pricing depends on features and requirements. We offer flexible packages."
        },
        {
          q: "Will my website be SEO optimized?",
          a: "Yes, all our websites are built with SEO best practices."
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-[#0d1b2a]">{item.q}</h3>
          <p className="text-gray-600 mt-2 text-sm">{item.a}</p>
        </div>
      ))}

    </div>
  </div>

</section>

    </div>
   < Footer/></>
  );
};

export default Webdevelopement;