module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        light_background: '#504257',
        background: '#2c2131',
        card: {
          background: '#423745',
          light_background: '#372c3c',
          text: '#dddddc',
        },
        sidebar: {
          background: '#504257',
          active: '#65586a',
        },
        search: {
          background: '#423843',
          text: '#746977',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
