import type { Config } from 'tailwindcss';

const containerScreens = {
  sm: '540px',
  md: '620px',
  lg: '760px',
  xl: '840px',
  '2xl': '920px',
  '3xl': '1050px',
};

const screens = {
  xs: '375px',
  ...containerScreens,
};

const padding = {
  DEFAULT: '1rem', // Default padding for screens smaller than `sm`
  xs: '1rem',
  sm: '1rem',
  md: '1rem',
  lg: '1rem',
  xl: '1rem',
  '2xl': '1rem',
  '3xl': '1rem',
};

const fontSize = {
  'xs-rem': '12.5px', // for tiny screens
  'sm-rem': '12px', // for small screens (540px)
  'md-rem': '13px', // for medium screens (720px)
  'lg-rem': '14.5px', // for large screens (960px)
  'xl-rem': '15px', // for extra large screens (1140px)
  '2xl-rem': '16px', // for 2xl screens (1320px)
  '3xl-rem': '16px', // for 3xl screens (1440px)
};

const fontFamily = {
  urbanist: ['var(--font-urbanist)', 'sans-serif'],
  figtree: ['var(--font-figtree)', 'sans-serif'],
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        ternary: 'var(--ternary)',
        background: 'var(--background)',
      },
      fontSize,
      screens,
      fontFamily,
    },

    container: {
      center: true,
      padding,
      screens: containerScreens,
    },
  },
  plugins: [
    /*containerPlugin*/
  ],
};

export default config;
