<template>
  <div class="swiper-slide">
    <div>
      <nuxt-img
        :src="data.imgSrc"
        width="190"
        height="247"
        style="width: 100%"
        class="w-1/1"
        alt="book"
      />

      <h5 class="text-17 fw-500 mt-15">{{ data.title }}</h5>

      <div class="d-flex items-center mt-10">
        <div class="d-flex x-gap-5">
          <div
            v-for="(itm, i) in rating"
            :key="i"
            class="icon-star text-9 text-yellow-1"
          ></div>
        </div>
        <div class="text-13 lh-1 ml-10">({{ data.ratingCount }})</div>
      </div>

      <div class="d-flex items-center pt-15">
        <div class="text-15 lh-1 line-through">${{ data.price }}</div>
        <div class="text-18 lh-1 text-purple-1 fw-500 ml-10">
          ${{ data.discountPrice }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const rating = ref([]);
const props = defineProps(["data"]);
onMounted(() => {
  for (let i = Math.round(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
