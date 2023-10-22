/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'indigo-blue': {
          100: '#EBEDF7',
          200: '#CFD3EC',
          400: '#99A1D5',
          700: '#4756B4',
          800: '#2D3FAA',
          900: '#22318B',
        },
        'tertiary-violet': {
          600: '#8C629E',
        },
        'neutral-grey': {
          200: '#D0D7DE',
          800: '#404959',
          900: '#262F40',
        },
        'neutral-black': '#1A1A19',
        'darker-black': '#111111',
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-primary-low': 'var(--primary-low)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-high': 'var(--primary-high)',
        'th-primary-higher': 'var(--primary-higher)',
        'th-primary-highest': 'var(--primary-highest)',
        'th-accent-low': 'var(--accent-low)',
        'th-accent-high': 'var(--accent-high)',
        'th-toggle-button': 'var(--toggle-button)',
      },
      gridTemplateColumns: {
        sidebar: "300px auto",
        "sidebar-collapsed": "64px auto",
      },
      gridTemplateRows: {
        header: "64px auto",
      },
    },
  },
  plugins: [],
}

