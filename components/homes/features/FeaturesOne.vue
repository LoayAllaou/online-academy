<template>
  <section class="layout-pt-lg layout-pb-lg bg-beige-1">
    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
          <div class="about-content">
            <h2 class="about-content__title customSized" data-aos="fade-up">
              <span>Learn</span> new skills when and where you like.
            </h2>
            <p class="about-content__text" data-aos="fade-up">
              Use the list below to bring attention to your product’s key
              <br />
              differentiator.
            </p>
            <div class="y-gap-20 pt-30">
              <div
                v-for="(elm, i) in featureOne"
                :key="i"
                class="d-flex items-center"
                data-aos="fade-up"
              >
                <div class="about-content-list__icon">
                  <span
                    class="text-white"
                    style="font-size: 10px; font-weight: 300"
                    aria-hidden="true"
                  >
                    <font-awesome-icon :icon="faCheck" />
                  </span>
                </div>
                <div class="about-content-list__title">{{ elm.title }}</div>
              </div>
            </div>
            <div class="d-inline-block mt-30">
              <nuxt-link to="/signup" class="button -md -dark-1 text-white">
                Join Free
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 order-1 order-lg-2" data-aos="fade-up">
          <div class="about-image">
            <nuxt-img
              width="520"
              height="600"
              style="height: 100%; width: 100%"
              src="/assets/img/about/1.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted } from "vue";
import { featureOne } from "~/data/features";
</script>
