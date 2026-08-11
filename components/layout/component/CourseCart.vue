<template>
  <div class="header-cart bg-white -dark-bg-dark-1 rounded-8">
    <div
      class="px-30 pt-30 pb-10"
      style="max-height: 300px; overflow-y: scroll"
    >
      <div v-if="pageItems.length">
        <div
          v-for="(course, index) in pageItems"
          :key="index"
          class="row justify-between x-gap-40 pb-20"
        >
          <nuxt-link
            :to="`/courses/${course.id}`"
            style="text-decoration: none"
            class="col"
          >
            <div class="row x-gap-10 y-gap-10">
              <div class="col-auto">
                <nuxt-img
                  :src="course.thumbnailUrl || '/assets/img/coursesCards/1.png'"
                  width="80"
                  height="80"
                  alt="image"
                />
              </div>

              <div class="col">
                <div class="text-dark-1 lh-15">
                  {{ $i18n.locale.locale === 'ar' ? course.data.titleAr : course.data.titleEn }}
                </div>

                <div class="d-flex items-center mt-10">
                  <template v-if="course.data.isPaid">
                    <div class="lh-12 fw-500 line-through text-light-1 mr-10">
                      ${{ course.data.price }}
                    </div>
                    <div class="text-18 lh-12 fw-500 text-dark-1">
                      ${{ course.data.price }}
                    </div>
                  </template>
                  <template v-else>
                    <div></div>
                    <div class="text-18 lh-12 fw-500 text-dark-1">Free</div>
                  </template>
                </div>
              </div>
            </div>
          </nuxt-link>

          <div class="col-auto" @click="() => handleRemoveCart(course.id)">
            <button>
              <nuxt-img
                src="/assets/img/menus/close.svg"
                width="12"
                height="12"
                alt="icon"
              />
            </button>
          </div>
        </div>
      </div>

      <div v-else class="p-20 pb-30 text-18 text-dark-1">
        {{ $t("Course Cart.Is Empty") }}
      </div>
    </div>

    <div class="px-30 pt-20 pb-30 border-top-light">
      <div class="d-flex justify-between">
        <div class="text-18 lh-12 text-dark-1 fw-500">{{ $t("Course Cart.Total") }}:</div>
        <div class="text-18 lh-12 text-dark-1 fw-500">${{ totalPrice }}</div>
      </div>

      <div class="row x-gap-20 y-gap-10 pt-30">
        <template v-if="pageItems.length">
          <nuxt-link
            to="/course-cart"
            style="text-decoration: none"
            class="col-sm-6"
          >
            <button
              class="button py-20 -dark-1 text-white -dark-button-white col-12"
            >
              {{ $t("Course Cart.View Cart") }}
            </button>
          </nuxt-link>
          <nuxt-link
            to="/course-checkout"
            style="text-decoration: none"
            class="col-sm-6"
          >
            <button class="button py-20 -purple-1 text-white col-12">
              {{ $t("Course Cart.Checkout") }}
            </button>
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
            to="/courses-list-1"
            style="text-decoration: none"
            class="col-12"
          >
            <button class="button py-20 -blue-1 text-white col-12">
              Continue Buying
            </button>
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { cartCourses, addCourseToCart } from "../../../composables/states";
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore";


const cart = useCartStore();


// reactive list of items
const pageItems = computed(() => cart.cartCourses);

const totalPrice = computed(() =>
  cart.cartCourses.reduce(
    (acc, current) =>
      acc + (current.data?.price ?? current.data?.price ?? 0) * current.quantity,
    0
  )
);

const handleRemoveCart = (id) => {
  cart.cartCourses = cart.cartCourses.filter((item) => item.id !== id);
};

// watch(cartCourses(), () => {
//   totalPrice.value = cartCourses().value.reduce(
//     (accumulator, currentValue) =>
//       accumulator + currentValue.discountedPrice * currentValue.quantity,
//     0,
//   );
//   pageItems.value = cartCourses().value;
// });

// const handleRemoveCart = (id) => {
//   cartCourses().value = cartCourses().value.filter((elm) => elm.id != id);
// };

onMounted(() => {
  totalPrice.value = cart.cartCourses.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.discountedPrice * currentValue.quantity,
    0,
  );
  pageItems.value = cart.cartCourses;
  console.log("Cart Courses:", cart.cartCourses);
});
</script>
