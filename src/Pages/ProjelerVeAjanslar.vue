<template>
  <main>
    <PageHeading />
    <BorsonVeAjanslar />
    <NewsPagination />
    <Dakikalar :onlyImage="true" />
  </main>
</template>

<script setup>
import PageHeading from '../Sections/ProjelerVeAjanslarSections/PageHeading.vue';
import BorsonVeAjanslar from '../Sections/ProjelerVeAjanslarSections/BorsonVeAjanslar.vue';
import NewsPagination from '../Sections/HaberlerSections/NewsPagination.vue';
import Dakikalar from '../Sections/HaberlerSections/Dakikalar.vue';
</script>
