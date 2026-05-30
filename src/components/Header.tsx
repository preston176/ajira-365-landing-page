"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Watch demo", href: "/#demo" },
  { name: "FAQs", href: "/#faq" },
  { name: "Contact", href: "/contact" },
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
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="inline-flex items-baseline gap-1 text-white">
            <span className="text-xl font-semibold tracking-tight">Ajira</span>
            <span className="text-xl font-semibold tracking-tight text-brand">
              365
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://app.ajira365.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-brand hover:bg-brand-deep text-white px-5 py-2.5 text-sm font-medium shadow-card transition-colors">
                Get started
              </button>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-white/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-white/15 px-2 bg-navy/95 backdrop-blur-md">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-white/85 hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="https://app.ajira365.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full rounded-full bg-brand hover:bg-brand-deep text-white px-5 py-3 text-sm font-medium shadow-card transition-colors"
                    >
                      Get started
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
