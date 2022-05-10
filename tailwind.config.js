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
  },
  plugins: [require('@tailwindcss/forms'),
    // ...
  ],
}

