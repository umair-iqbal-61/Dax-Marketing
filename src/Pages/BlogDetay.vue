<template>
  <main>
    <div
      class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col items-center justify-center overflow-hidden">
      <div
        class="bg-[url('/slider-image.png')] bg-cover bg-left lg:bg-center rounded-[20px] w-full h-[343px] lg:h-[186px] flex items-center justify-between ">
      </div>
    </div>

    <BrandWeekBlog />
    <ProjectsHaberler :showHeading="true" headingText="DAX Güncel" :showSecondRow="false" />
    <FeaturedAgenciesSection :showRow2="false" title="Öne Çıkan Dijital Pazarlama Ajansları" />
    <ProjectsSection :showFeatured="false" />
  </main>
</template>

<script setup>
import FeaturedAgenciesSection from '../Sections/Anasayfa Sections/FeaturedAgenciesSection.vue';
import ProjectsSection from '../Sections/Anasayfa Sections/ProjectsSection.vue';
import BrandWeekBlog from '../Sections/BlogDetaySections/BrandWeekBlog.vue';
import ProjectsHaberler from '../Sections/HaberlerSections/ProjectsHaberler.vue';

</script>
