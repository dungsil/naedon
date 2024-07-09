import withNuxt from './.nuxt/eslint.config.mjs'
import withTailwindCSS from 'eslint-plugin-tailwindcss'

export default withNuxt([
  // Your custom configs here
  ...withTailwindCSS.configs['flat/recommended'],

  {
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 2
        }
      }],

      // Nuxt 에서 자동으로 프리픽스 'n'을 붙이므로 비활성화
      'vue/multi-word-component-names': ['off']
    }
  }
])
