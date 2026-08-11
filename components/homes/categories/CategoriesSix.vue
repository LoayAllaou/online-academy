<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div
        class="overflow-hidden pt-50 js-section-slider"
        data-aos="fade-left"
   
      >
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.category-six-pagination', clickable: true }"
          :navigation="{
            nextEl: '.category-six-right',
            prevEl: '.category-six-left',
          }"
          :space-between="30"
          :slides-per-view="1"
          :breakpoints="{
            450: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }"
          :loop="true"
        >
          <swiper-slide v-for="(elm, i) in topCatagoriesSix" :key="i">
            <nuxt-link
              :to="`/courses-list-${elm.id > 8 ? 1 : elm.id}`"
              class="swiper-slide linkCustomTwo"
            >
              <div
                class="bg-white border-light rounded-8 -featureCard-hover-2"
                
              
              >
                <div class="py-30 px-40 text-center">
                  <div
                    class="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3"
                  >
                    <i :class="elm.icon"></i>
                  </div>
                  <div
                    class="featureCard__title text-17 fw-500 text-dark-1 mt-20"
                  >
                    {{ elm.title }}
                  </div>
                  <div class="featureCard__text text-13 lh-1 mt-10">
                    {{ elm.courses }}+ Courses
                  </div>
                </div>
              </div>
            </nuxt-link>
          </swiper-slide>
        </swiper>

        <div class="d-flex x-gap-15 items-center justify-center pt-50">
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-left-hover js-prev category-six-left"
            >
              <i class="icon icon-arrow-left"></i>
            </button>
          </div>
          <div class="col-auto">
            <div
              class="pagination -arrows js-pagination category-six-pagination"
            ></div>
          </div>
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-right-hover js-next category-six-right"
            >
              <i class="icon icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { topCatagoriesSix } from "~/data/topCategories";
</script>
