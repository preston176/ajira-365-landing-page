import { useState } from 'react';
import { Mail, Check, Loader2, Github, Linkedin } from 'lucide-react';

// Default to the prod endpoint. Dev environments must set
// VITE_NEWSLETTER_URL=http://localhost:3000/api/newsletter explicitly.
// We deliberately do NOT fall back to localhost so a deploy that
// forgets the env var can't silently swallow subscribes.
const NEWSLETTER_URL =
  import.meta.env.VITE_NEWSLETTER_URL ?? 'https://app.ajira365.com/api/newsletter';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Optimistic UI: show success immediately, revert on failure.
    setStatus('success');
    setMessage('Subscribed. Check your inbox.');
    const previousEmail = email;
    setEmail('');

    try {
      const res = await fetch(NEWSLETTER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, honeypot }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setMessage(data.error ?? 'Could not subscribe. Try again in a moment.');
        setEmail(previousEmail);
      }
    } catch {
      setStatus('error');
      setMessage('Could not reach the server. Try again in a moment.');
      setEmail(previousEmail);
    }
  };

  return (
    <form
      className="mt-6"
      aria-label="Newsletter signup"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex max-w-md rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm overflow-hidden focus-within:ring-white/30 transition">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'submitting') setStatus('idle');
          }}
          placeholder="Subscribe for career tips"
          required
          className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
        />
        {/* Honeypot, hidden from real users and screen readers */}
        <input
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex items-center gap-2 bg-brand hover:bg-brand-deep disabled:opacity-60 px-5 text-sm font-medium transition-colors"
          aria-label="Subscribe"
        >
          {status === 'submitting' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === 'success' ? (
            <Check className="h-4 w-4" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
        </button>
      </div>
      <p
        className={`mt-3 text-xs ${
          status === 'error' ? 'text-orange-200' : 'text-white/50'
        }`}
        role={status === 'error' ? 'alert' : undefined}
      >
        {status === 'success'
          ? message
          : status === 'error'
            ? message
            : 'Career tips, job-search strategies, and product updates. No spam.'}
      </p>
    </form>
  );
}

const footerLinks = {
  product: [
    { name: 'Features', href: '/#features' },
    { name: 'Watch demo', href: '/#demo' },
    { name: 'FAQ', href: '/#faq' },
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
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/ajira365',
      icon: Linkedin,
    },
  ],
};

export const Footer = () => {
  return (
    <footer
      className="relative bg-navy text-white"
      aria-label="Ajira 365 footer"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 90% 10%, rgb(233 116 49 / 0.10), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="inline-flex items-baseline gap-1 text-white"
            >
              <span className="text-xl font-semibold tracking-tight">
                Ajira
              </span>
              <span className="text-xl font-semibold tracking-tight text-brand">
                365
              </span>
            </a>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              An AI-powered career platform for first-job seekers across
              Kenya, built around the prep that actually moves the needle.
            </p>
            <NewsletterForm />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Ajira 365. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
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
