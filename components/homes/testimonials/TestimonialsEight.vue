<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-xl-4 col-lg-5 col-md-9">
          <h2 class="text-30 lh-13">
            What Our Students
            <br />
            Have To <span class="text-orange-1">Say</span>
          </h2>
          <p class="mt-15">
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliquam id dolor.
          </p>

          <div
            class="pt-60 lg:pt-50 pr-5 overflow-hidden js-section-slider"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <swiper
              :modules="[Navigation, Pagination]"
              :pagination="{
                el: '.pagination-testimonials-eight',
                clickable: true,
              }"
              :navigation="{
                nextEl: '.right-testimonials-eight',
                prevEl: '.left-testimonials-eight',
              }"
              :space-Between="30"
              :slides-Per-View="1"
              class="overflow-visible"
            >
              <swiper-slide
                v-for="(elm, i) in testimonials.slice(0, 3)"
                :key="i"
                class="swiper-slide"
              >
                <div class="swiper-slide">
                  <div class="pt-40 pb-30 px-40 border-light rounded-8">
                    <div class="testimonials__content">
                      <h4 class="text-18 fw-500 text-orange-1">
                        {{ elm.comment }}
                      </h4>
                      <p class="lh-2 fw-500 mt-15 mb-30">
                        “{{ elm.description }}”
                      </p>

                      <div
                        class="row x-gap-20 y-gap-20 items-center border-top-light pt-15"
                      >
                        <div class="col-auto">
                          <nuxt-img
                            :src="elm.imageSrc"
                            width="60"
                            height="60"
                            alt="image"
                          ></nuxt-img>
                        </div>

                        <div class="col-auto">
                          <div class="lh-12 fw-500 text-dark-1">
                            {{ elm.name }}
                          </div>
                          <div class="text-13 lh-1 mt-5">
                            {{ elm.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            <div class="d-flex x-gap-15 items-center pt-30">
              <div class="col-auto">
                <button
                  class="d-flex items-center text-24 arrow-left-hover js-prev left-testimonials-eight"
                >
                  <i class="icon icon-arrow-left"></i>
                </button>
              </div>
              <div class="col-auto">
                <div
                  class="pagination -arrows js-pagination pagination-testimonials-eight"
                ></div>
              </div>
              <div class="col-auto">
                <button
                  class="d-flex items-center text-24 arrow-right-hover js-next right-testimonials-eight"
                >
                  <i class="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="composition -type-7">
            <div class="-el-1">
              <nuxt-img
                class="w-1/1"
                width="662"
                height="730"
                src="/assets/img/home-8/testimonials/1.png"
                alt="image"
              ></nuxt-img>
            </div>

            <div
              class="-el-2"
              @click="() => isOpen = true"
              style="cursor: pointer"
            >
              <div
                class="d-flex items-center justify-center bg-white size-90 rounded-full js-gallery"
                data-gallery="gallery1"
              >
                <div class="icon-play text-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ModalVideo videoId="LlCwHnp3kL4" :isOpen="isOpen" @close="close" />
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import ModalVideo from "~/components/common/ModalVideo";

import { ref } from "vue";
import { testimonials } from "~/data/tesimonials";

const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
