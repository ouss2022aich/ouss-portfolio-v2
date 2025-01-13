/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        zendots : ['zen-dots', 'sans-serif'],
        bakbakone : ['bakbak-one', 'sans-serif'],
        karantina : ['karantina', 'sans-serif'],
        moderniz : ['moderniz', 'sans-serif'],
        productsans : ['product_sans_reg', 'sans-serif'],
        bigshoulderstext : ['BigShouldersText', 'sans-serif']
       
      },
      cursor : {
         'expolore' : 'url(/src/media/icons/compass.png), pointer'
      },
      keyframes : {
        keyframes: {
          expand: {
            '0%': { height: '2.5rem' }, // h-10
            '100%': { height: '7.5rem' } // h-30
          },
          collapse: {
            '0%': { height: '7.5rem' },
            '100%': { height: '2.5rem' }
          },
        },
        animation: {
          expand: 'expand 0.5s ease-in-out',
          collapse: 'collapse 0.5s ease-in-out',
        },
      }
    },
  },
  plugins: [],
}

