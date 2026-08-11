<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-xl-6 col-lg-7">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">What is Educrat?</h2>
            <p class="sectionTitle__text">
              Learn the data skills you need online at your own pace—from
              non-coding essentials to data science and machine learning.
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="350">
          <nuxt-img
            width="660"
            height="730"
            class="w-1/1"
            src="/assets/img/home-8/what/1.png"
            alt="image"
          />
        </div>

        <div class="col-xl-5 col-lg-6 col-md-9">
          <div class="d-flex flex-column y-gap-30">
            <div
              v-for="(elm, i) in featuresEight"
              :key="i"
              class="d-flex"
              data-aos="`fade-up`"
              data-aos-duration="`${(i + 1) * 250}`"
            >
              <div
                class="d-flex justify-center items-center size-70 bg-orange-5 rounded-full"
              >
                <nuxt-img width="34" height="34" :src="elm.icon" alt="icon" />
              </div>
              <div class="ml-20">
                <h5 class="text-18 lh-11 text-dark-1 fw-500">
                  {{ elm.title }}
                </h5>
                <p class="text-dark-1 mt-5">{{ elm.text }}</p>
              </div>
            </div>
          </div>

          <div
            class="d-inline-block mt-30"
            data-aos="`fade-up`"
            data-aos-duration="500"
          >
            <a href="#" class="button -md -orange-1 text-white">
              Start Learning For Free
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuresEight } from "../../../data/features";
</script>
