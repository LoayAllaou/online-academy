<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="row x-gap-50 y-gap-30 justify-between pt-60 lg:pt-40">
        <div
          v-for="(elm, i) in topCatagoriesSeven"
          :key="i"
          class="col-lg-2 linkCustomTwo"
        >
          <h4 class="text-17 fw-500">{{ elm.title }}</h4>
          <div class="y-gap-5 pt-15">
            <div v-for="(itm, index) in elm.items" :key="index" class="">
              {{ itm.title }}
            </div>
          </div>
          <nuxt-link
            :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
            class="d-block underline text-purple-1 fw-500 mt-15 cursor"
          >
            More
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { topCatagoriesSeven } from "~/data/topCategories";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
