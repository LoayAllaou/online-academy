<template>
  <div class="swiper-slide">
    <div
      class="testimonials -type-3 sm:px-20 sm:py-40 bg-white"
      data-aos="fade-left"
      data-aos-duration="(index + 1) * 600"
    >
      <div class="row y-gap-30 md:text-center md:justify-center">
        <div class="col-md-auto">
          <div class="testimonials__image">
            <nuxt-img :src="data.image" alt="image" width="170" height="160" />
          </div>
        </div>

        <div class="col-md">
          <div class="d-flex items-center md:justify-center">
            <span class="text-14 lh-1 text-yellow-1">{{ data.rating }}</span>
            <div class="x-gap-5 px-10">
              <i
                v-for="(elm, i) in rating"
                :key="i"
                class="text-11 icon-star text-yellow-1"
              ></i>
            </div>
            <span class="text-13 lh-1">({{ data.numRatings }})</span>
          </div>

          <p class="testimonials__text text-16 lh-17 fw-500 mt-15">
            “{{ data.text }}”
          </p>

          <div class="mt-15">
            <div class="text-15 lh-1 text-dark-1 fw-500">{{ data.name }}</div>
            <div class="text-13 lh-1 mt-10">{{ data.profession }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["data", "index"]);
const rating = ref([]);

onMounted(() => {
  for (let i = Math.round(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
