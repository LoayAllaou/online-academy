<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-center">
        <div class="col-lg-6">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Blog</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/blog-list-1"
            class="button -icon -purple-3 text-purple-1"
          >
            Browse Blog
            <i class="icon-arrow-top-right text-13 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div class="row y-gap-30 pt-60">
        <div
          v-for="(elm, i) in blogs.slice(0, 4)"
          :key="i"
          class="col-lg-3 col-md-6"
          data-aos="fade-left"
          data-aos-duration="(i + 1) * 500"
        >
          <div
            class="blogCard -type-1"
            data-aos="fade-left"
            data-aos-duration="(i + 1) * 400"
          >
            <div class="blogCard__image">
              <nuxt-img
                :width="410"
                :height="350"
                :src="elm.imageSrc"
                alt="image"
              />
            </div>
            <div class="blogCard__content mt-20">
              <div class="blogCard__category">{{ elm.category }}</div>
              <h4 class="blogCard__title text-17 lh-15 mt-5">
                <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">{{
                  elm.title
                }}</nuxt-link>
              </h4>
              <div class="blogCard__date text-14 mt-5">{{ elm.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogs } from "~/data/blog";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
