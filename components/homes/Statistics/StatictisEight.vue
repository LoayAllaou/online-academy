<template>
  <section class="section-bg pt-90 pb-90 lg:pt-50 lg:pb-50">
    <div class="section-bg__item -full">
      <div
        class="bg-image js-lazy"
        :style="{ backgroundImage: 'url(/assets/img/home-8/grow/bg.png)' }"
      ></div>
    </div>

    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div
          class="col-xl-4 col-lg-5 col-md-8"
          data-aos="fade-up"
          data-aos-duration="450"
        >
          <h2 class="text-30 lh-15 text-white">
            Grow your career today with the Education courses
          </h2>
          <p class="text-white mt-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div class="d-inline-block mt-25">
            <a href="#" class="button -md -green-1 text-dark-1">
              Explore Courses
            </a>
          </div>
        </div>

        <div class="col-lg-auto" data-aos="fade-up" data-aos-duration="450">
          <div class="composition -type-6">
            <div
              v-for="(elm, i) in statictisEight"
              :key="i"
              :class="elm.className"
            >
              <div
                class="bg-white rounded-16 px-60 py-50 sm:px-30 sm:py-40 text-center"
              >
                <div class="text-55 fw-700 text-dark-1">{{ elm.score }}</div>
                <div class="mt-10">{{ elm.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { statictisEight } from "@/data/features";
</script>
