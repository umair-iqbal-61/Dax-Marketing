<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col mt-[43px] lg:flex-row lg:justify-between gap-[27px] lg:mt-[68px]">
    <!-- LEFT CARD -->
    <div class="w-full bg-white rounded-[20px] p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.08)] gap-[23px]">
      <div class="flex flex-col gap-8">
        <!-- Heading -->
        <h3 class="text-xl md:text-2xl shrink-0 font-bold text-[#333333]">
          Dijital Ajanslar’da Yerinizi Alın
        </h3>

        <!-- Middle Text -->
        <div class="flex flex-col gap-1.5 md:gap-3">
          <h4 class="text-xl md:text-2xl font-bold text-[#0101FD]">
            Ajansınızın Görünürlüğünü ve Başarısını Katlayın
          </h4>
          <p class="text-[14px] font-normal text-[#333333] tracking-[0.25px] leading-snug">
            Türkiye’nin en görünür ajans platformunda yerinizi alın, markaların sizi keşfetmesine izin verin. Şimdi
            kaydolun, fırsatları kaçırmayın.
          </p>
        </div>

        <!-- Button -->
        <button
          class="w-full md:w-[227px] h-[45px] bg-[#0101FD] rounded-[8px] text-white font-poppins font-medium text-[14px] flex items-center justify-center gap-[4px]">
          Hemen Kayıt Ol <span class="italic">-Ücretsiz</span>
        </button>
      </div>
    </div>

    <!-- CENTER CARD -->
    <div class="w-full bg-white rounded-[20px] p-6 flex flex-col gap-[23px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div class="flex flex-col gap-8">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h3 class="text-[24px] font-bold text-[#333333]">
            Araçlar
          </h3>
          <span class="text-[14px] font-medium text-[#333333] underline underline-offset-1">
            Tümünü Gör
          </span>
        </div>

        <!-- Tool Card 1 -->
        <div class="flex gap-4 md:items-center">
          <div
            class="w-[164px] h-fit shrink-0 rounded-[12px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src="/araclar-card/adjust.png" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col gap-[4px] justify-center w-full h-[106px] md:h-full ">
            <p
              class="text-[10px] text-center bg-[#EEFFED] text-[#22A121] rounded-[4px] px-[4px] py-[2px] w-fit md:w-[171px]">
              Dijital Pazarlama Aracı
            </p>
            <p class="text-[14px] font-bold text-[#333333] leading-tight">
              Adjust Audience Builder ile Hedefleme Gücünüzü Arttırın, ROI’nizi Yükseltin!
            </p>
          </div>
        </div>

        <!-- Tool Card 2 -->
        <div class="flex gap-4 md:items-center">
          <div
            class="w-[164px] h-fit shrink-0 rounded-[12px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src="/araclar-card/vfs.png" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col gap-[4px] justify-center w-full h-[106px] md:h-full ">
            <p
              class="text-[10px] text-center bg-[#EEFFED] text-[#22A121] rounded-[4px] px-[4px] py-[2px] w-fit md:w-[171px]">
              Yapay Zeka Uygulamaları
            </p>
            <p class="text-[14px] font-bold text-[#333333] leading-tight">
              VFS Global'den Yapay Zeka Vize Chatbot'u
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT CARD -->
    <div class="w-full bg-white rounded-[20px] p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.08)] gap-[23px]">
      <div class="flex flex-col gap-8">
        <!-- Heading -->
        <h3 class="text-xl md:text-2xl shrink-0 font-bold text-[#333333]">
          Aradığın Ajans DAX’ta!
        </h3>

        <!-- Middle Text -->
        <div class="flex flex-col gap-1.5 md:gap-3">
          <h4 class="text-xl md:text-2xl font-bold text-[#0101FD]">
            Ajansınızı dakikalar içinde bulun, karşılaştırın.
          </h4>
          <p class="text-[14px] font-normal text-[#333333] tracking-[0.25px] leading-snug">
            Firmaların portfolyolarını ve müşteri yorumlarını incele. Sorularını sor. Dilediğin iletişim kanalı ile
            detaylar üzerinde anlaş.
          </p>
        </div>

        <!-- Button -->
        <button
          class="w-full md:w-[227px] h-[45px] bg-[#0101FD] rounded-[8px] text-white font-poppins font-medium text-[14px] flex items-center justify-center gap-[4px]">
          Teklif Al <span class="italic">-Ücretsiz</span>
        </button>
      </div>
    </div>
  </section>
</template>
