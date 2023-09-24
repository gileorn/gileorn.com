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
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        // catpuccin
        'm-rosewater': '#f2d5cf',
        'm-flamingo': '#eebebe',
        'm-mauve': '#ca9ee6',
        'm-red': '#e78284',
        'm-maroon': '#ea999c',
        'm-peach': '#ef9f76',
        'm-yellow': '#e5c890',
        'm-green': '#a6d189',
        'm-teal': '#81c8be',
        'm-sky': '#99d1db',
        'm-sapphire': '#85c1dc',
        'm-blue': '#8caaee',
        'm-lavender': '#babbf1',
        // 'm-background': '#51576d',
        // 'm-dark-background': '#303446',
        // text and base colors
        'm-main': colors.zinc[800],
        'm-dark-main': colors.zinc[50],
        'm-accent': colors.indigo[400],
        // 'm-accent': '#babbf1',
        'm-dark-accent': colors.indigo[300],
        // 'm-dark-accent': '#babbf1',
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
        'm-accent-hover': colors.indigo[600],
        'm-dark-accent-hover': colors.indigo[200],
      },
    },
  },
  plugins: [nextui()],
}
export default config
