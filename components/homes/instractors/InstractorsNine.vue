<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="800">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Live Streams</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-auto" data-aos="fade-left" data-aos-duration="800">
          <a href="#" class="button -icon -purple-3 text-purple-1">
            See All
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </a>
        </div>
      </div>

      <div class="row y-gap-30 pt-60 lg:pt-40">
        <div
          v-for="(elm, i) in instractorsNine"
          :key="i"
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6"
        >
          <nuxt-link
            :to="`/instructors/${elm.id}`"
            class="d-flex flex-column items-center linkCustom"
          >
            <div>
              <nuxt-img
                :width="180"
                :height="180"
                :src="elm.image"
                alt="image"
              />
            </div>
            <h5 class="text-17 fw-500 mt-20">{{ elm.role }}</h5>
            <a href="#" class="text-light-1 mt-5">{{ elm.email }}</a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { instractorsNine } from "../../../data/instractors";
</script>

<style scoped>
/* Add your styles here */
</style>
