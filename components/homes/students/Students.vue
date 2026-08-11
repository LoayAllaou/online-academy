<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-4">
    <div class="container">
      <div class="row y-gap-15 justify-between items-end">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Students</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div class="col-auto">
          <a
            href="#"
            class="button -icon -outline-purple-1 text-purple-1 fw-500"
          >
            View All Students
            <span class="icon-arrow-top-right text-14 ml-10"></span>
          </a>
        </div>
      </div>

      <div
        class="pt-60 lg:pt-40 js-section-slider"
        data-gap="30"
        data-pagination="js-students-slider-pagination"
        data-nav-prev="js-students-slider-prev"
        data-nav-next="js-students-slider-next"
        data-slider-cols="xl-4 lg-3 md-2"
      >
        <swiper
          class="overflow-visible"
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.student-pagination-one', clickable: true }"
          :navigation="{
            nextEl: '.student-next-one',
            prevEl: '.student-prev-one',
          }"
          :space-Between="30"
          :slides-Per-View="1"
          :breakpoints="{
            450: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }"
        >
          <swiper-slide v-for="(elm, i) in students" :key="i">
            <div class="swiper-slide">
              <div class="teamCard -type-2 bg-white">
                <div class="teamCard__content">
                  <div class="teamCard__img">
                    <nuxt-img
                      :src="elm.imgSrc"
                      width="90"
                      height="90"
                      alt="image"
                    ></nuxt-img>
                  </div>
                  <h4 class="teamCard__title text-17 lh-15 fw-500 mt-12">
                    {{ elm.name }}
                  </h4>
                  <div class="teamCard__subtitle text-14 lh-1 mt-5">
                    {{ elm.title }}
                  </div>

                  <div class="teamCard__socials d-flex x-gap-20 pt-12">
                    <a
                      v-for="(itm, index) in elm.socials"
                      :key="index"
                      :href="itm.link"
                    >
                      <i :class="itm.icon"></i>
                    </a>
                  </div>

                  <div class="teamCard-tags pt-20">
                    <div
                      v-for="(itm, index) in elm.tags"
                      :key="index"
                      class="teamCard-tags__item"
                    >
                      <div class="teamCard-tags__tag">{{ itm }}</div>
                    </div>
                  </div>

                  <div class="teamCard__button mt-20">
                    <nuxt-link
                      :to="elm.buttonLink"
                      class="button -icon -outline-purple-1 -rounded text-purple-1"
                    >
                      View Profile
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="row pt-60 lg:pt-40">
        <div class="col-auto">
          <div class="d-flex x-gap-15 justify-center items-center">
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-left-hover js-students-slider-prev student-prev-one"
              >
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>
            <div class="col-auto">
              <div
                class="pagination -arrows js-students-slider-pagination student-pagination-one"
              ></div>
            </div>
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-right-hover js-students-slider-next student-next-one"
              >
                <i class="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { students } from "~/data/students";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
