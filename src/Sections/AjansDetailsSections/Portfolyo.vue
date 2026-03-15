<template>
  <div
    class="max-w-[984px] h-fit px-6 py-10 flex flex-col gap-[18px] bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

    <div class="w-full h-fit flex flex-col gap-7">
      <!-- Heading -->
      <h3 class="text-2xl font-bold text-[#333333]">
        Ajans Gündem
      </h3>
      <NewsTabsAjansDetails activeBgColor="#FFF4E5" activeTextColor="#F89402" />
    </div>

    <!-- NewsCards -->
    <!-- First Card -->
    <div class="w-full h-fit flex flex-col md:flex-row gap-[23px]">
      <!-- Image Placeholder -->
      <img src="/portfolio-iact.png" class="w-fit h-fit object-cover rounded-[12px]" />

      <!-- Text Content -->
      <div class="w-full h-full flex flex-col justify-center gap-1 ">
        <div class="w-fit h-[41px] rounded-full px-[26px] bg-[#FFF4E5] flex items-center">
          <span class="font-medium text-[14px] text-[#F89402]">UI/UX Tasarım</span>
        </div>
        <h4 class="text-[24px] font-bold text-[#333333]">
          IACT bir marka güncellemesi ve web tasarımı
        </h4>

        <p class="line-clamp-1 text-[14px] text-[#333333]">
          Lorem ipsum dolor sit amet consectetur. Lacus egestas sagittis diam enim tincidunt mauris enim arcu.
          Elementum nunc donec nam nisi sollicitudin.
        </p>
        <span class="text-[14px] font-medium text-[#333333]">
          8 Eyl 25
        </span>
      </div>
    </div>

    <!-- Second Card -->
    <div class="w-full h-fit flex flex-col md:flex-row gap-[23px]">
      <!-- Image Placeholder -->
      <img src="/portfolio-mellow.png" class="w-fit h-fit object-cover rounded-[12px]" />

      <!-- Text Content -->
      <div class="w-full h-full flex flex-col justify-center gap-1 ">
        <div class="w-fit h-[41px] rounded-full px-[26px] bg-[#FFF4E5] flex items-center">
          <span class="font-medium text-[14px] text-[#F89402]">UI/UX Tasarım</span>
        </div>
        <h4 class="text-[24px] font-bold text-[#333333]">
          Mellow web sitesi tasarımı
        </h4>

        <p class="line-clamp-1 text-[14px] text-[#333333]">
          Lorem ipsum dolor sit amet consectetur. Lacus egestas sagittis diam enim tincidunt mauris enim arcu.
          Elementum nunc donec nam nisi sollicitudin.
        </p>
        <span class="text-[14px] font-medium text-[#333333]">
          8 Eyl 25
        </span>
      </div>
    </div>

    <!-- Third Card -->
    <div class="w-full h-fit flex flex-col md:flex-row gap-[23px]">
      <!-- Image Placeholder -->
      <img src="/portfolio-mellow.png" class="w-fit h-fit object-cover rounded-[12px]" />

      <!-- Text Content -->
      <div class="w-full h-full flex flex-col justify-center gap-1 ">
        <div class="w-fit h-[41px] rounded-full px-[26px] bg-[#FFF4E5] flex items-center">
          <span class="font-medium text-[14px] text-[#F89402]">UI/UX Tasarım</span>
        </div>
        <h4 class="text-[24px] font-bold text-[#333333]">
          Mellow web sitesi tasarımı
        </h4>

        <p class="line-clamp-1 text-[14px] text-[#333333]">
          Lorem ipsum dolor sit amet consectetur. Lacus egestas sagittis diam enim tincidunt mauris enim arcu.
          Elementum nunc donec nam nisi sollicitudin.
        </p>
        <span class="text-[14px] font-medium text-[#333333]">
          8 Eyl 25
        </span>
      </div>
    </div>

    <!-- Fourth Card -->
    <div class="w-full h-fit flex flex-col md:flex-row gap-[23px]">
      <!-- Image Placeholder -->
      <img src="/portfolio-mellow.png" class="w-fit h-fit object-cover rounded-[12px]" />

      <!-- Text Content -->
      <div class="w-full h-full flex flex-col justify-center gap-1 ">
        <div class="w-fit h-[41px] rounded-full px-[26px] bg-[#FFF4E5] flex items-center">
          <span class="font-medium text-[14px] text-[#F89402]">UI/UX Tasarım</span>
        </div>
        <h4 class="text-[24px] font-bold text-[#333333]">
          Mellow web sitesi tasarımı
        </h4>

        <p class="line-clamp-1 text-[14px] text-[#333333]">
          Lorem ipsum dolor sit amet consectetur. Lacus egestas sagittis diam enim tincidunt mauris enim arcu.
          Elementum nunc donec nam nisi sollicitudin.
        </p>
        <span class="text-[14px] font-medium text-[#333333]">
          8 Eyl 25
        </span>
      </div>
    </div>

    <!-- Fifth Card -->
    <div class="w-full h-fit flex flex-col md:flex-row gap-[23px]">
      <!-- Image Placeholder -->
      <img src="/portfolio-mellow.png" class="w-fit h-fit object-cover rounded-[12px]" />

      <!-- Text Content -->
      <div class="w-full h-full flex flex-col justify-center gap-1 ">
        <div class="w-fit h-[41px] rounded-full px-[26px] bg-[#FFF4E5] flex items-center">
          <span class="font-medium text-[14px] text-[#F89402]">UI/UX Tasarım</span>
        </div>
        <h4 class="text-[24px] font-bold text-[#333333]">
          Mellow web sitesi tasarımı
        </h4>

        <p class="line-clamp-1 text-[14px] text-[#333333]">
          Lorem ipsum dolor sit amet consectetur. Lacus egestas sagittis diam enim tincidunt mauris enim arcu.
          Elementum nunc donec nam nisi sollicitudin.
        </p>
        <span class="text-[14px] font-medium text-[#333333]">
          8 Eyl 25
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsTabsAjansDetails from './NewsTabsAjansDetails.vue';

</script>