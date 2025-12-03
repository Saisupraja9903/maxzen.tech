import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const WhyChooseSection = () => {
  return (
    <section
      className="py-16 px-6 md:px-20 text-center"
      style={{ backgroundColor: "#F2F5D1" }}
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left leading-relaxed mb-12 space-y-2 max-w-4xl mx-auto ">
        Why Choose <span className="text-blue-800">Maxzen.Tech</span> Team?
      </h2>

      {/* Features List */}
      <div className="text-gray-700 text-lg leading-relaxed mb-12 space-y-2 max-w-4xl mx-auto text-left ">
        <p>Highly experienced professionals in web development and digital marketing</p>
        <p>A balance of technical experts and marketing strategists</p>
        <p>Proven track record in SEO, social media, sales, and brand building</p>
        <p>A collaborative approach to help businesses grow faster</p>
        <p>Best support for startups, SMEs, and enterprises in Hyderabad and beyond</p>
      </div>

      {/* Subheading */}
      <h3 className="text-3xl font-semibold text-gray-900  mb-12 space-y-2 max-w-4xl mx-auto text-left">
        Together, We Build & Grow Businesses
      </h3>

      {/* Description */}
      <p className="text-gray-700 max-w-5xl mx-auto text-lg space-y-2 mb-12">
        At <span className="font-semibold text-blue-900">Maxzen.Tech</span>, our
        team is more than just a group of individuals – we are your digital growth
        partners. Whether you need a new website, a powerful SEO strategy, or
        complete{" "}
        <span className="text-green-700 font-semibold">
          digital marketing services in Hyderabad
        </span>
        , our experts work hand-in-hand to achieve your business goals.
      </p>

      {/* Contact Button */}
      <div className="flex justify-center">
        <button className="flex items-center gap-3 bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-md">
          Get in Touch <FaPhoneAlt className="text-white " />
        </button>
      </div>
    </section>
  );
};

export default WhyChooseSection;
