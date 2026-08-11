<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6">
          <div
            class="sectionTitle"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <h2 class="sectionTitle__title">Resources & News</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div class="col-auto" data-aos="fade-left" data-aos-duration="700">
          <nuxt-link
            to="/blog-list-1"
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
          data-aos-duration="(i + 1) * 400"
        >
          <div class="blogCard -type-1">
            <div class="blogCard__image">
              <nuxt-img
                :width="410"
                :height="350"
                style="width: 100%"
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
          <div
            class="row y-gap-30"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div
              v-for="(elm, i) in events.slice(0, 3)"
              :key="i"
              class="col-lg-12 col-md-6"
            >
              <div class="blogCard -type-2">
                <div class="blogCard__image">
                  <nuxt-img
                    :width="300"
                    :height="210"
                    style="height: 120px; width: 140px"
                    :src="elm.imgSrc"
                    alt="image"
                  />
                </div>
                <div class="blogCard__content">
                  <div class="blogCard__category">{{ elm.category }}</div>
                  <h4 class="blogCard__title">
                    <nuxt-link class="linkCustom" :to="`/events/${elm.id}`">{{
                      elm.title
                    }}</nuxt-link>
                  </h4>
                  <div class="blogCard__date">{{ elm.date }}</div>
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
