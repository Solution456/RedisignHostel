/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#3269F6',
      'black': '#000000',
      'secondary': '#6184D8',
      'secondary-700':'#3269F6',
      'background': '#F5F5F5',
      'white': '#FFFFFF',
      'gray600': '#4C4E52',
      'gray900': '#464646',
      'gray-200': 'rgba(229 231 235)',
      'gray-100': '#f3f4f6',
      'gray-50': '#f9fafb',
      'primary-800': '#82A5FF',
      'green-900': '#14532d',
      'green-800': '##166534',
      'green-700': '#15803d',
      'green-600': '#16a34a',
      'green-500': '#22c55e',
      'green-400': '#4ade80',
      'green-300': '#86efac',
      'green-200': '#bbf7d0',
      'yellow': '#ffc82c',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'red-900':'#7f1d1d',
      'red-800':'#991b1b',
      'red-700':'#b91c1c',
      'red-600':'#dc2626',
      'red-500':'#ef4444',
      'red-400':'#f87171',
      'red-300':'#fca5a5',
      'red-200':'#fecaca',
      'red-100':'#fee2e2',
      'orange': '#ff7849',
      'blue-500':'#3b82f6',
      'blue-600':'#2563eb',
      'blue-700':'#1d4ed8',
      'blue-300':'#93c5fd',
      'blue-opac': 'rgb(var(--color-blu-opac) / 0.5)'


    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      backgroundImage:{
        'authImg': "url(./assets/Img/back_aside.png)"
      }
    },
  },
  plugins: [],
}
