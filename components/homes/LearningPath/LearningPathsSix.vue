<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-xl-5 col-lg-6 col-md-9 lg:order-2">
          <h3 class="text-45 md:text-30 lh-12">
            <span class="text-purple-1">Learn</span> new skills when
            <br class="lg:d-none" />
            and where you like.
          </h3>
          <p class="mt-20">
            Use the list below to bring attention to your product’s key
            <br class="lg:d-none" />
            differentiator.
          </p>
          <div class="d-inline-block mt-30">
            <a href="#" class="button -md -dark-1 text-white"> Join Free </a>
          </div>
        </div>

        <div class="col-lg-6 lg:order-1">
          <div class="composition -type-3">
            <div class="-el-1">
              <div class="bg-dark-1 py-50 px-30 rounded-8">
                <div class="y-gap-20 pt-25">
                  <div
                    v-for="(elm, i) in learningfeatures"
                    :key="i"
                    class="d-flex items-center"
                  >
                    <div
                      class="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15"
                    >
                      <i class="fa fa-check text-white"></i>
                    </div>
                    <div class="fw-500 text-white">{{ elm.title }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="-el-2">
              <nuxt-img
                width="520"
                height="600"
                style="width: 100%; height: 100%"
                class="w-1/1"
                src="/assets/img/home-6/learn/1.png"
                alt="image"
              ></nuxt-img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { learningfeatures } from "~/data/learningPaths";
</script>

<style scoped>
/* Add your styles here */
</style>
