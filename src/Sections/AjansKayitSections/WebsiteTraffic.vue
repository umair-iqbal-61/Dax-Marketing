<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col lg:flex-row justify-between gap-[40px]">

    <!-- Left Image -->
    <div class="w-full h-fit lg:w-[423px] rounded-[20px] overflow-hidden shrink-0">
      <img class="w-full h-full object-contain" src="/website-traffic/main.png" />
    </div>

    <!-- For Smaller Screens -->
    <div class="w-full h-fit flex md:hidden gap-2.5">
      <div class="w-[298px] mx-auto h-fit flex flex-col">
        <div v-for="(item, index) in smallStats" :key="index" class="w-fit flex gap-2">
          <img :src="item.icon" class="w-[116px] h-[116px]" alt="" />
          <div class="flex flex-col justify-center">
            <h2 class="font-bold text-6xl text-[#333333] tracking-[-0.5px]">{{ item.value }}</h2>
            <p class="text-xl text-[#333333]">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- For Larger Screens -->
    <div class="hidden md:flex lg:flex-row justify-between w-full">
      <!-- Left Column -->
      <div class="flex flex-col gap-[68px] w-fit">
        <div v-for="(item, index) in leftStats" :key="index" class="flex gap-2">
          <img :src="item.icon" class="w-[139px] h-[141px]" alt="" />
          <div class="flex flex-col justify-center">
            <h2 class="font-bold text-6xl text-[#333333] tracking-[-0.5px]">{{ item.value }}</h2>
            <p class="text-xl text-[#333333]">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-[68px] pr-18 w-fit">
        <div v-for="(item, index) in rightStats" :key="index" class="flex gap-2">
          <img :src="item.icon" class="w-[139px] h-[141px]" alt="" />
          <div class="flex flex-col justify-center">
            <h2 class="font-bold text-6xl text-[#333333] tracking-[-0.5px]">{{ item.value }}</h2>
            <p class="text-xl text-[#333333]">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const smallStats = [
  { icon: '/website-traffic/website.png', value: '60K+', label: 'Website trafiği' },
  { icon: '/website-traffic/organik.png', value: '%85', label: 'Organik sonuçlar' },
  { icon: '/website-traffic/takipci.png', value: '100K+', label: 'Takipçi kitlesi' },
  { icon: '/website-traffic/dijital.png', value: '120+', label: 'Dijital üye' },
]

const leftStats = [
  { icon: '/website-traffic/website.png', value: '60K+', label: 'Website trafiği' },
  { icon: '/website-traffic/organik.png', value: '%85', label: 'Organik sonuçlar' },
]

const rightStats = [
  { icon: '/website-traffic/takipci.png', value: '100K+', label: 'Takipçi kitlesi' },
  { icon: '/website-traffic/dijital.png', value: '120+', label: 'Dijital üye' },
]
</script>
