<template>
  <div
    class="w-full max-w-[312px] h-fit flex flex-col bg-white rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] p-6 gap-[18px] mx-auto">

    <!-- Top Image Section -->
    <div class="w-[245px] h-fit flex flex-col items-center gap-[18px]">
      <img src="/brand-week-ajans-details/big-red.png" class="w-fit h-fit object-cover rounded-[4px]" />

      <!-- Heading + Status -->
      <div class="w-full h-fit flex items-center gap-0.5">
        <h3 class="font-bold text-xl text-[#333333]">Purple Murple</h3>
        <div class="w-fit h-fit flex pl-1 pr-2 py-1 gap-1 border border-[#1D8C1D] rounded-full">
          <img src="/icons/Trusted-no-border.svg" class="w-fit h-fit" />
          <p class="font-semibold text-xs text-[#1D8C1D]">Onaylı</p>
        </div>
        <img src="/icons/Logo-3-border.svg" class="w-fit h-fit" />
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-[4px]">
        <span class="text-[16px] font-normal font-poppins text-[#333]">4.8</span>
        <img src="/icons/Star.svg" alt="">
        <span class="text-[14px] font-medium font-poppins text-[#0101FD]">145</span>
        <span class="text-[14px] font-normal font-poppins text-[#0101FD]">reviews</span>
      </div>

      <!-- Tags -->
      <div class="w-fit h-fit flex gap-3">
        <div
          class="w-fit h-fit border border-[#D9D9D9] rounded-[4px] px-2 py-1 shadow-[0px_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center">
          <span class="text-xs font-normal text-[#333333] shrink-0">Digital Pazarlama</span>
        </div>
        <div
          class="w-fit h-fit border border-[#D9D9D9] rounded-[4px] px-2 py-1 shadow-[0px_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center">
          <span class="text-xs font-normal text-[#333333] shrink-0">Digital Pazarlama</span>
        </div>
      </div>

      <!-- Icons Row -->
      <div class="flex gap-3">
        <img src="/icons/Heart.svg" class="w-fit h-fit object-contain">
        <img src="/icons/Download.svg" class="w-fit h-fit object-contain">
      </div>
    </div>

    <!-- Middle Info Box -->
    <div class="w-full h-fit bg-[#F8F8FA] rounded-[12px] border-[0.4px] border-[#D9D9D9] p-5">
      <div class="w-fit h-fit flex flex-col items-start gap-2.5">
        <!-- Employees -->
        <div class="flex items-center gap-3 w-fit h-fit">
          <img class="w-fit h-fit" src="/icons/Employees.svg" alt="">

          <div class="flex items-center gap-1">
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">49</span>
            <span class="text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">kişilik ekip</span>
          </div>
        </div>

        <!-- Price -->
        <div class="flex items-center gap-3 w-fit h-fit">
          <img class="w-fit h-fit" src="/icons/Price.svg" alt="">

          <div class="flex flex-col items-start gap-1">
            <div class="flex gap-1">
              <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">$1,000 - $10,000</span>
              <span
                class="hidden md:flex text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">arası</span>
            </div>
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">Dijital Pazarlama</span>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-3 w-fit h-fit">
          <img class="w-fit h-fit" src="/icons/Location.svg">

          <div class="flex items-center gap-1">
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">10</span>
            <span class="text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">Yıllık Tecrübe</span>
          </div>
        </div>

        <!-- Portfolio -->
        <div class="flex items-center gap-3 w-fit h-fit">
          <img class="w-fit h-fit" src="/icons/Cube.svg">

          <div class="flex items-center gap-1">
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">21+</span>
            <span class="text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">Portfolyo</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="w-full flex flex-col gap-3">
      <Button variant="Secondary" state="Default" size="Medium" class="w-full h-[45px]">
        İletişime Geç
      </Button>
      <Button variant="Primary" state="Default" size="Medium" class="w-full h-[45px]">
        Websitesini Ziyaret Et
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue';

</script>
