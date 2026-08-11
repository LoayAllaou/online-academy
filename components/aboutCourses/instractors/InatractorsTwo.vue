<template>
  <section class="page-header -type-1">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <h1 class="page-header__title">Instructors</h1>
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
      <div class="row y-gap-50">
        <div class="col-lg-3 pr-50">
          <div class="sidebar -courses">
            <div class="sidebar__item">
              <div class="accordion js-accordion">
                <div
                  :class="`accordion__item js-accordion-item-active ${
                    categoryOpen ? 'is-active' : ''
                  } `"
                >
                  <div
                    class="accordion__button items-center"
                    @click="() => (categoryOpen = !categoryOpen)"
                  >
                    <h5 class="sidebar__title">Category</h5>

                    <div class="accordion__icon">
                      <div class="icon icon-chevron-down"></div>
                      <div class="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div
                    class="accordion__content"
                    :style="categoryOpen ? { maxHeight: '350px' } : {}"
                  >
                    <div class="accordion__content__inner">
                      <div class="sidebar-checkbox">
                        <div
                          v-for="(category, index) in categories"
                          :key="index"
                          class="sidebar-checkbox__item cursor"
                        >
                          <div class="form-checkbox">
                            <input type="checkbox" />
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div class="sidebar-checkbox__title">
                            {{ category.title }}
                          </div>
                          <div class="sidebar-checkbox__count">
                            23
                            <!-- Replace with your dynamic count if available -->
                          </div>
                        </div>
                      </div>

                      <div class="sidebar__more mt-15">
                        <a
                          href="#"
                          class="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar__item">
              <div class="accordion js-accordion">
                <div
                  :class="`accordion__item js-accordion-item-active ${
                    ratingOpen ? 'is-active' : ''
                  } `"
                >
                  <div
                    class="accordion__button items-center"
                    @click="() => (ratingOpen = !ratingOpen)"
                  >
                    <h5 class="sidebar__title">Ratings</h5>

                    <div class="accordion__icon">
                      <div class="icon icon-chevron-down"></div>
                      <div class="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div
                    class="accordion__content"
                    :style="ratingOpen ? { maxHeight: '350px' } : {}"
                  >
                    <div class="accordion__content__inner">
                      <div class="sidebar-checkbox">
                        <div
                          v-for="(ratingItem, index) in rating"
                          :key="index"
                          class="sidebar-checkbox__item cursor"
                        >
                          <div class="form-radio mr-10">
                            <div class="radio">
                              <input type="radio" name="rating" />
                              <div class="radio__mark">
                                <div class="radio__icon"></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="sidebar-checkbox__title d-flex items-center"
                          >
                            <div class="d-flex x-gap-5 pr-10">
                              <Star :star="5" textSize="text-11" />
                              <!-- Assuming `Star` is a component for rendering stars; replace it with the actual implementation -->
                            </div>
                            {{ ratingItem.text }}
                          </div>
                          <div class="sidebar-checkbox__count">
                            (32)
                            <!-- Replace with your dynamic count if available -->
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

        <div class="col-lg-9">
          <div class="row y-gap-20 items-center justify-between pb-30">
            <div class="col-auto">
              <div class="text-14 lh-12">
                Showing{{ " " }}
                <span class="text-dark-1 fw-500">
                  {{ teamMembers.length }} </span
                >{{ " " }}
                total results
              </div>
            </div>

            <div class="col-auto">
              <div class="row x-gap-20 y-gap-20">
                <div class="col-auto">
                  <div class="d-flex items-center">
                    <div class="text-14 lh-12 fw-500 text-dark-1 mr-20">
                      Sort by:
                    </div>

                    <div
                      ref="sortBtn"
                      class="dropdown js-dropdown js-category-active"
                    >
                      <div
                        @click="
                          () => {
                            sortBtn.classList.toggle('-is-dd-active');
                            sortContent.classList.toggle('-is-el-visible');
                          }
                        "
                        class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      >
                        <span class="js-dropdown-title">
                          {{ currentSorting }}
                        </span>
                        <i class="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div
                        ref="sortContent"
                        class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                      >
                        <div class="text-14 y-gap-15 js-dropdown-list">
                          <div
                            v-for="(elm, i) in sortingOptions"
                            :key="i"
                            @click="
                              () => {
                                currentSorting =
                                  currentSorting == elm ? 'Default' : elm;

                                sortBtn.classList.toggle('-is-dd-active');
                                sortContent.classList.toggle('-is-el-visible');
                              }
                            "
                          >
                            <span
                              :class="`d-block js-dropdown-link cursor ${
                                currentSorting == elm ? 'activeMenu' : ''
                              } `"
                            >
                              {{ elm }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-30">
            <div
              v-for="(teamMember, index) in teamMembers.slice(0, 9)"
              :key="index"
              class="col-lg-4 col-md-6"
            >
              <div class="teamCard -type-1 px-10 py-10 rounded-8 border-light">
                <div class="teamCard__image">
                  <nuxt-img
                    :src="teamMember.image"
                    width="488"
                    height="537"
                    alt="image"
                  />
                </div>
                <div class="teamCard__content mt-10 px-10 pb-5">
                  <h4 class="teamCard__title">
                    <nuxt-link
                      :to="'/instructors/' + teamMember.id"
                      class="linkCustom"
                    >
                      {{ teamMember.name }}
                    </nuxt-link>
                  </h4>
                  <p class="teamCard__text">{{ teamMember.role }}</p>
                  <div class="d-flex x-gap-10 pt-10">
                    <div class="d-flex items-center">
                      <div class="icon-star text-yellow-1 text-14"></div>
                      <div class="text-13 lh-1 ml-8">
                        {{ teamMember.rating }}
                      </div>
                    </div>

                    <div class="d-flex items-center">
                      <div class="icon-person-3 text-14"></div>
                      <div class="text-13 lh-1 ml-8">
                        {{ teamMember.students }} Students
                      </div>
                    </div>

                    <div class="d-flex items-center">
                      <div class="icon-play text-14"></div>
                      <div class="text-13 lh-1 ml-8">
                        {{ teamMember.courses }} Course
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-center pt-60 lg:pt-40">
            <div class="col-auto">
              <PaginationTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  categories,
  rating,
  sortingOptions,
  teamMembers,
} from "@/data/instractors";
import PaginationTwo from '@/components/common/PaginationTwo';
import Star from "@/components/common/Star";
const sortBtn = ref();
const sortContent = ref();
const categoryOpen = ref(true);
const ratingOpen = ref(true);
const currentSorting = ref("Default");
</script>

<style lang="scss" scoped></style>
