/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ffbbec',
        purple: '#bf76fa',
        badge: 'rgba(255, 255, 255, 0.8)',
        'bg-darken': 'rgba(0, 0, 0, .5)',
      },
    },
  },
  plugins: [],
};
