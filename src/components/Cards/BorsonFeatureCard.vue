<template>
  <div class="w-full lg:w-[875px] h-[409px] rounded-[20px] overflow-hidden flex flex-col bg-[#98c997]">
    <!-- Background Image -->
    <div class="flex-1 relative">
      <img v-if="imgSrc" :src="imgSrc" :alt="title" class="w-full h-full object-cover rounded-t-[20px]" />
    </div>

    <!-- CONTENT -->
    <div class="flex flex-col gap-[12px] text-white p-[18px_40px] rounded-b-[20px]">
      <!-- ✅ Dynamic Top Label -->
      <div v-if="showTag" class="flex items-center gap-[8px] w-fit">
        <template v-if="isTagButton">
          <!-- Button style -->
          <div
            class="flex items-center gap-[8px] bg-[#F9F9FF] rounded-full px-[24px] py-[6px] text-[#2563EB] text-[14px] font-semibold">
            <img v-if="tagIcon" :src="tagIcon" alt="icon" class="w-[16px] h-[16px]" />
            <span class="text-[#0101FD] text-[16px] font-bold">{{ tagText }}</span>
          </div>
        </template>

        <template v-else>
          <!-- Plain text style -->
          <span class="text-[#333333] text-[16px] font-normal tracking-[0.15px]">
            {{ tagText }}
          </span>
        </template>
      </div>

      <!-- Title -->
      <h3 class="font-[700] text-[32px] tracking-[0.25px] font-['Poppins']" :style="{ color: titleColor }">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="font-[400] text-[16px] tracking-[0.15px] font-['Poppins']" :style="{ color: descriptionColor }">
        {{ description }}
      </p>

      <!-- Date -->
      <span class="text-[16px] font-[400] tracking-[0.15px] mt-[8px] font-['Poppins']" :style="{ color: dateColor }">
        {{ date }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  /* ✅ Content Props */
  title: {
    type: String,
    default: 'Borsan Web Sitesinde Clockwork İmzası!',
  },
  description: {
    type: String,
    default:
      'Türkiye’nin köklü kablo üreticilerinden olan Borsan, dijital dünyadaki varlığını güçlendirmek adına web sitesini Clockwork’ün deneyimi ile baştan sona yeniledi.',
  },
  date: {
    type: String,
    default: '2 Tem 25',
  },
  imgSrc: {
    type: String,
    default: '',
  },

  /* ✅ Text Colors */
  titleColor: { type: String, default: '#FFFFFF' },
  descriptionColor: { type: String, default: '#FFFFFF' },
  dateColor: { type: String, default: '#FFFFFF' },

  /* ✅ Tag Configuration */
  showTag: { type: Boolean, default: true }, // hide/show top tag
  isTagButton: { type: Boolean, default: true }, // true = button style, false = plain text
  tagText: { type: String, default: 'Sponsorlu İçerik' },
  tagIcon: { type: String, default: '' }, // optional icon path
})
</script>
