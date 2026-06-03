import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReferralHref } from '../hooks/useReferralHref';

export const CTA = () => {
  const signUpHref = useReferralHref('/sign-up');
  return (
    <section className="bg-canvas pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-hero-navy px-6 py-16 md:px-16 md:py-24 shadow-card-lg">
          {/* Warm + soft glows */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 90% 10%, rgb(233 116 49 / 0.28), transparent 45%), radial-gradient(circle at 10% 90%, rgb(255 255 255 / 0.10), transparent 45%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Ready to launch your career?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Join hundreds of Kenyans using Ajira 365 to practise interviews,
              build winning CVs, and walk into the room ready.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href={signUpHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-deep text-white px-7 py-3.5 text-sm font-medium shadow-card-lg transition-colors"
                >
                  Get started free
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/30 hover:border-white text-white px-7 py-3.5 text-sm font-medium transition-colors"
                >
                  Talk to support
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
