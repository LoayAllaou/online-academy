<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="row justify-center text-center">
      <div class="col-auto">
        <div class="sectionTitle">
          <h2 class="sectionTitle__title sm:text-24">
            {{ $t("Course.title") }}
          </h2>

          <p class="sectionTitle__text">
            {{ $t("Course.sub_title") }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="tabs__controls flex-wrap pt-50 d-flex justify-center x-gap-10 y-gap-10 js-tabs-controls"
    >
      <div v-for="(elm, i) in allCategories" :key="i">
        <nuxt-link
          @click="() => setCategory(elm.nameEn)"
          :class="`tabs__button px-15 py-8 rounded-8 js-tabs-button cursor-pointer ${
            category === elm.nameEn ? 'tabActive' : ''
          }`"
        >
          {{ $i18n.locale === 'ar' ? elm.nameAr : elm.nameEn }}
        </nuxt-link>
      </div>
    </div>

    <div
      class="pt-60 m-auto row y-gap-30 container pl-0 pr-0"
      data-aos="fade-right"
  
    >
      <CourceCard
        v-for="(elm, index) in filtered ? filtered : courseStore?.courses?.slice(0, 8)"
        :key="index"
        :data="elm"
        :index="index" 
      />
      <!-- Show message if no courses found -->
      <div v-if="(filtered && filtered.length === 0) || (courseStore?.courses && courseStore?.courses.length === 0)" class="text-center w-100">
        <p class="text-18">{{ $t("Course.no_course_found") }}</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourceCard from "../courseCards/CourseCard.vue";
import { catagories, coursesData } from "~/data/courses";
import { useCategoryStore } from '@/stores/categoryStore'
import { useCourseStore } from '@/stores/courseStore'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const store = useCategoryStore()
const courseStore = useCourseStore()

const allCategories = ref([]);

onMounted(async () => {
  await courseStore.fetchCourses();
  await store.fetchCategories()
  allCategories.value = JSON.parse(JSON.stringify(store.categories));
  //.map(cat => cat.nameEn);
  // Add "All Categories" at the beginning as object
  allCategories.value.unshift({ nameEn: "All Categories", id: null , nameAr: "كل الفئات"});
  console.log('Categories:', allCategories.value);
  // Fetch courses for the selected category
  
})

const filtered = ref();
const category = ref("All Categories");

const setCategory = (selectedCategory) => {
  category.value = selectedCategory;
  if (selectedCategory === "All Categories") {
    filtered.value = null;
  } else {
    filtered.value = courseStore.courses.filter(
      (elm) => elm.category.nameEn === selectedCategory,
    );
  }
};
</script>
