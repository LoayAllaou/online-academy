<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Related Products</h2>
            <p class="sectionTitle__text">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>

      <div class="row y-gap-32 pt-60 sm:pt-40">
        <div
          v-for="(elm, i) in relatedProducts"
          :key="i"
          class="col-lg-3 col-sm-6"
        >
          <div class="productCard -type-1 text-center">
            <div class="productCard__image">
              <nuxt-img
                width="528"
                height="528"
                :src="elm.image"
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
                  style="text-decoration: none; color: inherit"
                >
                  {{ elm.name }}
                </nuxt-link>
              </h4>
              <div class="text-17 fw-500 text-purple-1 mt-15">
                ${{ elm.price }}
              </div>

              <div
                class="productCard__button d-inline-block"
                @click="() => addProductToCart(elm.id)"
              >
                <span
                  class="button -md -outline-purple-1 -rounded text-dark-1 mt-15"
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
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

import { productData } from "@/data/products";

const addProductToCart = () => {};
const isAddedToCartProducts = () => {};

const relatedProducts = ref(productData.slice(2, 6));
</script>
