<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle">
            <h2 class="sectionTitle__title">Simple Pricing</h2>
            <p class="sectionTitle__text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div class="d-flex justify-center items-center pt-60 lg:pt-40">
            <div class="text-14 text-dark-1">Monthly</div>
            <div class="form-switch px-20">
              <div class="switch" data-switch=".js-switch-content">
                <input v-model="isYearly" type="checkbox" />
                <span class="switch__slider"></span>
              </div>
            </div>
            <div class="text-14 text-dark-1">
              Annually
              <span class="text-purple-1">Save 30%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 justify-between pt-60 lg:pt-40">
        <div
          v-for="(pricing, index) in pricingData"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="priceCard -type-1 rounded-16 bg-white shadow-2">
            <div class="priceCard__content py-45 px-60 xl:px-40 text-center">
              <div class="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                {{ pricing.type }}
              </div>
              <div
                class="priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15"
              >
                {{
                  isYearly
                    ? (pricing.price * 12 * 0.7).toFixed(2)
                    : pricing.price
                }}
              </div>
              <div class="priceCard__period">
                {{ isYearly ? "per year" : pricing.period }}
              </div>
              <nuxt-img
                :src="`/assets/img/pricing/${index + 1}.svg`"
                width="90"
                height="90"
                class="mt-30"
                alt="icon"
              />
              <div class="priceCard__text text-left pr-15 mt-40">
                Standard listing submission, active for 30 days
              </div>

              <div class="text-left y-gap-15 mt-35">
                <div v-for="(feature, i) in pricing.features" :key="i">
                  <i
                    class="text-purple-1 fa fa-check pr-8"
                    style="strokewidth: 2"
                    data-feather="check"
                  ></i>
                  {{ feature }}
                </div>
              </div>

              <div class="d-inline-block mt-30">
                <nuxt-link
                  class="button px-40 py-20 fw-500 -purple-3 text-purple-1"
                  to="/courses-list-1"
                >
                  Get Started Now
                </nuxt-link>
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
import { pricingData } from "../../data/pricing";

const isYearly = ref(false);
</script>
