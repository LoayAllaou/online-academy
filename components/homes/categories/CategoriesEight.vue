<template>
  <section class="layout-pt-lg layout-pb-md">
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

      <div
        class="row x-gap-40 y-gap-40 justify-between lg:justify-center pt-60 lg:pt-40"
      >
        <div
          v-for="(elm, i) in topCatagoriesEight"
          :key="i"
          class="col-lg-auto col-sm-4 col-6 linkCustomTwo"
        >
          <nuxt-link
            :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
            class="text-center"
          >
            <div
              class="d-flex justify-center items-center rounded-8 size-90 mx-auto bg-orange-2"
            >
              <nuxt-img :width="40" :height="40" :src="elm.icon" alt="icon" />
            </div>
            <h5 class="text-17 lh-15 fw-500 mt-20">
              {{ elm.title.split(" ").slice(0, -1).join(" ") }}
              <br />
              {{ elm.title.split(" ").slice(-1)[0] }}
            </h5>
            <p class="text-13 lh-1 mt-10">{{ `${elm.courses}+ Courses` }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { topCatagoriesEight } from "~/data/topCategories";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
