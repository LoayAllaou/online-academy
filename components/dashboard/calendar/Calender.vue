<template>
  <div class="dashboard__main">
    <div class="dashboard__content bg-light-4">
      <div class="row pb-50 mb-10">
        <div class="col-auto">
          <h1 class="text-30 lh-12 fw-700">Calendar</h1>
          <PageLinksTwo />
        </div>
      </div>

      <div class="row">
        <div class="col-xl-9 col-lg-9 md:mb-20">
          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Calendar</h2>
              </div>

              <div class="py-40 md:py-20 sm-py-10 px-30 md:px-20 sm:px-10">
                <div class="row y-gap-15 justify-between">
                  <div class="col-auto">
                    <div class="d-flex">
                      <div class="">
                        <div
                          id="dd23button"
                          @click="
                            () => toggleDropdown('dd23button', 'dd23content')
                          "
                          class="dropdown js-dropdown js-category-active"
                        >
                          <div
                            class="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10"
                          >
                            <span class="js-dropdown-title">Monthly</span>
                            <i class="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>

                          <div
                            id="dd23content"
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

                      <div class="ml-20">
                        <div
                          id="dd24button"
                          @click="
                            () => toggleDropdown('dd24button', 'dd24content')
                          "
                          class="dropdown js-dropdown js-category-active"
                        >
                          <div
                            class="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10"
                          >
                            <span class="js-dropdown-title"> All Courses </span>
                            <i class="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>

                          <div
                            id="dd24content"
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
                  </div>

                  <div class="col-auto">
                    <button class="button -md -narrow -purple-1 text-white">
                      <i class="icon-calendar-2 mr-10"></i>
                      New Event
                    </button>
                  </div>
                </div>

                <div class="overflow-scroll scroll-bar-1 mt-20">
                  <EventCalendar />
                </div>

                <div class="row x-gap-20 y-gap-10 justify-center pt-30">
                  <div class="col-auto">
                    <a href="#" class="button -icon -purple-3 text-light-1">
                      Export Calender
                      <i class="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                  <div class="col-auto">
                    <a href="#" class="button -icon -purple-3 text-light-1">
                      Manage Subscriptions
                      <i class="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3">
          <div class="row y-gap-30">
            <EventKeys />

            <div class="col-12">
              <div
                class="pt-20 pb-30 px-10 rounded-16 bg-white -dark-bg-dark-1 shadow-4"
              >
                <h5 class="text-17 fw-500 mb-30">Monthly view</h5>

                <MonthlyCalender />
                <br />
                <MonthlyCalender :style="{ marginTop: '20px' }" />
                <br />
                <MonthlyCalender :style="{ marginTop: '20px' }" />
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
import FooterNine from "@/components/layout/footers/FooterNine";
import EventKeys from "./EventKeys";
import MonthlyCalender from "./MonthlyViewCalender";
import PageLinksTwo from "@/components/common/PageLinksTwo";
import EventCalendar from "./EventCalendar";
</script>

<style lang="scss" scoped></style>
