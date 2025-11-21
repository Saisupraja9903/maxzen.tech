import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import s1 from "../assests/woo1.jpg";
import s2 from "../assests/woo2.jpg";
import s3 from "../assests/woo3.jpg";
import s4 from "../assests/woo4.jpg";

import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// // WooCommerce Brand Colors
// const wooPrimary = "#96588A";
// const wooDark = "#7a476e";
// const wooLight = "#b77fa8";
// const wooBg = "#f7eaf4";

// const wooPrimary = "#A8A29E";
// const wooDark    = "#78716C";
// const wooLight   = "#CECAC7";
// const wooBg      = "#F5F5F4";
//  const wooPrimary = "#9EA4AB";
// const wooDark    = "#565C63";
// const wooLight   = "#C9CDD2";
// const wooBg      = "#F0F1F3";
 const wooPrimary = "#3D8DFF";   // Medium clean blue
const wooDark    = "#2C69C7";   // Slightly darker blue
const wooLight   = "#FFA855";   // Soft orange accent
const wooBg      = "#F4F8FF";   // Light blue-ish background


// ---------- SERVICES DATA ----------
const services = [
  {
    img: s1,
    title: "Secure",
    description:
      "WooCommerce ensures safe transactions with regular security updates, SSL compatibility, and secure payment gateway integration. Your customer data and payments remain protected..",
    link: "/service-web-app",
  },
  {
    img: s2,
    title: "Flexibility",
    description:
      "WooCommerce is highly flexible, allowing you to build anything from a small store to a large-scale e-commerce platform. It supports unlimited products, categories, and customizations tailored to your business.",
    link: "/service-mobile-app",
  },
  {
    img: s3,
    title: "SEO-Friendly",
    description:
      "Built on WordPress, WooCommerce is naturally SEO-friendly. With the right keywords, meta tags, and optimization, your store can easily rank higher in Google and attract more customers.",
    link: "/service-custom-software",
  },
  {
    img: s4,
    title: "Affordable",
    description:
      "Compared to other e-commerce platforms, WooCommerce is cost-effective. You get professional-grade features and scalability at a fraction of the cost, making it ideal for startups and growing businesses.",
    link: "/service-ui-ux",
  },
];


// ---------- Animated Heading ----------
const AnimatedHeading = () => {
  const fullText =
    "Software Development Company in Hyderabad | Maxzen.Tech";
  const words = fullText.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const wordInterval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev.length < words.length) {
            return [...prev, words[prev.length]];
          }
          clearInterval(wordInterval);
          return prev;
        });
      }, 180);
      return () => clearInterval(wordInterval);
    }, 400);

    return () => clearTimeout(timer);
  }, [words]);
   useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  return (
    <h1 className="text-center text-3xl md:text-4xl font-bold py-10 text-[#96588A]">
      {visibleWords.join(" ")}
    </h1>
  );
};

// ---------- Services Hover Expanding Images ----------
const SoftwareServiceImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      {/* <section
        className="relative w-full py-10 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${wooBg}, white, ${wooLight}22)`,
        }}
      ></section> */}

      <div
        className="flex h-[330px] rounded-xl shadow-lg overflow-hidden"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(s.link)}
            className={`relative overflow-hidden h-full cursor-pointer active:scale-95 transition-transform ${
              i === 0 ? "rounded-l-xl" : ""
            } ${i === services.length - 1 ? "rounded-r-xl" : ""}`}
            onMouseEnter={() => setHoveredIndex(i)}
            animate={{
              flex: hoveredIndex === null ? 1 : hoveredIndex === i ? "45%" : "18%",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ pointerEvents: "auto", willChange: "flex" }}
          >
            {/* Service Image */}
            <motion.img
              src={s.img}
              className="w-full h-full object-cover"
              animate={{
                scale: hoveredIndex === i ? 1.08 : 1,
                filter:
                  hoveredIndex === i
                    ? "brightness(0.75)"
                    : "brightness(1)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white"
              style={{
                backgroundColor: `${wooPrimary}CC`,
                backdropFilter: "blur(3px)",
              }}
            >
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <p className="text-sm mt-2 text-center">{s.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// ---------- Main Export ----------
export default function Serviceswoo() {

  // ✅ ADD HERE
  const navigate = useNavigate();
  const [btnText, setBtnText] = useState("Explore our WooCommerce Services 🚀");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />

      {/* --- WooCommerce Intro Section --- */}
      <section
        className="relative py-24 px-6 md:px-12 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${wooBg}, white, ${wooLight}33)`,
        }}
      >
        {/* Decorative Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
         transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}

          className="absolute top-[-80px] left-[-120px] w-80 h-80 rounded-full blur-3xl"
          style={{ background: `${wooPrimary}33` }}
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-100px] right-[-120px] w-96 h-96 rounded-full blur-3xl"
          style={{ background: `${wooDark}33` }}
        ></motion.div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
  {/* <AnimatedHeading/> */}
          {/* <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${wooPrimary}, ${wooLight})`,
            }}
          >
            Top WooCommerce Web Development Company in Hyderabad
          </motion.h2> */}
       

       <div className="max-w-6xl mx-auto">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-5xl font-extrabold text-center mb-12"
    style={{
      color: wooPrimary,   // 🎯 Single solid color
    }}
  >
    {/* WooCommerce Development Expertise in Hyderabad */}
    WooCommerce Development
  </motion.h2>
</div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-700 max-w-4xl mx-auto mb-8"
          >
            Maxzen.Tech specializes in WooCommerce development, building fast,
            SEO-optimized, mobile-responsive eCommerce stores.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Box */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: wooPrimary }}>
                WooCommerce Development in Hyderabad
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                WooCommerce is flexible, scalable, and feature-rich. We build
                full eCommerce solutions that support payments, orders,
                inventory, and conversions.
              </p>
              <motion.a
  whileHover={{ scale: 1.05 }}
  // onClick={() =>
  //         window.open("https://wa.me/919059991807?text=Hi! I want to grow my business online with Maxzen.Tech", "_blank")
   onClick={() =>
          navigate("/contact")
        }
  rel="noopener noreferrer"
  className="px-8 py-3 rounded-full text-white shadow-lg inline-block"
  style={{
    background: `linear-gradient(to right, ${wooPrimary}, ${wooLight})`,
  }}
>
  Book a Consultation
</motion.a>

            </motion.div>

            {/* Right Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-3xl shadow-lg text-white"
              style={{
                background: `${wooPrimary}DD`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Maxzen.Tech?</h3>
              <p className="leading-relaxed opacity-90">
                As Hyderabad's trusted WooCommerce experts, we deliver
                mobile-friendly, SEO-ready, conversion-optimized online stores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SoftwareServiceImages />

      {/* ------------------ WOO COMMERCE CONTENT SECTION ------------------ */}
      <section
        className="py-24 px-6 md:px-20"
        style={{
          background: `linear-gradient(to bottom, white, ${wooBg}, white)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
            style={{
              backgroundImage: `linear-gradient(to right, ${wooPrimary}, ${wooLight})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            WooCommerce Development Expertise in Hyderabad
               
          </motion.h2>

          {/* Content blocks */}
          {[
            {
              title: "Local Experts in WooCommerce Website Development Hyderabad",
              text: "Located in KPHB, Kukatpally ... tailored to your goals.",
              bg: "white",
              color: wooPrimary,
            },
            {
              title: "Complete WooCommerce Development Services in Hyderabad",
              text: "We offer end-to-end WooCommerce solutions ... customization.",
              bg: wooPrimary,
              dark: true,
            },
            {
              title: "SEO-Friendly & Fast WooCommerce Websites",
              text: "We implement SEO, schema, speed optimization ... conversions.",
              bg: "white",
              color: wooPrimary,
            },
            {
              title: "Custom-Designed & Mobile-Optimized Stores",
              text: "Every brand deserves a unique identity ... seamless UX.",
              bg: wooPrimary,
              dark: true,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-3xl shadow-xl mb-10"
              style={{
                background: item.dark ? `${wooPrimary}DD` : item.bg,
                color: item.dark ? "white" : "#444",
                border:
                  item.bg === "white" ? `1px solid ${wooPrimary}33` : "none",
              }}
            >
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: item.dark ? "white" : item.color }}
              >
                {item.title}
              </h3>
              <p className="leading-relaxed opacity-90">{item.text}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 text-center rounded-3xl shadow-xl text-white"
            style={{
              background: `linear-gradient(to right, ${wooPrimary}, ${wooLight})`,
            }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Explore Our WooCommerce Services
            </h3>
            <p className="text-lg opacity-95 mb-6">
              We offer complete eCommerce development, online store management,
              SEO, and digital growth strategies.
            </p>

            <motion.button
  whileHover={{ scale: 1.08 }}
  onMouseEnter={() => setBtnText("Maxzen.Tech")}
  onMouseLeave={() => setBtnText("Explore our WooCommerce Services 🚀")}
  onClick={() => navigate("/contact")}
  className="px-10 py-3 bg-white text-[#96588A] font-bold rounded-full shadow-lg transition-all duration-300"
>
  {btnText}
</motion.button>

          </motion.div>
        </div>
      </section>
      {/* ---------------- WOO-COMMERCE TESTIMONIALS SECTION ---------------- */}
<section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-[#f7eaf4] to-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2
      className="text-center text-4xl md:text-5xl font-extrabold mb-12"
      style={{
        backgroundImage: "linear-gradient(to right, #3D8DFF)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Client Testimonials
    </h2>

    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 }, // show 2 cards on desktop
      }}
      className="pb-14"
    >
      {/* -------- Testimonial 1 -------- */}
      <SwiperSlide>
        <div className="bg-white shadow-xl rounded-3xl p-8 relative border border-[#96588A20] min-h-[350px]">
          <h3 className="text-xl font-semibold text-[#96588A] mb-1">
            Website Development & Digital Marketing
          </h3>

          <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>

          <p className="text-gray-700 leading-relaxed mb-6">
            "Maxzen.Tech transformed our online presence with a responsive, SEO-friendly
            website and effective digital marketing. We saw a 45% traffic increase in
            3 months!"
          </p>

          <p className="text-xs text-gray-500 mb-4">7 Days Ago</p>

          <div
            className="absolute left-0 right-0 bottom-0 h-20 flex flex-col items-center justify-center rounded-b-3xl text-white"
            style={{ background: "linear-gradient(to right, #3D8DFF)" }}
          >
            <h4 className="text-lg font-semibold">Rohith Reddy</h4>
            <p className="text-sm opacity-90">Business Owner (Hyderabad)</p>
          </div>
        </div>
      </SwiperSlide>

      {/* -------- Testimonial 2 -------- */}
      <SwiperSlide>
        <div className="bg-white shadow-xl rounded-3xl p-8 relative border border-[#96588A20] min-h-[350px]">
          <h3 className="text-xl font-semibold text-[#96588A] mb-1">
            WooCommerce Web Development
          </h3>

          <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>

          <p className="text-gray-700 leading-relaxed mb-6">
            "Our WooCommerce store was built by Maxzen.Tech and the results were amazing.
            The site is fast, secure, and optimized!"
          </p>

          <p className="text-xs text-gray-500 mb-4">10.04.2025</p>

          <div
            className="absolute left-0 right-0 bottom-0 h-20 flex flex-col items-center justify-center rounded-b-3xl text-white"
            style={{ background: "linear-gradient(to right, #3D8DFF)" }}
          >
            <h4 className="text-lg font-semibold">Sneha Patel</h4>
            <p className="text-sm opacity-90">Fashion Store Startup (India)</p>
          </div>
        </div>
      </SwiperSlide>

      {/* -------- Testimonial 3 -------- */}
      <SwiperSlide>
        <div className="bg-white shadow-xl rounded-3xl p-8 relative border border-[#96588A20] min-h-[350px]">
          <h3 className="text-xl font-semibold text-[#96588A] mb-1">
            Branding & UI/UX
          </h3>

          <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>

          <p className="text-gray-700 leading-relaxed mb-6">
            "The UI/UX team at Maxzen.Tech redesigned our website beautifully!
            Our customer engagement improved massively.”
          </p>

          <p className="text-xs text-gray-500 mb-4">15.03.2025</p>

          <div
            className="absolute left-0 right-0 bottom-0 h-20 flex flex-col items-center justify-center rounded-b-3xl text-white"
            style={{ background: "linear-gradient(to right, #3D8DFF)" }}
          >
            <h4 className="text-lg font-semibold">Arun Varma</h4>
            <p className="text-sm opacity-90">Startup Founder</p>
          </div>
        </div>
      </SwiperSlide>

      {/* -------- Testimonial 4 -------- */}
      <SwiperSlide>
        <div className="bg-white shadow-xl rounded-3xl p-8 relative border border-[#96588A20] min-h-[350px]">
          <h3 className="text-xl font-semibold text-[#96588A] mb-1">
            SEO & Performance Marketing
          </h3>

          <div className="flex text-yellow-400 text-xl mb-3">★★★★★</div>

          <p className="text-gray-700 leading-relaxed mb-6">
            "Their SEO strategies helped us reach page 1 on Google in 2 months.
            Excellent support & communication!"
          </p>

          <p className="text-xs text-gray-500 mb-4">02.02.2025</p>

          <div
            className="absolute left-0 right-0 bottom-0 h-20 flex flex-col items-center justify-center rounded-b-3xl text-white"
            // style={{ background: "linear-gradient(to right, #96588A, #b77fa8)" }}
             style={{ background: "linear-gradient(to right, #3D8DFF)" }}
          >
            <h4 className="text-lg font-semibold">Varsha Nair</h4>
            <p className="text-sm opacity-90">E-Commerce Owner</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    {/* <AnimatedHeading/> */}

  </div>

</section>


      <Footer />
    </>
    
  );
}

