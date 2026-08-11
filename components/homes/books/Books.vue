<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="800">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Latest Books</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-auto" data-aos="fade-left" data-aos-duration="800">
          <a href="#" class="button -icon -purple-3 text-purple-1">
            All Courses
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </a>
        </div>
      </div>

      <div class="pt-60 lg:pt-40">
        <div class="overflow-hidden js-section-slider">
          <swiper
            :modules="[Navigation, Pagination]"
            :pagination="{ el: '.books-pagination', clickable: true }"
            :navigation="{ nextEl: '.books-next', prevEl: '.books-prev' }"
            :space-between="30"
            :slides-per-view="2"
            :breakpoints="{
              450: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }"
            :loop="true"
          >
            <swiper-slide v-for="(item, i) in books" :key="i">
              <books-card :data="item" />
            </swiper-slide>
          </swiper>

          <div
            class="d-flex x-gap-15 items-center justify-center pt-60 lg:pt-40"
          >
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-left-hover js-prev books-prev"
              >
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>
            <div class="col-auto">
              <div
                class="pagination -arrows js-pagination books-pagination pagination-white-dot-dark"
              ></div>
            </div>
            <div class="col-auto">
              <button
                class="d-flex items-center text-24 arrow-right-hover js-next books-next"
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

import "swiper/css";
import { books } from "@/data/books";

import "swiper/css/pagination";

import BooksCard from "@/components/common/BooksCard";
</script>
