import { fontFamily } from 'tailwindcss/defaultTheme'
import { defineTailwindConfig, fontFeatures } from './scripts/tailwindcss'

export default defineTailwindConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ['Pretendard GOV', 'Pretendard JP', 'Pretendard', 'Pretendard Std', ...fontFamily.sans],
          {
            fontFeatureSettings: fontFeatures('case', 'calt', 'salt', 'ss03', 'ss05', 'ss06'),
          },
        ],
      },

      backgroundColor: ({ theme }) => ({
        base: theme('colors.zinc.950'),
      }),
      textColor: ({ theme }) => ({
        base: theme('colors.zinc.400'),
      }),
    },
  },
})
