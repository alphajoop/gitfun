import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      geist_sans: ['var(--font-geist-sans)'],
      geist_mono: ['var(--font-geist-mono)'],
    },
    extend: {
      colors: {
        // background color
        bgWhite: '#ffffff',
        bgBlack: '#09090b',
        // primitive color
        prGrey: '#828291',
        prLight: '#f4f4f5',
        prDark: '#1c1c1f',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
