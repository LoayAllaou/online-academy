<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Reviews</h1>
          <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">All Reviews</h2>
            </div>

            <div class="py-30 px-30">
              <div class="row y-gap-30">
                <div
                  v-for="(elm, i) in reviews"
                  :key="i"
                  class="md:direction-column"
                >
                  <div
                    class="d-flex"
                    :class="{ 'border-top-light': i !== 0, 'pt-30': i !== 0 }"
                  >
                    <div class="mr-20">
                      <nuxt-img
                        :width="60"
                        :height="60"
                        :src="elm.avatarSrc"
                        alt="image"
                      />
                    </div>

                    <div class="comments__body md:mt-15">
                      <div class="comments__header">
                        <h4 class="text-17 fw-500 lh-15">
                          {{ elm.name }}
                          <span class="text-13 text-light-1 fw-400 ml-5">
                            {{ elm.date }}
                          </span>
                        </h4>

                        <div class="d-flex x-gap-5 items-center mt-15">
                          <Star :star="elm.rating" />
                        </div>
                      </div>

                      <h5 class="text-15 fw-500 mt-15">{{ elm.title }}</h5>
                      <div class="comments__text mt-10">
                        <p>{{ elm.comment }}</p>
                      </div>

                      <div class="comments__helpful mt-20">
                        <button
                          class="button text-13 -sm -light-7 -dark-button-dark-2 text-purple-1"
                        >
                          Respond
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer -dashboard py-30">
      <div class="row items-center justify-between">
        <div class="col-auto">
          <div class="text-13 lh-1">
            © {{ new Date().getFullYear() }} Educrat. All Right Reserved.
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex items-center">
            <div class="d-flex items-center flex-wrap x-gap-20">
              <div>
                <nuxt-link to="/help-center" class="text-13 lh-1">
                  Help
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/terms" class="text-13 lh-1">
                  Privacy Policy
                </nuxt-link>
              </div>
              <div>
                <a href="#" class="text-13 lh-1"> Cookie Notice </a>
              </div>
              <div>
                <a href="#" class="text-13 lh-1"> Security </a>
              </div>
              <div>
                <nuxt-link to="/terms" class="text-13 lh-1">
                  Terms of Use
                </nuxt-link>
              </div>
            </div>

            <button class="button -md -rounded bg-light-4 text-light-1 ml-30">
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reviews } from "@/data/reviews";
import Star from "../common/Star";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
