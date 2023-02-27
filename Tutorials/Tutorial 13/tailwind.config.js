/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    /* If You can't see the small breakpoints result then you have to use the
    screens here and then you can see it */
    extend: {
      screens: {
        xsm: '500px',
      },
      spacing: {
        13: "3.25rem",
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1.2' }]
      },
    },
  },
  plugins: [],
};
