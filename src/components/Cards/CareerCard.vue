<template>
  <div class="w-[315px] md:w-full h-[99px] flex items-center gap-[16px] bg-white rounded-[12px]">
    <!-- Left Image -->
    <div class="w-fit rounded-[12px] overflow-hidden flex items-center justify-center bg-[rgb(232,246,255)]">
      <img v-if="imgSrc" :src="imgSrc" :alt="title" class="w-full h-full object-cover" />
    </div>

    <!-- Right Text Section -->
    <div class="flex flex-col justify-center w-[194px] h-[88px] gap-[4px]">
      <!-- Job Title -->
      <h4 class="text-[14px] font-bold text-[#333333] tracking-[0.5px] leading-snug font-poppins">
        {{ title }}
      </h4>

      <!-- Company Name -->
      <p class="text-[14px] font-medium text-[#333333] tracking-[0.1px] leading-snug font-poppins">
        {{ company }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Ogre Interactive Art Director Arıyor!',
  },
  company: {
    type: String,
    default: 'Ogre Interactive',
  },
  imgSrc: {
    type: String,
    default: '',
  },
});
</script>
