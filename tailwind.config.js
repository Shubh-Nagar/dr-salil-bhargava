/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      /**
       * Design tokens for Dr. Salil Bhargava's site.
       * The identity is grounded in his world — breath, air, respiration —
       * so the palette leans into a calm, clinical pine-teal rather than the
       * generic corporate-blue "doctor template". A restrained brass accent
       * carries prestige (awards, the headline stat) without going cold.
       */
      colors: {
        ink: '#08302E', // deepest teal-black — dark sections, primary text
        pine: {
          DEFAULT: '#0E5049', // primary brand
          600: '#0C453F',
          700: '#0A3A35',
        },
        breath: {
          DEFAULT: '#2FA192', // vitality / breath accent (teal)
          light: '#5FBFB2',
        },
        brass: {
          DEFAULT: '#B9893E', // prestige accent — used sparingly
          light: '#D0A968',
        },
        mist: '#EAF3F0', // soft light section background
        paper: '#FBFCFB', // page background
        slate: {
          body: '#3B4A48', // body text on light
          muted: '#6B7B78', // secondary text
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
