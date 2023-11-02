/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Agbalumo", "cursive"],
        robo : ["Roboto Mono", 'serif']
      },
      colors: {
        'delft_blue': {
          DEFAULT: '#1d3272',
          100: '#060a17',
          200: '#0c142d',
          300: '#121e44',
          400: '#17285b',
          500: '#1d3272',
          600: '#2c4cac',
          700: '#5070d2',
          800: '#8aa0e1',
          900: '#c5cff0',
        },
        'steel_blue': {
          DEFAULT: '#4381c1',
          100: '#0d1a27',
          200: '#1a344e',
          300: '#274e75',
          400: '#34689c',
          500: '#4381c1',
          600: '#699bcd',
          700: '#8fb4da',
          800: '#b4cde6',
          900: '#dae6f3',
        },
        'floral_white': {
          DEFAULT: '#fff8f0',
          100: '#633500',
          200: '#c66a00',
          300: '#ff9c2a',
          400: '#ffca8d',
          500: '#fff8f0',
          600: '#fff9f3',
          700: '#fffbf6',
          800: '#fffcf9',
          900: '#fffefc',
        },
        'ghost_white': {
          DEFAULT: '#f4f4f8',
          100: '#26263c',
          200: '#4c4c77',
          300: '#7b7bab',
          400: '#b7b7d1',
          500: '#f4f4f8',
          600: '#f5f5f9',
          700: '#f8f8fa',
          800: '#fafafc',
          900: '#fdfdfd',
        },
        'red_crayola': {
          DEFAULT: '#ed254e',
          100: '#33040d',
          200: '#66081b',
          300: '#990c28',
          400: '#cc1136',
          500: '#ed254e',
          600: '#f15171',
          700: '#f47d95',
          800: '#f8a8b8',
          900: '#fbd4dc',
        },
      },
    },
  },
  plugins: [],
}

