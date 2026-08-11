<template>
  <header class="header -type-1">
    <div class="header__container">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left">
            <div class="header__logo">
              <nuxt-link to="/">
                <nuxt-img width="140" height="50" src="/assets/img/logo/ScaLE-UP-Academy-Logo.svg" alt="logo" />
              </nuxt-link>
            </div>

            <!-- header explore start -->
            <!-- <HeaderExplore allClasses="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none" /> -->
            <!-- header explore end -->
          </div>
        </div>

        <Menu :allClasses="'menu__nav text-white -is-active'" />
        <MobileMenu @setActiveMobileMenu="setActiveMobileMenu" :activeMobileMenu="activeMobileMenu" />

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__icons text-white d-flex items-center">
              <!-- search toggle start -->
              <!-- <SearchToggle /> -->
              <!-- search toggle end -->

              <!-- cart toggle start -->
              <CartToggle :parentClassess="'relative ml-30 xl:ml-20'" :allClasses="'d-flex items-center text-white'" />
              <!-- cart toggle end -->

              <div class="d-none xl:d-block ml-20">
                <button @click="() => setActiveMobileMenu(true)" class="text-white items-center"
                  data-el-toggle=".js-mobile-menu-toggle">
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div class="header-right__buttons d-flex items-center ml-30 md:d-none">
              <div v-if="userStore.isAuthenticated" class="relative">
                <div class="d-flex items-center cursor-pointer " @click="toggleUserMenu">
                  <span class="text-blue-1 underline mr-10">Welcome, {{ userStore.username }}</span>
                  <i class="icon icon-chevron-down text-white"></i>
                </div>
                <transition name="fade">
                  <div
                    v-if="isUserMenuOpen"
                    class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                  >
                    <nuxt-link
                      to="/dshb-settings"
                      class="block px-4 py-2 text-dark-1 hover:bg-gray-100"
                    >
                      Profile
                    </nuxt-link>
                    <button
                      @click="handleLogout"
                      class="block w-full text-left px-4 py-2 text-dark-1 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </div>
                </transition>
              </div>
              <div v-else> <span class="text-green-1 underline"> Welcome, Guest </span> <nuxt-link to="/login"
                  class="button -underline text-white"> Log in </nuxt-link> <nuxt-link to="/signup"
                  class="button -sm -white text-dark-1 ml-30"> Sign up </nuxt-link> </div>
            </div>
            <!-- Language toggle button -->
            <!-- Toggle button -->
            <button class="button -sm -white text-dark-1 ml-30" @click="toggleLang">
              {{ currentLanguage }}
            </button>
            <!-- <button class="button -sm -white text-dark-1 ml-30" @click="setLang('en')">English</button>
            <button class="button -sm -white text-dark-1 ml-30" @click="setLang('ar')">العربية</button>
             -->
            <!-- <button
              class="button -sm -white text-dark-1 ml-30"
              @click="switchToArabic"
            >
              العربية
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

import HeaderExplore from "../component/header-explore.vue"; // Update the path based on your project structure
import SearchToggle from "../component/SearchToggle.vue"; // Update the path based on your project structure
import CartToggle from "../component/CartToggle.vue"; // Update the path based on your project structure
import Menu from "../component/Menu.vue"; // Update the path based on your project structure
import MobileMenu from "../component/MobileMenu.vue"; // Update the path based on your project structure
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

const { locale } = useI18n() // <-- locale is a ref

// Usage:
const setLang = (lang) => {
  locale.value = lang
}

const currentLanguage = computed(() => (locale.value === 'ar' ? 'English' : 'العربية'))

// ✅ Toggle language
const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'ar' : 'en'
}
const activeMobileMenu = ref(false);
const isUserMenuOpen = ref(false);


function setActiveMobileMenu(value) {
  activeMobileMenu.value = value;
}

// Switch direction automatically
const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
function switchToArabic() {
  // Logic to switch the language to Arabic
  console.log("Switching to Arabic");
}


const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const closeUserMenu = () => {
  isUserMenuOpen.value = false
}

const handleLogout = () => {
  userStore.logout()
  closeUserMenu()
  router.push('/login') // redirect after logout
}
</script>
