<template>
  <header
    :class="`header -type-4 js-header ${scrollPosition > 40 ? 'bg-white' : ''}`"
  >
    <div class="header__container py-5 border-bottom-dark">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left d-flex items-center">
            <div class="header__logo pr-30 xl:pr-20 md:pr-0">
              <nuxt-link to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  src="/assets/img/general/logo-black.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div>
            <Menu :allClasses="'menu__nav text-dark-1 -is-active'" />
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
                :parentClassess="'relative pl-30 sm:pl-15'"
                :allClasses="'d-flex items-center text-dark-1'"
              />

              <div class="d-none xl:d-block pl-30 sm:pl-15">
                <button
                  class="text-dark-1 items-center"
                  data-el-toggle=".js-mobile-menu-toggle"
                  @click="() => setActiveMobileMenu(true)"
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
                class="button h-50 px-40 -purple-1 -rounded text-white ml-30 xl:ml-20"
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
import Menu from "../component/Menu.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly
import SearchToggle from "../component/SearchToggle.vue"; // Adjust the path accordingly
import CartToggle from "../component/CartToggle.vue"; // Adjust the path accordingly

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
