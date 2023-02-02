/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        fontSize: {
            'xs' : '0.75rem',
        },
        colors: {
            'primary-color': '#f7ca6f',
            'secondary-color':'#251726',
            'primary-color-light' : '#fbfaf5',
            'primary-color-light-2' : '#ffefd5'
        },
        borderWidth: {
            '1': '1px'
        }
    },
  },
  plugins: [],
}
