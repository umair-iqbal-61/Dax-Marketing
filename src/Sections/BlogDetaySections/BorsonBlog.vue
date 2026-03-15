<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px]max-w-[1320px] flex flex-col items-start gap-[32px] mx-auto mt-[68px]">
    <h2 class="font-bold text-[32px] tracking-[0.25px]">
      DAX Güncel
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[28px]">
      <BorsonCard v-for="(card, index) in borsonCards.slice(1, 4)" :key="index" :title="card.title"
        :description="card.description" :date="card.date" :readTime="card.readTime" :imgSrc="card.imgSrc"
        :titleColor="card.titleColor" :descriptionColor="card.descriptionColor" :dateColor="card.dateColor"
        :readTimeColor="card.readTimeColor" />
    </div>
  </section>
</template>

<script setup>
import BorsonCard from '../../components/Cards/BorsonCard.vue';

const borsonCards = [
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
