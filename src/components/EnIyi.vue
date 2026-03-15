<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] mt-[43px] lg:mt-[68px] rounded-[20px] bg-[#01017A] text-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] flex flex-col gap-8 py-10 overflow-hidden">
    <!-- ===== TOP ROW ===== -->
    <div class="w-full h-fit flex justify-between items-center pl-[6px]">
      <!-- Heading -->
      <h2 class="font-poppins font-[700] text-2xl md:text-[32px] text-white tracking-normal md:tracking-[0.25px]">
        {{ title }}
      </h2>
    </div>

    <div class="flex w-fit h-fit items-center gap-3">
      <div v-for="(tab, index) in tabs" :key="index" class="cursor-pointer flex items-center" :class="[
        'text-[14px] font-medium tracking-[0.1px] px-[12px] py-[14px]',
        activeTab === index
          ? 'border-b-[3px] font-bold border-b-white text-white'
          : 'border-b-[3px] border-b-transparent text-[#D9D9D9]',
      ]" @click="activeTab = index">
        {{ tab }}
      </div>
    </div>

    <!-- ===== BOTTOM ROW ===== -->
    <div class="w-full h-fit shrink-0 flex flex-col gap-9">
      <div v-for="(row, rowIndex) in displayedItems" :key="rowIndex" class="w-full h-fit flex md:gap-[46px]">
        <div v-for="(text, i) in row" :key="i"
          class="w-[252px] md:w-[382px] h-fit shrink-0 flex items-center gap-[23px]">
          <span class="font-poppins font-[700] text-[16px] tracking-[0.5px] text-white">
            {{ text }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// 🧠 Props for dynamic reusability
const props = defineProps({
  title: {
    type: String,
    default: 'En İyi Dijital Ajansları Keşfet',
  },
  tabs: {
    type: Array,
    default: () => ['Cities', 'Categories'],
  },
  items: {
    type: Object,
    default: () => ({
      Cities: [
        ['İstanbul', 'Antalya', 'Ankara'],
        ['İzmir', 'Bursa', 'Adana'],
        ['Adıyaman', 'Afyonkarahisar', 'Ağrı'],
        ['Aksaray', 'Amasya', 'Ardahan'],
        ['Artvin', 'Aydın', 'Balıkesir'],
        ['Bartın', 'Batman', 'Bayburt'],
        ['Bilecik', 'Bingöl', 'Bitlis'],
        ['Bolu', 'Burdur', 'Çanakkale'],
        ['Çankırı', 'Çorum', 'Denizli'],
        ['Diyarbakır', 'Kocaeli', 'Konya'],
        ['Kütahya', 'Malatya', 'Manisa'],
        ['Mardin', 'Mersin', 'Muğla'],
        ['Muş', 'Nevşehir', 'Niğde'],
        ['Ordu', 'Osmaniye', 'Rize'],
        ['Sakarya', 'Samsun', 'Siirt'],
        ['Sinop', 'Şırnak', 'Tekirdağ'],
        ['Tokat', 'Trabzon', 'Tunceli'],
        ['Uşak', 'Van', 'Yalova'],
        ['Yozgat', 'Zonguldak', 'Kırıkkale'],
        ['Kırklareli', 'Kırşehir', 'Karabük'],
        ['Karaman', 'Kastamonu', 'Kayseri'],
        ['Erzurum', 'Elazığ', 'Erzincan'],
        ['Eskişehir', 'Gaziantep', 'Giresun'],
        ['Gümüşhane', 'Hakkari', 'Hatay'],
        ['Iğdır', 'Isparta', 'Kilis']
      ],
      Categories: [
        ['Dijital Reklam', 'Sosyal Medya', 'Yazılım'],
        ['Mobil Uygulama', 'SEM & SEO', 'Influencer Marketing'],
        ['Web Tasarım', 'Animasyon', 'Danışmanlık'],
        ['Etkinlik', 'Kreatif', 'E-ticaret'],
        ['Video Prodüksiyon', 'İçerik Üretimi', 'Grafik Tasarım'],
        ['Mobil Pazarlama', 'Dijital Medya Planlama', 'Kurumsal Kimlik'],
        ['Performans Pazarlama', 'PR', 'UI/UX Tasarım']
      ]
    }),
  },
})

// 🌟 Reactive tab control
const activeTab = ref(1)

const displayedItems = computed(() => {
  const key = props.tabs[activeTab.value]
  return props.items[key] || []
})
</script>

<style scoped>
section {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
}
</style>
