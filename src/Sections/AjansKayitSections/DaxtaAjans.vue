<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px]  mt-[43px] lg:mt-[68px]">
    <div class="flex flex-col rounded-[20px] p-10 gap-8 bg-white shadow-[0px_1px_4px_0px_var(--sds-color-black-100)]">
      <div class="max-w-[1244px] w-full h-fit pl-1.5 flex flex-col md:flex-row justify-between gap-8">
        <h2 class="font-bold text-[32px] tracking-[0.25px] text-[#333333]">DAX’ta yerinizi alın</h2>
        <Button variant="Secondary" state="Default" size="Medium" class="w-full md:w-fit h-[45px]">
          Ücretsiz Kayıt Ol
        </Button>
      </div>
      <div class="max-w-[1244px] w-full h-fit flex flex-col md:flex-wrap md:flex-row items-center justify-between">
        <KolaycaCard v-for="(card, index) in cards" :key="index" :number="card.number" :title="card.title"
          :description="card.description" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue';
import KolaycaCard from '../../components/Cards/KolaycaCard.vue';

const cards = [
  {
    number: "01",
    title: "Kolayca Ücretsiz Kayıt Ol",
    description: "Ücretsiz olarak platformumuza katılın ve uzman ajanslar arayan potansiyel müşterilerden oluşan geniş bir ağa erişim sağlayın."
  },
  {
    number: "02",
    title: "Ajans Profilinizi Doldurun",
    description: "Doğru projeleri çekmek için ajans profilinizi hizmetler, portföy ve ekip gibi temel bilgilerle doldurun."
  },
  {
    number: "03",
    title: "Projelere Teklif Verin",
    description: "Uzmanlık alanınıza uygun proje fırsatlarını inceleyin ve teklifleri doğrudan ilgili müşterilere iletin."
  },
]
</script>