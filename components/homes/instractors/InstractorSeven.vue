<template>
  <section class="layout-pt-lg layout-pb-md bg-light-4">
    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-lg-6">
          <div class="composition -type-4">
            <div class="-el-1">
              <nuxt-img
                :width="600"
                :height="600"
                class="w-1/1"
                :src="featuredTracher.imgSrc"
                alt="image"
              />
            </div>

            <div class="-el-2">
              <div
                class="px-40 py-40 sm:px-25 sm:py-25 bg-white shadow-4 rounded-8"
              >
                <div class="d-inline-block">
                  <div
                    class="px-15 py-8 rounded-200 bg-orange-1 text-11 lh-1 text-white"
                  >
                    FEATURED TEACHER
                  </div>
                </div>
                <div class="text-18 lh-18 text-dark-1 fw-500 mt-30">
                  “{{ featuredTracher.desc }}”
                </div>
                <div class="mt-30">
                  <div class="text-15 lh-12 text-dark-1 fw-500">
                    {{ featuredTracher.name }}
                  </div>
                  <div class="text-14 lh-12 mt-5">
                    {{ featuredTracher.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-5 col-lg-6 col-md-9">
          <h3 class="text-45 md:text-30 lh-11">
            <span class="text-purple-1">Courses</span> taught by industry
            leaders around the world
          </h3>
          <p class="mt-25">
            Use the list below to bring attention to your product’s key
            <br class="lg:d-none" />
            differentiator.
          </p>
          <div class="d-flex x-gap-15 y-gap-15 flex-wrap pt-30">
            <div>
              <a href="#" class="button -md -dark-1 text-white">
                Browse Teacher
              </a>
            </div>
            <div>
              <a href="#" class="button -md -outline-dark-1 text-dark-1">
                Become a Teacher
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuredTracher } from "../../../data/instractors";
</script>

<style scoped>
/* Add your styles here */
</style>
