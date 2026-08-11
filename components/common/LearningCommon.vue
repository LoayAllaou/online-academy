<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">
              Start your Learning Journey Today!
            </h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between pt-60 lg:pt-50">
        <div
          v-for="(elm, i) in learningPathFive"
          :key="`learningPath-${i}`"
          class="col-lg-3 col-md-6"
        >
          <div
            class="coursesCard -type-2 text-center pt-50 pb-40 px-30 bg-white rounded-8"
          >
            <div class="coursesCard__image">
              <nuxt-img width="60" height="60" :src="elm.image" alt="image" />
            </div>
            <div class="coursesCard__content mt-30">
              <h5 class="coursesCard__title text-18 lh-1 fw-500">
                {{ elm.title }}
              </h5>
              <p class="coursesCard__text text-14 mt-10">
                {{ elm.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { learningPathFive } from "../../data/learningPaths";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
