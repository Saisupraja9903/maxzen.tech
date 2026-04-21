import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaUsers, FaHandshake, FaChartLine, FaGlobeAmericas } from "react-icons/fa";
import sm1 from "../assests/sm1.jpg";
import sm2 from "../assests/sm2.avif";
import sm3 from "../assests/sm3.png"; 
import sm4 from "../assests/sm4.jpg";
import sm5 from "../assests/sm5.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { PiChartLineUpFill } from "react-icons/pi";
// import { TbDeviceMobileShare } from "react-icons/tb";
// import { BsLightbulb } from "react-icons/bs"; 
// import { IoRocket } from "react-icons/io5";
// import { FaFire } from "react-icons/fa6";
import { PiShootingStarDuotone } from "react-icons/pi";
import { TbTargetArrow} from "react-icons/tb";
// import { GiCommercialAirplane } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { FaEarthAfrica } from "react-icons/fa6";

// ✅ Using React icons instead of emojis
const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    accent: "bg-gradient-to-br from-pink-500 to-yellow-400",
    text: "Visual-first content & Reels to build brand affinity.",
    icon: <FaInstagram className="text-pink-500 text-3xl" />,
    link: "https://www.instagram.com/maxzen.tech/", // ✅ Instagram link
  },
  {
    id: "facebook",
    name: "Facebook",
    accent: "bg-gradient-to-br from-blue-600 to-blue-400",
    text: "Community building and highly-targeted paid campaigns.",
    icon: <FaFacebookF className="text-blue-600 text-3xl" />,
    link:"https://www.facebook.com/people/MaxzenTech/61574235826967/", // ✅ Facebook link
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    accent: "bg-gradient-to-br from-slate-700 to-blue-600",
    text: "B2B thought leadership and lead generation funnels .",
    icon: <FaLinkedinIn className="text-blue-700 text-3xl" />,
    link: "https://www.linkedin.com/company/maxzen-tech/", // ✅ LinkedIn link
  },
  {
    id: "youtube",
    name: "YouTube",
    accent: "bg-gradient-to-br from-red-600 to-red-400",
    text: "Long-form content, tutorials & ad funnels that convert.",
    icon: <FaYoutube className="text-red-600 text-3xl" />,
    link: "https://www.youtube.com/@maxzentech", // ✅ YouTube link
  },
];

const FloatingIcon = ({ icon: Icon, color, top, left, duration }) => (
  <motion.div
    className={`absolute text-${color} text-4xl opacity-40`}
    style={{ top, left }}
    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
    <Icon />
  </motion.div>
);

const SocialMediaMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   const navigate = useNavigate();

   const whatsappNumber = "918498989844";

const handleWhatsApp = () => {
  const text = "Hello, I want a free consultation";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

  return (
    <><Header/>
    
    <section className="relative w-full overflow-hidden py-20 bg-white text-gray-800">
      {/* 🌈 FLOATING COLORFUL ICONS */}
      {/* 🌈 FLOATING COLORFUL ICONS */}
<FloatingIcon icon={FaFacebookF} color="blue-600" top="10%" left="90%" duration={6} />
<FloatingIcon icon={FaFacebookF} color="blue-600" top="40%" left="15%" duration={7} />
{/* <FloatingIcon icon={FaFacebookF} color="blue-600" top="7%" left="22%" duration={7} /> */}
<FloatingIcon icon={FaInstagram} color="pink-500" top="1%" left="85%" duration={8} />
<FloatingIcon icon={FaInstagram} color="pink-500" top="78%" left="70%" duration={9} />

<FloatingIcon icon={FaLinkedinIn} color="blue-500" top="10%" left="5%" duration={7} />
<FloatingIcon icon={FaLinkedinIn} color="blue-500" top="40%" left="60%" duration={8} />

<FloatingIcon icon={FaYoutube} color="red-500" top="2%" left="70%" duration={5} />
<FloatingIcon icon={FaYoutube} color="red-500" top="80%" left="25%" duration={6} />

<FloatingIcon icon={FaTwitter} color="sky-400" top="10%" left="50%" duration={9} />
<FloatingIcon icon={FaTwitter} color="sky-400" top="20%" left="40%" duration={10} />

      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 🌟 HEADER SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-500"> Social Media Marketing Agency in Hyderabad|{" "}
              <span
  onClick={() => navigate("/#home2")}
  className="text-gray-500 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>
            </h1>

            <p className="mt-5 text-lg text-gray-700 max-w-2xl text-left">

In today’s fast-moving digital world, every business needs a strong online presence to grow. If you are looking for a reliable social media marketing agency in Hyderabad, Mazen.tech is your trusted partner for generating leads, increasing brand awareness, and driving real business growth.

We are located near Manjeera Trinity Corporate, close to KPHB Metro, JNTU, Kukatpally, Hyderabad – 500072. We help startups, local businesses, and enterprises build a powerful presence on platforms like Instagram, Facebook, LinkedIn, and YouTube.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button 
  onClick={handleWhatsApp}
  className="px-6 py-3 rounded-full bg-gray-600 text-white font-semibold shadow-lg hover:scale-[1.03] transition">
  Get Free Consultation
</button>

              {/* <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                Contact Us
              </a> */}
            </div>
          </motion.div>

          {/* 💡 RIGHT SIDE INFO BOX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-400 mb-2 text">
               Social media strategy planning
              </h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-left">
                <li>Content creation including posts, reels, and creatives.</li>
                <li>Social media management.</li>
                <li>Paid ads including Meta Ads and Instagram Ads.</li>
                <li>Audience targeting and retargeting.</li>
                <li>Performance tracking and analytics.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 💬 PLATFORM CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {platforms.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition"
            >
              {/* gradient accent border */}
              <div className={`absolute inset-x-0 top-0 h-2 ${p.accent}`}></div>

              <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-center justify-between">
  <div className="text-3xl">{p.icon}</div>

  {/* ✅ Clickable name button */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.open(p.link, "_blank")}
    className="cursor-pointer px-3 py-1.5 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
  >
    {p.name}
  </motion.button>
</div>



                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {p.name} Marketing
                </h3>
                <p className="mt-3 text-sm text-gray-700 flex-1">{p.text}</p>

                
              </div>
            </motion.div>
          ))}
        </div>

        {/* 📈 GROWTH SECTION */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="rounded-2xl p-10 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 shadow-md"
>
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-600 mb-6 text-center">
      Why Your Business Needs Social Media Marketing
    </h3>

  



<p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
  Today, most people spend hours on mobile phones and social platforms. Whether it is a small shop or a large company, 
  social media helps you reach your audience directly.
  {/* {" "}
  <span
    onClick={() => navigate("/#home2")}
    className="font-semibold text-blue-600 cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>{" "}
  is your go-to Social-Media-Marketing-Agency-in-Hyderabad
. */}
</p>

<p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
  At{" "}
  <span
    onClick={() => navigate("/#home2")}
    className="font-semibold text-blue-600 cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>
  , we don’t just create posts — we build strategies that increase engagement,
  generate genuine leads, and establish a strong online presence for your brand.
  Without social media marketing, businesses miss out on valuable growth opportunities.
  
</p>
 <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-6 text-center">
      Benefits of social media marketing
    </h3>



    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div className="flex items-start gap-3">
        <span className="text-blue-500 text-4xl"><PiShootingStarDuotone /></span>
        <p className="text-gray-800 text-lg  -ml-1">
          Generate leads and sales
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-purple-500 text-4xl"><TbTargetArrow /></span>
        <p className="text-gray-800 text-lg -ml-1">
             Reach targeted audience.
        </p>
      </div>
 
 
      <div className="flex items-start gap-3">
        <span className="text-green-500 text-4xl"><FaHandshake /></span>
        <p className="text-gray-800 text-lg">
          Engage with customers.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-pink-500 text-4xl"><PiChartLineUpFill /></span>
        <p className="text-gray-800 text-lg">
          
Increase brand visibility
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-orange-500 text-4xl"><FaUsers />
</span>
        <p className="text-gray-800 text-lg -ml-2">
          Boosts sales with targeted ad campaigns.
        </p>
      </div>
    </div>
  </div>
   {/* <h3 className="text-lg md:text-lg font-bold text-gray-600 mb-6 text-left">
   Without social media marketing, businesses miss out on valuable growth opportunities.

    </h3> */}
</motion.div>


        {/* 🎯 FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
           Best Social Media Marketing Agency in Hyderabad{" "}
{/* <span
  onClick={() => navigate("/#home2")}
  className="text-gray-600 cursor-pointer hover:underline"
>
  Maxzen.Tech
</span>, you gain a growth partner. */}
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-3 text-lg leading-relaxed text-left">
           Maxzen.tech is recognized as the best social media marketing agency in Hyderabad because we focus on results, not just activity.
          </p>
             <p className="text-gray-700 max-w-3xl mx-auto mb-3 text-lg leading-relaxed text-center">
             We understand the Hyderabad market, especially areas like Kukatpally, KPHB, and JNTU, which helps us deliver better results.
         
           <ul className="text-gray-700 list-disc list-inside space-y-2 text-left mt-4">
                <li>Content creation including posts, reels, and creatives.</li>
                <li>Social media management.</li>
                <li>Paid ads including Meta Ads and Instagram Ads.</li>
                <li>Audience targeting and retargeting.</li>
                <li>Performance tracking and analytics.</li>
              </ul>
              </p>

           

          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <button 
             onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-gray-500 text-white font-semibold hover:scale-[1.02] transition">
              Book Free Strategy Call
            </button>
            {/* <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
              See Case Studies
            </button> */}
          </div>
        </motion.div>
      </div>
<h2 className="text-4xl font-extrabold text-gray-900 mb-3 mt-12 text-center">
  Our Social Media Marketing Services
</h2>

<p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-center">
  As one of the leading social media marketing companies in Hyderabad, we provide complete end-to-end solutions.
</p>

{/* ✅ FIXED GRID */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2">

  {/* CARD 1 */}
  <div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition w-full">
    <div className="flex items-center gap-2 mb-2">
      <TbTargetArrow className="text-2xl text-blue-500" />
      <h3 className="text-base font-semibold text-gray-900">Social Media Strategy</h3>
    </div>
    <p className="text-gray-600 text-sm leading-snug">
      We create a custom strategy based on your business goals, target audience, and competitors.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition w-full">
    <div className="flex items-center gap-2 mb-2">
      <FaInstagram className="text-2xl text-pink-500" />
      <h3 className="text-base font-semibold text-gray-900">Content Creation</h3>
    </div>
    <p className="text-gray-600 text-sm leading-snug">
      We design engaging posts, reels, and creatives that attract attention and increase engagement.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition w-full">
    <div className="flex items-center gap-2 mb-2">
      <FaUsers className="text-2xl text-green-500" />
      <h3 className="text-base font-semibold text-gray-900">Social Media Management</h3>
    </div>
    <p className="text-gray-600 text-sm leading-snug">
      Daily posting, scheduling, and handling customer interactions professionally.
    </p>
  </div>

  {/* CARD 4 */}
  <div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition w-full">
    <div className="flex items-center gap-2 mb-2">
      <PiChartLineUpFill className="text-2xl text-orange-500" />
      <h3 className="text-base font-semibold text-gray-900">Paid Advertising</h3>
    </div>
    <p className="text-gray-600 text-sm leading-snug">
      We run high-converting ad campaigns to generate leads and sales.
    </p>
  </div>

  {/* CARD 5 */}
  <div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition w-full">
    <div className="flex items-center gap-2 mb-2">
      <FaGlobeAmericas className="text-2xl text-purple-500" />
      <h3 className="text-base font-semibold text-gray-900">Audience Targeting</h3>
    </div>
    <p className="text-gray-600 text-sm leading-snug">
      Reach the right people using advanced targeting techniques.
    </p>
  </div>

  {/* CARD 6 */}
  <div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition w-full">
    <div className="flex items-center gap-2 mb-2">
      <IoChatboxEllipsesOutline className="text-2xl text-blue-600" />
      <h3 className="text-base font-semibold text-gray-900">Analytics and Reporting</h3>
    </div>
    <p className="text-gray-600 text-sm leading-snug">
      We continuously analyze and optimize campaigns to achieve peak results.
    </p>
  </div>

</div>

{/* CTA */}
{/* <div className="mt-14 flex flex-wrap justify-center gap-4">

  <button       
    onClick={handleWhatsApp}
    className="px-8 py-3 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-800 transition"
  >
    Get More Leads
  </button>

  <button
    onClick={handleWhatsApp}
    className="px-8 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
  >
    WhatsApp Us
  </button>

  <button
    onClick={handleWhatsApp}
    className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
  >
    Free Consultation
  </button>

</div> */}
      {/* 🚀 ABOUT OUR SOCIAL MEDIA MARKETING SECTION */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 mt-12 max-w-6xl mx-auto px-6 py-12 bg-gradient-to-br from-[#f5f9ff] to-[#eef3ff] rounded-3xl shadow-xl border border-gray-200 text-center"
>
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
   Social Media Marketing for Local Businesses in Hyderabad
  </h2>

 <h3 className="text-2xl font-semibold text-gray-600 mb-6">
 If you run a business in Kukatpally, KPHB, or nearby areas, local targeting is key to success.
We help you
{/* {" "}
  <span
    onClick={() => navigate("/#home2")}
    className="cursor-pointer hover:underline"
  >
    Maxzen.Tech
  </span>{" "} */}

</h3>

  <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed mb-10">
  Social media is not just about posting – it’s about building trust, engaging
  your audience, and turning visitors into loyal customers.
   {/* At{" "}
  <span
    onClick={() => navigate("/#home2")}
    className="font-semibold text-gray-600 cursor-pointer hover:underline"
  >
    Maxzen.Tech

  </span> */}
 Our local strategies ensure your business stands out in your area.
</p>

  <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-800 font-medium">

  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
    <div className="p-2 rounded-full bg-green-100 text-green-600 text-xl">
      <FaUsers />
    </div>
    <span>Reach nearby customers</span>
  </div>

  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
    <div className="p-2 rounded-full bg-blue-100 text-blue-600 text-xl">
      <FaHandshake />
    </div>
    <span>Generate local leads</span>
  </div>

  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
    <div className="p-2 rounded-full bg-orange-100 text-orange-500 text-xl">
      <FaChartLine />
    </div>
    <span>Increase store visits</span>
  </div>

  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
    <div className="p-2 rounded-full bg-purple-100 text-purple-600 text-xl">
      <FaGlobeAmericas />
    </div>
    <span>Improve brand awareness</span>
  </div>

</div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mt-10 flex justify-center"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={()=> navigate("/contact")}
      className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gray-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      Talk to Our Experts
      <motion.span
        whileHover={{
          y: -6,
          x: 4,
          rotate: -25,
          transition: { type: 'spring', stiffness: 250, damping: 10 },
        }}
        className="text-white text-2xl"
      >
       {/* <GiCommercialAirplane /> */}

      </motion.span>
    </motion.button>
  </motion.div>
</motion.div>
 <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
  Industries We Serve
</h2>

<p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-10 text-center">
  We provide services for
</p>

<div className="flex flex-wrap justify-center gap-4 text-gray-800 font-medium">

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    Real Estate
  </div>

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    Healthcare
  </div>

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    Education Institutes
  </div>

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    E-commerce
  </div>

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    Local Shops
  </div>

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    Startups and Small Businesses
  </div>

  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    Corporate Companies
  </div>

</div>

<p className="text-gray-600 text-center mt-10 italic">
  No matter your industry, we create strategies that work.
</p>

          {/* 📸 IMAGE GALLERY (6 images) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[sm1, sm2, sm3,sm4,sm5 ].map(
              (img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-2xl shadow-md border border-gray-100"
                >
                  <img
                    src={img}
                    alt={`SMM Service ${index + 1}`}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              )
            )}
          </div>

<div className="mt-20 max-w-6xl mx-auto px-6 text-center">

  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
    Our Process
  </h2>

  <p className="text-gray-700 mb-10">
    A simple and effective approach to grow your business
  </p>

  {/* STEPS */}
  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full max-w-[220px]">
      <h3 className="text-base font-semibold text-black mb-1">Step 1</h3>
      <p className="text-sm font-medium text-gray-800">Business Analysis</p>
      <p className="text-gray-600 text-sm mt-1">
        We understand your goals and target audience
      </p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full max-w-[220px]">
      <h3 className="text-base font-semibold text-black mb-1">Step 2</h3>
      <p className="text-sm font-medium text-gray-800">Strategy Planning</p>
      <p className="text-gray-600 text-sm mt-1">
        We create a customized marketing plan
      </p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full max-w-[220px]">
      <h3 className="text-base font-semibold text-black mb-1">Step 3</h3>
      <p className="text-sm font-medium text-gray-800">Execution</p>
      <p className="text-gray-600 text-sm mt-1">
        Content creation and ad campaigns
      </p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full max-w-[220px]">
      <h3 className="text-base font-semibold text-black mb-1">Step 4</h3>
      <p className="text-sm font-medium text-gray-800">Optimization</p>
      <p className="text-gray-600 text-sm mt-1">
        Continuous performance improvement
      </p>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full max-w-[220px]">
      <h3 className="text-base font-semibold text-black mb-1">Step 5</h3>
      <p className="text-sm font-medium text-gray-800">Reporting</p>
      <p className="text-gray-600 text-sm mt-1">
        Track results and return on investment
      </p>
    </div>

  </div>

  {/* CTA */}
  <div className="mt-12">
    <button
      onClick={handleWhatsApp}
      className="px-8 py-3 rounded-full bg-gray-700 text-white font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg transition"
    >
      Let’s Grow Your Business Today
    </button>
  </div>

</div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-24 max-w-6xl mx-auto px-6 py-14 bg-gray-100 rounded-3xl shadow-xl border border-gray-200"
>

  {/* 💰 PRICING */}
  <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
    Affordable Pricing for Every Business
  </h2>

  <p className="text-gray-700 text-center mb-6">
    We offer flexible pricing plans for
  </p>

  <div className="flex flex-wrap justify-center gap-4 mb-10">
    {["Startups","Small businesses","Medium companies","Enterprises"].map((item,i)=>(
      <div key={i} className="bg-white px-4 py-2 rounded-lg border border-gray-300 shadow-sm">
        {item}
      </div>
    ))}
  </div>

  <p className="text-gray-600 text-center mb-12">
    Our goal is to deliver maximum results at the best price.
  </p>


  {/* ⭐ WHY CHOOSE */}
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
    Why Mazen.tech is the Right Choice
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
    {[
      "Creative and innovative strategies",
      "Data-driven marketing",
      "Targeted campaigns",
      "Budget-friendly services",
      "Strong local expertise"
    ].map((item,i)=>(
      <div key={i} className="bg-white p-3 rounded-lg border border-gray-300 shadow-sm text-center">
        {item}
      </div>
    ))}
  </div>

  <p className="text-gray-600 text-center mb-12">
    We are committed to helping your business grow with powerful social media marketing.
  </p>


  {/* 🚀 FINAL CTA */}
  <div className="mt-10 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Ready to Grow Your Business
    </h2>

    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
      If you are looking for a social media marketing agency in Hyderabad that delivers real results, Mazen.tech is here to help.
    </p>

    <p className="text-gray-600 mb-8">
      Start your digital growth journey today and reach more customers with powerful social media strategies.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="tel:+919059991807"
        className="px-6 py-3 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-800 transition"
      >
        Call Now: +91 9059991807
      </a>

      <button
        onClick={handleWhatsApp}
        className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
      >
        WhatsApp Us Now
      </button>

      <button
         onClick={() => navigate("/contact")}
        className="px-6 py-3 rounded-full bg-gray-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        Get Free Consultation
      </button>

    </div>
  </div>

</motion.div>

</motion.div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative mt-24 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 bg-gradient-to-r from-gray-200 via-gray-100 to-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
>
  {/* LEFT SIDE (NO CHANGE) */}
  <div className="p-10 md:p-16 relative bg-gradient-to-br from-gray-300 via-gray-200 to-white text-black rounded-3xl md:rounded-none md:rounded-l-3xl">
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-extrabold mb-4 leading-tight"
    >
       Frequently Asked Questions 
       {/* <br /> <span className="text-black">Today</span> */}
    </motion.h3>

    {/* <p className="text-lg text-black mb-6 leading-relaxed">
      Every like, comment, and share isn’t just engagement — it’s an opportunity.
      Take your brand’s story directly to the people who matter most.
    </p> */}

    <div className="flex justify-center">
      <motion.button
        whileHover={{ scale: 1.07 }}
        onClick={() => navigate("/contact")}
        className="px-8 py-3 mt-2 rounded-full bg-white text-black font-semibold shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
      >
        Boost My Business Now
        {/* <GiCommercialAirplane className="text-xl" /> */}
      </motion.button>
    </div>
  </div>

  {/* RIGHT SIDE (FAQ CONTENT REPLACED) */}
  <div className="p-10 md:p-14">
    {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
      Frequently Asked Questions
    </h2> */}

    <div className="space-y-6">
    <ui>
      <div>
        <h3 className="font-semibold text-gray-900 text-left">
          <li>
          Which is the best social media marketing agency in Hyderabad?
          </li>
        </h3>
        <p className="text-gray-600 text-sm text-left">
          Mazen.tech is one of the best social media marketing agencies in Hyderabad, offering result-driven strategies and affordable pricing.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-left">
          <li>
          What services do social media marketing companies in Hyderabad offer?
          </li>
        </h3>
        <p className="text-gray-600 text-sm text-left">
          They offer content creation, social media management, paid ads, and performance tracking.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-left">
          <li>
          How can social media marketing help my business?
          </li>
        </h3>
        <p className="text-gray-600 text-sm text-left">
          It increases visibility, generates leads, and improves engagement.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-left">
          <li>
          Why choose Mazen.tech?
          </li>
        </h3>
        <p className="text-gray-600 text-sm text-left">
          Because of our expertise, local knowledge, and proven results.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-left">
          <li>
          What is the cost of social media marketing services?
          </li>
        </h3>
        <p className="text-gray-600 text-sm text-left">
          Pricing depends on your business needs and goals.
        </p>
      </div>
</ui>
    </div>
   

    {/* Divider */}
    <div className="mt-8 h-[2px] w-1/2 bg-blue-500 rounded-full"></div>

    <p className="mt-6 text-gray-600 text-base italic">
      “Let’s make your brand the next social success story.”
    </p>
  </div>

  
</motion.div>



    </section>
    <Footer/></>
  );
};

export default SocialMediaMarketing;
