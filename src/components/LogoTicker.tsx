import { useRef } from "react";
import { motion } from "framer-motion"

function LogoTicker() {
    // Example logos, replace with real ones as needed
    const logos = [
        { src: "/Safaricom_Logo.svg", alt: "Safaricom" },
        { src: "/Google_Logo.svg", alt: "Google" },
        { src: "/KPMG_Logo.svg", alt: "KPMG" },
        { src: "/Microsoft_Logo.svg", alt: "Microsoft" },
        { src: "/Andela_Logo.svg", alt: "PwC" },
    ]
    const tickerRef = useRef(null)

    return (
        <section className="bg-white py-4 border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <span className="text-sm md:text-base font-semibold text-[#0a2e8c] mb-2">
                        Trusted by students from top universities & companies
                    </span>
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex gap-8 items-center"
                            ref={tickerRef}
                            animate={{ x: [0, -400, 0] }}
                            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                            style={{ minWidth: "max-content" }}
                        >
                            {logos.concat(logos).map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-8 md:h-10 w-auto hover:grayscale transition-all duration-300 object-fill"
                                    draggable="false"
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoTicker;