<template>
  <section class="section-bg pt-80 pb-80 lg:pt-60 lg:pb-60 mb-80">
    <div class="section-bg__item bg-light-7"></div>
    <div class="container">
      <div class="row y-gap-30 justify-between items-center">
        <div class="col-xl-5 col-lg-6 col-md-10">
          <div class="pl-60 lg:pl-0">
            <h2 class="text-30 lh-12">Download the App</h2>
            <p class="mt-30">
              New features. New appearance. No risk
              <br class="lg:d-none" />
              and credit card required.
            </p>
            <div class="app-content__buttons mt-30">
              <a href="#">
                <nuxt-img
                  width="210"
                  height="60"
                  style="height: 100%; width: 100%"
                  src="/assets/img/app/buttons/1.svg"
                  alt="button"
                />
              </a>
              <a href="#">
                <nuxt-img
                  width="210"
                  height="60"
                  style="height: 100%; width: 100%"
                  src="/assets/img/app/buttons/2.svg"
                  alt="button"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <nuxt-img
            width="624"
            height="338"
            style="height: 100%; width: 100%"
            src="/assets/img/home-6/app/1.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Add your component-specific styles here */
</style>
