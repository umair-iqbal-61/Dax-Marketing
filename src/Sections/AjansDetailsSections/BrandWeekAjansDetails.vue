<template>
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px]">
    <!-- changed items-center -> items-start on small so stacked children fill width; keep lg:items-start -->
    <div class="flex flex-col lg:flex-row items-start lg:items-start gap-10 overflow-hidden">

      <!-- Left Side -->
      <!-- make left full width on small, keep a max on lg -->
      <div class="w-full lg:max-w-[312px] lg:w-fit flex flex-col h-fit">
        <AgencyCardAjansDetails />
        <div class="w-full p-3 flex flex-col gap-2.5">
          <p class="text-[14px]">
            Bir markanın ihtiyacı olan tüm dijital iletişim çalışmalarını, tek çatı altında
            sunabilecek deneyim ve
            donanıma sahip, 360 derece dijital reklam ajansıyız.

            <b>Sosyal Medya Yönetimi</b>
            Markanızın sosyal medya iletişimini yönetiyoruz. Yaratıcı içeriklerle markanızı konumlandırıp, belirlenen
            stratejiler doğrultusunda, imaj ve pazarlama hedeflerine ulaştırıyoruz.

            <b>Dijital Pazarlama</b>
            Dijital mecralarda stratejik...
          </p>
          <p class="text-[16px] underline text-[#0101FD]">Daha fazla oku...</p>
        </div>
      </div>

      <!-- Right Side -->
      <div class="flex flex-col w-full min-w-0">

        <!-- BrandWeek Card -->
        <div class="w-full h-fit flex flex-col gap-2.5 bg-white rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)]">
          <!-- ====== FEATURE IMAGE ====== -->
          <img src="/brand-week-main.png" class="w-full max-h-[359px] h-auto rounded-[12px] object-cover" />

          <div class="w-full h-fit flex flex-col gap-2.5 px-6 py-7">
            <div class="flex justify-between w-full h-fit">
              <!-- Tag -->
              <div
                class="flex items-center justify-center gap-2.5 rounded-full px-[22px] bg-[#D9E3FF] w-[129px] h-[33px]">
                <span class="font-medium text-[14px] text-[#0101FD]">Öne Çıkan</span>
              </div>
              <div class="flex items-center w-fit h-fit gap-2">
                <span class="text-[14px] text-[#464646]">7 min read</span>
                <div class="w-3 h-0 -rotate-90 border border-[#464646] bg-[#464646]"></div>
                <span class="font-medium text-[14px] text-[#333333]">29 Ağu 25</span>
              </div>
            </div>

            <!-- Title & Description -->
            <h1 class="font-bold text-2xl text-[#333333]">
              Brand Week Istanbul, 10-14 Kasım 2025 Tarihlerinde İzleyicileriyle Buluşacak
            </h1>
            <p class="text-[16px] text-[#333333]">
              “Brand New World” temasıyla düzenlenecek etkinlik, ilham verici konuşmalar, çığır açan projeler ve
              geleceğin haritasını çizen içeriklerle izleyicisini karşılayacak.
            </p>
          </div>
        </div>

        <!-- Ajans Gundem -->
        <AjansGundem class="mt-[48px]" />

        <!-- Servisler -->
        <Servisler class="mt-[48px]" />

        <!-- Portfolyo -->
        <Portfolyo class="mt-[48px]" />

        <!-- Yorumlar -->
        <Yorumlar class="mt-[48px]" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AgencyCardAjansDetails from '../../components/Cards/AgencyCardAjansDetails.vue'; import AjansGundem from './AjansGundem.vue'; import Portfolyo from './Portfolyo.vue';
import Servisler from './Servisler.vue';
import Yorumlar from './Yorumlar.vue'; 
</script>
