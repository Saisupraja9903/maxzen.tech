import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  CreditCard,
  Users,
  Key,
  Server,
  Lock,
  Clock,
  FilePen,
  ShieldAlert,
  FileX,
  Book,
  Gavel,
  Mail,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Section = ({ icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white/60 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full shadow-sm">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="pl-16 text-gray-700 space-y-3">{children}</div>
  </motion.div>
);

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <><Header/>
    <section className="min-h-screen bg-gradient-to-b from-[#f0f4ff] via-white to-[#fdfcff] pt-28 pb-20 px-5 text-left">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
          Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          At Maxzen Tech, these Terms &amp; Conditions outline the rules, responsibilities,
          and legal guidelines that apply when you access our website or engage our
          digital services.
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed">
          <Section icon={<FileText />} title="1. Acceptance of Terms">
            <p className="text-gray-700">
              By accessing or using the website{" "}
              <span className="font-medium text-blue-600 hover:underline">www.maxzen.tech</span> and/or engaging our
              services, you agree to be bound by these Terms &amp; Conditions. If you do
              not agree, please do not use the website or procure any services from
              Maxzen Tech.
            </p>
          </Section>

          <Section icon={<Briefcase />} title="2. Services Provided">
            <p className="text-gray-700">
              Maxzen Tech offers digital and IT services, including but not limited to:
              website design &amp; development, mobile/app development, e-commerce
              solutions, digital marketing, SEO/SEM, branding, social media management,
              software consulting, and maintenance. The specific scope, deliverables,
              timelines, and fees for any project will be outlined in a separate proposal
              or agreement.
            </p>
          </Section>

          <Section icon={<CreditCard />} title="3. Quotes, Payment & Commencement">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>All service quotations are valid for a defined period as specified.</li>
              <li>Projects begin only after proposal acceptance and receipt of any required deposit.</li>
              <li>Payment schedules and final terms will be detailed in your agreement.</li>
              <li>Delayed payments may result in suspension or delay of the work.</li>
              <li>Unless otherwise specified, all payments made are non-refundable.</li>
            </ul>
          </Section>

          <Section icon={<Users />} title="4. Client Responsibilities">
            <p className="text-gray-700">To enable us to provide the services, the client agrees to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Provide accurate, complete, and timely information, content, and feedback.</li>
              <li>Designate a single point of contact for approvals and communication.</li>
             <li>Approve or comment on deliverables within a reasonable period.</li>
              <li>Ensure supplied content does not infringe third-party rights.</li>
            </ul>
          </Section>

          <Section icon={<Key />} title="5. Intellectual Property">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Upon full payment, rights to the final deliverables are transferred to the client.</li>
              <li>Maxzen Tech retains rights to proprietary source code and internal tools.</li>
              <li>We reserve the right to display the completed project in our portfolio,case studies, marketing materials, and social media, unless otherwise requested in writing.</li>
            </ul>
          </Section>

          <Section icon={<Server />} title="6. Third-Party Services">
            <p className="text-gray-700">Any third-party service (hosting, domains, payment gateways) is the client's responsibility unless explicitly included. We are not liable for failures of third-party platforms.</p>
         <p className="text-gray-700">Maxzen Tech is not responsible for service disruptions, policy changes, additional costs, or failures of third-party platforms..</p>
          
          </Section>

          <Section icon={<Lock />} title="7. Confidentiality & Data Protection">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Both parties agree to keep all non-public business information and project details confidential.</li>
              <li>We implement strong security measures but cannot guarantee complete protection against all cyber threats.</li>
            </ul>
          </Section>

          <Section icon={<Clock />} title="8. Project Timeline & Delays">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Project timelines are estimates and depend on the client’s timely inputs and approvals.</li>
              <li>Delays caused by the client may extend the project timeline.</li>
              <li>New changes post-handover will be treated as a separate engagement.</li>
            </ul>
          </Section>

          <Section icon={<FilePen />} title="9. Changes & Revisions">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>The project scope and number of revisions are defined in the proposal.</li>
              <li>Major changes or new features will be considered additional work and invoiced accordingly.</li>
            </ul>
          </Section>

          <Section icon={<ShieldAlert />} title="10. Limitation of Liability">
            <p className="text-gray-700">Our services are provided "as-is." We do not guarantee specific business results like search rankings or leads. Our total liability shall not exceed the amount paid by the client for that specific project.</p>
          </Section>

          <Section icon={<FileX />} title="11. Termination & Suspension">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>We reserve the right to suspend work or terminate services if: (i) payments are overdue, (ii) the client is in breach of these Terms, (iii) the client engages in unlawful or unethical behaviour in connection with the services.</li>
              <li>The client may terminate the agreement by giving written notice. In such case, the client must pay for all completed and in-progress work up to the date of termination.</li>
            </ul>
          </Section>

          <Section icon={<Book />} title="12. Changes to Terms">
            <p className="text-gray-700">Maxzen Tech may modify these Terms & Conditions at any time. The updated Terms will be published on our website with an updated effective date. Continued use of our website or services after changes signifies your acceptance of the new Terms.</p>
          </Section>

          <Section icon={<Gavel />} title="13. Governing Law">
            <p className="text-gray-700">These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.</p>
          </Section>

          <Section icon={<Mail />} title="14. Contact Information">
            <p className="text-gray-700">If you have questions, contact us at:</p>
            <div className="mt-2 space-y-1">
              <p><span className="font-semibold text-gray-900">Maxzen Tech</span></p>
              <p>📧 Email: <a href="mailto:info@maxzen.tech" className="text-blue-600 hover:underline">info@maxzen.tech</a></p>
              <p>🌐 Website: <a href="#" className="text-blue-600 hover:underline">www.maxzen.tech</a></p>
            </div>
          </Section>
        </div>
      </div>
     
    </section>
     <Footer/></>
  );
};

export default TermsAndConditions;
