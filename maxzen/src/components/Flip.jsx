import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpeg";
import img4 from "../assests/img4.jpeg";
import img5 from "../assests/img5.jpeg";
import img6 from "../assests/img6.jpeg";

const cards = [
  { img: img1, title: "AWS DevOps" },
  { img: img2, title: "Azure DevOps" },
  { img: img3, title: "Cyber Security" },
  { img: img4, title: "Data Science" },
  { img: img5, title: "Salesforce" },
  { img: img6, title: "Data Analyst" },
  { img: img3, title: "AI Automation" },
  { img: img4, title: "ML With Python" },
];

// grid layout
const generateGrid = (count) => {
  const cols = 4;
  const gapX = 300;
  const gapY = 350;
  const offsetY = 150;

  return Array.from({ length: count }).map((_, i) => ({
    x: (i % cols) * gapX - ((cols - 1) * gapX) / 2,
    y: Math.floor(i / cols) * gapY + offsetY,
  }));
};

const finalGrid = generateGrid(cards.length);

const Card3DExplosion = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    cards.forEach((_, i) => {
      const id = `#card-${i}`;

      const randomX = Math.random() * 70 - 35;
      const randomY = Math.random() * 70 - 35;

      // PHASE 1 → fall + cluster
      animate(
        id,
        {
          x: [0, 0, finalGrid[i].x],
          y: [-500, 0, finalGrid[i].y],
          rotateX: [randomX, 15, 0],
          rotateY: [randomY, -15, 0],
          rotate: [-20 + Math.random() * 40, 10, 0],
          opacity: [0, 1, 1],
          scale: [0.7, 1, 1],
        },
        {
          duration: 2.6,
          ease: "easeOut",
          times: [0, 0.45, 1],
        }
      );

      // PHASE 2 → bounce landing
      animate(
        id,
        { y: finalGrid[i].y - 15 },
        { type: "spring", stiffness: 120, damping: 12 }
      );

      animate(
        id,
        { y: finalGrid[i].y },
        { type: "spring", stiffness: 120, damping: 12 }
      );
    });
  }, []);

  return (
    <section className="w-full bg-gray-100 overflow-hidden py-24">
      <div
        ref={scope}
        className="relative w-full max-w-7xl mx-auto h-[1600px] flex items-start justify-center"
        style={{ perspective: "1500px" }}
      >
        {cards.map((card, i) => (
          <motion.div
            id={`card-${i}`}
            key={i}
            initial={{
              x: 0,
              y: -500,
              rotate: 0,
              rotateX: 0,
              rotateY: 0,
              opacity: 0,
            }}
            whileHover={{
              scale: 1.14,
              rotateX: -8,
              rotateY: 8,
              zIndex: 20,
              boxShadow: "0px 25px 40px rgba(0,0,0,0.25)",
            }}
            className="
              absolute w-[270px] h-[330px]
              bg-white rounded-2xl shadow-xl border border-gray-200
              overflow-hidden transform-gpu
            "
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-4">
              <p className="text-[12px] uppercase text-gray-500">Technology</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">
                {card.title}
              </h3>

              <button className="mt-3 px-4 py-2 text-sm border border-green-600 text-green-600 rounded-full hover:bg-green-50">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card3DExplosion;
