<template>
  <section class="layout-pt-lg layout-pb-lg bg-light-4">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Upcoming Events</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
        <div class="col-auto">
          <nuxt-link
            to="/event-list-2"
            class="button -icon -purple-3 text-purple-1 -rounded"
          >
            Browse Event
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div class="pt-60 lg:pt-40">
        <div class="overflow-hidden js-section-slider">
          <ClientOnly>
          <Swiper
            class="overflow-visible"
            :modules="[Navigation, Pagination]"
            :pagination="{ el: '.event-six-pagination', clickable: true }"
            :navigation="{
              nextEl: '.icon-arrow-right-event-six',
              prevEl: '.icon-arrow-left-event-six',
            }"
            :space-between="30"
            :slides-per-view="1"
            :loop="true"
            :breakpoints="{
              450: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }"
          >
            <SwiperSlide
              v-for="(elm, i) in events.slice(0, 6)"
              :key="i"
              class="swiper-slide"
            >
              <div class="swiper-slide">
                <div
                  class="bg-white rounded-8 shadow-1 px-20 py-20"
                  data-aos="fade-left"
                  data-aos-duration="(i + 1) * 400"
                >
                  <div class="d-flex items-center">
                    <div
                      class="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20"
                    >
                      <div class="text-17 lh-15 text-white fw-500">
                        {{ elm.date.split(" ")[0] }}
                      </div>
                      <div class="lh-1 text-white fw-500">
                        {{ elm.date.split(" ")[1].split(",")[0].toUpperCase() }}
                      </div>
                    </div>
                    <nuxt-link class="linkCustom" :to="`/events/${elm.id}`">{{
                      elm.title
                    }}</nuxt-link>
                  </div>
                  <div class="d-flex items-center mt-20">
                    <div class="icon-location text-14 mr-10"></div>
                    <div class="text-14 lh-1">{{ elm.location }}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper></ClientOnly>


          <div
            class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40"
          >
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-six"
              >
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>
            <div class="col-auto">
              <div
                class="pagination -arrows js-pagination event-six-pagination"
              ></div>
            </div>
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-six"
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
import { events } from "@/data/events";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
