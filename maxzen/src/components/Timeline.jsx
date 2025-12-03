import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFlag, FaRocket, FaChartLine } from "react-icons/fa";
import img1 from "../assests/dms2.jpeg";
import img2 from "../assests/dms3.jpg";
import img3 from "../assests/dms4.jpg";

// ------------------ TIMELINE STEPS ------------------
const steps = [
  {
    year: "2025",
    title: "Plan",
    desc: "We dream big but plan smart, mapping your growth journey.",
    sideText:
      "Planning builds clarity and direction. It helps identify goals, challenges, and the best path for success.",
    img: img1,
    color: "border-indigo-500",
    icon: <FaFlag className="text-indigo-600 text-2xl" />,
  },
  {
    year: "2025",
    title: "Execute",
    desc: "Turning ideas into impactful actions for measurable success.",
    sideText:
      "Execution turns strategy into real results—boosting growth, visibility, and customer engagement.",
    img: img2,
    color: "border-yellow-400",
    icon: <FaRocket className="text-yellow-500 text-2xl" />,
  },
  {
    year: "2025",
    title: "Optimize",
    desc: "We analyze, refine, and enhance your performance continuously.",
    sideText:
      "Optimization helps you stay ahead by analyzing performance and continuously improving results.",
    img: img3,
    color: "border-green-500",
    icon: <FaChartLine className="text-green-600 text-2xl" />,
  },
];


// ------------------ TIMELINE COMPONENT ------------------
const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll animation for center vertical line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / rect.height)
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex justify-center py-32 bg-white"
    >
      {/* Center line */}
      <div className="absolute top-0 bottom-[8rem] left-1/2 -translate-x-1/2 w-[4px] bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          ref={lineRef}
          className="absolute top-0 left-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* TIMELINE CONTENT */}
      <div className="relative w-full max-w-6xl px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex w-full items-center my-16 relative">

            {/* CONTENT ON LEFT WHEN IMAGE IS RIGHT */}
            {index % 2 !== 0 && (
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[40%] pr-10 text-right"
              >
                <h4 className="text-xl font-semibold text-indigo-600">
                  {step.title}
                </h4>
                <p className="text-gray-600 mt-2">{step.sideText}</p>
              </motion.div>
            )}

            {/* IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`w-[45%] p-6 rounded-2xl shadow-xl bg-white border-l-8 ${step.color}`}
            >
              <img
                src={step.img}
                alt={step.title}
                className="rounded-xl mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </motion.div>

            {/* CONTENT ON RIGHT WHEN IMAGE IS LEFT */}
            {index % 2 === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[40%] pl-10"
              >
                <h4 className="text-xl font-semibold text-orange-600">
                  {step.title}
                </h4>
                <p className="text-gray-600 mt-2">{step.sideText}</p>
              </motion.div>
            )}

            {/* CENTER ICON */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 
              w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-20"
            >
              {step.icon}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
export default Timeline;
