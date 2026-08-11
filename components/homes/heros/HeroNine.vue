<template>
  <section class="masthead -type-7 js-mouse-move-container">
    <div class="masthead__bg bg-purple-1 rounded-16">
      <nuxt-img
        width="1560"
        height="600"
        style="width: 100%"
        src="/assets/img/home-9/hero/bg.png"
        alt="image"
      />
    </div>

    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-xl-7 col-lg-6" data-aos="fade-up" data-aos-delay="500">
          <div class="masthead__content">
            <h1 class="masthead__title text-white is-in-view">
              Find a perfect Online Course
            </h1>
            <p class="masthead__text text-16 lh-2 text-white pt-10 is-in-view">
              You can access 7900+ different courses from 600
              <br class="lg:d-none" />
              professional trainers for free
            </p>

            <div>
              <div class="masthead-form bg-white rounded-16 mt-30 px-10 py-10">
                <form
                  @submit.prevent="handleSubmit"
                  class="d-flex x-gap-30 y-gap-10 items-center flex-wrap"
                >
                  <div class="masthead-form__item">
                    <div class="d-flex items-center">
                      <i class="icon-search mr-10 ml-15"></i>
                      <input
                        style="outline: none"
                        required
                        type="text"
                        placeholder="Your Search"
                      />
                    </div>
                  </div>

                  <div class="masthead-form__item">
                    <div class="dropdown js-dropdown w-1/1 bg-white">
                      <div
                        class="d-flex items-center justify-between text-dark-1 -dark-text-dark-1"
                      >
                        <div class="d-flex items-center">
                          <i class="icon-basket mr-10"></i>
                          <span class="js-dropdown-title">
                            {{ categoryOne ? categoryOne : "Category" }}
                          </span>
                        </div>
                        <i class="icon text-9 icon-chevron-down ml-10"></i>
                      </div>

                      <div class="dropdown__item shadow-1">
                        <div class="y-gap-15 js-dropdown-list">
                          <div v-for="(elm, i) in categoriesOne" :key="i">
                            <span
                              @click="
                                () =>
                                  (categoryOne = categoryOne == elm ? '' : elm)
                              "
                              class="d-block js-dropdown-link cursor"
                              :class="{ activeMenu: categoryOne == elm }"
                            >
                              {{ elm }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="masthead-form__item">
                    <div class="dropdown js-dropdown w-1/1 bg-white">
                      <div
                        class="d-flex items-center justify-between text-dark-1 -dark-text-dark-1"
                      >
                        <div class="d-flex items-center">
                          <i class="icon-basket mr-10"></i>
                          <span class="js-dropdown-title">
                            {{ categoryTwo ? categoryTwo : "Category" }}
                          </span>
                        </div>
                        <i class="icon text-9 icon-chevron-down ml-10"></i>
                      </div>

                      <div class="dropdown__item shadow-1">
                        <div class="y-gap-15 js-dropdown-list">
                          <div v-for="(elm, i) in categoriesTwo" :key="i">
                            <span
                              @click="
                                () =>
                                  (categoryTwo = categoryTwo == elm ? '' : elm)
                              "
                              class="d-block js-dropdown-link cursor"
                              :class="{ activeMenu: categoryTwo == elm }"
                            >
                              {{ elm }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="masthead-form__button">
                    <button
                      @click="() => $router.push('/courses-list-2')"
                      class="button -dark-1 text-white -dark-button-dark-1"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div class="text-white mt-20 is-in-view">
                Trending Search: Development, Business, Design, Merketing
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-5 col-lg-6" data-aos="fade-up" data-aos-delay="750">
          <div class="masthead-image">
            <div class="masthead-image__img1">
              <nuxt-img
                width="488"
                height="485"
                data-move="20"
                class="js-mouse-move"
                src="/assets/img/home-9/hero/1.png"
                alt="image"
              />
            </div>

            <div class="-el-1">
              <nuxt-img
                width="108"
                height="108"
                class="js-mouse-move"
                data-move="40"
                src="/assets/img/home-9/hero/2.png"
                alt="icon"
              />
            </div>
            <div class="-el-2">
              <nuxt-img
                width="108"
                height="108"
                class="js-mouse-move"
                data-move="40"
                src="/assets/img/home-9/hero/3.png"
                alt="icon"
              />
            </div>
            <div class="-el-3">
              <nuxt-img
                width="108"
                height="108"
                class="js-mouse-move"
                data-move="40"
                src="/assets/img/home-9/hero/4.png"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";

import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const categoriesOne = ["Category 1", "Category 2", "Category 3"];
const categoriesTwo = ["Category 1", "Category 2", "Category 3"];

const categoryOne = ref("");
const categoryTwo = ref("");

const handleSubmit = (e) => {
  e.preventDefault();
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
