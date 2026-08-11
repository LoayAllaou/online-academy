<template>
  <div>
    <section class="masthead -type-6">
      <div class="masthead__bg" style="z-index: -1">
        <nuxt-img
          style="pointer-events: none"
          width="470"
          height="534"
          src="/assets/img/home-7/hero/1.svg"
          alt="blob"
        />
        <nuxt-img
          style="pointer-events: none"
          src="/assets/img/home-7/hero/2.svg"
          width="579"
          height="915"
          alt="blob"
        />
        <nuxt-img
          width="1920"
          height="830"
          style="pointer-events: none; width: 100%"
          src="/assets/img/home-7/hero/bg.png"
          alt="background"
        />

        <div
          class="absolute-full-center"
          style="max-height: 100vh; overflow: hidden"
        >
    
        </div>
      </div>

      <div class="container">
        <div class="row y-gap-50 items-center">
          <div class="col-lg-5" data-aos="fade-up" data-aos-delay="500">
            <div class="masthead__content">
              <div class="text-17 lh-15 text-purple-1 fw-500 mb-10">
                Start learning for free
              </div>
              <h1 class="masthead__title">
                Build data skills
                <br />
                <span class="text-purple-1">online</span>
              </h1>
              <p class="mt-5">
                Data drives everything. Get the skills you need
                <br class="lg:d-none" />
                for the future of work.
              </p>
              <div class="row items-center x-gap-20 y-gap-20 pt-20">
                <div class="col-auto">
                  <nuxt-link
                    to="/signup"
                    class="button -md -gradient-1 -rounded text-white"
                  >
                    Join For Free
                  </nuxt-link>
                </div>
                <div class="col-auto">
                  <nuxt-link
                    to="/courses-list-1"
                    class="button -md -outline-light-5 -rounded text-dark-1"
                  >
                    Find Courses
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="750">
            <div class="masthead__image relative">
              <nuxt-img
                width="793"
                height="777"
                src="/assets/img/home-7/hero/image.png"
                alt="image"
              />
              <div
                @click="() => (isOpen = true)"
                class="absolute-full-center d-flex justify-center items-center cursor"
              >
                <div
                  style="cursor: pointer"
                  class="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery"
                  data-gallery="gallery1"
                >
                  <div class="icon-play text-18"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ModalVideo videoId="LlCwHnp3kL4" :isOpen="isOpen" @close="close" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalVideo from "@/components/common/ModalVideo.vue";


const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
