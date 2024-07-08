<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import type { AnchorHTMLAttributes } from 'vue'
import type { VariantProps } from 'cva'

const variants = cva({
  base: 'text-sm font-semibold focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
  variants: {
    shape: {
      rounded: 'rounded-md shadow-sm',
    },

    color: {
      primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
    },

    size: {
      xs: 'p-1 text-xs',
      sm: 'p-1',
      md: 'p-1.5',
      lg: 'p-2',
      xl: 'p-2.5',
    },

    blocked: {
      true: 'block w-full',
      false: 'inline-block',
    },
  },

  compoundVariants: [
    { shape: 'rounded', size: ['xs', 'sm'], class: 'px-2' },
    { shape: 'rounded', size: 'md', class: 'px-2.5' },
    { shape: 'rounded', size: 'lg', class: 'px-3' },
    { shape: 'rounded', size: 'xl', class: 'px-3.5' },
  ],

  defaultVariants: {
    shape: 'rounded',
    color: 'primary',
    size: 'md',
    blocked: false,
  },
})

type ButtonVariantProps = VariantProps<typeof variants>

interface Props {
  shape?: ButtonVariantProps['shape']
  color?: ButtonVariantProps['color']
  size?: ButtonVariantProps['size']
  blocked?: boolean

  to?: RouteLocationRaw

  class?: string
  target?: AnchorHTMLAttributes['target']
  referrerpolicy?: AnchorHTMLAttributes['referrerpolicy']
}

const props = defineProps<Props>()
</script>

<template>
  <r-slot :class="cx(variants(props), props.class)">
    <nuxt-link
      v-if="props.to"
      :target="target"
      :to="props.to"
    >
      <slot />
    </nuxt-link>

    <button v-else>
      <slot />
    </button>
  </r-slot>
</template>
