<template>
  <footer class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] bg-white flex flex-col items-center py-8
      md:py-10
      lg:py-10">
    <!-- Main Container -->
    <div class="w-full flex flex-col gap-[32px]
        md:gap-[37px]">
      <!-- Logo -->
      <div class="h-[40px] md:h-[45px] lg:h-[50px]">
        <img src="/dax-logo.png" alt="Dax Marketing"
          class="w-[220px] md:w-[270px] lg:w-[325.6px] h-full object-contain" />
      </div>

      <!-- Below Div (Two Parts) -->
      <div class="flex flex-col gap-[40px]
          md:flex-row md:justify-between md:items-start md:gap-[50px]
          lg:flex-row lg:justify-between lg:items-start lg:gap-0 lg:h-[237px]">
        <!-- Left Side -->
        <div class="flex flex-col justify-start md:justify-between
            w-full md:w-[40%] lg:w-auto">
          <!-- Text -->
          <p class="text-[#666666] text-[14px] md:text-[15px] lg:text-[16px] font-[400] mb-[12px] md:mb-[16px]">
            Dijital dünyada yer almak çok kolay.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col gap-[18px] mt-2
              md:gap-[22px] md:mt-3
              lg:gap-[26px]">
            <!-- Blue Button -->
            <Button variant="Secondary" state="Default" size="Medium" class="w-fit md:w-[260px] lg:w-[263px]">
              Ajanslardan Teklif Al - Ücretsiz
            </Button>

            <!-- White Buttons -->
            <Button variant="Primary" state="Default" size="Medium" class="w-fit md:w-[210px] lg:w-[227px]">
              Ajans Kayıt - <span class="italic">Ücretsiz</span>
            </Button>

            <Button variant="Primary" state="Default" size="Medium" class="w-fit md:w-[160px] lg:w-[181px]">
              Reklam Ver
            </Button>
          </div>
        </div>

        <!-- Right Side -->
        <div class="grid grid-cols-1 gap-x-[40px] gap-y-[32px] mt-8
            md:grid-cols-4 md:gap-x-[30px] md:gap-y-[24px] md:mt-0
            lg:flex lg:justify-between lg:w-[820px]">
          <!-- 1 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[18px] mb-6
                md:text-[19px] md:mb-8
                lg:text-[20px] lg:mb-10">
              Haberler
            </h3>
            <ul class="space-y-2 text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]">
              <li><a class="text-[#999999]" href="#">Teknoloji</a></li>
              <li><a class="text-[#999999]" href="#">Sosyal Medya</a></li>
              <li><a class="text-[#999999]" href="#">Ajans</a></li>
              <li><a class="text-[#999999]" href="#">Sektörel</a></li>
              <li><a class="text-[#999999]" href="#">Marka</a></li>
            </ul>
          </div>

          <!-- 2 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[18px] mb-6
                md:text-[19px] md:mb-8
                lg:text-[20px] lg:mb-10">
              Konular
            </h3>
            <ul class="space-y-2 text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]">
              <li><a class="text-[#999999]" href="#">Yapay Zeka</a></li>
              <li><a class="text-[#999999]" href="#">Sosyal Medya</a></li>
              <li><a class="text-[#999999]" href="#">Pazarlama</a></li>
              <li><a class="text-[#999999]" href="#">Dijital Pazarlama</a></li>
              <li><a class="text-[#999999]" href="#">Yazılım</a></li>
            </ul>
          </div>

          <!-- 3 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[18px] mb-6
                md:text-[19px] md:mb-8
                lg:text-[20px] lg:mb-10">
              Dax Ajanslar
            </h3>
            <ul class="space-y-2 text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]">
              <li><a class="text-[#999999]" href="#">Dijital Reklam Ajansları</a></li>
              <li><a class="text-[#999999]" href="#">Sosyal Medya Ajansları</a></li>
              <li><a class="text-[#999999]" href="#">Grafik Tasarım Ajansları</a></li>
              <li><a class="text-[#999999]" href="#">Video Prodüksiyon Ajansları</a></li>
              <li><a class="text-[#999999]" href="#">Yazılım Firmaları</a></li>
            </ul>
          </div>

          <!-- 4 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[18px] mb-6
                md:text-[19px] md:mb-8
                lg:text-[20px] lg:mb-10">
              DAX
            </h3>
            <ul class="space-y-2 text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]">
              <li><a class="text-[#999999]" href="#">Hakkımızda</a></li>
              <li><a class="text-[#999999]" href="#">İletişim</a></li>
              <li><a class="text-[#999999]" href="#">Kariyer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from "../Button/Button.vue";
</script>
