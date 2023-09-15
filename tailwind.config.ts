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
        accent: colors.indigo[500],
        'dark-accent': colors.indigo[300],
        main: colors.zinc[800],
        'dark-main': colors.zinc[50],
        secondary: colors.zinc[500],
        'dark-secondary': colors.stone[300],
        background: colors.zinc[100],
        'dark-background': colors.zinc[700],
        foreground: colors.zinc[200],
        'dark-foreground': colors.zinc[700],
        hover: colors.indigo[500],
        'dark-hover': colors.indigo[300],
        'accent-hover': colors.indigo[600],
        'accent-dark-hover': colors.indigo[200],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
