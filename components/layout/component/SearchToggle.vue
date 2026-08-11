<template>
  <div :class="allClasses">
    <button
      @click="toggleSearch"
      :class="`d-flex items-center ${props.color ? props.color : 'text-white'}`"
      data-el-toggle=".js-search-toggle"
    >
      <i class="text-20 icon icon-search"></i>
    </button>

    <div
      class="toggle-element js-search-toggle"
      :class="{ '-is-el-visible': activeSearch }"
    >
      <div class="header-search pt-90 bg-white shadow-4" style="height: 650px">
        <div class="container">
          <div class="header-search__field">
            <div class="icon icon-search text-dark-1"></div>
            <input
              v-model="searchInput"
              required
              type="text"
              class="col-12 text-18 lh-12 text-dark-1 fw-500"
              placeholder="What do you want to learn?"
            />

            <button
              @click="toggleSearch"
              class="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
              data-el-toggle=".js-search-toggle"
            >
              <nuxt-img
                width="12"
                height="12"
                src="/assets/img/menus/close.svg"
                alt="icon"
              />
            </button>
          </div>

          <div class="header-search__content mt-30">
            <div class="text-17 text-dark-1 fw-500">Popular Right Now</div>

            <div class="d-flex y-gap-5 flex-column mt-20">
              <nuxt-link :to="`/courses/${5}`" class="text-dark-1">
                The Ultimate Drawing Course - Beginner to Advanced
              </nuxt-link>
              <nuxt-link to="/courses-single-2/3" class="text-dark-1">
                Character Art School: Complete Character Drawing Course
              </nuxt-link>
              <nuxt-link to="/courses-single-3/3" class="text-dark-1">
                Complete Blender Creator: Learn 3D Modelling for Beginners
              </nuxt-link>
              <nuxt-link to="/courses-single-4/3" class="text-dark-1">
                User Experience Design Essentials - Adobe XD UI UX Design
              </nuxt-link>
              <nuxt-link to="/courses-single-5/3" class="text-dark-1">
                Graphic Design Masterclass - Learn GREAT Design
              </nuxt-link>
              <nuxt-link to="/courses-single-6/3" class="text-dark-1">
                Adobe Photoshop CC – Essentials Training Course
              </nuxt-link>
            </div>

            <div class="mt-30">
              <button class="uppercase underline">
                PRESS ENTER TO SEE ALL SEARCH RESULTS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="header-search__bg" data-el-toggle=".js-search-toggle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["allClasses", "color"]);
const activeSearch = ref(false);
const searchInput = ref("");

const toggleSearch = () => {
  activeSearch.value = !activeSearch.value;
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
