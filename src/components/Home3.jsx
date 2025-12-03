// import React from "react";
// import { motion } from "framer-motion";
// import { FaBullhorn, FaChartLine, FaSearchDollar, FaGlobeAsia } from "react-icons/fa";

// import Img1 from "../assests/img3.jpeg";
// import Img2 from "../assests/img4.jpeg";
// import Img3 from "../assests/img5.jpeg";
// import Img4 from "../assests/img6.jpeg";
// import Img5 from "../assests/img7.jpeg";
// import Img6 from "../assests/img8.jpeg";

// const images = [Img1, Img2, Img3, Img4, Img5, Img6];

// const DigitalMarketing = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-white via-orange-50/40 to-white py-24 overflow-hidden">
//       {/* 🔶 Animated Background Graphics */}
//       <motion.div
//         animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
//         className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"
//       />
//       <motion.div
//         animate={{ x: [0, -20, 20, 0], y: [0, -30, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
//         className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
//       />

//       {/* 🔸 Floating Icons Animation */}
//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <motion.div
//           animate={{ y: [0, -15, 0] }}
//           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           className="absolute top-16 left-24 text-orange-400 text-4xl"
//         >
//           <FaBullhorn />
//         </motion.div>
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           className="absolute top-1/3 right-24 text-blue-400 text-4xl"
//         >
//           <FaChartLine />
//         </motion.div>
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//           className="absolute bottom-28 left-1/4 text-orange-300 text-4xl"
//         >
//           <FaSearchDollar />
//         </motion.div>
//         <motion.div
//           animate={{ y: [0, 20, 0] }}
//           transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
//           className="absolute bottom-20 right-1/3 text-blue-300 text-4xl"
//         >
//           <FaGlobeAsia />
//         </motion.div>
//       </div>

//       {/* 🧡 TEXT CONTENT */}
//       <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center z-10">
//         {/* 🕺 Dancing Heading */}
//         <motion.h1
//           initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
//           animate={{
//             scale: [1, 1.1, 1, 1.05, 1],
//             rotate: [-5, 5, -3, 3, 0],
//             opacity: 1,
//           }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
//         >
//           Looking for a{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
//             Digital Marketing Service
//           </span>{" "}
//           in Hyderabad?
//         </motion.h1>

//         {/* 👈 First Para (Slide from Left) */}
//         <motion.p
//           initial={{ opacity: 0, x: -200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//           className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6"
//         >
//           At{" "}
//           <span className="text-orange-600 font-semibold">Maxzen.tech</span>, we are a full-service
//           digital marketing agency helping businesses grow through smart online strategies, powerful ads,
//           and expert SEO techniques. Our team focuses on generating real results — more traffic, better
//           visibility, and higher conversions.
//         </motion.p>

//         {/* 👉 Second Para (Slide from Right) */}
//         <motion.p
//           initial={{ opacity: 0, x: 200 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 1, ease: "easeOut" }}
//           className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
//         >
//           We combine creativity with technology to deliver end-to-end marketing solutions for startups,
//           small businesses, and established brands across industries. Whether you need targeted ad
//           campaigns, SEO ranking improvements, or a complete social media marketing plan —{" "}
//           <span className="text-orange-600 font-semibold">Maxzen.tech</span> is your go-to partner for
//           growth.
//         </motion.p>

//         {/* Subtitle */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.5 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
//         >
//           Our Core Digital Marketing Services
//         </motion.h2>
//       </div>

//       {/* 🖼️ SCROLLING IMAGES SECTION */}
//       <div className="relative overflow-hidden z-10">
//         <motion.div
//           className="flex gap-8 px-10"
//           animate={{
//             x: ["0%", "-50%"],
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "mirror",
//             duration: 25,
//             ease: "linear",
//           }}
//         >
//           {[...images, ...images].map((img, index) => (
//             <motion.div
//               key={index}
//               className="min-w-[22rem] h-[16rem] bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 hover:scale-105 transition-all duration-500"
//               whileHover={{ y: -6 }}
//             >
//               <img
//                 src={img}
//                 alt={`Service ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* 🟠 CTA BUTTON */}
//       {/* <div className="flex justify-center mt-16">
//         <motion.a
//           href="#services"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.8, duration: 0.8 }}
//           className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 cursor-pointer"
//         >
//           Get Started →
//         </motion.a>
//       </div> */}
//     </section>
//   );
// };

// export default DigitalMarketing;
