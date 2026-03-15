<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col gap-[40px] mt-[43px] lg:mt-[68px]">
    <!-- ========== TOP ROW ========== -->
    <div class="flex justify-between items-start w-full h-fit">
      <!-- LEFT SIDE (Heading + Text) -->
      <div class="flex flex-col justify-between gap-[12px] h-fit">
        <h2 class="font-[700] text-2xl md:text-[32px] tracking-normal md:tracking-[0.25px] text-[#333333]">
          Ajanslardan Son Çalışmalar
        </h2>

        <div class="flex items-center w-full h-fit justify-between">
          <p class="w-full h-fit font-medium text-[14px] md:text-[16px] tracking-[0.1px] text-[#999999]">
            Ajansların yakın dönemde gerçekleştirdiği projeleri keşfedin.
          </p>

          <div class="flex md:hidden items-center justify-end gap-[6px] w-fit h-fit">
            <!-- Left Arrow (inactive) -->
            <div class="w-[28px] h-[28px] flex items-center justify-center rounded-full p-[4px] cursor-not-allowed">
              <img src="/icons/Chevron-right-gray.svg" alt="" class="rotate-180 w-fit h-fit">
            </div>

            <!-- Right Arrow (active) -->
            <div
              class="w-[40px] h-[40px] flex items-center justify-center rounded-full p-[8px] bg-[#FFFFFF] border border-[#D9D9D9] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src="/icons/Chevron-right-gray.svg" alt="" class="w-fit h-fit">
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE (Navigation Buttons) -->
      <div class="hidden md:flex items-center justify-end gap-[6px] w-fit h-fit">
        <!-- Left Arrow (inactive) -->
        <div class="w-[28px] h-[28px] flex items-center justify-center rounded-full p-[4px] cursor-not-allowed">
          <img src="/icons/Chevron-right-gray.svg" alt="" class="rotate-180 w-fit h-fit">
        </div>

        <!-- Right Arrow (active) -->
        <div
          class="w-[40px] h-[40px] flex items-center justify-center rounded-full p-[8px] bg-[#FFFFFF] border border-[#D9D9D9] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer">
          <img src="/icons/Chevron-right-gray.svg" alt="" class="w-fit h-fit">
        </div>
      </div>
    </div>

    <!-- ========== CARDS ROW ========== -->
    <div class="w-full h-fit flex flex-col md:flex-row gap-[24px]">
      <!-- Card 1 -->
      <Kapsamli />

      <!-- Card 2 -->
      <Kapsamli />

      <!-- Card 3 -->
      <Kapsamli />
    </div>
  </section>
</template>

<script setup>
import Kapsamli from '../../components/Cards/Kapsamli.vue';
</script>
