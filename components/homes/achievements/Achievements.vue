<template>
  <section class="layout-pt-lg layout-pb-lg section-bg">
    <div class="section-bg__item bg-light-6"></div>

    <div class="container">
      <div class="row y-gap-20 justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">School Achievements</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="row pt-60">
        <div
          v-for="(elm, i) in schoolAchievement"
          :key="i"
          class="col-lg-3 col-md-6"
        >
          <div class="infoCard -type-2 text-center py-40 -infoCard-hover">
            <div class="infoCard__image">
              <nuxt-img
                :width="50"
                :height="50"
                :src="elm.imageSrc"
                alt="image"
              />
            </div>
            <h5 class="infoCard__title text-24 lh-1 mt-25">{{ elm.title }}</h5>
            <p class="infoCard__text mt-5">{{ elm.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { schoolAchievement } from "~/data/achievements";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
