<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-xl-5 col-lg-6 order-2 order-lg-1">
          <h2
            class="text-45 lg:text-40 md:text-30 text-dark-1"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            How it <span class="text-purple-1">Works</span>
          </h2>
          <p
            class="text-dark-1 mt-20"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
            nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
          </p>

          <div class="row y-gap-30 pt-60 lg:pt-40">
            <div
              v-for="(elm, i) in features"
              :key="i"
              class="col-12"
              data-aos="fade-up"
              data-aos-duration="(i + 1) * 250"
            >
              <div class="featureIcon -type-1">
                <div class="featureIcon__icon bg-light-7">
                  <nuxt-img
                    width="34"
                    height="34"
                    :src="elm.iconSrc"
                    alt="icon"
                  ></nuxt-img>
                </div>
                <div class="featureIcon__content ml-30 md:ml-20">
                  <h4 class="text-17 fw-500">{{ elm.title }}</h4>
                  <p class="mt-5">
                    {{ elm.description.split(" ").slice(0, 7).join(" ") }}
                    <br class="lg:d-none" />
                    {{ elm.description.split(" ").slice(7, -1).join(" ") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2">
          <div class="composition -type-5">
            <div class="-el-1">
              <nuxt-img
                width="550"
                height="550"
                src="/assets/img/home-7/about/1.png"
                alt="image"
              ></nuxt-img>
            </div>

            <div class="-el-2">
              <nuxt-img
                width="330"
                height="330"
                src="/assets/img/home-7/about/2.png"
                alt="image"
              ></nuxt-img>
            </div>

            <div class="-el-3">
              <div
                class="sm:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 shadow-6"
              >
                <div
                  class="size-50 d-flex justify-center items-center bg-red-2 rounded-full"
                >
                  <nuxt-img
                    width="24"
                    height="24"
                    src="/assets/img/masthead/1.svg"
                    alt="icon"
                  ></nuxt-img>
                </div>
                <div class="ml-20">
                  <div class="text-orange-1 text-16 fw-500 lh-1">3.000 +</div>
                  <div class="mt-3">Free Courses</div>
                </div>
              </div>
            </div>

            <div class="-el-4">
              <div
                class="img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 shadow-6"
              >
                <div class="img-el__side">
                  <div
                    class="size-50 d-flex justify-center items-center bg-purple-1 rounded-full"
                  >
                    <nuxt-img
                      width="20"
                      height="27"
                      src="/assets/img/masthead/2.svg"
                      alt="icon"
                    ></nuxt-img>
                  </div>
                </div>
                <div class="">
                  <div class="text-purple-1 text-16 fw-500 lh-1">Congrats!</div>
                  <div class="mt-3">Your Admission Completed</div>
                </div>
              </div>
            </div>

            <div class="-el-5">
              <div
                class="sm:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 shadow-6"
              >
                <nuxt-img
                  width="70"
                  height="70"
                  src="/assets/img/masthead/4.png"
                  alt="icon"
                ></nuxt-img>
                <div class="ml-20">
                  <div class="text-dark-1 text-16 fw-500 lh-1">Ali Tufan</div>
                  <div class="mt-3">UX/UI Designer</div>
                  <div class="d-flex x-gap-5 mt-3">
                    <Star :star="5" textSize="text-11" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { features } from "~/data/learningPaths";
import Star from "@/components/common/Star";
</script>

<style scoped>
/* Add your styles here */
</style>
