<template>
  <section class="layout-pt-lg">
    <div class="container">
      <div class="row y-gap-50">
        <div class="col-xl-3 col-lg-4 col-md-8">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Learn from the best instructors</h2>

            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliquam id dolor.
            </p>
          </div>

          <div class="d-inline-block">
            <nuxt-link
              to="/instructors-list-1"
              class="button -icon -red-2 text-orange-1 mt-30"
            >
              View All Instructors
              <i class="icon-arrow-top-right text-13 ml-10"></i>
            </nuxt-link>
          </div>
        </div>

        <div class="offset-xl-1 col-lg-8">
          <div class="overflow-hidden js-section-slider">
            <ClientOnly>
          <Swiper
              :modules="[Navigation, Pagination]"
              :pagination="{
                el: '.pagination-instractors-eight',
                clickable: true,
              }"
              :navigation="{
                nextEl: '.category-six-right',
                prevEl: '.category-six-left',
              }"
              :space-between="30"
              :slides-per-piew="1"
              :breakpoints="{
                450: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }"
              :loop="true"
            >
              <SwiperSlide v-for="(elm, i) in instractorsEight" :key="i">
                <div class="swiper-slide">
                  <div class="d-flex flex-column items-center">
                    <div>
                      <nuxt-img
                        :width="180"
                        :height="180"
                        :src="elm.image"
                        alt="image"
                      />
                    </div>
                    <div class="d-flex items-center mt-20">
                      <div class="icon-star text-9 text-yellow-1 mr-5"></div>
                      <div class="text-yellow-1">{{ elm.rating }}</div>
                    </div>
                    <h5 class="text-17 fw-500 mt-10">
                      <nuxt-link
                        :to="`/instructors/${elm.id}`"
                        class="linkCustom"
                      >
                        {{ elm.name }}
                      </nuxt-link>
                    </h5>
                    <p class="mt-5">{{ elm.role }}</p>

                    <div class="d-flex x-gap-15 items-center pt-5">
                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <nuxt-img
                            :width="16"
                            :height="16"
                            src="/assets/img/team/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div class="text-13 lh-1">
                          {{ elm.students }} Students
                        </div>
                      </div>

                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <nuxt-img
                            :width="12"
                            :height="12"
                            src="/assets/img/team/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div class="text-13 lh-1">{{ elm.courses }} Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper></ClientOnly>


            <div
              class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40"
            >
              <div class="col-auto">
                <div
                  class="pagination -arrows js-pagination pagination-instractors-eight"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import { instractorsEight } from "@/data/instractors";
import { Navigation, Pagination } from "swiper";
</script>

<style scoped>
/* Add your styles here */
</style>
