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

      <div class="row y-gap-30 pt-50">
        <div class="col-lg-6">
          <div class="row y-gap-30">
            <nuxt-link
              v-for="(elm, i) in topCatagoriesThree.slice(0, 4)"
              :key="i"
              :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
              class="col-md-6 linkCustomTwo"
            >
              <div class="categoryCard -type-1">
                <div class="categoryCard__image">
                  <div
                    class="bg-image ratio ratio-30:16 js-lazy"
                    :style="{ backgroundImage: `url(${elm.imageSrc})` }"
                  ></div>
                </div>

                <div class="categoryCard__content text-center">
                  <h4
                    class="categoryCard__title text-17 lh-15 fw-500 text-white"
                  >
                    {{ elm.title }}
                  </h4>
                  <div
                    class="categoryCard__subtitle text-13 text-white lh-1 mt-5"
                  >
                    {{ elm.courses }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="row y-gap-30">
            <nuxt-link to="/courses-list-5" class="col-12 categoryCard -type-1">
              <div class="categoryCard__image">
                <div
                  class="bg-image ratio ratio-30:35 js-lazy"
                  :style="{
                    backgroundImage: `url(${topCatagoriesThree[4].imageSrc})`,
                  }"
                ></div>
              </div>
              <div class="categoryCard__content text-center">
                <h4 class="categoryCard__title text-17 lh-15 fw-500 text-white">
                  {{ topCatagoriesThree[4].title }}
                </h4>
                <div
                  class="categoryCard__subtitle text-13 text-white lh-1 mt-5"
                >
                  {{ topCatagoriesThree[4].courses }}
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="row y-gap-30">
            <nuxt-link
              v-for="(elm, i) in topCatagoriesThree.slice(5, 7)"
              :key="i"
              :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
              class="col-lg-12"
            >
              <div class="categoryCard -type-1">
                <div class="categoryCard__image">
                  <div
                    class="bg-image ratio ratio-30:16 js-lazy"
                    :style="{ backgroundImage: `url(${elm.imageSrc})` }"
                  ></div>
                </div>
                <div class="categoryCard__content text-center">
                  <h4
                    class="categoryCard__title text-17 lh-15 fw-500 text-white"
                  >
                    {{ elm.title }}
                  </h4>
                  <div
                    class="categoryCard__subtitle text-13 text-white lh-1 mt-5"
                  >
                    {{ elm.courses }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { topCatagoriesThree } from "~/data/topCategories";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
