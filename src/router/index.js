import { createRouter, createWebHistory } from 'vue-router'
import Anasayfa from '../Pages/Anasayfa.vue'
import Haberler from '../Pages/Haberler.vue'
import Konular from '../Pages/Konular.vue'
import Projeler from '../Pages/Projeler.vue'
import ProjelerVeAjanslar from '../Pages/ProjelerVeAjanslar.vue'
import Etkinlikler from '../Pages/Etkinlikler.vue'
import Ajanslar from '../Pages/Ajanslar.vue'
import BlogDetay from '../Pages/BlogDetay.vue'
import Kariyer from '../Pages/Kariyer.vue'
import KoseYazilari from '../Pages/KoseYazilari.vue'
import AjansKayit from '../Pages/AjansKayit.vue'
import Reklamlar from '../Pages/Reklamlar.vue'
import Hakkimizda from '../Pages/Hakkimizda.vue'
import AjansDetails from '../Pages/AjansDetails.vue'

// Define all routes (URLs)
const routes = [
  {
    path: '/',
    name: 'Anasayfa',
    component: Anasayfa
  },
  {
    path: '/haberler',
    name: 'Haberler',
    component: Haberler,
  },
  {
    path: '/konular',
    name: 'Konular',
    component: Konular,
  },
  {
    path: '/projeler',
    name: 'Projeler',
    component: Projeler,
  },
  {
    path: '/projeler-ve-ajanslar',
    name: 'ProjelerVeAjanslar',
    component: ProjelerVeAjanslar,
  },
  {
    path: '/etkinlikler',
    name: 'Etkinlikler',
    component: Etkinlikler,
  },
  {
    path: '/ajanslar',
    name: 'Ajanslar',
    component: Ajanslar,
  },
  {
    path: '/blogDetay',
    name: 'BlogDetay',
    component: BlogDetay,
  },
  {
    path: '/kariyer',
    name: 'Kariyer',
    component: Kariyer,
  },
  {
    path: '/koseYazilari',
    name: 'KoseYazilari',
    component: KoseYazilari,
  },
  {
    path: '/ajansKayit',
    name: 'AjansKayit',
    component: AjansKayit,
  },
  {
    path: '/reklamlar',
    name: 'Reklamlar',
    component: Reklamlar,
  },
  {
    path: '/hakkimizda',
    name: 'Hakkimizda',
    component: Hakkimizda,
  },
  {
    path: '/ajansDetails',
    name: 'AjansDetails',
    component: AjansDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
