/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#23272A',
        light: '#ffffff',
        primary: '#5865F2',
        grey: '#F6F6F6',
        hover:' hsl(235,86.1%,71.8%)',
        hoverb:'(#313338)'
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1920'
      },

      backgroundImage: {
        'hmBG':'url("./img/hm-bg.svg")',
        'readyBG':'url("./img/svgexport-7.svg")',
        'bg1': 'url("./img/bg-img1.png")',
      },
    },
  },
  plugins: [],
}

