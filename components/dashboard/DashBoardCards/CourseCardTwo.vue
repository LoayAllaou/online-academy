<!-- components/CourseCardTwo.vue -->

<template>
  <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6">
    <nuxt-link :to="`/courses/${data.id}`">
      <div>
        <nuxt-img
          width="460"
          height="325"
          class="rounded-8 w-1/1"
          :src="data.imageSrc"
          alt="image"
        />
      </div>

      <div class="pt-15">
        <div class="d-flex y-gap-10 justify-between items-center">
          <div class="text-14 lh-1">{{ data.authorName }}</div>

          <div class="d-flex items-center">
            <div class="text-14 lh-1 text-yellow-1 mr-10">
              {{ data.rating }}
            </div>
            <div class="d-flex x-gap-5 items-center">
              <div
                v-for="(itm, i) in rating"
                :key="i"
                class="icon-star text-9 text-yellow-1"
              ></div>
            </div>
          </div>
        </div>

        <h3 class="text-16 fw-500 lh-15 mt-10">{{ data.title }}</h3>

        <div class="progress-bar mt-10">
          <div class="progress-bar__bg bg-light-3"></div>
          <div
            class="progress-bar__bar bg-purple-1"
            :style="{ width: `${data.progress}%` }"
          ></div>
        </div>

        <div class="d-flex y-gap-10 justify-between items-center mt-10">
          <div class="text-dark-1">% {{ data.completed }} Completed</div>
          <div>25%</div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["data"]);

const rating = ref([]);

onMounted(() => {
  for (let i = Math.floor(props.data.rating); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
