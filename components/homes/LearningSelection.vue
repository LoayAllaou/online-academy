<template>
  <section class="layout-pt-lg layout-pb-lg border-top-light">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">
              Get personal learning recommendations
            </h2>
            <p class="sectionTitle__text">
              Enhance your skills with the best online courses
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-20 justify-center pt-30">
        <div class="col-auto">
          <div
            class="dropdown js-dropdown js-drop1-active"
            :class="{ '-is-dd-active': currentDropdown === 'category' }"
          >
            <div
              @click="() => toggleDropdown('category')"
              class="dropdown__button d-flex items-center text-14 border-light h-60"
            >
              <span class="js-dropdown-title">
                {{ currentCategory === "All" ? "Category" : currentCategory }}
              </span>
              <i class="icon text-9 ml-40 icon-chevron-down"></i>
            </div>

            <div
              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle"
              :class="{ '-is-el-visible': currentDropdown === 'category' }"
            >
              <div class="text-14 y-gap-15 js-dropdown-list">
                <div
                  v-for="(elm, i) in allCategories"
                  :key="i"
                  @click="() => selectCategory(elm)"
                  class="d-block js-dropdown-link cursor"
                  :class="{ activeMenu: currentCategory === elm }"
                >
                  {{ elm }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div
            class="dropdown js-dropdown js-drop3-active"
            :class="{ '-is-dd-active': currentDropdown === 'difficulty' }"
          >
            <div
              @click="() => toggleDropdown('difficulty')"
              class="dropdown__button d-flex items-center text-14 border-light h-60"
            >
              <span class="js-dropdown-title">
                {{
                  currentdifficulty === "All" ? "Diffiulty" : currentdifficulty
                }}
              </span>
              <i class="icon text-9 ml-40 icon-chevron-down"></i>
            </div>

            <div
              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle"
              :class="{ '-is-el-visible': currentDropdown === 'difficulty' }"
            >
              <div class="text-14 y-gap-15 js-dropdown-list">
                <div
                  v-for="(elm, i) in difficulty"
                  :key="i"
                  @click="() => selectDifficulty(elm)"
                  class="d-block js-dropdown-link cursor"
                  :class="{ activeMenu: currentdifficulty === elm }"
                >
                  {{ elm }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/courses-list-1"
            class="button -md -purple-1 text-white"
          >
            Get Started Now
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import { allCategories, difficulty } from "@/data/courses";

const currentCategory = ref("All");
const currentdifficulty = ref("All");
const currentDropdown = ref("");

const toggleDropdown = (dropdown) => {
  currentDropdown.value = currentDropdown.value === dropdown ? "" : dropdown;
};

const selectCategory = (category) => {
  currentCategory.value = category;
  currentDropdown.value = "";
};

const selectDifficulty = (difficulty) => {
  currentdifficulty.value = difficulty;
  currentDropdown.value = "";
};
</script>
