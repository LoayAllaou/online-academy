<template>
  <section class="page-header -type-1">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <h1 class="page-header__tsetCurrentCategoryitle">Instructors</h1>
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
      <div class="row y-gap-20 items-center justify-between pb-30">
        <div class="col-auto">
          <div class="text-14 lh-12">
            Showing{{ " " }}
            <span class="text-dark-1 fw-500">{{ teamMembers.length }}</span
            >{{ " " }}
            total results
          </div>
        </div>

        <div class="col-auto">
          <div class="row x-gap-20 y-gap-20 items-center">
            <div class="col-auto">
              <form @submit.prevent="handleSubmit" class="search-field h-50">
                <input
                  v-model="searchQuery"
                  class="bg-light-3 pr-50"
                  type="text"
                  placeholder="Search Instructors"
                />
                <button type="submit">
                  <i class="icon-search text-20"></i>
                </button>
              </form>
            </div>
            <div class="col-auto">
              <div
                id="dd30button"
                class="dropdown js-dropdown js-category-active"
              >
                <div
                  @click="() => toggleDropdown('dd30button', 'dd30content')"
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                >
                  <span class="js-dropdown-title">
                    {{
                      currentCategory != "All Categories"
                        ? currentCategory
                        : "Category"
                    }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  id="dd30content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div v-for="(category, index) in categories" :key="index">
                      <div
                        @click="
                          () => {
                            currentCategory = category.label;
                            toggleDropdown('dd30button', 'dd30content');
                          }
                        "
                      >
                        <span
                          :class="{
                            'd-block js-dropdown-link cursor activeMenu':
                              currentCategory === category.label,
                          }"
                        >
                          {{ category.label }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div
                id="dd31button"
                class="dropdown js-dropdown js-category-active"
              >
                <div
                  @click="() => toggleDropdown('dd31button', 'dd31content')"
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                >
                  <span class="js-dropdown-title">
                    Sort by: {{ currentSortingOption }}
                  </span>
                  <i class="icon text-9 ml-40 icon-chevron-down"></i>
                </div>

                <div
                  id="dd31content"
                  class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div
                      v-for="(elm, i) in sortingOptions"
                      @key="i"
                      @click="
                        () => {
                          toggleDropdown('dd31button', 'dd31content');
                          currentSortingOption = elm;
                        }
                      "
                    >
                      <span
                        :class="`d-block js-dropdown-link cursor ${
                          currentSortingOption == elm ? 'activeMenu' : ''
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

      <div class="row y-gap-30">
        <div
          v-for="(teamMember, index) in teamMembers.slice(0, 8)"
          :key="index"
          class="col-lg-3 col-md-6"
        >
          <div class="teamCard -type-1">
            <div class="teamCard__image">
              <nuxt-img
                :src="teamMember.image"
                width="488"
                height="537"
                alt="image"
              />
            </div>
            <div class="teamCard__content">
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
                  <div class="text-13 lh-1 ml-8">{{ teamMember.rating }}</div>
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
  </section>
</template>

<script setup>
const categories = [
  { label: "All Categories" },
  { label: "Animation" },
  { label: "Design" },
  { label: "Illustration" },
  { label: "Business" },
];
import { teamMembers, sortingOptions } from "@/data/instractors";

import PaginationTwo from '@/components/common/PaginationTwo';

const currentCategory = ref("All Categories");
const currentSortingOption = ref("Default");
const handleSubmit = () => {};
const toggleDropdown = (btn, content) => {
  document.getElementById(btn).classList.toggle("-is-dd-active");
  document.getElementById(content).classList.toggle("-is-el-visible");
};

const searchQuery = ref("");
</script>

<style lang="scss" scoped></style>
