<template>
  <header class="header -type-4 -shadow bg-white border-bottom-light js-header">
    <div class="header__container py-10">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left d-flex items-center">
            <div class="header__logo pr-30 xl:pr-20 md:pr-0">
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
              allClasses="header__explore px-30 xl:px-20 -before-border -after-border xl:d-none"
            />

            <Menu
              headerPosition="pl-30 xl:pl-20"
              allClasses="menu__nav text-dark-1 -is-active"
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
              <SearchToggle color="text-dark-1" allClasses="pr-20 sm:pr-15" />

              <CartToggle allClasses="d-flex items-center text-dark-1" />

              <div class="d-none xl:d-block -before-border pl-20 sm:pl-15">
                <button
                  @click="() => setActiveMobileMenu(true)"
                  class="text-dark-1 items-center"
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i class="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            <div class="header-right__buttons d-flex items-center lg:d-none">
              <a
                href="#"
                class="button -underline text-dark-1 -before-border py-3 pl-30 xl:pl-20"
              >
                Log in
              </a>
              <a
                href="#"
                class="button h-50 px-25 -purple-3 -rounded text-purple-1 ml-20"
              >
                Sign up
              </a>
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
import Menu from "../component/Menu.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly

import CartToggle from "../component/CartToggle.vue"; // Adjust the path accordingly
import SearchToggle from "../component/SearchToggle.vue"; // Adjust the path accordingly

const activeMobileMenu = ref(false);
const setActiveMobileMenu = (val) => {
  activeMobileMenu.value = val;
};
</script>
