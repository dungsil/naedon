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
      }]
    }
  }
])
