<template>
  <section class="cta -type-1 layout-pt-lg layout-pb-lg">
    <div data-parallax="0.6" class="cta__bg">
      <div
        data-parallax-target
        class="bg-image js-lazy"
        :style="{ backgroundImage: 'url(/assets/img/home-2/cta/bg.png)' }"
      ></div>
    </div>

    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <h2 class="text-45 md:text-30 text-white">
            Find the right learning path for you
          </h2>
        </div>

        <div class="w-100"></div>

        <div class="col-lg-4 col-md-8">
          <p class="text-white mt-15">
            Match your goals to our programs, explore your options and map out
            your path to success.
          </p>
        </div>

        <div class="w-100"></div>

        <div class="col-auto">
          <nuxt-link
            to="/courses-list-3"
            class="button -md -outline-white text-white mt-45 md:mt-20"
          >
            Get Started Now
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
