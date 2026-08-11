<template>
  <section class="page-header -type-1">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <h1 class="page-header__title">Shop Order</h1>
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
      <div class="row no-gutters justify-content-center">
        <div class="col-xl-8 col-lg-9 col-md-11">
          <div class="shopCompleted-header">
            <div class="icon">
              <FontAwesomeIcon :icon="faCheck" />
            </div>
            <h2 class="title">Your order is completed!</h2>
            <div class="subtitle">Thank you. Your order has been received.</div>
          </div>

          <div class="shopCompleted-info">
            <div class="row no-gutters y-gap-32">
              <div class="col-md-3 col-sm-6">
                <div class="shopCompleted-info__item">
                  <div class="subtitle">Order Number</div>
                  <div class="title text-purple-1 mt-5">13119</div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6">
                <div class="shopCompleted-info__item">
                  <div class="subtitle">Date</div>
                  <div class="title text-purple-1 mt-5">27/07/2021</div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6">
                <div class="shopCompleted-info__item">
                  <div class="subtitle">Total</div>
                  <div class="title text-purple-1 mt-5">$40.10</div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6">
                <div class="shopCompleted-info__item">
                  <div class="subtitle">Payment Method</div>
                  <div class="title text-purple-1 mt-5">
                    Direct Bank Transfer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="shopCompleted-footer bg-light-4 border-light rounded-8">
            <div class="shopCompleted-footer__wrap">
              <h5 class="title">Order details</h5>

              <div class="item">
                <span class="fw-500">Product</span>
                <span class="fw-500">Subtotal</span>
              </div>

              <div
                v-for="(elm, i) in pageItems"
                :key="i"
                :class="`item  ${i != 0 ? '-border-none' : ''} `"
              >
                <span class=""> {{ elm.name }} x {{ elm.quantity }} </span>
                <span class="">
                  ${{ (elm.price * elm.quantity).toFixed(2) }}
                </span>
              </div>

              <div class="item -border-none">
                <span class="fw-500">Subtotal</span>
                <span class="fw-500">${{ totalPrice.toFixed(2) }}</span>
              </div>

              <div class="item">
                <span class="fw-500">Shipping</span>
                <span class="fw-500">${{ shiping.toFixed(2) }}</span>
              </div>

              <div class="item">
                <span class="fw-500">Total</span>
                <span class="fw-500">
                  ${{ (totalPrice + shiping).toFixed(2) }}
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { cartProducts } from "../../composables/states";
const pageItems = ref([]);
const shiping =
  cartProducts().value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0) * 10;
const totalPrice = computed(() =>
  cartProducts().value.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  ),
);
onMounted(() => {
  pageItems.value = cartProducts().value;
});
</script>

<style lang="scss" scoped></style>
