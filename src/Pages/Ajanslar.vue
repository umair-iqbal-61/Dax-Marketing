<template>
  <main>
    <div
      class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col items-center justify-center overflow-hidden">
      <div
        class="bg-[url('/slider-image.png')] bg-cover bg-left lg:bg-center rounded-[20px] w-full h-[343px] lg:h-[186px] flex items-center justify-between ">
      </div>
    </div>

    <Markaniza />
    <Sizin />
    <Dakikalar />
    <EnIyi />
    <SonCalismalar />
    <DaxSection />
    <ProjectsSection />
  </main>
</template>

<script setup>
import Dakikalar from '../Sections/HaberlerSections/Dakikalar.vue';
import ProjectsSection from '../Sections/Anasayfa Sections/ProjectsSection.vue';
import Markaniza from '../Sections/AjanslarSections/Markaniza.vue';
import Sizin from '../Sections/AjanslarSections/Sizin.vue';
import EnIyi from '../components/EnIyi.vue';
import SonCalismalar from '../Sections/AjanslarSections/SonCalismalar.vue';
import DaxSection from '../Sections/AjanslarSections/DaxSection.vue';
</script>
