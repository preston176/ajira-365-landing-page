"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQs", href: "/#faq" },
  { name: "Contact Us", href: "/contact" },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a2e8c] shadow-md transition-shadow ${isScrolled ? "shadow-lg" : ""} overflow-x-hidden w-full`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-4 w-full">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Ajira365</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden w-full"
            >
              <div className="py-4 border-t border-white/20 bg-[#0a2e8c] px-4 w-full">
                <div className="flex flex-col space-y-2 w-full">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200 py-2 px-2 rounded w-full text-left"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <hr className="border-white/20 my-2" />
                  <button
                    className="bg-orange-500  hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow self-stretch w-full cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export const LogoTicker = () => {
  // Example logos, replace with real ones as needed
  const logos = [
    { src: "/logo1.png", alt: "University of Nairobi" },
    { src: "/logo2.png", alt: "Kenyatta University" },
    { src: "/logo3.png", alt: "Safaricom" },
    { src: "/logo4.png", alt: "Google" },
    { src: "/logo5.png", alt: "Microsoft" },
    { src: "/logo6.png", alt: "Andela" },
    { src: "/logo7.png", alt: "PwC" },
    { src: "/logo8.png", alt: "KPMG" },
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
                  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
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