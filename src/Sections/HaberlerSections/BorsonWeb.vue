<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col items-center mt-[43px] lg:mt-[68px]">
    <div class=" flex flex-col gap-[28px]">

      <!-- TOP ROW -->
      <div class=" flex flex-col md:flex-row gap-[28px]">
        <!-- LEFT FEATURED CARD (Dynamic) -->
        <div
          class="w-full lg:w-[875px] h-[543px] md:h-[409px] bg-cover bg-center rounded-[16px] overflow-hidden px-10 py-[18px] flex flex-col justify-end gap-3"
          :style="{ backgroundImage: `url(${featuredImg})`, backgroundColor: featuredBgColor }">
          <div v-if="featuredBadgeText" class="flex items-center gap-[8px] rounded-full w-fit px-[24px] py-[6px]"
            :style="{ backgroundColor: featuredBadgeBg }">
            <img v-if="featuredBadgeIcon" :src="featuredBadgeIcon" alt="icon" class="w-[22px] h-6" />
            <span class="text-[14px] md:text-[16px] font-bold" :style="{ color: featuredBadgeColor }">
              {{ featuredBadgeText }}
            </span>
          </div>

          <div class="w-full flex flex-col gap-1">
            <h5 class="font-bold text-2xl md:text-[32px] tracking-normal md:tracking-[0.25px]"
              :style="{ color: featuredTitleColor }">
              {{ featuredTitle }}
            </h5>

            <p class="font-normal text-[14px] md:text-[16px] tracking-[0.15px]" :style="{ color: featuredDescColor }">
              {{ featuredDescription }}
            </p>

            <span class="text-[14px] md:text-[16px] font-normal tracking-[0.15px] font-['Poppins']"
              :style="{ color: featuredDateColor }">
              {{ featuredDate }}
            </span>
          </div>
        </div>

        <!-- RIGHT AGENCY CARD (Dynamic Border) -->
        <div class="flex flex-col justify-between gap-[28px] w-full md:w-[363px] lg:w-fit" :style="showAgencyCardBorder
          ? { border: '1px solid #0101FD', boxShadow: '0px 1px 4px 0px var(--sds-color-black-100)', borderRadius: '16px' }
          : {}">
          <AgencyCardBorson title="Clockwork" label="Ayın Teknoloji Ajansı" imgSrc="/agency-card/clock-work.png" />
        </div>
      </div>

      <!-- MIDDLE ROW -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[28px] mt-[28px]">
        <BorsonCard v-for="(card, index) in borsonCards.slice(0, 2)" :key="index" v-bind="card"
          :eventDate="eventDates" />
        <AgencyCard title="Poligon Interactive" label="Ayın Teknoloji Ajansı" imgSrc="/agency-card/poligon.png" />
      </div>

      <!-- BOTTOM ROW (Dynamic) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
        <!-- Default (3 Borson Cards) -->
        <template v-if="!showAgencyCard && !showDakikalarCard">
          <BorsonCard v-for="(card, index) in borsonCards.slice(2, 5)" :key="'default-' + index" v-bind="card"
            :eventDate="eventDates" />
        </template>

        <!-- With Agency Card -->
        <template v-else-if="showAgencyCard">
          <BorsonCard v-for="(card, index) in borsonCards.slice(2, 4)" :key="'with-agency-' + index" v-bind="card"
            :eventDate="eventDates" />
          <AgencyCard title="Poligon Interactive" label="Ayın Teknoloji Ajansı" imgSrc="/agency-card/poligon.png" />
        </template>

        <!-- With Dakikalar Card -->
        <template v-else-if="showDakikalarCard">
          <BorsonCard v-for="(card, index) in borsonCards.slice(2, 4)" :key="'with-dakikalar-' + index" v-bind="card"
            :eventDate="eventDates" />
          <DakikalarCard class="hidden md:flex" :showIcon="showIcon" :iconSrc="iconSrc" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyCard from '../../components/Cards/AgencyCard.vue'
import AgencyCardBorson from '../../components/Cards/AgencyCardBorson.vue'
import BorsonCard from '../../components/Cards/BorsonCard.vue'
import DakikalarCard from '../../components/Cards/DakikalarCard.vue'

defineProps({
  /* Dynamic Props for Featured Card */
  featuredImg: {
    type: String,
    default: '/borsan-web-main.png',
  },
  featuredBgColor: {
    type: String,
    default: '#000000',
  },
  featuredTitle: {
    type: String,
    default: 'Borsan Web Sitesinde Clockwork İmzası!',
  },
  featuredTitleColor: {
    type: String,
    default: '#FFFFFF',
  },
  featuredDescription: {
    type: String,
    default:
      'Türkiye’nin köklü kablo üreticilerinden olan Borsan, dijital dünyadaki varlığını güçlendirmek adına web sitesini Clockwork’ün deneyimi ile baştan sona yeniledi.',
  },
  featuredDescColor: {
    type: String,
    default: '#FFFFFF',
  },
  featuredDate: {
    type: String,
    default: '2 Tem 25',
  },
  featuredDateColor: {
    type: String,
    default: '#FFFFFF',
  },
  featuredBadgeText: {
    type: String,
    default: 'Sponsorlu İçerik',
  },
  featuredBadgeColor: {
    type: String,
    default: '#0101FD',
  },
  featuredBadgeBg: {
    type: String,
    default: '#F9F9FF',
  },
  featuredBadgeIcon: {
    type: String,
    default: '/icons/Logo-3.svg',
  },

  /* Existing props (unchanged) */
  showIcon: { type: Boolean, default: false },
  iconSrc: { type: String, default: '/icons/Logo-3.svg' },
  showAgencyCard: { type: Boolean, default: false },
  showDakikalarCard: { type: Boolean, default: false },
  showAgencyCardBorder: { type: Boolean, default: false },
  eventDates: { type: [Array, String], default: '' },
})

const borsonCards = [
  {
    title: 'Togg, Yapay Zekâ Platformu Can.ai’yiIAA Mobility 2025’te Tanıttı',
    description:
      'Türkiye’nin mobilite alanında hizmet veren küresel teknoloji markası Togg, Microsoft Türkiye iş birliğiyle geliştirdiği yapay zekâ platformu Can.ai’yi Münih’teki IAA Mobility 2025’te paylaştı',
    date: '10 Eyl 25',
    readTime: '7 min read',
    imgSrc: '/daxtube-card/togg.png',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'DiversEffect’in Özgün Tasarımları ile Ekojet Web Sitesi Şimdi Yayında!',
    description:
      'İnovatif girişimcilik vizyonuyla hayata geçirilen elektrikli şarj istasyonu markası Ekojet’in Diverseffect uzmanlığıyla hazırlanan web sitesi şimdi yayında!',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '/daxtube-card/diverseffect.png',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
  {
    title: 'Pomega’nın Dijital Gücü, Dıverseffect İmzalı Web Sitesiyle Yeniden Tanımlandı!',
    description:
      'Türkiye’nin ilk özel sektör Lityum-İyon pil hücresi üreticisi olan Pomega, kullanıcı odaklı bir deneyim sunmak amacıyla kurumsal web sitesini baştan sona yeniledi.',
    date: '29 Ağu 25',
    readTime: '7 min read',
    imgSrc: '/daxtube-card/pomega.png',
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
    imgSrc: '/daxtube-card/diverseffect.png',
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
    imgSrc: '/daxtube-card/galata.png',
    titleColor: '#333333',
    descriptionColor: '#333333',
    dateColor: '#333333',
    readTimeColor: '#464646',
  },
]
</script>
