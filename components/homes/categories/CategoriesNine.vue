<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Top Categories</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex x-gap-15 items-center justify-center">
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-left-hover js-cat-slider-prev arrow-left-categories-nine"
              >
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>
            <div class="col-auto">
              <div
                class="pagination -arrows js-cat-slider-pag pagination-categories-nine pagination-white-dot-dark"
              ></div>
            </div>
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-right-hover js-cat-slider-next arrow-right-categories-nine"
              >
                <i class="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden pt-50 js-section-slider" data-aos="fade-left">
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{ el: '.pagination-categories-nine', clickable: true }"
          :navigation="{
            nextEl: '.arrow-right-categories-nine',
            prevEl: '.arrow-left-categories-nine',
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
          <swiper-slide v-for="(item, i) in topCategories" :key="i">
            <nuxt-link
              :to="`/courses-list-${item.id > 8 ? 1 : item.id}`"
              class="featureCard -type-1 -featureCard-hover-3 linkCustomTwo"
              
       
            >
              <div class="featureCard__content">
                <div class="featureCard__icon">
                  <nuxt-img
                    :src="item.iconSrc"
                    width="45"
                    height="45"
                    alt="icon"
                  />
                </div>
                <div class="featureCard__title">
                  {{ item.title.split(" ")[0] }} <br />
                  {{ item.title.split(" ")[1] && item.title.split(" ")[1] }}
                </div>
                <div class="featureCard__text">{{ item.text }}</div>
              </div>
            </nuxt-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { topCategories } from "~/data/topCategories";
</script>
