<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-fit flex flex-col items-center gap-[40px] bg-[#333333] border-b border-[#D9D9D9] py-10">

    <!-- Heading -->
    <div class="flex flex-col items-center justify-center w-full h-fit gap-3 md:gap-3.5 lg:gap-4">
      <h2 class="font-bold text-[32px] tracking-[0.25px] text-center text-white">
        Offices & Locations
      </h2>
      <p class="font-normal text-[16px] tracking-[0.15px] text-center text-white">
        Get in touch with us to learn more about Edvido’s journey from a simple concept to a worldwide platform!
      </p>
    </div>

    <!-- Cards -->
    <div class="w-full h-fit flex flex-col lg:flex-row lg:justify-center lg:items-stretch gap-[24px]">
      <div v-for="(office, index) in offices" :key="index"
        class="w-full lg:flex-1 h-fit flex flex-col gap-6 rounded-[20px] bg-white border border-white shadow-[0px_1px_4px_rgba(0,0,0,0.1)] p-6">

        <!-- Map Image -->
        <div class="relative w-full h-fit">
          <img :src="office.mapImg" alt="Map" class="w-full h-[216px] md:h-fit object-cover rounded-[12px]" />
          <div class="absolute top-[12px] left-[12px] bg-white rounded-[8px] px-3 py-2 flex text-center">
            <button class="text-[#0101FD] text-[16px] font-semibold">
              Get Direction
            </button>
          </div>
        </div>

        <!-- Details -->
        <div class="flex flex-col w-full h-fit gap-10 flex-grow">
          <h3 class="font-bold text-[24px] text-[#333333] text-left">
            {{ office.title }}
          </h3>

          <p class="font-normal text-[16px] text-[#333333] tracking-[0.15px]">
            {{ office.address }}
          </p>

          <!-- Contact Info -->
          <div class="flex flex-col md:flex-row justify-between gap-4 w-full h-fit">
            <div class="flex items-center gap-2 md:w-[48%] lg:w-auto">
              <img src="/icons/Phone.svg" alt="Phone" class="w-fit h-fit" />
              <p class="font-poppins font-[400] text-[16px] text-[#333333]">
                {{ office.phone }}
              </p>
            </div>

            <div class="flex items-center gap-[8px] md:w-[48%] lg:w-auto">
              <img src="/icons/EnvelopeSimple.svg" class="w-fit h-fit" />
              <p class="font-poppins font-[400] text-[16px] text-[#333333]">
                {{ office.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const offices = [
  {
    title: 'Beşiktaş',
    mapImg: '/besiktas-map.png',
    address:
      'Balmumcu Mah. Barbaros Blv. Bina No: 26 İç Kapı No: 8 Beşiktaş / İstanbul',
    phone: '+90 850 309 32 18',
    email: 'info@edvido.com',
  },
  {
    title: 'İTÜ Teknokent',
    mapImg: '/itu-map.png',
    address:
      'Reşit Paşa Mah., Katar Cad. İTÜ Teknokent ARI3 Sarıyer Kapı No: 6 Beşiktaş / İstanbul',
    phone: '+90 850 309 32 18',
    email: 'pelin@edvido.com',
  },
]
</script>
