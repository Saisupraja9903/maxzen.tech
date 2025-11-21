import React, { useState } from "react";
import { motion } from "framer-motion";
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


const CloudPage = () => {
  // State for timeline steps
  const steps = [
    { step: 1, title: "Infrastructure as a Service (IaaS)", text: " With IaaS, your business can instantly tap into virtualized servers, storage, and networking—all available on demand. Instead of investing in costly hardware, you can scale resources up or down as needed, giving you flexibility and better cost control.", img: cc2 },
    { step: 2, title: "Platform as a Service (PaaS)", text: "PaaS offers a ready-to-use development environment where teams can create, test, and launch applications without managing the underlying infrastructure. This service allows businesses to accelerate innovation, reduce complexity, and improve time-to-market.", img: cc4 },
    { step: 3, title: "Software as a Service (SaaS)", text: "With SaaS applications, companies can access powerful software tools directly through the cloud without worrying about installation, updates, or maintenance. From CRM systems to productivity apps, SaaS helps businesses stay efficient, connected, and agile.", img: cc3 },
    { step: 4, title: "Hybrid & Multi-Cloud Solutions", text: "Choose the best of both worlds with Hybrid and Multi-Cloud services. Maxzen.Tech combines the security of private cloud with the scalability of public cloud, giving businesses flexible workflows, better data management, and optimized costs.", img: cc5},
    { step: 5, title: "Cloud-Powered DevOps", text: "Supercharge your development with DevOps on Cloud. We set up CI/CD pipelines, automation, and monitoring tools to help teams deliver applications faster and with fewer errors. This means faster product launches, continuous improvement, and higher efficiency.", img: cc6 },
  ];

  const [current, setCurrent] = useState(1);

  const nextStep = () => setCurrent(current === steps.length ? 1 : current + 1);
  const prevStep = () => setCurrent(current === 1 ? steps.length : current - 1);

   useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <>
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

          <motion.h2 className="text-2xl mt-6 font-semibold text-yellow-300">Maxzen.Tech</motion.h2>
          <motion.p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed">
            offers secure, scalable, and business-ready cloud solutions tailored for startups and enterprises.
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
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          >
            Cloud Computing Services in Hyderabad – Maxzen.Tech
          </motion.h2>

          <div className="text-lg leading-relaxed space-y-6 text-gray-300">
            <p>
              Cloud computing allows businesses to access IT resources—like servers, storage, databases, and applications—through the internet instead of investing in expensive hardware. It reduces cost, improves security, and helps companies scale faster.
            </p>
            <p>
              In today’s fast-paced digital world, <span className="text-cyan-400 font-semibold">cloud computing services in Hyderabad</span> by Maxzen.Tech empower startups, small businesses, and enterprises to scale effortlessly, reduce costs, and improve accessibility.
            </p>
            <p>
              At <span className="text-purple-400 font-semibold">Maxzen.Tech</span>, we provide the best cloud services, from migration to automation and DevOps adoption.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-10 h-10 text-cyan-400" />, title: "Cost Savings", desc: "No need to invest in expensive hardware." },
              { icon: <RefreshCw className="w-10 h-10 text-purple-400" />, title: "Scalability", desc: "Easily scale up or down as per requirements." },
              { icon: <ShieldCheck className="w-10 h-10 text-green-400" />, title: "Security", desc: "Protect data with advanced cloud security." },
              { icon: <Users className="w-10 h-10 text-yellow-400" />, title: "Remote Access", desc: "Work anywhere with secure cloud apps." },
              { icon: <Database className="w-10 h-10 text-pink-400" />, title: "Business Continuity", desc: "Cloud backup and recovery ensure uptime." },
              { icon: <Cloud className="w-10 h-10 text-blue-400" />, title: "Future Ready", desc: "Adopt scalable and innovative technologies." },
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
            <h3 className="text-2xl font-semibold mb-4">{steps[current - 1].title}</h3>
            <p className="text-white mb-6">{steps[current - 1].text}</p>
            {/* <button className="bg-yellow-400 text-white px-5 py-2 font-semibold rounded-lg hover:bg-white hover:text-yellow-400 transition">
              Know More
            </button> */}
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
          Why Choose <span className="text-yellow-500">Maxzen.Tech?</span>
        </h2>

        {/* Yellow line + arrow */}
        <div className="relative w-56 h-1 bg-yellow-400 mb-8">
          <ArrowRight className="absolute -right-6 -top-2 text-yellow-500" size={24} />
        </div>

        <p className="text-gray-200 text-lg leading-relaxed mb-6">
          Choosing the right cloud partner can make a huge difference in business growth. 
          At <span className="font-semibold text-yellow-600">Maxzen.Tech</span>, we provide
          <span className="font-semibold"> cloud computing services in Hyderabad</span>, KPHB, and Kukatpally 
          with a strong focus on affordability, performance, and security. 
          Unlike generic providers, we design and deploy customized cloud solutions that perfectly match 
          your business requirements.
        </p>

        <p className="text-gray-200 text-lg leading-relaxed mb-6">
          Our services in India stand out because we combine low-cost cloud solutions with expert troubleshooting, 
          smooth migration, and round-the-clock support. Whether you are a startup, small business, or enterprise, 
          <span className="font-semibold text-yellow-600"> Maxzen.Tech</span> ensures your cloud journey is simple, 
          cost-effective, and future-ready. That’s why businesses across Hyderabad and all over India trust us for 
          major cloud computing services that deliver real results.
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
        </section>
        <Footer/>
    </>
  );
};

export default CloudPage;
