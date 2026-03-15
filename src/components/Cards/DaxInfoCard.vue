<template>
  <div class="flex flex-col w-full h-full rounded-[20px] p-5 bg-white" :style="{ gap: gapSize }">
    <!-- Icon -->
    <img :src="iconSrc" alt="icon" class="w-fit h-fit object-contain" />

    <!-- Title -->
    <h6 class="font-poppins font-bold tracking-[0.15px] text-black" :style="{ fontSize: titleFontSize }">
      {{ title }}
    </h6>

    <!-- Description -->
    <Body1 class="font-poppins font-normal tracking-[0.5px] text-black" :style="{ fontSize: descriptionFontSize }">
      {{ description }}
    </Body1>
  </div>
</template>

<script setup>
const props = defineProps({
  /* Icon */
  iconSrc: {
    type: String,
    default: '/icons/default-icon.png',
  },

  /* Text Content */
  title: {
    type: String,
    default: 'DAX Hakkında',
  },
  description: {
    type: String,
    default:
      'Markanız için en iyi ajansı keşfetmek, dijital pazarlama, web geliştirme, sosyal medya yönetimi ve daha birçok alanda profesyonel destek almanızı sağlar.',
  },

  /* ✅ Dynamic Font Sizes */
  titleFontSize: {
    type: String,
    default: '20px',
  },
  descriptionFontSize: {
    type: String,
    default: '16px',
  },
  gapSize: {
    type: String,
    default: '12px',
  },
})
</script>
