<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col items-center mt-[45px]">
    <div class="w-[1320px] flex flex-col gap-[28px]">

      <!-- 1️⃣ TOP ROW -->
      <div class="flex flex-col lg:flex-row gap-[28px]">
        <!-- LEFT FEATURED CARD (Dynamic Selection) -->
        <BorsonFeatureCard v-bind="cards[selectedCardIndex]" />

        <!-- RIGHT SIDEBAR -->
        <div class="flex flex-col justify-between gap-[28px] w-full lg:w-[424px]">
          <AgencyCard title="Clockwork" badgeText="Ayın Sosyal Medya Ajansı" label="Ayın Teknoloji Ajansı" imgSrc=""
            class="border border-[#0101FD]" />
        </div>
      </div>

      <!-- MIDDLE ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[28px]">
        <BorsonCard v-for="(card, index) in borsonCards.filter((_, i) => i === 0 || i === 2)" :key="index"
          v-bind="card" />
        <AgencyCard title="Clockwork" label="Ayın Teknoloji Ajansı" imgSrc="" />
      </div>

      <!-- BOTTOM ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        <BorsonCard v-for="(card, index) in borsonCards.filter((_, i) => i === 1 || i === 3)" :key="index" v-bind="card"
          class="lg:first:col-start-1 lg:first:col-span-1 lg:last:col-span-1 lg:justify-self-start" />

        <DakikalarCard showIcon iconSrc="" title="Dakikalar içinde ajansınızı bulun, karşılaştırın."
          description="Firmaların portfolyolarını ve müşteri yorumlarını incele. Sorularını sor. Dilediğin iletişim kanalı ile detaylar üzerinde anlaş."
          :showButton="true" buttonText="Teklif Al -Ücretsiz" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AgencyCard from '../../components/Cards/AgencyCard.vue'
import BorsonCard from '../../components/Cards/BorsonCard.vue'
import BorsonFeatureCard from '../../components/Cards/BorsonFeatureCard.vue'
import DakikalarCard from '../../components/Cards/DakikalarCard.vue'

/* Choose which card is active (0 = first, 1 = second, etc.) */
const selectedCardIndex = ref(0)

const cards = [
  {
    title: 'Brand Week Istanbul, izleyicileriyle Buluşacak',
    description:
      '“Brand New World” temasıyla düzenlenecek etkinlik, ilham verici konuşmalar, çığır açan projeler ve geleceğin haritasını çizen içeriklerle izleyicisini karşılayacak.',
    date: '29 Ağu 25',
    imgSrc: '/images/brandweek.jpg',
    tagText: 'Etkinlik Tarihi 10–14 Kasım 2025',
    isTagButton: false,
  },
  {
    title: 'Borsan Web Sitesinde Clockwork İmzası!',
    description:
      'Türkiye’nin köklü kablo üreticilerinden olan Borsan, dijital dünyadaki varlığını güçlendirmek adına web sitesini Clockwork’ün deneyimi ile baştan sona yeniledi.',
    date: '2 Tem 25',
    imgSrc: '/images/borsan.jpg',
    tagText: 'Sponsorlu İçerik',
    isTagButton: true,
  },
]

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
    eventDate: '12 Kasım 2025'
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
    eventDate: '12 Kasım 2025'
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
    eventDate: '12 Kasım 2025'
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
    eventDate: '12 Kasım 2025'
  },
];
</script>
