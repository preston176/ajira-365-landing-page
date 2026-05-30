import { useRef } from "react";
import { motion } from "framer-motion";

function LogoTicker() {
  const logos = [
    { src: "/Safaricom_Logo.svg", alt: "Safaricom" },
    { src: "/Google_Logo.svg", alt: "Google" },
    { src: "/KPMG_Logo.svg", alt: "KPMG" },
    { src: "/Microsoft_Logo.svg", alt: "Microsoft" },
    { src: "/Andela_Logo.svg", alt: "Andela" },
  ];
  const tickerRef = useRef(null);

  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
            Roles our users prep for at companies like
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16 items-center"
              ref={tickerRef}
              animate={{ x: [0, -400, 0] }}
              transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
              style={{ minWidth: "max-content" }}
            >
              {logos.concat(logos).map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:grayscale hover:opacity-60"
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
