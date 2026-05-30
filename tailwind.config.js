/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Match product tokens (app/globals.css)
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        'paper-deep': 'rgb(var(--paper-deep) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
        stone: 'rgb(var(--stone) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
          deep: 'rgb(var(--brand-deep) / <alpha-value>)',
          tint: 'rgb(var(--brand-tint) / <alpha-value>)',
          fg: 'rgb(var(--brand-fg) / <alpha-value>)',
        },
        navy: {
          DEFAULT: 'rgb(var(--navy) / <alpha-value>)',
          deep: 'rgb(var(--navy-deep) / <alpha-value>)',
          light: 'rgb(var(--navy-light) / <alpha-value>)',
          tint: 'rgb(var(--navy-tint) / <alpha-value>)',
        },
      },
      boxShadow: {
        card: '0 2px 8px -2px rgb(70 50 130 / 0.06), 0 4px 24px -8px rgb(70 50 130 / 0.08)',
        'card-lg': '0 4px 12px -4px rgb(70 50 130 / 0.08), 0 12px 40px -12px rgb(70 50 130 / 0.10)',
      },
      backgroundImage: {
        'hero-navy':
          'linear-gradient(110deg, rgb(0 30 128) 0%, rgb(0 51 147) 60%, rgb(0 86 164) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
