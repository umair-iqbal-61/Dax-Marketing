<template>
  <div
    class="flex justify-center border border-[#0101FD] bg-white px-[24px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[23px]">
    <div class="w-fit lg:w-[374px] flex flex-col justify-between gap-[28px] py-9">

      <!-- Optional Top Icon -->
      <div class="flex flex-col justify-start">
        <div v-if="showIcon" class="w-9 h-9 rounded-full p-1.5 bg-[#0101FD] mt-3 mb-2">
          <img src="/icons/Logo-3(white).svg" class="w-full h-full" alt="icon" />
        </div>

        <!-- Text Section -->
        <div class="flex flex-col justify-start">
          <h2 class="text-[24px] font-bold" :class="titleColor ? '' : 'text-[#0101FD]'" :style="{ color: titleColor }">
            {{ title }}
          </h2>
          <p class="text-[14px] font-normal tracking-[0.15px]" :class="descColor ? '' : 'text-[#333333]'"
            :style="{ color: descColor }">
            {{ description }}
          </p>
        </div>
      </div>



      <!-- CTA Button or Label -->
      <div>
        <Button v-if="showButton" :variant="buttonVariant" :state="buttonState" :size="buttonSize">
          {{ buttonText }}
        </Button>

        <span v-else class="block text-center text-[14px] font-semibold text-[#0101FD]">
          {{ labelText }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue'

defineProps({
  /* Texts */
  title: {
    type: String,
    default: 'Ajansınızın Görünürlüğünü ve Başarısını Katlayın',
  },
  description: {
    type: String,
    default:
      'Türkiye’nin en görünür ajans platformunda yerinizi alın, markaların sizi keşfetmesine izin verin. Şimdi kaydolun, fırsatları kaçırmayın.',
  },

  /* Icon */
  showIcon: { type: Boolean, default: false },
  iconSrc: { type: String, default: '' },

  /* Colors */
  titleColor: { type: String, default: '#0101FD' },
  descColor: { type: String, default: '#333333' },

  /* CTA / Button */
  showButton: { type: Boolean, default: true },
  buttonText: { type: String, default: 'Hemen Kayıt Ol - Ücretsiz' },
  buttonVariant: { type: String, default: 'Secondary' },
  buttonState: { type: String, default: 'Default' },
  buttonSize: { type: String, default: 'Medium' },

  /* Optional Label (for icon version) */
  labelText: {
    type: String,
    default: 'Teklif Al - Ücretsiz',
  },
})
</script>
