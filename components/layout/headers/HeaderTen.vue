<template>
  <header class="header -type-1 js-header">
    <div class="header__container">
      <div class="row justify-between items-center">
        <div class="col-auto">
          <div class="header-left">
            <div class="header__logo">
              <nuxt-link data-barba to="/">
                <nuxt-img
                  width="140"
                  height="50"
                  src="/assets/img/general/logo.svg"
                  alt="logo"
                />
              </nuxt-link>
            </div>

            <HeaderExplore
              :allClasses="'header__explore text-green-1 ml-60 xl:ml-30 lg:d-none'"
            />
          </div>
        </div>

        <div class="col-auto lg:d-none">
          <div class="text-20 lh-1 text-white fw-500">
            The Ultimate Drawing Course Beginner to Advanced
          </div>
        </div>

        <div class="col-auto">
          <div class="header-right d-flex items-center">
            <div class="header-right__buttons">
              <a
              href="#"
                class="button -sm -rounded -white text-dark-1"
              >
                Back to Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderExplore from "../component/header-explore.vue";
</script>
