<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col gap-[22px] mt-[43px] lg:flex-row lg:justify-between lg:gap-[30px] lg:mt-[68px]">
    <!-- LEFT SECTION (Etkinlikler) -->
    <div
      class="w-full h-fit flex justify-center items-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-6 py-10 gap-2.5">
      <div class="w-full mx-auto flex flex-col gap-7">
        <!-- Heading -->
        <div class="flex items-center justify-between">
          <h2 class="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#333333]">
            Etkinlikler
          </h2>
          <span class="text-[13px] md:text-[14px] font-medium text-[#333333] underline underline-offset-1">
            Tümünü Gör
          </span>
        </div>

        <!-- Cards List -->
        <NewsCard v-for="(card, index) in newsCards" :key="index" :variant="card.variant" :title="card.title"
          :description="card.description" :readTime="card.readTime" :date="card.date" :imgSrc="card.imgSrc" />
      </div>
    </div>

    <!-- RIGHT SECTION (DAX Kariyer) -->
    <div
      class="w-full flex bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 relative overflow-hidden lg:w-fit lg:h-[840px] lg:py-0 lg:px-6">
      <div class="w-full lg:h-[792px] mx-auto flex flex-col gap-8 lg:gap-[28px]">
        <!-- Heading -->
        <div>
          <div class="flex items-center justify-between lg:mt-8">
            <h2 class="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#333333]">
              DAX Kariyer
            </h2>
            <span class="text-[13px] md:text-[14px] font-medium text-[#333333] underline underline-offset-1">
              Tümünü Gör
            </span>
          </div>
          <p class="text-[13px] md:text-[14px] font-medium mt-1 md:mt-2 text-[#333333]">
            DAX Ajanslarının iş ilanları
          </p>
        </div>

        <!-- Career Cards -->
        <CareerCard v-for="(job, index) in careerCards" :key="index" :title="job.title" :company="job.company"
          :imgSrc="job.imgSrc" />

        <!-- Blurred Half Card -->
        <div class="hidden w-full h-[99px] lg:flex gap-[12px] items-center bg-white blur-xs rounded-[12px] z-10 overflow-hidden
            md:gap-[14px]
            lg:w-fit lg:gap-[16px]">
          <div class="shrink-0 w-[136px] h-[90px] bg-gray-200 rounded-[12px]
              md:w-[164px] md:h-[94px]
              lg:h-[99px]">
            <img src="/job-image/job-4.png" alt="">
          </div>
          <div class="flex flex-col gap-[3px] w-full h-[88px] justify-center">
            <p class="text-[13px] md:text-[14px] font-bold text-[#333333]">
              Bluechip Events Yeni Takım Arkadaşları Arıyor!
            </p>
            <p class="text-[13px] md:text-[14px] font-medium text-[#333333]">
              Bluechip Events
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsCard from '../../components/Cards/NewsCard.vue'
import CareerCard from '../../components/Cards/CareerCard.vue'

const newsCards = [
  {
    variant: "event",
    title: "Yapay Zekâ ve Siber Güvenlik Fuarı Kasım’da İstanbul’da Düzenlenecek",
    description: "Etkinlik tarihi: 6–8 Kasım 2025",
    readTime: "8 Eyl 25",
    date: "",
    imgSrc: "/event-image/event-1.png",
  },
  {
    variant: "event",
    title:
      "Türkiye'nin En Büyüklerinin Açıklanacağı Bilişim 500 Ödül Töreni İçin Geri Sayım Başladı.",
    description: "Etkinlik tarihi: 7 Ağustos 2025",
    readTime: "8 Eyl 25",
    date: "",
    imgSrc: "/event-image/event-2.png",
  },
  {
    variant: "event",
    title:
      "“Göç Alanında Temel Yapay Zekâ Kullanımı” eğitimi İstanbul’da gerçekleştirildi",
    description: "Etkinlik tarihi: 9–11 Temmuz 2025",
    readTime: "8 Eyl 25",
    date: "",
    imgSrc: "/event-image/event-3.png",
  },
  {
    variant: "event",
    title:
      "Geleceğin Kadın Liderleri Programı’nın 15’inci Dönem Başvuruları Başladı",
    description: "Etkinlik tarihi: 7–6 Kasım 2025",
    readTime: "8 Eyl 25",
    date: "",
    imgSrc: "/event-image/event-4.png",
  },
];

const careerCards = [
  {
    title: 'Ogre Interactive, Ambalaj Tasarımcısı – Operatör Arıyor!',
    company: 'Ogre Interactive',
    imgSrc: '/job-image/job-1.png',
  },
  {
    title: 'Ogre Interactive Art Director Arıyor!',
    company: 'Ogre Interactive',
    imgSrc: '/job-image/job-2.png',
  },
  {
    title: 'Istcode Social Media Specialist Arıyor!',
    company: 'Istcode',
    imgSrc: '/job-image/job-3.png',
  },
  {
    title: 'Bluechip Events Yeni Takım Arkadaşları Arıyor!',
    company: 'Bluechip Events',
    imgSrc: '/job-image/job-4.png',
  },
  {
    title: 'BBCo Studio Digital Marketing Manager Arıyor!',
    company: 'BBCo Studio',
    imgSrc: '/job-image/job-5.png',
  },
]
</script>
