import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaUsers, FaProjectDiagram, FaChartBar } from "react-icons/fa";

const AboutAndServices = () => {
  const services = [
    {
      icon: <FaBullhorn className="text-3xl text-gray-800" />,
      title: "Social Media Marketing",
      desc: "We leverage SSM for automation and SMM for brand growth, ensuring efficiency and visibility.",
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-gray-800" />,
      title: "Software Development",
      desc: "We specialize in software development, creating scalable and innovative solutions tailored to business needs.",
    },
    {
      icon: <FaUsers className="text-3xl text-gray-800" />,
      title: "Digital Advertising",
      desc: "We drive business growth with digital marketing, enhancing online visibility and engagement.",
    },
    {
      icon: <FaChartBar className="text-3xl text-gray-800" />,
      title: "Branding",
      desc: "We craft compelling branding strategies that establish identity and drive recognition.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* ABOUT SECTION */}
      <section className="pt-16 pb-6 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          About <span className="text-black">Maxzen.Tech</span>
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          At{" "}
          <span className="text-orange-500 font-semibold">Maxzen.Tech</span>, we
          are a full-service digital marketing agency in Hyderabad, located at
          Manjeera Trinity Corporate, 4th Floor, Unit 408, Pin – 500072 JNTU
          Road. We specialize in providing innovative, affordable, and
          result-driven solutions for businesses of all sizes. Our mission is
          simple – to help brands grow digitally, generate organic leads, and
          scale their online presence with cutting-edge strategies.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          With a team of passionate professionals, we blend creativity,
          technology, and marketing expertise to deliver measurable results.
          From <span className="font-semibold text-gray-900">SEO</span> to Paid
          Ads,{" "}
          <span className="text-orange-500 font-semibold">Website Design</span>{" "}
          to{" "}
          <span className="text-orange-500 font-semibold">Cloud Development</span>, 
          we cover everything your business needs to stay ahead in today’s competitive world.
        </p>

        <p className="uppercase tracking-wider text-sm font-semibold text-orange-600 mb-3">
          What We Do
        </p>

        <h3 className="text-3xl md:text-4xl font-bold mb-3 text-black">
          Redefine Business
        </h3>

        <p className="text-lg leading-relaxed text-gray-700">
          We help businesses evolve with innovative solutions that drive
          efficiency and growth. Our approach blends cutting-edge technology
          with strategic insights to create lasting impact. We specialize in
          streamlining operations, enhancing digital presence, and implementing
          data-driven strategies to help businesses stay ahead in a competitive
          market. With a focus on innovation and adaptability, we empower
          organizations to achieve sustainable success.
        </p>
      </section>

      {/* SERVICES SECTION */}
     <section className="pt-2 pb-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10 text-black">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="flex flex-row items-center gap-6 border rounded-xl p-6 shadow-sm bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            y: -4,
            boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* ICON LEFT */}
          <div className="bg-[#f76c6c] w-14 h-14 flex items-center justify-center rounded-lg">
            {React.cloneElement(service.icon, { className: "text-2xl text-gray-800" })}
          </div>

          {/* TEXT RIGHT */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-snug mt-1">
              {service.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutAndServices;
