<template>
  <section class="layout-pt-lg mt-80 layout-pb-lg bg-purple-1">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title text-green-1">What People Say</h2>
            <p class="sectionTitle__text text-white">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>

      <div class="js-section-slider pt-50" data-aos="fade">
        <ClientOnly>
          <Swiper
          class="overflow-visible"
          :modules="[Navigation, Pagination]"
          :navigation="{
            nextEl: '.icon-arrow-right',
            prevEl: '.icon-arrow-left',
          }"
          :loop="true"
          :space-between="30"
          :slidesPerView="1"
          :breakpoints="{
            450: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }"
        >
          <SwiperSlide
            v-for="(elm, i) in testimonials"
            :key="i"
            class="swiper-slide"
          >
            <div
              class="testimonials -type-1"

            >
              <div class="testimonials__content">
                <h4 class="testimonials__title">{{ elm.comment }}</h4>
                <p class="testimonials__text">{{ `“${elm.description}”` }}</p>

                <div class="testimonials-footer">
                  <div class="testimonials-footer__image">
                    <nuxt-img
                      :src="elm.imageSrc"
                      alt="image"
                      width="60"
                      height="60"
                    />
                  </div>

                  <div class="testimonials-footer__content">
                    <div class="testimonials-footer__title">{{ elm.name }}</div>
                    <div class="testimonials-footer__text">
                      {{ elm.position }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper></ClientOnly>


        <div class="d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40">
          <div class="col-auto">
            <button
              class="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-prev"
            >
              <i class="icon icon-arrow-left text-24"></i>
            </button>
          </div>
          <div class="col-auto">
            <button
              class="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next"
            >
              <i class="icon icon-arrow-right text-24"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 counter__row" data-aos="fade-right">
        <div
          v-for="(elm, i) in counters"
          :key="i"
          class="col-lg-3 col-sm-6"
          
         
        >
          <div class="counter -type-1">
            <div class="counter__number">{{ elm.number }}</div>
            <div class="counter__title">{{ elm.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { testimonials } from "../../data/tesimonials";
import { counters } from "../../data/count";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
