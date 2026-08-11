<template>
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-24 lh-12">All User Interface courses</h2>
        </div>
      </div>

      <div class="row y-gap-50 pt-60">
        <div class="col-xl-3 col-lg-4 lg:d-none">
          <div class="pr-30 lg:pr-0">
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
                            v-for="(elm, i) in categories"
                            :key="i"
                            class="sidebar-checkbox__item cursor"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ elm.title }}
                            </div>
                            <div class="sidebar-checkbox__count">12</div>
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
                            v-for="(elm, i) in rating"
                            :key="i"
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
                              </div>
                              {{ elm.text }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
                          </div>
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
                      instractorOpen ? 'is-active' : ''
                    } `"
                  >
                    <div
                      class="accordion__button items-center"
                      @click="() => (instractorOpen = !instractorOpen)"
                    >
                      <h5 class="sidebar__title">Instructors</h5>

                      <div class="accordion__icon">
                        <div class="icon icon-chevron-down"></div>
                        <div class="icon icon-chevron-up"></div>
                      </div>
                    </div>

                    <div
                      class="accordion__content"
                      :style="instractorOpen ? { maxHeight: '350px' } : {}"
                    >
                      <div class="accordion__content__inner">
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(elm, i) in instractorNames"
                            :key="i"
                            class="sidebar-checkbox__item cursor"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ elm.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
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
                      priceOpen ? 'is-active' : ''
                    } `"
                  >
                    <div
                      class="accordion__button items-center"
                      @click="() => (priceOpen = !priceOpen)"
                    >
                      <h5 class="sidebar__title">Price</h5>

                      <div class="accordion__icon">
                        <div class="icon icon-chevron-down"></div>
                        <div class="icon icon-chevron-up"></div>
                      </div>
                    </div>

                    <div
                      class="accordion__content"
                      :style="priceOpen ? { maxHeight: '350px' } : {}"
                    >
                      <div class="accordion__content__inner">
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(elm, i) in prices"
                            :key="i"
                            class="sidebar-checkbox__item cursor"
                          >
                            <div class="form-radio mr-10">
                              <div class="radio">
                                <input type="radio" name="price" />
                                <div class="radio__mark">
                                  <div class="radio__icon"></div>
                                </div>
                              </div>
                            </div>
                            <div class="sidebar-checkbox__title">
                              {{ elm.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12)</div>
                          </div>
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
                      levelOpen ? 'is-active' : ''
                    }  `"
                  >
                    <div
                      class="accordion__button items-center"
                      @click="() => (levelOpen = !levelOpen)"
                    >
                      <h5 class="sidebar__title">Level</h5>

                      <div class="accordion__icon">
                        <div class="icon icon-chevron-down"></div>
                        <div class="icon icon-chevron-up"></div>
                      </div>
                    </div>

                    <div
                      class="accordion__content"
                      :style="levelOpen ? { maxHeight: '350px' } : {}"
                    >
                      <div class="accordion__content__inner">
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(elm, i) in levels"
                            :key="i"
                            class="sidebar-checkbox__item cursor"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ elm.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
                          </div>
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
                      openLanguage ? 'is-active' : ''
                    } `"
                  >
                    <div
                      class="accordion__button items-center"
                      @click="() => (openLanguage = !openLanguage)"
                    >
                      <h5 class="sidebar__title">Languange</h5>

                      <div class="accordion__icon">
                        <div class="icon icon-chevron-down"></div>
                        <div class="icon icon-chevron-up"></div>
                      </div>
                    </div>

                    <div
                      class="accordion__content"
                      :style="openLanguage ? { maxHeight: '350px' } : {}"
                    >
                      <div class="accordion__content__inner">
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(elm, i) in languages"
                            :key="i"
                            class="sidebar-checkbox__item cursor"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>
                            <div class="sidebar-checkbox__title">
                              {{ elm.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
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
                      durationOpen ? 'is-active' : ''
                    } `"
                  >
                    <div
                      class="accordion__button items-center"
                      @click="() => (durationOpen = !durationOpen)"
                    >
                      <h5 class="sidebar__title">Duration</h5>

                      <div class="accordion__icon">
                        <div class="icon icon-chevron-down"></div>
                        <div class="icon icon-chevron-up"></div>
                      </div>
                    </div>

                    <div
                      class="accordion__content"
                      :style="durationOpen ? { maxHeight: '350px' } : {}"
                    >
                      <div class="accordion__content__inner">
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(elm, i) in duration"
                            :key="i"
                            class="sidebar-checkbox__item cursor"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>
                            <div class="sidebar-checkbox__title">
                              {{ elm.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
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

        <div class="col-xl-9 col-lg-8">
          <div class="accordion js-accordion">
            <div :class="`accordion__item ${filterOpen ? 'is-active' : ''} `">
              <div class="row y-gap-20 items-center justify-between pb-30">
                <div class="col-auto">
                  <div class="text-14 lh-12">
                    Showing{{ " " }}
                    <span class="text-dark-1 fw-500">
                      {{ " " }}
                      44 </span
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
                            data-el-toggle=".js-category-toggle"
                            data-el-toggle-active=".js-category-active"
                          >
                            <span class="js-dropdown-title">
                              {{ currentSortingOption }}
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
                                    setCurrentSortingOption(
                                      currentSortingOption == elm
                                        ? 'Default'
                                        : elm,
                                    );
                                    sortBtn.classList.toggle('-is-dd-active');
                                    sortContent.classList.toggle(
                                      '-is-el-visible',
                                    );
                                  }
                                "
                              >
                                <span
                                  :class="`d-block js-dropdown-link cursor ${
                                    currentSortingOption == elm
                                      ? 'activeMenu'
                                      : ''
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

                    <div class="col-auto d-none lg:d-block">
                      <div class="accordion__button w-unset">
                        <button
                          class="button h-50 px-30 -light-7 text-purple-1"
                          @click="() => (filterOpen = !filterOpen)"
                        >
                          <i class="icon-filter mr-10"></i>
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="accordion__content d-none lg:d-block"
                :style="filterOpen ? { maxHeight: '1800px' } : {}"
              >
                <div
                  class="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50"
                >
                  <div class="row x-gap-60 y-gap-40">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Category</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in categories"
                            class="sidebar-checkbox__item cursor"
                            :key="index"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ item.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
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

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Ratings</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in rating"
                            class="sidebar-checkbox__item cursor"
                            :key="index"
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
                                <Star :star="item.star" textSize="text-11" />
                              </div>
                              {{ item.text }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Instructors</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in instractorNames"
                            class="sidebar-checkbox__item cursor"
                            :key="index"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ item.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
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

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Price</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in prices"
                            class="sidebar-checkbox__item cursor"
                            :key="index"
                          >
                            <div class="form-radio mr-10">
                              <div class="radio">
                                <input type="radio" />
                                <div class="radio__mark">
                                  <div class="radio__icon"></div>
                                </div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ item.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12)</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Level</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in levels"
                            class="sidebar-checkbox__item cursor"
                            key="index"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ item.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Languange</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in languages"
                            class="sidebar-checkbox__item cursor"
                            key="index"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>

                            <div class="sidebar-checkbox__title">
                              {{ item.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
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

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="sidebar__item">
                        <h5 class="sidebar__title">Duration</h5>
                        <div class="sidebar-checkbox">
                          <div
                            v-for="(item, index) in duration"
                            class="sidebar-checkbox__item cursor"
                            :key="index"
                          >
                            <div class="form-checkbox">
                              <input type="checkbox" />
                              <div class="form-checkbox__mark">
                                <div
                                  class="form-checkbox__icon icon-check"
                                ></div>
                              </div>
                            </div>
                            <div class="sidebar-checkbox__title">
                              {{ item.title }}
                            </div>
                            <div class="sidebar-checkbox__count">( 12 )</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-60">
            <div
              v-for="(elm, i) in coursesData.slice(0, 12)"
              :key="i"
              class="col-12 border-bottom-light"
            >
              <div
                class="coursesCard -type-1 row y-gap-20 flex-row items-center"
              >
                <div class="col-xl-4">
                  <div class="coursesCard__image rounded-8 relative">
                    <nuxt-img
                      :width="530"
                      :height="370"
                      class="w-1/1"
                      :src="elm.imageSrc"
                      alt="image"
                    />
                    <div class="coursesCard__image_overlay rounded-8"></div>
                  </div>
                </div>

                <div class="col">
                  <div class="d-flex items-center">
                    <div class="text-14 lh-1 text-yellow-1 mr-10">
                      {{ elm.rating }}
                    </div>
                    <div class="d-flex x-gap-5 items-center">
                      <Star :star="elm.rating" />
                    </div>
                    <div class="text-13 lh-1 ml-10">({{ elm.rating }})</div>
                  </div>

                  <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    <nuxt-link class="linkCustom" :to="`/courses/${elm.id}`">
                      {{ elm.title }}
                    </nuxt-link>
                  </div>
                  <div class="mt-8">{{ elm.desc }}</div>

                  <div class="row x-gap-10 y-gap-10 items-center pt-10">
                    <div class="col-auto">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="30"
                          :height="30"
                          :src="elm.authorImageSrc"
                          alt="image"
                        />
                        <div class="ml-10">{{ elm.authorName }}</div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="16"
                          :height="17"
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-14 lh-1">
                          {{ elm.lessonCount }} lesson
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="16"
                          :height="17"
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-14 lh-1">
                          {{
                            `${Math.floor(elm.duration / 60)}h ${Math.floor(
                              elm.duration % 60,
                            )}m`
                          }}
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="16"
                          :height="17"
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                        <div class="text-14 lh-1">{{ elm.level }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="line -vertical -h-120 bg-light-5"></div>
                </div>

                <div class="col-auto text-right">
                  <div v-if="elm.paid" class="text-15 lh-1 fw-500 line-through">
                    ${{ elm.originalPrice }}
                  </div>
                  <div
                    v-if="elm.paid"
                    class="text-24 lh-1 fw-500 text-dark-1 mt-10"
                  >
                    ${{ elm.discountedPrice }}
                  </div>

                  <div v-if="!elm.paid"></div>
                  <div
                    v-if="!elm.paid"
                    class="text-24 lh-1 fw-500 text-dark-1 mt-10"
                  >
                    Free
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-center pt-90 lg:pt-50">
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
  coursesData,
  duration,
  instractorNames,
  languages,
  levels,
  prices,
  rating,
  sortingOptions,
} from "@/data/courses";
import Star from "../common/Star";
import PaginationTwo from '@/components/common/PaginationTwo';

const categoryOpen = ref(true);
const sortBtn = ref();
const sortContent = ref();
const ratingOpen = ref(true);
const instractorOpen = ref(true);
const priceOpen = ref(true);
const levelOpen = ref(true);
const openLanguage = ref(true);
const durationOpen = ref(true);
const filterOpen = ref(false);

const currentSortingOption = ref("Default");

const setCurrentSortingOption = (option) => {
  currentSortingOption.value = option;
};
</script>

<style lang="scss" scoped></style>
