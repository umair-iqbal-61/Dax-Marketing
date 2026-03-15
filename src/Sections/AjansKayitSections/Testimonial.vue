<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col gap-10">
    <div class="w-full flex items-center gap-20">
      <div class="w-full">
        <h2 class="font-bold text-[32px] text-[#333333] tracking-[0.25px]">Ajanslar Ne Diyor?</h2>
      </div>
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

    <div class="w-full h-fit flex flex-col md:flex-row overflow-hidden gap-6">
      <TestimonialCard class="shrink-0" v-for="(card, index) in testimonials" :key="index" v-bind="card" />
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from '../../components/Cards/TestimonialCard.vue';

const testimonials = [
  {
    imgSrc: '/testimonial-card/liam.png',
    name: 'Liam Carter',
    role: 'Founder at Nexa Solutions',
    tag: 'Digital Marketing',
    testimonial:
      'Before using Edivido, finding high-quality leads was a struggle. Now, clients come to us effortlessly, allowing us to focus on what we do best—delivering great results!',
    rating: 5,
  },
  {
    imgSrc: '/testimonial-card/olivia.png',
    name: 'Olivia Bennett',
    role: 'Development Manager at Vertex Digital',
    tag: 'Content Marketing',
    testimonial:
      'With Edivido, we’ve accelerated our client acquisition process like never before. The platform makes everything so much easier and more efficient!',
    rating: 5,
  },
  {
    imgSrc: '/testimonial-card/liam.png',
    name: 'Liam Carter',
    role: 'Founder at Nexa Solutions',
    tag: 'Digital Marketing',
    testimonial:
      'Before using Edivido, finding high-quality leads was a struggle. Now, clients come to us effortlessly, allowing us to focus on what we do best—delivering great results!',
    rating: 5,
  },
  {
    imgSrc: '/testimonial-card/daniel.png',
    name: 'Daniel Foster',
    role: 'Managing Director at Horizon Branding',
    tag: 'SEO',
    testimonial:
      'Speed, efficiency and high-quality opportunities—Edvido has given us the competitive edge we needed to expand faster and smarter. Also works perfectly!',
    rating: 5,
  }
]


</script>