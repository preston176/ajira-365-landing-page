// import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lewis Moruri',
    role: 'Software Engineer',
    company: 'Nairobi Tech Hub',
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
    content:
      'Ajira365 gave me the confidence to ace my first real interview. The AI feedback was spot on and helped me land my current job in Westlands!',
  },
  {
    name: 'Brian Otieno',
    role: 'Graduate Trainee',
    company: 'Safaricom',
    image:
      'https://randomuser.me/api/portraits/men/65.jpg',
    content:
      'I never thought online mock interviews could feel so real. The platform is easy to use and the tips are tailored for the Kenyan job market.',
  },
  {
    name: 'Mercy Achieng',
    role: 'HR Assistant',
    company: 'Kisumu County',
    image:
      'https://randomuser.me/api/portraits/women/65.jpg',
    content:
      'Ajira365 is a game changer for job seekers. I recommend it to all my friends looking for work in Kenya. The CV builder is a lifesaver!',
  },
  {
    name: 'Kevin Mwangi',
    role: 'Data Analyst',
    company: 'M-Pesa Foundation',
    image:
      'https://randomuser.me/api/portraits/men/66.jpg',
    content:
      'The instant feedback and localised advice made all the difference. I got called for interviews within weeks of using Ajira365.',
  },
  {
    name: 'Janet Njeri',
    role: 'University Student',
    company: 'University of Nairobi',
    image:
      'https://randomuser.me/api/portraits/women/66.jpg',
    content:
      'As a student, I found the practice interviews and resources super helpful. I feel ready for the job market in Kenya!',
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