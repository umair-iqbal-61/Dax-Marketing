<template>
  <div class="w-full h-full flex items-start justify-between flex-col gap-[23px]">
    <!-- Image Placeholder -->
    <div class="w-full !h-fit md:h-full overflow-hidden flex items-center justify-center rounded-xl" :style="{
      width: imageWidth + 'px',
      height: imageHeight + 'px',
    }">
      <!-- Main Background Image -->
      <img v-if="imgSrc" :src="imgSrc" :alt="title" class="w-full h-fit object-cover" />
    </div>

    <!-- Overlay Image -->
    <img v-if="overlayImg" :src="overlayImg" alt="" class="object-contain" />

    <!-- Text Content -->
    <div class="flex flex-col justify-between gap-1 md:gap-[6px]">
      <h4 class="text-[16px] font-bold tracking-[0.5px]" :style="{ color: titleColor }">
        {{ title }}
      </h4>

      <p class="text-[14px] font-normal" :style="{ color: descriptionColor }">
        {{ description }}
      </p>

      <div class="flex items-center justify-between gap-2 mt-[4px]">
        <!-- Optional event info -->
        <span v-if="eventDate" class="text-[14px] font-medium" :style="{ color: eventColor }">
          Etkinlik Tarihi: {{ eventDate }}
        </span>

        <span v-if="eventDate && date" class="text-[#333333]">|</span>

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
  },
  imageHeight: {
    type: Number,
    default: 247,
  },

  cardBg: {
    type: String,
    default: 'transparent',
  },
  imageBg: {
    type: String,
    default: '#E8F6FF', // bg color for empty image space
  },
  titleColor: {
    type: String,
    default: 'white', // title text color
  },
  descriptionColor: {
    type: String,
    default: 'white', // description text color
  },
  /* Optional Event Info */
  eventDate: { type: String, default: '' },
  eventColor: { type: String, default: '#333333' },
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
    default: 'white', // date text color
  },
});
</script>
