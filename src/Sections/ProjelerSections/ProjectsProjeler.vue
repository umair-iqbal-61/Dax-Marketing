<template>
  <!-- First Row -->
  <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[68px]">
    <BorsonCard v-for="(card, index) in borsonCards" :key="index" :title="card.title" :description="card.description"
      :date="card.date" :readTime="card.readTime" :imgSrc="card.imgSrc" :titleColor="card.titleColor"
      :descriptionColor="card.descriptionColor" :dateColor="card.dateColor" :readTimeColor="card.readTimeColor"
      class="lg:first:col-start-1 lg:first:col-span-1 lg:last:col-span-1 lg:justify-self-start" />
  </div>

  <!-- Second Row -->
  <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[68px]">
    <BorsonCard v-for="(card, index) in borsonCards" :key="index" :title="card.title" :description="card.description"
      :date="card.date" :readTime="card.readTime" :imgSrc="card.imgSrc" :titleColor="card.titleColor"
      :descriptionColor="card.descriptionColor" :dateColor="card.dateColor" :readTimeColor="card.readTimeColor" />
  </div>

  <!-- Third Row -->
  <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[68px]">
    <BorsonCard v-for="(card, index) in borsonCards" :key="index" :title="card.title" :description="card.description"
      :date="card.date" :readTime="card.readTime" :imgSrc="card.imgSrc" :titleColor="card.titleColor"
      :descriptionColor="card.descriptionColor" :dateColor="card.dateColor" :readTimeColor="card.readTimeColor" />
  </div>
</template>

<script setup>
import AgencyCard from '../../components/Cards/AgencyCard.vue'
import BorsonCard from '../../components/Cards/BorsonCard.vue'

const props = defineProps({
  agencyTitle: {
    type: String,
    default: 'Clockwork',
  },
})

const borsonCards = [
  {
    title: 'Pomega’nın Dijital Gücü, Diverseffect İmzalı Web Sitesiyle Yeniden Tanımlandı!',
    description:
      'Türkiye’nin ilk özel sektör Lityum-İyon pil hücresi üreticisi olan Pomega, kullanıcı odaklı bir deneyim sunmak amacıyla kurumsal web sitesini baştan sona yeniledi.',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'Diverseffect’in Özgün Tasarımları İle Ekojet Web Sitesi Şimdi Yayında!',
    description:
      'İnovatif girişimcilik vizyonuyla hayata geçirilen elektrikli şarj istasyonu markası Ekojet’in Diverseffect uzmanlığıyla hazırlanan web sitesi şimdi yayında!',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'Galata Üniversitesi Web Sitesini Diverseffect ile Yeniledi!',
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
]
</script>
