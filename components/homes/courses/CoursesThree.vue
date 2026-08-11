<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-15 justify-between items-center">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title sm:text-20">
              Our Most Popular Courses
            </h2>

            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-lg-auto">
          <div class="d-flex items-center">
            <div class="text-dark-1">Filter By:</div>

            <div class="d-flex flex-wrap x-gap-20 y-gap-20 items-center pl-15">
              <div>
                <div
                  class="dropdown js-dropdown js-drop1-active"
                  :class="{ '-is-dd-active': currentDropdown === 'category' }"
                >
                  <div
                    @click="() => handleDropdown('category')"
                    class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                  >
                    <span class="js-dropdown-title">
                      {{
                        currentCategory === "All" ? "Category" : currentCategory
                      }}
                    </span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle"
                    :class="{
                      '-is-el-visible': currentDropdown === 'category',
                    }"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div
                        v-for="(elm, i) in allCategories"
                        :key="i"
                        @click="() => selectCategory(elm)"
                        :class="{
                          activeMenu: currentCategory === elm,
                          'd-block js-dropdown-link cursor': true,
                        }"
                      >
                        {{ elm }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="dropdown js-dropdown js-drop2-active"
                  :class="{ '-is-dd-active': currentDropdown === 'rating' }"
                >
                  <div
                    @click="() => handleDropdown('rating')"
                    class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                    data-el-toggle=".js-drop2-toggle"
                    data-el-toggle-active=".js-drop2-active"
                  >
                    <span class="js-dropdown-title">
                      {{ rating === "All" ? "Rating" : rating }}
                    </span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop2-toggle"
                    :class="{ '-is-el-visible': currentDropdown === 'rating' }"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div
                        v-for="(elm, i) in viewStatus"
                        :key="i"
                        @click="() => selectRating(elm)"
                        class="d-block js-dropdown-link cursor"
                        :class="{ activeMenu: rating === elm }"
                      >
                        {{ elm }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="dropdown js-dropdown js-drop3-active"
                  :class="{ '-is-dd-active': currentDropdown === 'difficulty' }"
                >
                  <div
                    @click="() => handleDropdown('difficulty')"
                    class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                  >
                    <span class="js-dropdown-title">
                      {{
                        currentdifficulty === "All"
                          ? "Diffiulty"
                          : currentdifficulty
                      }}
                    </span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle"
                    :class="{
                      '-is-el-visible': currentDropdown === 'difficulty',
                    }"
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
            </div>
          </div>
        </div>
      </div>

      <div
        class="row y-gap-30 justify-start pt-50"
        data-aos="fade-right"
     
      >
        <CourseCardTwo
          v-for="(elm, i) in pageItems.slice(0, 8)"
          :key="i"
          :data="elm"
          :index="i"
        />
      </div>

      <div class="row justify-center pt-60 lg:pt-40">
        <div class="col-auto">
          <nuxt-link
            to="/courses-list-1"
            class="button -md -outline-purple-1 text-purple-1"
          >
            View All Courses
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const currentCategory = ref("All");
const rating = ref("All");
const currentdifficulty = ref("All");
const currentDropdown = ref("");
import CourseCardTwo from "@/components/homes/courseCards/CourseCardTwo";
import { allCategories } from "../../../data/courses";
import { coursesData } from "../../../data/courses";
import { viewStatus } from "../../../data/courses";
import { difficulty } from "../../../data/courses";

const pageItems = ref([]);

const handleDropdown = (dropdown) => {
  currentDropdown.value = currentDropdown.value === dropdown ? "" : dropdown;
};

const selectCategory = (category) => {
  currentCategory.value = category;
  currentDropdown.value = "";
};

const selectRating = (selectedRating) => {
  rating.value = selectedRating;
  currentDropdown.value = "";
};

const selectDifficulty = (selectedDifficulty) => {
  currentdifficulty.value = selectedDifficulty;
  currentDropdown.value = "";
};

onMounted(() => {
  setCurrentDropdown("");

  let filtered = [];

  if (currentCategory.value === "All") {
    filtered = coursesData;
  } else {
    filtered = coursesData.filter(
      (elm) => elm.category === currentCategory.value,
    );
  }

  if (rating.value !== "All") {
    filtered = filtered.filter((elm) => elm.viewStatus === rating.value);
  }

  if (currentdifficulty.value !== "All") {
    filtered = filtered.filter(
      (elm) => elm.difficulty === currentdifficulty.value,
    );
  }

  pageItems.value = filtered;
});

watch([rating, currentdifficulty, currentCategory], () => {
  setCurrentDropdown("");

  let filtered = [];

  if (currentCategory.value === "All") {
    filtered = coursesData;
  } else {
    filtered = coursesData.filter(
      (elm) => elm.category === currentCategory.value,
    );
  }

  if (rating.value !== "All") {
    filtered = filtered.filter((elm) => elm.viewStatus === rating.value);
  }

  if (currentdifficulty.value !== "All") {
    filtered = filtered.filter(
      (elm) => elm.difficulty === currentdifficulty.value,
    );
  }

  pageItems.value = filtered;
});

const setCurrentDropdown = (dropdown) => {
  currentDropdown.value = dropdown;
};
</script>

<style scoped>
/* Add your component styles here */
</style>
