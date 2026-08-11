<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Dashboard</h1>
          <div class="mt-10">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
      </div>

      <div class="row y-gap-30">
        <div v-for="(elm, i) in states" :key="i" class="col-xl-3 col-md-6">
          <div
            class="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4"
          >
            <div>
              <div class="lh-1 fw-500">{{ elm.title }}</div>
              <div class="text-24 lh-1 fw-700 text-dark-1 mt-20">
                ${{ elm.value }}
              </div>
              <div class="lh-1 mt-25">
                <span class="text-purple-1">${{ elm.new }}</span> New Sales
              </div>
            </div>

            <i :class="`text-40 ${elm.iconClass} text-purple-1`"></i>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-30">
        <div class="col-xl-8 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div
              class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
            >
              <h2 class="text-17 lh-1 fw-500">Earning Statistics</h2>
              <div class="">
                <div
                  id="ddtwobutton"
                  @click="() => toggleDropdown('ddtwobutton', 'ddtwocontent')"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span class="js-dropdown-title">This Week</span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="ddtwocontent"
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
            </div>
            <div class="py-40 px-30" style="height:500px">
              <Charts />
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div
              class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
            >
              <h2 class="text-17 lh-1 fw-500">Traffic</h2>
              <div class="">
                <div
                  id="dd3button"
                  @click="() => toggleDropdown('dd3button', 'dd3content')"
                  class="dropdown js-dropdown js-category-active"
                >
                  <div
                    class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span class="js-dropdown-title">This Week</span>
                    <i class="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div
                    id="dd3content"
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
            </div>
            <div class="py-40 px-30 h-700" style="height:380px ; position: relative;">
              <PieChartComponent />
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-30">
        <div class="col-xl-4 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div
              class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
            >
              <h2 class="text-17 fw-500">Popular Instructor</h2>
              <nuxt-link
                to="/instructors-list-2"
                class="text-14 text-purple-1 underline"
              >
                View All
              </nuxt-link>
            </div>
            <div class="py-30 px-30">
              <div class="y-gap-40">
                <div
                  v-for="(elm, i) in teamMembers.slice(0, 5)"
                  :key="i"
                  class="d-flex"
                  :class="{ 'border-top-light': i !== 0 }"
                >
                  <nuxt-img
                    width="40"
                    height="40"
                    class="size-40"
                    :src="elm.image"
                    alt="avatar"
                  />
                  <div class="ml-10 w-1/1">
                    <h4 class="text-15 lh-1 fw-500">
                      <nuxt-link
                        class="linkCustom"
                        :to="`/instructors/${elm.id}`"
                      >
                        {{ elm.name }}
                      </nuxt-link>
                    </h4>
                    <div
                      class="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10"
                    >
                      <div class="d-flex items-center">
                        <i class="icon-message text-15 mr-10"></i>
                        <div class="text-13 lh-1">
                          {{ elm.reviews }} Reviews
                        </div>
                      </div>
                      <div class="d-flex items-center">
                        <i class="icon-online-learning text-15 mr-10"></i>
                        <div class="text-13 lh-1">
                          {{ elm.students }} Students
                        </div>
                      </div>
                      <div class="d-flex items-center">
                        <i class="icon-play text-15 mr-10"></i>
                        <div class="text-13 lh-1">{{ elm.courses }} Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div
              class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
            >
              <h2 class="text-17 lh-1 fw-500">Recent Courses</h2>
              <a href="#" class="text-14 text-purple-1 underline"> View All </a>
            </div>
            <div class="py-30 px-30">
              <div class="y-gap-40">
                <div
                  v-for="(elm, i) in resentCourses"
                  :key="i"
                  class="d-flex"
                  :class="{ 'border-top-light': i !== 0 }"
                >
                  <div class="shrink-0">
                    <nuxt-img
                      width="90"
                      height="80"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                  </div>
                  <div class="ml-15">
                    <h4 class="text-15 lh-16 fw-500">{{ elm.title }}</h4>
                    <div
                      class="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10"
                    >
                      <div class="d-flex items-center">
                        <nuxt-img
                          width="16"
                          height="16"
                          class="size-16 object-cover mr-8"
                          :src="elm.authorImg"
                          alt="icon"
                        />
                        <div class="text-14 lh-1">{{ elm.author }}</div>
                      </div>
                      <div class="d-flex items-center">
                        <i class="icon-document text-16 mr-8"></i>
                        <div class="text-14 lh-1">
                          {{ elm.lessonCount }} lesson
                        </div>
                      </div>
                      <div class="d-flex items-center">
                        <i class="icon-clock-2 text-16 mr-8"></i>
                        <div class="text-14 lh-1">
                          {{
                            `${Math.floor(elm.duration / 60)}h ${Math.floor(
                              elm.duration % 60,
                            )}m`
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6">
          <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
            <div
              class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
            >
              <h2 class="text-17 lh-1 fw-500">Notifications</h2>
            </div>
            <div class="py-30 px-30">
              <div class="y-gap-40">
                <div
                  v-for="(elm, i) in notifications"
                  :key="i"
                  class="d-flex items-center"
                  :class="{ 'border-top-light': i !== 0 }"
                >
                  <div class="shrink-0">
                    <nuxt-img
                      width="40"
                      height="40"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                  </div>
                  <div class="ml-12">
                    <h4 class="text-15 lh-1 fw-500">{{ elm.heading }}</h4>
                    <div class="text-13 lh-1 mt-10">
                      {{ elm.time }} Hours Ago
                    </div>
                  </div>
                </div>
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
import { resentCourses } from "@/data/courses";
import { states } from "@/data/dashboard";
import { teamMembers } from "@/data/instractors";
import { notifications } from "@/data/notifications";

import FooterNine from "../layout/footers/FooterNine";
import Charts from "./Charts";
import PieChartComponent from "./PieCharts";

const toggleDropdown = (btn, content) => {
  document.getElementById(btn).classList.toggle("-is-dd-active");
  document.getElementById(content).classList.toggle("-is-el-visible");
};
</script>

<style lang="scss" scoped></style>
