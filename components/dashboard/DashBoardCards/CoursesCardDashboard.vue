<!-- components/CoursesCardDashboard.vue -->

<template>
  <div class="w-1/5 xl:w-1/3 lg:w-1/2 sm:w-1/1">
    <div class="relative">
      <nuxt-img
        width="560"
        height="325"
        class="rounded-8 w-1/1"
        :src="data.thumbnailUrl"
        alt="image"
      />

      <!-- <button
        @click="toggleShare"
        class="absolute-button"
        data-el-toggle=".js-more-1-toggle"
      >
        <span
          class="d-flex items-center justify-center size-35 bg-white shadow-1 rounded-8"
        >
          <i class="icon-menu-vertical"></i>
        </span>
      </button> -->

      <div
        class="toggle-element -dshb-more js-more-1-toggle"
        :class="{ '-is-el-visible': activeShare }"
      >
        <div
          class="px-25 py-25 bg-white -dark-bg-dark-2 shadow-1 border-light rounded-8"
        >
          <a href="#" class="d-flex items-center">
            <div class="icon-share"></div>
            <div class="text-17 lh-1 fw-500 ml-12">Share</div>
          </a>

          <a href="#" class="d-flex items-center mt-20">
            <div class="icon-bookmark"></div>
            <div class="text-17 lh-1 fw-500 ml-12">Favorite</div>
          </a>
        </div>
      </div>
    </div>

    <div class="pt-15">
      <div class="d-flex y-gap-10 justify-between items-center">
        <div class="text-14 lh-1">{{ data.authorName }}</div>

        <div class="d-flex items-center">
          <div class="text-14 lh-1 text-yellow-1 mr-10">{{ data.averageRating }}</div>
          <div class="d-flex x-gap-5 items-center">
            <div
              v-for="(itm, i) in rating"
              :key="i"
              class="icon-star text-9 text-yellow-1"
            ></div>
          </div>
        </div>
      </div>

      <h3 class="text-16 fw-500 lh-15 mt-10">{{ data.titleEn }}</h3>

      <div class="progress-bar mt-10">
        <div class="progress-bar__bg bg-light-3"></div>
        <div class="progress-bar__bar bg-purple-1 w-1/5"></div>
      </div>

      <div class="d-flex y-gap-10 justify-between items-center mt-10">
        <div class="text-dark-1"> {{ data.completed }} Pending for Payment</div>
        <!-- <div>25%</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(["data"]);
const activeShare = ref(false);
const rating = ref([]);

const toggleShare = () => {
  activeShare.value = !activeShare.value;
};

onMounted(() => {
  for (let i = Math.floor(props.data.averageRating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
