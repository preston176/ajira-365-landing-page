"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Features", href: "/#features" },
  // { name: "Testimonials", href: "/#testimonials" },
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
            <a href="/" className="text-xl font-bold text-white hover:underline cursor-pointer">Ajira365</a>
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
