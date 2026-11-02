/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lovable: {
          surface: '#fff7fd',
          'surface-lowest': '#ffffff',
          'surface-low': '#fdefff',
          'surface-container': '#f9e8ff',
          'surface-high': '#f6e1ff',
          'surface-highest': '#f0dbf9',
          'on-surface': '#23162c',
          'on-surface-variant': '#5c4a5f',
          primary: '#415186',
          'primary-hover': '#344479',
          'primary-container': '#4f5f8b',
          secondary: '#8b4e38',
          'secondary-accent': '#a3684d',
          'secondary-container': '#ffdbcf',
          tertiary: '#5b4e6a',
          'tertiary-container': '#eddcfe',
          border: 'rgba(229, 215, 222, 0.6)',
        },
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'lovable': '0 12px 32px -4px rgba(68, 54, 77, 0.12)',
        'lovable-sm': '0 4px 16px -2px rgba(68, 54, 77, 0.08)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
