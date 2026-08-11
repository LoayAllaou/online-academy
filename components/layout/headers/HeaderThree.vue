<template>
  <header class="header -type-3 js-header">
    <div class="header__container py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left d-flex items-center">
            <div class="header__logo">
              <nuxt-link to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  src="/assets/img/general/logo-dark.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div>
            <HeaderExplore
              :allClasses="'header__explore text-purple-1 ml-30 xl:d-none'"
            />

            <div class="header-search-field ml-30">
              <form @submit.prevent="handleSubmit">
                <div class="header-search-field__group">
                  <input
                    required
                    type="text"
                    placeholder="What do you want to learn?"
                  />
                  <button type="submit">
                    <i class="icon icon-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__icons text-white d-flex items-center">
              <Menu :allClasses="'menu__nav text-dark-1 -is-active'" />
              <MobileMenu
                @setActiveMobileMenu="setActiveMobileMenu"
                :activeMobileMenu="activeMobileMenu"
              />

              <CartToggle
                :parentClassess="'relative ml-30 xl:ml-20'"
                :allClasses="'d-flex items-center text-dark-1'"
              />

              <div class="d-none xl:d-block ml-20">
                <button
                  @click="() => setActiveMobileMenu(true)"
                  class="text-dark-1 items-center"
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div
              class="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none"
            >
              <nuxt-link
                to="/login"
                class="button px-30 h-50 -outline-dark-1 text-dark-1"
              >
                Log in
              </nuxt-link>
              <nuxt-link
                to="/signup"
                class="button px-30 h-50 -dark-1 text-white ml-10"
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
import { ref } from "vue";

import HeaderExplore from "../component/header-explore.vue";
import CartToggle from "../component/CartToggle.vue"; // Adjust the path accordingly
import Menu from "../component/Menu.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly

const activeMobileMenu = ref(false);
const setActiveMobileMenu = (val) => {
  activeMobileMenu.value = val;
};
const handleSubmit = () => {
  // Handle form submission
};
</script>
