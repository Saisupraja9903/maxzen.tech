import React from "react";

const Sections = () => {
  return (
    <div className="bg-gray-50 py-20 space-y-24">
      {/* ---------- STUDENTS SECTION ---------- */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For Students
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Empowering students to explore the future of chip design and
            semiconductor innovation with hands-on experience.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Access
              to interactive chip design tools.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span>{" "}
              Certifications in semiconductor technology.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Mentorship
              programs with industry experts.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
            alt="Students working"
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ---------- TUTORS SECTION ---------- */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1606761568499-6a5c1a3c0f09?auto=format&fit=crop&w=800&q=80"
            alt="Tutor teaching"
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For Tutors
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Empowering professors and mentors to shape the next generation of
            semiconductor engineers through advanced teaching tools.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Access
              to interactive teaching dashboards.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Digital
              lab simulations and real-world projects.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Research
              collaboration with global institutions.
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- INVESTORS SECTION ---------- */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For Investors
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Join us in revolutionizing the semiconductor education and
            manufacturing ecosystem. Support innovations that shape the
            technology of tomorrow.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Partner
              with leading chip education startups.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Early
              access to cutting-edge semiconductor projects.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Shape
              global innovation through sustainable investments.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80"
            alt="Investors"
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default Sections;

