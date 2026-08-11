<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-60 lg:pt-50">
        <div
          v-for="(elm, i) in topCatagoriesFour"
          :key="i"
          class="col-xl-3 col-lg-4 col-md-6 linkCustomTwo"
        >
          <nuxt-link
            :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
            class="categoryCard -type-3"
          >
            <div class="categoryCard__icon bg-light-3 mr-20">
              <i :class="elm.iconClass"></i>
            </div>
            <div class="categoryCard__content">
              <h4 class="categoryCard__title text-17 fw-500">
                {{ elm.title }}
              </h4>
              <div class="categoryCard__text text-13 lh-1 mt-5">
                {{ elm.courses }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { topCatagoriesFour } from "~/data/topCategories";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
