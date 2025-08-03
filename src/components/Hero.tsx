// import React from 'react';
import { motion } from 'framer-motion';
// import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a2e8c]">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e8c] via-[#1b3fa0] to-[#eaf1ff] opacity-90" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/4 right-1/4 w-64 h-64 bg-[#ff7a01] rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-[#ff7a01]/10 rounded-full mb-8"
            >
              <span className="text-[#ff7a01] font-medium">100% FREE · No credit card required · Start instantly</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Launch your <span className="text-[#ff7a01]">career</span> with <br className="hidden md:block" />
              <span className="text-white">zero experience</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Unlock your dream job with Ajira365.
            </p>
            <ul className="mt-6 space-y-2 text-white/90 text-base">
              <li>• Practice with AI-powered mock interviews and get instant feedback</li>
              <li>• Build a professional CV in minutes with expert guidance</li>
              <li>• Receive actionable tips and personalized support</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff7a01] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-200 w-full sm:w-auto">Get Started Free</button>
              <button className="bg-white hover:bg-gray-100 text-[#0a2e8c] px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-200 w-full sm:w-auto">See How it Works</button>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-white/80 text-sm">
              <span>★ 4.9/5 (200+ reviews)</span>
              <span className="hidden sm:inline">· Join 100+ users already building their career</span>
            </div>
          </motion.div>
          {/* Right side: illustration or image retained */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end md:relative"
          >
            <img
              src="/image.png"
              alt="Ajira365 Interview Demo"
              className="w-full md:absolute md:scale-[2] md:top-[-120px] md:right-[-120px] max-w-md rounded-xl shadow-2xl border-4 border-white/20 bg-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};