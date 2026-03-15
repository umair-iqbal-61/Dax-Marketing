<template>
  <div class="flex flex-col md:flex-row items-center gap-[23px] w-full h-fit">
    <!-- Left Image -->
    <img :src="imgSrc" alt="Company logo" class="w-full md:max-w-[164px] h-fit rounded-[12px] object-cover" />

    <!-- Right Content -->
    <div class="flex flex-col justify-center gap-[4px] w-full h-fit lg:w-[513px] lg:h-[99px]">
      <!-- Title -->
      <h3 class="font-poppins font-bold text-[16px] tracking-[0.5px] text-[#333333]">
        {{ title }}
      </h3>

      <!-- Info Row -->
      <div class="flex justify-between items-center w-full h-fit">
        <div class="flex items-center gap-[8px] h-[21px]">
          <span class="font-medium text-[14px] tracking-[0.1px] text-[#333333]">
            {{ company }}
          </span>
          <div class="w-3 bg-[#464646] border-[1px] -rotate-90 border-[#464646]"></div>
          <span class="font-poppins font-medium text-[14px] tracking-[0.1px] text-[#333333]">
            {{ date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: '/ogre-job-img.png',
  },
  title: {
    type: String,
    default: 'Ogre Interactive, Ambalaj Tasarımcısı – Operatörü Arıyor!',
  },
  company: {
    type: String,
    default: 'Ogre Interactive',
  },
  date: {
    type: String,
    default: '29 Ağu 25',
  },
})
</script>
