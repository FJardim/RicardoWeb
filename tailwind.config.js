module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      full: '100% 100%',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: {
          light: '#7ADE8E',
          DEFAULT: '#58C16D',
          dark: '#398448',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'),
    // ...
  ],
}

