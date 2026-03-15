<template>
  <section
    class="bg-[url('/Desktop-1.png')] bg-cover bg-center max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-[488px] md:h-[530px] flex items-center justify-center">
    <div class="w-full h-full flex flex-col items-center justify-center mx-4 gap-[28px]">
      <div class="w-fit h-fit flex gap-2">
        <div
          class="w-fit h-fit md:h-[33px] bg-[#EDEDFF] rounded-full flex items-center justify-center gap-2 px-6 py-1.5">
          <img class="w-4 h-4 md:w-6 md:h-6 rounded-full" src="/icons/Logo-3.svg">
          <span class="text-xs md:text-[14px] font-medium text-[#0101FD]">
            Sponsorlu İçerik
          </span>
        </div>
        <div
          class="w-fit h-[25px] md:h-[33px] bg-[#FEE4E4] rounded-full flex items-center justify-center gap-2 px-[22px]">
          <img class="w-fit h-fit rounded-full" src="/icons/Sun.svg">
          <span class="text-xs md:text-[14px] font-medium text-[#C21D1A]">
            Ayın Ajansı
          </span>
        </div>
        <div
          class="w-[25px] h-[25px] md:w-[33px] md:h-[33px] bg-[#EDEDFF] flex items-center justify-center rounded-full">
          <p class="font-bold text-[16px] text-[#0101FD]">+</p>
        </div>
      </div>

      <div class="flex flex-col items-center text-center justify-center gap-[14px]">
        <h2 class="text-2xl md:text-[32px] font-bold text-[#333333]">
          DAX Reklam Alanları ile Dijitalde Görünür Ol!
        </h2>
        <p class="max-w-[956px] text-[16px] md:text-[20px] font-normal text-[#333333] tracking-[0.15px]">
          Her ay binlerce ajans, girişim ve pazarlama profesyonelinin ziyaret ettiği DijitalAjanslar.com’da markanızı
          doğru hedef kitleyle buluşturun.
        </p>
      </div>

      <div>
        <Button variant="Secondary" state="Default" size="Medium" class="w-full h-[45px]">Hemen Reklam Vermeye
          Başla</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue';
</script>