<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-end">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div class="col-auto">
          <a href="#" class="button -icon -purple-3 text-purple-1">
            All Categories
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </a>
        </div>
      </div>

      <div class="row y-gap-50 pt-60 lg:pt-50">
        <div
          v-for="(elm, i) in topCategoriesTwo"
          :key="i"
          class="col-xl-3 col-lg-4 col-sm-6 linkCustomTwo"
        >
          <nuxt-link
            :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
            class="categoryCard -type-2"
          >
            <div class="categoryCard__image mr-20">
              <nuxt-img
                :src="elm.imageSrc"
                :alt="`image-${i}`"
                width="80"
                height="80"
              />
            </div>
            <div class="categoryCard__content">
              <h4 class="categoryCard__title text-17 fw-500">
                {{ elm.title }}
              </h4>
              <div class="categoryCard__text text-13 lh-1 mt-5">
                {{ elm.text }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { topCategoriesTwo } from "~/data/topCategories";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
