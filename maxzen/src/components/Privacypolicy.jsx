import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Info,
  Cog,
  Share2,
  ShieldCheck,
  Link,
  UserCheck,
  ShieldOff,
  FilePenLine,
  Mail,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <><Header/>
    
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-32 pb-24 px-6 text-left">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            At Maxzen Tech, accessible from maxzen.tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-100 via-purple-200 to-slate-200 rounded-full -translate-x-1/2"></div>

          <div className="space-y-16">
            <Section icon={<Info />} title="1. Information We Collect" align="left">
              <h3 className="font-semibold text-gray-800">a. Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Name, Email address, Phone number</li>
                <li>Company & Business details</li>
              </ul>
              <h3 className="font-semibold text-gray-800 mt-3">b. Usage Data</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>IP address, Browser type, Pages visited</li>
                <li>Cookies & analytics data</li>
              </ul>
            </Section>

            <Section icon={<Cog />} title="2. How We Use Your Information" align="right">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>✔ To deliver and improve our services</li>
                <li>✔ To respond to your inquiries and provide support</li>
                <li>✔ To send updates and marketing communications</li>
                <li>✔ For security, analytics, and performance monitoring</li>
              </ul>
              <p className="mt-3 font-medium text-purple-700">We never sell your personal data.</p>
            </Section>

            <Section icon={<Share2 />} title="3. Sharing Your Information" align="left">
              <p className="text-gray-600">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>Trusted service providers (e.g., hosting, analytics)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </Section>

            <Section icon={<ShieldCheck />} title="4. Data Protection" align="right">
              <p className="text-gray-600">We implement strong security measures like encryption and access controls to safeguard your data. However, no online system is 100% secure.</p>
            </Section>

            <Section icon={<Link />} title="5. Third-Party Links" align="left">
              <p className="text-gray-600">Our website may contain links to external sites. We are not responsible for their privacy practices or content.</p>
            </Section>

            <Section icon={<UserCheck />} title="6. Your Rights" align="right">
              <p className="text-gray-600">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>Access, correct, or delete your data</li>
                <li>Withdraw consent and opt-out of marketing</li>
              </ul>
              <p className="mt-3">Email us at: <a href="mailto:support@maxzen.tech" className="font-semibold text-blue-600 hover:underline">support@maxzen.tech</a></p>
            </Section>

            <Section icon={<ShieldOff />} title="7. Children’s Privacy" align="left">
              <p className="text-gray-600">Our services are not intended for children under 13, and we do not knowingly collect their data.</p>
            </Section>

            <Section icon={<FilePenLine />} title="8. Policy Changes" align="right">
              <p className="text-gray-600">We may update this policy periodically. Changes will be posted on this page with an updated effective date.</p>
            </Section>

            <Section icon={<Mail />} title="9. Contact Us" align="left">
              <p className="text-gray-600">For any questions about this Privacy Policy, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-gray-800">Maxzen Tech</p>
                <p>📧 <a href="mailto:info@maxzen.tech" className="text-blue-600 hover:underline">info@maxzen.tech</a></p>
                <p>🌐 <a href="https://maxzen.tech" className="text-blue-600 hover:underline">maxzen.tech</a></p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

const Section = ({ icon, title, children, align }) => {
  const isLeft = align === 'left';
  const variants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className={`relative flex items-start gap-6 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Icon on the timeline */}
      <div className="hidden md:flex absolute top-0 h-full items-start justify-center w-full">
        <div className="sticky top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 p-4 rounded-full">
            {React.cloneElement(icon, { size: 32, strokeWidth: 1.5 })}
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-1/2 bg-white/50 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4 md:hidden">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 p-3 rounded-full">
                {React.cloneElement(icon, { size: 24, strokeWidth: 2 })}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <h2 className="hidden md:block text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="space-y-3 text-base leading-relaxed">{children}</div>
      </div>
    </motion.div>
    

  );
};

export default PrivacyPolicy;
