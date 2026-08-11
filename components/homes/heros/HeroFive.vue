<template>
  <section class="masthead -type-4">
    <div class="container">
      <div class="row y-gap-50 justify-center items-center">
        <div class="col-xl-5 col-lg-6" data-aos="fade-up" data-aos-delay="500">
          <div class="masthead__content">
            <h1 class="masthead__title">
              Master the Skills to Drive your{{ " " }}
              <span class="text-purple-1 underline">Career</span>
            </h1>
            <p class="masthead__text pt-15">
              Free online courses from the world’s leading experts.
              <br class="md:d-none" />
              Join 17 million learners today
            </p>
            <div class="masthead__button row x-gap-20 y-gap-20 pt-30">
              <div class="col-auto">
                <nuxt-link
                to="/signup"
                  class="button -md -purple-1 -rounded text-white"
                >
                  Join For Free
                </nuxt-link>
              </div>
              <div class="col-auto">
                <nuxt-link
                to="/courses-list-1"
                  class="button -md -outline-dark-1 -rounded text-dark-1"
                >
                  Find Courses
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-delay="750">
          <div class="masthead__image">
            <nuxt-img
              width="1035"
              height="606"
              src="/assets/img/home-5/masthead/bg.svg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Add your component-specific styles here */
</style>
