<template>
  <main>
    <div
      class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col items-center justify-center overflow-hidden">
      <div
        class="bg-[url('/slider-image.png')] bg-cover bg-left lg:bg-center rounded-[20px] w-full h-[343px] lg:h-[186px] flex items-center justify-between ">
      </div>
    </div>

    <!-- BorsonWeb Section -->
    <BorsonWeb :showDakikalarCard="true" :showIcon="true" eventDates="12 Kasım 2025"
      featuredImg="/brand-week-main-notext.png" featuredTitle="Brand Week Istanbul, izleyicileriyle Buluşacak"
      featuredTitleColor="#333333"
      featuredDescription="“Brand New World” temasıyla düzenlenecek etkinlik, ilham verici konuşmalar, çığır açan projeler ve geleceğin haritasını çizen içeriklerle izleyicisini karşılayacak."
      featuredDescColor="#333333" featuredDate="29 Ağu 25" featuredDateColor="#333333" :showFeaturedTextInstead="true"
      featuredTopText="Etkinlik Tarihi 10–14 Kasım 2025" featuredTextColor="#333333" />

    <Dakikalar :onlyImage="true" leftTitle="Ajansınızın Görünürlüğünü ve Başarısını Katlayın"
      leftDescription="Türkiye’nin en görünür ajans platformunda yerinizi alın."
      leftButtonText="Hemen Kayıt Ol -Ücretsiz" />

    <ProjectsHaberler agencyTitle="Poligon Interactive" />

    <NewsPagination />
  </main>
</template>

<script setup>
import NewsPagination from '../Sections/HaberlerSections/NewsPagination.vue';
import ProjectsHaberler from '../Sections/HaberlerSections/ProjectsHaberler.vue';
import BorsonWeb from '../Sections/HaberlerSections/BorsonWeb.vue';
import Dakikalar from '../Sections/HaberlerSections/Dakikalar.vue';
</script>
