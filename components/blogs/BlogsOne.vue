<template>
  <div>
    <section class="page-header -type-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">Latest News</h1>
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

    <section class="layout-pt-sm layout-pb-lg">
      <div class="container">
        <div class="tabs -pills js-tabs">
          <div
            class="tabs__controls d-flex justify-center flex-wrap y-gap-20 x-gap-10 js-tabs-controls"
          >
            <div
              v-for="(elm, i) in categories"
              :key="i"
              @click="setCurrentCategory(elm)"
            >
              <button
                :class="`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                  currentCategory === elm ? 'is-active' : ''
                }`"
                data-tab-target=".-tab-item-1"
                type="button"
              >
                {{ elm }}
              </button>
            </div>
          </div>

          <div class="tabs__content pt-40 js-tabs-content">
            <div class="tabs__pane -tab-item-1 is-active">
              <div class="row y-gap-30">
                <div
                  v-for="(elm, i) in pageItems"
                  :key="i"
                  class="col-lg-4 col-md-6"
                >
                  <div class="blogCard -type-1">
                    <div class="blogCard__image">
                      <nuxt-img
                        width="530"
                        height="450"
                        class="w-1/1 rounded-8"
                        :src="elm.imageSrc"
                        alt="image"
                      />
                    </div>
                    <div class="blogCard__content mt-20">
                      <div class="blogCard__category">
                        {{ elm.category.toUpperCase() }}
                      </div>
                      <h4 class="blogCard__title text-20 lh-15 fw-500 mt-5">
                        <nuxt-link class="linkCustom" :to="`/blogs/${elm.id}`">
                          {{ elm.title }}
                        </nuxt-link>
                      </h4>
                      <div class="blogCard__date text-14 mt-5">
                        {{ elm.date }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row justify-center pt-60 lg:pt-40">
                <div class="col-auto">
                  <div class="pagination -buttons">
                    <button class="pagination__button -prev">
                      <i class="icon icon-chevron-left"></i>
                    </button>
                    <div class="pagination__count">
                      <a href="#">1</a>
                      <a class="-count-is-active" href="#">2</a>
                      <a href="#">3</a>
                      <span>...</span>
                      <a href="#">67</a>
                    </div>
                    <button class="pagination__button -next">
                      <i class="icon icon-chevron-right"></i>
                    </button>
                  </div>
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
import { ref, onMounted, watch } from "vue";
import { blogs, categories } from "@/data/blog";

const pageItems = ref([]);
const currentCategory = ref("All Categories");
const setCurrentCategory = (val) => {
  currentCategory.value = val;
};
const updatePageItems = () => {
  if (currentCategory.value === "All Categories") {
    pageItems.value = blogs;
  } else {
    const filtered = blogs.filter(
      (elm) => elm.category === currentCategory.value,
    );
    pageItems.value = filtered;
  }
};
onMounted(() => {
  updatePageItems();
});

watch(currentCategory, () => {
  updatePageItems();
});
</script>
