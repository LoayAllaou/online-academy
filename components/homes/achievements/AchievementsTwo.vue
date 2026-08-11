<template>
  <section class="layout-pt-md layout-pb-md bg-beige-1">
    <div class="container">
      <div class="row y-gap-30">
        <div
          v-for="(elm, i) in schoolAchievement"
          :key="i"
          class="col-lg-3 col-sm-6"
        >
          <div
            v-show="elm"
            class="counter -type-1"
            data-aos="fade-left"
            data-aos-duration="(i + 1) * 400"
          >
            <div class="counter__number text-dark-1">{{ elm.title }}</div>
            <div class="counter__title text-light-1">{{ elm.text }}</div>
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
