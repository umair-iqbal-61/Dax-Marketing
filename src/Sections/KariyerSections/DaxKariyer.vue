<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col h-fit mt-[43px] lg:mt-[68px] gap-7">

    <div class="gap-7 w-full h-fit flex flex-col lg:flex-row justify-between lg:items-stretch">
      <!-- LEFT CONTAINER -->
      <div
        class="w-full h-fit lg:flex-[2] flex flex-col gap-[23px] md:gap-[22px] bg-white rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] px-6 py-10">

        <!-- Top Section -->
        <div class="flex flex-col gap-[22px] w-full h-fit lg:max-w-[90%] pl-[6px]">
          <h2 class="font-bold text-[32px] tracking-[0.25px] text-[#333333]">
            DAX Kariyer
          </h2>

          <p class="font-normal text-[16px] tracking-[0.5px] text-[#333333]">
            Kariyer sayfalarında; dijital pazarlama, sosyal medya, mobil pazarlama, medya planlama ve yaratıcı alanlarda
            çalışmak üzere aranan nitelikli personele dair dijital ajans ve sosyal medya ajanslarının iş ilanlarını
            inceleyebilirsiniz.
          </p>
        </div>

        <!-- Job Listings -->
        <div class="flex flex-col gap-[28px] w-full h-fit">
          <OgreCard v-for="n in count" :key="n" title="Ogre Interactive, Ambalaj Tasarımcısı – Operatörü Arıyor!"
            company="Ogre Interactive" date="29 Ağu 25" />
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
      <div class="flex flex-col w-full h-fit lg:flex-[1] gap-[39px] relative">
        <div class="flex flex-col md:flex-row lg:flex-col  gap-[39px]">
          <AgencyCard title="Clock work" imgSrc="/agency-card/clock-work.png" />
          <AgencyCard imgSrc="/agency-card/poligon.png" />
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
import Button from '../../components/Button/Button.vue'
import AgencyCard from '../../components/Cards/AgencyCard.vue'
import OgreCard from '../../components/Cards/OgreCard.vue'

const props = defineProps({
  count: {
    type: Number,
    default: 9,
  },
})
</script>
