<template>
  <section class="layout-pt-sm layout-pb-sm border-bottom-light">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div v-for="(elm, i) in featureTwo" :key="i" class="col-xl-3 col-md-6">
          <div class="d-flex items-center">
            <div class="mr-20">
              <nuxt-img
                :src="elm.imgSrc"
                :alt="'icon'"
                width="50"
                height="50"
              />
            </div>

            <div>
              <h4 class="text-20 fw-500">{{ elm.title }}</h4>
              <div class="text-dark-1">{{ elm.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featureTwo } from "../../../data/features";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
