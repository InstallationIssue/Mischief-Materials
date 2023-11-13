/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',

      'primary-dark': '#1A1A27',
      'primary-dark-grey': '#1f2937',
      'primary-grey': '#6C756B',
      'primary-light-grey': '#D9D9D9',
      'primary-light': '#F2F5EA',
      'primary-white': '#FFFFFF',
      'primary-faint': '#D9D9D980',

      'secondary-dark': '#2D4D89',
      'secondary-light': '#647AA3',
      'secondary-faint': '#647AA380',

      'highlight-dark': '#B53453',
      'highlight-light': '#E75A7C',
      'highlight-faint': '#E75A7C80',

      'success-dark': '#13C90F',
      'success-light': '#40FF3D',
      'success-faint': '#40FF3D80',

      'warning-dark': '#E4A400',
      'warning-light': '#FFB800',
      'warning-faint': '#FFB80080',

      'danger-dark': '#DC1414',
      'danger-light': '#FF3434',
      'danger-faint': '#FF343480',

      'stats-strength': '#D65129',
      'stats-dexterity': '#29AED6',
      'stats-willpower': '#58D629',
      'stats-attack': '#A729D6',
      'stats-level': '#DBB924',
      'stats-armor': '#2446DB'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        play: ['var(--font-play)'],
        notable: ['var(--font-notable)'],
        libre: ['var(--font-libre)'],
      },
      
    },
  },
  plugins: [],
}
