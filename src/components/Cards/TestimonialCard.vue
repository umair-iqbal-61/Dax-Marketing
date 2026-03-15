<template>
  <div
    class="w-full h-fit md:h-full md:w-[369px] flex flex-col gap-7 rounded-[12px] bg-[#FFFFFF] p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)]">

    <!-- ===== TOP SECTION (Avatar + Info) ===== -->
    <div class="flex items-center gap-5 w-full h-fit">
      <!-- Avatar -->
      <img :src="imgSrc" class="w-12 h-12 rounded-full object-cover" />

      <!-- Name & Role -->
      <div class="flex flex-col gap-2 w-full h-fit">
        <h3 class="font-poppins font-normal text-[16px] tracking-[0.15px] text-[#333333]">{{ name }}</h3>
        <p class="font-poppins font-normal text-[12px] tracking-[0.25px] text-[#999999]">{{ role }}</p>
      </div>
    </div>

    <!-- ===== BOTTOM SECTION ===== -->
    <div class="flex flex-col gap-3 w-full h-fit">
      <!-- Stars + Tag -->
      <div class="flex items-center gap-3 w-full h-fit">
        <!-- Stars -->
        <div class="flex items-center gap-[4px]">
          <img v-for="n in 5" :key="n" src="/icons/Star.svg" class="w-3 h-3">
        </div>

        <!-- Tag -->
        <div class="flex items-center gap-2.5 px-1 py-0.5 bg-[#F2F2F2] rounded-[4px]">
          <span class="font-normal text-xs tracking-[0.25px] text-[#636363]">{{ tag }}</span>
        </div>
      </div>

      <!-- Description -->
      <div class="w-full h-fit">
        <p class="font-normal text-[14px] tracking-[0.25px] text-[#636363]">
          {{ testimonial }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: '/assets/liam.png',
  },
  name: {
    type: String,
    default: 'Liam Carter',
  },
  role: {
    type: String,
    default: 'Founder at Nexa Solutions',
  },
  tag: {
    type: String,
    default: 'Digital Marketing',
  },
  testimonial: {
    type: String,
    default:
      'Before using Edivido, finding high-quality leads was a struggle. Now, clients come to us effortlessly, allowing us to focus on what we do best—delivering great results!',
  },
  rating: {
    type: Number,
    default: 5,
  },
})
</script>
