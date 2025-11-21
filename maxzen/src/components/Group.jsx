import React from "react";
import teamImage from "../assests/team.jpg"; // replace with your image path

const TeamSection = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-5 md:px-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Team – <span className="text-blue-800">Maxzen.Tech</span>
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
        At <span className="font-semibold text-blue-800">Maxzen.Tech</span>, we believe a strong
        business starts with a strong team. Our success is powered by the dedication, creativity,
        and expertise of professionals who bring ideas to life.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
          Meet Our Experts
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center bg-[rgba(235, 242, 208, 1)] rounded-2xl shadow-lg p-6 md:p-10">
          
          {/* ✅ Image Box - Bigger & Square */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl flex justify-center items-center bg-white">
              <img
                src={teamImage}
                alt="Team meeting"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>

          {/* ✅ Text Section */}
          <div className="md:w-1/2 text-center md:text-left px-4">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Sales Team</h4>
            <ul className="text-gray-700 font-semibold mb-4 space-y-2">
              <li>Digital Marketing Executives</li>
              <li>Brand Strategists</li>
              <li>Web Developers</li>
              <li>WordPress Developers</li>
              <li>Social Media Marketing Executives</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Our sales team is highly skilled in understanding client needs and building
              long-term business relationships. With proven strategies, they ensure every project
              begins with a clear vision and measurable goals.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mt-14 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Our Team Members</h3>
      </div> */}

    </div>
  );
};

export default TeamSection;
