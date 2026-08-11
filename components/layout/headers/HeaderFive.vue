<template>
  <header data-add-bg class="header -type-4 -shadow bg-white js-header">
    <div class="header__container border-bottom-light py-10">
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
              :activeMobileMenu="activeMobileMenu"
              @setActiveMobileMenu="setActiveMobileMenu"
            />
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__icons text-white d-flex items-center">
              <div class="header-search-field">
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

              <CartToggle
                :allClasses="'d-flex items-center text-dark-1'"
                :parentClassess="'relative -after-border pl-20 sm:pl-15'"
              />

              <div class="d-none xl:d-block pl-20 sm:pl-15">
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
              class="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none"
            >
              <nuxt-link to="/login" class="button -underline text-purple-1">
                Log in
              </nuxt-link>
              <nuxt-link
                to="/signup"
                class="button h-50 px-30 -purple-1 -rounded text-white ml-20"
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
import Menu from "../component/Menu.vue"; // Adjust the path accordingly
import MobileMenu from "../component/MobileMenu.vue"; // Adjust the path accordingly

import CartToggle from "../component/CartToggle.vue"; // Adjust the path accordingly

const activeMobileMenu = ref(false);
const setActiveMobileMenu = (val) => {
  activeMobileMenu.value = val;
};

const handleSubmit = (e) => {
  e.preventDefault();
};
</script>
