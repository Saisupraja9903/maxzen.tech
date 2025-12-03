// import React from "react";
// import d1 from "../assests/Team3.png";
// import d2 from "../assests/Team4.png";
// import d3 from "../assests/Team5.jpg";
// import d4 from "../assests/Team6.png";

// const images = [d1, d2, d3, d4];

// const ThreeDAnimation = () => {
//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

//       {/* Background Grid */}
//       <div className="absolute inset-0 opacity-30 bg-[url('https://i.ibb.co/8MdZbwY/grid.png')] bg-cover"></div>

//       {/* Title Text */}
//       <div className="absolute top-20 text-center text-white drop-shadow-xl">
//         <h1 className="text-5xl font-bold tracking-wide">HOW TO CREATE</h1>
//         <h2 className="text-6xl font-extrabold mt-4">3D ANIMATION</h2>
//       </div>

//       {/* U-SHAPE 3D ROTATION */}
//       <div className="relative">
//         <div className="absolute inset-0 spin-curve transform-style-preserve-3d">

//           {images.map((img, i) => {
//             // Perfect U-shape curve positions
//             const curve = [
//               { x: -260, z: 140, scale: 0.9 },  // far left
//               { x: -120, z: 260, scale: 1.05 }, // mid-left (front)
//               { x: 120,  z: 260, scale: 1.05 }, // mid-right (front)
//               { x: 260,  z: 140, scale: 0.9 },  // far right
//             ];

//             return (
//               <div
//                 key={i}
//                 className="absolute top-0 left-1/2"
//                 style={{
//                   transform: `
//                     translateX(${curve[i].x}px)
//                     translateZ(${curve[i].z}px)
//                     scale(${curve[i].scale})
//                   `,
//                 }}
//               >
//                 <div className="w-48 h-64 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md shadow-[0px_0px_25px_rgba(255,255,255,0.15)]">
//                   <img src={img} className="w-full h-full object-cover rounded-xl" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-red-600 to-transparent"></div>

//       {/* CSS */}
//       <style>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .spin-curve {
//           animation: spinCurve 18s linear infinite;
//         }
//         @keyframes spinCurve {
//           0% { transform: rotateY(0deg); }
//           100% { transform: rotateY(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ThreeDAnimation;


// import React, { useState } from "react";
// import d1 from "../assests/Team3.png";
// import d2 from "../assests/Team4.png";
// import d3 from "../assests/Team5.jpg";
// import d4 from "../assests/Team6.png";

// const images = [d1, d2, d3, d4];

// const ThreeDAnimation = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

//       {/* Background Grid */}
//       <div className="absolute inset-0 opacity-30 bg-[url('https://i.ibb.co/8MdZbwY/grid.png')] bg-cover"></div>

//       {/* Title Text */}
//       <div className="absolute top-20 text-center text-white drop-shadow-xl">
//         <h1 className="text-5xl font-bold tracking-wide">HOW TO CREATE</h1>
//         <h2 className="text-6xl font-extrabold mt-4">3D ANIMATION</h2>
//       </div>

//       {/* U-SHAPE 3D ROTATION + HOVER PAUSE */}
//       <div
//         className="relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div
//           className="absolute inset-0 transform-style-preserve-3d"
//           style={{
//             animation: "spinCurve 18s linear infinite",
//             animationPlayState: isHovered ? "paused" : "running",
//           }}
//         >
//           {images.map((img, i) => {
//             // U-shape curve positions
//             const curve = [
//               { x: -260, z: 140, scale: 0.9 },  // far left
//               { x: -120, z: 260, scale: 1.05 }, // mid-left (front)
//               { x: 120,  z: 260, scale: 1.05 }, // mid-right (front)
//               { x: 260,  z: 140, scale: 0.9 },  // far right
//             ];

//             return (
//               <div
//                 key={i}
//                 className="absolute top-0 left-1/2"
//                 style={{
//                   transform: `
//                     translateX(${curve[i].x}px)
//                     translateZ(${curve[i].z}px)
//                     scale(${curve[i].scale})
//                   `,
//                 }}
//               >
//                 <div className="w-48 h-64 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md shadow-[0px_0px_25px_rgba(255,255,255,0.15)]">
//                   <img src={img} className="w-full h-full object-cover rounded-xl" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-red-600 to-transparent"></div>

//       {/* Extra CSS */}
//       <style>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         @keyframes spinCurve {
//           0% { transform: rotateY(0deg); }
//           100% { transform: rotateY(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ThreeDAnimation;
// import React from "react";

// import img1 from "../assests/appdev11.jpg";
// import img2 from "../assests/cc6.jpg";
// import img3 from "../assests/cc5.jpg";
// import img4 from "../assests/cc1.jpg";
// import img5 from "../assests/cc3.jpg";
// import img6 from "../assests/DM1.jpg";
// import img7 from "../assests/DM2.jpg";
// import img8 from "../assests/DM3.jpg";
// import img9 from "../assests/dms1.jpg";
// import img10 from "../assests/dms3.jpg";

// const images = [
//   img1, img2, img3, img4, img5,
//   img6, img7, img8, img9, img10
// ];

// const ThreeDRotator = () => {
//   return (
//     <div
//       className="
//       relative w-full h-screen overflow-hidden 
//       bg-[#D2D2D2]
//       [background-image:repeating-linear-gradient(to_right,transparent_0_100px,#25283b22_100px_101px),
//        repeating-linear-gradient(to_bottom,transparent_0_100px,#25283b22_100px_101px)]
//       "
//     >

//       {/* Main container */}
//       <div className="banner relative w-full h-full text-center">

//         {/* 3D Slider */}
//         <div
//           className="
//             absolute w-[200px] h-[250px] top-[10%]
//             left-[calc(50%-100px)]
//             transform-style-preserve-3d 
//             animate-autoRun
//             z-[2]
//           "
//           style={{ "--quantity": images.length }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="absolute inset-0"
//               style={{
//                 transform: `
//                   rotateY(calc(((${index} + 1) - 1) * (360 / ${images.length}) * 1deg))
//                   translateZ(550px)
//                 `
//               }}
//             >
//               <img src={image} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>

//         {/* CONTENT SECTION */}
//         <div
//           className="
//             absolute bottom-0 left-1/2 -translate-x-1/2
//             w-full max-w-[1400px]
//             pb-[100px] px-5
//             flex flex-wrap justify-between items-center
//           "
//         >
//           {/* Big heading */}
//           <h1
//             className="
//               text-[16em] leading-none relative font-black text-[#25283B]
//             "
//           >
//             CSS ONLY
//             <span className="
//               absolute inset-0 text-transparent 
//               [-webkit-text-stroke:2px_#d2d2d2]
//             ">
//               CSS ONLY
//             </span>
//           </h1>

//           {/* Author */}
//           <div className="text-right max-w-[200px] font-poppins">
//             <h2 className="text-3xl font-bold">LUN DEV</h2>
//             <p><b>Web Design</b></p>
//             <p>Subscribe to the channel to watch many interesting videos</p>
//           </div>
//         </div>

//       </div>

//       {/* Tailwind keyframes */}
//       <style>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         @keyframes autoRun {
//           from {
//             transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
//           }
//           to {
//             transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
//           }
//         }
//         .animate-autoRun {
//           animation: autoRun 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ThreeDRotator;
