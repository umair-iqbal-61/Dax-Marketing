<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px]">
    <div class="w-full h-fit flex flex-col md:flex-row p-6 rounded-[20px] gap-[18px] bg-white">

      <!-- Map -->
      <div
        class="max-w-[902px] w-full h-fit flex flex-col gap-6 rounded-[20px] bg-white border border-white shadow-[0px_1px_4px_rgba(0,0,0,0.1)] p-6">

        <!-- Map Image -->
        <div class="relative w-full h-fit">
          <img src="/besiktas-map.png" class="w-full h-[216px] md:h-fit object-cover rounded-[12px]" />
          <div class="absolute top-[12px] left-[12px] bg-white rounded-[8px] px-3 py-2 flex text-center">
            <button class="text-[#0101FD] text-[16px] font-semibold">
              Get Direction
            </button>
          </div>
        </div>

        <!-- Details -->
        <div class="flex flex-col md:flex-row w-full h-fit gap-10 flex-grow">
          <div class="w-fit h-fit">
            <p class="font-normal text-[16px] text-[#333333] tracking-[0.15px]">
              Balmumcu Mah. Barbaros Blv. Bina No: 26 İç Kapı No: 8 Beşiktaş/ İstanbul
            </p>
          </div>

          <!-- Contact Info -->
          <div class="flex flex-col lg:flex-row justify-between gap-4 w-fit h-fit shrink-0">
            <div class="flex items-center gap-2">
              <img src="/icons/Phone.svg" alt="Phone" class="w-fit h-fit" />
              <p class="font-poppins font-[400] text-[16px] text-[#333333]">
                +90 850 309 32 18
              </p>
            </div>

            <div class="flex items-center gap-[8px]">
              <img src="/icons/EnvelopeSimple.svg" class="w-fit h-fit" />
              <p class="font-poppins font-[400] text-[16px] text-[#333333]">
                info@edvido.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Big Red -->
      <div class="max-w-[352px] w-fit h-fit flex flex-col gap-[18px]">
        <img src="/brand-week-ajans-details/big-red.png" class="w-[94px] h-[94px] rounded-xl">
        <p class="text-[16px] text-black">
          Bir markanın ihtiyacı olan tüm dijital iletişim çalışmalarını, tek çatı altında sunabilecek deneyim ve
          donanıma sahip, 360 derece dijital reklam ajansıyız.
        </p>
        <Button class="w-full" variant="Secondary" state="Default" size="Medium">
          İletişime Geç
        </Button>
        <Button class="w-full" variant="Primary" state="Default" size="Medium">
          Websitesini Ziyaret Et
        </Button>
        <div class="w-fit h-fit flex gap-5">
          <img src="/icons/Twitter.svg" class="w-[18px] h-4 object-contain">
          <img src="/icons/Instagram.svg" class="w-[18px] h-4 object-contain">
          <img src="/icons/LinkedIn.svg" class="w-[18px] h-4 object-contain">
          <img src="/icons/YouTube.svg" class="w-[18px] h-4 object-contain">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue';

</script>