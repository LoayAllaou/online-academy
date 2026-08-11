<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="tabs -pills js-tabs">
        <div class="row y-gap-15 justify-between items-center">
          <div class="col-lg-6">
            <div class="sectionTitle">
              <h2 class="sectionTitle__title">Our Most Popular Courses</h2>
              <p class="sectionTitle__text">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div class="col-lg-auto">
            <nuxt-link
              to="/courses-list-6"
              class="button -icon -purple-3 text-purple-1"
            >
              All Courses
              <i class="icon-arrow-top-right text-13 ml-10"></i>
            </nuxt-link>
          </div>
        </div>

        <div class="tabs__content pt-60 lg:pt-50 js-tabs-content">
          <div class="tabs__pane -tab-item-1 is-active">
            <div
              class="js-section-slider"
              data-aos="fade-left"
         
            >
              <ClientOnly>
          <Swiper
                class="overflow-hidden"
                :modules="[Navigation, Pagination]"
                :navigation="{
                  nextEl: '.course-five-right',
                  prevEl: '.course-five-left',
                }"
                :space-between="30"
                :slides-per-view="1"
                :breakpoints="{
                  450: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }"
              >
                <SwiperSlide
                  v-for="(elm, i) in pageItem"
                  :key="i"
                  class="swiper-slide -type-1 border-light bg-white rounded-8"
                >
                  <CourceCardSeven :data="elm" :index="i" />
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

<script setup>
import { ref, onMounted, watch } from "vue";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import CourceCardSeven from "@/components/homes/courseCards/CourseCardSeven";
import { coursesData } from "@/data/courses";
import { courseStates } from "@/data/courses";

const currentCourseState = ref("All");
const pageItem = ref([]);

onMounted(() => {
  updatePageItem();
});

watch(currentCourseState, () => {
  updatePageItem();
});

const updatePageItem = () => {
  if (currentCourseState.value === "All") {
    pageItem.value = coursesData;
  } else {
    const filtered = coursesData.filter(
      (elm) => elm.state === currentCourseState.value,
    );
    pageItem.value = filtered;
  }
};
</script>
