import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-[#0a2e8c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Launch Your Career in Kenya?
            </h2>
            <p className="mt-4 text-xl text-[#b3c6f7]">
              Join thousands of Kenyans using Ajira365 to practice interviews, build winning CVs, and get hired faster. Your dream job is just a click away!
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#ff7a01] text-white rounded-lg font-medium 
                         flex items-center justify-center space-x-2 shadow-lg
                         hover:bg-orange-600 transition-colors duration-200"
              >
                <span>Get Started Free</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg 
                         font-medium hover:bg-white/10
                         transition-colors duration-200"
              >
                Talk to Support
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff7a01] rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};