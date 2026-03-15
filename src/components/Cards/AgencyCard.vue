<template>
  <div
    class="w-full h-[491px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center px-5 py-7">
    <!-- Image Placeholder -->
    <div class="h-[335px] bg-[#E8F6FF] rounded-[12px] overflow-hidden flex items-center justify-center">
      <img v-if="imgSrc" :src="imgSrc" alt="Agency Image" class="w-full h-full object-cover" />
    </div>

    <!-- Bottom Info -->
    <div class="w-full flex flex-col gap-3 mt-8">
      <!-- Badge -->
      <div
        class="w-fit h-[33px] bg-[#FEE4E4] rounded-full flex items-center justify-center gap-2 px-[18px] whitespace-nowrap">
        <div class="w-4 h-4 bg-[#C21D1A] rounded-full flex-shrink-0"></div>
        <span class="text-[14px] font-medium text-[#C21D1A] leading-none">
          {{ badgeText }}
        </span>
      </div>

      <!-- Text -->
      <h4 class="text-[24px] font-bold text-[#333333]">{{ title }}</h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badgeText: {
    type: String,
    default: 'Aynı Ajansı',
  },
  title: {
    type: String,
    default: 'Poligon Interactive',
  },
  imgSrc: {
    type: String,
    default: '',
  },
  imgWidth: {
    type: String,
  }
});
</script>
