// import React from "react";
// import React from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFileCode,
  FaMapMarkedAlt,
  FaLink,
  FaTachometerAlt,
  FaBullseye,
  FaUsers,
  FaBullhorn,
  FaChartLine,
  FaMousePointer,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  
} from "react-icons/fa";
import logoo5 from "../assests/logoo5.jpg";
import seoBlog2 from "../assests/seo-blog2.jpg";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const PremiumSEOContentAnimated = () => {
  const [hoveredService, setHoveredService] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const approachCards = [
    {
      icon: <FaSearch className="text-blue-500" size={32} />,
      title: "In-Depth Keyword Research",
      description:
        "We focus on your niche and location to find keywords that drive targeted traffic.",
      hoverClass: "hover:shadow-blue-200",
    },
    {
      icon: <FaFileCode className="text-green-500" size={32} />,
      title: "Comprehensive On-Page SEO",
      description:
        "Optimizing every element on your service pages for maximum search visibility.",
      hoverClass: "hover:shadow-green-200",
    },
    {
      icon: <FaMapMarkedAlt className="text-purple-500" size={32} />,
      title: "Location-Specific Landing Pages",
      description:
        "Creating tailored landing pages that resonate with and convert local audiences.",
      hoverClass: "hover:shadow-purple-200",
    },
    {
      icon: <FaLink className="text-orange-500" size={32} />,
      title: "Building Local Backlinks",
      description:
        "Acquiring relevant, high-authority backlinks from reputable local sites.",
      hoverClass: "hover:shadow-orange-200",
    },
    {
      icon: <FaTachometerAlt className="text-red-500" size={32} />,
      title: "Speed, Mobile & Technical SEO",
      description:
        "Ensuring your site is fast, mobile-friendly, and technically sound for better rankings.",
      hoverClass: "hover:shadow-red-200",
    },
    {
      icon: <FaBullseye className="text-teal-500" size={32} />,
      title: "Conversion-First Design",
      description:
        "Combining SEO with a design strategy that turns your traffic into revenue.",
      hoverClass: "hover:shadow-teal-200",
    },
  ];

  const servicesList = [
    {
      icon: <FaMapMarkedAlt className="text-blue-500" size={24} />,
      title: "Local SEO & Google Maps Optimization",
      description: "Get found in local searches and drive in-store visits or service inquiries with optimized listings.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaGlobe className="text-green-500" size={24} />,
      title: "Website Design & Optimization",
      description: "We create high-performance, mobile-optimized websites that rank well and drive real conversions.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaUsers className="text-purple-500" size={24} />,
      title: "Organic Lead Generation",
      description: "Attract and engage your ideal audience using targeted content marketing and on-site optimization.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaBullhorn className="text-orange-500" size={24} />,
      title: "Social Media Marketing",
      description: "From content creation to ad campaigns, we build and grow your brand presence across all major platforms.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaChartLine className="text-red-500" size={24} />,
      title: "Performance Marketing & Conversion Optimization",
      description: "Track, test, and optimize your marketing funnel to increase conversions and reduce cost per lead.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FaMousePointer className="text-teal-500" size={24} />,
      title: "Targeted Google & Meta Ads That Drive Results",
      description: "Launch data-driven PPC campaigns with measurable ROI, bringing in qualified traffic instantly.",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <Header/>
   
     <section className="relative w-full bg-gray-200 py-16 px-4 md:px-20 overflow-hidden">

      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col md:flex-row items-stretch mb-24 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        {/* Angled background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100 to-purple-100 transform -skew-y-3 -z-10"></div>

        <motion.img
          src={logoo5}
          alt="Maxzen SEO Hero"
          className="w-80 md:w-1/2 h-80 object-cover rounded-3xl shadow-2xl"
          variants={fadeInRight}
        />

        <motion.div
          className="md:w-1/2 h-full bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col justify-center"
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SEO Agency Near Me — Boost Your Local Rankings with Maxzen.tech
          </h1>
          <p className="text-gray-700 text-lg">
            Are you a business owner searching for a reliable SEO agency near me
            to improve your online visibility and attract local customers? You're
            in the right place. At Maxzen.tech, we specialize in local SEO
            services, website optimization, and digital marketing strategies that
            put your business on the map—literally.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2: Floating card over image */}
      <motion.div
        className="relative flex flex-col md:flex-row items-stretch gap-8 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInRight}
      >
        <motion.img
          src={seoBlog2}
          alt="Local SEO Illustration"
          className="w-120 md:w-1/2 h-120 object-cover rounded-3xl shadow-2xl"
          variants={fadeInLeft}
        />

        <motion.div
          className="md:w-1/2 h-full flex items-center relative"
          variants={fadeInUp}
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              📍 Why 2025 Is the Year to Focus on Local SEO
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-left">
              <li>📍Consumers rely more than ever on local searches to find nearby services.</li>
              <li>📱Mobile searches like “near me” continue to grow rapidly in 2025.</li>
              <li>🔍Google’s algorithm updates are prioritizing local relevance and user experience.</li>
              <li>🏆Ranking locally builds trust and increases the chances of converting nearby customers.</li>
              <li>🚀Local SEO delivers high ROI by targeting people already looking for your services.</li>
              <li>📊Businesses optimizing for local search are outperforming competitors in their area.</li>
            </ul>
            <p className="text-gray-700 text-left">
              We optimize your Google Business Profile, build high-quality local backlinks, and create geo-targeted content to attract nearby customers who are actively searching for your services.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Our Approach Section */}
      <motion.div
        className="text-center mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Approach to SEO Success
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
          At Maxzen.tech, our approach is built on a foundation of proven SEO
          tactics tailored to your local market. We combine these strategies with a
          conversion-first mindset because visibility means nothing without
          results.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {approachCards.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl ${card.hoverClass} transition-shadow duration-300 flex flex-col items-center text-center`}
              variants={cardItemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* What Services We Offer Section */}
      <motion.div
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Services Do We Offer?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
            At Maxzen.tech, we offer complete digital marketing and SEO solutions that go beyond just rankings. We aim to maximize your visibility, generate quality leads, and deliver measurable results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Service List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredService(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  hoveredService === index
                    ? "bg-white shadow-2xl"
                    : "bg-gray-100 hover:bg-white"
                }`}
                variants={cardItemVariants}
              >
                <div className="flex items-center gap-4">
                  {service.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Image Display */}
          <div className="w-full lg:w-1/2 h-96 relative hidden lg:block">
            {servicesList.map((service, index) => (
              <motion.img
                key={index}
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto mt-12">
          <p className="text-gray-700 text-lg">Each strategy we implement is based on your goals, your industry, and your local audience behavior. Maxzen.Tech brings hot leads and foot traffic directly to your business. With the right local SEO strategy, you don’t need to chase customers—they come to you.</p>
        </div>
      </motion.div>

      {/* Decorative Shapes */}
      <div className="absolute top-[-50px] right-[-100px] w-72 h-72 bg-purple-200 rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-[-50px] left-[-80px] w-64 h-64 bg-blue-200 rounded-full opacity-30 -z-10"></div>
      {/* Final Thoughts / Why Choose Maxzen.tech Section with Wavy Background */}
<motion.div
  className="relative mb-24 overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Wavy SVG Background */}
  <div className="absolute inset-0 -z-20">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        fill="#CDE6FF"
        fillOpacity="0.5"
        d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
      <path
        fill="#A3D8FF"
        fillOpacity="0.5"
        d="M0,128L80,138.7C160,149,320,171,480,176C640,181,800,171,960,160C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>

  <div className="text-center mb-12 relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      🌟 Final Thoughts: Why Choose Maxzen.tech for Your Business Growth?
    </h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
      At Maxzen.tech, we don’t believe in one-size-fits-all SEO packages. Tailored Marketing Strategies for Your Unique Business. Whether you need a hyper-local SEO campaign or a full digital marketing solution, we create personalized plans to meet your exact needs.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
    {[
      {
        icon: <FaSearch className="text-blue-500 w-10 h-10" />,
        title: "Local Search Expertise",
        description: "We understand local search trends and buyer behavior to target your ideal customers.",
        bg: "bg-gradient-to-r from-blue-100 to-blue-200",
      },
      {
        icon: <FaFileCode className="text-green-500 w-10 h-10" />,
        title: "SEO & Content Marketing Skills",
        description: "Our team is skilled in both technical SEO and creative content marketing.",
        bg: "bg-gradient-to-r from-green-100 to-green-200",
      },
      {
        icon: <FaChartLine className="text-red-500 w-10 h-10" />,
        title: "Data-Driven Decisions",
        description: "Smarter, Data-Driven Growth for Traffic & ROI with measurable results.",
        bg: "bg-gradient-to-r from-red-100 to-red-200",
      },
      {
        icon: <FaUsers className="text-purple-500 w-10 h-10" />,
        title: "Ongoing Support & Strategy",
        description: "We provide ongoing optimization to stay ahead of Google updates and ensure growth.",
        bg: "bg-gradient-to-r from-purple-100 to-purple-200",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className={`p-6 rounded-3xl shadow-2xl ${item.bg} flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-700 text-sm">{item.description}</p>
      </motion.div>
    ))}
  </div>

  {/* Decorative floating shapes */}
  <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-pink-200 rounded-full opacity-30 animate-pulse -z-10"></div>
  <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-yellow-200 rounded-full opacity-30 animate-pulse -z-10"></div>
</motion.div>
{/* Simple & Elegant Contact Section */}
<motion.section
  className="py-20 bg-white text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    📞 Let’s Talk—Your Local SEO Journey Starts Now
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
    You searched for an <strong>SEO agency near me</strong> — now take the next step.
    Let’s grow your business together with powerful, location-based strategies that truly work.
  </p>

  {/* Icon Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {[
      {
        icon: <FaPhone className="w-8 h-8 text-cyan-600" />,
        title: "Call Us",
        desc: "+91 90599 91807",
        bg: "bg-cyan-50",
      },
      {
        icon: <FaGlobe className="w-8 h-8 text-fuchsia-600" />,
        title: "Website",
        desc: "www.maxzen.tech",
        bg: "bg-fuchsia-50",
      },
      {
        icon: <FaEnvelope className="w-8 h-8 text-amber-600" />,
        title: "Email",
        desc: "info@maxzen.tech",
        bg: "bg-amber-50",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className={`flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg ${item.bg} cursor-pointer transform transition-transform duration-300 hover:scale-105`}
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-1 text-gray-800">{item.title}</h3>
        <p className="text-sm md:text-base text-gray-700">{item.desc}</p>
      </motion.div>
    ))}
  </div>

  <p className="text-gray-600 mt-8 text-base">
    🌐 <a href="https://www.maxzen.tech" className="text-blue-600 font-medium hover:underline">www.maxzen.tech</a> <br />
    📧 <a href="mailto:info@maxzen.tech" className="text-blue-600 font-medium hover:underline">info@maxzen.tech</a>
  </p>
</motion.section>
 {/* Social Media Logos */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://www.facebook.com/people/MaxzenTech/61574235826967/" className="text-blue-600 hover:text-orange-800 transition-colors text-2xl"><FaFacebookF /></a>
          <a href="https://x.com/maxzen_tech" className="text-blue-400 hover:text-orange-600 transition-colors text-2xl"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/maxzen-tech/" className="text-blue-700 hover:text-orange-900 transition-colors text-2xl"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/maxzen.tech/?hl=en" className="text-pink-500 hover:text-orange-700 transition-colors text-2xl"><FaInstagram /></a>
        </div>
        



    </section>
     <Footer/>
    </>
  );
};

export default PremiumSEOContentAnimated;