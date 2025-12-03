
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo2 from "../assests/maxzen logo.webp";
import logoo1 from "../assests/logoo19.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 

  // === OPEN GMAIL WITH USER EMAIL ===
  const handleSubmit = () => {
    if (!email.trim()) return;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@maxzen.tech&su=Contact&body=My Email: ${email}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <footer
      className="relative bg-cover bg-center bg-fixed text-white w-full h-full overflow-hidden"
      style={{ backgroundImage: `url(${logoo1})` }}
    >
      {/* ===== Background Overlay ===== */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        animate={{
          scale: [1, 1.03, 1],
          rotate: [0, 0.3, -0.3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===== Content Section ===== */}
      <div className="relative max-w-8xl mx-auto px-6 py-16 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-6">

          {/* ===== Logo + Title ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <motion.img
                src={logo2}
                alt="Logo"
                className="w-20 mb-3"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="flex flex-col justify-center leading-tight">
                <span className="text-white font-semibold text-3xl font-sans hover:text-red-500 transition-all duration-200">
                  Maxzen.Tech
                </span>
              </div>
            </Link>

            <motion.p
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-lg tracking-wide hover:text-red-500 transition-all duration-200"
            >
              Innovate. Transform. Lead.
            </motion.p>
          </motion.div>

          {/* ===== Email Subscribe Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 w-full flex flex-col items-center"
          >
            <motion.h2
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-3xl font-semibold mb-6"
            >
              Get The Best Stories Into Your Inbox
            </motion.h2>

            {/* === Email Input & Gmail Submit === */}
            <div className="flex w-full max-w-3xl bg-white/20 backdrop-blur-md rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent outline-none text-white placeholder-gray-200"
              />
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all"
              >
                SUBMIT
              </motion.button>
            </div>

            <motion.button
              onClick={() => navigate("/blogs")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
            >
              View All Blogs
            </motion.button>
          </motion.div>
        </div>

        {/* ===== Bottom Info Section ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-16 grid md:grid-cols-3 gap-10 text-center md:text-left"
        >
          {/* Office Address */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <h3 className="text-3xl font-bold mb-3">Office Address</h3>
            <p className="flex items-start justify-center text-xl md:justify-start gap-2 hover:text-bg-400 hover:text-red-500 transition-all duration-200 ">
              <FaMapMarkerAlt className="text-red-500 mt-1 " size={30}/>
              408, 4th Floor, Manjeera Trinity Corporate, <br /> KPHB, Hyderabad
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start text-xl gap-2 hover:text-red-500 transition-all duration-200 ">
              <FaEnvelope className="text-red-500" size={26}/> info@maxzen.tech
            </p>
            <p className="flex items-center justify-center md:justify-start text-xl gap-2 mt-2 hover:text-red-500 transition-all duration-200">
              <FaPhoneAlt className="text-red-500" size={26}/> +91 8498989844
            </p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <h3 className="text-2xl font-bold mb-3">We Are Social</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/people/MaxzenTech/61574235826967/"
                className="p-3 text-red-500 rounded-full hover:bg-white hover:text-black transition-all"
              >
               <FaFacebookF size={30} />
              </a>
              <a
                href="https://www.instagram.com/maxzen.tech/?hl=en"
                className="p-3 text-red-500 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaInstagram  size={30}/>
              </a>
             <a
                href="https://www.linkedin.com/company/109898320/admin/dashboard/"
                className="p-3 text-red-500 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="https://www.youtube.com/@maxzentech"
                className="p-3 text-red-500 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <FaYoutube size={30}/>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/918498989844"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full text-2xl shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp />
        </a>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200"
        >
          <div className="flex gap-6 mb-4 md:mb-0 hover:text-red-500 transition-all duration-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
            <a href="/termsandconditions" className="hover:text-white">
              Terms & Condition
            </a>
            <a href="/privacypolicy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <p>© 2025–2026 maxzen.tech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
