/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08242c',
        teal: '#0d343f',
        carbon: '#061b21',
        panel: '#0d343f',
        cream: '#f7deb2',
        gold: {
          DEFAULT: '#f7deb2',
          deep: '#e2caa2',
        },
        mist: '#8ca4ab',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Sarabun', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        frame: '0 15px 35px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
