/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  prefix: 'tw-', // Avoid conflicts with Shopify's CSS. Make it whatever you want.
  content: [
    './**/*.{js,json,liquid}', // updated to include theme files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
