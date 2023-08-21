import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primaryColor: '#f5e6e0',
      secondaryColor: '#24296b',
      white: '#FFFFFF',
      // FWDP COLOR PALLETE
      midnightBlue: '#0D1950',
      shockingPink: '#ED1E79',
      royalBlue: '#2828C4',
      palePink: '#FB85D0',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'offset-vw': 'calc(-40rem + 22vw)',
      },
      boxShadow: {
        'midnightBlue-shadow': '5px 6px 0 1px #0D1950',
      },
    },
  },
  plugins: [],
};

export default config;
