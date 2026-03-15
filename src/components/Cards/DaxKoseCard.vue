<template>
  <div class="w-full flex items-center gap-[23px]">
    <!-- LEFT IMAGE -->
    <div
      class="w-[70px] h-[61px] bg-[#E8F6FF] rounded-[12px] shrink-0 overflow-hidden flex items-center justify-center">
      <img v-if="imgSrc" :src="imgSrc" :alt="author" class="w-full h-full object-cover" />
    </div>

    <!-- RIGHT TEXT -->
    <div class="w-fit flex flex-col justify-between gap-[4px]">
      <p class="text-[14px] font-normal text-[#333333] tracking-[0.25px] leading-tight">
        {{ title }}
      </p>
      <h4 class="text-[14px] font-bold text-[#333333] tracking-[0.1px] leading-tight">
        {{ author }}
      </h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Dijital Çıtalar ve Bilge Baykuşlar',
  },
  author: {
    type: String,
    default: 'Alper Güçer',
  },
  imgSrc: {
    type: String,
    default: '',
  },
});
</script>
