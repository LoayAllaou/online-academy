<template>
  <section class="page-header -type-1">
    <div class="container">
      <div class="page-header__content">
        <div class="row justify-center text-center">
          <div class="col-auto">
            <div>
              <h1 class="page-header__title">{{ $t("Course Checkout.title") }}</h1>
            </div>

            <div>
              <p class="page-header__text">
                {{ $t("Course Checkout.sub_title") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row y-gap-50">
        <div class="col-lg-8">
          <div class="shopCheckout-form">
            <form
              @submit.prevent="handleSubmit"
              class="contact-form row x-gap-30 y-gap-30"
            >
              <div class="col-12">
                <h5 class="text-20">{{ $t("Course Checkout.Billing Details") }}</h5>
              </div>
              <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {{ $t("Course Checkout.First Name") }}
                </label>
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First name"
                />
              </div>
              <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {{ $t("Course Checkout.Last Name") }}
                </label>
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                />
              </div>
              <!-- <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Company name
                </label>
                <input
                  required
                  type="text"
                  name="company"
                  placeholder="Company name"
                />
              </div> -->

              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Country / Region *
                </label>
                <select class="selectize wide js-selectize">
                  <option value="USA">USA</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Greece">Greece</option>
                </select>
              </div>

              <!-- <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  House number adn street name
                </label>
                <input
                  required
                  type="text"
                  name="address"
                  placeholder="House number adn street name"
                />
              </div> -->

              <!-- <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Apartment, suite, unit etc. (optional)
                </label>
                <input
                  required
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>

              <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Town / City *
                </label>
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="Town / City *"
                />
              </div>

              <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  State *
                </label>
                <input
                  required
                  type="text"
                  name="state"
                  placeholder="State *"
                />
              </div>

              <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  ZIP *
                </label>
                <input required type="text" name="zip" placeholder="ZIP *" />
              </div> -->

              <div class="col-sm-6">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {{ $t("Course Checkout.Phone") }} *
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  placeholder="Phone *"
                />
              </div>

              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {{ $t("Course Checkout.Email Address") }} *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address *"
                />
              </div>

              <div class="col-12">
                <h5 class="text-20 fw-500 pt-30">{{ $t("Course Checkout.Additional information") }}</h5>
              </div>
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  {{ $t("Course Checkout.Order Notes") }} ({{ $t("Course Checkout.Optional") }})
                </label>
                <textarea
                  required
                  name="notes"
                  id="form_notes"
                  rows="8"
                  placeholder="Order notes (optional)"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="">
            <div class="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
              <h5 class="px-30 text-20 fw-500">{{ $t("Course Checkout.Your Order") }}</h5>

              <div
                v-for="(elm, i) in pageItems"
                :key="i"
                :class="[
                  'd-flex justify-between',
                  i === 0 ? 'border-top-dark' : '',
                  'px-30',
                ]"
              >
                <div class="py-15 text-grey">
                  <nuxt-link class="linkCustom" :to="'/courses/' + elm.id">
                    {{ $i18n.locale.locale === 'ar' ? elm.data.titleAr : elm.data.titleEn }} x {{ elm.quantity }}
                  </nuxt-link>
                </div>
                <div class="py-15 text-grey">
                  ${{
                    (elm.data.price * elm.quantity).toFixed(2) || "Free"
                  }}
                </div>
              </div>

              <div class="d-flex justify-between border-top-dark px-30">
                <div class="py-15 fw-500">{{ $t("Course Checkout.Subtotal") }}</div>
                <div class="py-15 fw-500">${{ totalPrice.toFixed(2) }}</div>
              </div>

              <!-- <div class="d-flex justify-between border-top-dark px-30">
                <div class="py-15 fw-500 text-dark-1">{{ $t("Course Checkout.Shipping") }}</div>
                <div class="py-15 fw-500 text-dark-1">
                  ${{ shiping.toFixed(2) }}
                </div>
              </div> -->

              <div class="d-flex justify-between border-top-dark px-30">
                <div class="py-15 fw-500 text-dark-1">{{ $t("Course Checkout.Total") }}</div>
                <div class="py-15 fw-500 text-dark-1">
                  ${{ (totalPrice + shiping).toFixed(2) }}
                </div>
              </div>
            </div>

  <div class="py-30 px-30 bg-white mt-30 border-light rounded-8 bg-light-4">
    <h5 class="text-20 fw-500">{{ $t("Course Checkout.Payment") }}</h5>

    <div v-for="method in paymentMethods" :key="method.id" class="mt-30">
      <div class="form-radio d-flex items-center">
        <div class="radio">
          <input
            type="radio"
            name="payment"
            :value="method.id"
            v-model="selectedMethod"
            :checked="method.id === 'bank'"
          />
          <div class="radio__mark">
            <div class="radio__icon"></div>
          </div>
        </div>
        <h5 class="ml-15 text-15 lh-1 fw-500 text-dark-1">
          {{ method.name }}
        </h5>
      </div>

      <p v-if="method.description" class="ml-25 pl-5 mt-25">
        {{ method.description }}
      </p>
    </div>
  </div>

            <div class="mt-30">
              <button @click="placeOrder(enrolledIds)" class="button -md -purple-1 -accent col-12 -uppercase text-white">
                {{ $t("Course Checkout.Place Order") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { cartCourses } from "../../composables/states";
import { computed, watch } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";
const cart = useCartStore();

const router = useRouter();

const pageItems = computed(() => cart.cartCourses);

const shiping =
  cartCourses().value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0) * 10;
const totalPrice = computed(() =>
  cart.cartCourses.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.data.price  * currentValue.quantity,
    0,
  ),
);
const enrolledIds = computed(() =>
  cart.cartCourses.map((item) => item.enrollmentId),
);
onMounted(() => {
  pageItems.value = cartCourses().value;
  console.log('aaa',pageItems.value);
});

// mock JSON (can later be replaced with API response)
const paymentMethods = ref([
  {
    id: "bank",
    name: "Cash",
    description:
    "You can pay in cash or transfer the amout via authorized exchange offices, please contact us for more details.",
      //"Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
  },
  // {
  //   id: "check",
  //   name: "Check payments",
  //   description: null
  // },
  // {
  //   id: "cod",
  //   name: "Cash on delivery",
  //   description: null
  // },
  // {
  //   id: "paypal",
  //   name: "PayPal",
  //   description: null
  // }
]);

//add logic to handle payment method selection
const placeOrder = async ([id]) => {
  alert(`Order placed for course ID: ${id}`);
  //call placeOrder API here
  var response = await cart.placeOrder({ enrollmentIds: [id] });
  console.log("Order response:", response);
  debugger;
  if (response) {
    alert("Order placed successfully!");
    // Clear cart after successful order
    cart.clearCart();
    router.push('/');
  } else {
    alert("Failed to place order. Please try again.");
  }

  // Further logic to process the order can be added here
};
</script>

<style lang="scss" scoped></style>
