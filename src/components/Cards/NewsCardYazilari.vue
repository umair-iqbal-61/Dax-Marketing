<template>
  <div class="flex flex-col md:flex-row items-center gap-[23px] w-full h-fit">
    <!-- Left Image -->
    <img :src="imgSrc" class="w-full md:w-[141px] md:h-[153px] h-fit rounded-xl object-cover object-center" />

    <!-- Right Content -->
    <div class="flex flex-col justify-center gap-3 md:gap-1 w-full h-fit lg:w-[513px] lg:h-[153px]">
      <!-- Title -->
      <h3 class="font-poppins font-bold text-[16px] tracking-[0.5px] text-[#333333]">
        {{ title }}
      </h3>
      <p class="font-normal text-[14px] tracking-[0.25px] text-[#333333]">
        {{ description }}
      </p>

      <!-- Info Row -->
      <div class="flex justify-between items-center w-full h-fit">
        <div class="flex flex-col md:flex-row items-center gap-[8px] w-fit h-fit">
          <!-- Author (only if exists) -->
          <template v-if="author">
            <span class="font-bold text-[14px] tracking-[0.1px] text-[#333333]">
              {{ author }}
            </span>
          </template>

          <!-- Divider (only if both author and readTime exist) -->
          <div v-if="author && readTime"
            class="hidden md:block w-3 h-0 bg-[#464646] border-[1px] -rotate-90 border-[#464646]">
          </div>

          <div class="flex items-center gap-[8px]">
            <!-- Read Time (only if exists) -->
            <template v-if="readTime">
              <span class="font-poppins font-[500] text-[14px] tracking-[0.1px] text-[#333333]">
                {{ readTime }}
              </span>
            </template>

            <!-- Divider (only if both readTime and date exist) -->
            <div v-if="readTime && date" class="w-3 h-0 bg-[#464646] border-[1px] -rotate-90 border-[#464646]"></div>

            <!-- Date (only if exists) -->
            <template v-if="date">
              <span class="font-poppins font-[500] text-[14px] tracking-[0.1px] text-[#333333]">
                {{ date }}
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: '/news-card/yapay.png',
  },
  title: {
    type: String,
    default:
      'Yapay Zekânın Yetmediği Yer: Deneyimin Sessiz Gücü',
  },
  description: {
    type: String,
    default:
      'Creatix Digital’in Kurucusu, Mehmet Safa Yalçıntaş’ın, 10.000 müşteri görüşmesi ve birkaç yüz kitap sonrası çıkan hap fenomeninde yazısı yayında.',
  },
  author: {
    type: String,
    default: '',
  },
  readTime: {
    type: String,
    default: '7 min read',
  },
  date: {
    type: String,
    default: '29 Ağu 25',
  },
})
</script>
