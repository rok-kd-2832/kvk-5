import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

//Inactive = #636363
//Active == #6ed562
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main': '#6ed562',
      'main-light': '#d7ffd2',
      'main-dark': '#41a336',
      'white': '#ffffff',
      'black': '#000000',
      'half-black': 'rgba(0, 0, 0, 0.5)',
      'gray': colors.gray,
    },
  },
  plugins: [],
}
export default config
