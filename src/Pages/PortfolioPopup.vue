<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] overflow-hidden">
    <div class="w-full h-fit px-5 md:px-10 lg:px-[60px] py-10 flex flex-col gap-12 rounded-[20px] bg-white">
      <!-- Top Heading -->
      <div class="w-full h-fit flex justify-between">
        <div class="w-full h-fit flex flex-col items-center text-center gap-3">
          <h4 class="font-bold text-2xl md:text-[28px] lg:text-[32px] text-[#333333]">
            IACT bir marka güncellemesi ve web tasarımı
          </h4>
          <p class="text-[20px] text-[#333333]">
            Back model will spaces usabiltiy zoom turn key. Speed barn happenings drawing-board requirements.
          </p>
        </div>
        <img src="">
      </div>

      <!-- Img Div -->
      <div class="w-full h-fit flex flex-col gap-6">
        <div class="w-full h-full rounded-[8px] bg-[#A8ADCA] relative overflow-hidden">
          <img src="/portfolio-popup/main.png" class="w-fit h-fit object-cover object-center">
          <div class="absolute top-[672px] left-[1106px] flex items-center justify-end gap-[6px] w-fit h-fit">
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
        <div class="w-full h-full flex gap-6 shrink-0">
          <img src="/portfolio-popup/1.png" class="rounded-[8px] w-fit h-fit object-contain">
          <img src="/portfolio-popup/2.png" class="rounded-[8px] w-fit h-fit object-contain">
          <img src="/portfolio-popup/3.png" class="rounded-[8px] w-fit h-fit object-contain">
          <img src="/portfolio-popup/4.png" class="rounded-[8px] w-fit h-fit object-contain">
        </div>
      </div>

      <!-- UI/UX -->
      <div class="w-full h-fit flex flex-col gap-5">
        <div class="w-full h-fit flex flex-col gap-3">
          <div class="w-fit h-[41px] flex items-center rounded-full px-[26px] bg-[#FFF4E5]">
            <span class="font-medium text-[14px] text-[#F89402]">
              UI/UX Tasarım
            </span>
          </div>
          <p>
            Passionate about life and serving the people around them, Michael and Susan started Way to Moab to provide
            others with the opportunity to experience the magnificent wilderness they love! They have many years of
            experience leading large multi-month humanitarian expeditions and extensive technical rope and swift water
            instruction and rescue.
          </p>
          <p>
            Having raised their own two daughters to love the outdoors and serving others, their desire is to inspire
            individuals, groups, and families through the blessing of exploring the great outdoors while connecting with
            each other and ultimately the God who created it all!
          </p>
          <div class="w-full h-fit flex flex-col md:flex-row flex-wrap gap-10">
            <div class="w-fit h-fit flex gap-3">
              <img src="/icons/Date.svg">
              <div class="flex flex-col w-fit h-fit gap-1">
                <span class="text-xs text-[#999999]">
                  Upload Date
                </span>
                <p class="font-bold text-[14px] text-[#333333]">
                  September 20, 2025
                </p>
              </div>
            </div>

            <div class="w-fit h-fit flex gap-3">
              <img src="/icons/Client.svg">
              <div class="flex flex-col w-fit h-fit gap-1">
                <span class="text-xs text-[#999999]">
                  Client
                </span>
                <p class="font-bold text-[14px] text-[#333333]">
                  Bosh
                </p>
              </div>
            </div>

            <div class="w-fit h-fit flex gap-3">
              <img src="/icons/Sector.svg">
              <div class="flex flex-col w-fit h-fit gap-1">
                <span class="text-xs text-[#999999]">
                  Sector
                </span>
                <p class="font-bold text-[14px] text-[#333333]">
                  Tech
                </p>
              </div>
            </div>

            <div class="w-fit h-fit flex gap-3">
              <img src="/icons/Coast.svg">
              <div class="flex flex-col w-fit h-fit gap-1">
                <span class="text-xs text-[#999999]">
                  Project Coast
                </span>
                <p class="font-bold text-[14px] text-[#333333]">
                  $ 1.000/average
                </p>
              </div>
            </div>

            <div class="w-fit h-fit flex gap-3">
              <img src="/icons/Date.svg">
              <div class="flex flex-col w-fit h-fit gap-1">
                <span class="text-xs text-[#999999]">
                  Project Duration
                </span>
                <p class="font-bold text-[14px] text-[#333333]">
                  6+ months
                </p>
              </div>
            </div>

            <div class="w-fit h-fit flex gap-3">
              <img src="/icons/Link.svg">
              <div class="flex flex-col w-fit h-fit gap-1">
                <span class="text-xs text-[#999999]">
                  Live Result
                </span>
                <p class="font-bold text-[14px] text-[#333333]">
                  https://www.bosh.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Button -->
      <Button class="w-[264px]" variant="Secondary" state="Default" size="Medium">
        Daha fazla bilgi al
      </Button>
    </div>
  </section>
</template>

<script setup>
import Button from '../components/Button/Button.vue';

</script>