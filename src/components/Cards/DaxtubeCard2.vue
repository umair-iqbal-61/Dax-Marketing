<template>
  <div class="w-[424px] h-[578px] px-5 pt-5 py-5 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)] rounded-[20px] gap-2.5">
    <div class="w-[384px] flex flex-col gap-[23px]" :style="{ backgroundColor: cardBg }">
      <!-- Image Placeholder -->
      <div class="overflow-hidden flex items-center justify-center rounded-[12px]" :style="{
        width: imageWidth + 'px',
        height: imageHeight + 'px',
        backgroundColor: imageBg,
      }">
        <!-- Main Background Image -->
        <img v-if="imgSrc" :src="imgSrc" :alt="title" class="w-full h-full object-cover"
          :style="{ opacity: imageOpacity }" />
      </div>

      <!-- Overlay Image -->
      <img v-if="overlayImg" :src="overlayImg" alt="" class="w-[154px] rounded-xl object-contain" />
      <!-- Text Content -->
      <div class="flex flex-col justify-around w-[384px] gap-5 mt-2">
        <h4 class="text-[16px] font-bold tracking-[0.5px] " :style="{ color: titleColor }">
          {{ title }}
        </h4>

        <p class="text-[14px] font-normal" :style="{ color: descriptionColor }">
          {{ description }}
        </p>

        <div class="flex items-center gap-2 mt-1 mb-4">
          <span v-if="readTime" class="text-[14px] font-normal" :style="{ color: readTimeColor }">
            {{ readTime }}
          </span>

          <span v-if="readTime && date" class="text-[#333333]">|</span>

          <span v-if="date" class="text-[14px] font-medium" :style="{ color: dateColor }">
            {{ date }}
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'QNB Türkiye, Net Sıfır Olma Sözü Veriyor',
  },
  description: {
    type: String,
    default:
      '“Herkes QNB’ye geçiyor” diyerek iletişim çalışmalarına devam eden QNB Türkiye, sürdürülebilirliği odağına alan yeni reklam filmiyle izleyicinin karşısına çıkıyor.',
  },
  date: {
    type: String,
    default: '3 Eyl 25',
  },
  imgSrc: {
    type: String,
    default: '',
  },
  overlayImg: {
    type: String,
    default: '',
  },
  imageWidth: {
    type: Number,
    default: 384,
  },
  imageHeight: {
    type: Number,
    default: 196,
  },

  cardBg: {
    type: String,
    default: 'white',
  },
  imageBg: {
    type: String,
    default: '#E8F6FF', // bg color for empty image space
  },
  imageOpacity: {
    type: Number,
    default: 1,
  },
  titleColor: {
    type: String,
    default: '#333333', // title text color
  },
  descriptionColor: {
    type: String,
    default: '#333333', // description text color
  },

  readTime: {
    type: String,
    default: '',
  },
  readTimeColor: {
    type: String,
    default: '#464646',
  },

  dateColor: {
    type: String,
    default: '#333333', // date text color
  },
});
</script>
