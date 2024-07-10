import type { NuxtConfig } from '@nuxt/schema'

export const eslint: NuxtConfig['eslint'] = {
  config: {
    stylistic: {
      indent: 2,

      semi: false,
      arrowParens: true,
      blockSpacing: true,

      quotes: 'single',
      quoteProps: 'as-needed',
      braceStyle: 'stroustrup',
      commaDangle: 'always-multiline',
    },
  },
}
