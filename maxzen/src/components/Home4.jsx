// import React from "react";
// import { motion } from "framer-motion";

// // 🔹 Import all partner logos
// import webtechLogo from "../assests/img11.png";
// import busesLogo from "../assests/img9.jpg";
// import swacchLogo from "../assests/img10.jpg";
// import partner1 from "../assests/img13.jpg";
// import partner2 from "../assests/img12.jpg";
// import partner3 from "../assests/logoo8.jpg";

// const Home4 = () => {
//   const logos = [
//     { src: webtechLogo, alt: "Web Technologies" },
//     { src: busesLogo, alt: "M.R. Buses" },
//     { src: swacchLogo, alt: "Swacch" },
//     { src: partner1, alt: "Car Buddy" },
//     { src: partner2, alt: "Swetha Cars and Travels" },
//     { src: partner3, alt: "SkyReach" },
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-white via-orange-50/40 to-white py-24 px-6 md:px-20 overflow-hidden ">
//       {/* 🔶 Animated Background Blobs */}
//       <motion.div
//         animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
//         className="absolute top-20 left-20 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl opacity-40"
//       />
//       <motion.div
//         animate={{ x: [0, -30, 30, 0], y: [0, -40, 40, 0] }}
//         transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
//         className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-40"
//       />

//       {/* 🧡 Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center relative z-10"
//       >
//         <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
//           Partners
//         </p>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
//           Who We Are Associated With
//         </h2>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
//           We take pride in collaborating with industry-leading partners who share our vision and values. 
//           Together, we build better experiences and deliver excellence.
//         </p>
//       </motion.div>

//       {/* 🔹 Animated Partner Cards Grid */}
//       <div className="mt-16 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center"
//         >
//           {logos.map((logo, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 scale: 1.08,
//                 rotate: 1,
//                 boxShadow: "0 12px 30px rgba(255, 165, 0, 0.2)",
//               }}
//               transition={{ type: "spring", stiffness: 200, damping: 15 }}
//               className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-orange-100 w-80 h-80 flex flex-col items-center justify-center overflow-hidden group"
//             >
//               {/* Subtle glow ring effect */}
//               <motion.div
//                 className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-all duration-700"
//               />

//               <motion.img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-28 w-auto object-contain mb-4 transition-transform duration-700 group-hover:scale-110"
//               />
//               <p className="text-gray-800 font-semibold text-lg">{logo.alt}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* 🟠 Floating Dots Animation */}
//       <div className="flex justify-center mt-14 space-x-3 relative z-10">
//         {["#1E3A8A", "#EF4444", "#F97316", "#2563EB"].map((color, i) => (
//           <motion.span
//             key={i}
//             animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
//             transition={{
//               repeat: Infinity,
//               duration: 2 + i,
//               delay: i * 0.3,
//               ease: "easeInOut",
//             }}
//             style={{ backgroundColor: color }}
//             className="w-3 h-3 rounded-full shadow-md"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Home4;


import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaSearchDollar, FaGlobeAsia } from "react-icons/fa";

// Digital Marketing Images
import Img1 from "../assests/img3.jpeg";
import Img2 from "../assests/img4.jpeg";
import Img3 from "../assests/img5.jpeg";
import Img4 from "../assests/img6.jpeg";
import Img5 from "../assests/img7.jpeg";
import Img6 from "../assests/img8.jpeg";

// Partner Logos
import webtechLogo from "../assests/img11.png";
import busesLogo from "../assests/img9.jpg";
import swacchLogo from "../assests/img10.jpg";
import partner1 from "../assests/img13.jpg";
import partner2 from "../assests/img12.jpg";
import partner3 from "../assests/logoo8.jpg";
import client from "../assests/client.webp";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const CombinedDigitalMarketingPartners = () => {
  const logos = [
    { src: webtechLogo, alt: "Web Technologies" },
    { src: busesLogo, alt: "M.R. Buses" },
    { src: swacchLogo, alt: "Swacchh" },
    { src: partner1, alt: "Car Buddy" },
    { src: partner2, alt: "Swetha Cars and Travels" },
    { src: client, alt:" pickndrives" },
    // { src: partner3, alt: "SkyReach" },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* =========================================================
          🔥 DIGITAL MARKETING SECTION
      ========================================================= */}
      <div className="relative bg-gradient-to-b from-white via-orange-50/40 to-white py-24 overflow-hidden">

        {/* 🔶 Animated Background Graphics */}
        <motion.div
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ x: [0, -20, 20, 0], y: [0, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
        />

        {/* 🔸 Floating Icons */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-16 left-24 text-orange-400 text-4xl"
          >
            <FaBullhorn />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-1/3 right-24 text-blue-400 text-4xl"
          >
            <FaChartLine />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-28 left-1/4 text-orange-300 text-4xl"
          >
            <FaSearchDollar />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute bottom-20 right-1/3 text-blue-300 text-4xl"
          >
            <FaGlobeAsia />
          </motion.div>
        </div>

        {/* 🧡 TEXT CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center z=10">
          <motion.h1
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{
              scale: [1, 1.1, 1, 1.05, 1],
              rotate: [-5, 5, -3, 3, 0],
              opacity: 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Looking for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Digital Marketing Service
            </span>{" "}
            in Hyderabad?
          </motion.h1>
 <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6"
        >
          At{" "}
          <span className="text-orange-600 font-semibold">Maxzen.tech</span>, we are a full-service
          digital marketing agency helping businesses grow through smart online strategies, powerful ads,
          and expert SEO techniques. Our team focuses on generating real results — more traffic, better
          visibility, and higher conversions.
        </motion.p>


          <motion.p
                   initial={{ opacity: 0, x: 200 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                   className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
                 >
                   We combine creativity with technology to deliver end-to-end marketing solutions for startups,
                   small businesses, and established brands across industries. Whether you need targeted ad
                   campaigns, SEO ranking improvements, or a complete social media marketing plan —{" "}
                   <span className="text-orange-600 font-semibold">Maxzen.tech</span> is your go-to partner for
                   growth.
                 </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          >
            Our Core Digital Marketing Services
          </motion.h2>
        </div>

        {/* 🖼 Scrolling Image Slider */}
        <div className="relative overflow-hidden z-10">
          <motion.div
            className="flex gap-8 px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 25,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((img, index) => (
              <motion.div
                key={index}
                className="min-w-[22rem] h-[16rem] bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:scale-105 transition-all duration-500"
                whileHover={{ y: -6 }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          🔥 PARTNERS SECTION (Home4)
      ========================================================= */}
      <div className="relative bg-gradient-to-b from-gray-50 to-blue-50 py-24 px-6 md:px-20 overflow-hidden">

        {/* 🔶 Animated Blobs */}
        <motion.div
          animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 22 }}
          className="absolute top-20 left-20 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl opacity-40"
        />

        <motion.div
          animate={{ x: [0, -30, 30, 0], y: [0, -40, 40, 0] }}
          transition={{ repeat: Infinity, duration: 28 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-40"
        />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <p className="text-red-500 font-semibold uppercase text-xl mb-3 tracking-widest">
            Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Who We Are Associated With
          </h2>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            We proudly collaborate with top industry leaders to build powerful,
            future-ready digital experiences.
          </p>
        </motion.div>

        {/* 🔹 Partner Cards Grid */}
        <div className="mt-16 relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg p-8 text-center overflow-hidden border-t-4 border-transparent hover:border-orange-500 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="transition-transform duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-36 rounded-xl w-auto mx-auto object-contain mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{logo.alt}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center mt-14 space-x-3 relative z-10">
          {["#1E3A8A", "#EF4444", "#F97316", "#2563EB"].map((color, i) => (
            <motion.span
              key={i}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 + i, delay: i * 0.3 }}
              style={{ backgroundColor: color }}
              className="w-3 h-3 rounded-full shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CombinedDigitalMarketingPartners;
