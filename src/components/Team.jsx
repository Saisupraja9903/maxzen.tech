import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import teamImage from "../assests/team.jpg";
import logoo9 from "../assests/logoo9.png";
import Team1 from "../assests/Team1.jpg";
import Team2 from "../assests/Team2.jpeg";
import Team3 from "../assests/Team3.png";
import Team4 from "../assests/Team4.png";
import Team5 from "../assests/Team5.jpg";
import Team6 from "../assests/Team6.png";
import Team7 from "../assests/Team7.png";
import Team8 from "../assests/Team8.png";
import Team9 from "../assests/Team9.jpg";
import Team10 from "../assests/Team10.png";
import Team11 from "../assests/Team11.jpg";
import Team12 from "../assests/Team12.jpg";
import Team13 from "../assests/Team13.jpg";
import Team14 from "../assests/Team14.jpg";


import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";


const teamMembers = [
  { name: "Vamsi", img: Team1 },
  { name: "Jessie", img: Team2  },
  { name: "Usha", img: Team3  },
  { name: "Prudhvi", img: Team4  },
  { name: "Lokesh", img:Team5  },
  { name: "Sai Kiran", img: Team6 },
  { name: "Alekhya", img: Team7  },
  { name: "Prathap", img: Team8  },
  { name: "Manikanta", img: Team9  },
  { name: "Nayomi", img: Team10  },
  { name: "Yashwanth", img: Team11 },
  { name: "Vamshi", img: Team12  },
  { name: "sudheer", img: Team13  },
  { name: "Lokesh", img: Team14  },
  // { name: "Member 15", img: logoo9 },
  // { name: "Member 16", img: logoo9 },
  // { name: "Member 17", img: logoo9 },
  // { name: "Member 18", img: logoo9 },
  // { name: "Member 19", img: logoo9 },
  // { name: "Member 20", img: logoo9 },
];

const TeamPageCombined = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Header />

      <div className="bg-gradient-to-br from-[#ffffff] via-[#f8f8f8] to-[#e9eef5] min-h-screen w-full relative overflow-hidden overflow-x-hidden">

        {/* global soft background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-72 h-72 bg-orange-200/35 blur-[130px] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/40 blur-[140px] rounded-full"></div>
        </div>

        {/* TEAM SECTION */}
        <div className="bg-white/80 backdrop-blur-md  border border-transparent mx-5 md:mx-20 my-10 rounded-3xl text-gray-800 py-10 px-5 md:px-20 relative z-10">
          <motion.h2
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Our Team – <span className="text-blue-800">Maxzen.Tech</span>
          </motion.h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-blue-800">Maxzen.Tech</span>, we believe a strong
            business starts with a strong team. Our success is powered by the dedication, creativity,
            and expertise of professionals who bring ideas to life.
          </p>

          <div className="mt-10">
            <motion.h3
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8"
            >
              Meet Our Experts
            </motion.h3>

            <motion.div
              initial={{ x: -140, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center bg-[rgba(235,242,208,1)] rounded-2xl shadow-lg p-6 md:p-10"
            >
              <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                <div className="w-80 h-80 md:w-[450px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl flex justify-center items-center bg-white">
                  <img
                    src={teamImage}
                    alt="Team meeting"
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left px-2 sm:px-4">
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
            </motion.div>
          </div>
        </div>

        {/* TEAM MEMBERS */}
        <section className="py-16 bg-white/80 backdrop-blur-md  border border-transparent mx-5 md:mx-20 my-10 rounded-3xl relative z-10">
          <div className="text-center mb-10 px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our <span className="font-semibold">skilled and innovative team</span> dedicated to
              delivering cutting-edge solutions. With expertise in technology and creativity, we drive
              success for your business.
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 px-6 w-max">
        {teamMembers.map((member, index) => (
  <motion.div
    key={index}
    initial={{ y: 150, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 85, damping: 10, delay: index * 0.08 }}
    viewport={{ once: true }}
    className="relative flex-shrink-0 w-56 sm:w-64 h-80 rounded-xl overflow-hidden shadow-[0_0_65px_-6px_rgba(255,140,40,0.75),0_0_85px_-8px_rgba(0,115,255,0.75)] hover:shadow-[0_0_95px_-2px_rgba(255,140,40,1),0_0_115px_-2px_rgba(0,115,255,1)] transition-all duration-300 group"
  >
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-full object-cover transform  transition duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
    <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
      {member.name}
    </h3>
  </motion.div>
))}


            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-16 px-6 md:px-20 text-center bg-[#F2F5D1]/80 backdrop-blur-md  border border-transparent mx-5 md:mx-20 my-10 rounded-3xl relative z-10">
          <motion.h2
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-900 mb-8 text-left leading-relaxed mb-12 space-y-2 max-w-4xl mx-auto "
          >
            Why Choose <span className="text-blue-800">Maxzen.Tech</span> Team?
          </motion.h2>

          <motion.div
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg leading-relaxed mb-12 space-y-2 max-w-4xl mx-auto text-left "
          >
            <p>Highly experienced professionals in web development and digital marketing</p>
            <p>A balance of technical experts and marketing strategists</p>
            <p>Proven track record in SEO, social media, sales, and brand building</p>
            <p>A collaborative approach to help businesses grow faster</p>
            <p>Best support for startups, SMEs, and enterprises in Hyderabad and beyond</p>
          </motion.div>

          <motion.h3
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-900 mb-12 space-y-2 max-w-4xl mx-auto text-left"
          >
            Together, We Build & Grow Businesses
          </motion.h3>

          <motion.p
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-5xl mx-auto text-lg space-y-2 mb-12"
          >
            At <span className="font-semibold text-blue-900">Maxzen.Tech</span>, our team is more than
            just a group of individuals – we are your digital growth partners. Whether you need a new
            website, a powerful SEO strategy, or complete{" "}
            <span className="text-green-700 font-semibold">
              digital marketing services in Hyderabad
            </span>
            , our experts work hand-in-hand to achieve your business goals.
          </motion.p>

          <motion.div
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button 
             onClick={() =>
          window.open("https://wa.me/918498989844?text=Hi! I’d like to know more about your digital marketing services.", "_blank")}
            className="flex items-center gap-3 bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-[0_0_85px_-2px_rgba(0,115,255,1)]">
              Get in Touch <FaPhoneAlt className="text-white " />
            </button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TeamPageCombined;
