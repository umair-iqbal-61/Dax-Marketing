<template>
  <div
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex justify-center items-center gap-2 mt-[43px] lg:mt-[68px]">
    <button v-for="n in 6" :key="n" :class="[
      'w-[30px] h-[30px] flex items-center justify-center rounded-[100px] text-sm font-normal',
      n === 1 ? 'bg-[#0101FD] text-white' : 'bg-[#D9D9D9] text-[#01017A]'
    ]">
      {{ n }}
    </button>
    <button class="bg-transparent">
      <img src="/icons/Chevron-right.svg" alt="">
    </button>
  </div>
</template>

<script setup>

</script>
