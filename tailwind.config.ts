import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './portfolio/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   black: '#000',
    //   velog_grey: '#323232',
    //   red: '#FF0000',
    //   navy: '#05445E',
    //   dark_blue: '#161A30',
    //   misty_blue: '#AEB8C4',
    //   blue_grotto: '#163B50',
    //   slate: '#9CA6B8',
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            a: {
              color: 'white',
              '&:hover': {
                color: 'white',
              },
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            h4: {
              color: 'white',
            },
            h5: {
              color: 'white',
            },
            h6: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
            blockquote: {
              color: 'white',
            },
            code: {
              color: 'white',
            },
            figcaption: {
              color: 'white',
            },
            'figure figcaption': {
              color: 'white',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
