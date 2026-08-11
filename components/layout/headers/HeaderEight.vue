<template>
  <header
    :class="`header -type-5 js-header ${scrollPosition > 50 ? 'bg-white' : ''}`"
  >
    <!-- Top Section -->
    <div class="d-flex items-center bg-white py-10 border-bottom-light">
      <div class="header__container">
        <div class="row y-gap-5 justify-between items-center">
          <div class="col-auto">
            <div class="d-flex x-gap-40 y-gap-10 items-center">
              <div class="d-flex items-center text-dark-1 md:d-none">
                <div class="icon-phone mr-10"></div>
                <div class="text-13 lh-1">(00) 242 844 39 88</div>
              </div>
              <div class="d-flex items-center text-dark-1">
                <div class="icon-email mr-10"></div>
                <div class="text-13 lh-1">hello@educrat.com</div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex x-gap-30 y-gap-10">
              <div>
                <div class="d-flex x-gap-20 items-center text-dark-1">
                  <!-- Assuming Socials is a component, replace with actual component -->
                  <Socials textSize="text-11" />
                </div>
              </div>
              <div class="d-flex items-center text-dark-1 text-13 sm:d-none">
                English <i class="icon-chevron-down text-9 ml-10"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="header__container py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left d-flex items-center">
            <div class="header__logo">
              <nuxt-link data-barba to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  src="/assets/img/general/logo-dark.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div>
            <HeaderExplore
              :allClasses="'header__explore text-dark-1 ml-50 xl:ml-30 xl:d-none'"
            />
            <Menu
              :allClasses="'menu__nav text-dark-1 ml-50 xl:ml-30 -is-active'"
            />
            <MobileMenu
              @setActiveMobileMenu="setActiveMobileMenu"
              :activeMobileMenu="activeMobileMenu"
            />
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__icons text-white d-flex items-center">
              <SearchToggle :color="'text-dark-1'" />
              <CartToggle
                :parentClassess="'relative ml-30 xl:ml-20'"
                :allClasses="'d-flex items-center text-dark-1'"
              />
              <div class="d-none xl:d-block ml-20">
                <button
                  class="text-dark-1 items-center"
                  @click="() => setActiveMobileMenu(true)"
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div
              class="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none"
            >
              <nuxt-link to="/login" class="button -underline text-dark-1">
                Log in
              </nuxt-link>
              <nuxt-link
                to="/signup"
                class="button px-25 h-50 -dark-1 text-white ml-20"
              >
                Sign up
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Socials from "~/components/common/Socials";

import HeaderExplore from "../component/header-explore.vue";
import Menu from "../component/Menu.vue";
import MobileMenu from "../component/MobileMenu.vue";
import SearchToggle from "../component/SearchToggle.vue";
import CartToggle from "../component/CartToggle.vue";

const activeMobileMenu = ref(false);
const scrollPosition = ref(0);

const setActiveMobileMenu = (value) => {
  activeMobileMenu.value = value;
};
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<!-- Add any necessary styles if needed -->
<style scoped>
/* Your styles here... */
</style>
