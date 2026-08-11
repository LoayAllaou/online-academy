<!-- PinInactiveContent.vue -->

<template>
  <div id="js-pin-content" class="courses-single-info js-pin-content">
    <div class="bg-white shadow-2 rounded-8 border-light py-10 px-10">
      <div class="relative">
        <nuxt-img
          width="368"
          height="238"
          class="w-1/1"
          :src="pageItem.imageSrc"
          alt="image"
        />
        <div class="absolute-full-center d-flex justify-center items-center">
          <div
            @click="openModal"
            class="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
            data-gallery="gallery1"
          >
            <div class="icon-play text-18"></div>
          </div>
        </div>
      </div>

      <div class="courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20">
        <div class="d-flex justify-between items-center mb-30">
          <div v-if="pageItem.paid" class="text-24 lh-1 text-dark-1 fw-500">
            ${{ pageItem.discountedPrice.toFixed(2) }}
          </div>
          <div v-else class="text-24 lh-1 text-dark-1 fw-500">Free</div>
          <div v-if="pageItem.paid" class="lh-1 line-through">
            ${{ pageItem.originalPrice.toFixed(2) }}
          </div>
        </div>

        <button
          class="button -md -purple-1 text-white w-1/1"
          @click="addCourseToCart"
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
  <ModalVideoComponent videoId="LlCwHnp3kL4" :isOpen="isOpen" @close="close" />
</template>

<script setup>
import { ref } from "vue";
import ModalVideoComponent from "../common/ModalVideo";
const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};
const close = () => {
  isOpen.value = false;
};
import {
  isAddedToCartCourses,
  addCourseToCart,
} from "../../composables/states";

// You can use `pageItem` as a prop
const props = defineProps(["pageItem"]);

// Update method and computed properties as needed
</script>
