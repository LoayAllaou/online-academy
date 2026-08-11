<template>
  <div class="header-cart bg-white -dark-bg-dark-1 rounded-8">
    <div
      class="px-30 pt-30 pb-10"
      :style="{ maxHeight: '300px', overflowY: 'scroll' }"
    >
      <div
        v-for="(elm, i) in pageItems"
        :key="i"
        class="row justify-between x-gap-40 pb-20"
      >
        <nuxt-link
          :style="{ textDecoration: 'none' }"
          :to="`/shop/${elm.id}`"
          class="col"
        >
          <div class="row x-gap-10 y-gap-10">
            <div class="col-auto">
              <nuxt-img width="80" height="80" :src="elm.image" alt="image" />
            </div>

            <div class="col">
              <div class="text-dark-1 lh-15">{{ elm.name }}</div>

              <div class="d-flex items-center mt-10">
                <div class="lh-12 fw-500 line-through text-light-1 mr-10">
                  ${{ elm.preDiscount }}
                </div>
                <div class="text-18 lh-12 fw-500 text-dark-1">
                  ${{ elm.price }}
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>

        <div class="col-auto" @click="() => handleRemoveCart(elm.id)">
          <button>
            <nuxt-img
              width="12"
              height="12"
              src="/assets/img/menus/close.svg"
              alt="icon"
            />
          </button>
        </div>
      </div>

      <div v-if="!pageItems.length" class="p-20 pb-30 text-18 text-dark-1">
        Your Shop Cart Is Empty
      </div>
    </div>

    <div class="px-30 pt-20 pb-30 border-top-light">
      <div class="d-flex justify-between">
        <div class="text-18 lh-12 text-dark-1 fw-500">Total:</div>
        <div class="text-18 lh-12 text-dark-1 fw-500">${{ totalPrice }}</div>
      </div>

      <div class="row x-gap-20 y-gap-10 pt-30">
        <nuxt-link
          v-if="pageItems.length"
          to="/shop-cart"
          :style="{ textDecoration: 'none' }"
          class="col-sm-6"
        >
          <button
            class="button py-20 -dark-1 text-white -dark-button-white col-12"
          >
            View Cart
          </button>
        </nuxt-link>
        <nuxt-link
          v-if="pageItems.length"
          to="/shop-checkout"
          :style="{ textDecoration: 'none' }"
          class="col-sm-6"
        >
          <button class="button py-20 -purple-1 text-white col-12">
            Checkout
          </button>
        </nuxt-link>

        <nuxt-link
          v-if="!pageItems.length"
          to="/shop-list"
          style='{ textDecoration: "none" }'
          class="col-12"
        >
          <button class="button py-20 -purple-1 text-white col-12">
            Continue Shoping
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { cartProducts } from "../../../composables/states";

const pageItems = ref([]);
const totalPrice = ref(0);

watch(cartProducts(), () => {
  totalPrice.value = cartProducts().value.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );
  pageItems.value = cartProducts().value;
});

const handleRemoveCart = (id) => {
  cartProducts().value = cartProducts().value.filter((elm) => elm.id != id);
};

onMounted(() => {
  totalPrice.value = cartProducts().value.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );
  pageItems.value = cartProducts().value;
});
</script>

<style lang="scss" scoped></style>
