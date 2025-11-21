import React, { useEffect } from "react";
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

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f0f4ff] via-white to-[#fdfcff] pt-28 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            At Maxzen Tech, accessible from maxzen.tech, we are committed to protecting
            your privacy. This policy outlines how we collect, use, and safeguard your information.
          </p>
        </div>
        <div className="space-y-12 text-base leading-relaxed text-gray-700">
          <Section icon={<Info />} title="1. Information We Collect">
            <h3 className="font-semibold text-gray-800 mt-4">a. Personal Information</h3>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Name, Email address, Phone number</li>
              <li>Company/Business details</li>
              <li>Information entered in forms</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">b. Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>IP address, Browser type & version</li>
              <li>Device information, Pages visited</li>
              <li>Cookies & analytics data</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">c. Cookies & Tracking</h3>
            <p className="mt-1">We use cookies and tracking tools to improve website performance and personalize user experience.</p>
          </Section>

          <Section icon={<Cog />} title="2. How We Use Your Information">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Delivering and improving our services</li>
              <li>Responding to enquiries and support requests</li>
              <li>Sending updates and marketing emails</li>
              <li>Website analytics and performance improvement</li>
              <li>Security and fraud prevention</li>
            </ul>
            <p className="mt-2">We never sell your personal data to third parties.</p>
          </Section>

          <Section icon={<Share2 />} title="3. Sharing Your Information">
            <p className="mt-1">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Trusted service providers (hosting, analytics, payment partners)</li>
              <li>Authorities when required by law</li>
              <li>Integrated tools (Google Analytics, CRM platforms)</li>
            </ul>
          </Section>

          <Section icon={<ShieldCheck />} title="4. Data Protection & Security">
            <p className="mt-1">We use strong security measures to safeguard your information. However, no online system is fully secure, and we cannot guarantee complete protection.</p>
          </Section>

          <Section icon={<Link />} title="5. Links to Third-Party Websites">
            <p className="mt-1">Our website may link to external sites. We are not responsible for their privacy policies or content.</p>
          </Section>

          <Section icon={<UserCheck />} title="6. Your Rights">
            <p className="mt-1">You may request to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Access your stored data</li>
              <li>Correct or delete data</li>
              <li>Withdraw consent & Opt-out of marketing</li>
              <li>Restrict data processing</li>
            </ul>
            <p className="mt-2">For requests, email us at: <span className="font-semibold text-blue-600">support@maxzen.tech</span></p>
          </Section>

          <Section icon={<ShieldOff />} title="7. Children’s Privacy">
            <p className="mt-1">We do not knowingly collect data from children under 13, and our services are not intended for minors.</p>
          </Section>

          <Section icon={<FilePenLine />} title="8. Changes to This Policy">
            <p className="mt-1">We may update this Privacy Policy periodically. Any changes will be posted on this page.</p>
          </Section>

          <Section icon={<Mail />} title="9. Contact Us">
            <p className="mt-1">If you have questions about this Privacy Policy, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><span className="font-semibold text-gray-900">Maxzen Tech</span></p>
              <p>📧 Email: <span className="text-blue-600">info@maxzen.tech</span></p>
              <p>🌐 Website: <span className="text-blue-600">maxzen.tech</span></p>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
};

const Section = ({ icon, title, children }) => (
  <div className="grid md:grid-cols-[auto,1fr] gap-x-6 gap-y-2 border-t border-gray-200/90 pt-8">
    {/* Icon */}
    <div className="row-span-2 flex justify-center md:justify-start pt-1">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full h-fit shadow-sm">
        {icon}
      </div>
    </div>
    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    {/* Content */}
    <div className="text-gray-700 space-y-3">{children}</div>
  </div>
);

export default PrivacyPolicy;
