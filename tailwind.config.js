/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
      animation: {
        sweep: 'sweep 2s linear infinite',
        shimmer: 'shimmer 5s linear infinite'
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 4px 8px rgba(0, 0, 0, .3)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, .2)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

