import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '5GB storage',
      'Email support',
      'Basic integrations',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 79,
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      '20GB storage',
      'Priority email & chat support',
      'Advanced integrations',
      'Custom workflows',
      'Team collaboration tools',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      'Unlimited storage',
      '24/7 phone & priority support',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'Custom training',
    ],
    popular: false,
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

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your team's needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl ${
                plan.popular
                  ? 'ring-4 ring-indigo-600 scale-105 shadow-xl'
                  : 'ring-1 ring-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-600 py-1 px-3 text-sm font-semibold text-white text-center">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full rounded-lg py-3 px-6 text-center font-semibold ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors duration-200`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};