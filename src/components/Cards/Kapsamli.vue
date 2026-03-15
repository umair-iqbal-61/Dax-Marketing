<template>
  <div
    class="w-full h-fit flex flex-col gap-5 rounded-[8px] border-[0.6px] border-[#E5E5E5] py-5 bg-white shadow-[0px_1px_4px_0px_var(--sds-color-black-100)]">
    <!-- ========== TOP SECTION ========== -->
    <div class="w-full h-fit flex flex-col gap-2 px-2.5 md:px-5">
      <!-- Title -->
      <Subtitle1 class="font-poppins font-bold text-[16px] tracking-[0.15px] text-[#333333]">
        {{ title }}
      </Subtitle1>

      <!-- Category Tag -->
      <div class="w-fit flex items-center justify-center border border-[#D9D9D9] rounded-[4px] px-2 py-1">
        <span class="font-poppins font-[400] text-[12px] tracking-[0.25px] text-[#333333]">
          {{ category }}
        </span>
      </div>
    </div>

    <!-- == DESCRIPTION + FOOTER == -->
    <div class="flex flex-col gap-[20px] px-2.5 md:px-5">
      <!-- Description -->
      <p class="font-inter font-[400] text-[14px] leading-[28px] tracking-[-0.03em] text-[#999999] line-clamp-3 overflow-hidden text-ellipsis"
        style="line-clamp: 3; -webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical;">
        {{ description }}
      </p>

      <!-- Footer Row -->
      <div class="w-full h-fit flex justify-between items-center">
        <!-- Left: Date -->
        <span class="font-poppins font-medium text-[14px] tracking-[0.1px] text-[#333333]">
          {{ date }}
        </span>

        <!-- Right: Price Tag -->
        <div class="flex items-center gap-2 bg-[#D9E3FF] rounded-full pl-2 pr-3 py-[8px]">
          <!-- Dollar Icon -->
          <img src="/icons/Dollar.svg" class="w-fit h-fit">

          <!-- Price Texts -->
          <div class="w-fit h-fit flex items-center gap-[4px]">
            <span class="font-poppins font-[400] text-[12px] tracking-[0.25px] text-[#01017A]">Başlangıç fiyatı</span>
            <span class="font-poppins font-[700] text-[12px] tracking-[0.25px] text-[#01017A]">{{ price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Kapsamlı Sosyal Medya Stratejisi Geliştirme',
  },
  category: {
    type: String,
    default: 'Dijital Pazarlama',
  },
  description: {
    type: String,
    default:
      'Çevrimiçi varlığımızı ve etkileşimimizi artırmak için kapsamlı bir sosyal medya stratejisine ihtiyacım var. Bu; içerik üretimi, hedefli reklamcılık ve kampanya yönetimini içeriyor.',
  },
  date: {
    type: String,
    default: '3 Eyl 25',
  },
  price: {
    type: String,
    default: '50,000₺',
  },
})
</script>
