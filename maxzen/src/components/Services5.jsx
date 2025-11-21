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




/**
 * SocialMediaMarketing.jsx
 * Light background + floating colorful icons + React-icons in platform cards.
 */

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

  return (
    <><Header/>
    
    <section className="relative w-full overflow-hidden py-20 bg-gradient-to-b from-[#f9fbff] to-[#f1f4ff] text-gray-800">
      {/* 🌈 FLOATING COLORFUL ICONS */}
      {/* 🌈 FLOATING COLORFUL ICONS */}
<FloatingIcon icon={FaFacebookF} color="blue-600" top="10%" left="5%" duration={6} />
<FloatingIcon icon={FaFacebookF} color="blue-600" top="40%" left="15%" duration={7} />
{/* <FloatingIcon icon={FaFacebookF} color="blue-600" top="7%" left="22%" duration={7} /> */}
<FloatingIcon icon={FaInstagram} color="pink-500" top="1%" left="85%" duration={8} />
<FloatingIcon icon={FaInstagram} color="pink-500" top="78%" left="70%" duration={9} />

<FloatingIcon icon={FaLinkedinIn} color="blue-500" top="80%" left="90%" duration={7} />
<FloatingIcon icon={FaLinkedinIn} color="blue-500" top="40%" left="60%" duration={8} />

<FloatingIcon icon={FaYoutube} color="red-500" top="7%" left="22%" duration={5} />
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
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Get Your Brand the Digital Edge with{" "}
              <span className="text-blue-600">Maxzen.Tech</span>
            </h2>

            <p className="mt-5 text-lg text-gray-700 max-w-2xl">
              Grow your business with the best social media marketing agency in Hyderabad.
              We don’t just publish posts — we build platform-specific strategies that
              increase engagement, generate genuine leads, and create measurable growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button 
               onClick={() => navigate("/contact")}
               className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-[1.03] transition">
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
              <h3 className="text-xl font-bold text-blue-600 mb-2 text">
                How Social Media Marketing Helps Businesses Thrive
              </h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-left">
                <li>Builds brand awareness faster than traditional marketing.</li>
                <li>Generates high-quality leads for all business sizes.</li>
                <li>Strengthens customer trust and loyalty.</li>
                <li>Drives consistent website traffic.</li>
                <li>Boosts sales with targeted ad campaigns.</li>
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
    className="cursor-pointer px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
  >
    {p.name}
  </motion.button>
</div>



                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {p.name} Marketing
                </h3>
                <p className="mt-3 text-sm text-gray-700 flex-1">{p.text}</p>

                {/* <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-700"
                      >
                        <path
                          d="M12 2v20M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-xs text-gray-600">
                      <div className="font-semibold">Platform Strategy</div>
                      <div className="text-[11px]">Campaign Blueprint</div>
                    </div>
                  </div>

                  <button className="ml-auto px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition">
                    Learn More
                  </button>
                </div>
              </div> */}
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
    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
      How Social Media Marketing Helps Businesses Thrive
    </h3>

    <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
      In today’s digital-first world, your customers are spending most of their time on
      social media platforms. Whether it’s Instagram, Facebook, LinkedIn, or YouTube,
      every like, comment, and share is an opportunity to connect with potential buyers.
      Success in today’s digital world starts with selecting the right partner — and{" "}
      <span className="font-semibold text-blue-600">Maxzen.Tech</span> is your go-to
      social media marketing agency in Hyderabad.
    </p>

    <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
      At <span className="font-semibold text-blue-600">Maxzen.Tech</span>, we don’t just
      create posts — we build strategies that increase engagement, generate genuine
      leads, and establish a strong online presence for your brand. Social media
      marketing is important because it:
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div className="flex items-start gap-3">
        <span className="text-blue-500 text-2xl">🌟</span>
        <p className="text-gray-800 text-lg">
          Builds brand awareness faster than traditional marketing.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-purple-500 text-2xl">🎯</span>
        <p className="text-gray-800 text-lg">
          Generates high-quality leads for businesses of all sizes.
        </p>
      </div>
 
 
      <div className="flex items-start gap-3">
        <span className="text-green-500 text-2xl">🤝</span>
        <p className="text-gray-800 text-lg">
          Strengthens customer trust and loyalty.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-pink-500 text-2xl">📈</span>
        <p className="text-gray-800 text-lg">
          Drives consistent traffic to your website.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-orange-500 text-2xl">💰</span>
        <p className="text-gray-800 text-lg">
          Boosts sales with targeted ad campaigns.
        </p>
      </div>
    </div>
  </div>
</motion.div>


        {/* 🎯 FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            When you choose Maxzen.Tech, you gain a growth partner.
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            We focus on measurable results — engagement, leads, website traffic, and
            conversions — all tailored to your business goals.
          </p>
           

          <div className="flex justify-center gap-4 flex-wrap">
            <button 
             onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-[1.02] transition">
              Get Free Consultation
            </button>
            {/* <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
              See Case Studies
            </button> */}
          </div>
        </motion.div>
      </div>
      {/* 🚀 ABOUT OUR SOCIAL MEDIA MARKETING SECTION */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 mt-24 max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-[#f5f9ff] to-[#eef3ff] rounded-3xl shadow-xl border border-gray-200 text-center"
>
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
    About Our Social Media Marketing
  </h2>

  <h3 className="text-2xl font-semibold text-blue-600 mb-6">
    Why Choose Maxzen.Tech for Social Media Marketing?
  </h3>

  <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed mb-10">
    Social media is not just about posting – it’s about building trust, engaging
    your audience, and turning visitors into loyal customers. At{" "}
    <span className="font-semibold text-blue-600">Maxzen.Tech</span>, we provide
    results-driven social media marketing services in Hyderabad, helping businesses
    of all sizes grow through creative posts, reels, videos, and paid ad campaigns.
  </p>

  <div className="flex flex-col items-start gap-4 w-fit mx-auto text-lg text-gray-800 font-medium">
  <div className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-green-100 text-green-600 text-xl">
      <FaUsers />
    </div>
    <span>Increase followers & engagement</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-blue-100 text-blue-600 text-xl">
      <FaHandshake />
    </div>
    <span>Get genuine leads for your business</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-orange-100 text-orange-500 text-xl">
      <FaChartLine />
    </div>
    <span>Boost website traffic & conversions</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-purple-100 text-purple-600 text-xl">
      <FaGlobeAmericas />
    </div>
    <span>Build a strong brand presence across platforms</span>
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
      className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      Talk to Our Experts
      <motion.span
        whileHover={{
          y: -6,
          x: 4,
          rotate: -25,
          transition: { type: 'spring', stiffness: 250, damping: 10 },
        }}
        className="text-white text-lg"
      >
        ✈️
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
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Our SMM Services
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Complete Social Media Marketing Solutions
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
            At{" "}
            <a
              href="https://maxzen.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-semibold underline"
            >
              Maxzen.Tech
            </a>
            , we are a top-rated{" "}
            <span className="font-semibold text-blue-600">
              social media marketing agency in Hyderabad
            </span>{" "}
            helping brands scale through smart strategies, creative campaigns, and
            data-driven growth.
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

          {/* WHY SMM MATTERS */}
          {/* <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Start Your Campaign Today
            </h3>
            <h4 className="text-xl font-semibold text-blue-600 mb-6">
              Why Social Media Marketing Matters
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-semibold">Social Media = Customers + Revenue</span>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              In today’s digital age, your audience spends hours every day scrolling
              through social media. Every like, comment, share, or reel isn’t just
              engagement — it’s a chance to connect with potential customers and grow
              your brand. This is why partnering with the right{" "}
              <span className="font-semibold text-blue-600">
                social media marketing agency in Hyderabad
              </span>{" "}
              is essential for business success.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              At{" "}
              <span className="font-semibold text-blue-600">Maxzen.Tech</span>, we go
              beyond basic posting. Our team builds tailored strategies that strengthen
              brand credibility, attract genuine leads, grow followers, and convert
              traffic into sales. We focus on turning platforms like Instagram, Facebook,
              LinkedIn, and YouTube into powerful engines of business growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Boost My Business Now 🚀
            </motion.button>
          </div>
        </motion.div> */}
      {/* 🌟 REIMAGINED “Start Your Campaign” SECTION */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative mt-24 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 bg-gradient-to-r from-[#eef4ff] via-[#f9fbff] to-[#fff] rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
>
  {/* LEFT CONTENT AREA */}
  <div className="p-10 md:p-16 relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white rounded-3xl md:rounded-none md:rounded-l-3xl">
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-extrabold mb-4 leading-tight"
    >
      Start Your Campaign <br /> <span className="text-yellow-300">Today</span>
    </motion.h3>

    <p className="text-lg text-blue-100 mb-6 leading-relaxed">
      Every like, comment, and share isn’t just engagement — it’s an opportunity.
      Take your brand’s story directly to the people who matter most.
    </p>

    <motion.button
      whileHover={{ scale: 1.07 }}
     onClick={() => navigate("/contact")}
      className="px-8 py-3 mt-2 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-2xl transition-all"
    >
      Boost My Business Now 🚀
    </motion.button>

    {/* Floating decorative icons */}
    <motion.div
      animate={{ y: [0, 12, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="absolute top-10 right-10 text-5xl opacity-40"
    >
      💬
    </motion.div>
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, -10, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
      className="absolute bottom-10 left-8 text-4xl opacity-40"
    >
      🌍
    </motion.div>
  </div>

  {/* RIGHT INFOGRAPHIC FLOW */}
  <div className="p-10 md:p-14">
    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      Why Social Media Marketing Matters
    </h4>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      <span className="font-semibold text-blue-600">Social Media = Customers + Revenue</span>
    </p>

    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start gap-4"
      >
        <div className="text-3xl">📲</div>
        <p className="text-gray-700 text-lg">
          Your customers spend hours daily on Instagram, Facebook, and LinkedIn.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-start gap-4"
      >
        <div className="text-3xl">💡</div>
        <p className="text-gray-700 text-lg">
          Each like, comment, or share is a moment to grow your audience and trust.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-start gap-4"
      >
        <div className="text-3xl">🚀</div>
        <p className="text-gray-700 text-lg">
          Partner with <span className="font-semibold text-blue-600">Maxzen.Tech</span> —
          your social media marketing agency in Hyderabad that turns engagement into growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-start gap-4"
      >
        <div className="text-3xl">🔥</div>
        <p className="text-gray-700 text-lg">
          We build tailored strategies to convert followers into paying customers.
        </p>
      </motion.div>
    </div>

    {/* Small gradient divider */}
    <div className="mt-10 h-[2px] w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

    <p className="mt-6 text-gray-600 text-base italic">
      “Let’s make your brand the next social success story.”
    </p>
  </div>
  </motion.div>
</motion.div>



    </section>
    <Footer/></>
  );
};

export default SocialMediaMarketing;
