import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main': '#E11299',
      'main-light': '#ffffff',
      'main-dark': '#3f3cbb',
      'white': '#ffffff',
      'half-black': 'rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}
export default config
