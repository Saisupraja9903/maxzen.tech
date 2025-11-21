// import React, { useEffect } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaArrowUp,
//   FaWhatsapp,
//   FaCheckCircle,
// } from "react-icons/fa";
// import banner from "../assests/logoo3.jpg"; // replace with your banner image
// import seoImg from "../assests/seo-blog1.webp"; // replace with your uploaded SEO image

// const BlogPage = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const btn = document.getElementById("scrollButton");
//       if (window.scrollY > 200) btn.style.opacity = 1;
//       else btn.style.opacity = 0;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white text-gray-800">
//       {/* Hero Banner */}
//       <div
//         className="w-full h-[70vh] bg-cover bg-center"
//         style={{ backgroundImage: `url(${banner})` }}
//       ></div>

//      {/* Main Content */}
//       <section className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
//         <p className="text-sm text-gray-500 mb-2">
//           JULY 28, 2025 / <span className="underline">ADD COMMENTS</span>
//         </p>

//         <h1 className="text-4xl font-bold mb-6 leading-snug text-left">
//           Top  5 Affordable SEO Packages for Small Businesses
//         </h1>

//         <p className="text-gray-700 mb-6 text-left">
//           <strong>Affordable SEO Packages for Small Businesses in 2025</strong> — 
//           A Competitive Growth. As we move through 2025, the digital space is more
//           competitive than ever for small businesses. Whether you’re a local service
//           provider, a retail store, or a solopreneur, the success of your business
//           hinges on how easily customers can find you online.
//         </p>

//         <p className="text-gray-700 mb-4 text-left">
//           The good news? Competing online doesn’t require a huge marketing budget.
//           With the right SEO packages for small businesses, you can rank higher in
//           searches, attract quality leads, and build a lasting online presence — 
//           all without overspending.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-4 text-left">
//           In this guide, we’ll explore:
//         </h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 text-left">
//           <li>How SEO Helps Small Businesses Stay Competitive Online</li>
//           <li>What to look for in a quality SEO package</li>
//           <li>How to choose the right partner</li>
//         </ul>

//         <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
//           💡 Why SEO Matters for Small Businesses
//         </h2>
//         <p className="text-gray-700 mb-6 text-left">
//           SEO goes beyond rankings—it helps build visibility, credibility, and real
//           business growth. When someone searches for your product or service online,
//           you want your website to be the first thing they see. Without SEO, your
//           site can get buried under thousands of results, no matter how good your
//           business is.
//         </p>

//         <h3 className="text-xl font-semibold mb-3 text-left">
//           Here’s why small businesses invest in SEO:
//         </h3>
//         <ul className="list-disc list-inside space-y-2 text-gray-700 mb-12 text-left">
//           <li>It generates organic traffic without constant ad spending</li>
//           <li>It builds authority and trust with your audience</li>
//           <li>It supports long-term growth by attracting qualified leads</li>
//           <li>It boosts local visibility for service-based businesses</li>
//           <li>It improves website performance and user experience</li>
//         </ul>

//         {/* New Section */}
//         <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//           🔍 What’s Included in SEO Packages for Small Business?
//         </h2>
//         <p className="text-gray-700 mb-8">
//           SEO packages typically bundle the most essential optimization services
//           into a monthly plan. A good package should be tailored to your industry,
//           location, and growth goals. Here’s what a reliable small business SEO
//           package often includes:
//         </p>

//         <div className="space-y-6 mb-12 text-left ">
//           {[
//             { title: "Keyword Research", desc: "Uncover the search terms your customers use—and optimize your website accordingly." },
//             { title: "On-Page SEO", desc: "Improve your site structure, meta tags, images, and internal linking for better indexing and relevance." },
//             { title: "Technical SEO", desc: "Ensure your website loads fast, works smoothly on mobile, and resolves any crawl or indexing issues." },
//             { title: "Local SEO", desc: "Optimize your Google Business Profile, maps listing, and online directories for local visibility." },
//             { title: "Content Strategy", desc: "Target long-tail keywords and create high-quality, optimized content for your audience." },
//             { title: "Backlink Building", desc: "Acquire high-quality backlinks from trusted domains to build website authority." },
//             { title: "Google Business Profile", desc: "Optimize your local presence with Google Business Profile updates and reviews." },
//             { title: "Reporting & Analysis", desc: "Track your keyword performance, traffic, and improvements month by month." },
//           ].map((item, index) => (
//             <div key={index} className="flex items-start gap-3">
//               <FaCheckCircle className="text-green-500 mt-1" />
//               <div>
//                 <h4 className="font-semibold text-lg text-gray-900">
//                   {item.title}
//                 </h4>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Centered Image */}
//         <div className="flex justify-center mb-12">
//           <img
//             src={seoImg}
//             alt="SEO Illustration"
//             className="w-80 md:w-[400px] object-contain"
//           />
//         </div>
 
//         <p className="italic text-gray-600 mb-4 text-left">
//           “One of the most important content marketing advantages is its direct
//           impact on SEO.”
//         </p>
//         <p className="text-gray-700 mb-2 text-left">
//           Quality content allows your website to rank higher on Google and other
//           search engines. Each blog post or content piece is an opportunity to
//           target keywords and build relevance.
//         </p>
//         <p className="text-gray-700 mb-10 text-left">
//           For startups and growing brands, SEO Packages for Small Businesses are
//           among the smartest marketing investments in 2025.
//         </p>

//         {/* 🧠 How to Choose the Right SEO Provider */}
//         <h2 className="text-2xl font-bold mb-6 text-left">
//           🧠 How to Choose the Right SEO Provider
//         </h2> 
//         <ul className="list-decimal list-inside text-gray-700 space-y-3 mb-12 text-left">
//           <li><strong>Transparency & Communication:</strong> Always know what’s being done and why.</li>
//           <li><strong>Custom Strategy:</strong> Avoid one-size-fits-all plans. Every business is unique.</li>
//           <li><strong>Ethical (White-Hat) SEO:</strong> Ensure compliance with Google’s guidelines.</li>
//           <li><strong>Experience with Small Businesses:</strong> Choose agencies that understand small business growth.</li>
//           <li><strong>Additional Support:</strong> Go for SEO companies that provide full digital solutions.</li>
//         </ul>

//         {/* 🌟 Maxzen.tech Section */}
//         <h2 className="text-2xl font-bold  mb-6 text-left">
//           🌟 Maxzen.tech: Helping Small Businesses Succeed with SEO
//         </h2>
//         <p className="text-gray-700 mb-6">
//           Maxzen.tech stands out as a reliable SEO and digital marketing partner for small
//           businesses. Based in India, Maxzen offers transparent, affordable, and customized
//           SEO solutions to help startups, entrepreneurs, and local businesses thrive.
//         </p>

//         <ul className="space-y-3 mb-12 text-gray-800 text-left">
//           <li>✅ Custom SEO strategies tailored to your business and location</li>
//           <li>✅ Affordable packages with flexible monthly costs</li>
//           <li>✅ Real results—clients see improvements within 45–90 days</li>
//           <li>✅ Full-service approach including SEO, content, and website design</li>
//           <li>✅ Transparent communication and progress reports</li>
//         </ul>

//         {/* 📈 Case Study Section */}
//         <h2 className="text-2xl font-bold mb-6 text-left">
//           📈 How Maxzen.tech Helped a Local Business 4X Their Leads
//         </h2>
//         <p className="text-gray-700 mb-2 text-left">
//           A local interior design business in Bangalore collaborated with Maxzen.tech to
//           boost visibility. Within six months, they achieved a 400% increase in leads and
//           substantial improvement in Google local rankings.
//         </p>

//         <p className="text-gray-700 text-left">
//           Whether you’re launching a new business or scaling your brand, Maxzen.tech provides
//           all the tools and expertise to help you grow your presence online efficiently.
//         </p>
//       </section>
//        {/* 💬 Final Thoughts Section */}
// <div className="mt-16 text-center max-w-2xl mx-auto px-4">
//   <h2 className="text-2xl md:text-3xl font-bold mb-4 flex  items-center gap-2">
//     💬 Final Thoughts: SEO is the Foundation of Digital Growth
//   </h2>
//   <p className="text-gray-700 mb-4 leading-relaxed">
//     Establishing a solid online presence takes time, strategy, and consistent effort.
//     But with the right SEO strategy and trusted support, even a small business can
//     compete with bigger brands. By investing in one of the many SEO packages for
//     small businesses available today, you’re building the foundation for long-term
//     digital success.
//   </p>
//   <p className="text-gray-700 leading-relaxed mb-10">
//     And with a growth partner like <strong>Maxzen.tech</strong>, you don’t just get clicks — 
//     you get real, qualified leads and measurable results.
//   </p>
// </div>

// {/* 🚀 Ready to Take Your Business Section */}
// <div className="text-center max-w-3xl mx-auto px-4">
//   <h2 className="text-2xl md:text-3xl font-bold mb-4 flex justify-center items-center gap-2">
//     🚀 Ready to Take Your Business to the Next Level?
//   </h2>
//   <p className="text-gray-700 leading-relaxed mb-6">
//     If you’re serious about growing online in 2025, it’s time to stop guessing and start
//     optimizing. Visit <strong>Maxzen.tech</strong> to explore
//     <strong> affordable SEO packages </strong> built just for small businesses.
//     Get a free consultation, understand your growth potential, and let us help you
//     take your business to the next level.
//   </p>

//   <button className="bg-[#6C63FF] text-white font-medium px-6 py-3 rounded-md hover:bg-[#574BFF] transition-all mb-16">
//     Contact Us
//   </button>
// </div>

// {/* 📝 Leave a Reply Section */}
// <div className="border-t border-gray-200 pt-10 text-center max-w-3xl mx-auto px-4">
//   <h2 className="text-2xl font-bold mb-2">Leave A Reply</h2>
//   <p className="text-sm text-gray-500 mb-8">
//     Your email address will not be published. Required fields are marked *
//   </p>

//   <form className="space-y-6">
//     <input
//       type="text"
//       placeholder="Name *"
//       className="border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//     />
//     <input
//       type="email"
//       placeholder="Email *"
//       className="border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//     />
//     <input
//       type="text"
//       placeholder="Website"
//       className="border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//     />
//     <textarea
//       placeholder="Comment"
//       rows="5"
//       className="border border-gray-300 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//     ></textarea>

//     <div className="flex items-center justify-center gap-2 text-left">
//       <input
//         type="checkbox"
//         id="saveInfo"
//         className="w-4 h-4 border-gray-300 rounded"
//       />
//       <label htmlFor="saveInfo" className="text-sm text-gray-600">
//         Save my name, email, and website in this browser for the next time I comment.
//       </label>
//     </div>

//     <button
//       type="submit"
//       className="border border-gray-800 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-white transition"
//     >
//       Post Comment
//     </button>
//   </form>
// </div>


//       {/* Floating Scroll to Top */}
//       <button
//         id="scrollButton"
//         onClick={scrollToTop}
//         className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 px-2 py-3 text-sm font-medium rotate-[-90deg] opacity-0 transition-opacity"
//       >
//         Scroll to top
//       </button>

//       {/* Social Icons */}
//       <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
//         <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-red-500 hover:text-white transition">
//           <FaFacebookF />
//         </a>
//         <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-pink-500 hover:text-white transition">
//           <FaInstagram />
//         </a>
//         <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-sky-500 hover:text-white transition">
//           <FaTwitter />
//         </a>
//         <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-red-600 hover:text-white transition">
//           <FaYoutube />
//         </a>
//       </div>
     



//       {/* WhatsApp Floating Icon */}
//       <a
//         href="https://wa.me/919059991807"
//         target="_blank"
//         rel="noreferrer"
//         className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full text-2xl shadow-lg hover:scale-110 transition-transform"
//       >
//         <FaWhatsapp />
//       </a>
//     </div>
//   );
// };

// export default BlogPage;


import React from "react";
import {
  FaChartLine,
  FaSearchDollar,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import bgImage from "../assests/logoo3.jpg"; // ✅ your background image
import seoBlog from "../assests/seo-blog1.webp"; // ✅ add this image
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const SEOIntro = () => {
  const cards = [
    {
      title: "How SEO Helps Small Businesses Stay Competitive Online",
      desc: "SEO makes your business visible to the right audience. It helps you compete effectively by ranking higher and reaching more potential customers without massive ad spending.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
    },
    {
      title: "What to Look for in a Quality SEO Package",
      desc: "A strong SEO package offers keyword research, content strategy, technical optimization, and reporting — all tailored to your business goals and audience.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      icon: <FaSearchDollar className="text-green-600 text-3xl" />,
    },
    {
      title: "How to Choose the Right Partner",
      desc: "Pick an agency that values transparency, ethics, and measurable results. A good partner understands your brand vision and helps you grow sustainably.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      icon: <FaHandshake className="text-purple-600 text-3xl" />,
    },
  ];

  const whyPoints = [
    "It generates organic traffic without constant ad spending.",
    "It builds authority and trust with customers.",
    "It supports long-term growth by attracting qualified leads.",
    "It boosts local visibility, especially for service-based businesses.",
    "It improves website performance and user experience.",
  ];

  const seoPackage = [
    "Keyword Research — Uncover the search terms your customers use.",
    "On-Page SEO — Optimize site structure, meta tags, and content.",
    "Technical SEO — Ensure fast loading, mobile readiness, and clean code.",
    "Local SEO — Optimize Google Business Profile and local directories.",
    "Content Strategy — Blogs & landing pages for keyword targeting.",
    "Backlink Building — Gain quality backlinks from trusted sources.",
    "Google Business Profile — Manage and optimize your local listing.",
    "Reporting & Analysis — Track performance and improvements.",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <Header />
   
    
    <section className="relative w-full py-16 px-6 text-center">
      {/* ✅ Background Image Section */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      </div>

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 mt-[100px]">
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/90 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 transition-colors duration-500 hover:text-orange-500 cursor-pointer">
            Top 5 Affordable SEO Packages for Small Businesses
          </h1>
          <p className="text-gray-700 leading-relaxed">
            <strong>Affordable SEO Packages for Small Businesses in 2025</strong> — A Competitive Growth.
            As we move through 2025, the digital space is more competitive than ever for small businesses.
            Whether you’re a local service provider, a retail store, or a solopreneur, the success of your
            business hinges on how easily customers can find you online.
          </p>
          <p className="text-gray-700 mt-4">
            The good news? Competing online doesn’t require a huge marketing budget. With the right SEO
            packages, you can rank higher, attract quality leads, and build a lasting online presence — all
            without overspending.
          </p>
        </div>

        {/* ✅ Cards Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 💡 WHY SEO MATTERS Section */}
        <div className="max-w-6xl mx-auto text-left mb-20 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            💡 Why SEO Matters for Small Businesses
          </h2>
          <p className="text-gray-700 mb-6">
            SEO goes beyond rankings—it helps build visibility, credibility, and real business growth.
            When someone searches for your product or service online, you want your website to be the first
            thing they see. But without SEO, your site can get buried under thousands of results, no matter
            how good your business is.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {whyPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl shadow p-4 hover:shadow-md transition"
              >
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-6 font-medium">
            In short, SEO helps small businesses grow sustainably, affordably, and consistently.
          </p>
        </div>

        {/* 🔍 WHAT’S INCLUDED Section */}
        <div className="max-w-6xl mx-auto text-left bg-gradient-to-r from-purple-50 to-white rounded-2xl p-10 shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            🔍 What’s Included in SEO Packages for Small Business?
          </h2>
          <p className="text-gray-700 mb-6">
            SEO packages typically bundle the most essential optimization services into a monthly plan. A
            good package should be tailored to your industry, location, and growth goals. Here’s what a
            reliable small business SEO package often includes:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {seoPackage.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl shadow p-4 hover:bg-purple-50 hover:shadow-md transition"
              >
                <FaCheckCircle className="text-purple-500 text-xl mt-1" />
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🌿 NEW SECTION AFTER WHAT’S INCLUDED */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg p-8 mb-20">
          {/* Left Image */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={seoBlog}
              alt="SEO Content Marketing"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>

          {/* Right Content */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              One of the most important content marketing advantages is its direct impact on SEO.
            </h3>
            <p className="text-gray-700 mb-4">
              Quality content allows your website to rank higher on Google and other search engines.
              Each blog post or content piece is an opportunity to target keywords your audience is searching for.
              One of the biggest content marketing advantages for small businesses is the ability to gain visibility
              and awareness without relying on expensive ad campaigns.
            </p>
            <p className="text-gray-700 mb-4">
              For startups and growing brands, SEO Packages for Small Business are one of the smartest marketing
              investments in 2025.
            </p>
            <p className="text-gray-700 font-medium">
              For example, blog content optimized with keywords like{" "}
              <span className="text-purple-600 font-semibold">inbound marketing</span>,{" "}
              <span className="text-purple-600 font-semibold">content that converts</span>, and{" "}
              <span className="text-purple-600 font-semibold">digital strategy</span> can help bring in users searching
              for related solutions.
            </p>

          </div>
        </div>
                {/* 🤔 HOW TO CHOOSE THE RIGHT SEO PROVIDER SECTION */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-10 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            🤔 How to Choose the Right SEO Provider
          </h2>
          <p className="text-gray-700 mb-6 ">
            Choosing the right SEO provider can mean the difference between a wasted budget and lasting growth.
            Before choosing an SEO provider, keep these key factors in mind:
          </p>
          <ul className="space-y-4 text-gray-800 text-left">
            <li>
              <strong className="text-blue-600">1. Transparency & Communication —</strong> You should always know what’s being done and why. Avoid companies that hide behind vague promises.
            </li>
            <li>
              <strong className="text-blue-600">2. Custom Strategy —</strong> Every small business is unique. A good provider won’t offer a one-size-fits-all plan.
            </li>
            <li>
              <strong className="text-blue-600">3. Ethical (White-Hat) SEO —</strong> Ensure that your provider follows Google’s guidelines to avoid penalties and long-term damage.
            </li>
            <li>
              <strong className="text-blue-600">4. Experience with Small Businesses —</strong> Look for an agency that understands your specific challenges and growth goals.
            </li>
            <li>
              <strong className="text-blue-600">5. Additional Support —</strong> Digital success isn’t just about SEO. Services like Google Ads, social media marketing, and content creation can boost your results even further.
            </li>
          </ul>
        </div>

        {/* 🌟 MAXZEN TECH SECTION */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-yellow-50 via-white to-yellow-100 rounded-2xl shadow-lg p-10 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            🌟 Maxzen.tech: Helping Small Businesses Succeed with SEO
          </h2>
          <p className="text-gray-700 mb-6">
            One company that consistently stands out when it comes to SEO and digital marketing for small businesses is{" "}
            <strong>Maxzen.tech</strong>. Based in India, Maxzen.tech offers modern, scalable SEO packages designed specifically for startups, solopreneurs, and growing businesses that need a trusted digital partner.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "✅ Custom SEO strategies based on your industry and location",
              "✅ Affordable packages that deliver ROI without high monthly costs",
              "✅ Real results, with improved rankings and lead flow in as little as 90 days",
              "✅ Full-service support, including Google Ads, social media marketing, and conversion optimization",
              "✅ A strong focus on generating organic leads, not just rankings",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl shadow p-4 hover:bg-yellow-50 transition"
              >
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            What sets Maxzen.tech apart is their transparent, client-focused approach. Rather than just selling SEO as a product, they partner with your business to drive real, measurable growth.
          </p>
        </div>

        {/* 📈 CASE STUDY SECTION */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-50 to-white rounded-2xl shadow-lg p-10 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            📈 How Maxzen.tech Helped a Local Business 4X Their Leads
          </h2>
          <p className="text-gray-700 mb-4">
            A recent client — an interior design business in Bangalore — approached Maxzen.tech with limited online visibility.
            They weren’t ranking for any local keywords, and their website received barely 50 visits a month.
          </p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2 text-left">
            <li>Ranked on page 1 for 12 local service keywords</li>
            <li>Website traffic increased by 480%</li>
            <li>Monthly leads grew from 5 to over 20</li>
            <li>ROI from Google Ads exceeded 300% within 90 days</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This transformation was achieved through a blend of SEO, local optimization, and social media marketing — all seamlessly handled by Maxzen.tech.
          </p>
        </div>

        {/* 🧭 FINAL THOUGHTS SECTION */}
        <div className="max-w-6xl mx-auto text-center bg-gradient-to-r from-indigo-50 to-white rounded-3xl shadow-xl p-10 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🧭 SEO is the Foundation of Digital Growth
          </h2>
          <p className="text-gray-700 mb-6">
            Establishing a solid online presence takes time, strategy, and consistent effort. With the right SEO support, even a small business can compete with larger brands.
          </p>
          <p className="text-gray-700 mb-6">
            Partnering with <strong>Maxzen.tech</strong> ensures you get real, qualified leads — not just clicks.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            🚀 Contact Us — Let’s Grow Your Business
          </a>
        </div>
        <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8 mb-20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">💬 Leave a Reply</h2>
          <p className="text-gray-600 mb-8">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-red-500">*</span>
          </p>

          <form className="space-y-6">
            {/* <div>
              <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                rows="5"
                placeholder="Write your comment here..."
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              ></textarea>
            </div> */}

            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
                Website
              </label>
              <input
                type="url"
                id="website"
                placeholder="https://yourwebsite.com"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
             <div>
              <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                rows="5"
                placeholder="Write your comment here..."
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="save-info"
                type="checkbox"
                className="h-4 w-4 text-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="save-info" className="text-gray-700 text-sm">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              Post Comment
            </button>
          </form>
        </div>
      
      </div>
      
    
    </section>
    <Footer />
   </>
  );
};

export default SEOIntro;
