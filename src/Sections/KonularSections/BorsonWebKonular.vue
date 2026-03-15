<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px]max-w-[1320px] flex flex-col items-center bg-white mx-auto mt-[68px]">
    <div class="w-[1320px] flex flex-col gap-[28px]">

      <!-- 1️⃣ TOP ROW -->
      <div class="flex flex-col lg:flex-row gap-[28px]">
        <!-- LEFT FEATURED CARD -->
        <div class="w-full lg:w-[875px] h-[409px] rounded-[20px] overflow-hidden flex flex-col bg-[#000000]">
          <!-- Background Image -->
          <div class="flex-1 relative">
            <img src="" alt="Borsan News" class="w-full h-full object-cover rounded-t-[20px]" />
          </div>

          <!-- CONTENT -->
          <div class="flex flex-col gap-[12px] text-white p-[18px_40px] bg-black/40 backdrop-blur-sm rounded-b-[20px]">
            <div
              class="flex items-center gap-[8px] bg-[#F9F9FF] rounded-full w-fit px-[24px] py-[6px] text-[#2563EB] text-[14px] font-semibold">
              <img src="" alt="icon" class="w-[16px] h-[16px]" />
              <span class="text-[#0101FD] text-[16px] font-bold">Sponsorlu İçerik</span>
            </div>

            <h3 class="font-[700] text-[32px] tracking-[0.25px] font-['Poppins']">
              Borsan Web Sitesinde Clockwork İmzası!
            </h3>

            <p class="font-[400] text-[16px] tracking-[0.15px] font-['Poppins']">
              Türkiye’nin köklü kablo üreticilerinden olan Borsan, dijital dünyadaki varlığını
              güçlendirmek adına web sitesini Clockwork’ün deneyimi ile baştan sona yeniledi.
            </p>

            <span class="text-[16px] font-[400] tracking-[0.15px] mt-[8px] font-['Poppins']">
              2 Tem 25
            </span>
          </div>
        </div>

        <div class="flex flex-col justify-between gap-[28px] w-full lg:w-[424px]">
          <AgencyCard title="Clockwork" label="Ayın Teknoloji Ajansı" imgSrc="" />
        </div>
      </div>

      <!-- MIDDLE ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[28px]">
        <BorsonCard v-for="(card, index) in borsonCards.filter((_, i) => i === 1 || i === 2)" :key="index"
          :title="card.title" :description="card.description" :date="card.date" :readTime="card.readTime"
          :imgSrc="card.imgSrc" :titleColor="card.titleColor" :descriptionColor="card.descriptionColor"
          :dateColor="card.dateColor" :readTimeColor="card.readTimeColor" />
        <AgencyCard title="Clockwork" label="Ayın Teknoloji Ajansı" imgSrc="" />
      </div>

      <!-- BOTTOM ROW -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        <BorsonCard v-for="(card, index) in borsonCards.filter((_, i) => i === 1 || i === 3)" :key="index"
          :title="card.title" :description="card.description" :date="card.date" :readTime="card.readTime"
          :imgSrc="card.imgSrc" :titleColor="card.titleColor" :descriptionColor="card.descriptionColor"
          :dateColor="card.dateColor" :readTimeColor="card.readTimeColor"
          class="lg:first:col-start-1 lg:first:col-span-1 lg:last:col-span-1 lg:justify-self-start" />
        <AgencyCard title="Poligon Interactive" label="Ayın Teknoloji Ajansı" imgSrc="" />
      </div>

    </div>
  </section>
</template>

<script setup>
import AgencyCard from '../../components/Cards/AgencyCard.vue';
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
