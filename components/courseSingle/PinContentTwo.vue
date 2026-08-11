<template>
  <div
    id="js-pin-content"
    :style="
      screenWidth < 991
        ? { height: 'fit-content', right: '0%' }
        : { height: '100%', right: '7%' }
    "
    class="courses-single-info js-pin-content"
  >
    <div
      style="position: sticky; top: 200px"
      class="bg-white shadow-2 rounded-8 border-light py-10 px-10"
    >
      <div class="courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20">
        <div class="d-flex justify-between items-center mb-30">
          <template v-if="pageItem.paid">
            <div class="text-24 lh-1 text-dark-1 fw-500">
              ${{ pageItem.discountedPrice.toFixed(2) }}
            </div>
            <div class="lh-1 line-through">${{ pageItem.originalPrice.toFixed(2) }}</div>
          </template>
          <template v-else>
            <div class="text-24 lh-1 text-dark-1 fw-500">Free</div>
            <div></div>
          </template>
        </div>

        <button
          @click="() => addCourseToCart(pageItem.id)"
          class="button -md -purple-1 text-white w-1/1"
        >
          {{
            isAddedToCartCourses(pageItem.id) ? "Already Added" : "Add To Cart"
          }}
        </button>
        <button class="button -md -outline-dark-1 text-dark-1 w-1/1 mt-10">
          Buy Now
        </button>

        <div class="text-14 lh-1 text-center mt-30">
          30-Day Money-Back Guarantee
        </div>

        <div class="mt-25">
          <div class="d-flex justify-between py-8">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-video-file"></div>
              <div class="ml-10">Lessons</div>
            </div>
            <div>20</div>
          </div>

          <div class="d-flex justify-between py-8 border-top-light">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-puzzle"></div>
              <div class="ml-10">Quizzes</div>
            </div>
            <div>3</div>
          </div>

          <div class="d-flex justify-between py-8 border-top-light">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-clock-2"></div>
              <div class="ml-10">Duration</div>
            </div>
            <div>13 Hours</div>
          </div>

          <div class="d-flex justify-between py-8 border-top-light">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-bar-chart-2"></div>
              <div class="ml-10">Skill level</div>
            </div>
            <div>Beginner</div>
          </div>

          <div class="d-flex justify-between py-8 border-top-light">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-translate"></div>
              <div class="ml-10">Language</div>
            </div>
            <div>English</div>
          </div>

          <div class="d-flex justify-between py-8 border-top-light">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-badge"></div>
              <div class="ml-10">Certificate</div>
            </div>
            <div>Yes</div>
          </div>

          <div class="d-flex justify-between py-8 border-top-light">
            <div class="d-flex items-center text-dark-1">
              <div class="icon-infinity"></div>
              <div class="ml-10">Full lifetime access</div>
            </div>
            <div>Yes</div>
          </div>
        </div>

        <div class="d-flex justify-center pt-15">
          <a
            href="#"
            class="d-flex justify-center items-center size-40 rounded-full"
          >
            <i class="fa fa-facebook"></i>
          </a>

          <a
            href="#"
            class="d-flex justify-center items-center size-40 rounded-full"
          >
            <i class="fa fa-twitter"></i>
          </a>

          <a
            href="#"
            class="d-flex justify-center items-center size-40 rounded-full"
          >
            <i class="fa fa-instagram"></i>
          </a>

          <a
            href="#"
            class="d-flex justify-center items-center size-40 rounded-full"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <ModalVideoComponent
    :videoId="'LlCwHnp3kL4'"
    :isOpen="isOpen"
    @close="close"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ModalVideoComponent from "../common/ModalVideo";
const props = defineProps(["pageItem"]);
const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
const screenWidth = ref();

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

import {
  isAddedToCartCourses,
  addCourseToCart,
} from "../../composables/states";
</script>
