<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col gap-4 mt-[43px] lg:mt-[68px]">
    <div class="flex flex-col items-center justify-center w-full h-fit gap-3.5 py-5">
      <div class="w-[40px] h-[44px] rounded-[100px] flex items-center justify-center overflow-hidden"><img
          class="w-fit h-fit object-contain" src="/icons/Logo-3.svg">
      </div>
      <h2 class="text-[32px] font-bold text-[#333333]">
        Neler yapıyoruz?
      </h2>
      <p class="w-fit text-center text-[20px] font-normal text-[#333333] tracking-[0.15px]">
        Ajansınızın Görünürlüğünü ve Başarısını Katlayın: Yeni Projeler ve Daha Fazlası!
      </p>
    </div>

    <div class="w-full h-fit lg:h-[255px] flex flex-col lg:flex-row gap-6">
      <DaxInfoCard v-for="(card, index) in cards.slice(0, 3)" :key="index" :iconSrc="card.iconSrc" :title="card.title"
        :description="card.description" :titleFontSize="'16px'" :descriptionFontSize="'14px'" :gapSize="'21px'" />
    </div>

    <div class="w-full h-fit lg:h-[255px] flex flex-col lg:flex-row gap-6">
      <DaxInfoCard v-for="(card, index) in cards.slice(3)" :key="index" :iconSrc="card.iconSrc" :title="card.title"
        :description="card.description" :titleFontSize="'16px'" :descriptionFontSize="'14px'" :gapSize="'21px'" />
    </div>
  </section>
</template>

<script setup>
import DaxInfoCard from '../../components/Cards/DaxInfoCard.vue';

const cards = [
  {
    iconSrc: '/dax-info-card/haber.png',
    title: 'Haber, Proje, Bülten Yayını',
    description:
      'Ajansınızın yaratıcı projeleri, haberleri ve basın bültenleri dijitalajanslar.com’da yayınlanır; böylece görünürlüğünüz ve web trafiğiniz artar.',
  },
  {
    iconSrc: '/dax-info-card/ozel.png',
    title: 'Özel Davet ve İndirimler',
    description:
      'Ajans yöneticileri ve çalışanları, sponsor olduğumuz etkinliklere davetli katılabilir ve üyelerimize özel indirimlerden faydalanabilir.',
  },
  {
    iconSrc: '/dax-info-card/erisim.png',
    title: 'İş Fırsatlarına Erişim',
    description:
      'Ajanslar uzmanlık alanına uygun iş fırsatlarını kolayca keşfeder. Platformda açılan projelere teklif vererek markalarla hızlıca işbirliği yapabilirler.',
  },
  {
    iconSrc: '/dax-info-card/prve.png',
    title: 'Pr ve görünürlük fırsatı',
    description:
      'Dijital Ajanslar’da paylaşılan bültenler tamamen sektör ilgilisi 100 bin kişinin üzerinde bir kitle ile paylaşılır.',
  },
  {
    iconSrc: '/dax-info-card/alma.png',
    title: 'Rehberde Yer Alma',
    description:
      'Ajanslar, sitemizde ajanslar rehberinde yer alır. Böylece hizmet alanında dijital ajans arayan ziyaretçiler, rehber aracılığıyla direkt web sitenize ulaşabilir.',
  },
  {
    iconSrc: '/dax-info-card/marka.png',
    title: 'Marka ve Ajanslarla direkt iletişim fırsatı',
    description:
      'Dijital Ajanslarda bulunan kullanıcı paneli sayesinde markalar ve ajanslar iletişim kurup hızlıca birlikte çalışmaya başlayabilirler.',
  },
]
</script>