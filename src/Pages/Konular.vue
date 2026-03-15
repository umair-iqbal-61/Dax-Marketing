<template>
  <main>
    <NewsTabs activeBgColor="#FFECD1" activeTextColor="#D17C00" />
    <BorsonWeb :showAgencyCard="true" />
    <Dakikalar />

    <div
      class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col items-center justify-center overflow-hidden">
      <div
        class="bg-[url('/slider-image.png')] bg-cover bg-left lg:bg-center rounded-[20px] w-full h-[343px] flex items-center justify-between ">
      </div>
    </div>

    <FeaturedAgenciesSection title="Öne Çıkan Yazılım Ajansları" />

    <ProjectsHaberler agencyTitle="Poligon Interactive" />
    <NewsPagination />
  </main>
</template>

<script setup>
import NewsTabs from '../Sections/HaberlerSections/NewsTabs.vue';
import NewsPagination from '../Sections/HaberlerSections/NewsPagination.vue';
import Dakikalar from '../Sections/HaberlerSections/Dakikalar.vue';
import ProjectsHaberler from '../Sections/HaberlerSections/ProjectsHaberler.vue';
import BorsonWeb from '../Sections/HaberlerSections/BorsonWeb.vue';
import FeaturedAgenciesSection from '../Sections/Anasayfa Sections/FeaturedAgenciesSection.vue';
</script>
