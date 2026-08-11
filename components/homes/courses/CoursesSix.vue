<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container tabs -pills-2 js-tabs">
      <div class="row y-gap-20 justify-between items-end">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Explore Featured Courses</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-auto">
          <div
            class="tabs__controls row justify-center x-gap-10 bg-light-3 rounded-200 py-5 js-tabs-controls"
          >
            <div
              v-for="(elm, i) in catagories.slice(0, 4)"
              :key="i"
              class="col-auto"
              @click="() => setCurrentCategory(elm)"
            >
              <button
                class="tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button"
                :class="{ 'is-active': currentCategory === elm }"
                data-tab-target=".-tab-item-1"
                type="button"
              >
                {{ elm }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="tabs__content pt-60 lg:pt-40 js-tabs-content">
        <div class="tabs__pane -tab-item-1 is-active">
          <div
            class="row y-gap-30 justify-start"
            data-aos="fade-right"
           
          >
            <CourseCardSix
              v-for="(elm, i) in pageItems.slice(0, 6)"
              :key="i"
              :data="elm"
              :index="i"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { coursesData, catagories } from "~/data/courses";
import CourseCardSix from "~/components/homes/courseCards/CourseCardSix";

const pageItems = ref([]);
const currentCategory = ref("All Categories");

const setCurrentCategory = (selectedCategory) => {
  currentCategory.value = selectedCategory;
  if (selectedCategory === "All Categories") {
    pageItems.value = coursesData;
  } else {
    pageItems.value = coursesData.filter(
      (elm) => elm.category === selectedCategory,
    );
  }
};
const updatePageItem = () => {
  let filtered = [];

  if (currentCategory.value === "All Categories") {
    filtered = coursesData;
  } else {
    filtered = coursesData.filter(
      (elm) => elm.category === currentCategory.value,
    );
  }

  pageItems.value = filtered;
};
watch(currentCategory, () => {
  updatePageItem();
});

onMounted(() => {
  updatePageItem();
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
