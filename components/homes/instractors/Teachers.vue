<template>
  <section class="section-bg layout-pt-lg layout-pb-sm bg-light-4">
    <div class="section-bg__item -full">
      <div
        class="bg-image js-lazy"
        :style="{ backgroundImage: 'url(/assets/img/home-6/svg/bg.png)' }"
      ></div>
    </div>

    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-xl-6 col-lg-7">
          <div class="composition -type-2">
            <div class="-el-1">
              <div class="bg-white rounded-8 px-40 py-40">
                <div class="text-18 text-dark-1 lh-11 fw-500">
                  <span class="text-purple-1">200+</span> Verified Teacher
                </div>
                <div class="y-gap-20 pt-25">
                  <div
                    v-for="(elm, i) in teachers"
                    :key="i"
                    class="d-flex items-center"
                  >
                    <nuxt-img
                      width="55"
                      height="55"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                    <div class="ml-20">
                      <div class="text-15 text-dark-1 lh-11 fw-500">
                        {{ elm.name }}
                      </div>
                      <div class="text-13 lh-1 mt-5">{{ elm.jobTitle }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="-el-2">
              <div class="bg-white rounded-8">
                <nuxt-img
                  width="300"
                  height="330"
                  class="w-1/1"
                  :src="marketingCoordinator.imgSrc"
                  alt="image"
                />
                <div class="px-20 py-20">
                  <div class="text-17 fw-500 text-dark-1">
                    <nuxt-link
                      class="linkCustom"
                      :to="`/instructors/${marketingCoordinator.id}`"
                    >
                      {{ marketingCoordinator.name }}
                    </nuxt-link>
                  </div>
                  <div class="text-15 lh-1 mt-5">Marketing Coordinator</div>
                  <div class="d-flex x-gap-15 pt-15">
                    <div class="d-flex items-center">
                      <div class="icon-star text-11 text-yellow-1 mr-10"></div>
                      <div class="text-13 lh-12 text-yellow-1">
                        {{ marketingCoordinator.rating }}
                      </div>
                    </div>

                    <div class="d-flex items-center">
                      <nuxt-img
                        width="16"
                        height="16"
                        class="shrink-0 mr-10"
                        src="/assets/img/team/icons/1.svg"
                        alt="icon"
                      />
                      <div class="text-13 lh-12">
                        {{ marketingCoordinator.students }} Students
                      </div>
                    </div>

                    <div class="d-flex items-center">
                      <nuxt-img
                        width="12"
                        height="12"
                        class="shrink-0 mr-10"
                        src="/assets/img/team/icons/2.svg"
                        alt="icon"
                      />
                      <div class="text-13 lh-12">
                        {{ marketingCoordinator.courses }} Course
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-10">
          <h2 class="text-30 lh-15">
            Truested By Best
            <br class="lg:d-none" />
            Teachers
          </h2>
          <p class="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>

          <div class="y-gap-20 pt-25">
            <div
              v-for="(elm, i) in teachingFeatures"
              :key="i"
              class="d-flex items-center"
            >
              <div
                class="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15"
              >
                <i
                  class="fa fa-check text-white"
                  :style="{
                    strokeWidth: 2,
                    fontSize: '10px',
                    fontWeight: '300',
                  }"
                  data-feather="check"
                ></i>
              </div>
              <div class="fw-500 text-dark-1">{{ elm.title }}</div>
            </div>
          </div>

          <div class="d-inline-block mt-35">
            <a href="#" class="button -md -dark-2 text-white"
              >See More</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="svg-shape">
    <svg
      width="1925"
      height="261"
      viewBox="0 0 1925 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
        fill="#F7F8FB"
      />
    </svg>
  </div>
</template>

<script setup>
import { teachers, marketingCoordinator } from "../../../data/instractors";
import { teachingFeatures } from "../../../data/features";
</script>

<style scoped>
/* Add your styles here */
</style>
