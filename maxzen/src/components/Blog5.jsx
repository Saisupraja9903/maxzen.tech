import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

const SoftwareTestingIntro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <div className="bg-gray-50">
        <section className="relative w-full h-[200px] bg-blue-100">
        
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight "
            >
              Best Software Testing Companies in Hyderabad (2025 Guide)

            </motion.h1>
          </div>
        </section>

        {/* ========================== INTRO SECTION (NEW DESIGN) ========================== */}
        <section className="max-w-7xl mx-auto py-24 px-6">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                If you’re searching for the best software testing companies in Hyderabad,
                one company consistently stands at the top — <strong>maxzen.tech</strong>.
                Located at KPHB 3rd Phase, Manjeera Trinity Corporate, maxzen.tech is trusted
                by startups, enterprises, and SaaS brands for delivering high-quality QA services.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 shadow-md">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>KPHB (Kukatpally Housing Board)</strong> is one of Hyderabad’s strongest
                  IT and commercial hotspots—offering metro connectivity, business infrastructure,
                  and proximity to Hitech City, Madhapur, Kondapur & Gachibowli.  
                  This makes <strong>maxzen.tech</strong> a preferred QA partner.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================= WHY HYDERABAD IS A HUB – NEW DESIGN ======================= */}
        <section className="max-w-7xl mx-auto py-20 px-6">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-gray-900 text-center mb-8"
          >
            Why Hyderabad Is a Hub for Software Testing
          </motion.h2>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-16"
          >
            Hyderabad continues to rise as a global IT powerhouse with increasing demand across
            all major software testing disciplines.
          </motion.p>

          {/* NEW STRUCTURE: Feature Rows */}
          <div className="space-y-14 max-w-5xl mx-auto">
            {[
              "Manual testing",
              "Automation testing",
              "Performance testing",
              "Security testing",
              "Mobile app testing",
              "API testing",
              "Enterprise-grade QA",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-6 items-start"
              >
                {/* Icon */}
                <div className="min-w-[65px] min-h-[65px] bg-blue-100 text-blue-600 text-3xl rounded-2xl shadow-inner flex items-center justify-center">
                  <FaCheckCircle />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Demand for {item.toLowerCase()} is expanding rapidly across startups, 
                    enterprises, and SaaS companies as Hyderabad strengthens its position in global IT.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

        {/* ======================= MAXZEN.TECH DEEP DIVE ======================= */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
                maxzen.tech – No.1 Software Testing Company in Hyderabad
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Companies located in Madhapur, Hitech City, Ameerpet, Gachibowli, and KPHB rely on professional QA teams to maintain software quality and reliability.
              </p>
              <div className="mt-6 text-lg text-gray-800 bg-blue-50 border border-blue-200 rounded-2xl p-4 inline-block shadow-sm">
                📍 Located at <strong>KPHB 3rd Phase, Manjeera Trinity Corporate</strong>, maxzen.tech is renowned for delivering accurate, scalable, and affordable testing services.
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 mt-20 items-start">

              {/* Why maxzen.tech is No. 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  ✔ Why maxzen.tech Is Ranked No.1
                </h3>
                <ul className="space-y-4">
                  {[
                    "Easily reachable location in KPHB, a major Hyderabad tech hub",
                    "Highly skilled manual & automation testing engineers",
                    "100% accuracy in bug detection",
                    "Fast and professional QA delivery",
                    "Transparent documentation system",
                    "Dedicated testers for every project",
                    "End-to-end QA from requirement analysis to deployment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 min-w-[20px]" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services Offered */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  ✔ Software Testing Services Offered
                </h3>
                <ul className="space-y-4">
                  {[
                    "Manual Testing",
                    "Automation Testing (Playwright, Selenium, Cypress)",
                    "Web & Mobile App Testing",
                    "API Testing",
                    "Performance & Load Testing",
                    "Functional & Non-functional Testing",
                    "Security & Pen Testing",
                    "Regression & UAT Testing",
                    "Complete QA Consulting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 min-w-[20px]" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Concluding Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-20"
            >
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 shadow-md max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-800 leading-relaxed">
                  maxzen.tech’s location in KPHB 3rd Phase makes it extremely convenient for clients from <strong>Madhapur, Hitech City, Kondapur, Gachibowli, and Jubilee Hills</strong>.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default SoftwareTestingIntro;
