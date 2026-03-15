<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex flex-col mt-[43px] lg:mt-[68px] gap-[50px] md:gap-[20px]">
    <!-- ====== TOP ROW ====== -->
    <div class="flex justify-between items-start w-full h-fit">
      <!-- Left: Heading -->
      <h2 class="font-[700] text-[32px] leading-[100%] tracking-[0.25px] text-[#000000]">
        Markanıza En Uygun Dijital Ajansı Bulun
      </h2>

      <!-- Right: Sort Select -->
      <div class="hidden md:flex w-full md:w-fit h-fit">
        <BaseSelectField state="default" valueType="default" value="Sırala: En Yeniler" :hasLabel="false"
          :hasDescription="true" description="Description" />
      </div>
    </div>

    <!-- ====== FILTERS ROW ====== -->
    <div class="flex flex-col md:flex-row justify-between items-end gap-[24px] w-full h-fit">
      <!-- City Select -->
      <div class="w-full md:w-[374px] lg:w-[424px]">
        <BaseSelectField state="default" valueType="placeholder" value="Tüm şehirler" :hasLabel="true" label="Şehirler"
          :hasDescription="true" description="Görüşme yapmak istediğiniz şehri seçiniz." valueTextColor="#333333" />
      </div>

      <!-- Service Select (customized color + border) -->
      <div class="w-full md:w-[374px] lg:w-[424px]">
        <BaseSelectField state="default" valueType="placeholder" value="Tüm servisler" :hasLabel="true"
          label="Servisler" :hasDescription="true" description="Aradığını hizmeti seçiniz." valueTextColor="#333333"
          innerBorderColor="#0000FF" />
      </div>

      <!-- Button -->
      <div class="w-full md:w-[374px] lg:w-[424px] flex justify-end items-end">
        <Button variant="Secondary" state="Default" size="Medium" class="w-full">Ajans Bul</Button>
      </div>
    </div>

    <!-- Bottom: Sort Select(For Small Screens) -->
    <div class="md:hidden w-full md:w-fit h-fit">
      <BaseSelectField state="default" valueType="default" value="Sırala: En Yeniler" :hasLabel="false"
        :hasDescription="true" description="Description" />
    </div>
  </section>
</template>

<script setup>
import BaseSelectField from '../../components/BaseSelectField.vue'
import Button from '../../components/Button/Button.vue'
</script>
