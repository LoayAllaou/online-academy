<template>
  <section class="layout-pt-lg layout-pb-lg section-bg">
    <div class="section-bg__item bg-light-6"></div>

    <div class="container">
      <div class="row y-gap-15 justify-between items-center">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top courses</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-lg-auto">
          <div class="d-inline-block">
            <nuxt-link
              to="/courses-list-1"
              class="button -icon -light-11 -purple-3 text-purple-1"
            >
              All Courses
              <i class="icon-arrow-top-right text-13 ml-10"></i>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="overflow-hidden pt-60 lg:pt-50 js-section-slider"
          data-aos="fade-left"
        
        >
          <div class="swiper-wrapper">
            <ClientOnly>
          <Swiper
              :modules="[Navigation, Pagination]"
              :navigation="{
                nextEl: '.icon-arrow-right',
                prevEl: '.icon-arrow-left',
              }"
              :space-between="30"
              :slides-per-view="1"
              loop
              :breakpoints="{
                450: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }"
            >
              <SwiperSlide
                v-for="(elm, i) in coursesData.slice(0, 12)"
                :key="i"
              >
                <CourceCardSlider :data="elm" :index="i" />
              </SwiperSlide>
            </Swiper></ClientOnly>

          </div>
        </div>

        <button
          class="section-slider-nav -prev -dark-bg-dark-2 -outline-dark-1 -absolute-out size-50 rounded-full xl:d-none js-courses-prev"
        >
          <i class="icon icon-arrow-left text-24"></i>
        </button>

        <button
          class="section-slider-nav -next -dark-bg-dark-2 -outline-dark-1 -absolute-out size-50 rounded-full xl:d-none js-courses-next"
        >
          <i class="icon icon-arrow-right text-24"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { coursesData } from "@/data/courses";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import CourceCardSlider from "../courseCards/CourseCardSlider.vue";
import { ref } from "vue";
</script>
