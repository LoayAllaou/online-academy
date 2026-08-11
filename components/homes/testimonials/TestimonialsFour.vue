<template>
  <section class="layout-pt-lg layout-pb-lg bg-dark-5">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title text-white">
              People Say About Educrat
            </h2>
            <p class="sectionTitle__text text-white">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="pt-60 lg:pt-50 js-section-slider">
        <ClientOnly>
          <Swiper
          class="overflow-visible"
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.pagination-testimonial', clickable: true }"
          :navigation="{
            nextEl: '.icon-arrow-right-testimonial',
            prevEl: '.icon-arrow-left-testimonial',
          }"
          :space-Between="30"
          :slides-Per-View="1"
          :breakpoints="{
            450: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }"
        >
          <SwiperSlide
            v-for="(elm, i) in testimonialsTwoFour"
            :key="i"
            class="swiper-slide"
          >
            <TestimonialCard :data="elm" :index="i" />
          </SwiperSlide>
        </Swiper></ClientOnly>


        <div class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-testimonial"
            >
              <i class="icon text-white icon-arrow-left"></i>
            </button>
          </div>
          <div class="col-auto">
            <div
              class="pagination -arrows js-pagination pagination-testimonial"
            ></div>
          </div>
          <div class="col-auto">
            <button
              class="d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-testimonial"
            >
              <i class="icon text-white icon-arrow-right"></i>
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
import TestimonialCard from "~/components/common/TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
import { testimonialsTwoFour } from "~/data/tesimonials";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
