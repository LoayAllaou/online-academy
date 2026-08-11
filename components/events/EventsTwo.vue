<template>
  <div>
    <section class="page-header -type-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Event</h1>
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
        <div class="row y-gap-30">
          <div class="col-lg-3 lg:order-2">
            <div class="pr-30 lg:pr-0">
              <div class="sidebar -blog -no-border">
                <div class="sidebar__item">
                  <h5 class="sidebar__title">Find Event</h5>

                  <div class="sidebar-content -event">
                    <div class="sidebar-event">
                      <input
                        placeholder="Event From"
                        style="
                          border: none;
                          outline: none;
                          background-color: #fff;
                          max-width: 80%;
                        "
                        class="sidebar-event__title text-14 lh-1"
                      />
                      <div class="sidebar-event__icon">
                        <div class="icon icon-search"></div>
                      </div>
                    </div>
                    <!-- Add other input fields here -->
                  </div>
                </div>

                <div class="sidebar__item">
                  <h5 class="sidebar__title">Recent Posts</h5>

                  <div class="sidebar-content -recent y-gap-20">
                    <div
                      v-for="(elm, i) in events.slice(0, 3)"
                      :key="i"
                      style="text-decoration: none"
                      class="sidebar-recent d-flex items-center"
                    >
                      <div class="sidebar-recent__image mr-15">
                        <nuxt-img
                          width="65"
                          height="65"
                          :src="elm.imgSrc"
                          alt="image"
                        />
                      </div>

                      <div class="sidebar-recent__content">
                        <h5 class="text-15 lh-15 fw-500">
                          <nuxt-link
                            :to="`/events/${elm.id}`"
                            class="linkCustom"
                          >
                            {{ elm.desc }}
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
                      <nuxt-link
                        class="text-11 fw-500 text-dark-1"
                        :to="elm.href"
                      >
                        {{ elm.name }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-9 lg:order-1">
            <div class="row y-gap-20 items-center justify-between pb-30">
              <div class="col-auto">
                <div class="text-14 lh-12">
                  Showing <span class="text-dark-1 fw-500">250</span> total
                  results
                </div>
              </div>

              <div class="col-auto">
                <div class="d-flex items-center">
                  <div class="text-14 lh-12 fw-500 text-dark-1 mr-20">
                    Sort by:
                  </div>

                  <div
                    @click="() => setDdActive(!ddActive)"
                    :class="{
                      '-is-dd-active': ddActive,
                      'dropdown js-dropdown js-category-active': true,
                    }"
                  >
                    <div
                      class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span class="js-dropdown-title">
                        {{
                          currentCategory === "All Categories"
                            ? "Most Popular"
                            : currentCategory
                        }}
                      </span>
                      <i class="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      :class="{
                        '-is-el-visible': ddActive,
                        'toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle': true,
                      }"
                    >
                      <div class="text-14 y-gap-15 js-dropdown-list">
                        <div
                          v-for="(elm, i) in categories"
                          :key="i"
                          @click="() => setCurrentCategory(elm)"
                          style="cursor: pointer"
                          :class="{
                            activeMenu: currentCategory === elm,
                            'd-block js-dropdown-link cursor': true,
                          }"
                        >
                          {{ elm }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row y-gap-30">
              <div
                v-for="(elm, i) in pageItems"
                :key="i"
                class="col-lg-4 col-md-6"
              >
                <div class="eventCard -type-2 bg-white">
                  <div class="eventCard__img">
                    <nuxt-img
                      width="510"
                      height="340"
                      class="w-1/1 rounded-top-8"
                      :src="elm.imgSrc"
                      alt="image"
                    />
                  </div>

                  <div class="eventCard__content pt-25 pb-30 px-30">
                    <div class="d-flex items-center">
                      <div class="icon-calendar-2 text-16 mr-8"></div>
                      <div class="text-14">{{ elm.date }}</div>
                    </div>

                    <h4
                      class="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15"
                    >
                      <nuxt-link class="linkCustom" :to="`/events/${elm.id}`">
                        {{ elm.desc }}
                      </nuxt-link>
                    </h4>

                    <div class="d-flex items-center mt-15">
                      <div class="icon-location text-16 mr-8"></div>
                      <div class="text-14">{{ elm.location }}</div>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Pagination from "../common/PaginationTwo";
import { events, categories, findEvent, tags } from "@/data/events";

const pageItems = ref(events);
const ddActive = ref(false);
const currentCategory = ref("All Categories");

watch(currentCategory, () => {
  if (currentCategory.value === "All Categories") {
    pageItems.value = events;
  } else {
    const filtered = events.filter(
      (elm) => elm.category === currentCategory.value,
    );
    pageItems.value = filtered;
  }
});

const setDdActive = (active) => {
  ddActive.value = active;
};

const setCurrentCategory = (category) => {
  currentCategory.value = category;
};
</script>
