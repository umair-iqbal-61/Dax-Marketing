<template>
  <div class="lg:hidden w-full pl-5 h-[59px] flex items-center justify-center bg-[#00007A] overflow-hidden">
    <div class="w-full h-fit flex gap-[29px]">
      <div class="flex gap-5 w-fit shrink-0">
        <p class="text-white font-bold text-[14px] shrink-0">Agency Of The Month</p>
        <div class="flex items-center gap-[8px]">
          <div class="w-[12px] h-[12px] bg-white"></div>
          <div class="w-[12px] h-[12px] rounded-full bg-white"></div>
        </div>
      </div>
      <div class="flex w-full gap-[29px] font-bold text-[14px] text-[#B1B1FF] shrink-0">
        <p class="shrink-0">Sponsor Agency</p>
        <p class="shrink-0">Sponsored Category Ads</p>
        <p class="shrink-0">Pop-up Ads</p>
        <p class="shrink-0">Sponsored Content</p>
        <p class="shrink-0">Top Banner Ads</p>
        <p class="shrink-0">Sidebar Banner Ads</p>
      </div>
    </div>
  </div>

  <!-- For larger Screens -->
  <div
    class="w-[493px] h-[526px] hidden lg:flex flex-col justify-between bg-[#00007A] border-[3px] border-[#0000FF] rounded-[12px] px-[48px] py-[28px]">
    <!-- Inside Container -->
    <div class="flex flex-col w-[381px] h-[494px] gap-[24px]">

      <!-- Loop Through Nav Items -->
      <div v-for="(nav, index) in navItems" :key="index" class="flex flex-col gap-6">
        <!-- Nav Row -->
        <div class="flex items-center gap-5 w-[360px] h-[26px] cursor-pointer transition-all duration-300"
          @click="selectedIndex = index">
          <h3 :class="[
            'font-bold text-[20px] tracking-[0.15px]',
            selectedIndex === index ? 'text-white' : 'text-[#B1B1FF]'
          ]">
            {{ nav }}
          </h3>

          <!-- Square + Circle only for selected item -->
          <div v-if="selectedIndex === index" class="flex items-center gap-[8px]">
            <div class="w-[12px] h-[12px] bg-white"></div>
            <div class="w-[12px] h-[12px] rounded-full bg-white"></div>
          </div>
        </div>

        <!-- Divider -->
        <div v-if="index !== navItems.length - 1" class="w-[360px] border-t-[2px] border-dashed border-[#FFFFFF]"
          style="border-spacing: 10px"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  'Agency Of The Month',
  'Sponsor Agency',
  'Sponsored Category Ads',
  'Pop-up Ads',
  'Sponsored Content',
  'Top Banner Ads',
  'Sidebar Banner Ads',
]

const selectedIndex = ref(0) // default: "Agency Of The Month"
</script>
