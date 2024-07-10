import type { NuxtConfig } from '@nuxt/schema'

const { NAEDON_PORT, NAEDON_HTTPS_CERTIFICATE, NAEDON_HTTPS_CERTIFICATE_KEY } = process.env

export const devServer: NuxtConfig['devServer'] = {
  port: Number(NAEDON_PORT ?? 443),
  https: {
    cert: NAEDON_HTTPS_CERTIFICATE,
    key: NAEDON_HTTPS_CERTIFICATE_KEY,
  },
}
