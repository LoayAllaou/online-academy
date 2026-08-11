<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Forums</h1>

          <PageLinksTwo />
        </div>
      </div>

      <div class="row y-gap-30">
        <div class="col-12">
          <div class="rounded-16 bg-white shadow-4 h-100">
            <div class="d-flex items-center py-20 px-30 border-bottom-light">
              <h2 class="text-17 lh-1 fw-500">Page Head</h2>
            </div>

            <div class="py-30 px-30">
              <h4 class="text-24 lh-12 fw-500">Course discussion</h4>
              <div class="mt-15">
                In this space we'll discuss aspects of the films and of
                psychology in cinema in general. Feel free to raise issues which
                you think might help you with later assignments and group
                projects. This is a hive mind area! You can rate others and view
                ratings.
              </div>
              <button class="button h-50 px-30 -purple-1 text-white mt-30">
                Add a New Discussion Topic
              </button>

              <div class="mt-40">
                <div class="px-30 py-20 bg-light-7 rounded-8">
                  <div class="row x-gap-10">
                    <div class="col-lg-4">
                      <div class="text-purple-1">Discussion</div>
                    </div>
                    <div class="col-lg-3">
                      <div class="text-purple-1">Started by</div>
                    </div>
                    <div class="col-lg-3">
                      <div class="text-purple-1">Last post</div>
                    </div>
                    <div class="col-lg-1">
                      <div class="text-purple-1">Replies</div>
                    </div>
                    <div class="col-lg-1">
                      <div class="text-purple-1">Subscribe</div>
                    </div>
                  </div>
                </div>

                <div
                  v-for="(elm, i) in courseDiscussion"
                  :key="i"
                  class="px-30 border-bottom-light"
                >
                  <div class="row x-gap-10 items-center py-25">
                    <div class="col-lg-4">
                      <div class="text-purple-1">{{ elm.title }}</div>
                    </div>

                    <div class="col-lg-3">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="40"
                          :height="40"
                          :src="elm.author1Img"
                          alt="image"
                          class="size-40 fit-cover"
                        />
                        <div class="ml-10">
                          <div class="text-dark-1 lh-12 fw-500">
                            {{ elm.author1 }}
                          </div>
                          <div class="text-14 lh-12 mt-5">{{ elm.date1 }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="40"
                          :height="40"
                          :src="elm.author2Img"
                          alt="image"
                          class="size-40 fit-cover"
                        />
                        <div class="ml-10">
                          <div class="text-dark-1 lh-12 fw-500">
                            {{ elm.author2 }}
                          </div>
                          <div class="text-14 lh-12 mt-5">{{ elm.date2 }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-1">{{ elm.count }}</div>

                    <div class="col-lg-1">
                      <div class="d-flex items-center">
                        <div class="form-switch pr-10">
                          <div class="switch" data-switch=".js-switch-content">
                            <input type="checkbox" />
                            <span class="switch__slider"></span>
                          </div>
                        </div>
                        <div class="icon-bin"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="d-flex justify-between flex-wrap y-gap-20 items-center mt-50"
              >
                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Forum Netiquette
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>

                <div
                  id="dd10button"
                  @click="() => toggleDropdown('dd10button', 'dd10content')"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-white border-light rounded-8 px-20 py-10"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span class="js-dropdown-title">Jump to...</span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="dd10content"
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Share Examples Of Digital
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="rounded-16 bg-white shadow-4 h-100">
            <div
              class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
            >
              <h2 class="text-17 lh-1 fw-500">
                Course discussion The attraction of Mental Illness
              </h2>

              <div
                id="dd11button"
                @click="() => toggleDropdown('dd11button', 'dd11content')"
                class="dropdown js-dropdown js-category-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 bg-transparent"
                  data-el-toggle=".js-category-toggle"
                  data-el-toggle-active=".js-category-active"
                >
                  <span class="js-dropdown-title">Settings</span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  id="dd11content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div>
                      <a href="#" class="d-block js-dropdown-link">
                        Animation
                      </a>
                    </div>

                    <div>
                      <a href="#" class="d-block js-dropdown-link"> Design </a>
                    </div>

                    <div>
                      <a href="#" class="d-block js-dropdown-link">
                        Illustration
                      </a>
                    </div>

                    <div>
                      <a href="#" class="d-block js-dropdown-link">
                        Business
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="py-30 px-30">
              <div class="d-flex items-center justify-between">
                Search
                <div
                  id="dd12button"
                  @click="() => toggleDropdown('dd12button', 'dd12content')"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-light-3 rounded-8 px-20 py-10"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span class="js-dropdown-title">
                      Display Replies In Threaded From
                    </span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="dd12content"
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row y-gap-30 pt-30">
                <div
                  v-for="(elm, i) in reviews"
                  :key="i"
                  class="md:direction-column"
                >
                  <div
                    :class="`d-flex ${i !== 0 ? 'border-top-light pt-30' : ''}`"
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

                        <div class="d-flex x-gap-5 items-center mt-10">
                          <Star :star="elm.rating" />
                        </div>
                      </div>

                      <h5 class="text-15 fw-500 mt-15">{{ elm.title }}</h5>
                      <div class="comments__text mt-10">
                        <p>{{ elm.comment }}</p>
                      </div>

                      <div class="comments__helpful mt-20">
                        <button
                          class="button text-13 px-15 py-10 -light-7 text-purple-1"
                        >
                          Respond
                        </button>
                      </div>
                    </div>

                    <div class="ml-20">
                      <a href="#" class="icon-flag"></a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="d-flex justify-between flex-wrap y-gap-20 items-center mt-50"
              >
                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Forum Netiquette
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>

                <div
                  id="dd13button"
                  @click="() => toggleDropdown('dd13button', 'dd13content')"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-white border-light rounded-8 px-20 py-10"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span class="js-dropdown-title">Jump to...</span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="dd13content"
                    class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                  >
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" class="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" class="button -icon -purple-3 h-50 text-purple-1">
                  Share Examples Of Digital
                  <i class="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterNine />
  </div>
</template>

<script setup>
import FooterNine from "../layout/footers/FooterNine";
import { reviews } from "@/data/reviews";
import Star from "../common/Star";
import { courseDiscussion } from "@/data/dashboard";

import PageLinksTwo from "../common/PageLinksTwo";
const toggleDropdown = (btn, content) => {
  document.getElementById(btn).classList.toggle("-is-dd-active");
  document.getElementById(content).classList.toggle("-is-el-visible");
};
</script>

<style lang="scss" scoped></style>
