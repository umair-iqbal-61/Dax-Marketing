<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col items-center mt-[43px] lg:mt-[68px]">
    <div class="flex flex-col gap-[28px]">

      <div class="flex flex-col lg:flex-row gap-[28px]">
        <!-- FEATURED CARD -->
        <div class="w-full h-[409px] rounded-[20px] relative overflow-hidden bg-[#7a4141]">
          <!-- Logo Top Right -->
          <div class="absolute top-[44px] right-[57px] w-[170px] h-[25px] bg-[#F9F9FF] rounded-[4px]"></div>

          <!-- Text Content -->
          <div class="absolute bottom-[20px] left-[44px] flex flex-col gap-[8px] text-white">
            <div
              class="flex items-center gap-[8px] bg-[#F9F9FF] rounded-full w-fit px-[24px] py-[6px] text-[#2563EB] text-[14px] font-semibold">
              <img src="" alt="icon" class="w-[16px] h-[16px]" />
              <span class="text-[#0101FD] text-[16px] font-bold">Ayın Projesi</span>
            </div>

            <div class="flex flex-col gap-[8px] mt-6">
              <h3 class="text-[32px] font-bold leading-snug tracking-[0.25px]">
                Borsan Web Sitesinde Clockwork İmzası!
              </h3>

              <p class="text-[20px] font-normal leading-snug tracking-[0.15px]">
                Türkiye’nin köklü kablo üreticilerinden olan Borsan, dijital dünyadaki
                varlığını güçlendirmek adına web <br> sitesini Clockwork’ün deneyimi ile
                baştan sona yeniledi.
              </p>

              <span class="text-[16px] font-normal tracking-[0.15px] mt-[8px]">
                2 Tem 25
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- FIRST ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[28px]">
        <DaxtubeCard v-for="(card, index) in cards.slice(1)" :key="index" :imgSrc="card.imgSrc"
          :overlayImg="card.overlayImg" :title="card.title" :description="card.description" :date="card.date"
          :readTime="card.readTime" />
      </div>

      <!-- SECOND ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[28px]">
        <DaxtubeCard v-for="(card, index) in cards.slice(1)" :key="index" :imgSrc="card.imgSrc"
          :overlayImg="card.overlayImg" :title="card.title" :description="card.description" :date="card.date"
          :readTime="card.readTime" />
      </div>

      <!-- THIRD ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        <DaxtubeCard v-for="(card, index) in cards.slice(1)" :key="index" :imgSrc="card.imgSrc"
          :overlayImg="card.overlayImg" :title="card.title" :description="card.description" :date="card.date"
          :readTime="card.readTime" />
      </div>

    </div>
  </section>
</template>

<script setup>
import DaxtubeCard from '../../components/Cards/DaxtubeCard2.vue';

const cards = [
  {
    title: 'Togg, Yapay Zekâ Platformu Can.ai’yiIAA Mobility 2025’te Tanıttı',
    description:
      'Türkiye’nin mobilite alanında hizmet veren küresel teknoloji markası Togg, Microsoft Türkiye iş birliğiyle geliştirdiği yapay zekâ platformu Can.ai’yi Münih’teki IAA Mobility 2025’te paylaştı',
    date: '10 Eyl 25',
    readTime: '7 min read',
    imgSrc: '',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'Pomega’nın Dijital Gücü, Dıverseffect İmzalı Web Sitesiyle Yeniden Tanımlandı!',
    description: 'Türkiye’nin ilk özel sektör Lityum-İyon pil hücresi üreticisi olan Pomega, kullanıcı odaklı bir deneyim sunmak amacıyla kurumsal web sitesini baştan sona yeniledi. ',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'DiversEffect’in Özgün Tasarımları ile Ekojet Web Sitesi Şimdi Yayında!',
    description: 'İnovatif girişimcilik vizyonuyla hayata geçirilen elektrikli şarj istasyonu markası Ekojet’in Diverseffect uzmanlığıyla hazırlanan web sitesi şimdi yayında!',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'Galata Üniversitesi Web Sitesini DiversEffect ile Yeniledi!',
    description:
      'Öğrencilerini yetkinlik sahibi bireyler olarak yetiştirmeyi misyon edinen Galata Üniversitesi web sitesi Diverseffect tarafından yenilendi.',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
];
</script>
