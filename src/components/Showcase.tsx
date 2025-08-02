import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseImages = [
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    title: 'Dashboard Overview',
    description: 'Intuitive dashboard interface for quick access to key metrics',
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools for seamless teamwork',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    title: 'Analytics Platform',
    description: 'Comprehensive analytics and reporting capabilities',
  },
];

export const Showcase = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">Product Showcase</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the powerful features that make our product stand out
          </p>
        </motion.div>

        <div className="mt-20 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[16/9] relative"
            >
              <img
                src={showcaseImages[currentIndex].url}
                alt={showcaseImages[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold">{showcaseImages[currentIndex].title}</h3>
                <p className="mt-2 text-lg opacity-90">{showcaseImages[currentIndex].description}</p>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          <div className="mt-4 flex justify-center space-x-2">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};