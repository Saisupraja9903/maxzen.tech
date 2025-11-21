import React from "react";
import bgImage from "../assests/logoo1.png"; // make sure this path is correct

const Goalss = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#F9FAFB] py-10">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <p className="text-red-500 uppercase tracking-wide font-semibold">
          Our Goals & Mission
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Creative And Progressive Solutions
        </h2>
      </div>

      {/* Image Section */}
      <div className="relative w-[90%] md:w-[85%] lg:w-[80%] rounded-2xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <div
          className="w-full h-[550px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Inside Image */}
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-sm uppercase tracking-widest">
            Goals That We Have
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Being The Best Business In The Industry
          </h3>

          <div className="flex flex-wrap gap-10 mt-6 text-lg font-medium">
            <p>
              Our Agency Based on <br />
              <span className="text-white font-bold">All over India</span>
            </p>
            <p>
              Successfully Completed <br />
              <span className="text-red-500 font-bold">100+ Projects</span>
            </p>
          </div>
        </div>

        {/* Join Us Circle */}
        <div className="absolute -top-16 right-10 bg-red-600 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center text-2xl font-bold border-[10px] border-white shadow-xl animate-float z-40">
          
          <br />
           Join us
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#E9EFCE] rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <p className="uppercase text-gray-700 font-semibold tracking-wide mb-3">
            Our Motive
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Aim Is To Ensure Customer Success
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to empower our customers with innovative, reliable, and
            scalable solutions that drive their success. We prioritize their
            needs, delivering high-quality software and exceptional support to
            help them achieve their business objectives efficiently and
            effectively.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#C7C9AC] rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <p className="uppercase text-red-600 font-semibold tracking-wide mb-3">
            Our Goal
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Working Towards The Future
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are committed to innovation and continuous improvement,
            developing cutting-edge solutions that shape the future. By
            embracing new technologies and forward-thinking strategies, we help
            businesses stay ahead in an ever-evolving digital landscape.
          </p>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); } /* Increased floating distance */
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Goalss;
