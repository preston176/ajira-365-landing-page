import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Ajira 365 really free to use?',
    answer:
      'Yes. The core features (mock interviews, CV builder, and learning paths) are free. No credit card required.',
  },
  {
    question: 'How do the AI mock interviews work?',
    answer:
      'Tell us the role and paste the JD. The AI generates relevant questions, listens to (or reads) your answers, and gives you specific, actionable feedback on each one.',
  },
  {
    question: 'Can I download or share my CV?',
    answer:
      'Yes. Export to PDF or share a public link with employers. Everything you build is yours to keep.',
  },
  {
    question: 'What kinds of jobs can I prepare for?',
    answer:
      'Anything you describe. Tech, business, support, ops, retail. Paste a job title and JD and you are ready to go.',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      'We use industry-standard encryption and never sell your data. You can delete your CVs, interviews, and account whenever you want.',
  },
  {
    question: 'Can I get help if I get stuck?',
    answer:
      'Yes. The in-app tour walks you through the first session, and you can reach support over email any time.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
            Quick answers.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            If your question isn&apos;t here, drop us a line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className="overflow-hidden rounded-2xl bg-paper shadow-card"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium tracking-tight text-ink">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-brand text-white' : 'bg-brand-tint text-brand'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
