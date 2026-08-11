<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Dashboard</h1>

          <PageLinksTwo />
        </div>
      </div>

      <div class="row y-gap-50">
        <div class="col-xl-9 col-lg-12">
          <div class="row y-gap-30">
            <div
              v-for="(elm, i) in states.slice(0, 3)"
              :key="i"
              class="col-xl-4 col-md-6"
            >
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
            <div class="col-md-6">
              <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div
                  class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
                >
                  <h2 class="text-17 lh-1 fw-500">Your Profile Views</h2>
                  <div class="">
                    <div class="text-14">This Week</div>
                  </div>
                </div>
                <div class="py-40 px-30">
                  <Charts />
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div
                  class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
                >
                  <h2 class="text-17 lh-1 fw-500">Traffic</h2>
                  <div class="">
                    <div class="">This Week</div>
                  </div>
                </div>
                <div class="py-40 px-30 h-200" style="height: 250px;">
                  <PieChartComponent />
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-30 pt-30">
            <div class="col-12">
              <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div
                  class="d-flex items-center py-20 px-30 border-bottom-light"
                >
                  <h2 class="text-17 lh-1 fw-500">Course overview</h2>
                </div>

                <div class="py-30 px-30">
                  <div class="row y-gap-20 justify-between mb-20">
                    <div class="col-auto">
                      <div
                        id="dd5button"
                        @click="() => toggleDropdown('dd5button', 'dd5content')"
                        class="dropdown js-dropdown js-past-active"
                      >
                        <div
                          class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                          data-el-toggle=".js-past-toggle"
                          data-el-toggle-active=".js-past-active"
                        >
                          <span class="js-dropdown-title">Past</span>
                          <i class="icon text-9 ml-40 icon-chevron-down"></i>
                        </div>

                        <div
                          id="dd5content"
                          class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-past-toggle"
                        >
                          <div class="text-14 y-gap-15 js-dropdown-list">
                            <div>
                              <a href="#" class="d-block js-dropdown-link">
                                Past
                              </a>
                            </div>

                            <div>
                              <a href="#" class="d-block js-dropdown-link">
                                Past
                              </a>
                            </div>

                            <div>
                              <a href="#" class="d-block js-dropdown-link">
                                Past
                              </a>
                            </div>

                            <div>
                              <a href="#" class="d-block js-dropdown-link">
                                Past
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <div class="row x-gap-20 y-gap-20">
                        <div class="col-auto">
                          <div
                            id="dd6button"
                            @click="
                              () => toggleDropdown('dd6button', 'dd6content')
                            "
                            class="dropdown js-dropdown js-course-name-active"
                          >
                            <div
                              class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-course-name-toggle"
                              data-el-toggle-active=".js-course-name-active"
                            >
                              <span class="js-dropdown-title">
                                Course Name
                              </span>
                              <i
                                class="icon text-9 ml-40 icon-chevron-down"
                              ></i>
                            </div>

                            <div
                              id="dd6content"
                              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-course-name-toggle"
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
                        <div class="col-auto">
                          <div
                            id="dd7button"
                            @click="
                              () => toggleDropdown('dd7button', 'dd7content')
                            "
                            class="dropdown js-dropdown js-show-2-active"
                          >
                            <div
                              class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-show-2-toggle"
                              data-el-toggle-active=".js-show-2-active"
                            >
                              <span class="js-dropdown-title"> Show 8 </span>
                              <i
                                class="icon text-9 ml-40 icon-chevron-down"
                              ></i>
                            </div>

                            <div
                              id="dd7content"
                              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-show-2-toggle"
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
                        <div class="col-auto">
                          <div
                            id="dd8button"
                            @click="
                              () => toggleDropdown('dd8button', 'dd8content')
                            "
                            class="dropdown js-dropdown js-cart-2-active"
                          >
                            <div
                              class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-cart-2-toggle"
                              data-el-toggle-active=".js-cart-2-active"
                            >
                              <span class="js-dropdown-title">Cart</span>
                              <i
                                class="icon text-9 ml-40 icon-chevron-down"
                              ></i>
                            </div>

                            <div
                              id="dd8content"
                              class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-cart-2-toggle"
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
                    </div>
                  </div>

                  <div class="row y-gap-30">
                    <CourseCardTwo
                      v-for="(elm, i) in coursesData"
                      :data="elm"
                      :key="i"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-30 pt-30">
            <div class="col-md-6">
              <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div
                  class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
                >
                  <h2 class="text-17 lh-1 fw-500">Recent Courses</h2>
                  <a href="#" class="text-14 text-purple-1 underline">
                    View All
                  </a>
                </div>
                <div class="py-30 px-30">
                  <div class="y-gap-40">
                    <div
                      v-for="(elm, i) in resentCourses.slice(0, 4)"
                      :key="i"
                      class="d-flex border-top-light"
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
                            <i class="icon-online-learning-1 text-15 mr-10"></i>
                            <div class="text-13 lh-1">{{ elm.authorName }}</div>
                          </div>
                          <div class="d-flex items-center">
                            <i class="icon-online-learning-1 text-15 mr-10"></i>
                            <div class="text-13 lh-1">
                              {{ elm.lessonCount }} lesson
                            </div>
                          </div>
                          <div class="d-flex items-center">
                            <i class="icon-online-learning-1 text-15 mr-10"></i>
                            <div class="text-13 lh-1">
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

            <div class="col-md-6">
              <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div
                  class="d-flex justify-between items-center py-20 px-30 border-bottom-light"
                >
                  <h2 class="text-17 lh-1 fw-500">Timeline</h2>
                </div>
                <div class="py-30 px-30">
                  <div class="d-flex justify-between flex-wrap y-gap-15 pb-30">
                    <div>
                      <div class="dropdown" data-el-toggle=".js-clock-toggle">
                        <div class="d-flex items-center text-14">
                          <span
                            class="icon-clock-2 text-16 js-dropdown-title"
                          ></span>
                          <i class="icon text-9 ml-15 icon-chevron-down"></i>
                        </div>

                        <div class="toggle-element -dropdown js-clock-toggle">
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
                                Lifestyle
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

                    <div>
                      <div class="dropdown" data-el-toggle=".js-filter-toggle">
                        <div class="d-flex items-center text-14">
                          <span
                            class="icon-list-sort text-16 js-dropdown-title"
                          ></span>
                          <i class="icon text-9 ml-15 icon-chevron-down"></i>
                        </div>

                        <div class="toggle-element -dropdown js-filter-toggle">
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
                                Lifestyle
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

                  <div class="y-gap-40 pb-20">
                    <div
                      v-for="(elm, i) in timeline"
                      :key="i"
                      class="border-bottom-light"
                    >
                      <div class="d-flex items-center">
                        <nuxt-img
                          width="40"
                          height="40"
                          :src="elm.image"
                          alt="image"
                        />
                        <h5 class="text-15 lh-11 fw-500 ml-10">
                          {{ elm.date }}
                        </h5>
                      </div>

                      <div class="d-flex justify-between w-1/1 mt-20">
                        <div class="w-1/1">
                          <div class="text-14 lh-11 text-dark-1 fw-500">
                            {{ elm.title }}
                          </div>
                          <a
                            href="#"
                            class="d-block text-14 lh-11 text-orange-1 underline mt-10"
                          >
                            Your Road to Better Photography
                          </a>
                          <a
                            href="#"
                            class="d-block text-14 lh-11 text-purple-1 underline fw-500 mt-10"
                          >
                            Add submission
                          </a>
                        </div>

                        <div class="text-14 lh-11">{{ elm.time }}</div>
                      </div>
                    </div>
                  </div>

                  <div class="d-inline-block mt-20">
                    <div
                      id="dd9button"
                      @click="() => toggleDropdown('dd9button', 'dd9content')"
                      class="dropdown js-dropdown js-show-active"
                    >
                      <div
                        class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                        data-el-toggle=".js-show-toggle"
                        data-el-toggle-active=".js-show-active"
                      >
                        <span class="js-dropdown-title">Show 12</span>
                        <i class="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div
                        id="dd9content"
                        class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-show-toggle"
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
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-12">
          <div class="row y-gap-30">
            <div class="col-12">
              <div
                class="d-flex items-center flex-column text-center py-40 px-40 rounded-16 bg-white -dark-bg-dark-1 shadow-4"
              >
                <nuxt-img
                  :width="60"
                  :height="60"
                  src="/assets/img/dashboard/demo/1.png"
                  alt="image"
                />
                <div class="text-17 fw-500 text-dark-1 mt-20">Student Demo</div>
                <div class="text-14 lh-1 mt-5">studentdemo1@example.com</div>
              </div>
            </div>

            <div class="col-12">
              <div
                class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4"
              >
                <h5 class="text-17 fw-500 mb-20">Latest Badges</h5>

                <div class="">
                  <div class="d-flex">
                    <div class="shrink-0">
                      <nuxt-img
                        :width="50"
                        :height="50"
                        src="/assets/img/dashboard/badges/1.png"
                        alt="badge"
                      />
                    </div>

                    <div class="ml-20">
                      <h6 class="text-17 fw-500">Level 5</h6>
                      <div class="text-14 mt-5">
                        Cum sociis natoque penatibus et magnis.
                      </div>
                    </div>
                  </div>

                  <div class="d-flex x-gap-30 item-center pt-20">
                    <nuxt-img
                      :width="30"
                      :height="30"
                      src="/assets/img/dashboard/badges/2.png"
                      alt="badge"
                    />
                    <nuxt-img
                      :width="30"
                      :height="30"
                      src="/assets/img/dashboard/badges/3.png"
                      alt="badge"
                    />
                    <nuxt-img
                      :width="30"
                      :height="30"
                      src="/assets/img/dashboard/badges/4.png"
                      alt="badge"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div
                class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4"
              >
                <h5 class="text-17 fw-500">Online Users</h5>
                <div class="text-14 mt-8">2 online user (last 12 minutes)</div>

                <div class="mt-30">
                  <div class="row y-gap-10">
                    <div
                      v-for="(elm, i) in activeUsers"
                      :key="i"
                      class="col-12"
                    >
                      <div class="d-flex items-center">
                        <div class="shrink-0">
                          <nuxt-img
                            width="30"
                            height="30"
                            :src="elm.image"
                            alt="badge"
                          />
                        </div>
                        <div class="ml-10">
                          <h6 class="text-14 lh-11 fw-500">{{ elm.name }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div
                class="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4"
              >
                <h5 class="text-17 fw-500 mb-30">Tags</h5>
                <div class="d-flex flex-wrap x-gap-10 y-gap-10">
                  <div v-for="(elm, i) in tags" :key="i">
                    <div
                      class="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3"
                    >
                      <a
                        :href="elm.href"
                        class="text-11 lh-10 fw-500 text-dark-1"
                      >
                        {{ elm.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <CalendarTwo />
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

import PieChartComponent from "./PieCharts";
import { activeUsers, coursesData, states, timeline } from "@/data/dashboard";

import { resentCourses, tags } from "@/data/courses";
import CourseCardTwo from "./DashBoardCards/CourseCardTwo";

import PageLinksTwo from "../common/PageLinksTwo";
import Charts from "./ChartsTwo";
import CalendarTwo from "./calendar/CalenderTwo";

const toggleDropdown = (btn, content) => {
  document.getElementById(btn).classList.toggle("-is-dd-active");
  document.getElementById(content).classList.toggle("-is-el-visible");
};
</script>

<style lang="scss" scoped></style>
