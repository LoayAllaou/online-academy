<template>
  <div>
    <section class="masthead -type-5">
      <div class="masthead__bg pr-60 md:pr-0" style="z-index: -1">
        <nuxt-img
          width="1860"
          height="770"
          style="width: 100%; height: 100%"
          src="/assets/img/home-6/hero/bg.png"
          alt="image"
        />
      </div>

      <div class="container">
        <div class="row y-gap-50 items-center justify-between">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="masthead__content">
              <h1 class="masthead__title">
                More Than <span class="text-purple-1 underline">3.500+</span
                >{{ " " }} <br class="md:d-none" />
                Education Courses <br class="md:d-none" />
                Online Join Us Today
              </h1>

              <div class="row items-center x-gap-30 y-gap-20 pt-30">
                <div class="col-auto">
                  <nuxt-link
                    to="/courses-list-1"
                    class="button -md -dark-1 -rounded text-white"
                  >
                    Get Started
                  </nuxt-link>
                </div>

                <div class="col-auto" @click="() => (isOpen = true)" cursor>
                  <div
                    style="cursor: pointer"
                    class="d-flex items-center js-gallery"
                    data-gallery="gallery1"
                  >
                    <div
                      class="d-flex justify-center items-center size-60 rounded-full border-dark-1-lg"
                    >
                      <div class="icon-play text-20 text-dark-1 pl-5"></div>
                    </div>
                    <div class="ml-10">Watch Video</div>
                  </div>
                </div>
              </div>

              <div class="row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30">
                <div v-for="(elm, i) in featureSix" :key="i" class="col-xl-4">
                  <div class="d-flex items-center text-dark-1">
                    <div class="mr-10">
                      <nuxt-img
                        width="24"
                        height="24"
                        :src="elm.imageSrc"
                        alt="icon"
                      />
                    </div>
                    <div class="fw-500 lh-1 pt-3">{{ elm.text }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="750">
            <div class="composition -type-1 js-mouse-move-container">
              <div class="-img-1">
                <nuxt-img
                  width="255"
                  height="250"
                  class="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-6/hero/2.png"
                  alt="image"
                />
              </div>
              <div class="-img-2">
                <nuxt-img
                  width="300"
                  height="400"
                  class="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-6/hero/1.png"
                  alt="image"
                />
              </div>
              <div class="-img-3">
                <nuxt-img
                  width="200"
                  height="200"
                  class="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-6/hero/3.png"
                  alt="image"
                />
              </div>

              <div data-move="30" class="-el-1 md:d-none js-mouse-move">
                <div
                  class="img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8"
                >
                  <div
                    class="size-50 d-flex justify-center items-center bg-red-2 rounded-full"
                  >
                    <nuxt-img
                      width="24"
                      height="24"
                      src="/assets/img/masthead/1.svg"
                      alt="icon"
                    />
                  </div>
                  <div class="ml-20">
                    <div class="text-orange-1 text-16 fw-500 lh-1">3.000 +</div>
                    <div class="mt-3">Free Courses</div>
                  </div>
                </div>
              </div>

              <div data-move="60" class="-el-2 md:d-none js-mouse-move">
                <div
                  class="img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8"
                >
                  <nuxt-img
                    width="70"
                    height="70"
                    src="/assets/img/masthead/4.png"
                    alt="icon"
                  />
                  <div class="ml-20">
                    <div class="text-dark-1 text-16 fw-500 lh-1">Ali Tufan</div>
                    <div class="mt-3">UX/UI Designer</div>
                    <div class="d-flex x-gap-5 mt-3">
                      <div v-for="star in 5" :key="star">
                        <div class="icon-star text-yellow-1 text-11"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-move="30" class="-el-3 md:d-none js-mouse-move">
                <div
                  class="img-el px-40 py-20 shadow-4 d-flex items-center bg-white rounded-8"
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
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="text-purple-1 text-16 fw-500 lh-1">
                      Congrats!
                    </div>
                    <div class="mt-3">Your Admission Completed</div>
                  </div>
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
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ModalVideo from "@/components/common/ModalVideo.vue";
import { featureSix } from "../../../data/features";

const isOpen = ref(false);
const close = () => {
  isOpen.value = false;
};
onMounted(() => {
  const parallaxIt = () => {
    const target = document.querySelectorAll(".js-mouse-move-container");

    target.forEach((container) => {
      const targets = container.querySelectorAll(".js-mouse-move");

      targets.forEach((el) => {
        const movement = el.getAttribute("data-move");

        document.addEventListener("mousemove", (e) => {
          const relX = e.pageX - container.offsetLeft;
          const relY = e.pageY - container.offsetTop;

          gsap.to(el, {
            x:
              ((relX - container.offsetWidth / 2) / container.offsetWidth) *
              Number(movement),
            y:
              ((relY - container.offsetHeight / 2) / container.offsetHeight) *
              Number(movement),
            duration: 0.2,
          });
        });
      });
    });
  };

  parallaxIt();
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
