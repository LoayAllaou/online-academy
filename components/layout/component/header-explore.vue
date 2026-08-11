<!-- components/HeaderExplore.vue -->
<template>
  <div :class="allClasses">
    <a
      href="#"
      @click="() => toggleExplore()"
      class="d-flex items-center"
      data-el-toggle=".js-explore-toggle"
    >
      <i class="icon icon-explore mr-15"></i>
      Explore
    </a>

    <div
      :class="`explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle ${
        exploreActive ? '-is-el-visible' : ''
      }  `"
    >
      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Architecture
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Business
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6}">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6}">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <a href="#" class="text-dark-1"> Computer Programming </a>
      </div>

      <div class="explore__item">
        <a href="#" class="text-dark-1"> Data Analysis </a>
      </div>

      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Design
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-3/3">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-4/3">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-5/3">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-6/3">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <nuxt-link to="/courses-single-6/3" class="text-dark-1">
          Education
        </nuxt-link>
      </div>

      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Electronics
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-3/3">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-4/3">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-5/3">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-6/3">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Language
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-3/3">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-4/3">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-5/3">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-6/3">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Marketing
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-3/3">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-4/3">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-5/3">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-6/3">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <a href="#" class="text-dark-1"> Music Arts </a>
      </div>

      <div class="explore__item">
        <a href="#" class="text-dark-1"> Social Science </a>
      </div>

      <div class="explore__item">
        <a
          href="#"
          class="d-flex items-center justify-between text-dark-1"
        >
          Photography & Video
          <div class="icon-chevron-right text-11"></div>
        </a>
        <div class="explore__subnav rounded-8">
          <nuxt-link class="text-dark-1" to="/courses/6">
            Web Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Graphic Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-3/3">
            Design Tools
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-4/3">
            User Experience Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-5/3">
            Game Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-6/3">
            3D & Animation
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses/6">
            Fashion Design
          </nuxt-link>
          <nuxt-link class="text-dark-1" to="/courses-single-2/3">
            Interior Design
          </nuxt-link>
        </div>
      </div>

      <div class="explore__item">
        <nuxt-link to="/courses/6" class="text-dark-1">
          IT & Software
        </nuxt-link>
      </div>

      <div class="explore__item">
        <nuxt-link to="/courses-single-2/3" class="text-purple-1 underline">
          View All Courses
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["allClasses"]);
const exploreActive = ref(false);

const toggleExplore = () => {
  exploreActive.value = !exploreActive.value;
};
</script>
