import React from "react";
import { FaGlobe, FaRocket, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const VisionMissionSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Our Vision */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            Our Vision <FaGlobe className="text-blue-500 text-3xl" />
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            At <span className="font-semibold text-black">Maxzen Tech</span>, our
            vision is to become the most trusted{" "}
            <span className="font-semibold">
              digital marketing and IT solutions company in Hyderabad
            </span>
            , helping businesses of all sizes achieve sustainable online growth.
            We aim to create innovative, scalable, and affordable digital
            solutions that empower startups, SMEs, and enterprises to compete
            globally while growing locally.
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            Our Mission <FaRocket className="text-red-500 text-3xl" />
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            Our mission is to deliver result-driven{" "}
            <span className="underline underline-offset-2 decoration-orange-500 font-semibold">
              digital marketing services
            </span>{" "}
            and IT solutions that transform businesses into strong, recognizable
            brands. We strive to:
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-gray-700 text-left">
            <li>
              <span className="text-orange-600 font-bold">
                SEO Experts in Hyderabad
              </span>{" "}
              provide SEO, <span className="font-semibold">Paid Ads</span>, and{" "}
              <span className="underline underline-offset-2 decoration-orange-500 font-semibold">
                Social Media Marketing Agency in Hyderabad
              </span>{" "}
              that drive measurable ROI.
            </li>
            <li>
              Develop creative websites, apps, and{" "}
              <span className="font-semibold">software solutions</span> tailored
              to business needs.
            </li>
            <li>
              Offer affordable, transparent, and innovative digital strategies.
            </li>
            <li>
              Support businesses in adopting{" "}
              <span className="font-semibold">cloud computing</span> and advanced
              technologies for long-term success.
            </li>
          </ul>

          {/* Contact Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
            {/* Phone Section */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                <FaPhoneAlt className="text-gray-800 text-xl" />
              </div>
              <div>
                <p className="uppercase text-sm text-gray-500 tracking-wide">
                  Reach Us
                </p>
                <p className="text-lg font-semibold text-black">
                  +91 90599 91807
                </p>
              </div>
            </div>

            {/* View Story Button */}
            <button className="border border-gray-800 rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition">
              View full story
            </button>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-8">
            <a
              href="https://wa.me/919059991807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 text-lg font-medium gap-2 shadow-md transition"
            >
              <span>WhatsApp</span>
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
