// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const ScrollCardStack = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Define transforms for each card individually (no loops)
//   const y1 = useTransform(scrollYProgress, [0, 0.33], [0, -200]);
//   const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.95]);
//   const opacity1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.7]);

//   const y2 = useTransform(scrollYProgress, [0.33, 0.66], [200, -200]);
//   const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.95]);
//   const opacity2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.7]);

//   const y3 = useTransform(scrollYProgress, [0.66, 1], [200, -100]);
//   const scale3 = useTransform(scrollYProgress, [0.66, 1], [1, 0.95]);
//   const opacity3 = useTransform(scrollYProgress, [0.66, 1], [1, 0.7]);

//   return (
//     <div
//       ref={containerRef}
//       className="h-[300vh] bg-gray-100 flex flex-col items-center justify-start"
//     >
//       <div className="sticky top-[25%] w-[650px] h-[320px]">
//         {/* Card 1 */}
//         <motion.div
//           style={{
//             y: y1,
//             scale: scale1,
//             opacity: opacity1,
//             backgroundColor: "#fde2e4",
//             zIndex: 3,
//           }}
//           className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
//         >
//           Classic Boutique Collection
//         </motion.div>

//         {/* Card 2 */}
//         <motion.div
//           style={{
//             y: y2,
//             scale: scale2,
//             opacity: opacity2,
//             backgroundColor: "#bee1e6",
//             zIndex: 2,
//           }}
//           className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
//         >
//           Designer Limited Edition
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           style={{
//             y: y3,
//             scale: scale3,
//             opacity: opacity3,
//             backgroundColor: "#cfe1b9",
//             zIndex: 1,
//           }}
//           className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
//         >
//           Luxury Premium Range
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCardStack;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const ScrollCardStack = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Card 1 - slides up and fades out
//   const y1 = useTransform(scrollYProgress, [0, 0.25, 0.4], [0, -100, -200]);
//   const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);

//   // Card 2 - slides in, stays, and slides out
//   const y2 = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [200, 0, -200]);
//   const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.65], [0, 1, 0]);

//   // Card 3 - slides up last
//   const y3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [200, 0, -100]);
//   const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

//   return (
//     <div
//       ref={containerRef}
//       className="h-[300vh] bg-gray-100 flex flex-col items-center justify-start"
//     >
//       <div className="sticky top-[25%] w-[650px] h-[320px]">
//         {/* Card 1 */}
//         <motion.div
//           style={{
//             y: y1,
//             opacity: opacity1,
//             backgroundColor: "#fde2e4",
//             zIndex: 3,
//           }}
//           transition={{ type: "spring", stiffness: 60, damping: 20 }}
//           className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
//         >
//           Classic Boutique Collection
//         </motion.div>

//         {/* Card 2 */}
//         <motion.div
//           style={{
//             y: y2,
//             opacity: opacity2,
//             backgroundColor: "#bee1e6",
//             zIndex: 2,
//           }}
//           transition={{ type: "spring", stiffness: 60, damping: 20 }}
//           className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
//         >
//           Designer Limited Edition
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           style={{
//             y: y3,
//             opacity: opacity3,
//             backgroundColor: "#cfe1b9",
//             zIndex: 1,
//           }}
//           transition={{ type: "spring", stiffness: 60, damping: 20 }}
//           className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
//         >
//           Luxury Premium Range
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ScrollCardStack;

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    color: "#fde2e4",
    text: "Classic Boutique Collection",
  },
  {
    id: 2,
    color: "#bee1e6",
    text: "Designer Limited Edition",
  },
  {
    id: 3,
    color: "#cfe1b9",
    text: "Luxury Premium Range",
  },
  {
    id: 4,
    color: "#d8e2dc",
    text: "New Arrivals & Trending Styles",
  },
];

const ScrollCardStack = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // track scroll direction

  const handleScroll = useCallback(
    (e) => {
      if (e.deltaY > 0 && index < cards.length - 1) {
        // Scroll down
        setDirection(1);
        setIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && index > 0) {
        // Scroll up
        setDirection(-1);
        setIndex((prev) => prev - 1);
      }
    },
    [index]
  );

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 },
    },
    exit: (dir) => ({
      y: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div
      onWheel={handleScroll}
      className="h-screen flex items-center justify-center bg-gray-100 select-none overflow-hidden"
    >
      <div className="relative w-[650px] h-[350px]">
        <AnimatePresence custom={direction}>
          <motion.div
            key={cards[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-2xl font-semibold"
            style={{ backgroundColor: cards[index].color }}
          >
            {cards[index].text}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollCardStack;


