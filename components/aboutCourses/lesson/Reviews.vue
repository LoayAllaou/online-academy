<template>
  <div class="mt-60 lg:mt-40">
    <div class="blogPost -comments">
      <div class="blogPost__content">
        <h2 class="text-20 fw-500">Reviews</h2>

        <ul class="comments__list mt-30">
          <li v-for="(elm, i) in slicedReviews" :key="i" class="comments__item">
            <div class="comments__item-inner md:direction-column">
              <div class="comments__img mr-20">
                <div
                  class="bg-image rounded-full js-lazy"
                  :style="{ backgroundImage: `url(${elm.avatarSrc})` }"
                ></div>
              </div>

              <div class="comments__body md:mt-15">
                <div class="comments__header">
                  <h4 class="text-17 fw-500 lh-15">
                    {{ elm.name }}
                    <span class="text-13 text-light-1 fw-400">{{
                      elm.date
                    }}</span>
                  </h4>

                  <div class="stars"></div>
                </div>

                <h5 class="text-15 fw-500 mt-15">{{ elm.title }}</h5>
                <div class="comments__text mt-10">
                  <p>{{ elm.comment }}</p>
                </div>

                <div class="comments__helpful mt-20">
                  <span class="text-13 text-purple-1"
                    >Was this review helpful?</span
                  >
                  <button class="button text-13 -sm -purple-1 text-white">
                    Yes
                  </button>
                  <button class="button text-13 -sm -light-7 text-purple-1">
                    No
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="respondForm pt-30">
      <h3 class="text-20 fw-500">Write a Review</h3>

      <div class="mt-30">
        <h4 class="text-16 fw-500">What is it like to Course?</h4>
        <div class="d-flex x-gap-10 pt-10">
          <div class="icon-star text-14 text-yellow-1"></div>
          <div class="icon-star text-14 text-yellow-1"></div>
          <div class="icon-star text-14 text-yellow-1"></div>
          <div class="icon-star text-14 text-yellow-1"></div>
          <div class="icon-star text-14 text-yellow-1"></div>
        </div>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="contact-form respondForm__form row y-gap-30 pt-30"
      >
        <div class="col-12">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
            >Review Title</label
          >
          <input
            type="text"
            required
            name="title"
            placeholder="Great Courses"
          />
        </div>
        <div class="col-12">
          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"
            >Review Content</label
          >
          <textarea name="comment" placeholder="Message" rows="8"></textarea>
        </div>
        <div class="col-12">
          <button
            type="submit"
            name="submit"
            id="submit"
            class="button -md -purple-1 text-white"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reviews } from "@/data/aboutcourses";

const slicedReviews = ref(reviews.slice(0, 2));

const handleSubmit = () => {
  // Your form submission logic here
};
</script>
