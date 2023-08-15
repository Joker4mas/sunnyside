/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      //font family for the theme
      fontFamily: {
        'frans': ['Fraunces, san serif'],
      },
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow':' hsl(51, 100%, 49%)',
        'Dark-de-saturated': 'hsl(167, 40%, 24%)',
        'Dark-blue': 'hsl(198, 62%, 26%)',
        'Dark-grayish': 'hsl(232, 10%, 55%)',
        'shun-blued': 'hsl(210, 4%, 67%)',
        'White-sun': 'hsl(0, 0%, 100%)',
        'saturated-B':'hsl(212, 27%, 19%)',
        'Dark-moderate' : 'hsl(168, 34%, 41%)',
        'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'Grayish-blue': 'hsl(210, 4%, 67%)',
        'White': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

