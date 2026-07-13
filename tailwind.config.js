/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      /**
       * Design tokens for Dr. Salil Bhargava's site.
       * The identity is grounded in his world — breath, air, respiration —
       * expressed through a calm, clinical sky-blue rather than a cold
       * corporate navy. A restrained brass accent carries prestige (awards,
       * the headline stat) without competing with it.
       */
      colors: {
        ink: '#0A2540', // deepest blue-black — dark sections, primary text
        pine: {
          DEFAULT: '#0B5D8C', // primary brand
          600: '#094A70',
          700: '#073955',
        },
        breath: {
          DEFAULT: '#0EA5E9', // vitality / breath accent (sky blue)
          light: '#7DD3FC',
        },
        brass: {
          DEFAULT: '#B9893E', // prestige accent — used sparingly
          light: '#D0A968',
        },
        mist: '#EAF4FB', // soft light section background
        paper: '#FBFCFE', // page background
        slate: {
          body: '#33424F', // body text on light
          muted: '#64757F', // secondary text
        },
      },
      fontFamily: {
        // Three deliberate roles: editorial-serif display, clean sans body,
        // and a mono for clinical-readout data/labels.
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        // The signature: a slow ~5.5s respiration cadence for the hero aura.
        breathe: {
          '0%, 100%': { transform: 'scale(0.92)', opacity: '0.55' },
          '50%': { transform: 'scale(1.08)', opacity: '0.9' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        breathe: 'breathe 5.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
