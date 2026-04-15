


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
import { useNavigate } from "react-router-dom";

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


  const goToHome2 = () => {
  navigate("/#home2");
};
  const navigate = useNavigate();

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
          <h1
  onClick={() => navigate("/blog2")}
  className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 transition-colors duration-500 hover:text-orange-500 cursor-pointer"
>
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
            🌟{" "}
<span
  onClick={goToHome2}
  className="cursor-pointer hover:underline"
>
  Maxzen.tech
</span>
: Helping Small Businesses Succeed with SEO
          </h2>
          <p className="text-gray-700 mb-6">
            One company that consistently stands out when it comes to SEO and digital marketing for small businesses is{" "}
            <span
  onClick={goToHome2}
  className="font-semibold cursor-pointer hover:underline"
>
  Maxzen.tech
</span>. Based in India, <span
  onClick={goToHome2}
  className="cursor-pointer hover:underline font-semibold"
>
  Maxzen.tech
</span>{" "}
offers modern, scalable SEO packages designed specifically for startups, solopreneurs, and growing businesses that need a trusted digital partner.
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
            📈 How <span
  onClick={goToHome2}
  className="cursor-pointer hover:underline"
>
  Maxzen.tech
</span>{" "}
Helped a Local Business 4X Their Leads
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
            Partnering with <span
  onClick={goToHome2}
  className="font-semibold cursor-pointer hover:underline"
>
  Maxzen.tech
</span> ensures you get real, qualified leads — not just clicks.
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
