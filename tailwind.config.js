module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: false,
  theme: {
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        blackLight: 'rgba(0,0,0,0.5)',
        gray: {
          100: '#F0F3F5',
          200: '#DEDEDE',
          300: '#D4D4D4',
          400: '#B3BBC0',
          500: '#9e9e9e',
          600: '#616161',
        },
        teal: '#b2f5ea',
        blue: '#3157B8',
        lightBlue: '#3E7FFF',
        skyLighBlue: '#5C88DA',
        red: '#FF0000',
        lightRed: 'rgba(255, 0, 0, 0.05)',
        green: {
          100: '#7FC008',
          200: '#1a9e61',
        },
        lightGreen: 'rgba(127, 192, 8, 0.75)',
        orange: '#DB8C28',
      },
      placeholderColor: {
        gray: '#8792A2',
        gray350: '#C4C4C4',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
};
