<template>
  <div :class="['flex flex-col', gapClass]" :style="{ width }">
    <!-- Label -->
    <label v-if="hasLabel" class="text-[#333333] text-[16px]" :class="textColorLabel">
      {{ label }}
    </label>

    <!-- Description -->
    <p v-if="hasDescription" class="font-body text-[14px] leading-[140%]" :class="textColorDescription">
      {{ description }}
    </p>

    <!-- Select Field -->
    <div
      class="w-full h-fit flex justify-between items-center rounded-[8px] px-[12px] py-[8px] transition-colors duration-150"
      :class="[
        backgroundColor,
        textColorValue,
        cursorType,
      ]" :style="innerStyle">
      <!-- Value or Placeholder -->
      <span class="text-[14px] leading-[100%]" :style="{ color: computedValueTextColor }"
        :class="{ 'text-[#B3B3B3]': valueType === 'placeholder' && state !== 'disabled' && !valueTextColor }">
        {{ value }}
      </span>

      <!-- Chevron Icon -->
      <img src="/icons/Chevron-down.svg">
    </div>

    <!-- Error Message -->
    <p v-if="state === 'error' && hasError" class="text-[14px] leading-[140%] text-[#DB2D1D] mt-[4px]">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  state: { type: String, default: 'default' }, // 'default' | 'disabled' | 'error'
  valueType: { type: String, default: 'default' }, // 'default' | 'placeholder'
  value: { type: String, default: 'Value' },
  hasLabel: { type: Boolean, default: true },
  label: { type: String, default: 'Label' },
  hasDescription: { type: Boolean, default: true },
  description: { type: String, default: 'Description' },
  hasError: { type: Boolean, default: true },
  error: { type: String, default: 'Error' },
  width: { type: String, default: '' },

  // 🆕 Custom style control props
  valueTextColor: { type: String, default: '' }, // e.g. '#333333'
  innerBorderColor: { type: String, default: '' }, // e.g. '#0000FF'
})

const gapClass = 'gap-[8px]'

// === Dynamic Computed Classes ===
const textColorLabel = computed(() => {
  if (props.state === 'disabled') return 'text-[#B3B3B3]'
  return 'text-[#333333]'
})

const textColorDescription = computed(() => {
  if (props.state === 'disabled') return 'text-[#B3B3B3]'
  return 'text-[#757575]'
})

const textColorValue = computed(() => {
  if (props.state === 'disabled') return 'text-[#B3B3B3]'
  if (props.state === 'error') return 'text-[#333333]'
  return 'text-[#333333]'
})

const borderColor = computed(() => {
  if (props.state === 'error') return 'border-[#C21D1A]'
  if (props.state === 'disabled') return 'border-[#999999]'
  return 'border-[#D9D9D9]'
})

const backgroundColor = computed(() => {
  if (props.state === 'disabled') return 'bg-[#D9D9D9]'
  return 'bg-white'
})

const iconColor = computed(() => {
  if (props.state === 'disabled') return '#B3B3B3'
  return '#333333'
})

const cursorType = computed(() => {
  if (props.state === 'disabled') return 'cursor-not-allowed'
  return 'cursor-default'
})

// Dynamic styles
const innerStyle = computed(() => {
  return {
    height: '40px',
    borderRadius: '8px',
    border: `1px solid ${props.innerBorderColor || (props.state === 'error' ? '#C21D1A' : '#D9D9D9')}`,
  }
})

const computedValueTextColor = computed(() => {
  if (props.state === 'disabled') return '#B3B3B3'
  return props.valueTextColor || '#333333'
})
</script>
