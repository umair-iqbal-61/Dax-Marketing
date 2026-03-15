<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] overflow-hidden">
    <div class="w-[1524px] h-fit flex flex-col gap-10">
      <div class="max-w-[1320px] w-full h-fit flex justify-between">
        <h4 class="font-bold text-[32px] text-[#333333]">
          Benzer Dijital Reklam Ajanslarını Keşfet
        </h4>
        <div class="flex items-center justify-end gap-[6px] w-fit h-fit">
          <!-- Left Arrow (inactive) -->
          <div class="w-[28px] h-[28px] flex items-center justify-center rounded-full p-[4px] cursor-not-allowed">
            <img src="/icons/Chevron-right-gray.svg" alt="" class="rotate-180 w-fit h-fit">
          </div>

          <!-- Right Arrow (active) -->
          <div
            class="w-[40px] h-[40px] flex items-center justify-center rounded-full p-[8px] bg-[#FFFFFF] border border-[#D9D9D9] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer">
            <img src="/icons/Chevron-right-gray.svg" alt="" class="w-fit h-fit">
          </div>
        </div>
      </div>

      <div class="w-full h-fit flex gap-7">
        <!-- Dynamic Agency Cards -->
        <AgencyCardAjans v-for="(agency, index) in agencies" :key="index" :image="agency.image" :name="agency.name"
          :verified="agency.verified" :rating="agency.rating" :reviews="agency.reviews" :category="agency.category"
          :description="agency.description" :employees="agency.employees" :price="agency.price"
          :location="agency.location" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyCardAjans from './AgencyCardAjans.vue';

const agencies = [
  {
    image: '/agency-feature-card/medyae.png',
    name: '360 Medyae',
    verified: true,
    rating: '4.8',
    reviews: '145',
    category: 'Dijital Pazarlama',
    description:
      'Ignite Visibility is one of the highest recommended agencies one of the top digital marketing companies in the industry.',
    employees: '11-50',
    price: "10.000₺",
    location: 'İstanbul',
  },
  {
    image: '/agency-feature-card/stradigi.png',
    name: '360 Stradigi',
    verified: true,
    rating: '4.8',
    reviews: '132',
    category: 'Dijital Pazarlama',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sagittis tortor blandit pharetra praesent consequat risus vitae lectus arcu dignissim.',
    employees: '11-50',
    price: "10.000₺",
    location: 'İstanbul',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
  {
    image: '/agency-feature-card/adventure.png',
    name: 'Ad Venture Digital',
    verified: false,
    rating: '4.7',
    reviews: '120',
    category: 'Dijital Pazarlama',
    description:
      'Recognized for innovative strategies and client satisfaction, 360 Agency specializes in tailored digital marketing solutions.',
    employees: '51-200',
    price: "15.000₺",
    location: 'Ankara',
  },
]
</script>