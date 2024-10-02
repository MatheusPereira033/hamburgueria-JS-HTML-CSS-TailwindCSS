/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], //Aqui estamos mostrando os arquivos que bão utilizar o taiwindCSS
  theme: {
    extend: { //Aqui estou passando a minha imagem de fundo que vou utilizar como background image
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

