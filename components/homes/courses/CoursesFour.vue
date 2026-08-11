<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-3">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Our Most Popular Courses</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative pt-60 lg:pt-50 js-section-slider"
        data-aos="fade-left"
       
      >
        <ClientOnly>
          <Swiper
          class="overflow-visible"
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.event-pagination', clickable: true }"
          :navigation="{
            nextEl: '.course-slider-four-next',
            prevEl: '.course-slider-four-prev',
          }"
          :space-between="30"
          :slides-per-view="1"
          :breakpoints="{
            450: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide v-for="(elm, i) in coursesData.slice(0, 6)" :key="i">
            <CourceCardFour :key="i" :index="i" :data="elm" />
          </SwiperSlide>
        </Swiper></ClientOnly>


        <button
          class="course-slider-four-prev section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev"
        >
          <i class="icon icon-arrow-left text-24"></i>
        </button>

        <button
          class="course-slider-four-next section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next"
        >
          <i class="icon icon-arrow-right text-24"></i>
        </button>
      </div>

      <div class="row justify-center pt-60 lg:pt-50">
        <div class="col-auto">
          <nuxt-link
            to="/courses-list-2"
            class="button -icon -purple-1 text-white"
          >
            Browse All Courses
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import CourceCardFour from "@/components/homes/courseCards/CourseCardFour";
import { coursesData } from "~/data/courses";
</script>
