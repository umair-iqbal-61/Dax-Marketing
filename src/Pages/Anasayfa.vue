<template>
  <main>
    <HaftaninGundemi />
    <div
      class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] gap-2.5 mt-[43px] lg:mt-[68px] flex flex-col items-center justify-center overflow-hidden">

      <div
        class="bg-[url('/slider-image.png')] bg-cover bg-center-[10px] lg:bg-center rounded-[20px] w-full h-[343px] flex items-center justify-between px-2 ">
        <img class="w-10 h-10 rotate-90" src="/icons/Chevron-down-dark.svg" alt="">
        <img class="w-10 h-10 -rotate-90" src="/icons/Chevron-down-dark.svg" alt="">
      </div>

      <!-- SLIDER DOTS -->
      <div class="flex justify-center items-center gap-1.5 md:gap-2">
        <div class="w-[9px] h-[9px] bg-[#0101FD] rounded-full"></div>
        <div class="w-[9px] h-[9px] bg-[#D9D9D9] rounded-full"></div>
        <div class="w-[9px] h-[9px] bg-[#D9D9D9] rounded-full"></div>
      </div>
    </div>
    <DaxGuncelSection />
    <DaxtubeSection />
    <DaxReklamSection />
    <DaxKonularSection />
    <ProjectsSection />
    <FeaturedAgenciesSection />
    <EtkinliklerSection />
    <EgitimlerSection />
    <AjansAraclariSection />
    <DijitalAjansBilgiSection />
  </main>
</template>

<script setup>
import HaftaninGundemi from '../Sections/Anasayfa Sections/HaftaninGundemi.vue';
import DaxGuncelSection from '../Sections/Anasayfa Sections/DaxGuncelSection.vue';
import DaxtubeSection from '../Sections/Anasayfa Sections/DaxtubeSection.vue';
import DaxReklamSection from '../Sections/Anasayfa Sections/DaxReklamSection.vue';
import DaxKonularSection from '../Sections/Anasayfa Sections/DaxKonularSection.vue';
import ProjectsSection from '../Sections/Anasayfa Sections/ProjectsSection.vue';
import FeaturedAgenciesSection from '../Sections/Anasayfa Sections/FeaturedAgenciesSection.vue';
import EtkinliklerSection from '../Sections/Anasayfa Sections/EtkinliklerSection.vue';
import EgitimlerSection from '../Sections/Anasayfa Sections/EgitimlerSection.vue';
import AjansAraclariSection from '../Sections/Anasayfa Sections/AjansAraclariSection.vue';
import DijitalAjansBilgiSection from '../Sections/Anasayfa Sections/DijitalAjansBilgiSection.vue';
</script>