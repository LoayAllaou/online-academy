<template>
  <section class="layout-pt-lg bg-dark-2">
    <div class="container">
      <div class="row y-gap-30 items-center">
        <div class="col-lg-6 col-md-10">
          <h2 class="text-30 lh-15 text-white">
            People Love To Learn With Educrat
          </h2>
          <p class="text-white mt-10">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div class="row x-gap-50 y-gap-30 pt-60 lg:pt-40 pr-40 md:pr-0">
            <div
              v-for="(elm, i) in statictis.slice(0, 2)"
              :key="i"
              class="col-sm-6 text-white"
            >
              <div class="text-45 lh-11 fw-700">{{ elm.rating }}</div>
              <div class="mt-10">{{ elm.description }}</div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 offset-lg-1">
          <div class="testimonials-slider-2 js-testimonials-slider-2">
            <swiper
              class="overflow-visible"
              :effect="'cards'"
              style="max-width: 100%"
              :grabCursor="true"
              :modules="[Navigation, Pagination, EffectCards]"
              :pagination="{ el: '.pagination-testimonial-6', clickable: true }"
              :navigation="{
                nextEl: '.icon-arrow-right-6',
                prevEl: '.icon-arrow-left-6',
              }"
              :space-Between="40"
              :slides-per-view="1"
            >
              <swiper-slide
                v-for="(elm, i) in testimonials.slice(0, 3)"
                :key="i"
                class="swiper-slide"
              >
                <div class="swiper-slide shadow-2" :style="{ width: '100%' }">
                  <div class="testimonials -type-1">
                    <div class="testimonials__content">
                      <h4 class="testimonials__title">
                        {{ elm.comment }}
                      </h4>
                      <p class="testimonials__text">“{{ elm.description }}”</p>
                      <div class="testimonials-footer">
                        <div class="testimonials-footer__image">
                          <nuxt-img
                            :src="elm.imageSrc"
                            width="60"
                            height="60"
                            alt="image"
                          ></nuxt-img>
                        </div>
                        <div class="testimonials-footer__content">
                          <div class="testimonials-footer__title">
                            {{ elm.name }}
                          </div>
                          <div class="testimonials-footer__text">
                            {{ elm.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="d-flex x-gap-15 items-center justify-center pt-30">
              <div class="col-auto">
                <button
                  class="d-flex items-center text-24 arrow-left-hover text-white js-prev icon-arrow-left-6"
                >
                  <i class="icon icon-arrow-left"></i>
                </button>
              </div>
              <div class="col-auto">
                <div
                  class="pagination -arrows text-white js-pagination pagination-testimonial-6 pagination-white-dot"
                ></div>
              </div>
              <div class="col-auto">
                <button
                  class="d-flex items-center text-24 arrow-right-hover text-white js-next icon-arrow-right-6"
                >
                  <i class="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { statictis } from "~/data/features";
import { testimonials } from "~/data/tesimonials";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
