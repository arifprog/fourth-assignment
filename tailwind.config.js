/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      "fontFamily":{
        'jakarta':['"Plus Jakarta Sans", sans-serif'],
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        'fade-in-out': 'fadeInOut 5s ease-in-out infinite'
      },
     
  },
  plugins: [],
}

}