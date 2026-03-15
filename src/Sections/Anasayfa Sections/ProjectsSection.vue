<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col items-center justify-center mt-[43px] bg-[#333333] py-10 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] gap-8 lg:mt-[68px]">
    <!-- Top Row -->
    <div class="w-full md:px-6 items-center justify-between flex gap-3">
      <h2 class="text-xl lg:text-[32px] font-bold text-white tracking-normal md:tracking-[0.25px] shrink-0">
        Projeler ve Ajansları
      </h2>
      <span class="text-[13px] md:text-[14px] font-medium text-white underline underline-offset-0">
        Tümünü Gör
      </span>
    </div>

    <!-- Main Content -->
    <div class=" mx-auto flex flex-col gap-6
        md:gap-8 lg:gap-[28px] ">
      <!-- Upper Featured Card -->
      <div v-if="showFeatured"
        class="w-full h-[670px] md:h-[409px] bg-[url('/borsan-web-main.png')] bg-cover bg-center rounded-[16px] overflow-hidden px-4 py-6 md:px-10 flex flex-col justify-between md:flex-row md:items-end relative">
        <!-- Logo Top Right -->
        <div class="w-[120px] h-[20px] rounded-[4px] right-5 md:absolute md:top-11">
          <img src="/logos/clock-work-logo.png" alt="">
        </div>

        <!-- Text Content -->
        <div class="flex flex-col gap-[6px] text-white">
          <h3 class="text-[24px] lg:text-[32px] font-bold text-white leading-snug tracking-[0.25px]">
            Borsan Web Sitesinde Clockwork İmzası!
          </h3>

          <p class="text-[14px] md:text-[18px] lg:text-[20px] font-normal leading-snug tracking-[0.15px]">
            Türkiye’nin köklü kablo üreticilerinden olan Borsan, dijital
            dünyadaki varlığını güçlendirmek adına web
            <br class="hidden lg:block" />
            sitesini Clockwork’ün deneyimi ile baştan sona yeniledi.
          </p>

          <span class="text-[16px] font-normal tracking-[0.15px]">
            2 Tem 25
          </span>
        </div>
      </div>

      <!-- Lower Section -->
      <div class="grid grid-cols-1 gap-6
          md:grid-cols-2 md:gap-[24px]
          lg:flex lg:justify-between lg:items-start">
        <DaxtubeCard v-for="(card, index) in cards" :key="index" :imgSrc="card.imgSrc" :overlayImg="card.overlayImg"
          :title="card.title" :description="card.description" :date="card.date" />
      </div>
    </div>
  </section>
</template>

<script setup>
import DaxtubeCard from '../../components/Cards/DaxtubeCard.vue'

const props = defineProps({
  showFeatured: {
    type: Boolean,
    default: true,
  },
})

const cards = [
  {
    imgSrc: '/daxtube-card/pomega.png',
    overlayImg: '/daxtube-card/diverseffect-logo.png',
    title:
      'Pomega’nın Dijital Gücü, Diverseffect İmzalı Web Sitesiyle Yeniden Tanımlandı!',
    description:
      'Türkiye’nin ilk özel sektör Lityum-İyon pil hücresi üreticisi olan Pomega, kullanıcı odaklı bir deneyim sunmak amacıyla kurumsal web sitesini baştan sona yeniledi.',
    date: '3 Eyl 25',
  },
  {
    imgSrc: '/daxtube-card/diverseffect.png',
    overlayImg: '/daxtube-card/diverseffect-logo.png',
    title:
      'Diverseffect’in Özgün Tasarımları ile Ekojet Web Sitesi Şimdi Yayında!',
    description:
      'İnovatif girişimcilik vizyonuyla hayata geçirilen elektrikli şarj istasyonu markası Ekojet’in web sitesi Diverseffect uzmanlığıyla hazırlandı.',
    date: '3 Eyl 25',
  },
  {
    imgSrc: '/daxtube-card/galata.png',
    overlayImg: '/daxtube-card/diverseffect-logo.png',
    title:
      'Galata Üniversitesi Web Sitesini Diverseffect ile Yeniledi!',
    description:
      'Öğrencilerini yetkinlik sahibi bireyler olarak yetiştirmeyi misyon edinen Galata Üniversitesi’nin yeni web sitesi Diverseffect tarafından yenilendi.',
    date: '3 Eyl 25',
  },
]
</script>
