<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] max-w-[1320px] flex mx-auto gap-[28px] mt-[68px]">

    <!-- LEFT DIV -->
    <div
      class="w-[875px] flex items-center justify-between border border-[#0101FD] bg-white px-[40px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[4px]">
      <div class="flex flex-col justify-between gap-[28px] py-9">
        <div class="flex flex-col gap-[8px]">
          <div class="w-[36px] h-[36px] rounded-[100px] bg-[#0101FD]"></div>
          <h2 class="text-[24px] font-bold text-[#0101FD]">
            Ajansınızın Görünürlüğünü ve Başarısını Katlayın
          </h2>
          <p class="text-[20px] font-normal text-[#333333] tracking-[0.15px]">
            Türkiye’nin en görünür ajans platformunda yerinizi alın, markaların sizi keşfetmesine izin verin. Şimdi
            kaydolun, fırsatları kaçırmayın.
          </p>
        </div>

        <div>
          <Button variant="Secondary" state="Default" size="Medium">Hemen Kayıt Ol -Ücretsiz</Button>
        </div>
      </div>

      <div class="flex items-center justify-center rounded-md overflow-hidden">
        <img :src="leftImage" alt="illustration" class="w-full h-full object-contain" />
      </div>
    </div>

    <!-- RIGHT DIV -->
    <div :class="[
      'w-[422px] h-[304px] flex items-center justify-between bg-white px-[24px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[23px]',
      onlyImage ? '' : 'border border-[#0101FD]'
    ]">
      <template v-if="!onlyImage">
        <div class="w-[374px] flex flex-col justify-between gap-[28px] py-9">
          <div class="flex flex-col gap-[8px]">
            <h2 class="text-[24px] font-bold text-[#0101FD]">
              Ajansınızın Görünürlüğünü ve Başarısını Katlayın
            </h2>
            <p class="text-[14px] font-normal text-[#333333] tracking-[0.15px]">
              Türkiye’nin en görünür ajans platformunda yerinizi alın, markaların sizi keşfetmesine izin verin. Şimdi
              kaydolun, fırsatları kaçırmayın.
            </p>
          </div>
          <div>
            <Button variant="Secondary" state="Default" size="Medium">Hemen Kayıt Ol - Ücretsiz</Button>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="w-full h-full flex items-center justify-center">
          <img :src="rightImage" alt="right section" class="w-full h-full object-contain rounded-[12px]" />
        </div>
      </template>
    </div>

  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue'
import { defineProps } from 'vue'

const props = defineProps({
  leftImage: { type: String, default: '' },
  onlyImage: { type: Boolean, default: false },
  rightImage: { type: String, default: '' },
})
</script>
