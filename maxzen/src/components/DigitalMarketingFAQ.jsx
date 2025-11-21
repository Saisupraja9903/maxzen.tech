import React from "react";
import { motion } from "framer-motion";
import { MessageCircleQuestion, BookOpen, TrendingUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    question: "What are the best digital marketing blogs to follow in 2025?",
    answer:
      "Some of the top digital marketing blogs include HubSpot, Neil Patel, Moz, and industry experts who share SEO, content, and social media strategies.",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    question: "Why should businesses read digital marketing blogs regularly?",
    answer:
      "Reading blogs helps businesses stay updated with the latest SEO techniques, social media trends, and paid ads strategies to stay competitive.",
  },
  {
    id: 3,
    icon: <MessageCircleQuestion className="w-8 h-8 text-green-600" />,
    question: "Can beginners learn digital marketing through blogs?",
    answer:
      "Yes! Many blogs simplify digital marketing for beginners, covering topics like SEO basics, PPC setup, and social media marketing tips.",
  },
];

const DigitalMarketingFAQ = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
        Digital Marketing Blogs & Best SEO Tips for Higher Rankings
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="mb-4">{faq.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketingFAQ;
