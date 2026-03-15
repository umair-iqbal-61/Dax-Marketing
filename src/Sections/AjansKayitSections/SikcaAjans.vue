<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] flex flex-col gap-10">
    <div class="w-full flex gap-5">
      <div class="w-full font-black text-2xl md:text-[32px] text-[#333333] tracking-[0.25px]">
        <h2>{{ title }}</h2>
      </div>
      <div class="flex items-center justify-end gap-[6px] w-fit h-fit">
        <!-- Left Arrow (inactive) -->
        <div class="w-[28px] h-[28px] flex items-center justify-center rounded-full p-[4px] cursor-not-allowed">
          <img src="/icons/Chevron-right-gray.svg" alt="" class="rotate-180 w-fit h-fit">
        </div>

        <!-- Right Arrow (active) -->
        <div
          class="w-[40px] h-[40px] flex items-center justify-center rounded-full p-[8px] bg-[#FFFFFF] border border-[#D9D9D9] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer">
          <img src="/icons/Chevron-right-gray.svg" alt="" class="w-fit h-fit">
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <div
        class="w-full flex p-4 gap-4 border-b-[0.6px] bg-[#FBFCFD] border-[#D9D9D9] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] rounded-xl">
        <div class="w-full flex gap-5">
          <p class="w-full text-[#333333]">Dijital pazarlama nedir?</p>
          <Icon icon="mdi:plus" class="inline-block text-[20px] text-[#B3B3B3]" />
        </div>
      </div>
      <div
        class="w-full flex p-4 gap-4 border-b-[0.6px] bg-[#FBFCFD] border-[#D9D9D9] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] rounded-xl">
        <div class="w-full flex gap-5">
          <p class="w-full text-[#333333]">Dijital pazarlama ajansı nedir?</p>
          <Icon icon="mdi:plus" class="inline-block text-[20px] text-[#B3B3B3]" />
        </div>
      </div>
      <div
        class="w-full flex p-4 gap-4 border-b-[0.6px] bg-[#FBFCFD] border-[#D9D9D9] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] rounded-xl">
        <div class="w-full flex gap-5">
          <p class="w-full text-[#333333]">Bir dijital pazarlama ajansı ne yapıyor?</p>
          <Icon icon="mdi:plus" class="inline-block text-[20px] text-[#B3B3B3]" />
        </div>
      </div>
      <div
        class="w-full flex p-4 gap-4 border-b-[0.6px] bg-[#FBFCFD] border-[#D9D9D9] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] rounded-xl">
        <div class="w-full flex gap-5">
          <p class="w-full text-[#333333]">Bölgelere göre önde gelen dijital pazarlama ajansları</p>
          <Icon icon="mdi:plus" class="inline-block text-[20px] text-[#B3B3B3]" />
        </div>
      </div>
      <div
        class="w-full flex p-4 gap-4 border-b-[0.6px] bg-[#FBFCFD] border-[#D9D9D9] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)] rounded-xl">
        <div class="w-full flex gap-5">
          <p class="w-full text-[#333333]">Ülkeye göre dijital pazarlama endüstrisi istihdamı</p>
          <Icon icon="mdi:plus" class="inline-block text-[20px] text-[#B3B3B3]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: 'Sıkça Sorulan Sorular',
  }
});
</script>