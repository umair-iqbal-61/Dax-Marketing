<template>
  <section
    class="max-w-[1440px] w-full px-4 lg:px-[60px] mx-auto mt-[43px] lg:mt-[68px] py-10 md:py-0 flex flex-col gap-10">
    <div class="flex flex-col px-4 lg:px-0 gap-5 md:gap-3 w-full h-fit">
      <h2 class="font-bold text-[32px] tracking-[0.25px] text-[#333333]">
        Reklam seçenekleri
      </h2>

      <p class="font-normal text-[16px] tracking-[0.15px] text-[#333333]">
        Markanıza özel en uygun reklam modelini birlikte belirleyelim ve hedef kitlenize en etkili şekilde ulaşmanızı
        sağlayalım.
      </p>
    </div>

    <div class="w-full h-fit flex flex-col lg:flex-row gap-8 lg:gap-12">
      <!-- Left Section -->
      <AgencyAdsNavCard />

      <!-- Right Section -->
      <div
        class="w-[312px] h-fit mx-auto md:px-4 lg:px-0 md:w-full lg:mx-0 lg:w-[702px] flex flex-col items-center justify-between gap-[30px]">
        <div class="w-full flex gap-2.5">
          <div class="relative w-[312px] h-[258px] lg:w-[500px] lg:h-[298px] mx-auto">
            <!-- LEFT CARD -->
            <div
              class="absolute top-[18px] w-[187px] shrink h-[219px] lg:w-[315.8px] lg:h-[238px] border-[2.18px] border-[#0000FF] rounded-[9px] bg-white flex flex-col z-[10] p-3 lg:p-4">
              <!-- Header -->
              <div class="flex items-center gap-[6px] ">
                <div class="flex flex-col gap-1">
                  <div class="w-[9.46px] h-[9.46px] rounded-full bg-[#0000FF]"></div>
                  <div class="w-[9.46px] h-[5.46px] bg-[#0000FF]"></div>
                </div>
                <h3 class="font-[Integral CF] text-[#0000FF] text-[13.1px] leading-[20.38px] tracking-[6%]">
                  AYIN AJANSI
                </h3>
              </div>

              <!-- Content Box -->
              <div
                class="flex flex-col items-center justify-center w-full h-full lg:w-[276.5px] lg:h-[176.8px] rounded-[3.64px] bg-white">
                <img src="/image92.png" alt="Agency Logo" class="w-[108px] h-[108px] object-contain" />
                <p class="font-inter font-[900] text-[13.79px] leading-[20.13px] tracking-[-3%] text-[#000000]">
                  Brainchild Creatives
                </p>
              </div>
            </div>

            <!-- RIGHT CARD (overlapping left) -->
            <div
              class="absolute top-[76px] right-0 w-[187px] h-[219px] lg:w-[315.8px] lg:h-[238px] border-[2.18px] border-[#0000FF] rounded-[8.73px] bg-white flex flex-col z-[20] p-3 lg:p-4">
              <!-- Header -->
              <div class="flex items-center gap-[6px] ">
                <div class="flex flex-col gap-1">
                  <div class="w-[9.46px] h-[9.46px] rounded-full bg-[#0000FF]"></div>
                  <div class="w-[9.46px] h-[5.46px] bg-[#0000FF]"></div>
                </div>
                <h3 class="font-[Integral CF] text-[#0000FF] text-[13.1px] leading-[20.38px] tracking-[6%]">
                  AYIN AJANSI
                </h3>
              </div>

              <!-- Content Box -->
              <div
                class="flex flex-col items-center justify-center mx-auto w-full h-full lg:w-[276.5px] lg:h-[176.8px] rounded-[3.64px] bg-black">
                <img src="/image93.png" alt="Agency Logo" class="w-[108px] h-[108px] bg-white object-contain" />
                <p class="font-inter font-[900] text-[13.79px] leading-[20.13px] tracking-[-3%] text-white">
                  Artisans of Impact
                </p>
              </div>
            </div>
          </div>
        </div>

        <p class="mt-6 lg:mt-0 w-full h-fit">
          <b>Ayın Ajansı: Sektörün Gözünde Fark Yaratın</b> <br />
          DijitalAjanslar.com’un anasayfasında ve ajans rehberinde öne çıkın, markaların dikkatini üzerinize çekin. Her
          ay yalnızca bir ajansa ayrılan bu alan, görünürlüğünüzü artırarak yeni iş fırsatlarına kapı aralar. Prestijli
          bu vitrin sayesinde hem marka bilinirliğinizi güçlendirin hem de potansiyel müşterilere güven verin. <br />
          <b>Her ay sadece 1 ajansa özel kontenjan! </b>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyAdsNavCard from '../../components/Cards/AgencyAdsNavCard.vue'
</script>
