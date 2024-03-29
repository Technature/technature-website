/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       
        },
        colors: {
          'tech': '#23CB9F',
          'darkBg':'#32A5AC'
        },
        screens: {
          'xs': '420px',
          // => @media (min-width: 420px) { ... }
        },
        boxShadow: {
          'bgFade': '0 0 8px 16px white inset',
        }
    },
  },
  plugins: [],
}
