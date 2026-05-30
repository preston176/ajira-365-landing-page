import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-hero-navy pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Warm corner glow + soft white wash, matches product dashboard hero */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 92% 8%, rgb(231 94 27 / 0.22), transparent 38%), radial-gradient(circle at 8% 92%, rgb(255 255 255 / 0.08), transparent 40%)',
        }}
      />

      {/* Wavy SVG divider, transitions navy hero into the white paper section below */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-[-1px] left-0 right-0 w-full h-12 md:h-20 text-paper"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/85 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              100% free · no card required
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              Launch your <span className="text-brand">career</span>
              <br className="hidden md:block" /> with zero experience.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Ajira 365 prepares Kenyan first-job seekers for the real thing.
              AI mock interviews, a recruiter-ready CV, and a study path that
              fits around lunch breaks.
            </p>

            <ul className="mt-6 space-y-2 text-white/80 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                Practice with AI mock interviews and get instant feedback
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                Build a professional CV in minutes with expert guidance
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                Follow a learning path tailored to the role you want
              </li>
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.ajira365.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-deep text-white px-6 py-3 text-sm font-medium shadow-card-lg transition-colors">
                  Get started free
                  <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <a href="#demo">
                <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/30 hover:border-white text-white px-6 py-3 text-sm font-medium transition-colors">
                  See how it works
                </button>
              </a>
            </div>

            <p className="mt-5 text-sm text-white/60">
              Join 100+ users already building their career.
            </p>
          </motion.div>

          {/* Right: product preview, browser frame, enlarged & panning right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            {/* Cobalt halo behind the frame, matches dashboard navy */}
            <div
              aria-hidden
              className="absolute -inset-16 -z-10 rounded-[3.5rem] opacity-70 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at 70% 30%, rgb(231 94 27 / 0.30), transparent 55%), radial-gradient(circle at 20% 80%, rgb(0 39 130 / 0.55), transparent 55%)',
              }}
            />

            {/* Frame wrapper, scaled up and panning past the right column on lg+ */}
            <div className="relative lg:scale-[1.4] lg:translate-x-[3%] lg:origin-left">
              <div className="relative rounded-2xl bg-paper ring-1 ring-white/20 shadow-card-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-paper">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </span>
                  <span className="ml-3 flex-1 rounded-full bg-paper-deep px-3 py-1 text-[11px] font-medium text-stone tracking-wide">
                    app.ajira365.com/dashboard
                  </span>
                </div>
                <img
                  src="/image.png"
                  alt="Ajira 365 product preview"
                  className="w-full block"
                  draggable={false}
                />
              </div>
            </div>

            {/* Interview score card, immediately after the image */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-4 lg:mt-20 ml-auto flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-card-lg ring-1 ring-border/60 w-fit"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-tint text-brand text-sm font-semibold">
                9.2
              </span>
              <div className="leading-tight">
                <p className="text-[11px] uppercase tracking-wider text-stone font-medium">
                  Interview score
                </p>
                <p className="text-sm font-semibold text-ink">
                  Strong delivery
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
