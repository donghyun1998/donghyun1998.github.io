import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './portfolio/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000',
      red: '#FF0000',
      navy: '#05445E',
      dark_blue: '#05263B',
      misty_blue: '#AEB8C4',
      blue_grotto: '#163B50',
      slate: '#9CA6B8',
      gunmetal_gray: '#4E514E',
      gray: '#666666',
      pewter: '#A5ABA0',
      ivory: '#DBDDD0'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
