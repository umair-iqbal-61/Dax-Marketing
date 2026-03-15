<template>
  <header
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] flex items-center h-full py-6 border-b border-[#E5E5E5] md:h-[70px] relative">
    <div class=" w-full mx-auto flex items-center justify-between">
      <!-- Logo -->
      <img src="/dax-logo.png" alt="dax marketing" class="w-[150px] h-[24px]
          md:w-[170px] md:h-[26px]
          lg:w-[182px] lg:h-[28px]" />

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-[36px] text-[14px] font-medium text-[#333333]">
        <!-- Haberler -->
        <div class="relative" @mouseenter="showMenu('haberler')" @mouseleave="delayedHide">
          <router-link to="/haberler" class="flex items-center gap-[6px] select-none"
            :class="activeMenu === 'haberler' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('haberler')">
            Haberler
            <img :src="[activeMenu === 'haberler' ? '/icons/Chevron-down-dark.svg' : '/icons/Chevron-down.svg']" :class="[
              'transition-transform duration-200',
              activeMenu === 'haberler'
                ? 'rotate-180'
                : ''
            ]" />
          </router-link>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuHaberler v-if="activeMenu === 'haberler'" />
          </div>
        </div>

        <!-- Konular -->
        <div class="relative" @mouseenter="showMenu('konular')" @mouseleave="delayedHide">
          <router-link to="/konular" class="flex items-center gap-[6px] select-none"
            :class="activeMenu === 'konular' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('konular')">
            Konular
            <img :src="[activeMenu === 'konular' ? '/icons/Chevron-down-dark.svg' : '/icons/Chevron-down.svg']" :class="[
              'transition-transform duration-200',
              activeMenu === 'konular'
                ? 'rotate-180'
                : ''
            ]" />
          </router-link>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuKonular v-if="activeMenu === 'konular'" />
          </div>
        </div>

        <!-- Ajanslar -->
        <div class="relative" @mouseenter="showMenu('ajanslar')" @mouseleave="delayedHide">
          <router-link to="/ajanslar" class="flex items-center gap-[6px] select-none"
            :class="activeMenu === 'ajanslar' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('ajanslar')">
            <img src="/icons/Logo-3.svg" class="w-[17px] h-[18px]">
            Ajanslar
            <img :src="[activeMenu === 'ajanslar' ? '/icons/Chevron-down-dark.svg' : '/icons/Chevron-down.svg']" :class="[
              'transition-transform duration-200',
              activeMenu === 'ajanslar'
                ? 'rotate-180'
                : ''
            ]" />
          </router-link>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuAjanslar v-if="activeMenu === 'ajanslar'" />
          </div>
        </div>

        <!-- Projeler -->
        <div class="relative" @mouseenter="showMenu('projeler')" @mouseleave="delayedHide">
          <router-link to="/projeler" class="flex items-center gap-[6px] select-none"
            :class="activeMenu === 'projeler' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('projeler')">
            Projeler
            <img :src="[activeMenu === 'projeler' ? '/icons/Chevron-down-dark.svg' : '/icons/Chevron-down.svg']" :class="[
              'transition-transform duration-200',
              activeMenu === 'projeler'
                ? 'rotate-180'
                : ''
            ]">
          </router-link>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuProjeler v-if="activeMenu === 'projeler'" />
          </div>
        </div>

        <!-- Static links -->
        <a href="/etkinlikler">Etkinlikler</a>
        <a href="/koseYazilari">Köşe Yazıları</a>
      </nav>

      <!-- Desktop Right side -->
      <div class="hidden lg:flex items-center gap-[16px]">
        <!-- Search Icon -->
        <div class="flex items-center justify-center h-[24px]">
          <img src="/icons/Search.svg" class="text-[#668CFF]">
        </div>

        <!-- Buttons -->
        <Button variant="Secondary" state="Default" size="Medium" class="!w-[108px] !h-[45px] text-[14px]">
          Teklif Al
        </Button>

        <Button variant="Primary" state="Default" size="Medium" class="!w-[108px] !h-[45px] text-[14px]">
          Ajans Giriş
        </Button>
      </div>

      <!-- Mobile Controls -->
      <div class="flex items-center gap-3 lg:hidden">
        <!-- Search Icon -->
        <div class="flex items-center justify-center h-[24px]">
          <img src="/icons/Search.svg" class="text-[#668CFF]">
        </div>

        <!-- Toggle Button (hamburger or close) -->
        <button @click="toggleMobileNav" class="flex items-center justify-center bg-transparent focus:outline-none">
          <!-- Hamburger Icon -->
          <template v-if="!mobileOpen">
            <div class="flex flex-col gap-[3px]">
              <img src="/icons/Menu.svg">
            </div>
          </template>

          <!-- Close Icon -->
          <template v-else>
            <div class="flex flex-col gap-[3px]">
              <img src="/icons/Menu-dark.svg">
            </div>
          </template>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="mobileOpen" class="absolute top-full right-0 w-[152px] h-[507px] bg-white shadow-md border-t border-[#E5E5E5] flex flex-col items-center py-[23px] gap-2.5 z-50
          md:top-[70px]">
        <div class="w-[90px] h-fit flex flex-col gap-3">
          <div v-for="(link, index) in navLinks" :key="link.text">
            <!-- First link (index 0) -->
            <router-link v-if="index === 0" :to="link.href" class="h-[21px] flex justify-between"
              @click="closeMobileNav">
              <span class="text-[14px] font-medium text-black tracking-[0.1px] hover:text-blue-400">{{ link.text
              }}</span>
              <img src="/icons/Chevron-down.svg" alt="">
            </router-link>

            <!-- All other links -->
            <router-link v-else :to="link.href"
              class="h-[21px] text-[14px] font-medium text-black tracking-[0.1px] hover:text-blue-400"
              @click="closeMobileNav">
              {{ link.text }}
            </router-link>
          </div>


          <Button variant="Secondary" state="Default" size="small"
            class="w-full md:hidden lg:block !px-0 text-[12px]">Ajans
            Kayıt</Button>
          <Button variant="Secondary" state="Default" size="Medium" class="w-full text-[12px]">
            Teklif Al
          </Button>
          <Button variant="Primary" state="Default" size="small" class="w-full !px-0 text-[12px]">
            Ajans Giriş
          </Button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Button from "../Button/Button.vue";
import MegaMenuHaberler from "./MegaMenu/MegaMenuHaberler.vue";
import MegaMenuKonular from "./MegaMenu/MegaMenuKonular.vue";
import MegaMenuAjanslar from "./MegaMenu/MegaMenuAjanslar.vue";
import MegaMenuProjeler from "./MegaMenu/MegaMenuProjeler.vue";

const activeMenu = ref(null);
const mobileOpen = ref(false);
let hideTimeout = null;

const navLinks = [
  { text: "Haberler", href: "/haberler" },
  { text: "Konular", href: "/konular" },
  { text: "Ajanslar", href: "/ajanslar" },
  { text: "Projeler", href: "/projeler" },
  { text: "Etkinlikler", href: "/etkinlikler" },
  { text: "Köşe Yazıları", href: "/koseYazilari" },
];

// open / close
const toggleMobileNav = () => (mobileOpen.value = !mobileOpen.value);
const closeMobileNav = () => (mobileOpen.value = false);

// hover behavior (desktop)
const showMenu = (menu) => {
  clearTimeout(hideTimeout);
  activeMenu.value = menu;
};
const delayedHide = () => {
  hideTimeout = setTimeout(() => (activeMenu.value = null), 150);
};
const cancelHide = () => clearTimeout(hideTimeout);
const toggleMenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
