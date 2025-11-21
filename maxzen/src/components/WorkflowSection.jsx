// import React, { useState } from "react";
// import { FaSearch, FaProjectDiagram, FaSitemap, FaBullseye } from "react-icons/fa";

// const WorkflowSection = () => {
//   const [active, setActive] = useState(null);

//   const items = [
//     {
//       id: 1,
//       icon: <FaSearch className="text-3xl text-black" />,
//       title: "Researching",
//       description:
//         "We analyze market trends and consumer behavior to build a strong foundation for your brand.",
//     },
//     {
//       id: 2,
//       icon: <FaProjectDiagram className="text-3xl text-black" />,
//       title: "Planning",
//       description:
//         "Strategic roadmaps ensure seamless execution and long-term success.",
//     },
//     {
//       id: 3,
//       icon: <FaSitemap className="text-3xl text-black" />,
//       title: "Organizing",
//       description:
//         "We streamline processes and optimize resources for efficient brand growth.",
//     },
//     {
//       id: 4,
//       icon: <FaBullseye className="text-3xl text-black" />,
//       title: "Achieve",
//       description:
//         "Turning strategies into measurable results that elevate your brand.",
//     },
//   ];

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Header */}
//         <p className="text-red-500 tracking-widest font-semibold uppercase mb-2">
//           Our Workflow
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
//           We Develop Your Brand!
//         </h2>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
//           {items.map((item, index) => (
//             <div
//               key={item.id}
//               onClick={() => setActive(active === item.id ? null : item.id)}
//               className="relative group flex flex-col items-center text-center cursor-pointer p-4 transition-all duration-500"
//             >
//               {/* Animated Background Number */}
//               <span
//                 className={`absolute text-[150px] font-extrabold text-red-100 z-0 select-none transition-all duration-700 ease-in-out ${
//                   active === item.id ? "scale-125 translate-z-0" : "scale-100"
//                 }`}
//                 style={{ top: "10px", opacity: "0.4" }}
//               >
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               {/* Icon */}
//               <div className="relative z-10 mb-4">{item.icon}</div>

//               {/* Title */}
//               <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="relative z-10 text-gray-600 max-w-xs mx-auto">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-14">
//           <button className="border border-gray-800 rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition">
//             Explore Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

//--------------------just floating + no gloing

// import React from "react";
// import { FaSearch, FaProjectDiagram, FaSitemap, FaBullseye } from "react-icons/fa";

// const WorkflowSection = () => {
//   const items = [
//     {
//       id: 1,
//       icon: <FaSearch className="text-3xl text-black" />,
//       title: "Researching",
//       description:
//         "We analyze market trends and consumer behavior to build a strong foundation for your brand.",
//     },
//     {
//       id: 2,
//       icon: <FaProjectDiagram className="text-3xl text-black" />,
//       title: "Planning",
//       description:
//         "Strategic roadmaps ensure seamless execution and long-term success.",
//     },
//     {
//       id: 3,
//       icon: <FaSitemap className="text-3xl text-black" />,
//       title: "Organizing",
//       description:
//         "We streamline processes and optimize resources for efficient brand growth.",
//     },
//     {
//       id: 4,
//       icon: <FaBullseye className="text-3xl text-black" />,
//       title: "Achieve",
//       description:
//         "Turning strategies into measurable results that elevate your brand.",
//     },
//   ];

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Header */}
//         <p className="text-red-500 tracking-widest font-semibold uppercase mb-2">
//           Our Workflow
//         </p>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
//           We Develop Your Brand!
//         </h2>

//         {/* Steps */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
//           {items.map((item, index) => (
//             <div
//               key={item.id}
//               className="relative flex flex-col items-center text-center cursor-pointer p-4 transition-all duration-500"
//             >
//               {/* Auto Floating Background Number */}
//               <span
//                 className={`absolute text-[150px] font-extrabold text-red-100 z-0 select-none opacity-40 animate-float`}
//                 style={{
//                   top: "10px",
//                   transformOrigin: "center",
//                   animationDelay: `${index * 0.4}s`, // stagger animation start for variety
//                 }}
//               >
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               {/* Icon */}
//               <div className="relative z-10 mb-4">{item.icon}</div>

//               {/* Title */}
//               <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="relative z-10 text-gray-600 max-w-xs mx-auto">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-14">
//           <button className="border border-gray-800 rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition">
//             Explore Now
//           </button>
//         </div>
//       </div>

//       {/* Floating Animation Keyframes */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-15px) scale(1.05) rotate(3deg);
//             }
//           }
//           .animate-float {
//             animation: float 2.5s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

import React from "react";
import { FaSearch, FaProjectDiagram, FaSitemap, FaBullseye } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const WorkflowSection = () => {
  const items = [
    {
      id: 1,
      icon: <FaSearch className="text-3xl text-black" />,
      title: "Researching",
      description:
        "We analyze market trends and consumer behavior to build a strong foundation for your brand.",
    },
    {
      id: 2,
      icon: <FaProjectDiagram className="text-3xl text-black" />,
      title: "Planning",
      description:
        "Strategic roadmaps ensure seamless execution and long-term success.",
    },
    {
      id: 3,
      icon: <FaSitemap className="text-3xl text-black" />,
      title: "Organizing",
      description:
        "We streamline processes and optimize resources for efficient brand growth.",
    },
    {
      id: 4,
      icon: <FaBullseye className="text-3xl text-black" />,
      title: "Achieve",
      description:
        "Turning strategies into measurable results that elevate your brand.",
    },
  ];
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-red-500 tracking-widest font-semibold uppercase mb-2">
          Our Workflow
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          We Develop Your Brand!
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center text-center cursor-pointer p-4 transition-all duration-500"
            >
              {/* Auto Floating + Glowing Background Number */}
              <span
                className={`absolute text-[150px] font-extrabold text-red-200 z-0 select-none opacity-50 animate-float-glow`}
                style={{
                  top: "10px",
                  transformOrigin: "center",
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative z-10 mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button 
          onClick={() => navigate("/services1")}
          className="border border-gray-800 rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition">
            Explore Now
          </button>
        </div>
      </div>

      {/* Floating + Glow Animation */}
      <style>
        {`
          @keyframes float-glow {
            0%, 100% {
              transform: translateY(0) scale(1);
              text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
            }
            50% {
              transform: translateY(-15px) scale(1.1) rotate(3deg);
              text-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
            }
          }
          .animate-float-glow {
            animation: float-glow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default WorkflowSection;


