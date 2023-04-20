/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#252525",
        loginBorder: "#DDDDDD",
        menu: "#1f1f1f",
        loginPerson: "#616060",
        shadow: "#f5f5f3",
        white: '#ffffff',
      },
      boxShadow: {
        'gif': ' 0px 0px 140px 35px rgba(0, 0, 0, 0.5)',
        'icon': ' 0px 0px 100px 12px rgba(0, 0, 0, 0.5)',
      },
      width: {
        '640': '40rem',
        '1472': '92rem',
        '352': '22rem',
        '448': '28rem',
        '576': '36rem',
        '960': '60rem',

      },
      margin: {
        '73': '4.6rem',
      },
      maxWidth: {
        '1/2': '50%',
        '14': '14rem',
        '4': '4rem',
        '92': '92%',
        '82': '82%',
        '16': '16%',
      },
      borderWidth: {
        '3': '3px',
      },
      screens: {
        'exsm': '520px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        'test': '0.1rem',
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
      },
      keyframes: {
        'modal': {
          '0%': {
            transform: 'translate(0px,100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'none',
            opacity: '1'
          },
        },
      },
      animation: {
        'modal': 'modal both 400ms linear ',
      }
    },
  },
  plugins: [],
} 
