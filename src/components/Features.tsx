import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, BarChart, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Mock Interviews',
    description:
      'Practice real interview questions and get instant, actionable feedback from our advanced AI. Build confidence before the real thing.',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'CV Builder',
    description:
      'Create a professional, recruiter-ready CV in minutes. Use proven templates and expert guidance to stand out.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Personalized Learning Paths',
    description:
      'Get a step-by-step roadmap tailored to your career goals. Learn the right skills, ace interviews, and land your dream job.',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: BarChart,
    title: 'Progress Dashboard',
    description:
      'Track your growth, strengths, and completed tasks in one place. See your improvement and stay motivated.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Instant Feedback',
    description:
      'No more waiting. Get detailed, personalized feedback on your answers and CV instantly, 24/7.',
    gradient: 'from-red-400 to-rose-500',
  },
  {
    icon: Rocket,
    title: 'Built for Beginners',
    description:
      'Ajira365 is designed for those starting out. No experience? No problem. We guide you every step of the way.',
    gradient: 'from-cyan-400 to-teal-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Features = () => {
  return (
    <section id="features" className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzMwYTMiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2NEgzNnpNNDAgMzBoNHY0aC00ek00NCAzNGg0djRoLTR6TTM0IDMwaDR2NGgtNHpNNDAgMzhoNHY0aC00ek0zNCAzOGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full mb-8"
          >
            <Rocket className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-indigo-600 font-medium">Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            All the tools you need to land your dream job
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Prepare smarter, not harder. Ajira365 gives you everything to stand out at every stage of your job search—from application to offer.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg transition-all duration-300
                              hover:shadow-2xl hover:shadow-indigo-100">
                  <div
                    className={`inline-flex items-center justify-center p-3 rounded-2xl
                                bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600
                                group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};