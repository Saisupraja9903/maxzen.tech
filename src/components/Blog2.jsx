import React, { useState } from "react";
import { motion } from "framer-motion"; // <-- added for animations
import logoo4 from "../assests/logoo4.jpg"; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const HeroQuotes = () => {
  const quotes = [
    {
      author: "Joe Pulizzi, Founder of Content Marketing Institute",
      text: "The beauty of content marketing is that it’s an equalizer. It allows small businesses to compete with the giants.",
    },
    {
      author: "Michael Brenner, Author & CEO of Marketing Insider Group",
      text: "Content marketing is about delivering the content your audience is seeking in all the places they are searching for it.",
    },
    {
      author: "Neil Patel, Co-founder of Neil Patel Digital",
      text: "SEO and content marketing together create unstoppable momentum for small businesses aiming to grow organically.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [quotes.length]);

  const cards = [
    {
      title: "Educates and Engages Your Target Audience",
      content: `Customers don’t always make a decision the first time they hear about your brand. They research, compare, and look for answers. 
Among the many content marketing advantages, the ability to educate while building meaningful connections stands out. You’re not just selling—you’re guiding.
When you provide helpful, informative, and easy-to-understand content, you build a connection with your audience. Articles like “how-to guides,” “product comparisons,” and “industry tips” help readers make informed decisions.
It not only helps your audience learn something valuable but also keeps them interested and encourages them to return for more.`,
    },
    {
      title: "Generates High-Quality Leads",
      content: `Another great benefit—and one of the top content marketing advantages—is its ability to generate high-quality leads. When you create content that answers specific questions or solves problems, you’re attracting people who are genuinely interested in what you offer.
Anyone reading that post is already looking to improve their site—this makes them a qualified lead. Add a well-placed call to action (CTA), and you can guide that reader toward your service page, newsletter, or free consultation.`,
    },
    {
      title: "Builds Trust and Brand Authority",
      content: `Trust is everything in marketing. One of the key content marketing advantages is that it allows you to build that trust over time through consistent, valuable content.
Instead of pushing products, content marketing focuses on offering value. When readers consistently find useful, accurate, and honest content on your website, they begin to see your brand as a reliable source of information.
That’s the foundation of brand authority. And once you’ve earned that, the conversions follow naturally.`,
    },
    {
      title: "Cost-Effective with Long-Term ROI",
      content: `Unlike paid ads that stop bringing results when your budget ends, content marketing keeps working over time. A blog post published today can still bring in traffic and leads a year from now.
Content has a compounding return—the more quality content you produce, the more traffic, trust, and leads you generate. And compared to other forms of marketing, it’s cost-effective. You’re investing time and resources upfront, but the long-term payoff is substantial.
This is exactly what we help clients achieve at Maxzen.tech—creating smart, SEO-driven content strategies that continue to deliver value over time.`,
    },
    {
      title: "Supports Other Digital Marketing Channels",
      content: `Good content isn’t limited to your website. It powers your entire digital marketing strategy. You can repurpose blogs into social media posts, videos, email campaigns, or even lead magnets. Many marketing leaders agree that consistent content creation builds trust and long-term value. HubSpot reports that businesses that blog consistently get 55% more website visitors than those that don’t.
When your content is aligned across all platforms, your messaging becomes stronger and more consistent. This reinforces your brand identity and improves your overall marketing performance.
In fact, one great blog post can become 5 social media updates, 1 YouTube video, and an email newsletter topic. That’s the power of strategic content creation.`,
    },
    {
      title: "Final Thoughts: Content Marketing Isn’t Optional—It’s Essential",
      content: `“In today’s fast-moving digital space, understanding the key content marketing advantages is essential for staying ahead.” From improving SEO to generating leads and building brand trust, content sits at the heart of every successful online strategy.
If you’re not using content marketing yet, you’re missing out on a sustainable, affordable way to grow your business.
At Maxzen.tech, we specialize in content marketing that gets results. Whether you need help with blog writing, SEO content, or a full-scale strategy, our team is here to help you build a content engine that grows with you.`,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
   
   <><Header/>
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden clip-diagonal">
        <img
          src={logoo4}
          alt="Content Marketing"
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center text-white px-6">
          <div
            key={current}
            className="transition-all duration-1000 ease-in-out transform opacity-100 animate-fadeSlide"
          >
            <p className="text-lg md:text-2xl italic max-w-3xl mx-auto mb-4 leading-relaxed">
              “{quotes[current].text}”
            </p>
            <p className="text-base md:text-lg font-semibold">
              — {quotes[current].author}
            </p>
          </div>
        </div>
      </section>

      {/* Existing Content Section */}
      <section className="relative py-16 px-6 max-w-6xl mx-auto text-gray-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-200 rounded-full opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 animate-pulse-slow"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight animate-fadeInUp">
            Improves SEO and Boosts Organic Traffic
          </h2>

          <p className="text-xl md:text-2xl mb-6 italic text-gray-700 animate-fadeInUp delay-200">
            “One of the most important content marketing advantages is its direct impact on SEO.”
          </p>

          <p className="mb-6 text-gray-700 text-lg leading-relaxed animate-fadeInUp delay-400">
            Quality content allows your website to rank higher on Google and other search engines. Each blog post or content piece is an opportunity to target keywords your audience is searching for. One of the biggest content marketing advantages for small businesses is the ability to gain visibility and awareness without relying on expensive ad campaigns.
          </p>

          <p className="mb-6 text-gray-700 text-lg leading-relaxed animate-fadeInUp delay-600">
            For example, blog content optimized with keywords like <strong>inbound marketing</strong>, <strong>content that converts</strong>, and <strong>digital strategy</strong> can help bring in users searching for related solutions.
          </p>

          <p className="mb-6 italic font-semibold text-gray-800 animate-fadeInUp delay-800">
            “At Maxzen.tech, we help businesses create keyword-rich, SEO-optimized content that ranks and delivers long-term results.”
          </p>
        </div>
      </section>

      {/* Cards Section with Graphical Animation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const isLeft = index < 3;
            return (
              <motion.div
                key={index}
                initial={{ x: isLeft ? -200 : 200, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 70 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-2xl transform hover:-translate-y-3 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{card.content}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Social Media Logos */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://www.facebook.com/people/MaxzenTech/61574235826967/" className="text-blue-600 hover:text-orange-800 transition-colors text-2xl"><FaFacebookF /></a>
          <a href="https://x.com/maxzen_tech" className="text-blue-400 hover:text-orange-600 transition-colors text-2xl"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/maxzen-tech/" className="text-blue-700 hover:text-orange-900 transition-colors text-2xl"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/maxzen.tech/?hl=en" className="text-pink-500 hover:text-orange-700 transition-colors text-2xl"><FaInstagram /></a>
        </div>
      </section>
    </div>
    <Footer/></>
     
  );
};

export default HeroQuotes;
