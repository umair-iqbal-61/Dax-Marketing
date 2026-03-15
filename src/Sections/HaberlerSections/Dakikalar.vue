<template>
  <section
    class="max-w-[1440px] w-full lg:h-[304px] mx-auto px-4 lg:px-[60px] flex flex-col lg:flex-row gap-[28px] mt-[43px] lg:mt-[68px]">

    <!-- LEFT DIV -->
    <div
      class="min-h-[304px] h-auto flex flex-col md:flex-row items-center justify-between border border-[#0101FD] bg-white px-4 md:px-10 p-10 shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[60px] md:gap-[4px] overflow-hidden">

      <div class="flex flex-col justify-between gap-8 md:gap-7 w-full flex-shrink">
        <div class="flex flex-col gap-1 md:gap-2 lg:min-h-[100px] flex-shrink">
          <div v-if="showLeftIcon" class="flex items-center justify-center w-[36px] h-[36px] rounded-[100px]"
            :style="{ backgroundColor: leftIconBg }">
            <img :src="leftIconSrc" alt="icon" />
          </div>

          <h5 class="text-[24px] font-bold leading-tight" :style="{ color: leftTitleColor }">
            {{ leftTitle }}
          </h5>

          <subtitle1 class="text-[20px] font-normal tracking-[0.15px] leading-snug" :style="{ color: leftDescColor }">
            {{ leftDescription }}
          </subtitle1>
        </div>

        <div>
          <Button v-if="showLeftButton" class="w-full md:w-[227px]" variant="Secondary" state="Default" size="Medium">
            {{ leftButtonText }}
          </Button>
          <span v-else class="block text-[14px] font-semibold text-[#0101FD]">
            {{ leftLabelText }}
          </span>
        </div>
      </div>

      <img :src="leftImage" alt="illustration"
        class="w-full md:w-auto lg:max-w-[40%] h-fit lg:max-h-[304px] object-contain rounded-[12px] overflow-hidden" />
    </div>



    <!-- RIGHT DIV -->
    <template v-if="!onlyImage">
      <div :class="[
        'w-full lg:w-fit flex items-center justify-between bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[12px] gap-[23px]',
        onlyImage ? '' : 'border border-[#0101FD]'
      ]">

        <div class="w-full lg:w-[374px] flex flex-col justify-between gap-8 lg:py-9">
          <div class="flex flex-col gap-1">
            <h5 class="text-xl md:text-2xl font-bold text-[#0101FD]">
              Ajansınızın Görünürlüğünü ve Başarısını Katlayın
            </h5>
            <p class="text-[14px] font-normal text-[#333333] tracking-[0.25px]">
              Türkiye’nin en görünür ajans platformunda yerinizi alın, markaların sizi keşfetmesine izin verin. Şimdi
              kaydolun, fırsatları kaçırmayın.
            </p>
          </div>
          <div>
            <Button class="w-full md:w-[227px]" variant="Secondary" state="Default" size="Medium">Hemen Kayıt Ol -
              Ücretsiz</Button>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <img src="/slider-image-small.png" alt="right section"
        class="md:hidden lg:block w-fit h-[304px] object-contain rounded-[12px]" />
    </template>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue'

defineProps({
  showLeftIcon: { type: Boolean, default: true },
  leftIconSrc: { type: String, default: '/icons/Logo-3(white).svg' },
  leftIconBg: { type: String, default: '#0101FD' },

  leftTitle: {
    type: String,
    default: 'Dakikalar içinde ajansınızı bulun, karşılaştırın.',
  },
  leftTitleColor: { type: String, default: '#0101FD' },

  leftDescription: {
    type: String,
    default:
      'Firmaların portfolyolarını ve müşteri yorumlarını incele. Sorularını sor. Dilediğin iletişim kanalı ile detaylar üzerinde anlaş.',
  },
  leftDescColor: { type: String, default: '#333333' },

  showLeftButton: { type: Boolean, default: true },
  leftButtonText: { type: String, default: 'Teklif Al - Ücretsiz' },
  leftLabelText: { type: String, default: '' },

  leftImage: { type: String, default: '/dakikalar-img.png' },

  onlyImage: { type: Boolean, default: false },
  rightImage: { type: String, default: '' },
})
</script>
