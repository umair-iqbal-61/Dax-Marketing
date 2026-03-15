<template>
  <div class="max-w-[984px] w-full h-fit flex px-6 py-10 gap-[18px] flex-col bg-white rounded-[20px]">
    <div class="w-full h-fit flex gap-7">
      <h5 class="font-bold text-2xl">
        Servisler
      </h5>
    </div>
    <div class="w-fit h-fit flex gap-[18px]">
      <button class="w-fit h-[41px] px-[26px] rounded-full bg-[#FFF4E5] text-[14px] font-medium text-[#F89402]"
        v-for="tab in middleTabs" :key="tab">
        {{ tab }}
      </button>
    </div>
    <div class="w-fit h-fit flex gap-[18px]">
      <button class="w-fit h-[41px] px-[26px] rounded-full bg-[#FFF4E5] text-[14px] font-medium text-[#F89402]"
        v-for="tab in bottomTabs" :key="tab">
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script setup>

const middleTabs = [
  'Sosyal Medya',
  'Dijital Pazarlama', 'Yazılım',
  'UI/UX Tasarım', 'SEO', 'Grafik Tasarım',
]

const bottomTabs = [
  'Yazılım', 'Sosyal Medya', 'Dijital Pazarlama', 'SEO', 'Grafik Tasarım', 'UI/UX Tasarım',
]
</script>
