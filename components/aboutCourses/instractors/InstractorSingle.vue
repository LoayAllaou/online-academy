<template>
  <section class="page-header -type-3">
    <div class="page-header__bg bg-purple-1"></div>
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-8 col-lg-9 col-md-11">
          <div class="page-header__content">
            <div class="page-header__img">
              <nuxt-img
                :width="120"
                :height="120"
                :style="{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  objectFit: 'cover',
                }"
                :src="
                  pageItem.image ||
                  pageItem.imageSrc ||
                  '/assets/img/Instructors-single/1.png'
                "
                alt="image"
              />
            </div>

            <div class="page-header__info pt-20">
              <h1 class="text-30 lh-14 fw-700 text-white">
                {{ pageItem.name }}
              </h1>
              <div class="text-white">{{ pageItem.role }}</div>
              <div class="d-flex x-gap-20 pt-15">
                <div class="d-flex items-center text-white">
                  <div class="icon-star mr-10"></div>
                  <div class="text-13 lh-1">Instructor Rating</div>
                </div>

                <div class="d-flex items-center text-white">
                  <div class="icon-video-file mr-10"></div>
                  <div class="text-13 lh-1">
                    {{ pageItem.reviews || 3545 }} Reviews
                  </div>
                </div>

                <div class="d-flex items-center text-white">
                  <div class="icon-person-3 mr-10"></div>
                  <div class="text-13 lh-1">
                    {{ pageItem.students || pageItem.studentCount || 143
                    }}{{ " " }}
                    Students
                  </div>
                </div>

                <div class="d-flex items-center text-white">
                  <div class="icon-play mr-10"></div>
                  <div class="text-13 lh-1">
                    {{ pageItem.courses || pageItem.courseCount || 453 }} Course
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex items-center mt-30">
              <button class="button -md -green-1 text-dark-1">
                Send Message
              </button>

              <div class="d-flex items-center x-gap-15 text-white ml-25">
                <a
                  v-for="(itm, index) in pageItem.socialProfile"
                  :key="index"
                  :href="itm.url"
                >
                  <i :class="'fa ' + itm.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-8 col-lg-9 col-md-11">
          <div class="tabs -active-purple-2 js-tabs">
            <div class="tabs__controls d-flex js-tabs-controls">
              <button
                @click="() => (activeTab = 1)"
                :class="`tabs__button js-tabs-button ${
                  activeTab == 1 ? 'is-active' : ''
                }`"
                type="button"
              >
                Overview
              </button>
              <button
                @click="() => (activeTab = 2)"
                :class="`tabs__button js-tabs-button ml-30 ${
                  activeTab == 2 ? 'is-active' : ''
                } `"
                type="button"
              >
                Courses
              </button>
            </div>

            <div class="tabs__content pt-60 lg:pt-40 js-tabs-content">
              <div
                :class="`tabs__pane -tab-item-1  ${
                  activeTab == 1 ? 'is-active' : ''
                } `"
              >
                <h4 class="text-20">Description</h4>
                <p class="text-light-1 mt-30">
                  Phasellus enim magna, varius et commodo ut, ultricies vitae
                  velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                  sagittis vel justo. In libero urna, venenatis sit amet ornare
                  non, suscipit nec risus. Sed consequat justo non mauris
                  pretium at tempor justo sodales. Quisque tincidunt laoreet
                  malesuada. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur.
                  <br />
                  <br />
                  This course is aimed at people interested in UI/UX Design.
                  We’ll start from the very beginning and work all the way
                  through, step by step. If you already have some UI/UX Design
                  experience but want to get up to speed using Adobe XD then
                  this course is perfect for you too!
                  <br />
                  <br />
                  First, we will go over the differences between UX and UI
                  Design. We will look at what our brief for this real-world
                  project is, then we will learn about low-fidelity wireframes
                  and how to make use of existing UI design kits.
                </p>
                <button class="button underline text-purple-1 mt-30">
                  Show More
                </button>
              </div>

              <div
                :class="`tabs__pane -tab-item-2 ${
                  activeTab == 2 ? 'is-active' : ''
                } `"
              >
                <div class="row">
                  <div
                    v-for="(elm, i) in coursesData.slice(0, 2)"
                    :key="i"
                    class="col-md-6"
                  >
                    <div
                      class="coursesCard -type-1 rounded-8 shadow-3 bg-white"
                    >
                      <div class="relative">
                        <div
                          class="coursesCard__image overflow-hidden rounded-top-8"
                        >
                          <nuxt-img
                            width="510"
                            height="360"
                            class="w-1/1"
                            :src="elm.imageSrc"
                            alt="image"
                          />
                          <div
                            class="coursesCard__image_overlay rounded-top-8"
                          ></div>
                        </div>
                        <div
                          class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
                        >
                          <div v-if="elm.popular">
                            <div class="px-15 rounded-200 bg-purple-1">
                              <span
                                class="text-11 lh-1 uppercase fw-500 text-white"
                              >
                                Popular
                              </span>
                            </div>
                          </div>
                          <div v-if="elm.bestSeller">
                            <div class="px-15 rounded-200 bg-green-1">
                              <span
                                class="text-11 lh-1 uppercase fw-500 text-dark-1"
                              >
                                Best sellers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="h-100 pt-20 pb-15 px-30">
                        <div class="d-flex items-center">
                          <div class="text-14 lh-1 text-yellow-1 mr-10">
                            {{ elm.rating }}
                          </div>
                          <div class="d-flex x-gap-5 items-center">
                            <Star :star="Math.round(elm.rating)" />
                          </div>
                          <div class="text-13 lh-1 ml-10">
                            ({{ elm.ratingCount }})
                          </div>
                        </div>

                        <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                          <nuxt-link
                            :to="`/courses/${elm.id}`"
                            class="linkCustom"
                          >
                            {{ elm.title }}
                          </nuxt-link>
                        </div>

                        <div class="d-flex x-gap-10 items-center pt-10">
                          <div class="d-flex items-center">
                            <div class="mr-8">
                              <nuxt-img
                                :width="16"
                                :height="17"
                                src="/assets/img/coursesCards/icons/1.svg"
                                alt="icon"
                              />
                            </div>
                            <div class="text-14 lh-1">
                              {{ elm.lessonCount }} lesson
                            </div>
                          </div>

                          <div class="d-flex items-center">
                            <div class="mr-8">
                              <nuxt-img
                                :width="16"
                                :height="17"
                                src="/assets/img/coursesCards/icons/2.svg"
                                alt="icon"
                              />
                            </div>
                            <div class="text-14 lh-1">
                              {{
                                `${Math.floor(elm.duration / 60)}h ${Math.floor(
                                  elm.duration % 60,
                                )}m`
                              }}
                            </div>
                          </div>

                          <div class="d-flex items-center">
                            <div class="mr-8">
                              <nuxt-img
                                :width="16"
                                :height="17"
                                src="/assets/img/coursesCards/icons/3.svg"
                                alt="icon"
                              />
                            </div>
                            <div class="text-14 lh-1">
                              {{ elm.level }}
                            </div>
                          </div>
                        </div>

                        <div class="coursesCard-footer">
                          <div class="coursesCard-footer__author">
                            <nuxt-img
                              width="30"
                              height="30"
                              :src="elm.authorImageSrc"
                              alt="image"
                            />
                            <div>{{ elm.authorName }}</div>
                          </div>

                          <div class="coursesCard-footer__price">
                            <template v-if="elm.paid">
                              <div>${{ elm.originalPrice }}</div>
                              <div>${{ elm.discountedPrice }}</div>
                            </template>
                            <template v-else>
                              <div></div>
                              <div>Free</div>
                            </template>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "@/components/common/Star";
import { coursesData } from "@/data/courses";
import {
  teamMembers,
  teamMembersFull,
  instractorsEight,
  instractorsNine,
  marketingCoordinator,
} from "@/data/instractors";
const activeTab = ref(1);
const pageItem = ref(teamMembers[0]);
const props = defineProps(["id"]);
onMounted(() => {
  const filtered = [
    ...teamMembers,
    ...teamMembersFull,
    ...instractorsEight,
    ...instractorsNine,
    marketingCoordinator,
  ].filter((elm) => elm.id == props.id)[0];

  if (filtered) {
    pageItem.value = filtered;
  }
});
</script>

<style lang="scss" scoped></style>
