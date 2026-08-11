<template>
  <section class="page-header -type-1">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <h1 class="page-header__title">Shop List</h1>
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
      <div class="row x-gap-60">
        <div class="col-lg-3">
          <div class="sidebar -shop">
            <div class="sidebar__item">
              <div class="sidebar__search mb-30">
                <div class="search">
                  <form onSubmit="{handleSubmit}">
                    <button class="submit" type="submit">
                      <i class="icon" data-feather="search"></i>
                    </button>
                    <input
                      required
                      class="field"
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>

              <h5 class="sidebar__title">Categories</h5>

              <div class="sidebar-content -list">
                <a
                  v-for="(elm, i) in categories"
                  :key="i"
                  class="text-dark-1"
                  :href="elm.href"
                >
                  {{ elm.name }}
                </a>
              </div>
            </div>

            <div class="sidebar__item">
              <h5 class="sidebar__title">Filter by price</h5>

              <div class="sidebar-content -slider">
                <div class="js-price-rangeSlider">
                  <div class="px-5">
                    <RangeSlider />
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar__item">
              <h5 class="sidebar__title">Tags</h5>

              <div class="sidebar-content -tags">
                <div v-for="(elm, i) in tags" :key="i" class="sidebar-tag">
                  <a class="text-11 fw-500 text-dark-1" :href="elm.href">
                    {{ elm.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="row y-gap-10 justify-between items-center">
            <div class="col-auto">
              <div class="text-14">
                Showing <span class="fw-500 text-dark-1">250</span>{{ " " }}
                total results
              </div>
            </div>

            <div class="col-auto">
              <div class="d-flex items-center">
                <div class="fw-500 text-dark-1 mr-20">Sort by:</div>

                <div class="dropdown js-shop-dropdown">
                  <div class="d-flex items-center text-14">
                    <span class="js-dropdown-title"> Default Sorting </span>
                    <FontAwesomeIcon
                      class="icon size-15 ml-40"
                      :icon="faChevronDown"
                    />
                  </div>

                  <div class="dropdown__item">
                    <div class="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a
                          class="d-block decoration-none js-dropdown-link"
                          href="#"
                        >
                          Default Sorting
                        </a>
                      </div>
                      <div>
                        <a
                          class="d-block decoration-none js-dropdown-link"
                          href="#"
                        >
                          Clothing
                        </a>
                      </div>
                      <div>
                        <a
                          class="d-block decoration-none js-dropdown-link"
                          href="#"
                        >
                          Glasses
                        </a>
                      </div>
                      <div>
                        <a
                          class="d-block decoration-none js-dropdown-link"
                          href="#"
                        >
                          T-Shirts
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-30 pt-30">
            <div
              v-for="(elm, i) in productData"
              :key="i"
              class="col-lg-4 col-sm-6"
            >
              <div class="productCard -type-1 text-center">
                <div class="productCard__image">
                  <nuxt-img
                    :src="elm.image"
                    width="300"
                    height="300"
                    alt="Product image"
                  />

                  <div class="productCard__controls">
                    <span class="productCard__icon">
                      <FontAwesomeIcon :icon="faEye" />
                    </span>
                    <span class="productCard__icon">
                      <FontAwesomeIcon :icon="faHeart" />
                    </span>
                  </div>
                </div>

                <div class="productCard__content mt-20">
                  <div class="text-14 lh-1">
                    <span v-for="(itm, index) in elm.categories" :key="index">{{
                      `${itm}, `
                    }}</span>
                  </div>
                  <h4 class="text-17 fw-500 mt-15 linkCustom">
                    <nuxt-link
                      :to="`/shop/${elm.id}`"
                      class="no-underline text-dark-1"
                    >
                      {{ elm.name }}
                    </nuxt-link>
                  </h4>
                  <div class="text-17 fw-500 text-purple-1 mt-15">
                    ${{ elm.price.toFixed(2) }}
                  </div>

                  <div
                    class="productCard__button d-inline-block cursor"
                    @click="() => addProductToCart(elm.id)"
                  >
                    <span
                      class="button -md -outline-purple-1 text-dark-1 mt-15"
                    >
                      {{
                        isAddedToCartProducts(elm.id)
                          ? "Already Added"
                          : "Add To Cart"
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-center pt-60 lg:pt-40">
            <div class="col-auto">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { productData, tags, categories } from "@/data/products";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";

import Pagination from "../common/PaginationTwo";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "./RangeSlider.vue";
import {
  addProductToCart,
  isAddedToCartProducts,
} from "../../composables/states";
</script>

<style lang="scss" scoped></style>
