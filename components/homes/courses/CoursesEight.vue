<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-15 justify-center items-center">
        <div class="col-auto">
          <div
            class="sectionTitle d-flex flex-column items-center justify-center mt-30"
          >
            <h2 class="sectionTitle__title">Our Most Popular Courses</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
        <div class="d-flex items-center justify-center mt-40">
          <div
            class="d-flex flex-wrap x-gap-20 y-gap-20 justify-center items-center pl-15"
          >
            <div>
              <div
                class="dropdown js-dropdown js-drop1-active"
                :class="{ '-is-dd-active': currentDropdown === 'category' }"
              >
                <div
                  @click="() => toggleDropdown('category')"
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
                  :class="{ '-is-el-visible': currentDropdown === 'category' }"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in allCategories"
                      :key="i"
                      @click="() => setCurrentCategory(elm)"
                      class="d-block js-dropdown-link cursor"
                      :class="{ activeMenu: currentCategory === elm }"
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
                  @click="() => toggleDropdown('rating')"
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
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
                      @click="() => setRating(elm)"
                      :class="{
                        activeMenu: rating === elm,
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
                class="dropdown js-dropdown js-drop3-active"
                :class="{ '-is-dd-active': currentDropdown === 'difficulty' }"
              >
                <div
                  @click="() => toggleDropdown('difficulty')"
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                >
                  <span class="js-dropdown-title">
                    {{
                      currentdifficulty === "All"
                        ? "Difficulty"
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
                      @click="() => setCurrentdifficulty(elm)"
                      :class="{
                        activeMenu: currentdifficulty === elm,
                        'd-block js-dropdown-link cursor': true,
                      }"
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
          to="/courses-list-5"
            class="button -md -outline-light-5 text-dark-1"
          >
            View All Courses
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { coursesData } from "~/data/courses";
import { allCategories, viewStatus, difficulty } from "~/data/courses";
import CourseCardTwo from "@/components/homes/courseCards/CourseCardTwo";
const pageItems = ref([]);
const currentCategory = ref("All");
const rating = ref("All");
const currentdifficulty = ref("All");
const currentDropdown = ref("");

const toggleDropdown = (dropdown) => {
  currentDropdown.value = currentDropdown.value === dropdown ? "" : dropdown;
};

const setCurrentCategory = (selectedCategory) => {
  currentCategory.value = selectedCategory;
  if (selectedCategory === "All") {
    pageItems.value = coursesData;
  } else {
    pageItems.value = coursesData.filter(
      (elm) => elm.category === selectedCategory,
    );
  }
};

const setRating = (selectedRating) => {
  rating.value = selectedRating;
  if (selectedRating === "All") {
    pageItems.value = coursesData;
  } else {
    pageItems.value = coursesData.filter(
      (elm) => elm.viewStatus === selectedRating,
    );
  }
};

const setCurrentdifficulty = (selectedDifficulty) => {
  currentdifficulty.value = selectedDifficulty;
  if (selectedDifficulty === "All") {
    pageItems.value = coursesData;
  } else {
    pageItems.value = coursesData.filter(
      (elm) => elm.difficulty === selectedDifficulty,
    );
  }
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

const setCurrentDropdown = (dropdown) => {
  currentDropdown.value = dropdown;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
