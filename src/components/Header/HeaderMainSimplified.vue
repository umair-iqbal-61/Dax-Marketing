<template>
  <header class="h-[70px] flex items-center justify-between">
    <div class="h-[45px] flex items-center justify-between w-full max-w-[1320px] mx-auto relative">
      <!-- Logo -->
      <img src="" alt="dax marketing" class="h-[28px]" />

      <!-- Navigation -->
      <nav class="flex items-center gap-15 text-[14px] font-medium text-[#333333] relative">
        <!-- Haberler -->
        <div class="relative" @mouseenter="showMenu('haberler')" @mouseleave="delayedHide">
          <a href="#" class="flex items-center gap-2 select-none"
            :class="activeMenu === 'haberler' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('haberler')">
            Haberler
            <img src="/icons/Chevron-down.svg" :class="[
              'transition-transform duration-200',
              activeMenu === 'haberler'
                ? 'rotate-180 text-[#0101FD]'
                : 'text-[#668CFF]'
            ]" />
          </a>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuHaberler v-if="activeMenu === 'haberler'" />
          </div>
        </div>

        <!-- Konular -->
        <div class="relative" @mouseenter="showMenu('konular')" @mouseleave="delayedHide">
          <a href="#" class="flex items-center gap-2 select-none"
            :class="activeMenu === 'konular' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('konular')">
            Konular
            <img src="/icons/Chevron-down.svg" :class="[
              'transition-transform duration-200',
              activeMenu === 'konular'
                ? 'rotate-180 text-[#0101FD]'
                : 'text-[#668CFF]'
            ]" />
          </a>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuKonular v-if="activeMenu === 'konular'" />
          </div>
        </div>

        <!-- Ajanslar -->
        <div class="relative" @mouseenter="showMenu('ajanslar')" @mouseleave="delayedHide">
          <a href="#" class="flex items-center gap-2 select-none"
            :class="activeMenu === 'ajanslar' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('ajanslar')">
            <Icon icon="mdi:cross" class="text-[#0101FD] w-[14px] h-[14px]" />
            Ajanslar
            <img src="/icons/Chevron-down.svg" :class="[
              'transition-transform duration-200',
              activeMenu === 'ajanslar'
                ? 'rotate-180 text-[#0101FD]'
                : 'text-[#668CFF]'
            ]" />
          </a>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuAjanslar v-if="activeMenu === 'ajanslar'" />
          </div>
        </div>

        <!-- Projeler -->
        <div class="relative" @mouseenter="showMenu('projeler')" @mouseleave="delayedHide">
          <a href="#" class="flex items-center gap-2 select-none"
            :class="activeMenu === 'projeler' ? 'text-[#0101FD]' : 'text-[#333333]'"
            @click.prevent="toggleMenu('projeler')">
            Projeler
            <img src="/icons/Chevron-down.svg" :class="[
              'transition-transform duration-200',
              activeMenu === 'projeler'
                ? 'rotate-180 text-[#0101FD]'
                : 'text-[#668CFF]'
            ]" />
          </a>
          <div @mouseenter="cancelHide" @mouseleave="delayedHide">
            <MegaMenuProjeler v-if="activeMenu === 'projeler'" />
          </div>
        </div>

        <!-- Static Links -->
        <a href="#">Etkinlikler</a>
        <a href="#">Kariyer</a>
        <a href="#">Köşe Yazıları</a>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-4">
        <!-- Search Icon -->
        <div class="h-[24px] flex items-center justify-center">
          <Icon icon="mdi:magnify" class="text-[#668CFF] w-[24px] h-[24px]" />
        </div>

        <!-- Profile Icon -->
        <div class="h-[24px] flex items-center justify-center">
          <Icon icon="mdi:account-outline" class="text-[#0101FD] w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import MegaMenuHaberler from "./MegaMenu/MegaMenuHaberler.vue";
import MegaMenuKonular from "./MegaMenu/MegaMenuKonular.vue";
import MegaMenuAjanslar from "./MegaMenu/MegaMenuAjanslar.vue";
import MegaMenuProjeler from "./MegaMenu/MegaMenuProjeler.vue";

const activeMenu = ref(null);
let hideTimeout = null;

// Show menu instantly
const showMenu = (menu) => {
  clearTimeout(hideTimeout);
  activeMenu.value = menu;
};

// Hide menu with small delay
const delayedHide = () => {
  hideTimeout = setTimeout(() => (activeMenu.value = null), 150);
};

// Cancel hide when moving over menu
const cancelHide = () => clearTimeout(hideTimeout);

// Click toggle for mobile/keyboard
const toggleMenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};
</script>
