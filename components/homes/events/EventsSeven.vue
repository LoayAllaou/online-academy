<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-3">
    <div class="container">
      <div class="row y-gap-15 justify-between items-end">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Upcoming Events</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex justify-center x-gap-15 items-center">
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-left-hover js-events-slider-prev event-slide-prev"
              >
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>
            <div class="col-auto">
              <div
                class="pagination event-pagination -arrows js-events-slider-pagination"
              ></div>
            </div>
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-right-hover js-events-slider-next event-slide-next"
              >
                <i class="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-60 lg:pt-40 js-section-slider">
        <ClientOnly>
          <Swiper
          class="overflow-visible"
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.event-pagination', clickable: true }"
          :navigation="{
            nextEl: '.event-slide-next',
            prevEl: '.event-slide-prev',
          }"
          :space-between="30"
          :slides-per-view="1"
          :breakpoints="{
            450: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide
            v-for="(elm, i) in events.slice(0, 6)"
            :key="i"
            class="swiper-slide"
          >
            <div class="swiper-slide">
              <div
                class="eventCard -type-1"
                data-aos="fade-left"
                data-aos-duration="(i + 1) * 500"
              >
                <div class="eventCard__img">
                  <nuxt-img
                    :width="730"
                    :height="530"
                    :src="elm.imgSrc"
                    alt="image"
                  />
                </div>

                <div class="eventCard__bg bg-white">
                  <div class="eventCard__content y-gap-10">
                    <div class="eventCard__inner">
                      <h4 class="eventCard__title text-17 fw-500">
                        <nuxt-link
                          class="linkCustom"
                          :to="`/events/${elm.id}`"
                          >{{ elm.title }}</nuxt-link
                        >
                      </h4>
                      <div class="d-flex x-gap-15 pt-10">
                        <div class="d-flex items-center">
                          <div class="icon-calendar-2 text-16 mr-8"></div>
                          <div class="text-14">{{ elm.date }}</div>
                        </div>
                        <div class="d-flex items-center">
                          <div class="icon-location text-16 mr-8"></div>
                          <div class="text-14">{{ elm.location }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="eventCard__button">
                      <nuxt-link
                        :to="`/events/${elm.id}`"
                        class="button -sm -rounded -purple-1 text-white px-25"
                      >
                        Buy
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper></ClientOnly>

      </div>

      <div class="row pt-60 lg:pt-40">
        <div class="col-auto">
          <nuxt-link
            to="/event-list-1"
            class="button -icon -outline-purple-1 text-purple-1 fw-500"
          >
            View All Events
            <span class="icon-arrow-top-right text-14 ml-10"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import { events } from "../../../data/events";
</script>
