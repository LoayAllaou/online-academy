<template>
  <section class="layout-pt-lg layout-pb-md">
    <div class="container">
      <div class="row y-gap-30 items-center">
        <div class="col-xl-5 offset-xl-1 col-lg-6">
          <nuxt-img
            :width="550"
            :height="471"
            class="w-1/1"
            src="/assets/img/home-8/features/1.png"
            alt="image"
          />
        </div>

        <div class="col-xl-4 offset-xl-1 col-lg-6">
          <h3 class="text-24 lh-1">Become an Instructor</h3>
          <p class="mt-20">
            Join millions of people from around the world learning together.
            Online learning is as easy and natural as chatting.
          </p>
          <div class="d-inline-block mt-20">
            <nuxt-link
              to="/instructor-become"
              class="button -md -outline-purple-1 text-purple-1"
            >
              Apply Now
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Add your styles here */
</style>
