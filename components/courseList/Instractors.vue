<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-auto">
          <h2 class="text-24 lh-12">Popular Instructors</h2>
        </div>

        <div class="col-auto">
          <div class="d-flex justify-center x-gap-15 items-center">
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-left-hover js-events-slider-prev instractor-left"
              >
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>
            <div class="col-auto">
              <div
                class="pagination -arrows js-events-slider-pagination instractor-pagination"
              ></div>
            </div>
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-right-hover js-events-slider-next instractor-right"
              >
                <i class="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden pt-50 lg:pt-40 js-section-slider">
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.instractor-pagination' }"
          :navigation="{
            nextEl: '.instractor-right',
            prevEl: '.instractor-left',
          }"
          :space-Between="30"
          :slides-Per-View="1"
          :breakpoints="{
            450: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }"
        >
          <swiper-slide v-for="(elm, i) in teamMembersFull" :key="i">
            <div class="swiper-slide">
              <div class="teamCard -type-1 -teamCard-hover">
                <div class="teamCard__image size-180 mx-auto">
                  <nuxt-img
                    width="180"
                    height="180"
                    class="fit-cover size-180 rounded-full"
                    :src="elm.imageSrc"
                    alt="image"
                  />
                  <div class="teamCard__socials rounded-full">
                    <div
                      class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100"
                    >
                      <a
                        v-for="(itm, index) in elm.socialProfile"
                        :key="index"
                        :href="itm.url"
                      >
                        <i :class="[itm.icon, 'text-white']"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="teamCard__content text-center">
                  <div class="d-flex items-center justify-center">
                    <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                    <div class="text-14 text-yellow-1">{{ elm.rating }}</div>
                  </div>

                  <h4 class="teamCard__title mt-10">
                    <nuxt-link
                      class="linkCustom"
                      :to="`/instructors/${elm.id}`"
                      >{{ elm.name }}</nuxt-link
                    >
                  </h4>
                  <p class="teamCard__text">{{ elm.role }}</p>

                  <div class="d-flex x-gap-15 justify-center pt-10">
                    <div class="d-flex items-center">
                      <nuxt-img
                        width="16"
                        height="16"
                        class="mr-8"
                        src="/assets/img/team/icons/1.svg"
                        alt="icon"
                      />
                      <div class="text-13 lh-12">
                        {{ elm.studentCount }} Students
                      </div>
                    </div>

                    <div class="d-flex items-center">
                      <nuxt-img
                        width="12"
                        height="12"
                        class="mr-8"
                        src="/assets/img/team/icons/2.svg"
                        alt="icon"
                      />
                      <div class="text-13 lh-12">
                        {{ elm.courseCount }} Course
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-24 lh-12">Popular Instructors</h2>
        </div>
      </div>

      <div class="row x-gap-20 y-gap-20 pt-30">
        <div v-for="(elm, i) in populerTags" :key="i" class="col-auto">
          <button class="button h-60 px-35 -purple-3 text-purple-1">
            {{ elm.text }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamMembersFull, populerTags } from "@/data/instractors";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
