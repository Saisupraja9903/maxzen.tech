import React from "react";

const Dammi = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Logo Section */}
        <div className="flex items-center gap-3">
          {/* Yellow square logo */}
          <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-md">
            <span className="text-white font-bold text-lg">$</span>
          </div>

          {/* Logo Text */}
          <div>
            <h1 className="font-bold text-gray-900 text-sm leading-tight">
              SEMICONDUCTOR
            </h1>
            <h2 className="font-bold text-gray-900 text-sm leading-tight">
              SCHOOL
            </h2>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#explore" className="hover:text-black transition">
            Explore
          </a>
          <a href="#process" className="hover:text-black transition">
            Process
          </a>
          <a href="#expertise" className="hover:text-black transition">
            Expertise
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Dammi;
