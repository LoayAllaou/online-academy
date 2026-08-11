<template>
  <div>
    <section class="page-header -type-1">
      <div class="container">
        <div class="page-header__content">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <div>
                <h1 class="page-header__title">{{ $t("Course Cart.title") }}</h1>
              </div>

              <div>
                <p class="page-header__text">
                  {{ $t("Course Cart.sub_title") }}                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-lg">
      <div class="container">
        <div class="row justify-end">
          <div class="col-12">
            <div class="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
              <div class="row justify-between">
                <div class="col-md-4">
                  <div class="fw-500 text-purple-1">{{ $t("Course Cart.Course") }}</div>
                </div>
                <div class="col-md-2">
                  <div class="fw-500 text-purple-1">{{ $t("Course Cart.Price") }}</div>
                </div>
                <!-- <div class="col-md-2">
                  <div class="fw-500 text-purple-1">Quantity</div>
                </div>
                <div class="col-md-2">
                  <div class="fw-500 text-purple-1">Subtotal</div>
                </div> -->
                <div class="col-md-1">
                  <div class="d-flex justify-end">
                    <div class="fw-500 text-purple-1">{{ $t("Course Cart.Remove") }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-30 pr-60 md:px-0">
              <div
                v-for="(elm, i) in pageItems"
                :key="i"
                class="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
              >
                <div class="col-md-4">
                  <div class="d-flex items-center">
                    <div>
                      <div
                        class="size-100 bg-image rounded-8 js-lazy"
                        :style="{ backgroundImage: `url(${elm.data.thumbnailUrl})` }"
                      ></div>
                    </div>
                    <div class="fw-500 text-dark-1 ml-30">
                      <nuxt-link :to="`/courses/${elm.id}`" class="linkCustom">
                        {{ $i18n.locale.locale === 'ar' ? elm.data.titleAr : elm.data.titleEn }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>

                <div class="col-md-2 md:mt-15">
                  <div>
                    <div
                      class="shopCart-products__title d-none md:d-block mb-10"
                    >
                      {{ $t("Course Cart.Price") }}
                    </div>
                    <p>{{ elm.data.isPaid ? `$${elm.data.price}` : "Free" }}</p>
                  </div>
                </div>

                <!-- <div class="col-md-2">
                  <div>
                    <div
                      class="shopCart-products__title d-none md:d-block mb-10"
                    >
                      Quantity
                    </div>

                    <div class="input-counter md:mt-20 js-input-counter">
                      <input
                        required
                        class="input-counter__counter"
                        type="number"
                        placeholder="value..."
                        v-model="elm.quantity"
                      />

                      <div class="input-counter__controls">
                        <button
                          class="input-counter__up js-down"
                          @click="() => handleDecrease(i)"
                        >
                          <FontAwesomeIcon :icon="faMinus" />
                        </button>

                        <button
                          class="input-counter__down js-up"
                          @click="() => handleIncrease(i)"
                        >
                          <FontAwesomeIcon :icon="faPlus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-1">
                  <div>
                    <div
                      class="shopCart-products__title d-none md:d-block mb-10"
                    >
                      Subtotal
                    </div>
                    <p>{{ (elm.quantity * elm.discountedPrice).toFixed(2) }}</p>
                  </div>
                </div> -->

                <div class="col-md-1">
                  <div
                    class="md:d-none d-flex justify-end"
                    @click="() => handleRemoveCart(elm.id)"
                  >
                    <FontAwesomeIcon :icon="faX" />
                  </div>
                </div>
              </div>
            </div>

            <div class="shopCart-footer px-16 mt-30">
              <div
                v-if="pageItems.length > 0"
                class="row justify-between y-gap-30"
              >
                <div class="col-xl-5">
                  <form @submit.prevent="handleSubmit" class="">
                    <div class="d-flex justify-between border-dark">
                        <input
                        required
                        class="rounded-8 px-25 py-20"
                        type="text"
                        :placeholder="$t('Course Cart.Coupon Code')"
                      />
                      <button class="text-black fw-500" type="submit">
                        {{ $t("Course Cart.Apply coupon") }}
                      </button>
                    </div>
                  </form>
                </div>

                <div class="col-auto">
                  <div class="shopCart-footer__item">
                    <button class="button -md -purple-3 text-purple-1">
                      Update cart
                    </button>
                  </div>
                </div>
              </div>

              <div v-else class="row justify-center pt-60 lg:pt-40">
                <div class="col-auto">
                  <nuxt-link
                    to="/courses-list-1"
                    class="button -md -outline-purple-1 text-purple-1"
                  >
                    {{ $t("Course Cart.Buy Course") }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-5 layout-pt-lg">
            <div class="py-30 bg-light-4 rounded-8 border-light">
              <h5 class="px-30 text-20 fw-500">{{ $t("Course Cart.Cart Totals") }}</h5>

              <!-- <div class="d-flex justify-between px-30 item mt-25">
                <div class="py-15 fw-500 text-dark-1">Subtotal</div>
                <div class="py-15 fw-500 text-dark-1">
                  ${{ totalPrice.toFixed(2) }}
                </div>
              </div> -->

              <div class="d-flex justify-between px-30 item border-top-dark">
                <div class="pt-15 fw-500 text-dark-1">{{ $t("Course Cart.Total") }}</div>
                <div class="pt-15 fw-500 text-dark-1">
                  ${{ totalPrice.toFixed(2) }}
                </div>
              </div>
            </div>

            <nuxt-link
            to="/course-checkout"
              class="button -md -purple-1 text-white col-12 mt-30"
            >
              {{ $t("Course Cart.Proceed to checkout") }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";

import { cartCourses } from "../../composables/states";
import { computed, watch } from "vue";
import { useCartStore } from "@/stores/cartStore";
const cart = useCartStore();

//const pageItems = ref([]);

// reactive list of items
const pageItems = computed(() => cart.cartCourses);

const totalPrice = computed(() =>
  cart.cartCourses.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.data.price * currentValue.quantity,
    0,
  ),
);

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic
};

const handleIncrease = (index) => {
  const item = cartCourses().value[index];
  item.quantity += 1;
  const items = [...cartCourses().value];
  items[index] = item;
  cartCourses().value = items;
};

const handleDecrease = (index) => {
  const item = cartCourses().value[index];
  if (item.quantity > 1) {
    item.quantity -= 1;
  }
  const items = [...cartCourses().value];
  items[index] = item;
  cartCourses().value = items;
};

// const handleRemoveCart = (id) => {
//   cartCourses().value = cartCourses().value.filter((elm) => elm.id !== id);
// };

const handleRemoveCart = (id) => cart.removeCourse(id);


watch(cartCourses(), () => {
  pageItems.value = cartCourses().value;
});
onMounted(() => {
  pageItems.value = cartCourses().value;
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
