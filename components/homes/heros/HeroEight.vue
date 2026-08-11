<template>
  <section class="masthead -type-5">
    <div class="masthead__bg" style="pointer-events: none"></div>

    <div class="masthead__container">
      <div class="row y-gap-50 items-center">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
          <div class="masthead__content">
            <div class="text-17 lh-15 text-orange-1 fw-500 mb-10">
              Start learning for free
            </div>
            <h1 class="masthead__title">
              Studies can now be done online much easily
            </h1>
            <p class="mt-5">
              You can access 7900+ different courses from 600
              <br class="lg:d-none" />
              professional trainers for free
            </p>
            <div class="row items-center x-gap-20 y-gap-20 pt-20">
              <div class="col-auto">
                <nuxt-link
                to="/signup"
                  class="button -md -orange-1 text-white"
                >
                  Join For Free
                </nuxt-link>
              </div>
              <div class="col-auto">
                <nuxt-link
                to="/courses-list-6"
                  class="button -md -outline-light-5 text-dark-1"
                >
                  Find Courses
                </nuxt-link>
              </div>
            </div>

            <div class="row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30">
              <div
                v-for="(elm, i) in featureSix"
                :key="i"
                class="col-xl-4 col-auto"
              >
                <div class="text-dark-1">
                  <div class="mr-10">
                    <nuxt-img
                      width="30"
                      height="30"
                      :src="elm.imageSrc"
                      alt="icon"
                    />
                  </div>
                  <div class="fw-500 lh-11 mt-10">
                    {{ elm.text.split(" ").slice(0, -1).join(" ") }}
                    <br />
                    {{ elm.text.split(" ").slice(-1)[0] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="750">
          <div class="masthead__image">
            <nuxt-img
              width="917"
              height="700"
              src="/assets/img/home-8/hero/image.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featureSix } from "../../../data/features";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
