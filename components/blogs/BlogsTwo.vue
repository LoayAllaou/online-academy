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
        <div class="row">
          <div class="col-lg-9">
            <div class="row y-gap-30">
              <div v-for="(elm, i) in blogs" :key="i" class="col-lg-4 col-md-6">
                <div class="blogCard -type-1">
                  <div class="blogCard__image">
                    <nuxt-img
                      width="510"
                      height="435"
                      class="w-1/1 rounded-8"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                  </div>
                  <div class="blogCard__content mt-20">
                    <div class="blogCard__category">
                      {{ elm.category.toUpperCase() }}
                    </div>
                    <h4 class="blogCard__title text-18 lh-15 fw-500 mt-5">
                      <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">
                        {{ elm.title }}
                      </nuxt-link>
                    </h4>
                    <div class="blogCard__date mt-5">{{ elm.date }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-center pt-60 lg:pt-40">
              <div class="col-auto">
                <div class="pagination -buttons">
                  <button class="pagination__button -prev">
                    <i class="icon icon-chevron-left"></i>
                  </button>
                  <div class="pagination__count">
                    <a href="#">1</a>
                    <a class="-count-is-active" href="#">2</a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">67</a>
                  </div>
                  <button class="pagination__button -next">
                    <i class="icon icon-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="sidebar -blog">
              <div class="sidebar__item">
                <h5 class="sidebar__title">Categories</h5>

                <div class="sidebar-content -list">
                  <a class="text-dark-1" href="#"> College </a>
                  <a class="text-dark-1" href="#"> Gym </a>
                  <a class="text-dark-1" href="#"> High School </a>
                  <a class="text-dark-1" href="#"> Primary </a>
                  <a class="text-dark-1" href="#"> School </a>
                  <a class="text-dark-1" href="#"> University </a>
                </div>
              </div>

              <div class="sidebar__item">
                <h5 class="sidebar__title">Recent Posts</h5>

                <div class="sidebar-content -recent y-gap-20">
                  <div
                    v-for="(elm, i) in blogs.slice(0, 3)"
                    :key="i"
                    class="sidebar-recent d-flex items-center"
                  >
                    <div class="sidebar-recent__image mr-15">
                      <nuxt-img
                        width="65"
                        height="65"
                        :src="elm.imageSrc"
                        alt="image"
                      />
                    </div>
                    <div class="sidebar-recent__content">
                      <h5 class="text-15 lh-15 fw-500">
                        <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">
                          {{ elm.title }}
                        </nuxt-link>
                      </h5>
                      <div class="text-13 lh-1 mt-5">{{ elm.date }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar__item">
                <h5 class="sidebar__title">Tags</h5>

                <div class="sidebar-content -tags">
                  <div v-for="(elm, i) in tags" :key="i" class="sidebar-tag">
                    <a class="text-11 fw-500 text-dark-1" :href="elm.href">
                      {{ elm.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { blogs, tags } from "@/data/blog";

// Your existing logic for handling data, if any
</script>
