<template>
  <section class="layout-pt-lg bg-purple-1">
    <div class="container">
      <div class="row y-gap-30 items-center">
        <div class="col-lg-5">
          <div class="bg-white rounded-16 px-30 py-30">
            <h3 class="text-20 lh-15 text-center">
              Create Your
              <span class="text-purple-1">Free Account</span>
            </h3>
            <form
              @submit.prevent="handleSubmit"
              class="contact-form row y-gap-30 pt-30"
            >
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Email Address
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="Email..."
                />
              </div>
              <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password..."
                />
              </div>
              <div class="col-12">
                <button class="button -md -purple-1 w-1/1 text-white">
                  Start Learning For Free
                </button>
                <div class="text-13 lh-17 mt-15">
                  By continuing, you accept our Terms of Use, our Privacy Policy
                  and that your data is stored in the USA. You confirm you are
                  at least 16 years old (13 if you are an authorized Classrooms
                  user).
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="offset-xl-2 col-xl-4 offset-lg-1 col-lg-5 col-md-9">
          <h2 class="text-30 lh-13 text-white">
            Register Now and Get a 70% Discount
          </h2>
          <p class="text-lg text-white mt-10">
            Get 100 Online Courses For Free
          </p>

          <div class="js-countdown">
            <div class="row x-gap-50 y-gap-30 pt-60 lg:pt-30">
              <div class="col-md-auto col-6">
                <div class="text-center text-white">
                  <div class="text-45 lh-12 fw-700 js-countdown-days">
                    {{ timerDays }}
                  </div>
                  <div class="mt-5">Days</div>
                </div>
              </div>

              <div class="col-md-auto col-6">
                <div class="text-center text-white">
                  <div class="text-45 lh-12 fw-700 js-countdown-hours">
                    {{ timerHours }}
                  </div>
                  <div class="mt-5">Hours</div>
                </div>
              </div>

              <div class="col-md-auto col-6">
                <div class="text-center text-white">
                  <div class="text-45 lh-12 fw-700 js-countdown-minutes">
                    {{ timerMinutes }}
                  </div>
                  <div class="mt-5">Minutes</div>
                </div>
              </div>

              <div class="col-md-auto col-6">
                <div class="text-center text-white">
                  <div class="text-45 lh-12 fw-700 js-countdown-seconds">
                    {{ timerSeconds }}
                  </div>
                  <div class="mt-5">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="svg-shape bg-light-4">
    <svg
      width="1925"
      height="261"
      viewBox="0 0 1925 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
        fill="#6440FB"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const timerDays = ref("00");
const timerHours = ref("00");
const timerMinutes = ref("00");
const timerSeconds = ref("00");
let interval;

const setTimer = () => {
  const countdownDate = new Date("Dec 30, 2023 00:00:00").getTime();
  interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval);
    } else {
      timerDays.value = days.toString().padStart(2, "0");
      timerHours.value = hours.toString().padStart(2, "0");
      timerMinutes.value = minutes.toString().padStart(2, "0");
      timerSeconds.value = seconds.toString().padStart(2, "0");
    }
  }, 1000);
};

onMounted(() => {
  setTimer();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

const handleSubmit = () => {
  // Handle form submission
};
</script>
