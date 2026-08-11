<template>
  <section class="layout-pt-lg layout-pb-lg border-top-light">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Upcoming Events</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div class="pt-60 lg:pt-50 js-section-slider">
        <ClientOnly>
          <Swiper
          class="overflow-visible"
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.event-four-pagination', clickable: true }"
          :navigation="{
            nextEl: '.icon-arrow-right-event-four',
            prevEl: '.icon-arrow-left-event-four',
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
              <div class="eventCard -type-3 bg-light-4 rounded-8">
                <div class="eventCard__date">
                  <span class="text-45 lh-1 fw-700 text-dark-1">{{
                    elm.date.split(" ")[0]
                  }}</span>
                  <span class="text-18 lh-1 fw-500 ml-15">
                    {{ elm.date.split(" ")[1].split(",")[0].toUpperCase() }}
                  </span>
                </div>

                <h4 class="eventCard__title text-24 lh-15 fw-500">
                  <nuxt-link class="linkCustom" :to="`/events/${elm.id}`">{{
                    elm.desc
                  }}</nuxt-link>
                </h4>

                <div class="eventCard__button">
                  <nuxt-link
                    :to="`/events/${elm.id}`"
                    class="button -icon -purple-1 text-white"
                  >
                    Buy Ticket
                    <i class="icon-arrow-top-right text-13 ml-10"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper></ClientOnly>


        <div class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-four"
            >
              <i class="icon icon-arrow-left"></i>
            </button>
          </div>
          <div class="col-auto">
            <div
              class="pagination -arrows js-pagination event-four-pagination"
            ></div>
          </div>
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-four"
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

import { events } from "@/data/events";
</script>
