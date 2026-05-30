import { motion } from 'framer-motion';
import { Zap, FileText, Compass, BarChart3, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI mock interviews',
    description:
      'Practise real questions for the role you want and get instant feedback on what to keep and what to rework.',
  },
  {
    icon: FileText,
    title: 'CV builder',
    description:
      'Recruiter-ready CVs in minutes. Proven templates, expert prompts, one-click export to PDF.',
  },
  {
    icon: Compass,
    title: 'Personalised learning paths',
    description:
      'A chaptered roadmap for the role you want, built around the skills you have and the ones you need next.',
  },
  {
    icon: BarChart3,
    title: 'Progress dashboard',
    description:
      'See your sessions, strengths, and weak spots in one place. Stay motivated with clear next actions.',
  },
  {
    icon: Clock,
    title: 'Instant feedback',
    description:
      'No waiting and no graders. Detailed, personal notes on every answer and every CV revision, 24/7.',
  },
  {
    icon: Sparkles,
    title: 'Built for first-timers',
    description:
      'No experience required. We explain every step in plain language and meet you where you are.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const Features = () => {
  return (
    <section id="features" className="relative bg-canvas py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-deep"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            What you get
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink"
          >
            Everything you need to land that first job.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-relaxed text-ink-soft"
          >
            Prepare smarter, not harder. Ajira 365 covers the journey from
            blank page to offer: interviews, CV, study plan, and the
            confidence to walk in ready.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group h-full rounded-2xl bg-paper p-7 shadow-card transition-shadow hover:shadow-card-lg"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
