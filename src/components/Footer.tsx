// import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Data Processing', href: '/data-processing' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/preston176', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ajira365', icon: Linkedin },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[#0a2e8c] text-white" aria-label="Ajira365 Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              {/* <Rocket className="h-8 w-8 text-[#ff7a01]" aria-hidden="true" /> */}
              <span className="ml-2 text-xl font-bold tracking-tight">Ajira365</span>
            </div>
            <p className="mt-4 text-[#b3c6f7] max-w-md text-base leading-relaxed">
              Ajira365 is a leading AI-powered career platform dedicated to empowering job seekers and professionals across Africa and beyond.
            </p>
            <form className="mt-6" aria-label="Newsletter Signup" onSubmit={(e) => e.preventDefault()}>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Subscribe for career tips"
                  aria-label="Email address"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-white/80 text-[#0a2e8c] placeholder-[#1b3fa0] focus:outline-none focus:ring-2 focus:ring-[#ff7a01]"
                />
                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  className="px-6 py-3 bg-[#ff7a01] rounded-r-lg hover:bg-orange-600 transition-colors duration-200 flex items-center"
                  aria-label="Subscribe"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </form>
            <p className="mt-2 text-xs text-[#b3c6f7]">Get exclusive updates, job search strategies, and AI-powered career advice delivered to your inbox.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#b3c6f7] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#b3c6f7] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#b3c6f7] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#b3c6f7]/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#b3c6f7] text-sm">
              © {new Date().getFullYear()} Ajira365. All rights reserved. | Empowering Africa's workforce, one interview at a time.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b3c6f7] hover:text-[#ff7a01] transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};