import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      cmd: "850px",
      custom: "1110px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        red: 'var(--red)',
        darkRed: 'var(--darkRed)',
      },
    },
  },
  plugins: [],
}
export default config
