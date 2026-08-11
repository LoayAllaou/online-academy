<template>
  <section class="page-header -type-1">
    <div class="container">
      <div class="page-header__content">
        <div class="row">
          <div class="col-auto">
            <div>
              <h1 class="page-header__title">User Interface Courses</h1>
            </div>

            <div>
              <p class="page-header__text">
                Write an introductory description of the category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 items-center justify-between pb-30">
        <div class="col-12">
          <div class="text-14 lh-12">
            Showing{{ " " }} <span class="text-dark-1 fw-500"> 54 </span
            >{{ " " }}
            total results
          </div>
        </div>

        <div class="col-12">
          <div class="row x-gap-20 y-gap-20">
            <div class="col-auto">
              <div
                ref="dd52button"
                class="dropdown js-dropdown js-category-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd52button.classList.toggle('-is-dd-active');
                      dd52content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{
                      filterCategories.length ? filterCategories[0] : "Category"
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd52content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in categories"
                      :key="i"
                      @click="() => handleFilterCategories(elm.title)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          { activeMenu: filterCategories[0] === elm.title },
                        ]"
                      >
                        {{ elm.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                ref="dd53button"
                class="dropdown js-dropdown js-ratings-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd53button.classList.toggle('-is-dd-active');
                      dd53content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{
                      filterRatingRange.length
                        ? `${filterRatingRange[0]} to ${filterRatingRange[1]}`
                        : "Ratings"
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd53content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-ratings-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in rating"
                      :key="i"
                      @click="() => handleFilterRatingRange(elm.range)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          {
                            activeMenu:
                              filterRatingRange.toString() ===
                              elm.range.toString(),
                          },
                        ]"
                      >
                        {{ elm.text }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                ref="dd54button"
                class="dropdown js-dropdown js-instructors-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd54button.classList.toggle('-is-dd-active');
                      dd54content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{
                      filterInstractors.length
                        ? filterInstractors[0]
                        : "Instructors"
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd54content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-instructors-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in instractorNames"
                      :key="i"
                      @click="() => handleFilterInstractors(elm.title)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          { activeMenu: filterInstractors[0] === elm.title },
                        ]"
                      >
                        {{ elm.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                ref="dd55button"
                class="dropdown js-dropdown js-price-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd55button.classList.toggle('-is-dd-active');
                      dd55content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{ filterPrice != "All" ? filterPrice : "Price" }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd55content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-price-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in prices"
                      :key="i"
                      @click="() => handleFilterPrice(elm.title)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          { activeMenu: filterPrice === elm.title },
                        ]"
                      >
                        {{ elm.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                ref="dd56button"
                class="dropdown js-dropdown js-level-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd56button.classList.toggle('-is-dd-active');
                      dd56content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{ filterLevels.length ? filterLevels[0] : "Level" }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd56content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-level-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in levels"
                      :key="i"
                      @click="() => handleFilterLevels(elm.title)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          { activeMenu: filterLevels[0] === elm.title },
                        ]"
                      >
                        {{ elm.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                ref="dd57button"
                class="dropdown js-dropdown js-langunage-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd57button.classList.toggle('-is-dd-active');
                      dd57content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{
                      filterLanguage.length ? filterLanguage[0] : "Langunage"
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd57content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-langunage-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in languages"
                      :key="i"
                      @click="() => handleFilterlanguange(elm.title)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          { activeMenu: filterLanguage[0] === elm.title },
                        ]"
                      >
                        {{ elm.title }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                ref="dd58button"
                class="dropdown js-dropdown js-duration-active"
              >
                <div
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                  @click="
                    () => {
                      dd58button.classList.toggle('-is-dd-active');
                      dd58content.classList.toggle('-is-el-visible');
                    }
                  "
                >
                  <span class="js-dropdown-title">
                    {{
                      filterDuration.length
                        ? `${Math.round(
                            filterDuration[0] / 60,
                          )}h to ${Math.round(filterDuration[1] / 60)}h`
                        : "Duration"
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  ref="dd58content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-duration-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in duration"
                      :key="i"
                      @click="() => handleFilterDuration(elm.range)"
                    >
                      <span
                        :class="[
                          'd-block',
                          'js-dropdown-link',
                          'cursor',
                          {
                            activeMenu:
                              filterDuration.toString() ===
                              elm.range.toString(),
                          },
                        ]"
                      >
                        {{ elm.title }}
                      </span>
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
          v-for="(elm, i) in coursesData.slice(0, 12)"
          :key="i"
          class="col-xl-3 col-lg-4 col-md-6"
        >
          <div class="coursesCard -type-1">
            <div class="relative">
              <div class="coursesCard__image overflow-hidden rounded-8">
                <nuxt-img
                  :width="530"
                  :height="370"
                  class="w-1/1"
                  :src="elm.imageSrc"
                  alt="image"
                />
                <div class="coursesCard__image_overlay rounded-8"></div>
              </div>
              <div
                class="d-flex justify-between py-10 px-10 absolute-full-center z-3"
              >
                <div v-if="elm.popular">
                  <div class="px-15 rounded-200 bg-purple-1">
                    <span class="text-11 lh-1 uppercase fw-500 text-white">
                      Popular
                    </span>
                  </div>
                </div>

                <div v-if="elm.popular">
                  <div class="px-15 rounded-200 bg-green-1">
                    <span class="text-11 lh-1 uppercase fw-500 text-dark-1">
                      Best sellers
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-100 pt-15">
              <div class="d-flex items-center">
                <div class="text-14 lh-1 text-yellow-1 mr-10">
                  {{ elm.rating }}
                </div>
                <div class="d-flex x-gap-5 items-center">
                  <Star :star="elm.rating" />
                </div>
                <div class="text-13 lh-1 ml-10">({{ elm.ratingCount }})</div>
              </div>

              <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                <nuxt-link class="linkCustom" :to="`/courses/${elm.id}`">
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
                    <div class="text-14 lh-1">{{ elm.lessonCount }} lesson</div>
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
                    <div class="text-14 lh-1">{{ elm.level }}</div>
                  </div>
                </div>
              </div>
              <div class="coursesCard-footer">
                <div class="coursesCard-footer__author">
                  <nuxt-img
                    :width="30"
                    :height="30"
                    :src="elm.authorImageSrc"
                    alt="image"
                  />
                  <div>{{ elm.authorName }}</div>
                </div>

                <div class="coursesCard-footer__price">
                  <div v-if="elm.paid">${{ elm.originalPrice }}</div>
                  <div v-if="elm.paid">${{ elm.discountedPrice }}</div>

                  <div v-if="!elm.paid"></div>
                  <div v-if="!elm.paid">Free</div>
                </div>
              </div>
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
} from "@/data/courses";
import Star from "../common/Star";
import PaginationTwo from '@/components/common/PaginationTwo';
const filterCategories = ref([]);
const filterRatingRange = ref([]);
const filterInstractors = ref([]);
const filterPrice = ref("All");
const filterLevels = ref([]);
const filterLanguage = ref([]);
const filterDuration = ref([]);

const setFilterCategories = (value) => {
  filterCategories.value = value;
};

const setFilterRatingRange = (value) => {
  filterRatingRange.value = value;
};

const setFilterInstractors = (value) => {
  filterInstractors.value = value;
};

const setFilterPrice = (value) => {
  filterPrice.value = value;
};

const setFilterLevels = (value) => {
  filterLevels.value = value;
};

const setFilterLanguage = (value) => {
  filterLanguage.value = value;
};

const setFilterDuration = (value) => {
  filterDuration.value = value;
};

const dd52button = ref(null);
const dd53button = ref(null);
const dd54button = ref(null);
const dd55button = ref(null);
const dd56button = ref(null);
const dd57button = ref(null);
const dd58button = ref(null);

const dd52content = ref(null);
const dd53content = ref(null);
const dd54content = ref(null);
const dd55content = ref(null);
const dd56content = ref(null);
const dd57content = ref(null);
const dd58content = ref(null);

const handleFilterCategories = (item) => {
  if (filterCategories.value.includes(item)) {
    setFilterCategories([]);
  } else {
    setFilterCategories([item]);
  }
  dd52button.value.classList.toggle("-is-dd-active");
  dd52content.value.classList.toggle("-is-el-visible");
};
const handleFilterRatingRange = (item) => {
  setFilterRatingRange(item);
  dd53button.value.classList.toggle("-is-dd-active");
  dd53content.value.classList.toggle("-is-el-visible");
};
const handleFilterInstractors = (item) => {
  if (filterInstractors.value.includes(item)) {
    setFilterInstractors([]);
  } else {
    setFilterInstractors([item]);
  }
  dd54button.value.classList.toggle("-is-dd-active");
  dd54content.value.classList.toggle("-is-el-visible");
};
const handleFilterPrice = (item) => {
  setFilterPrice(item);
  dd55button.value.classList.toggle("-is-dd-active");
  dd55content.value.classList.toggle("-is-el-visible");
};
const handleFilterLevels = (item) => {
  if (filterLevels.value.includes(item)) {
    setFilterLevels([]);
  } else {
    setFilterLevels([item]);
  }
  dd56button.value.classList.toggle("-is-dd-active");
  dd56content.value.classList.toggle("-is-el-visible");
};
const handleFilterlanguange = (item) => {
  if (filterLanguage.value.includes(item)) {
    setFilterLanguage([]);
  } else {
    setFilterLanguage([item]);
  }
  dd57button.value.classList.toggle("-is-dd-active");
  dd57content.value.classList.toggle("-is-el-visible");
};
const handleFilterDuration = (item) => {
  setFilterDuration(item);
  dd58button.value.classList.toggle("-is-dd-active");
  dd58content.value.classList.toggle("-is-el-visible");
};
</script>

<style lang="scss" scoped></style>
