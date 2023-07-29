module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
    darkSelector: '.dark',
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['winter', 'night']
  },
  darkMode: ['class', '[data-theme="night"]']
};