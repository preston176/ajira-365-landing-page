import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Ajira365 really free to use?',
    answer: 'Yes! You can access all our core features, including mock interviews and the CV builder, completely free. No credit card required.',
  },
  {
    question: 'How do AI-powered mock interviews work?',
    answer:
      'Our AI simulates real interview scenarios and provides instant, personalized feedback on your answers to help you improve.',
  },
  {
    question: 'Can I download or share my CV?',
    answer:
      'Absolutely. You can download your CV as a PDF or share a link with employers directly from your dashboard.',
  },
  {
    question: 'What kind of jobs can I prepare for?',
    answer:
      'Ajira365 supports a wide range of roles, from entry-level to professional, across tech, business, and more. Fill in a job title and description and you are ready to go',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      'We use industry-standard encryption and never share your data with third parties. You are always in control of your information.',
  },
  {
    question: 'Can I get help if I get stuck?',
    answer:
      'Yes! Our support team is available 24/7 via email, and you can also access our help center for guides and tips.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Having questions? We&apos;re here to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};