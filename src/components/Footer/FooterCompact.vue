<template>
  <footer class="w-full bg-white flex flex-col items-center py-10">
    <!-- Main Container (inherits 1320px width from parent) -->
    <div class="w-full flex flex-col gap-[37px]">
      <!-- Logo -->
      <div class="h-[50px]">
        <img src="" alt="Dax Marketing" class="w-[325.6px] h-full object-contain" />
      </div>

      <!-- Below Div (Two Parts) -->
      <div class="flex justify-between items-start h-[237px] w-full">
        <!-- Left Side (Newsletter) -->
        <div class="flex flex-col justify-between w-[311px]">
          <!-- Text -->
          <p class="text-[#666666] text-[16px] font-[400] mb-[16px]">
            Haber bültenimize abone olun dijital dünyadan her an haberdar olun!
          </p>

          <!-- Input and Subscribe Button -->
          <div class="flex flex-col gap-[20px] mt-3">
            <input type="email" placeholder="Enter your email"
              class="w-full h-[66px] rounded-[8px] border border-[#99B3FF] bg-[#F9F9FF] px-[24px] text-[#666666] text-[16px] font-[400] outline-none focus:ring-2 focus:ring-[#0101FD]" />

            <Button variant="Secondary" state="Default" size="Medium" class="w-[227px] h-[45px]">
              Hemen Abone Ol
            </Button>
          </div>
        </div>

        <!-- Right Side -->
        <div class="flex justify-between w-[820px]">
          <!-- 1 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[20px] mb-10">Haberler</h3>
            <ul class="space-y-2 text-[#999999] text-[18px]">
              <li><a href="#">Teknoloji</a></li>
              <li><a href="#">Sosyal Medya</a></li>
              <li><a href="#">Ajans</a></li>
              <li><a href="#">Sektörel</a></li>
              <li><a href="#">Marka</a></li>
            </ul>
          </div>

          <!-- 2 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[20px] mb-10">Konular</h3>
            <ul class="space-y-2 text-[#999999] text-[18px]">
              <li><a href="#">Yapay Zeka</a></li>
              <li><a href="#">Sosyal Medya</a></li>
              <li><a href="#">Pazarlama</a></li>
              <li><a href="#">Dijital Pazarlama</a></li>
              <li><a href="#">Yazılım</a></li>
            </ul>
          </div>

          <!-- 3 -->
          <div>
            <h3 class="text-[#666666] font-[700] text-[20px] mb-10">Dax Ajanslar</h3>
            <ul class="space-y-2 text-[#999999] text-[18px]">
              <li><a href="#">Dijital Reklam Ajansları</a></li>
              <li><a href="#">Sosyal Medya Ajansları</a></li>
              <li><a href="#">Grafik Tasarım Ajansları</a></li>
              <li><a href="#">Video Prodüksiyon Ajansları</a></li>
              <li><a href="#">Yazılım Firmaları</a></li>
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
