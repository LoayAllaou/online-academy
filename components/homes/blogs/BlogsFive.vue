<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="800">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">News & Events</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div class="col-auto" data-aos="fade-left" data-aos-duration="800">
          <nuxt-link
            to="/blog-list-3"
            class="button -icon -purple-3 text-purple-1"
          >
            Browse Blog
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div class="row y-gap-30 pt-50">
        <div
          v-for="(elm, i) in blogs.slice(0, 2)"
          :key="i"
          class="col-lg-4 col-md-6"
          data-aos="fade-left"
          data-aos-duration="(i + 1) * 600"
        >
          <div class="blogCard -type-1">
            <div class="blogCard__image">
              <nuxt-img
                :width="410"
                :height="350"
                :src="elm.imageSrc"
                alt="image"
              />
            </div>
            <div class="blogCard__content">
              <div class="blogCard__category">{{ elm.category }}</div>
              <h4 class="blogCard__title">
                <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">{{
                  elm.title
                }}</nuxt-link>
              </h4>
              <div class="blogCard__date">{{ elm.date }}</div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="row y-gap-30">
            <div
              v-for="(elm, i) in events.slice(0, 4)"
              :key="i"
              class="col-lg-12 col-md-6"
              data-aos="fade-left"
              data-aos-duration="(i + 1) * 400"
            >
              <div class="eventCard -type-4">
                <div class="eventCard__date bg-light-7 mr-20">
                  <span class="text-30 lh-1 fw-700">{{
                    elm.date.split(" ")[0]
                  }}</span>
                  <span class="text-18 lh-1 fw-500 uppercase mt-10">{{
                    elm.date.split(" ")[1].split(",")[0]
                  }}</span>
                </div>
                <div class="eventCard__content">
                  <div class="text-13 lh-1 fw-500 uppercase text-purple-1">
                    {{ elm.category }}
                  </div>
                  <h4 class="text-17 lh-15 fw-500 mt-10">
                    <nuxt-link class="linkCustom" :to="`/events/${elm.id}`">{{
                      elm.desc
                    }}</nuxt-link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogs } from "~/data/blog";
import { events } from "~/data/events";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
