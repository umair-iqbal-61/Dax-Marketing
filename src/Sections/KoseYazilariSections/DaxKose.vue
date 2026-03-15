<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col h-fit mt-[43px] lg:mt-[68px] gap-7">
    <div class="gap-7 w-full h-fit flex flex-col lg:flex-row justify-between">

      <!-- LEFT CONTAINER -->
      <div
        class="w-full h-fit lg:flex-[2] flex flex-col gap-[23px] md:gap-[22px] bg-white rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] px-6 py-10">

        <!-- Top Section -->
        <div class="flex flex-col gap-[22px] w-full h-fit lg:max-w-[90%] pl-[6px]">
          <h2 class="font-bold text-[32px] tracking-[0.25px] text-[#333333]">
            DAX Köşe
          </h2>

          <p class="font-normal text-[16px] tracking-[0.5px] text-[#333333]">
            Sektör uzmanlarından güncel içeriklerle sektöre farklı bir bakış atın.
          </p>
        </div>

        <!-- Job Listings -->
        <div class="flex flex-col gap-[28px] w-full h-fit">
          <NewsCardYazilari v-for="(card, index) in cards" :key="index" :imgSrc="card.imgSrc" :title="card.title"
            :description="card.description" :author="card.author" :readTime="card.readTime" :date="card.date" />
        </div>
      </div>

      <!-- PAGINATION (Mobile only) -->
      <div class="flex md:hidden justify-center items-center gap-2">
        <button v-for="n in 6" :key="n" :class="[
          'w-[30px] h-[30px] flex items-center justify-center rounded-[100px] text-sm font-normal',
          n === 1 ? 'bg-[#0101FD] text-white' : 'bg-[#D9D9D9] text-[#01017A]'
        ]">
          {{ n }}
        </button>
        <button class="bg-transparent">
          <img src="/icons/Chevron-right.svg" />
        </button>
      </div>

      <!-- RIGHT CONTAINER -->
      <div class="flex flex-col w-full h-fit lg:flex-[1] gap-[39px] shrink-0">
        <div class="flex flex-col md:flex-row lg:flex-col w-full h-fit gap-[39px]">
          <AgencyCard title="Clock work" imgSrc="/agency-card/clock-work.png" />
          <AgencyCard imgSrc="/agency-card/poligon.png" />
        </div>

        <!-- Dakikalar Card -->
        <div
          class="w-full h-fit flex flex-wrap items-center justify-center border border-[#0101FD] bg-white p-[40px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[21px]">
          <div class="flex flex-col justify-between gap-[28px] pt-5">
            <div class="flex flex-col gap-[8px]">
              <div class="flex items-center justify-center w-[36px] h-[36px] rounded-[100px] p-1.5 bg-[#0101FD]">
                <img src="/icons/Logo-3(white).svg" class="w-full h-full" />
              </div>
              <h2 class="text-[24px] font-bold text-[#0101FD]">
                Dakikalar içinde ajansınızı bulun, karşılaştırın.
              </h2>
              <p class="text-[20px] font-normal text-[#333333] tracking-[0.15px]">
                Firmaların portfolyolarını ve müşteri yorumlarını incele. Sorularını sor. Dilediğin iletişim kanalı ile
                detaylar üzerinde anlaş.
              </p>
            </div>

            <Button variant="Secondary" state="Default" size="Medium" class="w-full md:w-[227px] lg:w-full h-[45px]">
              Teklif Al - Ücretsiz
            </Button>
          </div>

          <img src="/dakikalar-img.png"
            class="w-full h-full md:w-fit md:h-fit lg:w-full lg:h-full object-contain rounded-[12px]" />
        </div>

        <!-- Ajanslardan Card -->
        <div
          class="w-full flex items-center justify-center bg-white px-5 md:px-10 py-10 shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[60px] border border-[#0101FD]">
          <div class="w-full h-fit flex flex-col justify-between gap-[26px]">
            <div class="flex flex-col gap-[4px]">
              <h2 class="text-[24px] font-bold text-[#0101FD]">
                Ajanslardan Ücretsiz Teklif Alın.
              </h2>
              <p class="text-[14px] font-normal text-[#333333] tracking-[0.15px]">
                Ajans mı arıyorsunuz? İhtiyacınıza uygun ajanslardan ücretsiz teklifler alın.
              </p>
            </div>
            <div>
              <Button variant="Secondary" state="Default" size="Medium">
                Teklif Al - Ücretsiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGINATION (Desktop only) -->
    <div class="hidden md:flex justify-center items-center gap-2">
      <button v-for="n in 6" :key="n" :class="[
        'w-[30px] h-[30px] flex items-center justify-center rounded-[100px] text-sm font-normal',
        n === 1 ? 'bg-[#0101FD] text-white' : 'bg-[#D9D9D9] text-[#01017A]'
      ]">
        {{ n }}
      </button>
      <button class="bg-transparent">
        <img src="/icons/Chevron-right.svg" />
      </button>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue';
import AgencyCard from '../../components/Cards/AgencyCard.vue';
import NewsCardYazilari from '../../components/Cards/NewsCardYazilari.vue';
const cards = [
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/hey.png',
    title: 'HEY Kolektif’le Yeni Marka',
    description:
      'Kahve sektörünün yenilikçi markası Coffee Revvo, markalaşma, kreatif ve dijital iletişim süreçlerinde HEY Kolektif ile iş birliğine başladı.',
    author: '',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/netas.png',
    title: 'Netaş’ta Üst Düzey Atamalar',
    description:
      'Netaş, yönetim kadrosuna üç yeni isim ekledi. Kurumsal yönetim yapısını güçlendirmesi ve sürdürülebilir yüksek büyüm...',
    author: '',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/neohub.png',
    title:
      'NEOHUB ve Teknopark İstanbul’dan Girişimcilik Ekosistemine Güçlü Destek',
    description:
      'DeneBİZ’in yeni iş ortaklığı NEOHUB ile Türkiye’nin lider teknoloji geliştirme bölgelerinden Teknopark İstanbul, girişimlerin mentorlu...',
    author: '',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/pwc.png',
    title: 'PwC Küresel Eğlence ve Medya Sektörüne Bakış 2025-2029 Raporu Yayımlandı.',
    description:
      'PwC Küresel Eğlence ve Medya Sektörüne Bakış 2025-2029 Raporu Yayımlandı.',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
  {
    imgSrc: '/news-card/yapay.png',
    title: 'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
    description:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hop fenomeninde yazısı yayında.',
    author: 'Mehmet Safa Yalçıntaş',
    readTime: '7 min read',
    date: '29 Ağu 25',
  },
]

</script>