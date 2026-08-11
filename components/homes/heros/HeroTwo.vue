<template>
  <section class="mainSlider -type-1 js-mainSlider customizedHeroBackground">
    <div class="swiper-wrapper-two">
      <ClientOnly>
          <Swiper
        :modules="[Navigation, Pagination]"
        style="width: 100%"
        :navigation="{
          nextEl: '.hero-slider-next',
          prevEl: '.hero-slider-prev',
        }"
        :space-between="0"
        slides-per-view="1"
        :breakpoints="{
          // when window width is >= 576px
          450: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          1200: {
            // when window width is >= 992px
            slidesPerView: 1,
          },
        }"
        :speed="1200"
      >
        <SwiperSlide v-for="(item, i) in slidesData" :key="i">
          <div class="swiper-slide hightFull">
            <div class="mainSlider__bg">
              <div
                class="bg-image js-lazy customedBg"
                :style="{ backgroundImage: `url(${item.bgImage})` }"
              ></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper></ClientOnly>

    </div>

    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-xl-6 col-lg-8">
          <div
            class="mainSlider__content"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1 class="mainSlider__title text-white">
              Learn Your Way With Educrat To{{ " " }}
              <span class="text-green-1 underline">Web Design</span>
            </h1>

            <p class="mainSlider__text text-white">
              More than 6.500 online courses
            </p>

            <div class="mainSlider__form">
              <input
                required
                type="text"
                placeholder="What do you want to learn today?"
              />

              <button class="button -md -purple-1 text-white">
                <i class="icon icon-search mr-15"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-20 justify-center mainSlider__items">
        <div
          v-for="(elm, i) in featureTwo"
          :key="i"
          class="col-xl-3 col-md-4 col-sm-6"
        >
          <div class="mainSlider-item text-center">
            <nuxt-img width="50" height="50" :src="elm.imgSrc" alt="icon" />
            <h4 class="text-20 fw-500 lh-18 text-white mt-8">
              {{ elm.title }}
            </h4>
            <p class="text-15 text-white">{{ elm.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev"
    >
      <i class="icon icon-arrow-left text-24"></i>
    </button>

    <button
      class="swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next"
    >
      <i class="icon icon-arrow-right text-24"></i>
    </button>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { featureTwo } from "@/data/features";
import { slidesData } from "@/data/hero";
</script>

<style lang="scss" scoped></style>
