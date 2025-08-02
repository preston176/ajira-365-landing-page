import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-70" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlN2ZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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
              className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-indigo-600 font-medium">New Features Available</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Revolutionize Your
              <span className="relative">
                <span className="relative z-10 text-indigo-600"> Workflow</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-indigo-200 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Transform the way you work with our innovative digital solution.
              Boost productivity and streamline your processes like never before.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium 
                         flex items-center justify-center space-x-2 shadow-lg
                         hover:bg-indigo-700 transition-all duration-200
                         hover:shadow-indigo-200 hover:shadow-2xl"
              >
                <span>Get Started Free</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl 
                         font-medium hover:border-indigo-600 hover:text-indigo-600 
                         transition-all duration-200 hover:shadow-lg"
              >
                Watch Demo
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { icon: Zap, text: "10x Faster", color: "text-yellow-500" },
                { icon: Shield, text: "Enterprise Security", color: "text-green-500" },
                { icon: Sparkles, text: "AI-Powered", color: "text-purple-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium text-gray-600">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Digital Workflow"
                className="relative z-10 rounded-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-8 top-1/4 bg-white rounded-xl shadow-lg p-4 transform rotate-6"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-8 bottom-1/4 bg-white rounded-xl shadow-lg p-4 transform -rotate-6"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">AI Enhanced</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};