/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kuro-black': '#070709',
        'kuro-dark': '#0d0d11',
        'kuro-card': '#111116',
        'kuro-red': '#e53e3e',
        'kuro-red-bright': '#ff2a2a',
        'kuro-red-glow': 'rgba(229, 62, 62, 0.4)',
        'kuro-light-bg': '#eae8e3',
        'kuro-light-text': '#141416',
        'kuro-light-sub': '#666562',
        'kuro-gray': '#8a8987',
        'kuro-border': 'rgba(255, 255, 255, 0.12)',
        'kuro-border-light': 'rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'kuro-glow': '0 0 25px rgba(229, 62, 62, 0.35)',
        'kuro-card-glow': '0 0 35px rgba(229, 62, 62, 0.2)',
      },
    },
  },
  plugins: [],
};
