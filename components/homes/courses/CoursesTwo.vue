<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-15 justify-between items-center">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Recent courses</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-lg-auto">
          <div class="d-inline-block">
            <div
              class="dropdown js-dropdown js-category-active"
              :class="{ '-is-dd-active': dropdownOpen }"
            >
              <div
                @click="toggleDropdown"
                class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
              >
                <span class="js-dropdown-title">Popular Most Viewed</span>
                <i class="icon text-9 ml-40 icon-chevron-down"></i>
              </div>

              <div
                class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                :class="{ '-is-el-visible': dropdownOpen }"
              >
                <div class="text-14 y-gap-15 js-dropdown-list">
                  <div
                    v-for="(elm, i) in viewStatus"
                    :key="i"
                    @click="() => setCurrentCourseState(elm)"
                    class="d-block js-dropdown-link cursor"
                    :class="{ activeMenu: currentCourseState === elm }"
                  >
                    {{ elm }}
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
        <CourceCard
          v-for="(elm, i) in pageItem.slice(0, 8)"
          :key="i"
          :index="i"
          :data="elm"
        />
      </div>

      <div class="row justify-center pt-60 lg:pt-40">
        <div class="col-auto">
          <nuxt-link
            to="/courses-list-1"
            class="button -icon -purple-3 text-purple-1"
          >
            All Courses
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import CourceCard from "../courseCards/CourseCard";

const dropdownOpen = ref(false);
const currentCourseState = ref("All");
const pageItem = ref([]);

const setPageItem = (val) => {
  pageItem.value = val;
};
import { coursesData } from "../../../data/courses";
import { viewStatus } from "../../../data/courses";

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const setCurrentCourseState = (state) => {
  currentCourseState.value = state;
  dropdownOpen.value = false;
};

onMounted(() => {
  setDropdownOpen(false);

  if (currentCourseState.value === "All") {
    setPageItem(coursesData);
  } else {
    const filtered = coursesData.filter(
      (elm) => elm.viewStatus === currentCourseState.value,
    );
    setPageItem(filtered);
  }
});

watch(currentCourseState, () => {
  setDropdownOpen(false);

  let filtered = [];

  if (currentCourseState.value === "All") {
    filtered = coursesData;
  } else {
    filtered = coursesData.filter(
      (elm) => elm.viewStatus === currentCourseState.value,
    );
  }

  setPageItem(filtered);
});

const setDropdownOpen = (isOpen) => {
  dropdownOpen.value = isOpen;
};
</script>

<style scoped>
/* Add your component styles here */
</style>
