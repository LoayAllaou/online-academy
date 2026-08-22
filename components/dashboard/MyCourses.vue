<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">My Courses</h1>
          <div class="mt-10"></div>
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="tabs -active-purple-2 js-tabs">
              <div class="tabs__controls d-flex items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                <button :class="`text-light-1 lh-12 tabs__button js-tabs-button ${activeTab == 1 ? 'is-active' : ''
                  } `" type="button" @click="() => (activeTab = 1)">
                  All Courses
                </button>
                <button :class="`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${activeTab == 2 ? 'is-active' : ''
                  } `" data-tab-target=".-tab-item-2" type="button" @click="() => (activeTab = 2)">
                  Pending for Payment
                </button>
                <!-- <button
                  :class="`text-light-1 lh-12 tabs__button js-tabs-button ml-30 ${
                    activeTab == 3 ? 'is-active' : ''
                  } `"
                  data-tab-target=".-tab-item-3"
                  type="button"
                  @click="() => (activeTab = 3)"
                >
                  Not enrolled
                </button> -->
              </div>

              <div class="tabs__content py-30 px-30 js-tabs-content">
                <div class="tabs__pane -tab-item-1 is-active">
                  <div class="row y-gap-10 justify-between">
                    <div class="col-auto">
                      <form
  class="search-field border-light rounded-8 h-50"
  @submit.prevent="applyFilters"
>
  <input
    v-model="searchQuery"
    class="bg-white -dark-bg-dark-2 pr-50"
    type="text"
    placeholder="Search Courses"
  />

  <button type="submit">
    <i class="icon-search text-light-1 text-20"></i>
  </button>
</form>
                    </div>

                    <!-- <div class="col-auto">
                      <div class="d-flex flex-wrap y-gap-10 x-gap-20">
                        <div>
                          <div
                            id="dd14button"
                            @click="
                              () => toggleDropdown('dd14button', 'dd14content')
                            "
                            class="dropdown js-dropdown js-category-active"
                          >
                            <div
                              class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-category-toggle"
                              data-el-toggle-active=".js-category-active"
                            >
                              <span class="js-dropdown-title">
                                {{
                                  currentCategory != "All Categories"
                                    ? currentCategory
                                    : "Categories"
                                }}
                              </span>
                              <i
                                class="icon text-9 ml-40 icon-chevron-down"
                              ></i>
                            </div>

                            <div
                              id="dd14content"
                              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                            >
                              <div class="text-14 y-gap-15 js-dropdown-list">
                                <div
                                  v-for="(item, ind) in ddItems"
                                  :key="ind"
                                  @click="() => (currentCategory = item.label)"
                                  :class="`d-block js-dropdown-link cursor ${
                                    currentCategory === item.label
                                      ? 'activeMenu'
                                      : ''
                                  }`"
                                >
                                  <span
                                    style="cursor: pointer"
                                    class="d-block js-dropdown-link"
                                  >
                                    {{ item.label }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            id="dd15button"
                            @click="
                              () => toggleDropdown('dd15button', 'dd15content')
                            "
                            class="dropdown js-dropdown js-review-active"
                          >
                            <div
                              class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-review-toggle"
                              data-el-toggle-active=".js-review-active"
                            >
                              <span class="js-dropdown-title">
                                Old Review
                              </span>
                              <i
                                class="icon text-9 ml-40 icon-chevron-down"
                              ></i>
                            </div>

                            <div
                              id="dd15content"
                              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-review-toggle"
                            >
                              <div class="text-14 y-gap-15 js-dropdown-list">
                                <div>
                                  <a href="#" class="d-block js-dropdown-link">
                                    Animation
                                  </a>
                                </div>

                                <div>
                                  <a href="#" class="d-block js-dropdown-link">
                                    Design
                                  </a>
                                </div>

                                <div>
                                  <a href="#" class="d-block js-dropdown-link">
                                    Illustration
                                  </a>
                                </div>

                                <div>
                                  <a href="#" class="d-block js-dropdown-link">
                                    Business
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>

                  <div class="row y-gap-30 pt-30">
                    <CoursesCardDashboard v-for="(data, i) in pageItems" :data="data" :key="i" />
                  </div>

                  <!-- <div class="row justify-center pt-30">
                    <div class="col-auto">
                      <Pagination />
                    </div>
                  </div> -->
                </div>

                <!-- {/* <div class="tabs__pane -tab-item-2"></div>
                  <div class="tabs__pane -tab-item-3"></div> */} -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import FooterNine from "../layout/footers/FooterNine";
import { coursesData } from "@/data/dashboard";
import Pagination from "../common/PaginationTwo";
import CoursesCardDashboard from "./DashBoardCards/CoursesCardDashboard";
import { useCourseStore } from "@/stores/courseStore";

const courseStore = useCourseStore();

const myCourses = ref([]);
const pageData = ref([]);
const pageItems = ref([]);
const searchQuery = ref("");
const EnrollmentStatus = {
  Pending: 1,
  PendingPayment: 2,
  Paid: 3,
};

onMounted(async () => {
  myCourses.value = await courseStore.fetchMyCourses();

  console.log("User courses data:", myCourses.value);

  applyFilters();
});

const ddItems = [
  { id: 1, label: "All Categories" },
  { id: 2, label: "Animation" },
  { id: 3, label: "Design" },
  { id: 4, label: "Illustration" },
  { id: 5, label: "Business" },
];
const currentCategory = ref("All Categories");
//const pageItems = ref(coursesData);
const activeTab = ref(1);
//const pageData = ref(coursesData);



const applyFilters = () => {
  let courses = [...myCourses.value];

  // =========================
  // Status filter
  // =========================
  if (activeTab.value === 2) {
    courses = courses.filter(
      (course) => course.enrollmentStatus === EnrollmentStatus.PendingPayment
    );
  }

  // =========================
  // Search filter
  // =========================
  const query = searchQuery.value.trim().toLowerCase();

  if (query) {
    courses = courses.filter((course) =>
      course.titleEn?.toLowerCase().includes(query)
    );
  }

  // =========================
  // Save filtered data
  // =========================
  pageData.value = courses;

  // =========================
  // Category filter
  // =========================
  applyCategoryFilter();
};



watch(searchQuery, () => {
  applyFilters();
});

watch(activeTab, () => {
  applyFilters();
});



// watch category change
watch(currentCategory, () => {
  applyCategoryFilter();
});

// helper to apply category filter
function applyCategoryFilter() {
  if (currentCategory.value === "All Categories") {
    pageItems.value = pageData.value;
  } else {
    pageItems.value = pageData.value.filter(
      (c) => c.category === currentCategory.value
    );
  }
}


// watch([currentCategory, () => pageData.value], () => {
//   if (currentCategory.value === "All Categories") {
//     pageItems.value = pageData.value;
//   } else {
//     pageItems.value = [
//       ...pageData.value.filter((elm) => elm.category === currentCategory.value),
//     ];
//   }
// });
const toggleDropdown = (btn, content) => {
  document.getElementById(btn).classList.toggle("-is-dd-active");
  document.getElementById(content).classList.toggle("-is-el-visible");
};
</script>

<style lang="scss" scoped></style>
