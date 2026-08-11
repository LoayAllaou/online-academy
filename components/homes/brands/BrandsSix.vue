<template>
  <section class="pt-45 pb-15 bg-dark-2">
    <div class="container">
      <div class="row justify-center">
        <div class="col text-center">
          <p class="text-lg text-white">Trusted by the world’s best</p>
        </div>
      </div>

      <div
        class="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50"
      >
        <div
          v-for="(logo, i) in brands"
          :key="i"
          class="col-lg-auto col-md-3 col-sm-4 col-6"
        >
          <div class="d-flex justify-center items-center px-4">
            <nuxt-img
              class="w-1/1"
              :src="logo ? logo : ''"
              alt="clients image"
              width="90"
              height="30"
              style="object-fit: contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="svg-shape">
    <svg
      width="1925"
      height="261"
      viewBox="0 0 1925 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
        fill="#1A064F"
      />
    </svg>
  </div>
</template>

<script setup>
import { brands } from "~/data/brands";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
