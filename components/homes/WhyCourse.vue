<template>
  <section class="layout-pt-lg layout-pb-lg bg-dark-2">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2
              class="sectionTitle__title text-white"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Why learn with our courses?
            </h2>

            <p
              class="sectionTitle__text text-white"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-50">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="col-lg-4 col-md-6"
          data-aos="`fade-up`"
          data-aos-duration="`${(index + 1) * 400}`"
        >
          <div class="stepCard -type-1 -stepCard-hover">
            <div class="stepCard__content">
              <div class="stepCard__icon">
                <i :class="step.icon"></i>
              </div>
              <h4 class="stepCard__title">{{ step.title }}</h4>
              <p class="stepCard__text">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { steps } from "~/data/steps";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
