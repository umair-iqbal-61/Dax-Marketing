<template>
  <div
    class="w-full h-fit flex flex-col gap-[18px] rounded-[12px] p-[20px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] border border-[#F0F0F0]">
    <!-- === UPPER ROW == -->
    <div class="flex justify-between items-start w-full h-fit">
      <div class="w-fit h-fit flex gap-[23px]">

        <!-- Left: Image -->
        <img :src="image" class="w-fit h-fit" />

        <!-- Middle: Info -->
        <div class="flex flex-col gap-2 justify-between w-full ">
          <!-- Name + Verified -->
          <div class="flex items-center gap-2">
            <h3 class="font-semibold text-[16px] tracking-[0.15px] text-[#333333]">
              {{ name }}
            </h3>

            <!-- Verified Badge -->
            <img src="/icons/Trusted.svg" alt="" class="w-fit h-fit">
            <!-- Agency Badge -->
            <img src="/icons/Agency-badge.svg" alt="" class="w-fit h-fit">
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-[4px]">
            <span class="text-[16px] font-normal font-poppins text-[#333]">
              {{ rating }}
            </span>
            <img src="/icons/Star.svg" alt="">
            <span class="text-[14px] font-medium font-poppins text-[#0101FD]">
              {{ reviews }}
            </span>
            <span class="text-[14px] font-normal font-poppins text-[#0101FD]">reviews</span>
          </div>

          <!-- Category Tag -->
          <div
            class="w-fit h-fit border border-[#D9D9D9] rounded-[4px] px-2 py-1 shadow-[0px_1px_4px_0px_#0000001F] flex items-center justify-center">
            <span class="text-[12px] font-normal text-[#333333] font-poppins">
              {{ category }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right: Button -->
      <div class="hidden md:flex w-full md:w-[133px]">
        <Button variant="Primary" state="Default" size="Medium" class="w-full border-[#01017A] text-[#01017A]">
          Profili Gör
        </Button>
      </div>
    </div>

    <!-- == MIDDLE TEXT == -->
    <p class="font-normal text-[14px] tracking-[0.25px] text-[#333333]">
      {{ description }}
    </p>

    <!-- == BOTTOM INFO BOX == -->
    <div class="w-full h-fit bg-[#F8F8FA] rounded-[12px] border-[0.4px] border-[#D9D9D9] p-5">
      <div class="w-full flex flex-col md:flex-row items-start md:items-center justify-around gap-3 md:gap-14">
        <!-- Employees -->
        <div class="flex items-center gap-3 h-fit">
          <img class="w-fit h-fit" src="/icons/Employees.svg" alt="">

          <div class="flex items-center gap-1">
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">{{ employees }}</span>
            <span class="text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">çalışan</span>
          </div>
        </div>

        <!-- Price -->
        <div class="flex items-center gap-3 h-fit">
          <img class="w-fit h-fit" src="/icons/Price.svg" alt="">

          <div class="flex items-center gap-1">
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">{{ price }}</span>
            <span class="hidden md:flex text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">'den
              başlayan</span>
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]"> {{ category }}</span>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-3 h-fit">
          <img class="w-fit h-fit" src="/icons/Location.svg" alt="">

          <div class="flex items-center gap-1">
            <span class="text-[12px] font-[400] font-poppins tracking-[0.25px] text-[#333333]">Konum</span>
            <span class="text-[12px] font-[700] font-poppins tracking-[0.25px] text-[#01017A]">{{ location }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom: Button -->
    <div class="flex md:hidden w-full md:w-[133px]">
      <Button variant="Primary" state="Default" size="Medium" class="w-full border-[#01017A] text-[#01017A]">
        Profili Gör
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue'

defineProps({
  image: String,
  name: String,
  verified: Boolean,
  rating: String,
  reviews: String,
  category: String,
  description: String,
  employees: String,
  price: String,
  location: String,
})
</script>
