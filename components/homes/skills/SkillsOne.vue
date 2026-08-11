<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">What will you learn</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="pt-60 lg:pt-50">
        <div class="overflow-hidden js-section-slider">
          <ClientOnly>
          <Swiper
            :modules="[Navigation, Pagination]"
            :pagination="{ el: '.pagination-skils', clickable: true }"
            :navigation="{
              nextEl: '.arrow-right-one',
              prevEl: '.arrow-left-one',
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
            <SwiperSlide v-for="(elm, i) in skillsOne" :key="i">
              <div class="swiper-slide h-100 overflow-visible">
                <div
                  class="infoCard -type-1"
                  data-aos="`fade-left`"
                  data-aos-duration="`${(i + 1) * 300}`"
                >
                  <div class="infoCard__image">
                    <nuxt-img
                      width="92"
                      style="width: 100%; object-fit: contain"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                  </div>
                  <h5 class="infoCard__title text-17 lh-15 mt-10">
                    {{ elm.skill }}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper></ClientOnly>


          <div
            class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40"
          >
            <div class="col-auto">
              <div class="pagination-skils -arrows js-pagination"></div>
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
import "swiper/css";

import { skillsOne } from "../../../data/skills";
</script>
