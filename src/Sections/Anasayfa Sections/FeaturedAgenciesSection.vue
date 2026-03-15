<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] overflow-hidden">

    <div
      class="flex flex-col gap-6 p-10 rounded-[20px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] border border-[#E5E5E5]">
      <!-- Top Heading Row -->
      <div class="flex items-center justify-between pl-[6px]">
        <h2 class="text-[22px] md:text-[26px] lg:text-[32px] font-bold text-[#333333] tracking-[0.25px]">
          {{ title }}
        </h2>
        <span class="text-[13px] md:text-[14px] font-medium text-[#333333] underline underline-offset-[1.5px]">
          Tümünü Gör
        </span>
      </div>

      <!-- Cards Container -->
      <div class="flex lg:flex-col gap-6 md:gap-[28px] lg:gap-[32px]">
        <!-- Row 1 -->
        <div class="flex gap-[24px] lg:flex lg:justify-between lg:gap-0">
          <AgencyFeatureCard v-for="(agency, index) in agenciesRow1" :key="'row1-' + index" :name="agency.name"
            :imgSrc="agency.imgSrc" :verified="agency.verified" :category="agency.category"
            :description="agency.description"
            :class="index === 0 ? 'border border-[#668CFF] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)]' : ''" />
        </div>

        <!--Row 2 (Dynamic Visibility) -->
        <div v-if="showRow2" class="w-full flex gap-[24px] justify-between lg:gap-0">
          <AgencyFeatureCard v-for="(agency, index) in agenciesRow2" :key="'row2-' + index" :name="agency.name"
            :imgSrc="agency.imgSrc" :verified="agency.verified" :category="agency.category"
            :description="agency.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyFeatureCard from '../../components/Cards/AgencyFeatureCard.vue'

defineProps({
  title: {
    type: String,
    default: 'Öne Çıkan Ajanslar',
  },

  showRow2: {
    type: Boolean,
    default: true, // 
  },
})

/* First Row Data */
const agenciesRow1 = [
  {
    name: 'Ignite Visibility',
    imgSrc: '/agency-feature-card/ignite.png',
    verified: true,
    category: 'Dijital Pazarlama',
    description:
      'Ignite Visibility is one of the highest recommended agencies on Edvido and one of the top digital marketing companies in the industry.',
  },
  {
    name: 'Power Digital',
    imgSrc: '/agency-feature-card/power.png',
    verified: true,
    category: 'Video & Prodüksiyon',
    description:
      'Power Digital is a tech-enabled growth firm—at the intersection of marketing, consulting & data intelligence—igniting revenue and brand recognition.',
  },
  {
    name: 'WebFX',
    imgSrc: '/agency-feature-card/webfx.png',
    verified: true,
    category: 'Digital Marketing',
    description:
      'WebFX is a comprehensive digital marketing agency offering services such as SEO, PPC management, and website development.',
  },
]

/* Second Row Data */
const agenciesRow2 = [
  {
    name: 'Ignite Visibility',
    imgSrc: '/agency-feature-card/ignite.png',
    verified: true,
    category: 'Dijital Pazarlama',
    description:
      'Ignite Visibility is one of the highest recommended agencies on Edvido and one of the top digital marketing companies in the industry.',
  },
  {
    name: 'Power Digital',
    imgSrc: '/agency-feature-card/power.png',
    verified: true,
    category: 'Video & Prodüksiyon',
    description:
      'Power Digital is a tech-enabled growth firm—at the intersection of marketing, consulting & data intelligence—igniting revenue and brand recognition.',
  },
  {
    name: 'WebFX',
    imgSrc: '/agency-feature-card/webfx.png',
    verified: true,
    category: 'Digital Marketing',
    description:
      'WebFX is a comprehensive digital marketing agency offering services such as SEO, PPC management, and website development.',
  },
]
</script>
