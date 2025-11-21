import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import logoo10 from "../assests/logoo10.png";
import logoo11 from "../assests/logoo11.jpg";
import logoo12 from "../assests/logoo12.jpg";
import logoo13 from "../assests/logoo13.jpg";
import logoo14 from "../assests/logoo14.jpg";
import logoo15 from "../assests/logoo15.jpg";
import logoo16 from "../assests/logoo16.jpg";
import logoo17 from "../assests/logoo17.jpg";
import logoo18 from "../assests/logoo18.png";

const projects = [
  {
    id: 1,
    title: "Woo Commerce & Ecommerce Website",
    desc: "We create custom, scalable, and secure online stores with seamless payment integration and optimized user experience.",
    img: logoo10,
  },
  {
    id: 2,
    title: "Creative Responsive Web Designs",
    desc: "We craft visually stunning, mobile-friendly websites that deliver a seamless user experience across all devices.",
    img: logoo11,
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    desc: "We optimize your website to improve rankings, increase organic traffic, and enhance online visibility on search engines.",
    img: logoo12,
  },
  {
    id: 4,
    title: "Social Media Marketing",
    desc: "We strategize, create, and manage impactful social media campaigns to enhance brand visibility, engagement, and conversions.",
    img: logoo13,
  },
  {
    id: 5,
    title: "Software Development",
    desc: "We build custom, scalable, and high-performance software solutions tailored to meet your business needs.",
    img: logoo14,
  },
  {
    id: 6,
    title: "Web Development",
    desc: "We design and develop dynamic, user-friendly, and responsive websites to enhance your online presence and business growth.",
    img: logoo15,
  },
  {
    id: 7,
    title: "Mobile App Development",
    desc: "Design intuitive and visually stunning user interfaces that enhance the digital experience.",
    img: logoo16,
  },
  {
    id: 8,
    title: "Cloud Computing & DevOps",
    desc: "We provide scalable cloud solutions and automated DevOps workflows for seamless deployment, security, and performance optimization.",
    img: logoo17,
  },
  {
    id: 9,
    title: "Logo Design For Your Companies",
    desc: "We create unique, professional, and memorable logos that reflect your brand identity and vision.",
    img: logoo18,
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 Routes for each project
  const projectRoutes = {
    1: "/serviceswoo",
    2: "/serviceswd",
    3: "/services4",
    4: "/services5",
    5: "/services9",
    6: "/services3",
    7: "/services8",
    8: "/servives7",
    9: "/services6",
  };

  return (
    <section className="bg-[#1E1E1E] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <p className="text-red-500 uppercase font-semibold tracking-widest mb-2">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Recently Completed Projects
        </h2>

        {/* Scrollable Cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4">
            
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => navigate(projectRoutes[project.id])}  // ⭐ Navigation Added
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 500, damping: 10 },
                }}
                whileTap={{
                  y: -20,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 500, damping: 10 },
                }}
                className="min-w-[350px] md:min-w-[400px] bg-[#2A2A2A] rounded-2xl p-6 
                flex flex-col justify-between text-left snap-start transition-all duration-500
                hover:shadow-[0_0_25px_rgba(255,165,0,0.4)] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg mb-4 h-[200px] w-full object-cover"
                />

                {/* Title */}
                <h3
                  onClick={() => setActive(index)}
                  className={`text-2xl font-semibold cursor-pointer mb-3 transition-colors duration-300 ${
                    active === index ? "text-orange-500" : "text-white"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {project.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
