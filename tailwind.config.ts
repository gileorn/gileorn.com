import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import colors from 'tailwindcss/colors'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // text and base colors
        'm-main': colors.zinc[800],
        'm-dark-main': colors.zinc[50],
        'm-accent': colors.indigo[400],
        'm-dark-accent': colors.indigo[300],
        'm-accent2': colors.emerald[400],
        'm-dark-accent2': colors.emerald[300],
        'm-secondary': colors.zinc[500],
        'm-dark-secondary': colors.stone[300],
        // background colors
        'm-background': colors.zinc[100],
        'm-dark-background': colors.zinc[700],
        'm-foreground': colors.white,
        'm-dark-foreground': colors.zinc[600],
        'm-accent-background': colors.indigo[200],
        'm-dark-accent-background': colors.indigo[200],
        // hover states
        'm-hover': colors.indigo[500],
        'm-dark-hover': colors.indigo[300],
        'm-accent-hover': colors.indigo[500],
        'm-dark-accent-hover': colors.indigo[200],
      },
    },
  },
  plugins: [nextui()],
}
export default config
