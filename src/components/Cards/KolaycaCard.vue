<template>
  <div class="w-[310px] h-[349px] border-l border-[#F7F9FA] flex flex-col items-center justify-start">
    <!-- Top Number -->
    <div class="w-[124px] h-[96px] flex items-center justify-center mb-10">
      <span
        class="text-[123px] font-bold bg-gradient-to-b from-[#0000FF] from-20% to-[#FFFFFF] to-90% text-transparent bg-clip-text leading-none">
        {{ number }}
      </span>
    </div>

    <div class="px-4 flex flex-col gap-2.5">
      <!-- Heading -->
      <h3
        class="font-inter font-[600] text-[20px] leading-[24px] tracking-[-0.03em] text-center text-[#0000FF] px-2 mt-[16px]">
        {{ title }}
      </h3>

      <!-- Description -->
      <p
        class="font-inter font-[400] text-[16px] leading-[29.84px] tracking-[-0.03em] text-center text-[#636363] px-2 mt-[12px] w-[270px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  number: {
    type: [String, Number],
    default: '01',
  },
  title: {
    type: String,
    default: 'Kolayca Ücretsiz Kayıt Ol',
  },
  description: {
    type: String,
    default:
      'Ücretsiz olarak platformumuza katılın ve uzman ajanslar arayan potansiyel müşterilerden oluşan geniş bir ağa erişim sağlayın.',
  },
})
</script>
