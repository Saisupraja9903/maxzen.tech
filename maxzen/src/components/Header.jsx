// // Header.jsx
// import React, { useState } from "react";
// import { FaInstagram, FaFacebookF, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../assests/maxzen logo.webp"; // Replace with your logo path

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#F2F5D1] sticky top-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

//         {/* Left Section - Logo */}
//         <div className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="Maxzen Logo"
//             className="h-14 w-14 rounded-full object-cover"
//           />
//           <div className="flex flex-col justify-center leading-tight">
//             <span className="text-black font-semibold text-3xl font-sans">
//               Maxzen.Tech
//             </span>
//             <span className="text-black font-semibold text-3xl font-sans">
             
//             </span>
//           </div>
//         </div>

//         {/* Center Section - Navigation */}
//         <nav className="hidden md:flex">
//           <ul className="flex gap-10 text-black font-medium">
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Home</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">About</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Services</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Blog</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </nav>

//         {/* Right Section - Social Icons */}
//         {/* <div className="hidden md:flex gap-4 text-xl">
//           <a href="#" className="text-[#E4405F] hover:scale-110 transition-transform">
//             <FaInstagram />
//           </a>
//           <a href="#" className="text-[#1877F2] hover:scale-110 transition-transform">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="text-[#1DA1F2] hover:scale-110 transition-transform">
//             <FaTwitter />
//           </a>
//         </div> */}

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-black text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-[#F2F5D1] px-6 pb-4">
//           <ul className="flex flex-col gap-4 text-black font-medium">
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Home</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">About</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Courses</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Blog</a>
//             </li>
//             <li className="hover:text-yellow-400 transition-colors">
//               <a href="#">Contact</a>
//             </li>
//           </ul>

//           {/* Mobile Social Icons */}
//           <div className="flex gap-4 mt-4 text-xl">
//             <a href="#" className="text-[#E4405F] hover:scale-110 transition-transform">
//               <FaInstagram />
//             </a>
//             <a href="#" className="text-[#1877F2] hover:scale-110 transition-transform">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="text-[#1DA1F2] hover:scale-110 transition-transform">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assests/maxzen logo.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
<header className="bg-[#F2F5D1] sticky top-0 left-0 w-full z-50 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left Section - Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleNavigation("/")}>
          <img
            src={logo}
            alt="Maxzen Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="text-black font-semibold text-3xl">
            Maxzen.Tech
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-10 text-black font-medium">

            {/* HOME */}
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/") ? "text-yellow-500 font-bold" : "text-black"
              } hover:text-yellow-400`}
              onClick={() => handleNavigation("/")}>
              Home
            </li>

            {/* ABOUT */}
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/about") ? "text-yellow-500 font-bold" : "text-black"
              } hover:text-yellow-400`}
              onClick={() => handleNavigation("/about")}>
              About
            </li>

            {/* SERVICES */}
            <li
              className={`relative group cursor-pointer transition-colors ${
                isActive("/services1") ? "text-yellow-500 font-bold" : "text-black"
              } hover:text-yellow-400`}
            >
              <span onClick={() => handleNavigation("/services1")}>Services</span>

              {/* Dropdown */}
             <ul className="absolute left-0 mt-2 w-64 bg-[#F2F5D1] shadow-lg rounded-xl text-left border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

  <li onClick={() => handleNavigation("/servicesdm")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Digital Marketing
  </li>

  <li onClick={() => handleNavigation("/services5")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Social Media Marketing
  </li>

  <li onClick={() => handleNavigation("/serviceswoo")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Woo-commerce Website
  </li>

  <li onClick={() => handleNavigation("/services3")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Web Development
  </li>

  <li onClick={() => handleNavigation("/services4")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    SEO Services in Hyderabad
  </li>

  <li onClick={() => handleNavigation("/services6")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Logo Designing
  </li>

  <li onClick={() => handleNavigation("/services7")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Cloud Computing
  </li>

  <li onClick={() => handleNavigation("/services8")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    App Development
  </li>

  <li onClick={() => handleNavigation("/services9")}
      className="px-4 py-2 rounded-lg text-black transition hover:bg-gradient-to-r hover:from-[#ff8c1a] hover:to-[#0d1b2a] hover:text-white">
    Software Development
  </li>

</ul>

            </li>

            {/* TEAM */}
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/team") ? "text-yellow-500 font-bold" : "text-black"
              } hover:text-yellow-400`}
              onClick={() => handleNavigation("/team")}>
              Team
            </li>

            {/* BLOG */}
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/blog") ? "text-yellow-500 font-bold" : "text-black"
              } hover:text-yellow-400`}
              onClick={() => handleNavigation("/blog")}>
              Blog
            </li>

            {/* CONTACT */}
            <li
              className={`cursor-pointer transition-colors ${
                isActive("/contact") ? "text-yellow-500 font-bold" : "text-black"
              } hover:text-yellow-400`}
              onClick={() => handleNavigation("/contact")}>
              Contact
            </li>

          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
};

export default Header;
