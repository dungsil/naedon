<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'

const variants = cva({
  base: [
    'block w-full rounded-md border-0 px-3 py-1.5',
    'bg-zinc-950',
    'text-zinc-100 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6',
    'ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600',
    'focus-visible:outline-none',
  ],
})

interface Props {
  modelValue?: string
  defaultValue?: string

  class?: InputHTMLAttributes['class']
  name: InputHTMLAttributes['name']
  type?: InputHTMLAttributes['type']
  placeholder?: InputHTMLAttributes['placeholder']
  autocomplete?: InputHTMLAttributes['autocomplete'] | AutoFillBase | AutoFillField
}

interface Emits {
  (e: 'update:modelValue', payload: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :autocomplete="props.autocomplete"
    :class="cx(variants(props), props.class)"
    :name="props.name"
    :placeholder="props.placeholder"
    :type="props.type"
  >
</template>
