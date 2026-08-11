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
        <div class="tabs -pills js-tabs">
          <div
            class="tabs__controls d-flex flex-wrap y-gap-20 justify-center x-gap-10 js-tabs-controls"
          >
            <div
              v-for="(elm, i) in categories"
              :key="i"
              @click="() => setCurrentCategory(elm)"
            >
              <button
                :class="{ 'is-active': currentCategory === elm }"
                class="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                data-tab-target=".-tab-item-1"
                type="button"
              >
                {{ elm }}
              </button>
            </div>
          </div>

          <div class="tabs__content pt-40 js-tabs-content">
            <div class="tabs__pane -tab-item-1 is-active">
              <div class="row y-gap-30 pt-30">
                <div
                  v-for="(elm, i) in pageItems"
                  :key="i"
                  class="col-lg-4 col-md-6"
                >
                  <div class="eventCard -type-1">
                    <div class="eventCard__img">
                      <nuxt-img
                        width="510"
                        height="360"
                        :src="elm.imgSrc"
                        alt="image"
                      />
                    </div>

                    <div class="eventCard__bg bg-white">
                      <div class="eventCard__content y-gap-10">
                        <div class="eventCard__inner">
                          <h4 class="eventCard__title text-17 fw-500">
                            <nuxt-link
                              class="linkCustom"
                              :to="`/events/${elm.id}`"
                            >
                              {{ elm.desc }}
                            </nuxt-link>
                          </h4>
                          <div class="d-flex x-gap-15 pt-10">
                            <div class="d-flex items-center">
                              <div class="icon-calendar-2 text-16 mr-8"></div>
                              <div class="text-14">{{ elm.date }}</div>
                            </div>
                            <div class="d-flex items-center">
                              <div class="icon-location text-16 mr-8"></div>
                              <div class="text-14">{{ elm.location }}</div>
                            </div>
                          </div>
                        </div>

                        <div class="eventCard__button">
                          <nuxt-link
                            :to="`/events/${elm.id}`"
                            class="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </nuxt-link>
                        </div>
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";

import { events, categories } from "@/data/events";
import Pagination from "../common/PaginationTwo";

const currentCategory = ref("All Categories");
const pageItems = ref(events);

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

const setCurrentCategory = (category) => {
  currentCategory.value = category;
};
</script>
