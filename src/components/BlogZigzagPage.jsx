import React from "react";
import { ArrowRight, MessageCircleQuestion, BookOpen, TrendingUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../assests/logoo3.jpg";
import img2 from "../assests/logoo4.jpg";
import img3 from "../assests/logoo5.jpg";
import img4 from "../assests/blogcontant3.jpeg";
import sidebarImg from "../assests/pic.png";
import post1 from "../assests/logoo3.jpg";
import post2 from "../assests/logoo4.jpg";
import post3 from "../assests/logoo5.jpg";
import img5 from "../assests/blog5img.jpeg";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";






const BlogZigzagPage = () => {
  const faqs = [
    {
      id: 1,
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      question: "What are the best digital marketing blogs to follow in 2025?",
      answer:
        "Some of the top digital marketing blogs include HubSpot, Neil Patel, Moz, and industry experts who share SEO, content, and social media strategies.",
    },
    {
      id: 2,
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      question: "Why should businesses read digital marketing blogs regularly?",
      answer:
        "Reading blogs helps businesses stay updated with the latest SEO techniques, social media trends, and paid ads strategies to stay competitive.",
    },
    {
      id: 3,
      icon: <MessageCircleQuestion className="w-8 h-8 text-green-600" />,
      question: "Can beginners learn digital marketing through blogs?",
      answer:
        "Yes! Many blogs simplify digital marketing for beginners, covering topics like SEO basics, PPC setup, and social media marketing tips.",
    },
  ];
  const navigate = useNavigate();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
    <Header />
      
  <div className="bg-gray-200 min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-16">
          {/* Intro */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight">
              Digital Marketing Blogs for Business Growth in 2025
            </h1>
            <p className="text-gray-900 leading-relaxed">
              At <span className="text-blue-600 font-bold">Maxzen.Tech</span>, we bring you
              expert-written <span className="font-semibold">Digital Marketing</span> Blogs designed
              to help business owners, startups, and entrepreneurs grow online.
              Our blogs include practical tips, real-world strategies, and proven methods
              that drive results. Stay updated with the latest SEO trends, content marketing
              techniques, and insights for business success.
            </p>
            {/* <button className="px-6 py-2 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              Uncategorized <ArrowRight className="w-4 h-4" />
            </button> */}
          </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
  {/* Image Section (clickable) */}
  <div
    
    className="relative group w-full md:w-1/2 h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer"
  >
    <img
      src={img1}
      alt="Blog 1"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded">
      JULY 28, 2025
    </div>
    <div className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
      <ArrowRight className="w-5 h-5" />
    </div>
  </div>

  {/* Text Section */}
  <div className="md:w-1/2 text-left">
    <h2 
    onClick={() => navigate("/blog1")}
    className="text-2xl font-bold mb-4">
      Best App Development Companies in Hyderabad
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Explore the top app development firms helping startups and enterprises
      build innovative digital products. Stay ahead with expert insights and
      proven strategies from leading professionals.
    </p>
  </div>
</div>







          {/* Blog Section 2 (Reversed) */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div
   
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === "Enter") navigate("/blog2"); }}
    className="relative group w-full md:w-1/2 h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer"
  >
    <img
      src={img2}
      alt="Blog 2"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded">
      AUG 10, 2025
    </div>
    <div className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
      <ArrowRight className="w-5 h-5" />
    </div>
  </div>

  <div className="md:w-1/2">
    <h2 
     onClick={() => navigate("/blog2")}
     className="text-2xl font-bold mb-4">Top 5 Affordable SEO Packages for Small Businesses</h2>
    <p className="text-gray-700 leading-relaxed"> Learn how cost-effective SEO packages can boost your visibility,
                increase leads, and grow your online presence with strategic insights.</p>
  </div>
</div>
{/* Blog Section 3 */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div
   
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === "Enter") navigate("/blog3"); }}
    className="relative group w-full md:w-1/2 h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer"
  >
    <img
      src={img3}
      alt="Blog 3"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded">
      SEP 1, 2025
    </div>
    <div className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
      <ArrowRight className="w-5 h-5" />
    </div>
  </div>

  <div className="md:w-1/2">
    <h2 
     onClick={() => navigate("/blog3")}
    className="text-2xl font-bold mb-4">Digital Marketing Blogs & SEO Tips for Growth</h2>
    <p className="text-gray-700 leading-relaxed">Discover expert insights on digital marketing, SEO strategies, and growth-driven content to elevate your online presence.</p>
  </div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div
   
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === "Enter") navigate("/blog2"); }}
    className="relative group w-full md:w-1/2 h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer"
  >
    <img
      src={img4}
      alt="Blog 2"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded">
      AUG 10, 2025
    </div>
    <div className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
      <ArrowRight className="w-5 h-5" />
    </div>
  </div>

  <div className="md:w-1/2">
    <h2 
     onClick={() => navigate("/blog4")}
     className="text-2xl font-bold mb-4">Digital Marketing Strategy for Startups | Maxzen.tech Services</h2>
    <p className="text-gray-700 leading-relaxed"> Learn the best digital marketing strategy for startups to grow fast. Maxzen.tech offers SEO, social media, paid ads & complete digital marketing services.</p>
  </div>
</div>
<div className="flex flex-col md:flex-row items-center gap-8">
  <div
   
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === "Enter") navigate("/blog3"); }}
    className="relative group w-full md:w-1/2 h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer"
  >
    <img
      src={img5}
      alt="Blog 5"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded">
      SEP 1, 2025
    </div>
    <div className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
      <ArrowRight className="w-5 h-5" />
    </div>
  </div>

  <div className="md:w-1/2">
    <h2 
     onClick={() => navigate("/blog5")}
    className="text-2xl font-bold mb-4">Best Software Testing Companies in Hyderabad 2026</h2>
    <p className="text-gray-700 leading-relaxed">Best Software Testing Companies in Hyderabad (2025 Guide) – maxzen.tech Ranked No.1</p>
  </div>
</div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
              Digital Marketing Blogs & Best SEO Tips for Higher Rankings
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200"
                >
                  <div className="mb-4">{faq.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div
            className="rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6 sticky top-0"
           style={{ backgroundColor: "rgba(243, 244, 246, 0.9)", height: "100%", width: "430px" }}

          >
            {/* Search */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-left">Search</h3>
              <div className="relative mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-2.5 h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="w-full border border-gray-300 rounded-lg pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Recent posts */}
            <div>
              <h1 className="text-xl font-semibold mb-3 text-left">Recent posts</h1>
              <ul className="text-gray-700 text-lg space-y-3 text-left">
                <li>• Best App Developing companies in Hyderabad</li>
                <li>• Top 5 Affordable SEO Packages for Small Business Growth - Maxzen.tech</li>
                {/* <li>• Top 7 Content Marketing Advantages Every Business Should Know</li> */}
                <li>• SEO Agency Near Me Boost Your Local Rankings with Maxzen.tech</li>
                 <li>• Digital Marketing Strategy for Startups | Maxzen.tech Services</li>
                 <li>• Best Software Testing Companies in Hyderabad 2026</li>
              </ul>
            </div>

            <hr className="border-gray-300" />

            {/* Archives */}
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-left">Archives</h3>
              <ul className="text-gray-700 text-sm space-y-3 text-left">
                <li>November 2025</li>
                <li>October 2025</li>
                <li>September 2025</li>
                <li>August 2025</li>
              </ul>
            </div>

            <hr className="border-gray-300" />

            {/* Categories */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-left">Categories</h3>
              <ul className="text-gray-700 text-sm space-y-3 text-left">
                <li>SEO</li>
                <li>Digital Marketing</li>
                <li>Web Development</li>
                <li>Brand Strategy</li>
              </ul>
            </div>

            <hr className="border-gray-300" />

            {/* WHY CHOOSE US */}
<div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
  <h3 className="text-xl font-semibold mb-3">Why Choose Maxzen.Tech?</h3>
  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed text-left">
    <li>• 100% result-driven SEO strategies</li>
    <li>• Modern, high-performance website development</li>
    <li>• ROI-based digital marketing campaigns</li>
    <li>• Expert team with 7+ years of experience</li>
    <li>• Trusted by startups & enterprises across India</li>
  </ul>
</div>

<hr className="border-gray-300" />


            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-left">Recent Posts</h3>
              <ul className="space-y-3">
                {[{ img: post1, title: "Boost SEO Fast", date: "Oct 25, 2025" },
                  { img: post2, title: "Content Tips", date: "Oct 22, 2025" },
                  { img: post3, title: "Digital Marketing", date: "Oct 20, 2025" },
                   { img: img4, title: "Digital Marketing Strategy", date: "Aug 10, 2025" },
                    { img: img5, title: "Software Testing", date: "Sep 1, 2025" }
                ].map((post, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <img src={post.img} alt={post.title} className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-medium">{post.title}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-gray-300" />

    {/* ⭐ NEW SECTION → SOCIAL MEDIA */}
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
      <div className="flex gap-3">
        <a className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaFacebookF size={20} />
        </a>
        <a className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaInstagram size={20} />
        </a>
        <a className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaTwitter size={20} />
        </a>
        <a className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaYoutube size={20} />
        </a>
      </div>
    </div>

            <hr className="border-gray-300" />

            {/* Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["SEO", "Blog", "Content", "Marketing", "Growth"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <hr className="border-gray-300" />
            {/* USEFUL RESOURCES */}
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow ">
  <h3 className="text-xl font-semibold mb-3">Useful Resources</h3>

  <ul className="text-sm text-gray-700 space-y-2 text-left">
    <li>• How to Improve Website Speed</li>
    <li>• SEO Basics: Beginner Guide</li>
    <li>• Social Media Growth Plan 2025</li>
    <li>• On-Page SEO Checklist</li>
    <li>• Content Strategy Framework</li>
  </ul>
</div>

<hr className="border-gray-300 my-6" />


            {/* Marketing Agency */}
            <div>
              <img src={sidebarImg} alt="Marketing Agency" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">MARKETING AGENCY</h3>
              <ul className="text-gray-700 text-sm space-y-1 mb-3">
                <li>• Data Analytics</li>
                <li>• Product Management</li>
                <li>• Tech Sales</li>
              </ul>
              {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Our Services
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
     <Footer />
    </> 
    
  );
};

export default BlogZigzagPage;