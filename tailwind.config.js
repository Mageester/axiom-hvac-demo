/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          900: '#1a202c',
          800: '#2d3748',
          700: '#4a5568',
          600: '#718096',
          500: '#a0aec0',
          400: '#cbd5e0',
          300: '#e2e8f0',
        },
        safetyBlue: {
          900: '#07162b',
          800: '#1e3a8a', // Deep Safety Blue
          700: '#1d4ed8',
          600: '#2563eb',
        },
        alertOrange: {
          900: '#7c2d12',
          800: '#9a3412',
          700: '#c2410c',
          600: '#ea580c',
          500: '#f97316', // Emergency Orange
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
