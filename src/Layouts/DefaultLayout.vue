<template>
  <div class="min-h-screen bg-[#F8F8FA] text-gray-900 flex flex-col">

    <!-- Optional Banner (for some pages) -->
    <Banner v-if="showBanner" />

    <!-- Top Bar -->
    <div class="bg-white border-b border-gray-200">
      <div class=" mx-auto">
        <TopBar />
      </div>
    </div>

    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <HeaderMain />
    </div>

    <!-- Main Page Content -->
    <main class="">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-[43px] lg:mt-[68px]">
      <div class=" mx-auto">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from '../components/Header/TopBar.vue'
import HeaderMain from '../components/Header/HeaderMain.vue'
import Footer from '../components/Footer/Footer.vue'
import Banner from '../Sections/HaberlerSections/NewsBanner.vue'

const route = useRoute()

const bannerPages = ["Haberler", "Konular", "Projeler", "ProjelerVeAjanslar", "Etkinlikler", "Ajanslar", "Hakkimizda"]


const showBanner = computed(() => bannerPages.includes(route.name))
</script>
