import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuestionCircle,
  FaEnvelopeOpenText,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";

const faqs = [
  {
    question: "How do I report a lost item?",
    answer:
      'Simply navigate to the "Report Lost Item" section, fill in the required details, and submit your report.',
  },
  {
    question: "Can I update a listing after submitting?",
    answer:
      "Yes, go to your profile and select the item you want to update. Click edit and save your changes.",
  },
  {
    question: "Is WhereIsIt free to use?",
    answer:
      "Absolutely! All core features are free, and anyone can report or search for items without payment.",
  },
  {
    question: "How can I contact support directly?",
    answer:
      "Use the contact form in the Contact section or email us at support@whereisit.com.",
  },
];

const supportOptions = [
  {
    title: "Quick Help Center",
    description:
      "Browse through our FAQs and guides to quickly find answers to your questions.",
    icon: <FaQuestionCircle className="text-4xl text-[#00A79D]" />,
    link: "/faq",
  },
  {
    title: "Email Support",
    description:
      "Need personalized help? Reach out to our support team anytime via email.",
    icon: <FaEnvelopeOpenText className="text-4xl text-[#00A79D]" />,
    link: "/contact",
  },
  {
    title: "Join the Community",
    description:
      "Get tips, share experiences, and connect with other users in our community space.",
    icon: <FaUsers className="text-4xl text-[#00A79D]" />,
    link: "/community",
  },
];

const FAQItem = ({ faq, isActive, onClick }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-semibold focus:outline-none bg-white hover:bg-[#00A79D]/10 transition"
      aria-expanded={isActive}
      aria-controls="faq-content"
    >
      {faq.question}
      <motion.span
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-[#00A79D]"
      >
        <FaChevronDown size={18} />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 bg-[#f3f4f6] text-gray-700 text-sm"
          id="faq-content"
          role="region"
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-20 px-6 lg:px-20 bg-white max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Support & Help
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to your questions or reach out for personalized support. We're here to help you reconnect.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-full mx-auto space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isActive={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>

      {/* Support Options */}
      <div className="grid md:grid-cols-3 gap-8 max-w-full mx-auto">
        {supportOptions.map((option, index) => (
          <motion.a
            href={option.link}
            key={index}
            whileHover={{
              y: -6,
              boxShadow: "0 10px 20px rgba(0, 167, 157, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            className="block bg-white border border-gray-200 rounded-3xl p-8 cursor-pointer hover:border-[#00A79D] shadow-sm hover:shadow-md transition"
            aria-label={`Go to ${option.title}`}
          >
            <div className="mb-6">{option.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {option.title}
            </h3>
            <p className="text-gray-600 text-sm">{option.description}</p>
            <span className="mt-4 inline-block text-[#00A79D] font-semibold text-sm">
              Learn More →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Support;
