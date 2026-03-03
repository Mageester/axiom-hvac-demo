/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axiom-base': '#090A0B',
        'axiom-elevated': '#13171B',
        'axiom-surface': '#1F2326',
        'axiom-border': '#31363B',
        'axiom-accent': '#E4572E',
        'axiom-text-main': '#F5F7FA',
        'axiom-text-mute': '#A7B3BC',
      },
      fontFamily: {
        axiomSans: ['Inter', 'Satoshi', 'sans-serif'],
        axiomMono: ['IBM Plex Mono', 'Space Mono', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
