<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[60px]  gap-[60px]">
    <div
      class="flex flex-col items-center justify-center rounded-[12px] border border-[#0101FD] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)] md:flex-row lg:items-center lg:justify-between lg:gap-[60px] lg:h-[244px] p-10">
      <!-- LEFT CONTAINER -->
      <div class="w-full flex flex-col justify-between gap-8">
        <!-- Heading & Description -->
        <div class="w-fit flex flex-col gap-1">
          <h2 class="text-2xl lg:text-[32px] font-bold text-[#0101FD] tracking-normal md:tracking-[0.25px]">
            DAX Reklam Alanları ile Dijitalde Görünür Ol!
          </h2>
          <p class="text-[16px] lg:text-[20px] font-normal text-[#333333] tracking-[0.15px]">
            Dijital Ajanslar’da reklam vererek markanızı binlerce potansiyel
            müşteriye ulaştırmak ister misiniz?
          </p>
        </div>

        <!-- CTA BUTTON -->
        <div class="w-full flex justify-start lg:justify-start">
          <Button variant="Secondary" state="Default" size="Medium" class="w-full md:w-[227px]">
            Reklam Alanlarını İncele
          </Button>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="w-full md:w-fit flex items-center justify-center rounded-md overflow-hidden">
        <img src="/dakikalar-img.png" alt="Reklam Görseli" class="w-full md:w-fit object-contain" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue'
</script>
