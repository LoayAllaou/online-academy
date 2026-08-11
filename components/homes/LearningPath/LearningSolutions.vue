<template>
  <section class="layout-pt-lg layout-pb-lg js-mouse-move-container">
    <div class="container">
      <div class="row y-gap-30 items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <h2 class="text-45 lg:text-40 md:text-30 text-dark-1">
            Online learning solutions
            <br class="xl:d-none" />
            that meet your needs.
          </h2>
          <p class="text-dark-1 mt-20">
            Use the list below to bring attention to your product’s key
            <br class="lg:d-none" />
            differentiator.
          </p>

          <div class="row y-gap-30 pt-60 lg:pt-40">
            <div v-for="(elm, i) in learningPath" :key="i" class="col-12">
              <div class="featureIcon -type-1">
                <div
                  :class="{ [elm.iconBg]: elm.iconBg }"
                  class="featureIcon__icon"
                >
                  <nuxt-img
                    width="40"
                    height="40"
                    :src="elm.iconSrc"
                    alt="icon"
                  ></nuxt-img>
                </div>

                <div class="featureIcon__content ml-30 md:ml-20">
                  <h4 class="text-17 fw-500">{{ elm.title }}</h4>
                  <p class="mt-5">
                    {{ elm.description.split(" ").slice(0, 5).join(" ") }}
                    <br class="lg:d-none" />
                    {{ elm.description.split(" ").slice(5, -1).join(" ") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2">
          <div class="elements-image">
            <div class="elements-image__img1">
              <nuxt-img
                width="520"
                height="600"
                class="js-mouse-move"
                data-move="40"
                src="/assets/img/home-2/learning/1.png"
                alt="image"
              ></nuxt-img>
            </div>

            <div class="elements-image__img2">
              <nuxt-img
                width="290"
                height="330"
                class="js-mouse-move"
                data-move="70"
                src="/assets/img/home-2/learning/2.png"
                alt="image"
              ></nuxt-img>
            </div>

            <div
              data-move="60"
              class="elements-image__el1 lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
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
                  <div v-for="n in 5" :key="n">
                    <div class="icon-star text-yellow-1 text-11"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-move="30"
              class="elements-image__el2 lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
            >
              <div
                class="size-50 d-flex justify-center items-center bg-red-2 rounded-full"
              >
                <nuxt-img
                  width="24"
                  height="23"
                  src="/assets/img/masthead/1.svg"
                  alt="icon"
                ></nuxt-img>
              </div>
              <div class="ml-20">
                <div class="text-orange-1 text-16 fw-500 lh-1">3.000 +</div>
                <div class="mt-3">Free Courses</div>
              </div>
            </div>

            <div
              data-move="30"
              class="elements-image__el3 sm:d-none shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import { learningPath } from "~/data/learningPaths";

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
/* Add your styles here */
</style>
