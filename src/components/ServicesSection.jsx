import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaUsers, FaProjectDiagram, FaChartBar } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaBullhorn className="text-5xl text-gray-800" />,
      title: "Social Media Marketing",
      desc: "We leverage SSM for automation and SMM for brand growth, ensuring efficiency and visibility.",
    },
    {
      icon: <FaProjectDiagram className="text-5xl text-gray-800" />,
      title: "Software Development",
      desc: "We specialize in software development, creating scalable and innovative solutions tailored to business needs.",
    },
    {
      icon: <FaUsers className="text-5xl text-gray-800" />,
      title: "Digital Advertising",
      desc: "We drive business growth with digital marketing, enhancing online visibility and engagement.",
    },
    {
      icon: <FaChartBar className="text-5xl text-gray-800" />,
      title: "Branding",
      desc: "We craft compelling branding strategies that establish identity and drive recognition.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col border rounded-xl p-8 shadow-sm bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#f76c6c] w-28 h-28 flex items-center justify-center rounded-sm mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
