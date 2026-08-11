<template>
  <section
    :class="`layout-pt-lg layout-pb-lg ${
      backgroundColor ? backgroundColor : ''
    }`"
  >
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Learn from the best instructors</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/instructors-list-1"
            class="button -icon -purple-3 text-purple-1"
          >
            View All Instructors
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div class="row y-gap-30 pt-50">
        <div
          v-for="(elm, i) in teamMembers.slice(0, 4)"
          :key="i"
          class="col-lg-3 col-sm-6"
        >
          <div class="teamCard -type-1 -teamCard-hover">
            <div class="teamCard__image">
              <nuxt-img
                :width="300"
                :height="330"
                :style="{ height: '100%', width: '100%' }"
                :src="elm.image"
                alt="image"
              />
              <div class="teamCard__socials">
                <div
                  class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100"
                >
                  <nuxt-link
                    v-for="(itm, i) in elm.socialProfile"
                    :key="i"
                    :to="itm.url ? itm.url : '#'"
                  >
                    <i :class="`${itm.icon} text-white`"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="teamCard__content">
              <h4 class="teamCard__title">
                <nuxt-link class="linkCustom" :to="`/instructors/${elm.id}`">
                  {{ elm.name }}
                </nuxt-link>
              </h4>
              <p class="teamCard__text">{{ elm.role }}</p>

              <div class="row items-center y-gap-10 x-gap-10 pt-10">
                <div class="col-auto">
                  <div class="d-flex items-center">
                    <div class="icon-star text-yellow-1 text-11 mr-5"></div>
                    <div class="text-14 lh-12 text-yellow-1 fw-500">
                      {{ elm.rating }}
                    </div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="d-flex items-center">
                    <div
                      class="icon-online-learning text-light-1 text-11 mr-5"
                    ></div>
                    <div class="text-14 lh-12">{{ elm.students }} Students</div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="d-flex items-center">
                    <div class="icon-play text-light-1 text-11 mr-5"></div>
                    <div class="text-14 lh-12">{{ elm.courses }} Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-center text-center pt-60 lg:pt-40">
        <div class="col-auto">
          <p class="lh-1">
            Want to help people learn, grow and achieve more in life?
            <nuxt-link class="text-purple-1 underline" to="/instructor-become">
              Become an instructor
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamMembers } from "../../../data/instractors";

const props = defineProps(["backgroundColor"]);
</script>

<style scoped>
/* Add your styles here */
</style>
