/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        mati1: {
          DEFAULT: '#000000', // Color base
          600: '#333333', // Tonalidad más clara
          700: '#1A1A1A', // Tonalidad más oscura
        },
        mati2: {
          DEFAULT: '#FFFFFF',
          600: '#E5E5E5',
          700: '#CCCCCC',
        },
        mati3: {
          DEFAULT: '#003366',
          600: '#0055AA',
          700: '#002244',
        },
        mati4: {
          DEFAULT: '#FF6600',
          600: '#CC5200',
          700: '#993D00',
        },
        mati5: {
          DEFAULT: '#F5F5DC',
          600: '#E0E0C0',
          700: '#CCCCA0',
        },
      },
    },
  },
  plugins: [],
};
