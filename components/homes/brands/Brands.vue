<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="row justify-center">
        <div class="col text-center">
          <p class="text-lg text-dark-1">Trusted by the world’s best</p>
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
              :src="logo && logo"
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
</template>

<script setup>
import { brands } from "~/data/brands";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
