import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content:
      'This product has completely transformed how our team works. The automation features alone have saved us countless hours.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupX',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    content:
      'The best investment weve made for our workflow. The interface is intuitive and the features are exactly what we needed.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Team Lead',
    company: 'InnovateNow',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    content:
      'Outstanding support team and regular updates keep making the product better. Highly recommended for any growing team.',
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

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#eaf1ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#0a2e8c]">
            Success Stories from Real Users
          </h2>
          <p className="mt-4 text-xl text-[#1b3fa0]">
            See how Ajira365 is helping people land their dream jobs and launch
            their careers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 border border-[#b3c6f7] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 text-[#ff7a01]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-[#0a2e8c] leading-relaxed font-medium">
                "{testimonial.content}"
              </p>
              <div className="mt-8 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ff7a01]"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-[#0a2e8c]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#1b3fa0]">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};