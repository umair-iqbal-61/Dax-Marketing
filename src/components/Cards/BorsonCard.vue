<template>
  <div
    class="w-full px-5 pt-5 pb-10 flex items-start bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] gap-2.5">
    <div class="w-full flex flex-col gap-[23px]" :style="{ backgroundColor: cardBg }">
      <!-- Image -->
      <img v-if="imgSrc" :src="imgSrc" :alt="title" class="w-full h-full object-cover" />

      <!-- Text -->
      <div class="flex flex-col justify-around gap-5">
        <h4 class="text-[16px] font-bold tracking-[0.5px]" :style="{ color: titleColor }">
          {{ title }}
        </h4>

        <p class="text-[14px] font-normal" :style="{ color: descriptionColor }">
          {{ description }}
        </p>

        <!-- Dynamic footer section -->
        <div class="flex items-center justify-between">
          <!-- Optional event info -->
          <span v-if="eventDate" class="hidden lg:inline text-[14px] font-medium" :style="{ color: eventColor }">
            Etkinlik Tarihi: {{ eventDate }}
          </span>

          <span v-if="eventDate && date" class="text-[#333333] hidden lg:inline">|</span>

          <!-- Read time + Date row -->
          <div class="flex items-center gap-2">
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
  </div>
</template>

<script setup>
defineProps({
  /* Basic Info */
  title: {
    type: String,
    default: 'QNB Türkiye, Net Sıfır Olma Sözü Veriyor',
  },
  description: {
    type: String,
    default:
      '“Herkes QNB’ye geçiyor” diyerek iletişim çalışmalarına devam eden QNB Türkiye, sürdürülebilirliği odağına alan yeni reklam filmiyle izleyicinin karşısına çıkıyor.',
  },
  date: { type: String, default: '3 Eyl 25' },
  readTime: { type: String, default: '' },
  imgSrc: { type: String, default: '' },
  imageWidth: { type: Number, default: 384 },

  /* Optional Event Info */
  eventDate: { type: String, default: '' },
  eventColor: { type: String, default: '#333333' },

  /* Styles */
  cardBg: { type: String, default: 'transparent' },
  imageBg: { type: String, default: '#E8F6FF' },
  titleColor: { type: String, default: '#333333' },
  descriptionColor: { type: String, default: '#333333' },
  readTimeColor: { type: String, default: '#464646' },
  dateColor: { type: String, default: '#333333' },
})
</script>
