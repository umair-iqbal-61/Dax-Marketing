<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col lg:flex-row justify-between gap-7 mt-[43px] lg:mt-[68px]">
    <div class="w-full flex flex-col lg:flex-row  justify-between gap-[26px]">
      <!-- ========== LEFT SIDE ========== -->
      <div
        class="w-full h-fit lg:w-[872px] lg:h-[1022px] flex flex-col items-center justify-center gap-2.5 lg:gap-0 rounded-[20px] bg-white p-[24px] py-5 shrink-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)]">

        <div class="w-full h-fit justify-between flex flex-col gap-5">
          <!-- Top Tag -->
          <div class="flex items-center gap-[10px] w-[238px] h-[41px] bg-[#FFEBEB] rounded-full px-[22px]">
            <img src="/icons/Sun.svg">

            <span class="font-poppins font-medium text-[14px] tracking-[0px] text-center text-[#C21D1A]">
              Sizin İçin Seçtiklerimiz
            </span>
          </div>

          <!-- Dynamic Agency Cards -->
          <AgencyCardSizin v-for="(agency, index) in agencies" :key="index" :image="agency.image" :name="agency.name"
            :verified="agency.verified" :rating="agency.rating" :reviews="agency.reviews" :category="agency.category"
            :description="agency.description" :employees="agency.employees" :price="agency.price"
            :location="agency.location" />
        </div>
      </div>

      <!-- ========== RIGHT SIDE PLACEHOLDER ========== -->
      <div class="w-full h-fit flex flex-col md:flex-row lg:flex-col gap-[40px]">
        <div class="w-full h-fit">
          <AgencyCard title="Poligon Interactive" label="Ayın Teknoloji Ajansı" imgSrc="/agency-card/poligon.png" />
        </div>
        <div class="w-full h-fit">
          <AgencyCard title="Clockwork" label="Ayın Teknoloji Ajansı" imgSrc="/agency-card/clock-work.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyCardSizin from '../../components/Cards/AgencyCardSizin.vue'
import AgencyCard from '../../components/Cards/AgencyCard.vue'

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
]
</script>
