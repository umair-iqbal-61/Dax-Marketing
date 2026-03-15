<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-fit flex flex-col items-center md:items-start overflow-hidden gap-7 md:gap-[64px] mt-[43px] lg:mt-[68px] py-10 bg-[#F9FAFB]">
    <!-- Top Content -->
    <div class="flex flex-col items-center md:items-start w-full h-fit gap-3 md:gap-[16px]">
      <h2 class="font-[700] text-2xl md:text-[28px] lg:text-[32px] tracking-[0.25px] text-center text-[#333333]">
        Our Journey of Growth and Innovation
      </h2>
      <p class="font-normal text-[16px] tracking-[0.5px] text-center text-[#333333]">
        From a simple idea to a global platform — here’s how Edvido evolved year by year.
      </p>
    </div>

    <!-- Year Timeline -->
    <div class="flex items-center justify-center ml-auto h-fit">
      <div class="w-[101px] h-0 md:w-[184px] border border-[#D9D9D9]"></div>

      <!-- 2018 -->
      <div class="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[#D9D9D9] bg-white">
        <span class="font-poppins font-[400] text-[16px] text-[#333333]">2018</span>
      </div>

      <div class="w-[228px] h-0 md:w-[392px] border border-[#D9D9D9]"></div>

      <!-- 2019 -->
      <div class="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[#D9D9D9] bg-white">
        <span class="font-poppins font-[700] text-[16px] text-[#333333]">2019</span>
      </div>

      <div class="w-[391px] border border-[#D9D9D9]"></div>

      <!-- 2020 -->
      <div class="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[#D9D9D9] bg-white">
        <span class="font-poppins font-[400] text-[16px] text-[#333333]">2020</span>
      </div>

      <div class="w-[391px] border border-[#D9D9D9]"></div>
    </div>

    <!-- Cards Section -->
    <div class="flex justify-between mx-auto gap-[24px] w-full h-fit">
      <div v-for="(card, index) in cards" :key="index"
        class="max-w-[424px] max-h-[426px] w-fit h-fit shrink-0 bg-white border border-[#B3B3B3] rounded-[20px] overflow-hidden flex flex-col">
        <img :src="card.imgSrc" alt="Card Image" class="w-fit h-fit object-cover" />
        <div class="flex flex-col gap-[20px] p-[32px] w-fit">
          <h3 class="font-poppins font-[700] text-[20px] text-[#333333] tracking-[0.15px] leading-[100%]">
            {{ card.title }}
          </h3>
          <p class="font-poppins font-[400] text-[14px] text-[#333333] tracking-[0.25px] leading-[150%]">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    imgSrc: '/journey-section-card/idea.png',
    title: 'The Idea Spark',
    description:
      'Edvido was born from the need to simplify how businesses find the right agency partners.',
  },
  {
    imgSrc: '/journey-section-card/mvp.png',
    title: 'MVP Launch',
    description:
      'The first version of the platform goes live, enabling basic agency listings and client inquiries.',
  },
  {
    imgSrc: '/journey-section-card/first-matches.png',
    title: 'First Matches',
    description:
      'Dozens of successful matches between SMEs and agencies prove the model’s value.',
  },
  {
    imgSrc: '/journey-section-card/expansion.jpg',
    title: 'Expansion Begins',
    description:
      'Service coverage expands across Turkey; new categories like design, software, and marketing are added.',
  }
]
</script>
