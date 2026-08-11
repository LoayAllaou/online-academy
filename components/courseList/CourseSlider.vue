<script setup>
import { ref, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import CourceCard from "../homes/courseCards/CourseCardFive";
import { coursesData } from "@/data/courses";
import { courseStates } from "@/data/courses";

const currentCourseState = ref("All");
const pageItem = ref(coursesData);

watch(currentCourseState, () => {
  if (currentCourseState.value === "All") {
    pageItem.value = coursesData;
  } else {
    const filtered = coursesData.filter(
      (elm) => elm.state === currentCourseState.value,
    );
    pageItem.value = filtered;
  }
});

const setCurrentCourseState = (newState) => {
  currentCourseState.value = newState;
};
const props = defineProps(["tabBtnStyle"]);
</script>

<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="tabs -pills js-tabs">
        <div class="row y-gap-20 justify-between items-end">
          <div class="col-auto">
            <h2 class="text-24 lh-12">Courses to get you started</h2>
          </div>

          <div class="col-auto">
            <div
              class="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls"
            >
              <button
                v-for="(elm, i) in courseStates"
                :key="i"
                @click="() => setCurrentCourseState(elm)"
                :class="[
                  tabBtnStyle
                    ? tabBtnStyle
                    : 'tabs__button px-20 py-8 rounded-200 js-tabs-button',
                  { 'is-active': currentCourseState === elm },
                ]"
                type="button"
              >
                {{ elm }}
              </button>
            </div>
          </div>
        </div>

        <div class="tabs__content pt-60 lg:pt-50 js-tabs-content">
          <div class="tabs__pane -tab-item-1 is-active">
            <div
              class="overflow-hidden js-section-slider"
              data-gap="30"
              data-slider-cols="xl-4 lg-3 md-2 sm-2"
            >
              <ClientOnly>
          <Swiper
                :modules="[Navigation, Pagination]"
                :navigation="{
                  nextEl: '.course-five-right',
                  prevEl: '.course-five-left',
                }"
                :space-Between="30"
                :slides-per-view="1"
                :breakpoints="{
                  450: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }"
              >
                <SwiperSlide v-for="(elm, i) in pageItem" :key="i">
                  <CourceCard :data="elm" />
                </SwiperSlide>
              </Swiper></ClientOnly>


              <button
                class="course-five-left section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev"
              >
                <i class="icon icon-arrow-left text-24"></i>
              </button>

              <button
                class="course-five-right section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next"
              >
                <i class="icon icon-arrow-right text-24"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
