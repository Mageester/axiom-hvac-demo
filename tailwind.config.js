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
        surface: {
          base: '#0e0d0c',
          card: '#161514',
          elevated: '#1c1b19',
        },
        frost: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        arctic: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        emergency: '#ef4444',
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
