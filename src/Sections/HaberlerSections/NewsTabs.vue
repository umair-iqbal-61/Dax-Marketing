<template>
  <div
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] shrink-0 lg:mx-auto flex justify-between mt-[43px] overflow-hidden">
    <button v-for="tab in currentTabs" :key="tab" :class="[
      'flex gap-2.5 px-[26px] py-2 rounded-full font-medium transition-all duration-200 shrink-0',
    ]" :style="{
      backgroundColor: activeTab === tab ? activeBgColor : inactiveBgColor,
      color: activeTab === tab ? activeTextColor : inactiveTextColor,
      fontSize: activeTab === tab ? activeTextSize : inactiveTextSize,
    }" @click="activeTab = tab">
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  activeBgColor: { type: String, default: '#D9E3FF' },
  inactiveBgColor: { type: String, default: 'transparent' },
  activeTextColor: { type: String, default: '#0101FD' },
  inactiveTextColor: { type: String, default: '#333333' },
  activeTextSize: { type: String, default: '14px' },
  inactiveTextSize: { type: String, default: '14px' },
})

const route = useRoute()
const activeTab = ref('')

const tabGroups = {
  Haberler: [
    'Teknoloji Haberleri',
    'Sosyal Medya Haberleri',
    'Ajans Haberleri',
    'Sektörel Haberler',
    'Marka Haberleri',
    'Girişimcilik Haberleri',
  ],
  Konular: [
    'Yapay Zeka',
    'Sosyal Medya',
    'Pazarlama',
    'Dijital Pazarlama',
    'Teknoloji',
    'Mobil Uygulama',
    'Yazılım',
    'Araçlar',
  ],
  Projeler: [
    'Sosyal Medya Kampanyaları',
    'Video ve Reklamlar',
    'Mobil Uygulmalar',
    'Websiteleri',
    'Sanal Gerçeklik',
    'Arttırılmış Gerçeklik',
    'Gerilla Pazarlama',
    'Grafik Tasarım',
  ],
  AjansDetails: [
    'UI/UX Tasarım',
    'Sosyal Medya',
    'Dijital Pazarlama',
    'Yazılım',
    'SEO',
    'Grafik Tasarım',
  ],
}

const currentTabs = computed(() => tabGroups[route.name] || [])

watch(currentTabs, (newTabs) => {
  if (newTabs.length > 0) activeTab.value = newTabs[0]
}, { immediate: true })
</script>
