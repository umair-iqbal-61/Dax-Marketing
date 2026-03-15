<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px]">
    <!-- Top Text Row -->
    <div class="flex items-center justify-between gap-2 mb-6 w-full">
      <h2 class="text-[24px] font-bold text-[#333333] md:text-[28px] lg:text-[32px]">
        DAX Güncel
      </h2>
      <span class="text-[13px] font-medium text-[#333333] underline underline-offset-2
        md:text-[13px] lg:text-[14px]">
        Tümünü Gör
      </span>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col gap-4 md:flex-col md:gap-6 lg:flex-row lg:gap-6">
      <!-- LEFT SIDE -->
      <div class="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-6 py-10
        md:px-4 md:py-4 md:w-full
        lg:w-fit">
        <div class="w-full md:mt-5 flex flex-col
          md:w-full md:h-auto gap-7
          lg:w-fit lg:h-fit lg:mx-auto">
          <!-- Heading -->
          <h3 class="text-[18px] font-bold text-[#333333] mb-3 md:text-[22px] lg:text-[24px]">
            Güncel Haberler
          </h3>

          <!-- News Items -->
          <NewsCard v-for="(card, index) in newsCards" :key="index" :title="card.title" :description="card.description"
            :readTime="card.readTime" :date="card.date" :imgSrc="card.imgSrc" />
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex flex-col gap-4 mt-4
        md:mt-6 md:flex-row md:justify-between md:gap-4
        lg:mt-0 lg:flex-col lg:gap-6 lg:w-fit shrink-0">
        <!-- Top Card -->
        <AgencyCard badgeText="Aynı Ajansı" title="Poligon Interactive" imgSrc="/agency-card/poligon.png"
          class="w-full h-full md:w-fit lg:w-full" />

        <!-- Bottom Card -->
        <AgencyCard badgeText="Aynı Ajansı" title="Clock work" imgSrc="/agency-card/clock-work.png"
          class="w-full h-full md:w-fit lg:w-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyCard from '../../components/Cards/AgencyCard.vue'
import NewsCard from '../../components/Cards/NewsCard.vue'

const newsCards = [
  {
    title: "Türk Girişimci Cihan Nam, Yapay Zeka Destekli Fitness Stüdyosu Kurdu",
    description:
      "Yapay zeka, kişiselleştirilmiş antrenman planları, anlık geribildirimler ve gelişmiş sağlık takibi gibi avantajlarla spor severlerin yeni gözdesi haline geliyor.",
    readTime: "7 min read",
    date: "29 Ağu 25",
    imgSrc: "/news-card/turk.png",
  },
  {
    title: "HEY Kolektif’e Yeni Marka",
    description:
      "Kahve sektörünün yenilikçi markası Coffee Revue, markalaşma ve dijital iletişim süreçlerinde HEY Kolektif ile iş birliğine başladı.",
    readTime: "7 min read",
    date: "29 Ağu 25",
    imgSrc: "/news-card/hey.png",
  },
  {
    title: "Netaş’ta Üst Düzey Atamalar",
    description:
      "Netaş, yönetim kadrosuna üç yeni isim ekledi. Kurumsal yönetim yapısını güçlendirmeye devam ediyor.",
    readTime: "7 min read",
    date: "29 Ağu 25",
    imgSrc: "/news-card/netas.png",
  },
  {
    title:
      "NEOHUB ve Teknopark İstanbul’dan Girişimcilik Ekosistemine Güçlü Destek",
    description:
      "DenizBank’ın yeni nesil iştiraki NEOHUB ile Türkiye’nin lider teknoloji geliştirme bölgelerinden Teknopark İstanbul, girişimlerin mentörlü....",
    readTime: "7 min read",
    date: "29 Ağu 25",
    imgSrc: "/news-card/neohub.png",
  },
  {
    title:
      "PwC Küresel Eğlence ve Medya Sektörüne Bakış 2025–2029 Raporu Yayımlandı",
    description:
      "PwC'nin yeni raporu medya sektöründe büyüme trendlerini analiz ediyor.",
    readTime: "7 min read",
    date: "29 Ağu 25",
    imgSrc: "/news-card/pwc.png",
  },
]
</script>
