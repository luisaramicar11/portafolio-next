import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          'first-color': '#d90062',
          'first-alpha-color': '#d90062bf',
          'second-color': '#14192d',
          'second-alpha-color': '#14192dbf',
          'third-color': '#501464',
          'third-alpha-color': '#501464bf',
          'white-color': '#ffffff',
          'gray-lighter-color': '#FAFAFA',
          'gray-light-color': '#f3f3f3',
          'gray-color': '#cccccc',
          'gray-dark-color': '#666666',
          'black-color': '#000000',
          'link-color': '#509ee3',
          'title-color': '#333333',
          'text-color': '#222222',
          'white-alpha-color': '#ffffff80',
          'black-alpha-color': '#00000080',
      },
      fontFamily: {
        'urbanist': ['var(--font-urbanist)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
