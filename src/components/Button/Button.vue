<template>
  <button :class="[
    baseClasses,
    variantClasses,
    sizeClasses,
    stateClasses,
  ]">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'Primary' }, // Primary | Secondary | Subtle
  state: { type: String, default: 'Default' },   // Default | Hover | Disabled
  size: { type: String, default: 'Medium' }      // Medium | Small
})

const baseClasses =
  'font-inter font-normal tracking-tighter text-[14px] rounded-[8px] flex items-center justify-center transition-all duration-150'

// sizes (kept exactly as provided)
const sizeClasses = computed(() =>
  props.size === 'Small'
    ? 'px-0 py-[12px] gap-[4px]'
    : 'w-[227px] px-[20px] py-[12px] gap-[4px]'
)

// variant specific base (underline only for Subtle)
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'Secondary':
      return 'border border-[#0101FD]'
    case 'Subtle':
      return 'border-none underline decoration-solid decoration-0'
    default:
      return 'border border-[#0101FD]'
  }
})

const stateClasses = computed(() => {
  // Primary
  if (props.variant === 'Primary') {
    if (props.state === 'Hover') return 'bg-[#668CFF] text-[#FFFFFF]'
    if (props.state === 'Disabled') return 'border border-[#999999] text-[#999999] bg-transparent cursor-not-allowed'
    return 'bg-transparent text-[#0101FD]'
  }

  // Secondary
  if (props.variant === 'Secondary') {
    if (props.state === 'Hover') return 'bg-[#3366FF] text-[#FFFFFF]'
    if (props.state === 'Disabled') return 'bg-[#999999] border-[#999999] text-[#FFFFFF] cursor-not-allowed'
    return 'bg-[#0101FD] text-[#FFFFFF]'
  }

  // Subtle (underline retained only for subtle variant via variantClasses)
  if (props.variant === 'Subtle') {
    if (props.state === 'Hover') return 'text-[#0101FD]'
    if (props.state === 'Disabled') return 'text-[#999999] bg-[#999999] cursor-not-allowed'
    return 'text-[#333333]'
  }

  return ''
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
</style>
