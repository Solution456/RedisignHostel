/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#3269F6',
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
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'purple': '#7e5bef',
      'pink': '#ff49db',
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
