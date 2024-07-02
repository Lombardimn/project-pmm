/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['CircularStd', 'Roboto', 'system-ui', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },

      colors: {
        'primary-color': '#020617',
        'secondary-color': '#ECF3FB',
        'background-primary': '#ECF3FB',
        'background-secondary': '#020617'
      }
    }
  },
  plugins: []
}
