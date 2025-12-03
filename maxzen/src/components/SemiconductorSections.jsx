import React from "react";

// 🔽 Import your local images here
// import studentImage from "../assets/students.jpg";
// import tutorImage from "../assets/tutor.jpg";
// import investorImage from "../assets/investors.jpg";
import semi from "../assests/semi.jpeg";
import logoo11 from "../assests/logoo11.jpg";
import logoo12 from "../assests/logoo12.jpg";

const SemiconductorSections = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 space-y-28">

      {/* ---------------- STUDENTS SECTION ---------------- */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            For Students: Learners with Technology
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Empowering learners to build innovative circuits and semiconductors
            using hands-on virtual tools, mentorship, and real-world challenges.
          </p>
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">✓</span>Practical circuit design & microchip projects.</li>
            <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">✓</span>Simulated semiconductor labs and AI tutors.</li>
            <li className="flex items-start"><span className="text-blue-500 font-bold mr-2">✓</span>Learn through holographic, hands-on visualization.</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300">
            Explore Student Programs
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={logoo12}
            alt="Students working with circuit boards"
            className="rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ---------------- TUTORS SECTION ---------------- */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6 bg-white rounded-3xl shadow-xl py-10 px-8">
        <div className="flex-1 flex justify-center">
          <img
            src={logoo11}
            alt="Tutor teaching semiconductor concepts"
            className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            For Tutors: Teaching Scene
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Empowering professors and mentors with interactive dashboards,
            3D chip simulations, and real-time student analytics for immersive teaching.
          </p>
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span>Smart classrooms with visual semiconductor tools.</li>
            <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span>Real-time collaboration with student groups.</li>
            <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span>Access to a curated resource library & analytics.</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg transition-all duration-300">
            Join as a Tutor
          </button>
        </div>
      </section>

      {/* ---------------- INVESTORS SECTION ---------------- */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
            For Investors: Futuristic Fab & Startup Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Partner with the next generation of semiconductor leaders driving
            global innovation, sustainability, and intelligent chip ecosystems.
          </p>
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-start"><span className="text-yellow-500 font-bold mr-2">✓</span>Connect with semiconductor startups & innovators.</li>
            <li className="flex items-start"><span className="text-yellow-500 font-bold mr-2">✓</span>Invest in AI-driven chip research and digital fabs.</li>
            <li className="flex items-start"><span className="text-yellow-500 font-bold mr-2">✓</span>Drive sustainable, future-ready semiconductor systems.</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-lg transition-all duration-300">
            Explore Investment Options
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={semi}
            alt="Futuristic semiconductor factory"
            className="rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default SemiconductorSections;
