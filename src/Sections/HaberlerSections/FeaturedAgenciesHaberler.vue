<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-[666px] mt-[68px] rounded-[20px] flex flex-col gap-[32px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] border border-[#E5E5E5] shrink">
    <!-- Top Heading Row -->
    <div class="w-full h-[48px] flex items-center justify-between pl-[6px]">
      <h2 class="text-[32px] font-bold text-[#333333] tracking-[0.25px]">
        Öne Çıkan Yazılım Ajansları
      </h2>
      <span class="text-[14px] font-medium text-[#333333] underline underline-offset-[1.5px]">
        Tümünü Gör
      </span>
    </div>

    <!-- Cards Container -->
    <div class="w-full flex flex-col gap-[32px]">
      <!-- Row 1 -->
      <div class="flex justify-between">
        <AgencyFeatureCard v-for="(agency, index) in agenciesRow1" :key="index" :name="agency.name"
          :imgSrc="agency.imgSrc" :verified="agency.verified" :category="agency.category"
          :description="agency.description"
          :class="index === 0 ? 'border border-[#668CFF] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)]' : ''" />
      </div>

      <!-- Row 2 -->
      <div class="flex justify-between">
        <AgencyFeatureCard v-for="(agency, index) in agenciesRow2" :key="index" :name="agency.name"
          :imgSrc="agency.imgSrc" :verified="agency.verified" :category="agency.category"
          :description="agency.description" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyFeatureCard from '../../components/Cards/AgencyFeatureCard.vue'

const agenciesRow1 = [
  {
    name: 'Ignite Visibility',
    imgSrc: '',
    verified: true,
    category: 'Dijital Pazarlama',
    description:
      'Ignite Visibility is one of the highest recommended agencies on Edvido and one of the top digital marketing companies in the industry.',
  },
  {
    name: 'Power Digital',
    imgSrc: '',
    verified: true,
    category: 'Video & Prodüksiyon',
    description:
      'Power Digital is a tech-enabled growth firm—at the intersection of marketing, consulting & data intelligence—igniting revenue and brand recognition.',
  },
  {
    name: 'WebFX',
    imgSrc: '',
    verified: true,
    category: 'Digital Marketing',
    description:
      'WebFX is a comprehensive digital marketing agency offering services such as SEO, PPC management, and website development.',
  },
]

const agenciesRow2 = [
  {
    name: 'Ignite Visibility',
    imgSrc: '',
    verified: true,
    category: 'Dijital Pazarlama',
    description:
      'Ignite Visibility is one of the highest recommended agencies on Edvido and one of the top digital marketing companies in the industry.',
  },
  {
    name: 'Power Digital',
    imgSrc: '',
    verified: true,
    category: 'Video & Prodüksiyon',
    description:
      'Power Digital is a tech-enabled growth firm—at the intersection of marketing, consulting & data intelligence—igniting revenue and brand recognition.',
  },
  {
    name: 'WebFX',
    imgSrc: '',
    verified: true,
    category: 'Digital Marketing',
    description:
      'WebFX is a comprehensive digital marketing agency offering services such as SEO, PPC management, and website development.',
  },
]
</script>
