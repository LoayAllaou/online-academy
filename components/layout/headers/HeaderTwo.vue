<template>
  <header
    :class="`header -type-5 js-header ${
      scrollPosition > 40 ? 'bg-dark-1' : ''
    }`"
  >
    <div class="d-flex items-center bg-purple-1 py-10">
      <div class="container">
        <div class="row y-gap-5 justify-between items-center">
          <div class="col-auto">
            <div class="d-flex x-gap-40 y-gap-10 items-center">
              <div class="d-flex items-center text-white md:d-none">
                <div class="icon-email mr-10"></div>
                <div class="text13 lh-1">(00) 242 844 39 88</div>
              </div>
              <div class="d-flex items-center text-white">
                <div class="icon-email mr-10"></div>
                <div class="text13 lh-1">hello@educrat.com</div>
              </div>
            </div>
          </div>

          <div class="col-auto">
            <div class="d-flex x-gap-30 y-gap-10">
              <div>
                <div class="d-flex x-gap-20 items-center text-white">
                  <Socials textSize="text-11" />
                </div>
              </div>
              <div class="d-flex items-center text-white text-13 sm:d-none">
                English <i class="icon-chevron-down text-9 ml-10"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left">
            <div class="header__logo">
              <nuxt-link to="/">
                <nuxt-img
                  width="140"
                  height="40"
                  src="/assets/img/general/logo.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <Menu :allClasses="'menu__nav text-white -is-active'" />
            <MobileMenu
              :activeMobileMenu="activeMobileMenu"
              @setActiveMobileMenu="setActiveMobileMenu"
            />

            <div
              class="header-right__icons text-white d-flex items-center ml-30"
            >
              <SearchToggle />

              <CartToggle
                :parentClassess="'relative ml-30 xl:ml-20'"
                :allClasses="'d-flex items-center text-white'"
              />

              <div class="d-none xl:d-block ml-20">
                <button
                  class="text-white items-center"
                  @click="() => setActiveMobileMenu(true)"
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div
              class="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none"
            >
              <nuxt-link to="/login" class="button -underline text-white">
                Log in
              </nuxt-link>
              <nuxt-link
                to="/signup"
                class="button px-25 h-50 -white text-dark-1 -rounded ml-30 xl:ml-20"
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
import { ref, onMounted, onUnmounted, onBeforeUpdate } from "vue";
import Socials from "@/components/common/Socials.vue"; // Adjust the path accordingly
import SearchToggle from "../component/SearchToggle.vue"; // Adjust the path accordingly
import CartToggle from "../component/CartToggle.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly
import Menu from "../component/Menu.vue"; // Adjust the path accordingly

const activeMobileMenu = ref(false);
const setActiveMobileMenu = (val) => {
  activeMobileMenu.value = val;
};
const scrollPosition = ref(0);

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
