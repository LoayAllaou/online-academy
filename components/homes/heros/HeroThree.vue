<template>
  <section class="masthead -type-2">
    <div class="masthead__bg">
      <div
        :style="{ backgroundImage: 'url(/assets/img/home-3/masthead/bg.png)' }"
        class="bg-image js-lazy"
        data-bg="/assets/img/home-3/masthead/bg.png"
      ></div>
    </div>

    <div class="container">
      <div class="row y-gap-50 justify-center items-center">
        <div class="col-xl-6 col-lg-11" data-aos="fade-up" data-aos-delay="500">
          <div class="masthead__content">
            <div class="masthead__subtitle fw-500 text-green-1 text-17 lh-15">
              Start learning for free
            </div>
            <h1 class="masthead__title text-white mt-10">
              Explore your creativity with thousands of online classes.
            </h1>
            <div class="masthead__button mt-20">
              <nuxt-link
                to="/courses-list-1"
                class="button -md -white text-dark-1"
              >
                Find Courses
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="col-xl-5 col-lg-11" data-aos="fade-up" data-aos-delay="750">
          <div class="masthead-form">
            <h4
              class="masthead-form__title text-center text-20 lh-15 fw-500 mb-30"
            >
              Create Your <span class="text-purple-1">Free Account</span>
            </h4>

            <form @submit.prevent="handleSubmit">
              <div class="masthead-form__group">
                <label>Email Address</label>
                <input
                  v-model="email"
                  required
                  type="text"
                  placeholder="Your Email"
                />
              </div>

              <div class="masthead-form__group">
                <label>Password</label>
                <input
                  v-model="password"
                  required
                  type="text"
                  placeholder="Your Password"
                />
              </div>

              <div class="masthead-form__group">
                <button type="submit" class="button -md -purple-1 text-white">
                  Start Learning For Free
                </button>
              </div>

              <div class="masthead-form__desc">
                By continuing, you accept our Terms of Use, our Privacy Policy
                and that your data is stored in the USA. You confirm you are at
                least 16 years old (13 if you are an authorized Classrooms
                user).
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = () => {
  // Your form submission logic here
  router.push("/courses-list-1");
};
</script>
