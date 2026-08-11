<template>
  <div>
    <section class="page-header -type-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Latest News</h1>
              </div>
              <div>
                <p class="page-header__text">
                  We’re on a mission to deliver engaging, curated courses at a
                  reasonable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row y-gap-30 justify-center">
          <div
            v-for="(elm, i) in blogs.slice(0, 4)"
            :key="i"
            class="col-lg-10 col-md-11"
          >
            <div class="blogCard -type-3">
              <div class="row y-gap-30 items-center">
                <div class="col-lg-6">
                  <div class="blogCard__image">
                    <nuxt-img
                      width="510"
                      height="392"
                      class="rounded-8"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="blogCard__content pl-60 lg:pl-40 md:pl-0">
                    <div
                      class="blogCard__category text-14 lh-1 text-purple-1 fw-500"
                    >
                      EDUCATION
                    </div>
                    <h4
                      class="blogCard__title text-24 lh-15 text-dark-4 fw-500 mt-15"
                    >
                      <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">
                        {{ elm.title }}
                      </nuxt-link>
                    </h4>
                    <p class="blogCard__text mt-20">{{ elm.desc }}</p>
                    <div class="blogCard__button d-inline-block mt-20">
                      <nuxt-link
                        :to="`/blogs/${elm.id}`"
                        class="button -sm -purple-3 text-purple-1"
                      >
                        Read More
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-center pt-60 lg:pt-40">
          <div class="col-auto">
            <!-- Assuming you have a Pagination component -->
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Pagination from "../common/PaginationTwo";
import { blogs } from "../../data/blog";
</script>
