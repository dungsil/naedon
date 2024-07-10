import { eslint } from './scripts/eslint.nuxt'
import { devServer } from './scripts/devserver.nuxt'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', 'radix-vue/nuxt'],

  compatibilityDate: '2024-07-08',

  components: [
    { path: '~/components', prefix: 'n', pathPrefix: true },
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'ko-KR',
        dir: 'ltr',
      },

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  experimental: {
    typedPages: true,
  },

  devtools: {
    enabled: true,
  },

  devServer,

  eslint,

  tailwindcss: {
    quiet: true,
    exposeConfig: false,
    cssPath: 'assets/css/tailwind.css',
  },

  pinia: {},

  vueuse: {
    autoImports: true,
    ssrHandlers: true,
  },

  radix: {
    prefix: 'r',
  },
})
