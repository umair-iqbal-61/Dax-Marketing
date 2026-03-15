<template>
  <div class="w-full lg:w-fit h-fit rounded-[8px] flex flex-col gap-[20px] py-[20px] overflow-hidden">
    <!-- Upper Section -->
    <div class="w-[288px] lg:w-full flex items-center gap-[12px] px-[20px]">
      <!-- Left Image -->
      <div
        class="w-[88px] shrink-0 h-[88px] bg-[#000000] rounded-[4px] overflow-hidden flex items-center justify-center">
        <img v-if="imgSrc" :src="imgSrc" :alt="name" class="w-full h-full object-cover" />
      </div>

      <!-- Right Info -->
      <div class="flex flex-col justify-between h-[90px] w-[248px] gap-[8px]">
        <!-- Name + Badge -->
        <div class="flex items-center gap-2">
          <h3 class="font-[600] text-[16px] leading-[24px] tracking-[-0.03em] text-[#333333] font-inter">
            {{ name }}
          </h3>
          <img src="/icons/Trusted.svg" alt="">
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-[4px]">
          <span class="text-[16px] font-normal font-poppins text-[#333]">4.8</span>
          <img src="/icons/Star.svg" alt="">
          <span class="text-[14px] font-medium font-poppins text-[#0101FD]">145</span>
          <span class="text-[14px] font-normal font-poppins text-[#0101FD]">reviews</span>
        </div>

        <!-- Category Tag -->
        <div
          class="w-fit border border-[#D9D9D9] rounded-[4px] px-[8px] py-[4px] shadow-[0px_1px_4px_0px_#0000001F] flex items-center justify-center">
          <span class="text-[12px] font-normal text-[#333333] font-poppins">{{ category }}</span>
        </div>
      </div>
    </div>

    <!-- Lower Description -->
    <div class="w-fit h-fit
     px-[20px]">
      <p class="text-[12px] font-normal text-[#999999] font-poppins tracking-[0.4px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  imgSrc: String,
  verified: {
    type: Boolean,
    default: false,
  },
  category: String,
  description: String,
})
</script>
