

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FaDesktop, FaSearch, FaShareAlt } from "react-icons/fa"; 
import blogimg1 from "../assests/blogimg1.jpg";
import blogimg2 from "../assests/blogimg2.jpg";
import blogimg3 from "../assests/blogimg3.jpg";
import blogimg4 from "../assests/blogimg4.jpg";
import blogimg5 from "../assests/blogimg5.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const HeroIntro = () => {
    const navigate = useNavigate();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <><Header/>
    <div className="bg-gray-300">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[420px] overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="Digital Marketing Banner"
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />

        {/* Overlay Graphics */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-xl"
          >
            Digital Marketing Strategy for Startups:
            <span className="block text-blue-300 mt-2">Complete Guide for 2025</span>
          </motion.h1>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* Left Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Startup Marketing"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full rounded-2xl shadow-xl object-cover"
          loading="lazy"
        />

        {/* Right Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Startups today face big competition, limited budgets, and the need for fast visibility. 
            To survive and scale, founders must follow a strong digital marketing strategy for startups. 
            The right strategy helps you increase online presence, attract customers, 
            and generate consistent leads.
          </p>

          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              If you're a startup in Hyderabad, KPHB, or anywhere in India,  
              <strong className="text-blue-700"> Maxzen.tech </strong>  
              provides complete digital marketing services including SEO, social media marketing,
              website development, paid ads, and organic lead generation.
            </p>
          </div>
        </motion.div>
      </div>
      {/* ===================== WHY IT MATTERS SECTION ===================== */}
{/* <section className="max-w-7xl mx-auto px-6 py-20">


  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
  >
    Why a Digital Marketing Strategy Matters for Every Startup
  </motion.h2>

 
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-lg text-gray-700 leading-relaxed mb-6"
  >
    Most startups fail not because of the product, but because they cannot reach 
    the right audience. A powerful marketing strategy helps you:
  </motion.p>


  <div className="space-y-4 mb-6">
    {[
      "Build brand awareness",
      "Drive quality traffic",
      "Improve customer engagement",
      "Generate leads consistently",
      "Position your business as a trusted brand",
      "Compete with larger companies"
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        className="flex items-start gap-3 text-lg text-gray-700"
      >
        <FaCheckCircle className="text-green-600 mt-1" />
        <span>{item}</span>
      </motion.div>
    ))}
  </div>

 
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-lg text-gray-700 leading-relaxed bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600"
  >
    Local customers search online using keywords like 
    <strong> “best digital marketing services in Hyderabad”, “SEO agency near me”, 
    and “affordable digital marketing for startups.”</strong>  
    So digital marketing is not optional — it is essential.
  </motion.p>

</section> */}


{/* ===================== KEY ELEMENTS SECTION ===================== */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
  >
    Key Elements of an Effective Digital Marketing Strategy for Startups
  </motion.h2>

  <div className="space-y-24">

    {/* Element 1: Website */}
    <div className="grid md:grid-cols-2 items-center gap-12">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Build a High-Performance Website</h3>
        <ul className="space-y-3 text-gray-700">
          {["Fast loading", "Mobile-friendly", "Professionally designed", "Search engine optimized", "Clear call-to-action buttons"].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-gray-600">Maxzen.tech creates SEO-ready websites that convert visitors into leads.</p>
      </motion.div>
      <motion.img
        src={blogimg1}
        alt="High-Performance Website"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-80 object-cover rounded-2xl shadow-xl"
        loading="lazy"
      />
    </div>

    {/* Element 2: SEO */}
    <div className="grid md:grid-cols-2 items-center gap-12">
      <motion.img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="SEO for Organic Growth"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-80 object-cover rounded-2xl shadow-xl md:order-last"
        loading="lazy"
      />
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Implement Strong SEO for Organic Growth</h3>
        <ul className="space-y-3 text-gray-700">
          {["Keyword research & competitor analysis", "On-page & Off-page SEO", "Technical SEO", "Local SEO for Hyderabad & KPHB", "Google My Business optimization"].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-800 mb-2">Focus Keywords:</h4>
          <div className="flex flex-wrap gap-2">
            {["digital marketing Hyderabad", "startup SEO services", "online marketing for small business"].map((keyword, i) => (
              <span key={i} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">{keyword}</span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm italic text-gray-600">Maxzen.tech manages complete SEO for long-term rankings.</p>
      </motion.div>
    </div>

    {/* Element 3: Social Media */}
    <div className="grid md:grid-cols-2 items-center gap-12">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Social Media Marketing to Build Brand Authority</h3>
        <ul className="space-y-3 text-gray-700">
          {["Reels & Video Content", "Educational Posts", "Client Testimonials", "Behind-the-scenes", "Offer Announcements", "Local Hashtags (#Hyderabad, #KPHB)"].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-gray-600">Maxzen.tech helps startups build strong social media branding.</p>
      </motion.div>
      <motion.img
        src={blogimg2}
        alt="Social Media Marketing"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-80 object-cover rounded-2xl shadow-xl"
        loading="lazy"
      />
    </div>

    {/* Element 4: Google Ads */}
    <div className="grid md:grid-cols-2 items-center gap-12">
      <motion.img
        src={blogimg3}
        alt="Google Ads & Meta Ads"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-80 object-cover rounded-2xl shadow-xl md:order-last"
        loading="lazy"
      />
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Google Ads & Meta Ads for Quick Leads</h3>
        <p className="text-gray-700 mb-4">While SEO brings long-term results, paid ads bring immediate leads. A well-balanced digital marketing strategy for startups should include:</p>
        <ul className="space-y-3 text-gray-700">
          {["Google Search Ads", "Display Ads", "YouTube Ads", "Facebook & Instagram Lead Ads", "Remarketing Campaigns", "Local Ads targeting Hyderabad audiences"].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-gray-600">Maxzen.tech specializes in performance marketing services to help startups get fast, high-quality leads at a low cost.</p>
      </motion.div>
    </div>

    {/* Element 5: Content Marketing */}
    <div className="grid md:grid-cols-2 items-center gap-12">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Content Marketing for Authority Building</h3>
        <p className="text-gray-700 mb-4">Startups should publish high-quality content to educate their audience and build trust. This includes:</p>
        <ul className="space-y-3 text-gray-700">
          {["Blogs", "Articles", "Case studies", "Infographics", "Explainer videos", "Social media content"].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-semibold text-orange-800 mb-2">High-performing blog topics for startups:</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>“Best SEO tips for small businesses”</li>
            <li>“Digital marketing tools for startups”</li>
          </ul>
        </div>
        <p className="mt-4 text-sm italic text-gray-600">Content marketing helps improve Google ranking and brand visibility.</p>
      </motion.div>
      <motion.img
        src={blogimg4}
        alt="Content Marketing"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-80 object-cover rounded-2xl shadow-xl"
        loading="lazy"
      />
    </div>

    {/* Element 6: Google My Business */}
    <div className="grid md:grid-cols-2 items-center gap-12">
      <motion.img
        src={blogimg5}
        alt="Google My Business Optimization"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-80 object-cover rounded-2xl shadow-xl md:order-last"
        loading="lazy"
      />
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">6. Optimize Google My Business (GMB)</h3>
        <p className="text-gray-700 mb-2">For local startups, GMB is a must. It increases visibility in:</p>
        <ul className="space-y-2 text-gray-700 mb-4">
          {["Local searches", "Maps ranking", "“Near me” results"].map((point, i) => (
            <li key={i} className="flex items-start gap-3 font-medium"><FaCheckCircle className="text-teal-600 mt-1" /><span>{point}</span></li>
          ))}
        </ul>
        <p className="text-gray-700 mb-2">To optimize your GMB profile:</p>
        <ul className="space-y-2 text-gray-700">
          {["Add complete business info", "Post weekly updates", "Add high-quality images", "Get customer reviews", "Add services & categories"].map((point, i) => (
            <li key={i} className="flex items-start gap-3"><FaCheckCircle className="text-teal-600 mt-1" /><span>{point}</span></li>
          ))}
        </ul>
        <p className="mt-4 text-sm italic text-gray-600">Maxzen.tech provides GMB optimization services in Hyderabad for startups looking to increase local leads.</p>
      </motion.div>
    </div>

  </div>
</section>

{/* ===================== CONCLUSION SECTION ===================== */}
<section className="bg-blue-50/50 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
    >
      Benefits of a Strong Digital Marketing Strategy for Startups
    </motion.h2>
    <p className="text-lg text-gray-700 mb-10">A well-planned strategy provides:</p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {["Lower marketing cost", "High return on investment", "Strong brand presence", "Local customer reach", "Long-term growth", "Consistent monthly leads", "Improved trust & visibility"].map((benefit, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="bg-white p-4 rounded-xl shadow-lg"
        >
          <p className="font-semibold text-gray-800">{benefit}</p>
        </motion.div>
      ))}
    </div>
    <p className="mt-10 text-lg text-gray-700">
      If you want all these benefits, <strong>Maxzen.tech</strong> is one of the most reliable digital marketing agencies in Hyderabad for startups.
    </p>
  </div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
  >
    Final Conclusion
  </motion.h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-4xl mx-auto">
    Building a startup is challenging, but the right digital marketing strategy for startups helps you scale faster. With the perfect mix of SEO, social media, content marketing, Google Ads, and website optimization, your business can grow sustainably.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
    If you're looking for expert help, <strong>Maxzen.tech</strong> offers complete
    digital marketing services for startups—affordable, effective, and results-driven.
  </p>
</section>

    </div>
    <Footer/></>
  );
};

export default HeroIntro;
