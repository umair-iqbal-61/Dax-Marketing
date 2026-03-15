<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] bg-[#333333] gap-8 rounded-[20px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] flex flex-col py-10 mt-[43px] lg:mt-[68px]">
    <!-- Header -->
    <div class="flex flex-col gap-2 pl-1
        md:gap-[6px] md:pl-[4px]
        lg:gap-[8px] lg:pl-[6px]">
      <!-- Title Row -->
      <div class="flex mdflex-row items-center gap-2 justify-between md:gap-0">
        <h2 class="text-[22px] md:text-[26px] lg:text-[32px] font-bold text-white">
          Eğitimler
        </h2>
        <span class="text-[13px] md:text-[14px] font-medium text-white underline underline-offset-2">
          Tümünü Gör
        </span>
      </div>

      <!-- Subtitle -->
      <p class="text-[13px] md:text-[14px] font-normal text-white tracking-[0.2px]
          lg:tracking-[0.25px]">
        Gerçek uzmanlar tarafından verilen eğitimlerle kariyerinde seviye atlama
        şansını yakala.
      </p>
    </div>

    <!-- Cards -->
    <div class="flex items-center justify-center w-full md:w-full flex-col gap-6
        md:grid md:grid-cols-2 md:gap-[24px]
        lg:flex lg:flex-row lg:justify-between lg:gap-[36px] lg:w-fit lg:h-fit">
      <DaxtubeCard v-for="(card, index) in daxtubeCards" :key="index" :title="card.title"
        :description="card.description" :date="card.date" :imgSrc="card.imgSrc" />
    </div>
  </section>
</template>

<script setup>
import DaxtubeCard from '../../components/Cards/DaxtubeCard.vue'

const daxtubeCards = [
  {
    title: "“Göç Alanında Temel Yapay Zekâ Kullanımı” eğitimi İstanbul’da gerçekleştirildi",
    description: "Eğitim tarihi: 9–11 Temmuz 2025",
    date: "3 Eyl 25",
    imgSrc: "/daxtube-card/goc.png",
  },
  {
    title: "Geleceğin Kadın Liderleri Programı’nın 15’inci Dönem Başvuruları Başladı",
    description: "Etkinlik tarihi: 6–7 Kasım 2025",
    date: "27 Ağu 25",
    imgSrc: "/daxtube-card/gelecegin.png",
  },
  {
    title: "Binance TR Teknolojide Kadın Akademisi’nde Yeni Eğitim Dönemi Başlıyor",
    description: "Etkinlik tarihi: 30 Nisan 2025",
    date: "26 Ağu 25",
    imgSrc: "/daxtube-card/binance.png",
  },
];
</script>
