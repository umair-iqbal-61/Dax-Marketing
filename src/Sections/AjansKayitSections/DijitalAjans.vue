<template>
  <section
    class="bg-[url('/Desktop-1.png')] bg-cover bg-center max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-[530px] flex items-center justify-center">
    <div class="w-full h-full flex flex-col items-center justify-center mx-4 gap-[28px]">
      <div class="w-[40px] h-[44px] rounded-[100px]">
        <img src="/icons/Logo-3.svg" class="w-fit h-fit object-contain">
      </div>

      <div class="flex flex-col items-center text-center justify-center gap-[14px]">
        <h2 class="text-[32px] font-bold text-[#333333]">
          {{ title }}
        </h2>
        <p class="max-w-[956px] text-[20px] font-normal text-[#333333] tracking-[0.15px]">
          {{ description }}
        </p>
      </div>

      <div>
        <Button variant="Secondary" state="Default" size="Medium" class="w-full h-[45px]">{{ buttonText }}</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Dijital Ajanslar’da Yerinizi Alın.',
  },
  description: {
    type: String,
    default:
      'Türkiye’nin en görünür ajans platformunda yerinizi alın, markaların sizi keşfetmesine izin verin. Şimdi kaydolun, fırsatları kaçırmayın.',
  },
  buttonText: {
    type: String,
    default:
      'Hemen Kayıt Ol – Ücretsiz',
  }
})
</script>