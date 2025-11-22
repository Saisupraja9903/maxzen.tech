import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Rocket } from "lucide-react";

const Home5 = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] py-24 px-6 md:px-20 overflow-hidden">
      {/* BG blobs */}
      <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[28rem] h-[28rem] bg-purple-100 rounded-full blur-[150px] opacity-60"></div>

      {/* Header ANIM DOWN → UP */}
     <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center mb-20 relative z-10"
>
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
    Empowering Digital Growth 
  </h2>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
    At Maxzen.tech, we blend creativity and strategy to transform brands into digital success
    stories. Every solution we deliver is purposeful, elegant, and impactful.
  </p>
</motion.div>


      {/* Two Cards */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        
        {/* CARD 1 LEFT → RIGHT */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-all duration-300">
              <Target className="text-blue-600 w-7 h-7" />
            </div>
            <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
              Our Motive
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Aim Is To Ensure Customer Success
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We believe that our clients’ growth defines our success. With every strategy, we aim to
            build stronger brands, enhance visibility, and create meaningful impact that lasts.
          </p>
        </motion.div>

        {/* CARD 2 RIGHT → LEFT */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="group bg-gradient-to-br from-[#fffaf0] to-[#fefce8] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-yellow-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition-all duration-300">
              <TrendingUp className="text-yellow-600 w-7 h-7" />
            </div>
            <span className="text-sm font-semibold text-yellow-600 tracking-widest uppercase">
              Our Goal
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Working Towards The Future
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to redefine what’s possible. We focus on creativity, efficiency, and
            forward-thinking strategies that keep your brand one step ahead in the digital world.
          </p>
        </motion.div>
      </div>

      {/* CTA SECTION SAME */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl shadow-2xl py-14 px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <Rocket className="w-10 h-10 text-white opacity-90" />
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Partner with Maxzen.tech — Let’s Build the Future Together
          </h3>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto leading-relaxed">
            Collaborate with us to unlock your brand’s full potential.  
            From concept to launch, we craft experiences that engage, inspire, and convert.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Home5;
