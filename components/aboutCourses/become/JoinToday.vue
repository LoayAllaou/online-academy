<template>
  <section class="layout-pt-lg layout-pb-md bg-light-4">
    <div class="container">
      <div class="row y-gap-50 justify-between items-center">
        <div class="col-lg-7 pr-60">
          <nuxt-img
            :width="645"
            :height="660"
            src="/assets/img/become-ins/1.png"
            alt="image"
          />
        </div>

        <div class="col-lg-5">
          <h2 class="text-45 lh-15">
            Become an Instructor <span class="text-purple-1">Today</span>
          </h2>
          <p class="text-dark-1 mt-25">
            Use the list below to bring attention to your product’s key
            <br />
            differentiator.
          </p>
          <div class="d-inline-block mt-30">
            <nuxt-link
              to="/instructor-become"
              class="button -md -dark-1 text-white"
            >
              Join Our Team
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
