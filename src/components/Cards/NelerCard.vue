<template>
  <div
    class="max-w-[424px] h-[255px] rounded-[20px] px-5 pt-5 pb-10 bg-white shadow-[0px_1px_4px_0px_var(--sds-color-black-100)]">
    <div class="flex flex-col w-[384px] gap-[23px]">
      <!-- Icon -->
      <div class="w-[50px] h-[48px] rounded-[100px] flex items-center justify-center overflow-hidden">
        <img :src="iconSrc" :alt="title" class="w-full h-full object-contain" />
      </div>

      <!-- Text Content -->
      <div class="flex flex-col w-full gap-5">
        <h5 class="font-bold tracking-[0.5px] text-[#333333]">
          {{ title }}
        </h5>
        <p class="text-[14px] text-[#333333] tracking-[0.25px]">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  iconSrc: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'Haber, Proje, Bülten Yayını',
  },
  description: {
    type: String,
    default:
      'Ajansınızın yaratıcı projeleri, haberleri ve basın bültenleri dijitalajanslar.com’da yayınlanır; böylece görünürlüğünüz ve web trafiğiniz artar.',
  },
})
</script>
