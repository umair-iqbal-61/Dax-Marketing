<template>
  <!-- SECTION -->
  <section class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] lg:mt-[68px] mt-[43px]">
    <!-- HEADING -->
    <h2 class="w-auto font-bold text-[#333333] text-[24px] lg:text-[32px] mb-4 lg:mb-0">
      Haftanın Gündemi
    </h2>

    <!-- MAIN FLEX CONTAINER -->
    <div class="lg:mt-6 flex gap-6 md:flex-row flex-col lg:h-fit h-auto">
      <!-- LEFT SIDE -->
      <div
        class="w-full h-fit bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-start items-center gap-6 md:w-[757px] md:h-[660px]">
        <!-- HERO IMAGE -->
        <div class="w-full h-fit md:h-full lg:h-fit rounded-md overflow-hidden flex items-center justify-center">
          <img src="/brand-week-main.png" alt="Brand Week Istanbul" class="w-full h-fit object-cover rounded-md" />
        </div>

        <!-- TEXT CONTENT -->
        <div class="flex flex-col gap-3 md:justify-center
           px-6 pb-7 w-full h-fit">
          <!-- TOP ROW -->
          <div class="flex justify-between gap-2
            flex-row items-center">
            <!-- CATEGORY PILL -->
            <div class="flex items-center justify-center bg-[#D9E3FF] rounded-full px-[22px]
              lg:w-[129px]
              md:w-[110px] 
              w-[100px] h-fit">
              <span class="text-[#0101FD] font-medium
                lg:text-[14px]
                md:text-[13px]
                text-[12px]">Sektörel</span>
            </div>

            <!-- DATE SECTION -->
            <div class="flex items-center gap-2
               text-[12px]
               md:text-[13px]">
              <span class="font-normal text-[#464646]
                lg:text-[14px]
                md:text-[13px]
                text-[12px]">7 min read</span>
              <div class="w-3 h-0 rotate-90 bg-[#464646] border border-[#464646]
              "></div>
              <span class="font-bold text-[#333333]
                lg:text-[14px]
                md:text-[13px]
                text-[12px]">29 Ağu 25</span>
            </div>
          </div>

          <!-- TITLE -->
          <h3 class="font-bold text-[#333333] leading-tight
            lg:text-[24px]
            md:text-[20px]
            text-[18px]">
            Brand Week Istanbul, 10–14 Kasım 2025 Tarihlerinde İzleyicileriyle
            Buluşacak
          </h3>

          <!-- DESCRIPTION -->
          <p class="font-normal text-[#333333] leading-snug
            lg:text-[16px]
            md:text-[15px]
            text-[14px]">
            “Brand New World” temasıyla düzenlenecek etkinlik, ilham verici
            konuşmalar, çığır açan projeler ve geleceğin haritasını çizen
            içeriklerle izleyicisini karşılayacak.
          </p>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex flex-col gap-4 md:gap-6
      w-full h-full md:w-[536px]
        ">
        <!-- GÜNCEL HABERLER -->
        <div class="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 lg:p-5 flex flex-col gap-[22px] lg:gap-3
          w-full h-full lg:h-[307px]
          ">
          <h4 class="font-bold text-[#333333]
          text-[20px] lg:text-[24px]
            ">
            Güncel Haberler
          </h4>

          <div class="flex flex-col gap-[22px] w-full">
            <!-- CARD 1 -->
            <div class="flex items-center bg-white rounded-md overflow-hidden
              w-full h-[94px]">
              <div class="flex items-center justify-center bg-[#F5F7FF] rounded-xl overflow-hidden shrink-0
                lg:w-[107px] lg:h-[94px]
                md:w-[90px] md:h-[80px]
                w-[80px] h-[80px]">
                <img src="/guncel-haberler-blurple.png" alt="Blurple Studio"
                  class="w-full h-full object-cover rounded-md" />
              </div>
              <div class="px-4 flex flex-col justify-center gap-1">
                <span class="font-bold text-[#333333]
                  text-[14px]
                  ">
                  Blurple studio, Türkiye'nin ilk B Corp Sertifikalı UX Stüdyosu
                  Oldu.
                </span>
                <span class="font-medium text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[12px]">3 Eyl 25</span>
              </div>
            </div>

            <!-- CARD 2 -->
            <div class="flex items-center bg-white rounded-md overflow-hidden
              w-full h-[94px]">
              <div class="flex items-center justify-center bg-[#F5F7FF] rounded-xl overflow-hidden shrink-0
                lg:w-[107px] lg:h-[94px]
                md:w-[90px] md:h-[80px]
                w-[80px] h-[80px]">
                <img src="/guncel-haberler-pwc.png" alt="PwC Report" class="w-full h-full object-cover rounded-md" />
              </div>
              <div class="px-4 flex flex-col justify-center gap-1">
                <span class="font-bold text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[13px]">
                  PwC Küresel Eğlence ve Medya Sektörüne Bakış 2025–2029 Raporu
                  Yayımlandı.
                </span>
                <span class="font-medium text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[12px]">3 Eyl 25</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SLIDER DOTS -->
        <div class="flex justify-center items-center gap-1.5 md:gap-2">
          <div class="w-3 h-3 bg-[#0101FD] rounded-full"></div>
          <div class="w-3 h-3 bg-[#0101FD] rounded-full"></div>
          <div class="w-3 h-3 bg-[#0101FD] rounded-full"></div>
        </div>

        <!-- YAKLAŞAN ETKİNLİKLER -->
        <div class="bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-5 flex flex-col gap-3
          lg:w-full lg:h-[307px]
          md:h-auto h-auto">
          <h4 class="font-bold text-[#333333]
            lg:text-[24px]
            md:text-[20px]
            text-[18px]">
            Yaklaşan Etkinlikler
          </h4>

          <div class="flex flex-col gap-3 mt-2">
            <!-- EVENT 1 -->
            <div class="flex items-center bg-white rounded-md overflow-hidden
              w-full h-[94px]">
              <div class="rounded-xl overflow-hidden
                lg:w-[107px] lg:h-[94px]
                md:w-[90px] md:h-[80px]
                w-[80px] h-[80px]">
                <img src="/brand-week-main.png" alt="Meetup İstanbul"
                  class="w-full h-full object-[-55px] object-cover rounded-md" />
              </div>
              <div class="px-4 flex flex-col justify-center gap-1">
                <span class="font-bold text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[13px]">Meetup İstanbul</span>
                <span class="font-medium text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[12px]">12–14 Ekim 2025</span>
              </div>
            </div>

            <!-- EVENT 2 -->
            <div class="flex items-center bg-white rounded-md overflow-hidden
              w-full h-[94px]">
              <div class="rounded-xl overflow-hidden
                lg:w-[107px] lg:h-[94px]
                md:w-[90px] md:h-[80px]
                w-[80px] h-[80px]">
                <img src="/brand-week-main.png" alt="Brand Week Istanbul"
                  class="w-full h-full object-[-55px] object-cover" />
              </div>
              <div class="px-4 flex flex-col justify-center gap-1">
                <span class="font-bold text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[13px]">Brand Week Istanbul</span>
                <span class="font-medium text-[#333333]
                  lg:text-[14px]
                  md:text-[13px]
                  text-[12px]">10–14 Kasım 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
