<template>
  <div
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] py-5 h-[34px] md:h-[48px] flex items-center justify-between lg:mx-auto">
    <!-- LEFT SIDE -->
    <div class="flex items-center justify-between gap-5 lg:gap-3 h-[24px]">
      <!-- Small text -->
      <span class="text-[#606060] font-medium text-[10px] md:text-[12px] tracking-[0.1px]">
        5 Eyl 25
      </span>
      <div class="h-full flex gap-[17px]">
        <!-- Bigger text -->
        <span
          class="text-[#606060] font-medium text-[10px] tracking-[0.1px] flex items-center md:justify-end w-fit md:text-[14px]">
          Lorem ipsum dolor sit amet consectetur.
        </span>

        <!-- Logo -->
        <div class="flex items-center gap-1">
          <img src="/bundle-logo.png" alt="Bundle" class="" />
        </div>
      </div>
    </div>

    <!-- RIGHT BUTTON -->
    <div class="hidden md:block">
      <Button variant="Secondary" state="Default" size="Medium" class="w-[232px] h-[34px]">Ajans
        Kayıt</Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../Button/Button.vue";
</script>
