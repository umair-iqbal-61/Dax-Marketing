<template>
  <section class="max-w-[1440px] w-full px-4 lg:px-[60px] mx-auto mt-[43px] lg:mt-[68px]">
    <!-- ✅ DYNAMIC HEADING (Hidden by Default) -->
    <div v-if="showHeading" class="">
      <h2 class="text-2xl md:text-[28px] lg:text-[32px] font-bold text-[#333333]">
        {{ headingText }}
      </h2>
    </div>

    <!-- FIRST ROW -->
    <div class="w-full flex flex-col lg:flex-row gap-[28px] mt-[43px] lg:mt-[68px]">
      <BorsonCard v-for="(card, index) in borsonCards.slice(0, 3)" :key="index" :title="card.title"
        :description="card.description" :date="card.date" :readTime="card.readTime" :imgSrc="card.imgSrc"
        :titleColor="card.titleColor" :descriptionColor="card.descriptionColor" :dateColor="card.dateColor"
        :readTimeColor="card.readTimeColor" :eventDate="Array.isArray(eventDates) ? eventDates[index] : eventDates" />
    </div>

    <!-- ✅ SECOND ROW (Now Hideable via Prop) -->
    <div v-if="showSecondRow" class="w-full hidden md:flex flex-col lg:flex-row gap-[28px] mt-[43px] lg:mt-[68px]">
      <!-- When AgencyCard is visible -->
      <template v-if="showAgencyCard">
        <BorsonCard v-for="(card, index) in borsonCards.filter((_, i) => i === 0 || i === 2)" :key="'second-' + index"
          :title="card.title" :description="card.description" :date="card.date" :readTime="card.readTime"
          :imgSrc="card.imgSrc" :titleColor="card.titleColor" :descriptionColor="card.descriptionColor"
          :dateColor="card.dateColor" :readTimeColor="card.readTimeColor" />
        <!-- Dynamic AgencyCard -->
        <AgencyCard class="md:hidden lg:flex" :title="agencyTitle" label="Ayın Teknoloji Ajansı"
          imgSrc="/agency-card/clock-work.png" />
      </template>

      <!-- When AgencyCard is hidden -->
      <template v-else>
        <BorsonCard v-for="(card, index) in borsonCards.slice(0, 3)" :key="'second-default-' + index"
          :title="card.title" :description="card.description" :date="card.date" :readTime="card.readTime"
          :imgSrc="card.imgSrc" :titleColor="card.titleColor" :descriptionColor="card.descriptionColor"
          :dateColor="card.dateColor" :readTimeColor="card.readTimeColor" />
      </template>
    </div>

    <!-- THIRD ROW (Dynamic Extra Row) -->
    <div v-if="showExtraRow"
      class="w-full hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[43px] lg:mt-[68px]">
      <BorsonCard v-for="(card, index) in borsonCards" :key="'extra-' + index" :title="card.title"
        :description="card.description" :date="card.date" :readTime="card.readTime" :imgSrc="card.imgSrc"
        :titleColor="card.titleColor" :descriptionColor="card.descriptionColor" :dateColor="card.dateColor"
        :readTimeColor="card.readTimeColor" />
    </div>
  </section>
</template>

<script setup>
import AgencyCard from '../../components/Cards/AgencyCard.vue'
import BorsonCard from '../../components/Cards/BorsonCard.vue'

const props = defineProps({
  /* ✅ Dynamic Heading */
  showHeading: { type: Boolean, default: false },
  headingText: { type: String, default: 'Öne Çıkan Projeler' },

  /* ✅ Second Row Toggle */
  showSecondRow: { type: Boolean, default: true },

  /* Existing Props */
  agencyTitle: {
    type: String,
    default: 'Clockwork',
  },
  eventDates: {
    type: [Array, String],
    default: () => '',
  },
  showExtraRow: {
    type: Boolean,
    default: false, // third row hidden by default
  },
  showAgencyCard: {
    type: Boolean,
    default: true, // agency card visible by default
  },
})

// ✅ Default cards
const borsonCards = [
  {
    imgSrc: '/daxtube-card/pomega.png',
    overlayImg: '/daxtube-card/diverseffect-logo.png',
    readTime: '7 min read',
    title: 'Pomega’nın Dijital Gücü, Diverseffect İmzalı Web Sitesiyle Yeniden Tanımlandı!',
    description:
      'Türkiye’nin ilk özel sektör Lityum-İyon pil hücresi üreticisi olan Pomega, kullanıcı odaklı bir deneyim sunmak amacıyla kurumsal web sitesini baştan sona yeniledi.',
    date: '3 Eyl 25',
  },
  {
    imgSrc: '/daxtube-card/diverseffect.png',
    overlayImg: '/daxtube-card/diverseffect-logo.png',
    readTime: '7 min read',
    title: 'Diverseffect’in Özgün Tasarımları ile Ekojet Web Sitesi Şimdi Yayında!',
    description:
      'İnovatif girişimcilik vizyonuyla hayata geçirilen elektrikli şarj istasyonu markası Ekojet’in web sitesi Diverseffect uzmanlığıyla hazırlandı.',
    date: '3 Eyl 25',
  },
  {
    imgSrc: '/daxtube-card/galata.png',
    overlayImg: '/daxtube-card/diverseffect-logo.png',
    readTime: '7 min read',
    title: 'Galata Üniversitesi Web Sitesini Diverseffect ile Yeniledi!',
    description:
      'Öğrencilerini yetkinlik sahibi bireyler olarak yetiştirmeyi misyon edinen Galata Üniversitesi’nin yeni web sitesi Diverseffect tarafından yenilendi.',
    date: '3 Eyl 25',
  },
]
</script>
