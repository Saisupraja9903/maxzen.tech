import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Cloud, ShieldCheck, TrendingUp, RefreshCw, Database, Users } from "lucide-react";
import cloudBg from "../assests/cc1.jpg";
import cc2 from "../assests/cc2.webp";
import cc3 from "../assests/cc3.jpg";
import cc4 from "../assests/cc4.webp";
import cc5 from "../assests/cc5.jpg";
import cc6 from "../assests/cc6.jpg";
import { ArrowRight } from "lucide-react";
import chooseImg from "../assests/cc7.png";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cc8 from "../assests/cc8.webp";
import cc9 from "../assests/cc9.webp";
import {
  FaRocket,
  FaShoppingCart,
  FaHeartbeat,
  FaBuilding,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";


const CloudPage = () => {
  // State for timeline steps
const steps = [
  {
    step: 1,
    title: "Infrastructure as a Service (IaaS)",
    text: "We provide virtual infrastructure including servers, storage, and networking. Businesses get full control over their environment while reducing hardware costs.",
    points: [
      "Flexible computing resources",
      "High-performance virtual machines",
      "Secure storage solutions"
    ],
    img: cc2
  },

  {
    step: 2,
    title: "Platform as a Service (PaaS)",
    text: "Our platform services enable developers to build, test, and deploy applications without managing infrastructure.",
    points: [
      "Faster development cycles",
      "Integrated development tools",
      "Reduced operational complexity"
    ],
    img: cc4
  },

  {
    step: 3,
    title: "Software as a Service (SaaS)",
    text: "We deliver ready-to-use applications accessible via the internet, helping businesses improve productivity and collaboration.",
    points: [
      "No installation required",
      "Accessible from any device",
      "Ideal for CRM, communication, and business tools"
    ],
    img: cc3
  },

  {
    step: 4,
    title: "Hybrid & Multi-Cloud Solutions",
    text: "We design hybrid and multi-cloud environments that combine public and private cloud systems, ensuring better flexibility, performance, and cost optimization.",
    points: [
      "Public & private cloud integration",
      "Improved scalability and flexibility",
      "Optimized cloud performance"
    ],
    img: cc5
  },

  {
    step: 5,
    title: "Cloud Migration Services",
    text: "We help businesses smoothly migrate their data and applications to the cloud with minimal downtime and zero data loss.",
    points: [
      "Secure cloud migration",
      "Minimal downtime",
      "Zero data loss strategy"
    ],
    img: cc8
  },

  {
    step: 6,
    title: "Cloud-Powered DevOps",
    text: "Our DevOps solutions improve development speed and deployment efficiency through automation, CI/CD pipelines, and continuous monitoring.",
    points: [
      "CI/CD pipeline automation",
      "Continuous monitoring tools",
      "Faster deployment process"
    ],
    img: cc6
  },

  {
    step: 7,
    title: "Cloud Security Services",
    text: "Security is our top priority. We implement advanced measures to protect your data and applications.",
    points: [
      "Data encryption and protection",
      "Identity and access management",
      "Compliance and monitoring systems"
    ],
    img: cc9
  },

  {
    step: 8,
    title: "Cloud Backup & Disaster Recovery",
    text: "We ensure your business remains operational even during unexpected failures by providing automated backups and quick recovery solutions.",
    points: [
      "Automated cloud backups",
      "Quick disaster recovery",
      "Business continuity solutions"
    ],
    img: cc4
  }
];

  const [current, setCurrent] = useState(1);

  const nextStep = () => setCurrent(current === steps.length ? 1 : current + 1);
  const prevStep = () => setCurrent(current === 1 ? steps.length : current - 1);

   useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate();
  return (
    <>
    <Helmet>
      {/* <title>Cloud Computing Services in Hyderabad | Maxzen.Tech</title> */}
      <title>Maxzen.Tech</title>
      <meta
        name="description"
        content="Maxzen.Tech provides cloud computing services in Hyderabad including IaaS, PaaS, SaaS, hybrid cloud, DevOps, cloud migration, and secure cloud infrastructure solutions in Kukatpally and KPHB."
      />
      <meta
        name="keywords"
        content="cloud computing services in hyderabad, cloud solutions hyderabad, hybrid cloud services, devops company hyderabad, cloud migration services, iaas paas saas hyderabad, cloud infrastructure company"
      />
      <link
        rel="canonical"
        href="https://maxzen.tech/cloudcomputingservicesinhyderabad"
      />
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "name": "Maxzen.tech",
      "url": "https://maxzen.tech",
      "telephone": "+91 9059991807",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kukatpally",
        "addressRegion": "Hyderabad",
        "addressCountry": "India"
      },
      "areaServed": [
        "Hyderabad",
        "KPHB",
        "Kukatpally"
      ]
    },

    {
      "@type": "Service",
      "name": "Cloud Computing Services in Hyderabad",
      "provider": {
        "@type": "Organization",
        "name": "Maxzen.tech",
        "url": "https://maxzen.tech"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Hyderabad, Kukatpally, KPHB"
      },
      "description": "Maxzen.tech provides cloud computing services in Hyderabad including IaaS, PaaS, SaaS, hybrid cloud, DevOps, and secure cloud solutions.",
      "serviceType": "Cloud Computing",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }

  ]
}
`}
      </script>
    </Helmet>
    <Header/>
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${cloudBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2b]/90 via-purple-900/80 to-[#0a0f2b]/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <motion.h1 className="text-5xl md:text-6xl font-extrabold text-center">
            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              {"Cloud Computing ".split("").map((char, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + i * 0.05 }} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
              {"Services in Hyderabad".split("").map((char, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + i * 0.05 }} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

         <motion.h2 className="text-2xl mt-6 font-semibold text-yellow-300">
  <span
    onClick={() => {
      navigate("/");
      setTimeout(() => {
        document.getElementById("home2-start")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }}
    className="cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>
</motion.h2>
          <motion.p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed">
            Scalable and Secure Cloud Computing in Hyderabad for Modern Businesses
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/contact")}
            className="mt-10 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 rounded-full shadow-lg"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* ========== CONTENT SECTION ========== */}
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0a0f2b] via-[#111c44] to-[#0a0f2b] text-gray-100">
        <div className="relative max-w-6xl mx-auto z-10">
         <motion.h2 className="text-2xl mt-6 font-semibold text-yellow-300">
  <span
    onClick={() => {
      navigate("/");
      setTimeout(() => {
        document.getElementById("home2-start")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }}
    className="cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>
</motion.h2>

          <div className="text-lg leading-relaxed space-y-6 text-gray-300">
            <p>
In today’s fast-growing digital environment, businesses need flexible, secure, and scalable technology to stay competitive. Cloud computing services in Hyderabad are transforming how companies operate by allowing them to store data, run applications, and manage business processes without investing in costly infrastructure. At Maxzen.tech, we deliver advanced cloud computing in Hyderabad tailored for startups, SMEs, and enterprises across Kukatpally, KPHB, and Hyderabad            </p>
            <p>
Our goal is to help businesses reduce operational costs, improve efficiency, and scale faster. Whether you are a growing startup or an established enterprise, our cloud solutions are designed to support your digital transformation journey. If you are searching for cloud solutions near me, Maxzen.tech offers reliable cloud services including migration, hosting, DevOps, and managed support.
            </p>
            <p className="text-2xl">
              <b>Key Benefits of Cloud Computing</b>
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-10 h-10 text-cyan-400" />, title: "Cost Savings", desc: "Cost savings by eliminating hardware and maintenance expensesNo need to invest in expensive hardware." },
              { icon: <RefreshCw className="w-10 h-10 text-purple-400" />, title: "Scalability", desc: "Scalability to grow your business without limitations." },
              { icon: <ShieldCheck className="w-10 h-10 text-green-400" />, title: "Security", desc: "Protect data with advanced cloud security." },
              { icon: <Users className="w-10 h-10 text-yellow-400" />, title: "Remote Access", desc: "Work anywhere with secure cloud apps." },
              { icon: <Database className="w-10 h-10 text-pink-400" />, title: "Business Continuity", desc: "Cloud backup and recovery ensure uptime." },
              { icon: <Cloud className="w-10 h-10 text-blue-400" />, title: "Future Ready", desc: "Future-ready infrastructure for innovation and expansions." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-[#111a3a]/60 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/60 shadow-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      {/* </section> */}

      {/* ========== HOW WE WORK SECTION ========== */}
      <section className="bg-gradient-to-b from-[#0a0f2b] via-[#111c44] to-[#0a0f2b]  text-White py-20 px-6 text-center font-poppins">
        <h2 className="text-4xl font-bold mb-12">
          Types of <span className="text-yellow-500">Cloud Computing</span> Services We Offer
        </h2>

        {/* Timeline */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 relative">
          {steps.map((s) => (
            <div
              key={s.step}
              className={`flex flex-col items-center cursor-pointer ${
                current === s.step ? "text-yellow-600 scale-110" : "text-gray-600"
              } transition-all`}
              onClick={() => setCurrent(s.step)}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full font-bold text-lg border-4 ${
                  current === s.step ? "bg-yellow-300 border-yellow-500" : "bg-gray-200 border-gray-300"
                }`}
              >
                {s.step}
              </div>
              <p className="mt-2 text-sm font-medium w-24">{s.title}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-10">
          <div className="flex-1 text-left">
  <h3 className="text-2xl font-semibold mb-4">
    {steps[current - 1].title}
  </h3>

  <p className="text-white mb-6">
    {steps[current - 1].text}
  </p>

  <ul className="space-y-3 mb-6">
    {steps[current - 1].points?.map((point, index) => (
      <li
        key={index}
        className="flex items-center gap-3 text-gray-200 text-lg"
      >
        <span className="text-cyan-400 text-xl">✔</span>
        {point}
      </li>
    ))}
  </ul>
</div>
          <div className="flex-1">
            <img
              src={steps[current - 1].img}
              alt={steps[current - 1].title}
              className="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-10 gap-6">
          <button
            onClick={prevStep}
            className="bg-gray-800 text-white w-10 h-10 rounded-full hover:bg-yellow-500 transition"
          >
            ‹
          </button>
          <button
            onClick={nextStep}
            className="bg-gray-800 text-white w-10 h-10 rounded-full hover:bg-yellow-500 transition"
          >
            ›
          </button>
        </div>
      </section>
          <section className="relative bg-gradient-to-b from-[#0a0f2b] via-[#111c44] to-[#0a0f2b] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* ---------- Left Side (Text Content) ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose{" "}
<span
  onClick={() => navigate("/#home2")}
  className="text-yellow-500 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
?
        </h2>

        {/* Yellow line + arrow */}
        <div className="relative w-56 h-1 bg-yellow-400 mb-8">
          <ArrowRight className="absolute -right-6 -top-2 text-yellow-500" size={24} />
        </div>

       <p className="text-gray-200 text-lg leading-relaxed mb-6">
  Choosing the right cloud partner is critical for your business success. At{" "}
  <span
    onClick={() => navigate("/#home2")}
    className="font-semibold text-yellow-600 cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>, we combine technical expertise with local market understanding
  to deliver the best cloud computing services in Hyderabad.
</p>

<p className="text-gray-200 text-lg leading-relaxed mb-8">
  We stand out because we focus on results, reliability, and long-term partnerships.
</p>

<h3 className="text-2xl font-semibold text-yellow-400 mb-6">
  Key Reasons to Choose Us
</h3>

<ul className="space-y-4 text-gray-200 text-lg">
  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    Expertise in cloud computing services in Hyderabad with proven experience
  </li>

  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    Strong local presence in Kukatpally, KPHB, and Hyderabad
  </li>

  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    Customized cloud solutions based on your business needs
  </li>

  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    Affordable pricing with maximum ROI
  </li>

  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    24/7 technical support and monitoring
  </li>

  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    Secure and scalable cloud infrastructure
  </li>

  <li className="flex items-start gap-3">
    <span className="text-cyan-400 text-xl">✔</span>
    Fast deployment and seamless migration services
  </li>
</ul>

<p className="text-gray-200 text-lg leading-relaxed mt-8">
  We don’t just provide services — we help your business grow with powerful
  and reliable cloud technology.
</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/contact")}
          className="mt-6 px-8 py-3 text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-md transition"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* ---------- Right Side (Image) ---------- */}
      {/* ---------- Right Side (Floating Image) ---------- */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="md:w-1/2 flex justify-center"
>
  <motion.img
    src={chooseImg}
    alt="Why Choose Maxzen.Tech"
    className="rounded-2xl shadow-xl w-full max-w-md object-cover"
    animate={{ y: [0, -20, 0] }} // 👈 Floating motion
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>

    </section>
    {/* ================= INDUSTRIES WE SERVE ================= */}

<section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0f2b] via-[#111c44] to-[#0a0f2b] overflow-hidden">

  <div className="max-w-7xl mx-auto relative z-10">

```
<motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
>
  Industries We Serve
</motion.h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

  {[
    {
      title: "Startups and IT companies",
      icon: <FaRocket />,
    },
    {
      title: "E-commerce platforms",
      icon: <FaShoppingCart />,
    },
    {
      title: "Healthcare and financial services",
      icon: <FaHeartbeat />,
    },
    {
      title: "Real estate businesses",
      icon: <FaBuilding />,
    },
    {
      title: "Educational institutions",
      icon: <FaGraduationCap />,
    },
    {
      title: "Small and medium enterprises",
      icon: <FaBriefcase />,
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:border-cyan-400/50 transition-all duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-2xl text-white shadow-lg">
          {item.icon}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {item.title}
        </h3>

      </div>
    </motion.div>
  ))}
</div>  </div>
</section>

{/* ================= OUR PROCESS ================= */}

<section className="relative py-24 px-6 md:px-16 bg-[#0b112e]">

  <div className="max-w-7xl mx-auto">

```
<motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent"
>
  Our Cloud Service Process
</motion.h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

  {[
    {
      step: "01",
      title: "Consultation",
      desc: "We analyze your business requirements and goals to design the right cloud strategy.",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      desc: "We create a scalable and secure cloud architecture.",
    },
    {
      step: "03",
      title: "Deployment",
      desc: "We implement cloud solutions efficiently with minimal disruption.",
    },
    {
      step: "04",
      title: "Optimization & Support",
      desc: "We continuously monitor and optimize performance for long-term success.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="relative bg-gradient-to-b from-[#111c44] to-[#0a0f2b] border border-white/10 rounded-3xl p-8 shadow-xl hover:border-cyan-400/50 transition-all duration-300"
    >
      <div className="absolute -top-5 left-6 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
        {item.step}
      </div>

      <div className="pt-10">
        <h3 className="text-2xl font-bold text-white mb-4">
          {item.title}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>
```

  </div>
</section>

{/* ================= CLOUD SOLUTIONS NEAR ME ================= */}

<section className="relative py-24 px-6 md:px-16 bg-gradient-to-r from-[#0a0f2b] via-[#151f4d] to-[#0a0f2b]">

  <div className="max-w-6xl mx-auto text-center">

```
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
>
  Looking for Cloud Solutions Near Me in Hyderabad?
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
>
  Maxzen.tech provides trusted and professional cloud services in Hyderabad,
  Kukatpally, and KPHB. Our team understands local business needs and delivers
  customized cloud strategies that help you scale faster and operate more efficiently.
</motion.p>
```

  </div>
</section>

{/* ================= INTERNAL LINKS ================= */}

<section className="py-20 px-6 md:px-16 bg-[#0b112e]">

  <div className="max-w-5xl mx-auto">

```
<h2 className="text-4xl font-bold text-center mb-14 text-white">
  Explore Our Services
</h2>

<div className="grid md:grid-cols-3 gap-8">

  {[
    {
      title: "SEO Services",
      link: "/seoservicesinhyderabad",
    },
    {
      title: "Web Development",
      link: "/webdevelopement",
    },
    {
      title: "Digital Marketing",
      link: "/DigitalMarketing",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">
        {item.title}
      </h3>

      <button
        onClick={() => navigate(item.link)}
        className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-white font-semibold hover:scale-105 transition"
      >
        Explore
      </button>
    </motion.div>
  ))}
</div>
```

  </div>
</section>

{/* ================= CTA ================= */}

<section className="relative py-28 px-6 md:px-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 overflow-hidden">

  <div className="max-w-5xl mx-auto text-center">

```
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
>
  Ready to Transform Your Business with Cloud?
</motion.h2>

<p className="text-lg text-gray-300 leading-relaxed mb-10">
  Get the most reliable cloud computing services in Hyderabad with Maxzen.tech.
  Contact us today for a free consultation and take your business to the next level
  with scalable cloud solutions.
</p>

<p className="text-xl text-white font-medium mb-10">
  Boost performance, reduce costs, and grow faster with our expert cloud services.
</p>

<button
  onClick={() => navigate("/contact")}
  className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-lg hover:scale-105 transition"
>
  Get Free Consultation
</button>


  </div>
</section>

        </section>
        <Footer/>
    </>
  );
};

export default CloudPage;
