<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] gap-[26px] flex flex-col justify-between mt-[43px] lg:flex-row lg:mt-[68px] overflow-hidden">
    <!-- LEFT SECTION -->
    <div class="w-full flex justify-center items-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-6 py-10 gap-2.5
        lg:w-fit">
      <div class="w-full mx-auto flex flex-col gap-7
          md:gap-[24px]
          lg:w-fit">
        <!-- Heading -->
        <h2 class="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#333333]">
          DAX Konuları
        </h2>

        <!-- Navigation Tabs -->
        <div class="w-full flex items-center md:justify-between gap-[22px] pl-1.5
        lg:gap-0 shrink-0">
          <span class="text-[16px] font-semibold text-[#0101FD] underline underline-offset-1">
            Pazarlama
          </span>
          <span class="text-[15px] shrink-0 md:text-[16px] font-semibold text-[#333333] tracking-[0.3px]">
            Sosyal Medya
          </span>
          <span class="text-[15px] md:text-[16px] font-semibold text-[#333333] tracking-[0.3px]">
            Pazarlama
          </span>
          <span class="text-[15px] shrink-0 md:text-[16px] font-semibold text-[#333333] tracking-[0.3px]">
            Dijital Pazarlama
          </span>
          <span class="text-[15px] md:text-[16px] font-semibold text-[#333333] tracking-[0.3px]">
            Teknoloji
          </span>
          <span class="text-[13px] shrink-0 md:text-[14px] font-medium text-[#333333] underline underline-offset-1">
            Tümünü Gör
          </span>
        </div>

        <div class="flex flex-row md:flex-col  gap-7">
          <!-- Cards List -->
          <NewsCard class="!w-[286px] shrink-0 md:!w-full" v-for="(news, index) in newsCards" :key="index"
            :title="news.title" :description="news.description" :date="news.date" :imgSrc="news.imgSrc" />
        </div>
      </div>
    </div>

    <!-- RIGHT SECTION -->
    <div class="w-full flex justify-center items-center bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-5
        md:p-6
        lg:w-[422px]">
      <div class="w-full mx-auto flex flex-col gap-[34px]
          lg:w-[374px]">
        <!-- Heading -->
        <h2 class="text-2xl font-bold text-[#333333]">
          DAX Köşe
        </h2>

        <!-- Cards -->
        <DaxKoseCard v-for="(card, index) in daxKoseCards" :key="index" :title="card.title" :author="card.author"
          :imgSrc="card.imgSrc" />
      </div>
    </div>
  </section>
</template>

<script setup>
import DaxKoseCard from '../../components/Cards/DaxKoseCard.vue'
import NewsCard from '../../components/Cards/NewsCard.vue'

const newsCards = [
  {
    title: 'Rekabet Nedir? İş Hayatında En İyi Nasıl Rekabet Edebilirsiniz?',
    description:
      'Rekabetin anlamını öğrenin ve iş hayatında başarılı olmak için en etkili rekabet stratejilerini keşfedin.',
    date: '3 Eyl 25',
    imgSrc: '/dax-konular-card/rekabet.png',
  },
  {
    title: 'Ayıplı Mal Nedir? Tüketici Hakları ve Adım Adım Başvuru (2025)',
    description:
      'Ayıplı mal nedir, nasıl tespit edilir? Tüketici haklarını öğrenin ve 2025’te şikayet sürecini adım adım nasıl başlatacağınızı keşfedin.',
    date: '3 Eyl 25',
    imgSrc: '/dax-konular-card/ayipli.png',
  },
  {
    title:
      'Ayıplı mal nedir, nasıl tespit edilir? Tüketici haklarınızı öğrenin ve 2025’te şikayet sürecini adım adım nasıl başlatacağınızı keşfedin.',
    description:
      '2025 vergi borcu yapılandırma süreci, başvuru şartları ve güncel durum hakkında tüm detaylara hemen göz atın!',
    date: '3 Eyl 25',
    imgSrc: '/dax-konular-card/calculator.png',
  },
  {
    title: 'Yapılandırılmış Veri Nedir? SEO ve Pazarlama İçin Kılavuz',
    description:
      'Vektörel çizim nedir ve nasıl kullanılır? 2025’te grafik tasarım ve dijital sanat için temel bilgileri ve ipuçlarını öğrenin!',
    date: '3 Eyl 25',
    imgSrc: '/dax-konular-card/yapil.png',
  },
]

const daxKoseCards = [
  { title: 'Dijital Çıtalar ve Bilge Baykuşlar', author: 'Alper Güçer', imgSrc: '/dax-kose-card/columnist-1.png' },
  { title: 'Hangi Markalar SEO’ya İhtiyaç Duyar?', author: 'Yaşar Acar', imgSrc: '/dax-kose-card/columnist-2.png' },
  { title: '2025’te Pazar Araştırmalarında Yapay Zekanın Yeni Ufukları', author: 'Umut Vural', imgSrc: '/dax-kose-card/columnist-3.png' },
  { title: 'Online Toplantıda Verimliliği Nasıl Artırırız?', author: 'Mete Özvar', imgSrc: '/dax-kose-card/columnist-4.png' },
  { title: 'Hız ve Samimiyet. İşte Bütün Mesele Bu.', author: 'Ebru Aylık', imgSrc: '/dax-kose-card/columnist-5.png' },
  { title: 'Omnichannel (Çok Kanallı) Pazarlama Nedir?', author: 'Tarık Aydın', imgSrc: '/dax-kose-card/columnist-6.png' },
  { title: 'Satışlarınızı Artıracak E-Ticaret Ürün Sayfası Uygulamaları', author: 'Faruk Karadağ', imgSrc: '/dax-kose-card/columnist-7.png' },
  { title: 'Dijital Çağda Markalaşma ve Kültür Yaratma Sanatı', author: 'Cem Demir', imgSrc: '/dax-kose-card/columnist-8.png' },
]
</script>
