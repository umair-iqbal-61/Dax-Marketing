<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-fit mt-[43px] lg:mt-[68px]">
    <div class="p-10 flex flex-col gap-8 rounded-[20px] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.1)] ">
      <!-- Top Heading -->
      <div class="h-fit flex items-center justify-between pl-[6px]">
        <h2 class="font-poppins font-[700] text-2xl md:text-[28px] lg:text-[32px] tracking-[0.25px] text-[#333333]">
          DAX Reklam alanlarında yerinizi alın
        </h2>
      </div>

      <div class="flex flex-col gap-9">

        <!-- Form Fields Grid -->
        <div
          class="w-full h-fit md:max-h-[242px] overflow-hidden md:grid md:grid-cols-2 gap-6 md:grid-rows-3 md:gap-x-[24px] md:gap-y-[36px]">
          <!-- Name -->
          <div class="flex flex-col gap-[8px] w-full">
            <label class="font-normal text-[16px] tracking-[0.15px] text-[#333333]">
              Label
            </label>
            <div
              class="flex items-center gap-[12px] w-full h-fit border border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px]">
              <img src="/icons/User.svg">
              <input type="text" placeholder="İsminizi giriniz."
                class="w-full font-normal text-[16px] text-[#999999] outline-none" />
            </div>
          </div>

          <!-- Phone -->
          <div class="flex flex-col gap-[8px] w-full h-fit">
            <label class="font-poppins font-[400] text-[16px] tracking-[0.15px] text-[#333333]">
              Telefon numarası
            </label>
            <div
              class="flex items-center gap-[12px] w-full h-fit border border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px]">
              <select
                class="w-fit h-fit bg-[#F9FAFB] border border-[#DFDFDF] rounded-[4px] text-[14px] p-[4px] outline-none text-[#818181]">
                <option>+90</option>
              </select>
              <input type="text" placeholder="Numaranızı giriniz"
                class="w-full font-poppins font-[400] text-[16px] text-[#999999] outline-none" />
            </div>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-[8px] w-full h-fit">
            <label class="font-poppins font-[400] text-[16px] tracking-[0.15px] text-[#333333]">
              Label
            </label>
            <div
              class="flex items-center gap-[12px] w-full h-fit border border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px]">
              <img src="/icons/Mail.svg" alt="">
              <input type="email" placeholder="İsminizi giriniz."
                class="w-full font-poppins font-[400] text-[16px] text-[#999999] outline-none" />
            </div>
          </div>

          <!-- Company -->
          <div class="flex flex-col gap-[8px] w-full h-fit">
            <label class="font-poppins font-[400] text-[16px] tracking-[0.15px] text-[#333333]">
              Firma ismi
            </label>
            <div
              class="flex items-center gap-[12px] w-full h-fit border border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px]">
              <input type="text" placeholder="Şirket ismi giriniz"
                class="w-full font-poppins font-[400] text-[16px] text-[#999999] outline-none" />
            </div>
          </div>

          <!-- Terms -->
          <div class="flex items-center gap-[8px] w-full h-fit col-span-2 mt-[10px]">
            <input type="checkbox" class="w-[16px] h-[16px] border border-[#999999] rounded-[4px] cursor-pointer" />
            <p class="font-inter text-[16px] text-[#333333]">
              I have read, understood, and agree to the
              <span class="font-poppins font-[700] text-[#0101FD] cursor-pointer"> Terms and Conditions </span>
              and
              <span class="font-poppins font-[700] text-[#0101FD] cursor-pointer"> Privacy Policy. </span>
            </p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="w-full md:w-[227px] h-[45px]">
        <Button class="w-full" variant="Secondary" state="Default" size="Medium">Hemen Teklif Al</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../../components/Button/Button.vue';
</script>
