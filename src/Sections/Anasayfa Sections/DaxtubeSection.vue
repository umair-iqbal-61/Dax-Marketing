<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] bg-[#01017A] rounded-[20px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] flex flex-col mt-[43px] lg:mt-[68px]
    py-10 gap-[32px] lg:h-[583px]">
    <!-- Header -->
    <div class="flex items-center justify-between gap-2 w-full md:px-3">
      <h2 class="text-[22px] md:text-[26px] lg:text-[32px] font-bold text-white">
        Daxtube
      </h2>
      <span class="text-[13px] md:text-[14px] font-medium text-white underline underline-offset-2">
        Tümünü Gör
      </span>
    </div>

    <!-- Cards -->
    <div class="w-full flex flex-col
        md:grid md:grid-cols-2 
        lg:flex lg:flex-row lg:justify-between gap-[36px] ">
      <DaxtubeCard v-for="(card, index) in daxtubeCards" :key="index" :title="card.title"
        :description="card.description" :date="card.date" :imgSrc="card.imgSrc" />
    </div>
  </section>
</template>

<script setup>
import DaxtubeCard from '../../components/Cards/DaxtubeCard.vue'

const daxtubeCards = [
  {
    title: "QNB Türkiye, Net Sıfır Olma Sözü Veriyor",
    description:
      "“Herkes QNB’ye geçiyor” diyerek iletişim çalışmalarına devam eden QNB Türkiye, sürdürülebilirliği odağına alan yeni reklam filmiyle izleyicinin karşısına çıkıyor.",
    date: "3 Eyl 25",
    imgSrc: "/daxtube-card/qnb.png",
  },
  {
    title: "TEB’den yeni reklam kampanyası: “TEB o kadar iyi ki”",
    description:
      "Türk Ekonomi Bankası (TEB) “iyi banka” anlayışıyla sunduğu ürün ve hizmetleri anlattığı yeni bir reklam kampanyası başlattı. “O kadar iyi ki…”",
    date: "27 Ağu 25",
    imgSrc: "/daxtube-card/teb.png",
  },
  {
    title:
      "Lay’s Türkiye’nin Yeni Lezzetleri “Rafta Kim Kalsın” Reklam Filminde Tanıtıldı",
    description:
      "Türkiye’nin dört bir yanında özenle yetiştirilen patateslerden üretilen Lay’s’in yeni reklam filmi yayına girdi.",
    date: "26 Ağu 25",
    imgSrc: "/daxtube-card/lay.png",
  },
];
</script>
