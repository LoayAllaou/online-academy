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
          v-for="(elm, i) in learningPathTwo"
          :key="i"
          class="col-lg-3 col-md-6"
        >
          <div class="coursesCard -type-3 text-center">
            <div
              :class="`coursesCard__icon ${
                elm.bgColor ? elm.bgColor : ' bg-green-3'
              }`"
            >
              <nuxt-img
                width="50"
                height="50"
                :src="elm.icon"
                alt="icon"
              ></nuxt-img>
            </div>

            <div class="coursesCard__content mt-30">
              <h5 class="coursesCard__title text-18 lh-1 fw-500">
                {{ elm.title }}
              </h5>
              <p class="coursesCard__text text-14 mt-10">{{ elm.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { learningPathTwo } from "~/data/learningPaths";
</script>

<style scoped>
/* Add your styles here */
</style>
