<template>
  <div class="w-full flex flex-col gap-4 h-fit
      md:flex-row md:items-center md:gap-5 lg:gap-4 lg:h-[153px]">
    <!-- 🖼️ Image Placeholder -->
    <div class="w-full h-full md:w-[264px] md:h-[153px] rounded-xl overflow-hidden flex flex-shrink-0 items-center justify-center
        ">
      <img v-if="imgSrc" :src="imgSrc" alt="News Image" class="w-full h-full object-cover" />
    </div>

    <!-- 📝 Text Content -->
    <div class="w-full flex flex-col justify-center mt-2
        md:mt-0">
      <div class="flex flex-col gap-[4px]">
        <h4 class="text-[15px] md:text-[16px] font-bold text-[#333333]">
          {{ title }}
        </h4>
        <p class="text-[13px] md:text-[14px] font-normal text-[#333333]">
          {{ description }}
        </p>
      </div>

      <div class="flex items-center gap-1 mt-2
          md:gap-2 md:mt-[6px]">
        <!-- ⏱ Read Time -->
        <span v-if="readTime" class="text-[13px] md:text-[14px] font-normal text-[#464646]">
          {{ readTime }}
        </span>

        <!-- Divider -->
        <span v-if="readTime && date" class="text-[13px] md:text-[14px] font-normal text-[#333333]">
          |
        </span>

        <!-- 📅 Date -->
        <span v-if="date" class="text-[13px] md:text-[14px] font-medium text-[#333333]">
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
    default:
      'Türk Girişimci Cihan Nam, Yapay Zeka Destekli Fitness Stüdyosu Kurdu',
  },
  description: {
    type: String,
    default:
      'Yapay zeka, kişiselleştirilmiş antrenman planları, anlık geribildirimler ve gelişmiş sağlık takibi gibi avantajlarla spor severlerin yeni gözdesi haline geliyor.',
  },
  readTime: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '29 Ağu 25',
  },
  imgSrc: {
    type: String,
    default: '',
  },
});
</script>
