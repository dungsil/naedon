import type { Config } from 'tailwindcss'

export const defineTailwindConfig = (input: Partial<Config>) => input as Config
export const fontFeatures = (...features: string[]) => features.map((feature) => `'${feature}'`).join(', ')
