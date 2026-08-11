<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">You May Like</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="relative pt-60 lg:pt-50">
        <div class="overflow-hidden js-section-slider">
          <swiper
            :modules="[Navigation, Pagination]"
            :navigation="{
              nextEl: '.js-courses-next-one',
              prevEl: '.js-courses-prev-one',
            }"
            :space-Between="30"
            :slides-Per-View="1"
            :breakpoints="{
              450: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }"
          >
            <swiper-slide v-for="(elm, i) in coursesData.slice(0, 12)" :key="i">
              <div class="swiper-slide">
                <div class="coursesCard -type-1">
                  <div class="relative">
                    <div class="coursesCard__image overflow-hidden rounded-8">
                      <nuxt-img
                        width="510"
                        height="360"
                        class="w-1/1"
                        :src="elm.imageSrc"
                        alt="image"
                      />
                      <div class="coursesCard__image_overlay rounded-8"></div>
                    </div>
                    <div
                      class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
                    ></div>
                  </div>

                  <div class="h-100 pt-15">
                    <div class="d-flex items-center">
                      <div class="text-14 lh-1 text-yellow-1 mr-10">
                        {{ elm.rating }}
                      </div>
                      <div class="d-flex x-gap-5 items-center">
                        <Star :star="elm.rating" />
                      </div>
                      <div class="text-13 lh-1 ml-10">
                        ({{ elm.ratingCount }})
                      </div>
                    </div>

                    <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                      <nuxt-link
                        :to="`/courses/${elm.id}`"
                        class="linkCustom"
                        >{{ elm.title }}</nuxt-link
                      >
                    </div>

                    <div class="d-flex x-gap-10 items-center pt-10">
                      <div class="d-flex items-center">
                        <div class="mr-8">
                          <nuxt-img
                            :width="16"
                            :height="17"
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div class="text-14 lh-1">
                          {{ elm.lessonCount }} lesson
                        </div>
                      </div>

                      <div class="d-flex items-center">
                        <div class="mr-8">
                          <nuxt-img
                            :width="16"
                            :height="17"
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div class="text-14 lh-1">
                          {{
                            `${Math.floor(elm.duration / 60)}h ${Math.floor(
                              elm.duration % 60,
                            )}m`
                          }}
                        </div>
                      </div>

                      <div class="d-flex items-center">
                        <div class="mr-8">
                          <nuxt-img
                            :width="16"
                            :height="17"
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div class="text-14 lh-1">{{ elm.level }}</div>
                      </div>
                    </div>

                    <div class="coursesCard-footer">
                      <div class="coursesCard-footer__author">
                        <nuxt-img
                          width="30"
                          height="30"
                          :src="elm.authorImageSrc"
                          alt="image"
                        />
                        <div>{{ elm.authorName }}</div>
                      </div>

                      <div class="coursesCard-footer__price">
                        {{
                          elm.paid
                            ? `$${elm.originalPrice} $${elm.discountedPrice}`
                            : "Free"
                        }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <button
          class="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-prev-one"
        >
          <i class="icon icon-arrow-left text-24"></i>
        </button>

        <button
          class="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-next-one"
        >
          <i class="icon icon-arrow-right text-24"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { coursesData } from "@/data/courses";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

import Star from "../common/Star";
</script>
