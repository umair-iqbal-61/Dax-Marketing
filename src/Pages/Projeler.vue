<template>
  <main>
    <NewsTabs activeBgColor="#EEFFEE" activeTextColor="#1D8C1D" :inactiveTextSize="'12px'" />
    <BorsonWeb :showDakikalarCard="true" :showAgencyCardBorder="true" />
    <ProjectsSection />
    <Dakikalar :onlyImage="true" />
    <ProjectsHaberler :showExtraRow="true" :showAgencyCard="false" />
    <NewsPagination />
  </main>
</template>

<script setup>
import NewsTabs from '../Sections/HaberlerSections/NewsTabs.vue';
import NewsPagination from '../Sections/HaberlerSections/NewsPagination.vue';
import Dakikalar from '../Sections/HaberlerSections/Dakikalar.vue';
import ProjectsSection from '../Sections/Anasayfa Sections/ProjectsSection.vue';
import BorsonWeb from '../Sections/HaberlerSections/BorsonWeb.vue';
import ProjectsHaberler from '../Sections/HaberlerSections/ProjectsHaberler.vue';
</script>
